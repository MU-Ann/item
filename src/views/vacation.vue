<template>
    <div class="over">
        <header>
            <span class="iconfont icon-fanhui" @click="clickFn"></span>
        办公室加班申请表</header>
        <div class="main">
            <div class="top"></div>
            <div class="info"> 
                <div class="person">
                    <div class="left">
                        <img src="" alt="">
                    </div>
                    <div class="right">
                        <p>申请人姓名</p>
                        <p>直接主管：秦毅超</p>
                      
                    </div>
                </div>
                <div class="item">
                    <div class="xinxi">
                        <p class="title">申请信息</p>
                        <div class="item_main">
                            <p>
                                <span>休假日期</span>
                               <input type="datetime-local" v-model="obj.date"/></p>
                            <p><span>加班类型</span><span>工作日加班</span></p>
                            <p>
                                <span>休假起始时间</span>
                                <input type="datetime-local" v-model="obj.starttime"/>
                            </p>
                            <p>
                                <span>休假结束时间</span>
                                <input type="datetime-local" v-model="obj.endtime"/>
                            </p>
                            <p>
                                <span>休假时长</span>
                                <span></span>
                            </p>
                        </div>
                        <div class="jiekou">
                         <p class="title">休假事由</p>
                            <textarea name="" id="" cols="40" rows="5" v-model="obj.describes"></textarea>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
        <div class="footer">
            <span>取消</span><span @click="submit">提交</span>
        </div>
    </div>
</template>
<script>
import "../font/iconfont.css"
import { mapActions } from 'vuex';
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            obj:{
                date:"",
                starttime:"",
                endtime:"",
                describes:""
            }
        }
    },
    computed:{
    },
    methods:{
        ...mapActions(["addvacation"]),
        clickFn() {
            this.$router.go(-1)
        },
        submit(){
           console.log(this.obj);
           this.addvacation(this.obj)
       }
    },
    created(){
       
    },
    mounted(){
        
    }
}
</script>
<style scoped lang="scss">
.over{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
    header{
        width: 100%;
        height: 45px;
        background: green;
        color: #fff;
        line-height: 45px;
        span{
            text-align: left;
            margin-right: 100px;
        }
    }
    .main{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        position: relative;
        .top{
            width: 100%;
            height: 200px;
            background: green;
            position: absolute;
            left: 0;
            top: 0;
            border-bottom-right-radius:100px;
            border-bottom-left-radius:100px;
        }
        .info{
            width: 100%;
            height: 100%;
            flex: 1;
            background: #eee;
            display: flex;
            flex-direction: column;
            .person{
                width: 100%;
                height: 120px;
                position: absolute;
                left: 0;
                top: 0;
                display: flex;
                flex-wrap: wrap;
                .left{
                    width: 30%;
                    height: 100%;
                    border-radius: 50%;
                    overflow: hidden;
                    background: #ccc;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .right{
                    width: 70%;
                    height: 100%;
                    padding-top: 15px;
                    padding-left: 15px;
                    color: #fff;
                }
            }
            .item{
                width: 100%;
                height: 100%;
                flex: 1;
                position: absolute;
                left: 0;
                top: 0;
                overflow: auto;
                .xinxi{
                    width: 85%;
                    height: 500px;
                    margin: 125px auto;
                    border-radius: 5px;
                    background: #fff;
                    padding: 5px;
                    display: flex;
                    flex-direction: column;
                    .title{
                        padding-top: 5px;
                        padding-bottom: 5px;
                        border-bottom: solid #ccc 1px;
                    }
                    
                    .item_main{
                        width: 100%;
                        height: 100%;
                        flex: 1;
                       p{
                           display: flex;
                            justify-content: space-between;
                            margin-top: 15px;
                       }
                    }
                    .jiekou{
                        width: 100%;
                        height: 150px;
                    }
                } 
               
            }
        }   
    }
    .footer{
        width: 100%;
        height: 45px;
        border-top: 1px #ccc solid;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
</style>