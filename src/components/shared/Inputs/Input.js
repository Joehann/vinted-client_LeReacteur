import "./input.scss";
const Input = ({ input, setInput }) => {
  const handleChange = (event) => {
    const value = event.target.value;
    const newObj = { ...input };
    newObj.value = value;
    setInput(newObj);
  };

  return (
    <input
      type={input.type}
      placeholder={input.placeholder}
      onChange={handleChange}
    />
  );
};

export default Input;
