import "../App.css";

const Textarea = (props) => {
  return (
    <>
      <label className="font-medium text-black w-full mb-4">
        {props.children}
      </label>
      <br />
      <textarea
        name={props.name}
        className="border-2 py-2 px-4 w-full rounded-xl mt-2 mb-4 h-44"
      ></textarea>
    </>
  );
};

export default Textarea;
