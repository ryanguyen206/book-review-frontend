import { useState } from 'react';

const useInputChange = (initialState) => {
  const [inputValues, setInputValues] = useState(initialState);

  const handleInputChange = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  return {
    inputValues,
    handleInputChange,
    resetForm: () => setInputValues(initialState),
  };
};

export default useInputChange;
