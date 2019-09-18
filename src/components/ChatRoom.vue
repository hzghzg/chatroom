<template>
    <div>
        <h1 style="font-weight: bold;font-size: 60px;text-align: left">ChatRoom</h1>
        <div style="text-align: left" id="login" :style="showLogin?showObj:emptyObj">
            <el-input v-model="input" placeholder="请输入登录名" style="width:400px;display: inline-block"></el-input>
            <el-button type="primary" @click="hideLogin">确认登录</el-button>
        </div>
        <div id="chatarea" :style="showLogin?emptyObj:showObj" >
            <el-input
                    type="textarea"
                    :autosize="{ minRows: 30}"
                    placeholder=""
                    style="width:300px


"
                    v-model="content">
            </el-input>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ChatRoom",
        data:function () {
            return{
                input:'',
                content:'',
                showLogin:false,
                showObj:{'display':'none'},
                emptyObj:{}
            }
        },
        methods:{
            hideLogin(){
                this.showLogin=true
            }
        }
    }
</script>

<style scoped>
</style>