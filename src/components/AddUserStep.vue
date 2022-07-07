<template>
  <form
    @submit.stop.prevent="handleSubmit"
    class="col d-flex justify-content-start"
  >
    <div class="userStepContainer col-md-6">
      <h1 class="h4 mb-3 font-weight-normal">使用者:</h1>
      <div class="form-label-group mb-2">
        <label for="user">對話</label>
        <textarea
          id="user"
          name="user"
          v-model="user"
          type="text"
          class="form-control"
          placeholder="使用者說..."
          autocomplete="user"
          required
          autofocus
          rows="1"
        ></textarea>
      </div>
      <div class="form-label-group mb-2">
        <label for="user">意圖</label>
        <input
          id="intent"
          name="intent"
          v-model="intent"
          type="text"
          class="form-control"
          placeholder="對話意圖"
          autocomplete="intent"
          required
          autofocus
        />
      </div>
      <div class="stepActionBtns mt-3 d-flex justify-content-end">
        <button class="btn btn-info">送出</button>
      </div>
    </div>
  </form>
</template>

<script>
import {getStepsIndexUtils} from '../utils/mixins'

export default {
  name: "AddUserStep",
  props: {
    stepsIndex: {
      type: Number,
      required: true,
    },
  },
  mixins: [getStepsIndexUtils],
  data() {
    return {
      user: "",
      intent: "",
      entities: [],
      index: -1
    };
  },
  methods: {
    handleSubmit() {
      // TODO: 向伺服器API發送POST請求
      // 伺服器新增資料後...
      this.$emit("after-create-userStep", {
        user: this.user,
        intent: this.intent,
        entities: this.entities,
        stepsIndex: this.index,
      });
    },
  },
};
</script>