module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    extends: [
        '@nuxtjs',
        'plugin:nuxt/recommended',
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'plugin:vue/vue3-essential',
        'plugin:@typescript-eslint/recommended',
    ],
    parser: "vue-eslint-parser",
    parserOptions: {
        parser: "@typescript-eslint/parser",
        ecmaVersion: 2020,
        sourceType: "module"
    },
    plugins: ['@typescript-eslint'],
    // add your custom rules here
    rules: {
        '@typescript-eslint/no-unused-vars': 'error',
        'vue/html-self-closing': 'off',
    },
    globals: {
        // Ваши глобальные переменные здесь
        defineComponent: true,
        ref: true,
        // Другие переменные, если они используются в вашем проекте
        // чтобы не ругался что нет явного импорта
        setPageLayout: true,
        computed: true,
        watch: true,
        reactive: true,
        toRaw: true,
        $fetch: true,
        useToast: true,
    },
    overrides: [
        {
            files: ['pages/**/*.vue'], // Применяем только к файлам в папке pages
            rules: {
                // Отключаем правило vue/multi-word-component-names для файлов в папке pages
                'vue/multi-word-component-names': 'off',
                'no-console': 'off',
            },
        },
    ],
}
