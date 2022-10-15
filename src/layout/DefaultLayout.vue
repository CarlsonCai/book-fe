<template>
  <div class="defaultLayout">
    <Header />
    <div class="defaultLayout_body">
      <Sidebar />
      <Main />
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '@/layout/Header.vue'
import Sidebar from '@/layout/Sidebar.vue'
import Main from '@/layout/Main.vue'
</script>

<style lang="sass" scoped>
.defaultLayout
    height: 100vh
    .defaultLayout_body
        height: 100%
        display: flex
        height: calc( 100vh - 50px)
</style>
