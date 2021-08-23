//store.js
import  rain from '../image/Resources/rain.png'


import { createStore } from "redux"

const defaultState={
    counter:''
}

//纯函数
let reducers =(state = defaultState ,action)=>{
    switch (action.type){
        case "increment":
            return {
                counter:<img src={rain} id="btn3"  alt="" />
            }
        default :
        return state 
    }
}
const store = createStore(reducers)
export default store
