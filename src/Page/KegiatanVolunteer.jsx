import "../App.css";
import Bg from "../Asset/bg_event-volunteer.png";
import NavbarProfile from "../Components/NavbarProfile.jsx";
import Carousel2 from "../Components/Carousel2.jsx";
import Cardvolunteer from "../Modal/Cardvolunteer.jsx";
import Dropdown from "../Modal/Dropdown.jsx";

const KegiatanVolunteer = () => {
  return (
    <div>
      <div>
        <NavbarProfile />
      </div>
      <div
        style={{ backgroundImage: `url(${Bg})` }}
        className="w-full h-96 bg-cover font-bold text-center p-28 bg-secondary"
      >
        <h2 className="text-secondary text-3xl">JADILAH BAGIAN DARI KAMI</h2>
        <h1 className="text-white text-5xl">
          "Berperan Aktif, Bergabunglah Sebagai Relawan!"
        </h1>
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
            <div className="">
              <Dropdown kegiatan="" />
            </div>
            <div className="relative md:grid md:grid-cols-3 sm:grid sm:grid-cols-2 w-full grid grid-cols-1 gap-8 z-0 my-4">
              <Cardvolunteer />
              <Cardvolunteer />
              <Cardvolunteer />
              <Cardvolunteer />
              <Cardvolunteer />
              <Cardvolunteer />
              <Cardvolunteer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KegiatanVolunteer;
