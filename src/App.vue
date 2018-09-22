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
          url:'http://p8ny46w8x.bkt.clouddn.com/test1.jpg',
          name: '测试图片一.jpg'
        },
          {
            url: 'http://p8ny46w8x.bkt.clouddn.com/test2.jpg',
            name: '测试图片二.jpg'
          }, {
            url: 'http://p8ny46w8x.bkt.clouddn.com/test3.jpg',
            name: '测试图片三.jpg'
          },
          {
            url: 'http://p8ny46w8x.bkt.clouddn.com/test4.jpg',
            name: '测试图片四.jpg'
          },
          {
            url: 'http://p8ny46w8x.bkt.clouddn.com/test2.jpg',
            name: '测试图片五.jpg'
          }, {
            url: 'http://p8ny46w8x.bkt.clouddn.com/test3.jpg',
            name: '测试图片六.jpg'
          }/*,
          {
            url: 'http://p8ny46w8x.bkt.clouddn.com/test4.jpg',
            name: '测试图片七.jpg'
          },{
            url: 'http://p8ny46w8x.bkt.clouddn.com/test2.jpg',
            name: '测试图片八.jpg'
          }, {
            url: 'http://p8ny46w8x.bkt.clouddn.com/test3.jpg',
            name: '测试图片九.jpg'
          },
          {
            url: 'http://p8ny46w8x.bkt.clouddn.com/test4.jpg',
            name: '测试图片十.jpg'
          }, {
            url: 'http://p8ny46w8x.bkt.clouddn.com/test3.jpg',
            name: '测试图片九.jpg'
          },
          {
            url: 'http://p8ny46w8x.bkt.clouddn.com/test4.jpg',
            name: '测试图片十.jpg'
          }, {
            url: 'http://p8ny46w8x.bkt.clouddn.com/test3.jpg',
            name: '测试图片九.jpg'
          },
          {
            url: 'http://p8ny46w8x.bkt.clouddn.com/test4.jpg',
            name: '测试图片十.jpg'
          }*/]
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
  /* 修改原生的滚动条 */
  ::-webkit-scrollbar { /* 血槽宽度 */
    width: 8px;
    height: 8px;
  }
  ::-webkit-scrollbar-thumb { /* 拖动条 */
    background: rgba(0,0,0,0.3);
    border-radius: 6px;
  }
  ::-webkit-scrollbar-track { /* 背景槽 */
    background: #ddd;
    border-radius: 6px;
  }
</style>
