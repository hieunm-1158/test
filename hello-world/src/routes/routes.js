import Vue from 'vue'
import VueRouter from 'vue-router';
import HelloWorld from "../components/HelloWorld.vue"
import HelloWorld2 from "../components/HelloWorld2.vue"
import User from "../components/User.vue"
import NotFound from "../components/NotFound.vue"

Vue.use(VueRouter)


export const router= new VueRouter({
    mode:'history',
    routes:[
        {
            path:"/hello1",name:"hello1" ,component: HelloWorld
            
        },
        
        {
            path:"/hello2",name:"hello2", component: HelloWorld2
        },
        { path: '/user/:id',name:"user", component: User, children:[
            {
                path:"hello1" ,component: HelloWorld
            },
            {
                path:"hello2", components: {
                    default:HelloWorld,
                    helper: HelloWorld2
                }
            },
        ] },
        {
            path:"/:catchAll(.*)", component:NotFound
        },
       
    ]
})