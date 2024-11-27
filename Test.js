import {Component} from "react";



class Test extends Component{
  constructor(){
    super();
    this.state={
      count:0,
    }
  }
  handelClick(){
    this.setState({count:this.state.count+=1})
    console.log("Count:", this.state.count)
  }
  decrement(){
      this.setState({count:this.state.count-=1})
      console.log("Count:",this.state.count)
    // if(this.state.count>0){
    //   this.setState({count:this.state.count-=1})
    //   console.log("Count:",this.state.count)
    // }
    // else{
    //   <h1>You cann't decrement of count</h1>
    // }
  }
  reset(){
    this.setState({count:this.state.count=0})
    console.log("count:",this.state.count)
  }
  render(){
     return(
      <div>
         <h1>Test Component:{this.state.count}</h1>
         <button onClick={()=>this.handelClick()}>increment</button>
         <button onClick={()=>this.decrement()}>decrement</button>
         <button onClick={()=>this.reset()}>Reset</button>
         
      </div>

     )
  }
  
}

export default Test;