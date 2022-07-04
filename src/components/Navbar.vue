<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
    <router-link class="navbar-brand" to="/"> Chat Bot </router-link>

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>

    <div id="navbarSupportedContent" class="navbar-collapse collapse">
      <div class="ml-auto d-flex align-items-center">
        <!-- is user is admin -->
        <router-link to="#" class="text-white mr-3" v-if="currentUser.isAdmin">
          管理員後台
        </router-link>

        <!-- is user is login -->
        <template>
          <router-link to="#" class="text-white mr-3" v-if="isAuthenticated">
            {{ currentUser.name || '使用者'}} 您好
          </router-link>
        </template>
        <button
          type="button"
          class="btn btn-sm btn-outline-success my-2 my-sm-0"
        >
          登出
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
const dummyUser = {
  currentUser: {
    id: 97090920,
    name: "英特內軟體",
    email: "admin@interinfo.com",
    image:
      "https://www.interinfo.com.tw/css/web_interinfo/assets/imgs/logo-color.svg",
    isAdmin: true,
  },
  isAuthenticated: true,
};

export default {
  name: "NavBar",
  data() {
    return {
      currentUser: {
        id: -1,
        name: "",
        email: "",
        image: "",
        isAdmin: "",
      },
      isAuthenticated: false,
    };
  },
  methods: {
    fetchUser() {
      this.currentUser = {
        ...this.currentUser,
        ...dummyUser.currentUser,
      };
      this.isAuthenticated = dummyUser.isAuthenticated;
    },
  },
  created() {
    this.fetchUser();
  },
};
</script>
