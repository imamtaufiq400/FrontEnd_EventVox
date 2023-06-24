import "../App.css";

const Dropdown = (props) => {
  return (
    <div className="flex flex-row z-50">
      <h2 className="font-bold text-xl text-left self-center">
        {props.kegiatan}
      </h2>
      <div className="flex flex-row w-full justify-end">
        <div className="dropdown dropdown-bottom dropdown-end">
          <label
            tabIndex={0}
            className="w-28 btn btn hover:border-double hover:border-2 hover:border-primary m-1 bg-none border-double border-2 border-primary"
          >
            Lokasi
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Batam</a>
            </li>
            <li>
              <a>Jakarta</a>
            </li>
            <li>
              <a>Semarang</a>
            </li>
            <li>
              <a>Surabaya</a>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-bottom dropdown-end ">
          <label
            tabIndex={0}
            className=" w-28 btn hover:border-double hover:border-2 hover:border-primary m-1 bg-none border-double border-2 border-primary"
          >
            Free
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Free</a>
            </li>
            <li>
              <a>Berbayar</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
