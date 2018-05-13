<template>
    <div :style="maskContainer" v-show="dispalyViewer">
      <div class="imgName">
        <span class="left">{{imgIndex}} / {{imgLength}}</span>
        <span class="center">{{bigImgName}}</span>
        <!-- 关闭按钮 -->
        <div class="closeBtn" @click="closeViewer">
          <i class="iconfont icon-guanbi"></i>
        </div>
      </div>
      <!-- 图片容器 -->
      <div class="imgContainer" ref="imgContainer" :style="imgContainer">
        <!-- 左边箭头 -->
        <div class="leftArrowCon" @click="handlePrev">
          <span class="leftArrow"><i class="iconfont icon-zuo-yuan"></i></span>
        </div>
        <img :src="bigImgUrl" ref="bigImg" :style="bigImg" alt="">
        <!-- 右边箭头 -->
        <div class="rightArrowCon" @click="handleNext">
          <span class="rightArrow"><i class="iconfont icon-you-yuan"></i></span>
        </div>
        <!-- tips -->
        <transition name="fade">
          <span v-show="showTips" class="tips">{{tipsText}}</span>
        </transition>
      </div>
      <div class="fixedHandle">
        <!-- 操作按钮 -->
        <div class="handleContainer cancelselect" onselectstart="return false">
          <ul>
            <li @click="enlarge">
              <i class="iconfont icon-fangda"></i>
            </li>
            <li @click="reduce">
              <i class="iconfont icon-unie039"></i>
            </li>
            <li @click="rotate">
              <i class="iconfont icon-xuanzhuan"></i>
            </li>
            <li @click="downloadImg(bigImgUrl, bigImgName)">
              <i class="iconfont icon-icon"></i>
            </li>
          </ul>
        </div>
        <!-- 缩略图容器 -->
        <div class="thumbnailContainer" v-if="displayThumbnailContainer">
          <ul>
            <li v-for="(item, index) in this.imgData" @click="switchImgUrl(index)" :key="index">
              <img :src="item.url" alt="">
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
      name: 'picture-viewer',
      props: {
        imgData: {
          type: Array,
          default: ''
        },
        switch: {
          type: Boolean,
          default: true
        },
        background: {
          type: String,
          default: 'rgba(0,0,0,0.6)'
        },
        /*handleIconList: {
          type: Array,
          default () {
            return [{
              itemClass: 'iconfont icon-fangda',
              handle: this.enlarge
            },
            {
              itemClass: 'iconfont icon-unie039',
              handle: this.reduce
            },
            {
              itemClass: 'iconfont icon-xuanzhuan',
              handle: this.rotate
            },
            {
              itemClass: 'iconfont icon-icon',
              handle: this.downloadImg
            }]
          }
        }*/
      },
      data () {
        return {
          dispalyViewer: true,
          displayThumbnailContainer: this.switch,
          // 图片容器数据
          i: 0,
          rotateDeg: 0,
          bigImgUrl: this.imgData[0].url,
          bigImgName: this.imgData[0].name,
          imgLength: this.imgData.length,
          imgIndex: 1,
          showTips: false,
          tipsText: '',
          bigImgConWidth: '',
          bigImgConHeight: '',
          maskContainer: {
            width: '100%',
            height: '100%',
            background: this.background,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          },
          imgContainer: {
            width: 'auto',
            height: 'auto',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          },
          bigImg: {
            display: 'block',
            width: 'auto',
            height: 'auto',
            position: 'absolute',
            top: 50 + '%',
            left: 50 + '%',
            marginLeft: '',
            marginTop: ''
          }
        }
      },
      mounted () {
        this.init()
      },
      methods: {
        // init
        init () {
          let screenW = document.documentElement.offsetWidth || document.body.offsetWidth
          let screenH = document.documentElement.scrollHeight || document.body.scrollHeight
          this.$nextTick(function () {
            const ratio = [0.1, 0.2, 0.3, 0.4, 0.5, 0.7, 0.8, 0.9]
            for (let item of ratio) {
              if ( this.$refs.bigImg.naturalWidth * item < screenW &&  this.$refs.bigImg.naturalHeight * item < screenH - 50) {
                this.bigImgConWidth = this.$refs.bigImg.naturalWidth * item
                this.bigImgConHeight = this.$refs.bigImg.naturalHeight * item
                this.imgContainer.width = this.bigImgConWidth + 'px'
                this.imgContainer.height = this.bigImgConHeight + 'px'
                this.bigImg.width = this.bigImgConWidth + 'px'
                this.bigImg.height = this.bigImgConHeight + 'px'
                this.bigImg.marginLeft = -(this.bigImgConWidth / 2) + 'px'
                this.bigImg.marginTop = -(this.bigImgConHeight / 2) + 'px'
              }
            }
          })
        },
        // rotate init
        rotateInit () {
          let screenW = document.documentElement.offsetWidth || document.body.offsetWidth
          let screenH = document.documentElement.scrollHeight || document.body.scrollHeight
          const ratio = [0.1, 0.2, 0.3, 0.4, 0.5, 0.7, 0.8, 0.9]
          for (let item of ratio) {
            if (this.$refs.bigImg.naturalWidth * item < screenH - 160) {
              this.bigImgConWidth = this.$refs.bigImg.naturalWidth * item
              this.bigImgConHeight = this.$refs.bigImg.naturalHeight * item
              this.imgContainer.width = this.bigImgConWidth + 'px'
              this.imgContainer.height = this.bigImgConHeight + 'px'
              this.bigImg.width = this.bigImgConWidth + 'px'
              this.bigImg.height = this.bigImgConHeight + 'px'
              this.bigImg.marginLeft = -(this.bigImgConWidth / 2) + 'px'
              this.bigImg.marginTop = -(this.bigImgConHeight / 2) + 'px'
            }
          }
        },
        // 放大
        enlarge () {
          this.$nextTick(function () {
            this.$refs.bigImg.style.width = (this.$refs.bigImg.offsetWidth) * 1.3 + 'px'
            this.$refs.bigImg.style.height = (this.$refs.bigImg.offsetHeight) * 1.3 + 'px'
            this.$refs.bigImg.style.left = '50%'
            this.$refs.bigImg.style.top = '50%'
            this.bigImg.marginLeft = -(this.$refs.bigImg.offsetWidth) / 2 + 'px'
            this.bigImg.marginTop = -(this.$refs.bigImg.offsetHeight) / 2 + 'px'
          })
        },
        // 缩小
        reduce () {
          this.$refs.bigImg.style.width = this.$refs.bigImg.offsetWidth * 0.7 + 'px'
          this.$refs.bigImg.style.height = this.$refs.bigImg.offsetHeight * 0.7 + 'px'
          this.$refs.bigImg.style.left = '50%'
          this.$refs.bigImg.style.top = '50%'
          this.bigImg.marginLeft = -(this.$refs.bigImg.offsetWidth) / 2 + 'px'
          this.bigImg.marginTop = -(this.$refs.bigImg.offsetHeight) / 2 + 'px'
        },
        // 旋转
        rotate () {
          if (this.rotateDeg === 0) {
            this.$refs.bigImg.style.transform = 'rotate(90deg)'
            this.rotateInit()
            this.rotateDeg++
          } else if (this.rotateDeg === 1) {
            this.$refs.bigImg.style.transform = 'rotate(180deg)'
            this.init()
            this.rotateDeg++
          } else if (this.rotateDeg === 2) {
            this.$refs.bigImg.style.transform = 'rotate(270deg)'
            this.rotateInit()
            this.rotateDeg++
          } else if (this.rotateDeg === 3) {
            this.$refs.bigImg.style.transform = 'rotate(360deg)'
            this.init()
            this.rotateDeg = 0
          }
        },
        // 点击缩略图切换图片
        switchImgUrl (num) {
          let _this = this
          this.bigImgUrl = this.imgData[num].url
          this.imgIndex = num + 1
          this.bigImgName = this.imgData[num].name
          _this.init()
        },
        // 切换到上一张
        handlePrev () {
          let _this = this
          this.i--
          this.$refs.bigImg.style.transform = 'rotate(0deg)'
          this.rotateDeg = 0
          if (this.i === -1) {
            _this.tips('已经是第一张了!')
            this.i = 0
          } else {
            this.bigImgUrl = this.imgData[this.i].url
            this.imgIndex = this.i + 1
            this.bigImgName = this.imgData[this.i].name
            _this.init()
          }
        },
        // 切换到下一张
        handleNext () {
          let _this = this
          this.$refs.bigImg.style.transform = 'rotate(0deg)'
          this.rotateDeg = 0
          this.i++
          if (this.i === this.imgData.length ) {
            _this.tips('已经是最后一张了!')
            _this.i = Number(this.imgData.length) - 1
          } else {
            this.bigImgUrl = this.imgData[this.i].url
            this.imgIndex = this.i + 1
            this.bigImgName = this.imgData[this.i].name
            _this.init()
          }
        },
        // 提示框
        tips (msg) {
          let _this = this
          _this.showTips = true
          _this.tipsText = msg
          setTimeout(function () {
            _this.showTips = false
          }, 1000)
        },
        // 下载图片
        downloadImg(data, filename) {
            const save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
            save_link.href = data;
            save_link.download = filename;

            const event = document.createEvent('MouseEvents');
            event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            save_link.dispatchEvent(event);
        },
        // 关闭查看器
        closeViewer () {
          this.dispalyViewer = false
        },
      }
  }
</script>

<style scoped>
  @import "./icon/iconfont.css";
  html, body {
    width: 100%;
    height: 100%;
  }
  i {
    cursor: pointer;
  }
  .imgName {
    width: 100%;
    height: 40px;
    background: rgba(0,0,0,0.5);
    color: #fff;
    line-height: 40px;
  }
  .imgName .left {
    display: inline-block;
    width: 10%;
    padding-left: 20px;
  }
  .imgName .center {
    display: inline-block;
    width: 80%;
    text-align: center;
  }
  .imgName .closeBtn {
    position: absolute;
    top: 0;
    right: 20px;
  }
  .imgName .closeBtn i {
    font-size: 20px!important;
  }
  .imgContainer .leftArrowCon {
    width: 30%;
    height: 100%;
    background: transparent;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    cursor: pointer;
  }
  .imgContainer .rightArrowCon {
    width: 30%;
    height: 100%;
    background: transparent;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
  }
  .imgContainer .leftArrow {
    position: absolute;
    top: 50%;
    left: 30px;
    margin-top: -30px;
    z-index: 1;
  }
  .imgContainer .rightArrow {
    position: absolute;
    top: 50%;
    right: 30px;
    margin-top: -30px;
  }
  .imgContainer .tips {
    padding: 10px;
    background: rgba(0,0,0,0.7);
    color: #fff;
    text-align: center;
    line-height: 40px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -60px;
    margin-top: -20px;
    border-radius: 6px;
    padding: 4px 8px;
    font-size: 14px;
  }
  .handleContainer {
    width: 230px;
    height: 40px;
    background: rgba(0,0,0,0.6);
    line-height: 40px;
    border-radius: 20px;
    position: absolute;
    left: 50%;
    bottom: 110px;
    margin-left: -100px;
  }
  ul {
    padding: 0;
    margin: 0;
  }
  ul li {
    list-style: none;
    display: inline-block;
    width: 30px;
    height: 30px;
    margin-left: 20px;
    cursor: pointer;
    font-size: 0;
  }
  .iconfont {
    font-size: 28px;
    color: #fff;
  }
  .fixedHandle {
    width: 800px;
    height: 200px;
    position: fixed;
    left: 50%;
    bottom: 0;
    margin-left: -400px;
  }
  .thumbnailContainer {
    max-width: 800px;
    height: 100px;
    background: rgba(0,0,0,0.2);
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0%);
    overflow-x: auto;
    overflow-y: hidden;
  }
  .thumbnailContainer ul {
    margin-top: 20px;
    text-align: center;
  }
  .thumbnailContainer ul li {
    display: inline-block;
    width: 60px;
    height: 60px;
    margin-left: 20px;
  }
  .thumbnailContainer ul li:last-child {
    margin-right: 20px;
  }
  .thumbnailContainer ul li img {
    display: inline-block;
    width: 60px;
    height: 60px;
    box-sizing: content-box;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.6s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .cancelselect{
    -moz-user-select: none; /*火狐*/
    -webkit-user-select: none; /*webkit浏览器*/
    -ms-user-select: none; /*IE10*/
    -khtml-user-select: none; /*早期浏览器*/
    user-select: none;}
</style>
