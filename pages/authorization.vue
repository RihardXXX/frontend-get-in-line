<template>
  <UContainer v-if="isFirst" class="pb-20 h-full font-semibold bg-slate-50">
    <h1 class="text-center text-6xl pt-4">
      Авторизация
    </h1>

    <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmitLogin">
      <UFormGroup label="Почта" name="email" :class="$style.uform">
        <UInput v-model="state.email" :class="$style.field" placeholder="почта" />
      </UFormGroup>

      <UFormGroup label="Пароль" name="password" :class="$style.uform">
        <UInput
          v-model="state.password"
          type="password"
          :class="$style.field"
          placeholder="пароль"
        />
      </UFormGroup>

      <UButton
        type="submit"
        size="xl"
        :loading="isLoading"
        block
        class="p-10 text-5xl !bg-slate-800 !text-slate-50 !mt-10"
      >
        войти
      </UButton>
    </UForm>
  </UContainer>

  <UContainer v-if="isSecondary" class="pb-20 h-full font-semibold bg-slate-50 bg-slate-50">
    <h1 class="text-center text-6xl pt-4">
      Ввод одноразового пароля
    </h1>
    <p class="mt-10 mb-20 text-3xl text-center">
      {{ successMessage }}
    </p>

    <UForm :schema="schemaOtp" :state="stateOtp" class="space-y-4" @submit="onSubmitOtp">
      <UFormGroup label="одноразовый пароль с почты" name="otpPassword" :class="$style.uform">
        <UInput
          v-model="stateOtp.otpPassword"
          :class="$style.field"
          placeholder="одноразовый пароль с почты"
        />
      </UFormGroup>

      <UButton
        type="submit"
        size="xl"
        :loading="isLoading"
        block
        class="p-10 text-5xl !bg-slate-800 !text-slate-50 !mt-10"
      >
        отправить
      </UButton>
    </UForm>
  </UContainer>

  <UContainer v-if="isLast" class="pb-20 h-full font-semibold bg-slate-50 bg-slate-50">
    <UButton
      type="submit"
      size="xl"
      :loading="isLoading"
      block
      class="p-8 text-3xl !bg-slate-800 !text-slate-50 mt-8"
    >
      вернутся на главную страницу
    </UButton>
  </UContainer>
</template>

<script lang="ts" setup>
import { object, string, type InferType } from 'yup'
import type { FormSubmitEvent } from '#ui/types'
import { useUrls } from '~/composables/useUrls'
import { useFooterNotAuthStore } from '~/store/footer-not-auth'
import { useChangeLayouts } from '~/store/change-layouts'
import { useAuthInfo } from '~/store/auth-info'

// смена шаблона
const { changeLayout } = useChangeLayouts()

// Получение данных о пользователе
const { fetchUserInfo } = useAuthInfo()

// disabled footer
const { setDisabledTab } = useFooterNotAuthStore()

// для выдачи сообщений об ошибке
const toast = useToast()

const textRequired = 'поле является обязательным'

// схема валидации в библиотеке при авторизации
const schema = object({
  email: string().trim().email('неверный формат почты').required(textRequired),
  password: string().min(8, 'пароль должен состоять из более 8 символов').required(textRequired)
})

type Schema = InferType<typeof schema>

const state = reactive({
  email: undefined,
  password: undefined
})

// ======
// схема валидации в библиотеке при otp пароле
const schemaOtp = object({
  otpPassword: string().trim().required(textRequired)
})

type SchemaOtp = InferType<typeof schemaOtp>

const stateOtp = reactive({
  otpPassword: undefined
})

const isLoading = ref(false)

const step = ref<1 | 2 | 3>(1)

// шаги авторизации
const isFirst = computed<boolean>(() => step.value === 1)
const isSecondary = computed<boolean>(() => step.value === 2)
const isLast = computed<boolean>(() => step.value === 3)

// пути для запросов
const { authUrls } = useUrls()

// тест при успешной регистрации
const successMessage = ref('')

interface IMessage {
  message: string
}

interface IErrorResponse extends Error {
  data: IMessage
}

async function onSubmitLogin (event: FormSubmitEvent<Schema>) {
  const data = toRaw(event.data)

  const url = authUrls.value.login
  isLoading.value = true
  setDisabledTab(true)

  try {
    const res = await $fetch<{ message: string }>(url, {
      method: 'POST',
      body: {
        email: data.email,
        password: data.password
      }
    })

    console.log('res: ', res)
    // для показа уведомления
    successMessage.value = res.message
    step.value = 2
  } catch (e) {
    toast.add({
      title: 'Внимание',
      description: (e as IErrorResponse).data.message,
      icon: 'i-octicon-desktop-download-24',
      timeout: 5000
    })
  } finally {
    isLoading.value = false
    setDisabledTab(false)
  }
}

async function onSubmitOtp (event: FormSubmitEvent<SchemaOtp>) {
  const data = toRaw(event.data)

  const url = authUrls.value.verify
  isLoading.value = true
  setDisabledTab(true)

  try {
    const res = await $fetch<{ message: string }>(url, {
      method: 'POST',
      body: {
        email: state.email,
        otp: data.otpPassword
      }
    })

    console.log('res: ', res)
    // для показа уведомления
    successMessage.value = res.message
    step.value = 3
    await fetchUserInfo()
  } catch (e) {
    toast.add({
      title: 'Внимание',
      description: (e as IErrorResponse).data.message,
      icon: 'i-octicon-desktop-download-24',
      timeout: 5000
    })
  } finally {
    isLoading.value = false
    setDisabledTab(false)
  }
}
</script>

<style lang="scss" module>
.field {
  background: #94a3b8;

  input {
    height: 4rem;
    background-color: #e2e8f0 !important;
    color: #020617 !important;
    font-size: 2rem;
  }
}

.uform {
  label {
    color: #020617 !important;
    font-size: 1.4rem;
  }

  p {
    font-size: 1.4rem;
  }
}
</style>
