import "../App.css";
import { useNavigate } from "react-router-dom";
import Back from "../Asset/icons_back2.svg";
import EventOffline from "../Asset/volunteer_detail.jpg";
import EventOnline from "../Asset/volunteer_detail.jpg";

import Navbar from "../Components/NavbarProfile";
import Card from "../Modal/CardPesanan";

const Pesanan = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="md:p-14 p-8">
        <div
          className="font-bold text-gra2b text-xl flex items-center gap-3 cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <img src={Back} />
          <p className="hover:underline">Back</p>
        </div>

        <div>
          <h1 className="text-2xl text-center font-semibold">PESANAN</h1>
          {/* Event */}
          <div className="px-10 md:px-12">
            <h2 className="text-2xl font-semibold mb-8">Event</h2>
            <div className="px-10 grid grid-cols-1 gap-4 md:grid-cols-4 sm:grid-cols-2">
              <Card
                img={EventOffline}
                month="Des"
                date="23"
                title="COLDPLAY MUSIC OF THE SPHERES"
                artist="Coldplay"
                place="Stadiun Temenggung Abdul Jamal, Batam"
                onClick={() => navigate("/pesanan/offline/detail")}
                button="Lihat Tiket"
              />
              <Card
                img={EventOnline}
                month="Des"
                date="23"
                title="COLDPLAY MUSIC OF THE SPHERES"
                artist="Coldplay"
                place="Zoom Meeting"
                onClick={() => navigate("/pesanan/online/detail")}
                button="Lihat Tiket"
              />
            </div>
          </div>
          <br /> <br /> <br />
          {/* Volunteer */}
          <div className="px-10 md:px-12">
            <h2 className="text-2xl font-semibold mb-8">Volunteer</h2>
            <div className="px-10 grid grid-cols-1 gap-4 md:grid-cols-4 sm:grid-cols-2">
              <Card
                img={EventOffline}
                month="Des"
                date="23"
                title="COLDPLAY MUSIC OF THE SPHERES"
                artist="Coldplay"
                place="Stadiun Temenggung Abdul Jamal, Batam"
                onClick={() => navigate("/pesanan/offline/detail")}
                button="Detail"
              />
              <Card
                img={EventOnline}
                month="Des"
                date="23"
                title="COLDPLAY MUSIC OF THE SPHERES"
                artist="Coldplay"
                place="Zoom Meeting"
                onClick={() => navigate("/pesanan/online/detail")}
                button="Detail"
              />
            </div>
          </div>
          <br /> <br />
        </div>
      </div>
    </>
  );
};

export default Pesanan;
