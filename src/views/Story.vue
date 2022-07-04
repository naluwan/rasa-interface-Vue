<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      顯示故事
    </h1>
  </div>
</template>

<script>
import NavTabs from '../components/NavTabs.vue'
export default {
  name: 'Story',
  components: {
    NavTabs
  }
}
</script>