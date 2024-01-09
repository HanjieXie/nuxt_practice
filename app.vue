<template>
  <div class="full_screen">
    <NuxtLayout>
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </div>
</template>
<script>
// 全局的样式可以通过import和nuxt.config.ts中导入
// import '~/assets/global.css'
</script>
<style>
.full_screen{
  width: 100%;
  height: 100vh;
  overflow: hidden;
  /* background-image: url('/bg.png'); */
  background-image: url('~/assets/bg.png');
}
</style>
