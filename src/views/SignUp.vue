<template>
  <div class="container py-5">
    <form class="w-100" @submit.stop.prevent="handleSubmit">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">
          Sign Up
        </h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="name">公司代號或統編</label>
        <input
          id="cpnyId"
          name="cpnyId"
          v-model="cpnyId"
          type="text"
          class="form-control"
          placeholder="公司代號或統編"
          autocomplete="cpnyId"
          required
          autofocus
        >
      </div>

      <div class="form-label-group mb-2">
        <label for="name">公司名稱</label>
        <input
          id="cpnyName"
          name="cpnyName"
          v-model="cpnyName"
          type="text"
          class="form-control"
          placeholder="公司名稱"
          autocomplete="cpnyName"
          required
          autofocus
        >
      </div>

      <div class="form-label-group mb-2">
        <label for="email">Email</label>
        <input
          id="email"
          name="email"
          v-model="email"
          type="email"
          class="form-control"
          placeholder="email"
          autocomplete="email"
          required
        >
      </div>

      <div class="form-label-group mb-3">
        <label for="password">Password</label>
        <input
          id="password"
          name="password"
          v-model="password"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="new-password"
          required
        >
      </div>

      <div class="form-label-group mb-3">
        <label for="password-check">Password Check</label>
        <input
          id="password-check"
          name="passwordCheck"
          v-model="passwordCheck"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="new-password"
          required
        >
      </div>

      <button
        class="btn btn-lg btn-primary btn-block mb-3"
        type="submit"
      >
        Submit
      </button>

      <div class="text-center mb-3">
        <p>
          <router-link to="/signin">
            Sign In
          </router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">
        &copy; 2017-2018
      </p>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  data(){
    return {
      cpnyId: '',
      cpnyName: '',
      email: '',
      password: '',
      passwordCheck: ''
    }
  },
  methods: {
    handleSubmit(){
      const data = JSON.stringify({
        cpnyId: this.cpnyId,
        cpnyName: this.cpnyName,
        email: this.email,
        password: this.password,
        passwordCheck: this.passwordCheck
      })

      console.log(data)
    }
  }
}
</script>