<template>
  <div class="container py-5">
    <NavTabs />
    <div class="mt-5 d-flex align-items-center justify-content-between">
      <h1>故事流程</h1>
      <router-link to="/story/new" class="btn btn-success btn-lg">新增故事</router-link>
    </div>
    <hr>
    <select class="custom-select" v-model="storySelected" @change.stop.prevent="handleSelected(storySelected)">
      <option value="" selected disabled>請選擇</option>
      <option v-for="story in stories" :key="story.storyId" :value="story.storyId">{{ story.story }}</option>
    </select>
    <Stories v-if="storySelected" :filterStory="filterStory"/>

  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";
import Stories from '../components/Stories.vue'
import { v4 as uuidv4 } from 'uuid'

// 假資料
const dummyData = {
  stories: [
    {
      story: "test",
      steps: [
        {
          intent: "test",
          user: "123",
          entities: [{ number: "一" }, { location: "二" }, { number: "三" }],
        },
      ],
    },
    { story: "test1", steps: [{ intent: "test", user: "123", entities: [] }] },
    {
      story: "test2",
      steps: [
        {
          intent: "test",
          user: "123",
          entities: [{ number: "一" }, { location: "二" }, { number: "三" }],
        },
      ],
    },
    {
      story: "testtest123",
      steps: [
        {
          intent: "test",
          user: "123",
          entities: [{ number: "一" }, { location: "二" }, { number: "三" }],
        },
      ],
    },
    {
      story: "testtest123456",
      steps: [
        {
          intent: "test",
          user: "123",
          entities: [{ number: "一" }, { location: "二" }, { number: "三" }],
        },
      ],
    },
    {
      story: "test321",
      steps: [
        {
          intent: "test",
          user: "123",
          entities: [{ number: "一" }, { location: "二" }, { number: "三" }],
        },
      ],
    },
    {
      story: "test654",
      steps: [
        {
          intent: "test",
          user: "123",
          entities: [{ number: "一" }, { location: "二" }, { number: "三" }],
        },
      ],
    },
    {
      story: "test456654",
      steps: [{ intent: "test", user: "123", entities: [] }],
    },
    {
      story: "123terst",
      steps: [
        {
          intent: "test",
          user: "123",
          entities: [{ number: "一" }, { location: "二" }, { number: "三" }],
        },
      ],
    },
    {
      story: "123test",
      steps: [
        {
          intent: "test",
          user: "123",
          entities: [{ number: "一" }, { location: "二" }, { number: "三" }],
        },
      ],
    },
    {
      story: "45646",
      steps: [
        {
          intent: "test",
          user: "123",
          entities: [{ number: "一" }, { location: "二" }, { number: "三" }],
        },
      ],
    },
    {
      story: "testzxc",
      steps: [
        {
          intent: "test",
          user: "123",
          entities: [{ number: "一" }, { location: "二" }, { number: "三" }],
        },
      ],
    },
    { story: "qweewq", steps: [{ intent: "test", user: "123", entities: [] }] },
    { story: "ewqewq", steps: [{ intent: "test", user: "123", entities: [] }] },
    {
      story: "treert",
      steps: [
        {
          intent: "test",
          user: "123",
          entities: [{ number: "一" }, { location: "二" }, { number: "三" }],
        },
      ],
    },
    {
      story: "teterterte",
      steps: [
        {
          intent: "問交通工具和問地點",
          user: "搭公車怎麼去高雄",
          entities: [{ transportation: "公車" }, { location: "高雄辦公室" }],
        },
      ],
    },
    {
      story: "123erwqe",
      steps: [
        {
          intent: "test",
          user: "123",
          entities: [{ number: "一" }, { location: "二" }, { number: "三" }],
        },
      ],
    },
    {
      story: "wertwtwt",
      steps: [{ intent: "test", user: "123", entities: [] }],
    },
    { story: "fghdh", steps: [{ intent: "test", user: "123", entities: [] }] },
    { story: "ftujfj", steps: [{ intent: "test", user: "123", entities: [] }] },
    {
      story: "ertsdtst",
      steps: [{ intent: "test", user: "123", entities: [] }],
    },
    {
      story: "wsertsgs",
      steps: [{ intent: "test", user: "123", entities: [] }],
    },
    { story: "sgsdg", steps: [{ intent: "test", user: "123", entities: [] }] },
    {
      story: "tewerwrf",
      steps: [{ intent: "test", user: "123", entities: [] }],
    },
    {
      story: "wtsgsgf",
      steps: [{ intent: "test", user: "123", entities: [] }],
    },
    { story: "dshgdg", steps: [{ intent: "test", user: "123", entities: [] }] },
    {
      story: "5eertgs",
      steps: [{ intent: "test", user: "123", entities: [] }],
    },
    { story: "gjvjd", steps: [{ intent: "test", user: "123", entities: [] }] },
    { story: "dhdhd", steps: [{ intent: "test", user: "123", entities: [] }] },
    { story: "frhjdh", steps: [{ intent: "test", user: "123", entities: [] }] },
    { story: "dgdgs", steps: [{ intent: "test", user: "123", entities: [] }] },
    {
      story: "ftrhfh",
      steps: [
        {
          intent: "test",
          user: "123",
          entities: [{ number: "一" }, { location: "二" }, { number: "三" }],
        },
      ],
    },
    { story: "fjfhrh", steps: [{ intent: "test", user: "123", entities: [] }] },
    { story: "sfsgs", steps: [{ intent: "test", user: "123", entities: [] }] },
    { story: "tsdsg", steps: [{ intent: "test", user: "123", entities: [] }] },
    { story: "mvnfn", steps: [{ intent: "test", user: "123", entities: [] }] },
    { story: "gjvjf", steps: [{ intent: "test", user: "123", entities: [] }] },
    { story: "swrfsf", steps: [{ intent: "test", user: "123", entities: [] }] },
    { story: "sgdhh", steps: [{ intent: "test", user: "123", entities: [] }] },
    { story: "cjfjf", steps: [{ intent: "test", user: "123", entities: [] }] },
    {
      story: "sgsdgsg",
      steps: [{ intent: "test", user: "123", entities: [] }],
    },
    { story: "ftjjf", steps: [{ intent: "test", user: "123", entities: [] }] },
    {
      story: "sxghdhgsd",
      steps: [{ intent: "test", user: "123", entities: [] }],
    },
    { story: "sdgdrh", steps: [{ intent: "test", user: "123", entities: [] }] },
    { story: "hshdhj", steps: [{ intent: "test", user: "123", entities: [] }] },
    { story: "sgsgsg", steps: [{ intent: "test", user: "123", entities: [] }] },
    {
      story: "sdggfasf",
      steps: [{ intent: "test", user: "123", entities: [] }],
    },
    { story: "dsgsgs", steps: [{ intent: "test", user: "123", entities: [] }] },
    { story: "xctg", steps: [{ intent: "test", user: "123", entities: [] }] },
    { story: "etet", steps: [{ intent: "test", user: "123", entities: [] }] },
    { story: "sdgsgf", steps: [{ intent: "test", user: "123", entities: [] }] },
    {
      story: "cvbncncn",
      steps: [{ intent: "test", user: "123", entities: [] }],
    },
    {
      story: "uhsrujsrj",
      steps: [{ intent: "test", user: "123", entities: [] }],
    },
    { story: "gjkj", steps: [{ intent: "test", user: "123", entities: [] }] },
    {
      story: "dfhydhd",
      steps: [{ intent: "test", user: "123", entities: [] }],
    },
    { story: "gukgk", steps: [{ intent: "test", user: "123", entities: [] }] },
    {
      story: "未命名sgsgh故事",
      steps: [{ intent: "test", user: "123", entities: [] }],
    },
    { story: "rhdfh", steps: [{ intent: "test", user: "123", entities: [] }] },
    {
      story: "ffhnfh",
      steps: [
        {
          intent: "test",
          user: "123",
          entities: [{ number: "一" }, { location: "二" }, { number: "三" }],
        },
      ],
    },
    {
      story: "123123123",
      steps: [
        {
          intent: "問交通工具和問地點",
          user: "搭公車怎麼去高雄",
          entities: [{ transportation: "公車" }, { location: "高雄辦公室" }],
        },
      ],
    },
  ],
}

dummyData.stories.map(story => {
  story.storyId = uuidv4()
  story.steps.map(step => {
    step.stepId = uuidv4()
  })
})

export default {
  name: "Story",
  components: {
    NavTabs,
    Stories,
  },
  data(){
    return {
      stories: [],
      storySelected: '',
      filterStory: ''
    }
  },
  methods: {
    fetchStories(){
      // TODO: 待串接API，從後端獲取正確故事資料
      this.stories = dummyData.stories
    },
    handleSelected(storyId){
      this.filterStory = this.stories.filter(story => story.storyId === storyId)
    }
  },
  created(){
    this.fetchStories()
  }
};
</script>