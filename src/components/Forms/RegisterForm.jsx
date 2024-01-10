import React, {useContext} from 'react';
import ReusableForm from './ReusableForm';
import useInputChange from '../../hooks/useInputChange';
import useToastNotifications from '../../hooks/useToastNotifications';
import AuthContext from '../../context/AuthContext';
import { loginRegisterFormLabels } from '../../utils/formFields';


const RegisterForm = () => {


    let {loginUser} = useContext(AuthContext)

  const { inputValues, handleInputChange, resetForm} = useInputChange({
    username: '',
    password: '',
  });

  let registerUser = async (e)=> {
        e.preventDefault()
        if (e.target.username.value.length < 6 || e.target.password.value.length < 6)
        {
              useToastNotifications('Username and password length must be greater than six', 'error');
              return;
        }
        let response = await fetch(`${process.env.REACT_APP_API}/api/token/register/`, {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'username':e.target.username.value, 'password':e.target.password.value})
        })

        let data = await response.json()

        if (response.status === 201) {
          useToastNotifications('User successfully created', 'success');
          resetForm()
          loginUser(e)
        } else if (data.username) {
          useToastNotifications(data.username[0], 'error')
        }

    
}

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mb-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Register
          </h2>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <ReusableForm
              formState={inputValues}
              handleChange={handleInputChange}
              handleSubmit={registerUser}
              formFields={loginRegisterFormLabels}
              buttonText={'Register'}
            />
          </div>
    
      </div>
    </div>
    </>
  )
};

export default RegisterForm;
