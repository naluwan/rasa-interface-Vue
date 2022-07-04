<template>
  <div class="row mt-5">
    <div class="col-md-12" v-for="story in filterStory" :key="story.storyId">
      <div class="card mb-5" >
        <h5 class="card-header">{{ story.story }}</h5>
        <div class="card-body" v-for="step in story.steps" :key="step.stepId">
          <h5 class="card-title">{{ step.user ? "User:" : "Bot" }}</h5>

          <!-- user -->
          <div v-if="step.user">
            <p class="card-text">意圖：{{ step.intent }}</p>
            <p class="card-text">對話: {{ step.user }}</p>
          </div>

          <!-- bot -->
          <p class="card-text" v-else>回覆: {{ step.action }}</p>
        </div>
        <div class="mt-4 d-flex justify-content-end">
          <router-link to="/story/edit" class="btn btn-primary m-2"
            >編輯</router-link
          >
          <button class="btn btn-danger m-2">刪除</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stories",
  props: {
    filterStory: {
      type: Array,
      required: true,
    }
  },
};
</script>