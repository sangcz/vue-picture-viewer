<template>
    <div :style="maskContainer" v-show="dispalyViewer">
      <!-- 关闭按钮 -->
      <div class="closeBtn" @click="closeViewer">
        <i class="iconfont icon-guanbi"></i>
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
        <!-- 操作按钮 -->
        <div class="handleContainer">
          <ul>
            <li v-for="iconClass in this.handleIconList">
              <i :class="[iconClass]"></i>
            </li>
          </ul>
        </div>
        <!-- tips -->
        <transition name="fade">
          <span v-show="showTips" class="tips">{{tipsText}}</span>
        </transition>
      </div>
      <!-- 缩略图容器 -->
      <div class="thumbnailContainer">
        <ul>
          <li v-for="(item, index) in this.imgUrl" @click="switchImgUrl(index)" :key="index">
            <img :src="item" alt="">
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  export default {
      name: 'picture-viewer',
      props: {
        imgUrl: {
          type: Array,
          default: ''
        },
        background: {
          type: String,
          default: 'rgba(0,0,0,0.6)'
        },
        handleIconList: {
          type: Array,
          default () {
            return ['iconfont icon-fangda', 'iconfont icon-unie039', 'iconfont icon-xuanzhuan', 'iconfont icon-icon']
          }
        }
      },
      data () {
        return {
          dispalyViewer: true,
          // 图片容器数据
          i: 0,
          bigImgUrl: this.imgUrl[0],
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
          this.$nextTick(function () {
            if (this.$refs.bigImg.naturalWidth < 5000 && this.$refs.bigImg.naturalWidth > 4000) {
              this.bigImgConWidth = this.$refs.bigImg.naturalWidth * 0.2
              this.bigImgConHeight = this.$refs.bigImg.naturalHeight * 0.2
              this.imgContainer.width = this.bigImgConWidth + 'px'
              this.imgContainer.height = this.bigImgConHeight + 'px'
              this.bigImg.width = this.bigImgConWidth + 'px'
              this.bigImg.height = this.bigImgConHeight + 'px'
              this.bigImg.marginLeft = -(this.bigImgConWidth / 2) + 'px'
              this.bigImg.marginTop = -(this.bigImgConHeight / 2) + 'px'
            } else if (this.$refs.bigImg.naturalWidth > 3000 && this.$refs.bigImg.naturalWidth < 4000) {
              this.bigImgConWidth = this.$refs.bigImg.naturalWidth * 0.2
              this.bigImgConHeight = this.$refs.bigImg.naturalHeight * 0.2
              this.imgContainer.width = this.bigImgConWidth + 'px'
              this.imgContainer.height = this.bigImgConHeight + 'px'
              this.bigImg.width = this.bigImgConWidth + 'px'
              this.bigImg.height = this.bigImgConHeight + 'px'
              this.bigImg.marginLeft = -(this.bigImgConWidth / 2) + 'px'
              this.bigImg.marginTop = -(this.bigImgConHeight / 2) + 'px'
            } else if (this.$refs.bigImg.naturalWidth > 2000 && this.$refs.bigImg.naturalWidth < 3000) {
              this.bigImgConWidth = this.$refs.bigImg.naturalWidth * 0.4
              this.bigImgConHeight = this.$refs.bigImg.naturalHeight * 0.4
              this.imgContainer.width = this.bigImgConWidth + 'px'
              this.imgContainer.height = this.bigImgConHeight + 'px'
              this.bigImg.width = this.bigImgConWidth + 'px'
              this.bigImg.height = this.bigImgConHeight + 'px'
              this.bigImg.marginLeft = -(this.bigImgConWidth / 2) + 'px'
              this.bigImg.marginTop = -(this.bigImgConHeight / 2) + 'px'
            } else if (this.$refs.bigImg.naturalWidth > 1000 && this.$refs.bigImg.naturalWidth < 2000) {
              this.bigImgConWidth = this.$refs.bigImg.naturalWidth
              this.bigImgConHeight = this.$refs.bigImg.naturalHeight
              this.imgContainer.width = this.bigImgConWidth + 'px'
              this.imgContainer.height = this.bigImgConHeight + 'px'
              this.bigImg.width = this.bigImgConWidth + 'px'
              this.bigImg.height = this.bigImgConHeight + 'px'
              this.bigImg.marginLeft = -(this.bigImgConWidth / 2) + 'px'
              this.bigImg.marginTop = -(this.bigImgConHeight / 2) + 'px'
            } else {
              this.bigImgConWidth = this.$refs.bigImg.naturalWidth
              this.bigImgConHeight = this.$refs.bigImg.naturalHeight
              this.bigImg.width = this.bigImgConWidth + 'px'
              this.bigImg.height = this.bigImgConHeight + 'px'
              this.bigImg.marginLeft = -(this.bigImgConWidth / 2) + 'px'
              this.bigImg.marginTop = -(this.bigImgConHeight / 2) + 'px'
            }
            this.bigImg.marginLeft = -(this.bigImgConWidth / 2) + 'px'
            this.bigImg.marginTop = -(this.bigImgConHeight / 2) + 'px'
          })
        },
        // 点击缩略图切换图片
        switchImgUrl (num) {
          let _this = this
          this.bigImgUrl = this.imgUrl[num]
          _this.init()
        },
        // 切换到上一张
        handlePrev () {
          let _this = this
          this.i--
          if (this.i === -1) {
            _this.tips('已经是第一张了!')
            this.i = 0
          } else {
            this.bigImgUrl = this.imgUrl[this.i]
            _this.init()
          }
        },
        // 切换到下一张
        handleNext () {
          let _this = this
          this.i++
          if (this.i === this.imgUrl.length ) {
            _this.tips('已经是最后一张了!')
            _this.i = Number(this.imgUrl.length) - 1
          } else {
            this.bigImgUrl = this.imgUrl[this.i]
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
        // 关闭查看器
        closeViewer () {
          this.dispalyViewer = false
        }
      }
  }
</script>

<style scoped>
  @import "./icon/iconfont.css";
  i {
    cursor: pointer;
  }
  .closeBtn {
    position: absolute;
    top: 20px;
    right: 20px;
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
    bottom: 40px;
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
    margin-right: 20px;
    cursor: pointer;
  }
  ul li:first-child {
    margin-left: 26px;
  }
  .iconfont {
    font-size: 28px;
    color: #fff;
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
</style>
