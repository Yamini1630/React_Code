import React from "react";
class UserClass extends React.Component{
    constructor (props){
     super(props);
     console.log("Child constructor")
     this.state={
        count:0,
        count2:1
     };
 }
 componentDidMount(){

console.log("Child Component Did Mount")
 }
    render(){
        console.log("Child Render");
        const {location,name}=this.props;
        const{count,count2}=this.state;
        return(
            <div>
                <h1>class based</h1>
                <h1>{name}</h1>
                <h2>{location}</h2>
                <h2>Count:{count}</h2>
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count + 1,
                    });
                }}>Click Me</button>
               
                
            </div>
        )
    }
}
export default UserClass;