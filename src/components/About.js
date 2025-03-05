import UserClass from "./UserClass";
import User from "./User";
import React from "react";
class About extends React.Component{
    constructor(){
        super()
        console.log("parent constructor")
        this.state={
            userInfo:{
            login:"yam",
            id:1234

            },
        }
    }
    

   async componentDidMount(){
    const response=await fetch("https://api.github.com/users/Yamini1630");
    const data= await response.json();
    console.log(data);
    console.log("parent Component Did Mount")
    this.setState({
        userInfo:data,
   })
   }
   
    render(){
        const arr=[1,2];
        const {login,id}=this.state.userInfo;
        console.log("Parent Render ")

    return(
        <div className="about">
        <h1>Name:{login}</h1>
        <h2>ID:{id}</h2>
        <UserClass name={"Yaminiiii"} location={"TamilNaduuu"} />
        <UserClass name={"Yaminiiii"} location={"TamilNaduuu"} />
        <User list={arr}/>
        </div>
    )

    }

}
export default About;