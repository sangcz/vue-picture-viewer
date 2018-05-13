<template>
  <div id="app">
    <vue-picture-viewer :imgData="imgUrl" :switch="true" v-if="imgUrl"></vue-picture-viewer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      imgUrl: [{
          url:'/testImg/test1.jpg',
          name: 'test1.jpg'
        },
        {
          url: '/testImg/test2.jpg',
          name: 'test2.jpg'
        }, {
          url: '/testImg/test3.jpg',
          name: 'test3.jpg'
        },
        {
          url: '/testImg/test4.jpg',
          name: 'test4.jpg'
        }]
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html, body {
  width: 100%;
  height: 100%;
}
</style>
