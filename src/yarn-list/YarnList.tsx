import YarnItem from '../yarn-item/YarnItem';
import './YarnList.css';

interface YarnListProps {
  yarnIdList: number[];
}

const YarnList = ({ yarnIdList }: YarnListProps) => {
  return (
    <div className="yarn-list">
      {yarnIdList.map((yarnId: number) => (
        <YarnItem yarnId={yarnId} key={yarnId} />
      ))}
    </div>
  );
};

export default YarnList;
