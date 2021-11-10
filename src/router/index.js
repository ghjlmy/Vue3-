import { createRouter,createWebHashHistory } from "vue-router";
const router=createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:"/",
            name:"home",
            component:()=>import("../page/note.vue"),
            children:[
                
                {
                    path:"/",
                    component:()=>import("../page/noteSon.vue")
                },
            ]
        },{
            path:"/hh",
            component:()=>import("../page/one.vue")
        }
        ,{
            path:"/log",
            component:()=>import("../page/WebSocketLode.vue")
        }
        ,{
            path:"/note",
            component:()=>import("../page/note.vue")
        }
    ]
})
export default router