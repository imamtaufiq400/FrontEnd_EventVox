import "../App.css";

const Title = (props) => {
  return (
    <>
      <h1 className="font-semibold text-2xl text-black pb-5">{props.title}</h1>
    </>
  );
};

export default Title;
