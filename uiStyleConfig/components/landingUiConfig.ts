export const uiDashboardLanding = {
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

export const uiNavigationAccordion = {
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
