<template>
  <UDashboardCard
    :title="title"
    :description="description"
    icon="i-heroicons-face-smile"
    :ui="uiDashboard"
  >
  </UDashboardCard>

  <UNavigationAccordion
    :links="links"
    multiple
    :default-open="false"
    :ui="uiNavigationAccordion"
    :class="$style.wrapper"
  />
</template>

<script setup lang="ts">
// ===== Dashboard =====
const uiDashboard = {
  divide: 'rounded-none',
  header: {
    base: 'flex flex-wrap items-center justify-between gap-2 text-4xl text-center',
    inner: 'flex items-start gap-2',
    padding: 'px-4 py-4 sm:px-6'
  },
  title: 'text-gray-900 dark:text-white font-semibold',
  description: 'mt-4 ml-2 mr-2 text-gray-500 dark:text-gray-400 text-2xl text-center',
  links: 'flex flex-wrap items-center gap-1.5',
  icon: {
    wrapper: 'inline-flex',
    base: 'w-20 h-40 flex-shrink-0 text-gray-900 dark:text-white'
  }
}

const title = 'Лучшее приложение для назначения встреч'
const description =
  'Вы перестанете опаздывать на встречи, а Ваш партнер будет рад, что вы пришли вовремя'
// ======================

const links = [
  {
    label: '1. Пройдите регистрацию или авторизуйтесь',
    icon: 'i-heroicons-arrow-right-start-on-rectangle-16-solid',
    children: [
      {
        label:
          '1.1. Если вы впервые в приложении то нажмите на кнопку регистрации внизу и пройдите регистрацию'
      },
      {
        label: '1.2. Если вы уже зарегистрированы то нажмите на кнопку авторизация и авторизуйтесь'
      },
      {
        label:
          '1.3. Обращаем Ваше внимания для сохранения и защиты ваших персональных данных, в приложении работает двухфакторная авторизация'
      }
    ]
  },
  {
    label: 'Найдите пользователя в поиске или по QRCODE',
    icon: 'i-heroicons-finger-print-20-solid',
    children: [
      {
        label: 'Introduction'
      },
      {
        label: 'Installation'
      }
    ]
  },
  {
    label: 'Выберите дату и время встречи',
    icon: 'i-heroicons-clock',
    children: [
      {
        label: 'Introduction'
      },
      {
        label: 'Installation'
      }
    ]
  },
  {
    label: 'Отправьте запрос на встречу партнеру',
    icon: 'i-heroicons-pencil-square-solid',
    children: [
      {
        label: 'Introduction'
      },
      {
        label: 'Installation'
      }
    ]
  },
  {
    label: 'Дождитесь ответа-одобрения от партнера',
    icon: 'i-heroicons-hand-thumb-up',
    children: [
      {
        label: 'Introduction'
      },
      {
        label: 'Installation'
      }
    ]
  }
]

const uiNavigationAccordion = {
  wrapper: 'mt-8 p-1 text-slate-900',
  container: 'space-y-3',
  item: {
    padding: '',
    color: 'text-inherit dark:text-inherit'
  },
  button: {
    base: 'flex items-center gap-1.5 group w-full focus-visible:outline-primary text-xl',
    active: 'text-primary border-current',
    inactive: 'border-transparent',
    level: 'border-l-2 -ml-px pl-3.5',
    icon: {
      base: 'w-20 h-20 flex-shrink-0'
    },
    trailingIcon: {
      name: 'i-heroicons-chevron-down-20-solid',
      base: 'w-5 h-5 ms-auto transform transition-transform duration-200 flex-shrink-0 mr-1.5',
      active: 'text-gray-100 dark:text-gray-100 text-slate-900',
      inactive:
        'text-gray-500 dark:text-gray-800 group-hover:text-gray-700 dark:group-hover:text-gray-200 -rotate-90'
    },
    label: 'text-3xl font-semibold truncate text-slate-950 text-wrap'
  },
  tree: 'border-l-2 border-gray-200 dark:border-gray-800 text-slate-900'
}
</script>

<style lang="scss" module>
.wrapper {
  nav {
    button {
      span {
        color: #1e293b;
        font-size: 1.4rem;
        text-wrap: wrap;
        font-weight: 500;
        opacity: 0.8;
      }
    }
  }
}
</style>
