import React from 'react';

const Step2 = ({ nextStep, prevStep, handleChange, formData }) => {
  return (
    <div>
      <h2>Step 2: Additional Information</h2>
      <label>Age:</label>
      <input type="number" value={formData.age} onChange={handleChange('age')} />
      <br />
      <label>Address:</label>
      <input type="text" value={formData.address} onChange={handleChange('address')} />
      <br />
      <button onClick={prevStep}>Back</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default Step2;
