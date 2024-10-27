import React from 'react';

const Step1 = ({ nextStep, handleChange, formData }) => {
  return (
    <div>
      <h2>Step 1: Personal Information</h2>
      <label>Name:</label>
      <input type="text" value={formData.name} onChange={handleChange('name')} />
      <br />
      <label>Email:</label>
      <input type="email" value={formData.email} onChange={handleChange('email')} />
      <br />
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default Step1;
