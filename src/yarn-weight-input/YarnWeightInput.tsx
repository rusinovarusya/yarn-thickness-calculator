import BaseInput from '../base-input/BaseInput';
import { yarnWeightPrefix } from '../const';

interface YarnWeightInputProps {
  id: number;
}

const YarnWeightInput = ({ id }: YarnWeightInputProps) => {
  const yarnWeightInputId = `${yarnWeightPrefix}-${id}`;

  return (
    <BaseInput id={yarnWeightInputId} defaultValue='100' measurementUnits='г' label='Масса:' />
  );
};

export default YarnWeightInput;
