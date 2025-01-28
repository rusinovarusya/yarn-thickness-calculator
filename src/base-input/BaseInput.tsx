import { useState } from 'react';
import './BaseInput.css';

interface BaseInputProps {
  id: string;
  defaultValue: string;
  measurementUnits: string;
  label: string;
}

const BaseInput = ({ id, defaultValue, measurementUnits, label }: BaseInputProps) => {
  const [value, setValue] = useState<string>(defaultValue);
  
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(value);
  };

  return (
    <div className="input">
      <label htmlFor={id} className="input__label">{label}</label>
      <input className="input__input" type="text" name={id} id={id} value={value} onChange={onChange} />
      <span className="input__measurement-units">{measurementUnits}</span>
    </div>
  );
};

export default BaseInput;
