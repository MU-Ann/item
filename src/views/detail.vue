<template>
    <div class="over">
        <header>
            <span class="iconfont icon-fanhui" @click="clickFn"></span>
       {{$route.query.type=="overtime"?"办公室加班申请表":"办公室休假申请表"}} </header>
        <div class="main">
            <div class="top"></div>
            <div class="info"> 
                <div class="person">
                    <div class="left">
                        <img :src="detail.avatar" alt="">
                    </div>
                    <div class="right">
                        <p>申请人姓名：{{detail.nickname}}</p>
                        <p>直接主管：秦毅超</p>
                        <p>申请单号：{{detail.applicationNumber}}</p>
                        <p>发起时间:{{detail.date}}</p>
                    </div>
                </div>
                <div class="item">
                    <div class="xinxi">
                        <p class="title">申请信息</p>
                        <div class="item_main">
                            <p>
                                <span>{{$route.query.type=="overtime"?"加班日期":"休假日期"}}</span>
                                <span>{{detail.date}}</span></p>
                            <p><span>{{$route.query.type=="overtime"?"加班类型":"休假类型"}}</span><span>工作日加班</span></p>
                            <p>
                                <span>{{$route.query.type=="overtime"?"加班起始时间":"休假起始时间"}}</span>
                                <span>{{detail.start}}</span>
                            </p>
                            <p>
                                <span>{{$route.query.type=="overtime"?"加班结束时间":"休假结束时间"}}</span>
                                <span>{{detail.end}}</span>
                            </p>
                            <p>
                                <span>{{$route.query.type=="overtime"?"加班时间":"休假时间"}}</span>
                                <span>{{detail.timelong}}</span>
                            </p>
                        </div>
                        <div class="jiekou">
                         <p class="title">加班事由</p>
                         {{detail.describes}}
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
        <div class="footer"></div>
    </div>
</template>
<script>
import {mapActions,mapState} from "vuex"
import "../font/iconfont.css"
export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{
        ...mapState(["detail"])
    },
    methods:{
        ...mapActions(["detailData"]),
        clickFn() {
            this.$router.go(-1)
        }
    },
    created(){
        let id = this.$route.params.id;
        let type = this.$route.query.type
        console.log(id,this.$route.query)
        let obj ={
            id,
            type,
        }
        this.detailData(obj)
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
                            width: 100%;
                            height: 25px;
                            margin-bottom: 10px;
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
    }
</style>