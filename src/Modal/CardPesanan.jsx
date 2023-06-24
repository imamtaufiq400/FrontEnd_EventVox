import "../App.css";
import Button from "../Components/Button.jsx";
import { Link, useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate();

  return (
    <div className="card w-full bg-base-100 shadow-xl z-0">
      <figure>
        <img src={props.img} alt="Event" />
      </figure>
      <div className="flex justify-center p-6 gap-5">
        {/* Tanggal */}
        <div className="flex flex-col items-start text-primary w-1/4">
          <p className="font-bold text-2xl">{props.month}</p>
          <p className="font-bold text-4xl">{props.date}</p>
          <span className="w-full h-8 container bg-blue-950 text-white text-center mt-4 p-1">
            Dibeli
          </span>
        </div>

        {/* Info Event */}
        <div className="w-3/4">
          <h2 className="card-title font-bold cursor-pointer">
            <Link to="/event/detail">{props.title}</Link>
          </h2>
          <p>With {props.artist}</p>
          <div className="flex gap-2 mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                clip-rule="evenodd"
              />
            </svg>
            <p>{props.place}</p>
          </div>
        </div>
      </div>

      {/* Action */}
      <div className="card-actions space-x-2 justify-end pb-6 px-6">
        <Button onClick={props.onClick} className="badge badge-outline">
          {props.button}
        </Button>
      </div>
    </div>
  );
};

export default Card;
