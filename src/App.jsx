import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as types from '@/actions'
const mapStateToProps=(state,props)=>{
  console.log("mapStateToProps state",state,"props",props);
  return {
    counter:state.counter 
  }
}

@connect(mapStateToProps,types)
 class App extends Component {
  render() {
   console.log("App this.props",this.props);
   let {add,sub,counter }=this.props; //{dispatch:f,count:0}
    return (
      <div>
         <h3>App组件</h3>
         <p>count:{counter.count}</p>
         <button onClick={()=>add({name:"tom",age:19})}>+</button>
         <button onClick={sub}>-</button>
      </div>
    )
  }
}



export default App;
