const User=(props)=>{
    const {list}=props;
    console.log(list)
    return(
<div>
    <h1>Function based</h1>
    <ul>
        {list.map((item,index)=>(
            <li key={index}>{item}</li>

        ))}
     </ul>
    
    </div>
    )
}

export default User;