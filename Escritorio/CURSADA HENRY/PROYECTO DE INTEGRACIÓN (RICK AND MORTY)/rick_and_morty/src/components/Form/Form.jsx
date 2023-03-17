import { useState } from "react";
import { validateUserName, validatePassword } from "./validation";



const Form = ({login}) => {
    const [userData, setUserData] = useState({ 
        userName: '',
        password: '', });
        
        const [errors, setErrors] = useState({
            userName: "",
            password: "",
        });

    const handleChangeUserName = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setUserData({...userData, [property] : value});
        validateUserName({ ...userData, [property]: value }, setErrors, errors);
        
    };

    const handleChangePassword = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setUserData({...userData, [property] : value});
        validatePassword({ ...userData, [property]: value }, setErrors, errors);
    };
  

  const handleSubmit = (event) => {
    event.preventDefault();
    login (userData);
  };
  
  

return(

    <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="username">Username:</label>
        <input 
        type="text"
        name="userName"
        value= {userData.userName}
        onChange = {handleChangeUserName}
        />
        <span>{errors.userName}</span>
        </div>
        <div>
        <label htmlFor="password">Password:</label>
        <input
        type="password"
        name="password"
        value= {userData.password}
        onChange = {handleChangePassword}
        />
        <span>{errors.password}</span>
        <div>
        <button type="submit">LOGIN</button>
        </div>
        </div>
    </form>
)
}

export default Form;