<template>
  <UContainer v-if="!notificationSuccess" class="pb-20 h-full font-semibold bg-slate-50">
    <h1 class="text-center text-6xl pt-4">
      Регистрация
    </h1>

    <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
      <UFormGroup label="Имя" name="name" :class="$style.uform">
        <UInput v-model="state.name" :class="$style.field" placeholder="имя" />
      </UFormGroup>

      <UFormGroup label="Почта" name="email" :class="$style.uform">
        <UInput v-model="state.email" :class="$style.field" placeholder="почта" />
      </UFormGroup>

      <UFormGroup label="Телефон" name="phone" :class="$style.uform">
        <UInput v-model="state.phone" :class="$style.field" placeholder="телефон" />
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
        class="p-10 text-5xl !bg-slate-800 !text-slate-50"
      >
        регистрация
      </UButton>
    </UForm>
  </UContainer>

  <UContainer v-else class="pb-20 h-full font-semibold bg-slate-50 bg-slate-50">
    <h1 class="text-center text-6xl pt-4">
      Регистрация прошла успешно
    </h1>
    <p class="mt-10 text-3xl text-center">
      {{ successMessage }}
    </p>

    <UButton
      type="submit"
      size="xl"
      :loading="isLoading"
      block
      class="p-8 text-3xl !bg-slate-800 !text-slate-50 mt-8"
      @click="backToHome"
    >
      вернутся на главную страницу
    </UButton>
  </UContainer>
</template>

<script lang="ts" setup>
import { object, string, type InferType } from 'yup'
import type { FormSubmitEvent } from '#ui/types'
import { useFooterNotAuthStore } from '~/store/footer-not-auth'
import { useUrls } from '~/composables/useUrls'

// переключение нижнего активного элемента футера
const { changeTabs, setDisabledTab } = useFooterNotAuthStore()

// для выдачи сообщений об ошибке
const toast = useToast()

//  name, email, password, phone

const textRequired = 'поле является обязательным'

// схема валидации в библиотеке
const schema = object({
  name: string().trim().min(5, 'Ваше имя должно быть больше 5 символов').required(textRequired),
  email: string().trim().email('неверный формат почты').required(textRequired),
  phone: string().nullable(),
  password: string().min(8, 'пароль должен состоять из более 8 символов').required(textRequired)
})

type Schema = InferType<typeof schema>

const state = reactive({
  name: undefined,
  email: undefined,
  phone: undefined,
  password: undefined
})

const isLoading = ref(false)
const notificationSuccess = ref<boolean>(false)

// пути для запросов
const { authUrls } = useUrls()

// тест при успешной регистрации
const successMessage = ref('')

async function onSubmit (event: FormSubmitEvent<Schema>) {
  const data = toRaw(event.data)

  const url = authUrls.value.registration
  isLoading.value = true
  setDisabledTab(true)

  try {
    const res = await $fetch<{ message: string }>(url, {
      method: 'POST',
      body: {
        name: data.name,
        email: data.email,
        password: data.password,
        phone: data.password
      }
    })

    console.log('res: ', res)
    // для показа уведомления
    notificationSuccess.value = true
    successMessage.value = res.message
  } catch (e) {
    toast.add({
      title: 'Внимание',
      description: e.data.message,
      icon: 'i-octicon-desktop-download-24',
      timeout: 5000
    })
  } finally {
    isLoading.value = false
    setDisabledTab(false)
  }
}

async function backToHome () {
  // через пинию вызывать таб
  await changeTabs(0)
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
