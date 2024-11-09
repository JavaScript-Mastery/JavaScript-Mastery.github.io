import React, { useState } from 'react';
import Input from './Input';
import Label from './Label';

function FormExample() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      <Label htmlFor="username">Username</Label>
      <Input
        id="username"
        placeholder="Enter your username"
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default FormExample;