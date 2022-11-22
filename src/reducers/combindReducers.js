export function combineReducers(reducers){
    return function(state={},action){
        //合并后的state
        let newState={};
        Object.keys(reducers).forEach(key=>{
            //获得上次单独的state--childState
            let childState=state[key];
            newState[key]=reducers[key](childState,action);
        })
        return newState;
    }
}