import { useState } from "react";

function HandleEmail(){
const [email,setEmail]=useState("");
const handleChange=(e)=>{
    setEmail(e.target.value)
}
return(
    <div>
      <h2>Update Email</h2>
      <form>
        <label>
          Email:
          <input
            type="email"
            value={email}  // Controlled input with the state value
            onChange={handleChange}  // Update state when email is changed
            placeholder="Enter your email"
          />
        </label>
      </form>
      <p>Your email: {email}</p>  {/* Display the email value */}
    </div>
  
);
    
}
export default HandleEmail;