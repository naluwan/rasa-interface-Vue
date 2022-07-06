<template>
  <div>
    <div
      v-for="(input, index) in stepsData"
      :key="`step-${index}`"
      :class="{
        'col d-flex justify-content-start': input.user,
        'col d-flex justify-content-end': input.action,
      }"
    >
      <div
        :class="{
          'userStepContainer col-md-6': input.user,
          'botStepContainer col-md-6': input.action,
        }"
      >
        <!-- user -->
        <template v-if="input.user">
          <h1 class="h4 mb-3 font-weight-normal">使用者:</h1>
          <div class="form-label-group mb-2">
            <label for="user">對話</label>
            <textarea
              id="user"
              name="user"
              v-model="input.user"
              type="text"
              class="form-control"
              rows="1"
              placeholder="使用者說..."
              autocomplete="user"
              required
              autofocus
              :disabled="index !== editIndex"
            ></textarea>
          </div>
          <div class="form-label-group mb-2">
            <label for="user">意圖</label>
            <textarea
              id="intent"
              name="intent"
              v-model="input.intent"
              type="text"
              class="form-control"
              rows="1"
              placeholder="對話意圖"
              autocomplete="intent"
              required
              autofocus
              :disabled="index !== editIndex"
            ></textarea>
          </div>
          <!-- <div class="stepActionBtns mt-3 d-flex justify-content-end">
            <button class="btn btn-primary">編輯</button>
            <button class="btn btn-danger">刪除</button>
          </div> -->
        </template>

        <!-- bot -->
        <template v-if="input.action">
          <h1 class="h4 mb-3 font-weight-normal">機器人:</h1>
          <div class="form-label-group mb-2">
            <label for="botReply">回覆</label>
            <textarea
              id="botReply"
              name="botReply"
              v-model="input.response"
              type="text"
              rows="1"
              class="form-control"
              placeholder="回覆..."
              autocomplete="botReply"
              required
              autofocus
              :disabled="index !== editIndex"
            ></textarea>
          </div>
          <div class="form-label-group mb-2">
            <label for="action">回覆代號</label>
            <input
            v-model="input.action"
            type="text"
            class="form-control"
            name="action"
            id="action"
            :disabled="index !== editIndex"
          />
          </div>
        </template>
        <div class="stepActionBtns mt-3 d-flex justify-content-end">
            <button v-if="index !== editIndex" class="btn btn-primary" @click.stop.prevent="editBtnClick(index)">編輯</button>
            <button v-else class="btn btn-secondary">儲存</button>
            <button class="btn btn-danger">刪除</button>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowStories",
  props: {
    steps: {
      type: Array,
      required: true,
    },
  },
  data(){
    return {
      stepsData: this.steps,
      editIndex: -1
    }
  },
  methods: {
    editBtnClick(index){
      this.editIndex = index
    }
  }
};
</script>