import React, { useEffect } from 'react';

const ReusableForm = ({ formState, handleChange, handleSubmit, formFields, buttonText, mutation, message}) => {
  const isLoading = mutation?.isLoading || false;
    
  return (
    formState &&
    <form className="space-y-6" onSubmit={handleSubmit}>
      {formFields.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name} className="block text-lg font-lg leading-6 text-gray-900">
            {field.label}
          </label>
          <div className="mt-2">
            {field.type === 'select' ? (
              <select
                id={field.name}
                name={field.name}
                onChange={handleChange}
                value={formState[field.name]}
                required={field.required}
                className="block w-full rounded-md border-2 py-1.5 px-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 "
              >
                {field?.options?.map((option, index) => (
                  <option key={index} value={index + 1}>
                    {option}
                  </option>
                ))}
              </select>
            ) : field.type === 'textarea' ? (
              <textarea
                id={field.name}
                name={field.name}
                onChange={handleChange}
                value={formState[field.name]}
                required={field.required}
                className="block w-full rounded-md border-2 py-1.5 px-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:leading-6"
              />
            ) : (
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                onChange={handleChange}
                value={formState[field.name]}
                required={field.required}
                className="block w-full rounded-md border-2 py-1.5 px-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
              />
            )}
          </div>
        </div>
      ))}
      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5  font-semibold  text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          disabled={isLoading}
        >
            {isLoading ? message : buttonText}
        </button>
      </div>
    </form>
  );
};

export default ReusableForm;
 