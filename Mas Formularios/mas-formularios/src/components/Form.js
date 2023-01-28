
import React, {useState} from  'react';

const Form = props => {
    const { inputs, setInputs } = props;
    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const onChange = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value, 
        });
    }
    const handleError = (e) => {
        let name = e.target.name;
        let valueLen = e.target.value.length;

        if((name === 'firstName' || name === 'lastName') && valueLen > 0 && valueLen < 2){
            setErrors({...errors,[name]:"Name must be at least 2 characters"});
        }
        else if((name === 'email') && valueLen < 5){
            setErrors({...errors, [name]: "Email must be at least 5 characters."});
        }
        else if((name === 'password' || name === 'confirmPassword') && valueLen < 8){
            setErrors({...errors,[name]: "Password must be at least 8 characters."})
        }
        else {
			setErrors({ ...errors, [name ]: "" });
		}
    }
    return(
        <form>
            <div>
                <label htmlFor='firstName'>First Name: </label> 
                <input onChange= {handleError} type="text" name='firstName'  />
            </div>
            {
                errors.firstName
            }
            <div>
                <label>Last Name: </label> 
                <input onChange= {handleError} type="text" name ='lastName'/>
            </div>
            {
                errors.lastName 
            }
            <div>
                <label>Email Address: </label> 
                <input onChange= {handleError} type="text" name ='email'/>
            </div>
            {
                errors.email
            }
            <div>
                <label>Password: </label>
                <input onChange= {handleError} type="password" name ='password'/>
            </div>
            {
                errors.password
            }
            <div>
                <label>Confirm Password: </label>
                <input onChange= {handleError} type="password" name ='confirmPassword' />
                {
                    errors.confirmPassword != errors.password ? <p>Passwords must match.</p> :''
                }
            </div>
            {
                errors.confirmPassword
            }
            
        </form>
    );
};
    
export default Form;
