import React from 'react';

const Confirmation = ({ formData, prevStep }) => {
  return (
    <div>
      <h2>Confirmation</h2>
      <p><strong>Name:</strong> {formData.name}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Age:</strong> {formData.age}</p>
      <p><strong>Address:</strong> {formData.address}</p>
      <p><strong>City:</strong> {formData.city}</p>
      <button onClick={prevStep}>Back</button>
      <button onClick={() => alert('Form submitted!')}>Submit</button>
    </div>
  );
};

export default Confirmation;
