import Vue from "vue";
import Vuex from "vuex";
import { get} from "./config/axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        greet:'hello',
        greetFromBackend:''
    },
    mutations:{
        updateGreet(state,content){
            state.greet=content;
        },
        updateGreetFromBackend(state,content){
            state.greetFromBackend=content;
        }
    },
    actions:{
        greet(context,content){
            context.commit("updateGreet",content);
        },
        greetFromBackend(context,name){
            get(`/hello/${name}`).then(response=>{
                // window.console.log(response);
                context.commit('updateGreetFromBackend',response)
            })
        }
    }
});