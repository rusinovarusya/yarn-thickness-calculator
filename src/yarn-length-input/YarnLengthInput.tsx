import BaseInput from '../base-input/BaseInput';
import { yarnLengthPrefix } from '../const';

interface YarnLengthInputProps {
  id: number;
}

const YarnLengthInput = ({ id }: YarnLengthInputProps) => {
  const yarnLengthInput = `${yarnLengthPrefix}-${id}`;

  return (
    <BaseInput id={yarnLengthInput} defaultValue='0' measurementUnits='м' label='Длина:' />
  );
};

export default YarnLengthInput;
