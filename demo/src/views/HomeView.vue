<template>
  <div class="home">
    <el-container>
      <el-aside width="200px">
        <el-menu default-active="dashboard" class="el-menu-vertical-demo" background-color="#304156" text-color="#bfcbd9"
          active-text-color="#ffd04b" router>
          <el-menu-item index="dashboard">
            <i class="el-icon-setting"></i>
            <span slot="title">主页</span>
          </el-menu-item>
          <el-submenu :index="item.path" v-for="item in menus" :key="item.id">
            <template slot="title">
              <i :class="item.icon"></i>
              <span>{{item.title}}</span>
            </template>
            <el-menu-item :index="item.path+'/'+ele.path" v-for="ele in item.children" :key="ele.id">
              <i :class="ele.icon"></i>
              <span>{{ele.title}}</span>
            </el-menu-item>
          </el-submenu>

        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { getAside } from "../utils/index"
export default {
  data() {
    return {
      menus: []
    };
  },
  methods: {},
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
    .el-menu{
      height: 100%;
    }
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    height: 100vh;
  }

  body>.el-container {
    margin-bottom: 40px;
  }
}
</style>