interface AddYarnButtonProps {
  onClick: () => void;
}

const AddYarnButton = ({ onClick }: AddYarnButtonProps) => {
  return (
    <button className="add-yarn-button" onClick={onClick}>+</button>
  );
};

export default AddYarnButton;
