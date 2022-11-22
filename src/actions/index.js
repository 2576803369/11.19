import { ADD,SUB} from '@/constants'
export const add = (data)=>{
    console.log("action function add");
    return {
        type:ADD
    }
}

export const sub = ()=>{
    return {
        type:SUB
    }
}