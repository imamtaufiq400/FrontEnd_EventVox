import "../App.css";

const Input = (props) => {
  return (
    <>
      <label className="font-medium text-black w-full mb-4">
        {props.children}
      </label>
      <br />
      <input
        type={props.type}
        name={props.name}
        className="border-2 py-2 px-4 w-full rounded-xl mt-2 mb-4"
      />
    </>
  );
};

export default Input;
