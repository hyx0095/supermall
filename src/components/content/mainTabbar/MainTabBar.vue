<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="red">
      <img slot="item-icon" src="~assets/img/tabbar/homepage.svg">
      <img slot="item-icon-active" src="~assets/img/tabbar/homepage_fill.svg">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="red">
      <img slot="item-icon" src="~assets/img/tabbar/manage.svg">
      <img slot="item-icon-active" src="~assets/img/tabbar/manage_fill.svg">
      <div slot="item-text">目录</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="red">
      <img slot="item-icon" src="~assets/img/tabbar/remind.svg">
      <img slot="item-icon-active" src="~assets/img/tabbar/remind_fill.svg">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="red">
      <img slot="item-icon" src="~assets/img/tabbar/people.svg">
      <img slot="item-icon-active" src="~assets/img/tabbar/people_fill.svg">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from "components/common/tabbar/TabBar";
  import TabBarItem from "components/common/tabbar/TabBarItem";

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
