<template>
  <div>
    <aside-nav></aside-nav>
  </div>
</template>

<script>
import HeaderNav from './components/HeaderNav';
import AsideNav from './components/AsideNav';
export default {
  name: 'App',
  components:{
    HeaderNav,AsideNav
  },
  data(){return{
  };},
  methods:{

  }
};
</script>
<style>
  a:active,a:focus,a:link,a,a:hover {
    text-decoration: none;
  }
</style>
