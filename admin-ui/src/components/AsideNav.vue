<template>
  <div id="aside-wrap">
    <transition name="slide">
    <aside-nav-content  v-show="show"></aside-nav-content>
    </transition>
    <div class="nav-wrap"
         :class="{'nav-show-hidden-self' : show}">
      <nav  class="navbar navbar-inverse  navbar-fixed-top clearfix" >
        <button style="left: 5px;"
                type="button"
                class="navbar-toggle pull-left"
                @click.stop="show=!show" >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a href="#"
           class="pd0">
          <img class="logo-img-mobile"
               src="../assets/logo.png"
               alt="">
          <span class="h2 text-muted logo-text-mobile" >Vue</span></a>
      </nav>
      <div style="padding-top: 52px"
           class="visible-xs"></div>
      <div style="height: 1000px">ddd</div>
    </div>
    <!--遮挡操作 本该和侧边内容区合并的 可改进-->
    <div class="affix shelter-space"
         v-show="show"
         @click="show=false">
    </div>
  </div>
</template>

<script>
  import  AsideNavContent from './nav/AsideNavContent';
  export default {
    name: 'AsideNav',
    components:{AsideNavContent},
    data:()=>{
      return {
        show:false
      };
    },
    watch:{
      show:()=>{
      }
    }
  };
</script>

<style scoped>
  .shelter-space {
    z-index: 10000;
    height: 100%;
    width: 30%;
    right: 0;
    top: 0;
  }
  .nav-wrap {
    transition: all .4s;
  }
  .nav-show-hidden-self {
    -webkit-transform: translateX(70%);
    -moz-transform: translateX(70%);
    -ms-transform: translateX(70%);
    -o-transform: translateX(70%);
    transform: translateX(70%);
  }
  .slide-enter-active, .slide-leave-active {
    transition: all .4s ease;
  }
  .slide-enter, .slide-leave-to   {
    -webkit-transform: translateX(-100%);
    -moz-transform: translateX(-100%);
    -ms-transform: translateX(-100%);
    -o-transform: translateX(-100%);
    transform: translateX(-100%);
  }
  .logo-img-mobile {
    height: 36px;
    width: auto;
  }
  .logo-text-mobile {
    position: relative;
    top: 8px;
  }

  .pd0 {
    padding: 3px;
    position: absolute;
    left: 36%;
    float: none;
  }

</style>
