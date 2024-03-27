<template>
  <UContainer class="pb-20 h-full font-semibold bg-slate-50">
    <h1 class="text-center text-6xl pt-4">
      Регистрация
    </h1>

    <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
      <UFormGroup label="Имя пользователя" name="name">
        <UInput v-model="state.name" :class="[$style.field, 'bg-slate-400']" />
      </UFormGroup>

      <UFormGroup label="Почта пользователя" name="email">
        <UInput v-model="state.email" />
      </UFormGroup>

      <UFormGroup label="Телефон пользователя" name="phone">
        <UInput v-model="state.phone" />
      </UFormGroup>

      <UFormGroup label="Пароль пользователя" name="password">
        <UInput v-model="state.password" type="password" />
      </UFormGroup>

      <UButton type="submit">
        Submit
      </UButton>
    </UForm>
  </UContainer>
</template>

<script lang="ts" setup>
import { object, string, type InferType } from 'yup'
import type { FormSubmitEvent } from '#ui/types'

//  name, email, password, phone

const schema = object({
  email: string().email('Invalid email').required('Required'),
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

  label {
    color: red;
  }

  input {
    height: 4rem;
    background-color: #e2e8f0;
  }
}
</style>
