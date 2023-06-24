import "../App.css";
import Bg from "../Asset/bg_event-volunteer.png";
import NavbarProfile from "../Components/NavbarProfile.jsx";
// import Navbar from './Navbar.jsx'
import Carousel2 from "../Components/Carousel2.jsx";
import Card from "../Modal/Card.jsx";
import Dropdown from "../Modal/Dropdown.jsx";

const KegiatanEvent = () => {
  return (
    <div>
      <div>
        <NavbarProfile />
        {/* <Navbar /> */}
      </div>
      <div
        style={{ backgroundImage: `url(${Bg})` }}
        className="w-full h-96 bg-cover font-bold text-center p-28 bg-secondary"
      >
        <h1 className="text-white text-5xl">
          CARI <span className="text-secondary">EVENT</span>,{" "}
          <span className="text-secondary">SEMINAR</span>, DAN{" "}
          <span className="text-secondary">HIBURAN LAINNYA</span>
        </h1>
        <h2 className="text-white text-3xl">HANYA DISINI</h2>
      </div>

      <div className="p-20">
        <div className="md:flex gap-10 ">
          <div className="md:w-1/4 bg-gra2b rounded-xl h-fit drop-shadow-xl">
            <h2 className="text-secondary font-semibold text-xl text-center px-16 py-2">
              KATEGORI
            </h2>
            <hr />
            <ol className="text-white ">
              <li className="px-6 py-2 hover:text-secondary">
                <a href="">Terlaris</a>
              </li>
              <hr />
              <li className="px-6 py-2 hover:text-secondary">Pendidikan</li>
              <hr />
              <li className="px-6 py-2 hover:text-secondary">Hiburan</li>
              <hr />
              <li className="px-6 py-2 hover:text-secondary">Sosial</li>
            </ol>
          </div>
          <br /> <br />
          <div className="flex flex-col gap-4 ">
            <div className="z-50">
              <Dropdown kegiatan="EVENT" />
            </div>
            <div className="relative md:grid md:grid-cols-3 sm:grid sm:grid-cols-2 w-full grid grid-cols-1 gap-8 z-0 my-4">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KegiatanEvent;
