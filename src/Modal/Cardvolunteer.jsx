import "../App.css";
import { useNavigate } from "react-router-dom";
import event from "../Asset/event.jpg";
import Button from "../Components/Button.jsx";

const Cardvolunteer = () => {
  const navigate = useNavigate();

  return (
    <div className="card w-full bg-base-100 shadow-xl z-0">
      <figure>
        <img src={event} alt="Event" />
      </figure>
      <div className="flex justify-center p-6 gap-5">
        {/* Tanggal */}
        <div className="flex flex-col items-start text-center text-primary ">
          <p className="font-bold text-2xl">Mei</p>
          <p className="font-bold text-4xl">12</p>
          <span className="w-20 h-8 container bg-blue-900 text-white text-center mt-4 rounded-lg p-1">
            Volunteer
          </span>
        </div>

        {/* Info Event */}
        <div className="">
          <div className="mr-8">
            <h2 className="card-title font-bold">Event Women Days</h2>
            <p>With Jennie</p>
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
              <p>Stadion GBK, Jakarta</p>
            </div>
            <br />
          </div>

          {/* Action */}
          <div className=" flex flex-row card-actions space-x-1 justify-between">
            <Button className="badge badge-outline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </Button>
            <Button
              className="badge badge-outline"
              onClick={() => navigate("/volunteer/detail")}
            >
              Daftar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardvolunteer;
