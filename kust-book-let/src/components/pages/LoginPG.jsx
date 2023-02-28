import React, { useState } from 'react';

const PasswordValidationForm = () => {
  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    setIsPasswordValid(validatePassword(newPassword));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setIsFormSubmitted(true);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
        {isFormSubmitted && !isPasswordValid && (
          <p style={{ color: 'red' }}>Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long</p>
        )}
        {isFormSubmitted && isPasswordValid && (
          <p style={{ color: 'green' }}>Password is valid</p>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PasswordValidationForm;
