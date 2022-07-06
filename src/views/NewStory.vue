<template>
  <div class="container py-5">
    <form class="w-100">
      <div class="text-center mb-4 d-flex">
        <h1 class="h3 mb-3 font-weight-normal col-2">故事名稱:</h1>
        <input
          v-model="story"
          type="text"
          class="form-control col-10"
          placeholder="故事名稱"
          name="story"
        />
      </div>
      <ShowStories :steps="steps" />
      <AddUserStep v-if="userStep.length" :stepIndex="stepIndex" @after-create-userStep="afterCreateUserStep" />
      <AddBotStep v-if="botReply.length" :stepIndex="stepIndex" @after-create-botStep="afterCreateBotStep" />
      <!-- <div
        v-for="(input, index) in steps"
        :key="`step-${index}`"
        class="stepContainer col d-flex justify-content-start"
      >
        <div v-if="currentSpeaker !== 'bot'" class="userStepContainer col-6">
          <div class="form-label-group mb-2">
            <label for="user">對話</label>
            <input
              id="user"
              name="user"
              v-model="input.user"
              type="text"
              class="form-control"
              placeholder="使用者說..."
              autocomplete="user"
              required
              autofocus
            />
          </div>
          <div class="form-label-group mb-2">
            <label for="user">意圖</label>
            <input
              id="intent"
              name="intent"
              v-model="input.intent"
              type="text"
              class="form-control"
              placeholder="對話意圖"
              autocomplete="intent"
              required
              autofocus
            />
          </div>
        </div>

        <div
          v-if="input.action"
          class="stepContainer col d-flex justify-content-end"
        >
          <div class="userStepContainer col-6">
            <div class="form-label-group mb-2">
              <label for="user">回覆</label>
              <input
                id="botReply"
                name="botReply"
                v-model="input.response"
                type="text"
                class="form-control"
                placeholder="回覆..."
                autocomplete="botReply"
                required
                autofocus
              />
            </div>
            <input
              v-model="input.action"
              type="text"
              class="botReplyCode"
              name="action"
            />
          </div>
        </div>
      </div> -->
    </form>

    <div class="stepButtons">
      <button
        v-if="currentSpeaker !== 'user'"
        @click.stop.prevent="clickUserBtn"
        class="btn btn-info m-2"
      >
        User
      </button>
      <button @click.stop.prevent="clickBotBtn" class="btn btn-warning m-2">
        Bot
      </button>
    </div>
  </div>
</template>

<script>
import ShowStories from '../components/ShowStories.vue'
import AddUserStep from '../components/AddUserStep.vue'
import AddBotStep from '../components/AddBotStep.vue'

export default {
  name: "NewStory",
  components: {
    ShowStories,
    AddUserStep,
    AddBotStep
  },
  data() {
    return {
      story: "",
      steps: [],
      currentSpeaker: "",
      userStep: [],
      botReply: [],
      stepIndex: -1
    };
  },
  methods: {
    clickUserBtn() {
      if (!this.story) {
        alert("請先輸入故事名稱");
        return;
      }
      this.currentSpeaker = "user";
      this.stepIndex = this.steps.length
      this.userStep.push({
        user: '',
        intent: '',
        entities: []
      })
    },
    clickBotBtn() {
      if (!this.story) {
        alert("請先輸入故事名稱");
        return;
      }
      this.currentSpeaker = "bot";
      this.stepIndex = this.steps.length
      this.botReply.push({
        response: "",
        action: "",
      });
    },
    afterCreateUserStep(payload){
      const {user, intent, entities, stepIndex} = payload
      const userStep = {
        user,
        intent,
        entities
      }
      this.steps.splice(stepIndex, 0, userStep)
      this.userStep = []
    },
    afterCreateBotStep(payload){
      const {response, action, stepIndex} = payload
      const botReply = {
        response,
        action
      }
      this.steps.splice(stepIndex, 0, botReply)
      this.botReply = []
    }
  },
};
</script>

<style>
.userStepContainer,
.botStepContainer {
  border: 1px solid black;
  border-radius: 10px;
  margin: 10px;
  padding: 20px;
}

button:not(:first-child) {
  margin-left: 5px;
}
</style>