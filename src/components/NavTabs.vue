<template>
  <ul class="nav nav-tabs mb-4">
    <li class="nav-item">
      <router-link
        to="/story"
        class="nav-link"
      >
        故事流程
      </router-link>
    </li>
    <li class="nav-item">
      <router-link
        to="/config"
        class="nav-link"
      >
        Rasa Config
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'NavTabs'
}
</script>