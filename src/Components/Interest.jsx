import "../App.css";

const Interest = (props) => {
  return (
    <>
      <span className="text-black text-center text-xs font-semibold bg-secondary py-2 px-4 rounded-md">
        {props.children}
      </span>
    </>
  );
};

export default Interest;
