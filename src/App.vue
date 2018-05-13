<template>
  <div id="app">
    <!--<vue-picture-viewer :imgData="imgUrl" :switch="true" v-if="imgUrl"></vue-picture-viewer>-->
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      imgUrl: [{
          url:'http://p8ny46w8x.bkt.clouddn.com/test1.jpg',
          name: 'test1.jpg'
        },
        {
          url: 'http://p8ny46w8x.bkt.clouddn.com/test2.jpg',
          name: 'test2.jpg'
        }, {
          url: 'http://p8ny46w8x.bkt.clouddn.com/test3.jpg',
          name: 'test3.jpg'
        },
        {
          url: 'http://p8ny46w8x.bkt.clouddn.com/test4.jpg',
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
