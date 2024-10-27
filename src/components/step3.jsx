import React from 'react';

const Step3 = ({ nextStep, prevStep, handleChange, formData }) => {
  return (
    <div>
      <h2>Step 3: Location Information</h2>
      <label>City:</label>
      <input type="text" value={formData.city} onChange={handleChange('city')} />
      <br />
      <button onClick={prevStep}>Back</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default Step3;
