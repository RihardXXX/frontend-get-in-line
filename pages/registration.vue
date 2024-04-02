<template>
  <UContainer class="pb-20 h-full font-semibold bg-slate-50">
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

      <UButton type="submit" size="xl">
        Submit
      </UButton>
    </UForm>
  </UContainer>
</template>

<script lang="ts" setup>
import { object, string, type InferType, number } from 'yup'
import type { FormSubmitEvent } from '#ui/types'

//  name, email, password, phone

const schema = object({
  name: string().trim().min(5, 'Ваше имя должно быть больше 5 символов').required(),
  email: string().trim().email('Invalid email').required('Required'),
  phone: number().required().positive().integer(),
  password: string().min(8, 'Must be at least 8 characters').required('Required')
})

type Schema = InferType<typeof schema>

const state = reactive({
  name: undefined,
  email: undefined,
  phone: undefined,
  password: undefined
})

async function onSubmit (event: FormSubmitEvent<Schema>) {
  // Do something with event.data
  console.log(event.data)
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
