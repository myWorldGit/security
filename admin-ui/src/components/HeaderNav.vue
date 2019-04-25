<template>
  <div>
    <el-menu class="hidden-xs" router="true"
             mode="horizontal"
             active-text-color="#ffd04b"
             text-color="#fff"
             :default-active="active"
             background-color="#545c64">
      <a class="pull-left marginleft20"
         href="#">
        <img class="logo-img"src="../assets/logo.png" alt="logo">
      </a>
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">用户</span>
      </el-menu-item>
      <el-menu-item index="3" >
        <i class="el-icon-document"></i>
        <span slot="title">设置</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">控制</span>
      </el-menu-item>
    </el-menu>
    <nav class="navcolor visible-xs navbar-fixed-top navbar navbar-default" role="navigation">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" @click="navShow=!navShow">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" style="padding: 0;" href="#">
            <img class="logo-img-mobile" src="../assets/logo.png" alt="logo">
          </a>
        </div>
        <el-collapse-transition>
        <div class="collapse navbar-collapse center-block" v-show="navShow">
          <ul class="nav navbar-nav" >
            <li>
              <el-menu router="true" active-text-color=  "#ffd04b" :default-active="active"
                        text-color="#fff" background-color="#545c64" class="visible-xs"  >
              <el-menu-item index="1">
                <i class="el-icon-menu"></i>
                <span slot="title">首页</span>
              </el-menu-item>
              <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">用户</span>
              </el-menu-item>
              <el-menu-item index="3" >
                <i class="el-icon-document"></i>
                <span slot="title">设置</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">控制</span>
              </el-menu-item>
            </el-menu>
            </li>
          </ul>
        </div>
        </el-collapse-transition>
      </div>
    </nav>
    <div class="visible-xs paddingtop52"></div>
    <div @click="navShow=false" style="background-color: red;height: 4000px" >2</div>
  </div>
</template>

<script>
  export default {
    name: 'HeaderNav',
    data(){return{
      active:'1',
      navShow:false
    };}
  };
</script>

<style scoped>
  button.navbar-toggle:focus,button.navbar-toggle {
    background-color: rgb(255, 208, 75);
    background-color: #545c64;
  }
  .logo-img-mobile {
    height: 52px;
    width: auto;
    padding: 0 20px;
  }
  .logo-img {
    height: 60px;
    width: auto;
    padding: 0 20px;
  }
  .marginleft20{
    margin: 0 40px;
  }
  .paddingtop52 {
    margin-top: 52px;
  }

  a:focus {
    outline: 0;
    border: 0;
  }
  .navcolor {
    background-color: #545c64;
  }

</style>
