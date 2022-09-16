<template>
    <div class="login">
        <div class="dv">
            <h1>Login Form</h1>
            <el-form ref="form" :model="form" :rules="rules">
                <el-form-item prop="username">
                    <el-input placeholder="请输入用户名" v-model="form.username">
                        <i slot="prefix" class="el-icon-user-solid"></i>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input placeholder="请输入密码" v-model="form.password" show-password>
                        <i slot="prefix" class="el-icon-lock"></i>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit('form')">Login</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import { getLogin } from "../utils/index"
export default {
    data() {
        return {
            form: {
                username: "",//用户名
                password: ""//密码
            },
            rules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        // 点击登录按钮
        onSubmit(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    // 发送登录请求
                    getLogin(this.form).then(res => {
                        console.log(res.data);
                        if (res.data.code == 20000) {
                            localStorage.setItem('token', res.data.data.token)//存储token令牌
                            localStorage.setItem('userInfo', res.data.data.userInfo) //存储userInfo身份
                            this.$message({
                                message: '登录成功',
                                type: 'success'
                            });
                            this.$router.push('/')
                        }else{
                            this.$message({
                                message: '登录失败',
                                type: 'error'
                            });
                        }
                    })
                } else {
                    this.$message({
                        message: '登录失败',
                        type: 'error'
                    });
                    return false;
                }
            });
        }
    },
    computed: {},
    created() {

    }
}


</script>

<style lang="scss" scoped>
.login {
    width: 100%;
    height: 100vh;
    background-color: #2d3a4b;
    color: #fff;

    .dv {
        width: 450px;
        margin: auto;
        padding-top: 150px;

        h1 {
            margin-bottom: 30px;
        }

        ::v-deep .el-input__inner {
            background-color: #283443;
            border: 1px #666 solid;
            padding-left: 40px;
            color: #fff;
        }

        ::v-deep .el-input__prefix {
            left: 15px;
        }

        .el-button {
            width: 450px;
        }
    }
}
</style>