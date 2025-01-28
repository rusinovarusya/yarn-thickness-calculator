import { useState } from 'react';
import AddYarnButton from '../add-yarn-button/AddYarnButton';
import { yarnLengthPrefix, yarnWeightPrefix } from '../const';
import './CalculatorForm.css';
import YarnList from '../yarn-list/YarnList';

const CalculatorForm = () => {
  const [yarnIdList, setYarnIdList] = useState<number[]>([1, 2]);
  const [result, setResult] = useState<number>();

  const addYarn = () => {
    setYarnIdList((prev) => [...prev, prev[prev.length - 1] + 1]);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const coefficientList = yarnIdList.map((yarnId: number) => {
      const weight = Number(formData.get(`${yarnWeightPrefix}-${yarnId}`));
      const length = Number(formData.get(`${yarnLengthPrefix}-${yarnId}`));
      return weight / length;
    });

    const coefficientSum = coefficientList.reduce((sum, coefficient) => sum + coefficient, 0);
    setResult(Math.round(100 / coefficientSum));
  };

  return (
    <>
      <form id='yarn-form' onSubmit={onSubmit}>
        <div className="yarn">
          <YarnList yarnIdList={yarnIdList} />
          <AddYarnButton onClick={addYarn} />
        </div>
      </form>
      <input className='button submit-button' type="submit" value="=" form='yarn-form' />

      {result && (
        <p className="result">{result} м / 100 г</p>
      )}
    </>
  );
};

export default CalculatorForm;
