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
      <hr>
      <ShowStories :steps="steps" />
      <AddUserStep v-if="userStep.length" :stepsIndex="stepsIndex" @after-create-userStep="afterCreateUserStep" />
      <AddBotStep v-if="botReply.length" :stepsIndex="stepsIndex" @after-create-botStep="afterCreateBotStep" />
    </form>

    <div class="stepButtons">
      <button
        v-if="userStep.length === 0 && botReply.length === 0"
        @click.stop.prevent="clickUserBtn"
        class="btn btn-info m-2"
      >
        User
      </button>
      <button @click.stop.prevent="clickBotBtn" class="btn btn-warning m-2">
        Bot
      </button>
    </div>
    <hr>
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
      stepsIndex: -1
    };
  },
  methods: {
    clickUserBtn() {
      if (!this.story) {
        alert("請先輸入故事名稱");
        return;
      }
      if(this.userStep.length === 1){
        alert("請先將前一個使用者對話完成");
        return;
      }
      this.currentSpeaker = "user";
      this.stepsIndex = this.steps.length
      this.steps.push({
        user: '',
        intent: '',
        entities: []
      })
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
      if(this.botReply.length === 1){
        alert("請先將前一個機器人回覆完成");
        return;
      }
      this.currentSpeaker = "bot";
      this.stepsIndex = this.steps.length
      this.steps.push({
        response: "",
        action: "",
      })
      this.botReply.push({
        response: "",
        action: "",
      });
    },
    afterCreateUserStep(payload){
      const {user, intent, entities, stepsIndex} = payload
      const userStep = {
        user,
        intent,
        entities
      }
      this.steps.splice(stepsIndex, 1, userStep)
      this.userStep = []
    },
    afterCreateBotStep(payload){
      const {response, action, stepsIndex} = payload
      const botReply = {
        response,
        action
      }
      this.steps.splice(stepsIndex, 1, botReply)
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