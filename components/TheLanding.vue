<template>
  <div class="pb-20">
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
      :default-open="true"
      :ui="uiNavigationAccordion"
      :class="$style.wrapper"
    />
  </div>
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

// ===== UNavigationAccordion ====
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
    label: '2. Найдите пользователя в поиске или по QRCODE',
    icon: 'i-heroicons-finger-print-20-solid',
    children: [
      {
        label: '2.1. Перейдите в раздел поиска после регистрации'
      },
      {
        label: '2.2. Найдите пользователя вводя имя или по QRCODE'
      },
      {
        label: '2.3. Перейдите на его страницу'
      }
    ]
  },
  {
    label: '3. Выберите дату и время встречи',
    icon: 'i-heroicons-clock',
    children: [
      {
        label: '3.1. Выберите дату и время, в которое хотите явится к пользователю'
      },
      {
        label: '3.2. Отправьте запрос на встречу'
      }
    ]
  },
  {
    label: '4. Дождитесь ответа',
    icon: 'i-heroicons-pencil-square-solid',
    children: [
      {
        label: '4.1. Проверьте статус встречи, одобрена ли она со стороны пользователя'
      }
    ]
  },
  {
    label: '5. Дождитесь ответа-одобрения от партнера',
    icon: 'i-heroicons-hand-thumb-up',
    children: [
      {
        label: '5.1. После одобрения встречи от партнера, можете смело идти на встречу'
      },
      {
        label: '5.2. При встрече можете показать партнеру QRCODE встречи'
      }
    ]
  }
]

const uiNavigationAccordion = {
  wrapper: 'mt-8 p-2 text-slate-900 overflow-auto gap-4',
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
      base: 'w-20 h-20 ms-auto transform transition-transform duration-200 flex-shrink-0 mr-1.5',
      active: 'text-blue-950 dark:text-blue-950 text-slate-900',
      inactive: 'text-blue-950 dark:text-blue-950 dark:group-hover:text-blue-950 -rotate-90'
    },
    label: 'text-3xl font-semibold truncate text-slate-950 text-wrap text-left'
  },
  tree: 'border-l-2 border-gray-200 dark:border-gray-800 text-slate-900'
}
// ======================
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
        text-align: left;
        margin-bottom: 0.5rem;

        &:hover {
          color: #1e293b;
        }
      }
    }
  }
}
</style>
