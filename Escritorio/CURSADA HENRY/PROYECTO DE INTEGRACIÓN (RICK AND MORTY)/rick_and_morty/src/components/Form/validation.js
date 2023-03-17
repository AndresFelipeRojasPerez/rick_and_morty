
const validateUserName = (userData, setErrors, errors) => {
    if (!userData.userName) setErrors({...errors, userName: "Por favor completa este campo"});
    
    else if (userData.userName.length > 35) 
        setErrors({...errors, userName: "No se puede superar los 35"});
    else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.userName))
        setErrors({... errors, userName: ""});
        else setErrors({...errors, userName: "Username inválido"});
    }
;

const validatePassword = (userData, setErrors, errors) => {
    if (!userData.password) setErrors({...errors, password: "Password vacío"});
    else {
        if (/^(?=.*[a-z])(?=.*\d)([A-Za-z\d$@$!%*?&]|[^ ]){6,10}$/.test(userData.password))
        setErrors({... errors, password: ""});
        else setErrors({...errors, password: "Password inválido, la contraseña debe tener una longitud entre 6 y 10 y debe contener al menos un número."});
    }
};



export  {validateUserName, validatePassword}