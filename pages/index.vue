<script setup lang="ts">
// const layout = ref<'default' | 'auth'>('default')
// function enableCustomLayout () {
//   if (layout.value === 'default') {
//     setPageLayout('auth')
//     layout.value = 'auth'
//   } else {
//     setPageLayout('default')
//     layout.value = 'auth'
//   }
// }
</script>

<template>
  <div>
    <br />
    <h1>Index Page</h1>
    <!--    <UButton-->
    <!--      icon="i-heroicons-pencil-square"-->
    <!--      size="lg"-->
    <!--      color="fuchsia"-->
    <!--      variant="outline"-->
    <!--      label="Button"-->
    <!--      :trailing="false"-->
    <!--      @click="enableCustomLayout"-->
    <!--    />-->
    <TheFoo />
  </div>
</template>
