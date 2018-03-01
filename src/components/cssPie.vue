<template>
    <div class="pie"
         :style="'width:313px;height:313px;'+'animation-delay: -'+percentage+'s;'"></div>
</template>

<script>
  import Vue from 'vue'

  export default{
    props:{
      percentage: String
    },
    methods:{
      getSize(){
        let that = this
        Vue.nextTick()
          .then(function () {
            let size = that.$el.parentNode.clientHeight
            console.log("width:"+size+"px;height:"+size+"px;")
            console.log(that.$el)
            return "width:"+size+"px;height:"+size+"px;"
          })
      }
    }
  }
</script>
<style>
  .pie {
    height:100px;
    width:100px;
    border-radius: 50%;
    background: yellowgreen;
    background-image:
      linear-gradient(to right, transparent 50%, #655 0);
  }
  @keyframes spin {
    to { transform: rotate(.5turn); }
  }

  @keyframes bg {
    50% { background: #655; }
  }

  .pie::before {
    content: '';
    display: block;
    margin-left: 50%;
    height: 100%;
    border-radius: 0 100% 100% 0 / 50%;
    background-color: inherit;
    transform-origin: left;
    animation: spin 50s linear infinite,
    bg 100s step-end infinite;
    animation-play-state: paused;
    animation-delay: inherit;

  }
</style>
