<template>
    <div class="breadcrumb">
        <slot></slot>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item>{{title}}</el-breadcrumb-item>
        </el-breadcrumb>
        <p class="user">欢迎管理员:admin
            <el-avatar src="https://img1.imgtp.com/2022/09/17/Pszm4BaW.jpg"></el-avatar>
            <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                    <i class="el-icon-caret-bottom"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item> <span @click="logout">退出</span> </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </p>
    </div>
</template>

<script>
export default {
    props: {
        title: String
    },
    data() {
        return {

        };
    },
    methods: {
        logout() {
            localStorage.clear()
            this.$router.push('/login')
        }
    },
    computed: {},
    created() { }
}
</script>

<style lang="scss" scoped>
.breadcrumb {
    width: 100%;
    height: 50px;
    line-height: 50px;
    background-color: #fff;
    display: flex;
    position: relative;

    ::v-deep .el-breadcrumb {
        line-height: 50px;
    }

    .user {
        line-height: 50px;
        display: flex;
        align-items: center;
        position: absolute;
        right: 20px;

        ::v-deep .el-avatar {
            margin: 0 5px;
        }
    }
}
</style>