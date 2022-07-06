<template>
  <form
    @submit.stop.prevent="handleSubmit"
    class="col d-flex justify-content-end"
  >
    <div class="botStepContainer col-md-6">
      <h1 class="h4 mb-3 font-weight-normal">機器人:</h1>
      <div class="form-label-group mb-2">
        <label for="botReply">回覆</label>
        <textarea
          id="botReply"
          name="botReply"
          v-model="response"
          type="text"
          rows="1"
          class="form-control"
          placeholder="回覆..."
          autocomplete="botReply"
          required
          autofocus
        ></textarea>
      </div>
      <div class="form-label-group mb-2">
        <label for="action">回覆代號</label>
        <input
          v-model="action"
          type="text"
          class="form-control"
          name="action"
          id="action"
        />
      </div>
      <div class="stepActionBtns mt-3 d-flex justify-content-end">
        <button class="btn btn-info">送出</button>
      </div>
    </div>
  </form>
</template>

<script>
import {v4 as uuidv4} from 'uuid'

export default {
  name: 'AddBotStep',
  props: {
    stepIndex: {
      type: Number,
      required: true
    }
  },
  data(){
    return {
      response: '',
      action: `utter_${uuidv4()}`
    }
  },
  methods: {
    handleSubmit(){
      // TODO: 向伺服器API發送POST請求
      // 伺服器新增資料後...
      this.$emit("after-create-botStep", {
        response: this.response,
        action: this.action,
        stepIndex: this.stepIndex,
      });
    }
  }
}
</script>