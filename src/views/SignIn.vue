<template>
  <div class="container py-5">
    <form class="w-100" @submit.stop.prevent="handleSubmit">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">
          Sign In
        </h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="email">email</label>
        <input
          id="email"
          name="email"
          v-model="email"
          type="email"
          class="form-control"
          placeholder="email"
          autocomplete="username"
          required
          autofocus
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
          autocomplete="current-password"
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
          <router-link to="/signup">Sign Up</router-link>
        </p>
      </div>

      <p class="mt-5 text-muted text-center">
        英特內軟體股份有限公司 版權所有
      </p>
      <p class="mb-3 text-muted text-center">
        Copyright &copy; Internet Information Co., Ltd. All rigths reserved.
      </p>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SignIn',
  data(){
    return{
      email: '',
      password: ''
    }
  },
  methods: {
    handleSubmit(){
      const data = JSON.stringify({
        email: this.email,
        password: this.password
      })
      console.log('data', data)
    }
  }
}
</script>