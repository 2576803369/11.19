
import { legacy_createStore } from 'redux'
//1.创建一个reducer函数--为什么先创建，因为创建全局store的时候需要调用reducer函数

const reducer=(state=10,action={})=>{
    console.log("reducer函数被调用了");
    switch(action.type){
        case "ADD":
            return state+1;
        case "SUB":
            return state-1;
        default:
            return state;
    }
}
//2.创建全局store对象
//2.1创建全局store对象
//2.2调用reducer函数初始化store中的state值
const store = legacy_createStore(reducer);
console.log("store",store);
console.log("store里面的state值",store.getState());

//调用dispatch(action)-->自动调用reducer函数
store.dispatch({type:"ADD"})
console.log("store里面的state值",store.getState());

store.subscribe(()=>{
    console.log("store里面的state值",store.getState());
})

store.dispatch({type:"ADD"})

store.dispatch({type:"ADD"})

store.dispatch({type:"ADD"})


store.dispatch({type:"SUB"})




