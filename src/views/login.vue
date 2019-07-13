<template>
    <div class="login">
        <p>
            <input type="text" placeholder="请输入账号" v-model="user">
        </p>
        <p>
            <input type="password" placeholder="请输入密码" v-model="pwd">
        </p>
        <p>
            <button @click="clickFn">登录</button>
        </p>
    </div>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            user:"",
            pwd:""
        }
    },
    computed:{

    },
    methods:{
        clickFn() {
            // console.log(this.user,this.pwd)
            this.$axios.post("http://localhost:3000/api/login",{password:this.pwd,phone:this.user}).then((res)=>{
                // console.log(res.data.token)
                localStorage.token = res.data.token;
                this.$router.go(-1)
            })
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
    .login{
        width: 100%;
        height: 100%;
        p{
            width: 100%;
            height: 45px;
            margin-top: 15px;
            padding-left: 15px;
            border-bottom: solid #ccc 1px;
            input{
                width: 100%;
                height: 90%;
                border: none;
                outline: none;
            }
            button{
                width: 90%;
                height: 90%;
                background: #777;
                border: none;
                outline: none;
                margin-left: 15px;
                color: #fff;
                border-radius: 20px;
            }
        }
    }
</style>