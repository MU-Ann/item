<template>
    <div class="home">
        <header>
            <span class="iconfont icon-fanhui"></span>
            <span>加班/休假</span>
            <p><span class="iconfont icon-daiban"></span>
            <span class="iconfont icon-fangdajing"></span></p>
        </header>
        <div class="state">
            <div v-for="(item,index) in state" :key="index" :class="{color:index==num}" @click="stateFn(index)">
                <span :class="item.icon"></span>
                <p>{{item.name}}</p>
            </div>   
        </div>
        <div class="main">
            <div class="nav">
               <p>
                    <span @click="overtime" :class="{active:show}">加班</span><span @click="vacationsFN" :class="{active:!show}">休假</span>
               </p>
            </div>
            <div class="content">
                <div v-for="(item,index) in data" :key="index" class="content-1" @click="clickFn(item.applicationNumber)">
                    <p class="id">{{item.applicationNumber}} 
                        <span>
                            <i class="iconfont icon-73dengdai"></i>
                        待审批</span>
                    </p>
                    <div class="item">
                         <p><span>申请人：{{item.nickname}} </span><span>加班类型：{{item.describes}}</span></p>
                         <p><span>加班日期：{{item.date}} </span><span>加班时长：{{item.timelong}}</span></p>
                    </div>
                </div>
            </div>
             <button class="tisk" @click="dialogFn">
                 <span>+</span>
                 添加任务</button>
            
        </div>
       <div v-show="flag" class="dialog">
                <div class="show">
                    <div>
                        <p class="icon icon-1" @click="overtimeFn"></p>
                        <p>加班</p>
                    </div>
                    <div>
                        <p class="icon icon-2" @click="vacationFn"></p>
                        <p>休假</p>
                    </div>
                </div>
            </div>
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
            show:true,
            flag:false,
            type:"overtime",
            num :0,
            state:[{
                name:"待处理",
                icon:"iconfont icon-shijian"
            },{
                name:"已发起",
                icon:"iconfont icon-wancheng"
            },{
                name:"已处理",
                icon:"iconfont icon-zhifeiji"
            }]
        }
    },
    computed:{
        ...mapState(["data"])
    },
    methods:{
        ...mapActions(["overdata","vacations","logindata"]),
        dialogFn() {
            this.flag = !this.flag
        },
        overtimeFn() {
            this.$router.push("/overtime")
        },
        vacationFn() {
            this.$router.push("/vacation")
        },
        stateFn(index) {
                this.num = index;
                let obj = {
                 num :this.num,
                 type :this.type
             }
               this.overdata(obj)
            
        },
        overtime(){
            this.show = true;
            this.type = "overtime";
            let obj = {
                 num :this.num,
                 type :this.type
             }
             this.overdata(obj)
        },
        vacationsFN(){
             this.show = false;
             this.type = "vacation";
            let obj = {
                 num :this.num,
                 type :this.type
             }
            this.vacations(obj)
        },
        clickFn(num) {
            this.$router.push({path:"/detail/" + num,query:{type:this.type}})
        }
    },
    created(){
      let   obj = {
                 num :this.num,
                 type :this.type
             }
        this.overdata(obj);
        this.logindata()
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
    .home{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        position: relative;
    }
    .dialog{
        width: 100%;
        height: 100%;
        flex-shrink: 0;
        position: absolute;
        left: 0;
        top:0;
        background: rgba($color: #000000, $alpha: 0.3);
        // position: relative;
        .show{
            width: 100%;
            height: 150px;
            background: #fff;
            position: absolute;
            bottom: 0;
            display: flex;
            justify-content: space-around;
            padding-top: 10px;
            div{
                width: 100px;
                height: 100px;
                display: flex;
                flex-direction: column;
                text-align: center;
                .icon{
                    width: 50px;
                    height: 50px;
                    margin: 0 auto;
                    border-radius: 50%;
                    .icon-icon-diannao2{
                        color: #fff;
                    }
                }
                .icon-1{
                    background:yellow;
                }
                .icon-2{
                    background:green;
                }
            }
        }
    }
    header{
        width: 100%;
        height: 45px;
        border-bottom: solid #ccc 1px;
        justify-content: space-around;
        align-items: center;
        display: flex;
        p{
           span{
               margin-left: 10px;
           }
        }
    }
    .state{
        width: 100%;
        height: 120px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        border-bottom: solid #ccc 1px;
        div{
            width: 30%;
            height: 100%;
            display:flex;
            align-items: center;
            padding-top: 20px;
            color: #eee;
            flex-direction: column;
            span{
                font-size: 35px;
            }
        }
        .color{
            color: green
        }
    }
    .main{
        width: 100%;
        height: 100%;
        flex: 1;
        display: flex;
        flex-direction: column;
        background: #eee;
        // position: relative;
        .nav{
            width: 100%;
            height: 80px;
            border-bottom: solid #ccc 1px;
            p{
                width: 100px;
                height: 25px;
                margin: 30px auto;
                border: solid green 1px;
                border-radius: 15px;
                display: flex;
                align-items: center;
                color: green;
                overflow: hidden;
                justify-content: space-around;
               span{
                   width: 50%;
                   height: 100%;
                   text-align: center;
                   line-height: 25px;
                   font-size: 12px;
               }
            }
        }
        .content{
            width: 100%;
            height: 100%;
            flex: 1;
            overflow: auto;
        }
    }
    .content-1{
        width: 100%;
        height: 150px;
        background: #fff;
        margin-bottom: 5px;
        display: flex;
        flex-direction: column;
        border-bottom: solid #ccc 1px;
        padding: 2px;
        .id{
            width: 100%;
            height: 25px;
            font-size: 15px;
            color: #ccc;
            display: flex;
            justify-content: space-between;
            i{
                color: yellow;
            }
        }
    }
    .item{
        width: 100%;
        height: 80%;
        font-size: 14px;
        display: flex;
        flex-direction: column;
        
        p{
            width: 100%;
            height: 25px;
            margin-top: 15px;
            display: flex;
            justify-content: space-around;
        }

    }
    .tisk{
        position: absolute;
        bottom: 25px;
        right:5px;
        border:none;
        outline: none;
        width: 120px;
        height: 35px;
        background: green;
        border-radius: 20px;
        color: #fff;
        line-height: 35px;
        z-index: 1;
        span{
            font-size: 25px;
        }
    }
    .active{
        background: green;
        color: #fff;
    }
</style>