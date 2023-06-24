import '../App.css'

const Tag = (props) => {
  return (
    <>
      <span className="text-white text-center font-semibold py-1 px-2 bg-tag rounded-2xl mr-2 mb-2">{props.tag}</span>
    </>
  )
}

export default Tag