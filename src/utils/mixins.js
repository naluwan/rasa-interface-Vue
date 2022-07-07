export const getStepsIndexUtils = {
  methods: {
    getStepsIndex(){
      this.index = this.stepsIndex
    }
  },
  created(){
    this.getStepsIndex()
  }
}