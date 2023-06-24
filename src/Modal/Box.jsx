import "../App.css";
import Background from "../Asset/Subtracts.svg";

const Box = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Background})` }}
      className="container text-white p-5 w-full h-60 rounded-3xl relative bg-cover"
    >
      <div className="flex items-center justify-center gap-5 absolute inset-x-0 bottom-3">
        {/* Tanggal */}
        <div>
          <p className="font-bold text-2xl">Mei</p>
          <p className="font-bold text-4xl">12</p>
        </div>

        {/* Nama Event */}
        <div>
          <p className="font-bold text-sm">Event Women Days</p>
          <p className="text-sm">with Jennie</p>

          {/* Lokasi */}
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-sm">Stadion GBK, Jakarta</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
