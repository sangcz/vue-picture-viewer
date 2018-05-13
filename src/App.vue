<template>
  <div id="app">
    <picture-viewer :imgUrl="imgUrl"></picture-viewer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      imgUrl: ['http://p17niap4t.bkt.clouddn.com/902397dda144ad348d7a3cbedba20cf430ad85c6.jpg', 'http://p17niap4t.bkt.clouddn.com/20180504172345.jpg', 'http://p17niap4t.bkt.clouddn.com/timg.jpg']
    }
  }
}
</script>

<style>
#app {
  background: #fff;
}
</style>
