import YarnLengthInput from '../yarn-length-input/YarnLengthInput';
import YarnWeightInput from '../yarn-weight-input/YarnWeightInput';
import './YarnItem.css';

interface YarnItemProps {
  yarnId: number;
}

const YarnItem = ({ yarnId }: YarnItemProps) => {
  return (
    <fieldset className="yarn-item">
      <legend>Пряжа № {yarnId}</legend>
      <YarnLengthInput id={yarnId} />
      <YarnWeightInput id={yarnId} />
    </fieldset>
  );
};

export default YarnItem;
