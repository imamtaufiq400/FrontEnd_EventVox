import "../App.css";
import { useNavigate } from "react-router-dom";

const Box = (props) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(props.navigate)}
      className="hover:scale-105 cursor-pointer"
    >
      <div
        style={{ backgroundImage: `url(${props.bg})` }}
        onClick=""
        className=" container text-white w-full h-60 rounded-3xl relative bg-cover"
      >
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-b from-transparent to-primary z-50 w-full h-3/5 rounded-b-3xl">
          <div className="flex items-center justify-center gap-5 absolute inset-x-0 bottom-3 px-4">
            {/* Tanggal */}
            <div>
              <p className="font-bold text-2xl text-center">{props.month}</p>
              <p className="font-bold text-4xl text-center">{props.day}</p>
            </div>

            {/* Nama Event */}
            <div>
              <p className="font-bold text-sm">{props.title}</p>
              <p className="text-sm">with {props.artist}</p>

              {/* Lokasi */}
              <div className="flex items-center gap-2">
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
                <p className="text-sm">{props.place}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
