import React, {useContext} from 'react';
import AuthContext from '../../context/AuthContext'
import ReusableForm from './ReusableForm';
import useInputChange from '../../hooks/useInputChange';
import { Link } from 'react-router-dom';
import { loginRegisterFormLabels } from '../../utils/formFields';



const LoginForm = () => {

  let {loginUser} = useContext(AuthContext)

  const { inputValues, handleInputChange} = useInputChange({
    username: '',
    password: '',
  });

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mb-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <ReusableForm
              formState={inputValues}
              handleChange={handleInputChange}
              handleSubmit={loginUser}
              formFields={loginRegisterFormLabels}
              buttonText={'Sign In'}
            />
          </div>
          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <Link to='/register' className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Register now!
            </Link>
          </p>
      </div>
    </div>
    </>
  )
};

export default LoginForm;
