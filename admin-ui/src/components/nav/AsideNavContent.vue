<template>
  <div class="aside-nav-wrap affix" >
    <div style="border-bottom: 1px solid #eee;">
      <el-input style="padding: 12px 8px"
                size="mini"
                placeholder="请输入搜索内容"
                v-model="input"
                class="input-with-select">
        <el-button slot="append"
                   icon="el-icon-search"></el-button>
      </el-input>
    </div>
    <el-menu router="true"
             active-text-color=  "#ffd04b"
             :default-active="active"
             text-color="#fff"
             background-color="#545c64"
             class="visible-xs"  >
      <el-menu-item index="1"
        class="sub-item-bb" >
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="2"
                    class="sub-item-bb">
        <i class="el-icon-document"></i>
        <span slot="title">设置</span>
      </el-menu-item>
      <el-menu-item index="3"
                    class="sub-item-bb">
        <i class="el-icon-setting"></i>
        <span slot="title">控制</span>
      </el-menu-item>
      <el-menu-item index="4"
                    class="sub-item-bb">
        <i class="el-icon-setting"></i>
        <span slot="title">控制</span>
      </el-menu-item>
      <el-menu-item index="5"
                    class="sub-item-bb">
        <i class="el-icon-setting"></i>
        <span slot="title">控制</span>
      </el-menu-item>
      <el-menu-item index="6"
                    class="sub-item-bb">
        <i class="el-icon-setting"></i>
        <span slot="title">控制</span>
      </el-menu-item>
      <el-menu-item index="7"
                    class="sub-item-bb">
        <i class="el-icon-setting"></i>
        <span slot="title">控制</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: 'AsideNavContent',
    data(){
      return {active:'1'};
    }
  };
</script>

<style scoped>
  .sub-item-bb {
    border-bottom: 1px solid #999;
  }
  .aside-nav-wrap {
    overflow: auto;
    background-color: rgb(84, 92, 100);
    height: 100%;
    width: 70%;
    z-index: 6000;
  }


</style>
