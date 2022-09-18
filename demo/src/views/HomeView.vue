<template>
  <div class="home">
    <el-container>
      <el-aside :width="isCollapse?'60px':'220px'">
        <el-menu :collapse="isCollapse" default-active="dashboard" class="el-menu-vertical-demo"
          background-color="#304156" text-color="#bfcbd9" active-text-color="#ffd04b" router>
          <el-menu-item index="dashboard">
            <i class="el-icon-setting"></i>
            <span slot="title">主页</span>
          </el-menu-item>
          <el-submenu :index="item.path" v-for="item in menus" :key="item.id">
            <template slot="title">
              <i :class="item.icon"></i>
              <span>{{item.title}}</span>
            </template>
            <el-menu-item :index="ele.path" v-for="ele in item.children" :key="ele.id">
              <i :class="ele.icon"></i>
              <span>{{ele.title}}</span>
            </el-menu-item>
          </el-submenu>

        </el-menu>
      </el-aside>
      <el-main>
        <breadcrumb :title="title">
          <i class="el-icon-s-fold" @click="isCollapse=!isCollapse"></i>
        </breadcrumb>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import breadcrumb from '@/components/Breadcrumb.vue';
import { getAside } from "../utils/index"
export default {
  components: {
    breadcrumb
  },
  data() {
    return {
      menus: [],//侧边导航栏
      isCollapse: false,//侧边导航栏状态
      title: '主页',//面包蟹标题
    };
  },
  methods: {
  },
  computed: {},
  created() {
    getAside().then(res => {
      console.log(res.data.data.permissionList);
      this.menus = res.data.data.permissionList
    })
  }
}
</script>

<style lang="scss" scoped>
.home {
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    height: 100vh;

    .el-menu {
      height: 100%;
    }
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    height: 100vh;
    padding: 0px;

    .el-icon-s-fold {
      line-height: 50px;
      margin: 0 15px;
      font-size: 20px;
    }
  }

  body>.el-container {
    margin-bottom: 40px;
  }
}
</style>