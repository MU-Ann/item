import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        data :[],
        detail :{},
        userinfo:null
    },
    mutations:{
        setdata(state,data){
            state.data = data.data;
            state.data.map((item)=>{
                let d = new Date(item.create_at);
                let year = d.getFullYear();
                let month = d.getMonth()+1;
                let day = d.getDate();
                let date = year +"/" 
                if (month < 10) date += "0"
                date += month +="/";
                if(day <10) date += "0"
                date += day + "";
                item.date = date
                let start = item.startTime;
                var time = new Date(start)
                let end = item.endTime;
                var time1 = new Date(end)
               let timer= time1.getTime() - time.getTime();
                item.timelong = (timer / 1000 / 60 / 60 / 24).toFixed(1)// 秒
            })
        },
        setdetail(state,data) {
            state.detail = data;
            let d = new Date(state.detail.create_at);
            let year = d.getFullYear();
            let month = d.getMonth() + 1;
            let day = d.getDate();
            let date = year + "/"
            if (month < 10) date += "0"
            date += month += "/";
            if (day < 10) date += "0"
            date += day + "";
            state.detail.date = date;
            let start = state.detail.startTime;
            var time = new Date(start)
            state.detail.start = time.toLocaleString();
            let end = state.detail.endTime;
            var time1 = new Date(end)
            state.detail.end = time1.toLocaleString();
            let timer = time1.getTime() - time.getTime();
            state.detail.timelong =( timer / 1000 / 60 / 60 / 24).toFixed(1) // 秒
        },
        setuserinfo(state,data){
            state.userinfo = data
        }
    },
    actions:{
        overdata({commit},obj){
            axios.get("http://localhost:3000/api/task/list?status=" + obj.num  + "&type=" + obj.type + "&create_at=0&pageSize=20&page=1").then((res) => {
                console.log(res.data)
                commit("setdata",res.data)
            }).catch()
        },
        vacations({ commit }, obj) {
            axios.get("http://localhost:3000/api/task/list?status=" + obj.num  + "&type=" + obj.type + "&create_at=0&pageSize=10&page=1").then((res) => {
                console.log(res.data)
                commit("setdata", res.data)
            }).catch()
        },
        detailData({commit},obj){
            let token = localStorage.token;
            axios.defaults.headers.common['token'] = token
            axios.get("http://localhost:3000/api/apply/" + obj.type+"?applicationNumber="+obj.id).then((res)=>{
                commit("setdetail",res.data.data)
                console.log(res.data)
            }).catch();
          
        },
        addovertime({commit},obj){
            let token = localStorage.token;
            axios.defaults.headers.common['token'] = token
            console.log(obj)
            axios.post("http://localhost:3000/api/apply/overtime", { describes: obj.describes, startTime: obj.starttime, endTime: obj.endtime}).then((res)=>{
                console.log(res.data)
            }).catch(); 
        },
        addvacation({ commit }, obj) {
            let token = localStorage.token;
            axios.defaults.headers.common['token'] = token
            console.log(obj)
            axios.post("http://localhost:3000/api/apply/vacation", { describes: obj.describes, startTime: obj.starttime, endTime: obj.endtime }).then((res) => {
                console.log(res.data)
            }).catch();
        },
        logindata({ commit }){
            let token = localStorage.token;
            axios.defaults.headers.common['token'] = token
            // http://localhost:3000/api/user/info
            axios.get("http://localhost:3000/api/user/info").then((res) => {
                commit("setuserinfo", res.data.data)
                console.log(res.data)
            }).catch();
        }
    }
})