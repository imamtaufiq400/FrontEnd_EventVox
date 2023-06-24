import "../App.css";
import Event from "../Asset/event.jpg";
import Event1 from "../Asset/event1.jpg";
import Event2 from "../Asset/event2.jpg";
import Event3 from "../Asset/event3.jpg";
import Event4 from "../Asset/event4.jpg";
import Search from "../Asset/icons_search.svg";

import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Card from "../Modal/Card.jsx";
import Box from "./Box";
import Carousel from "./Carousel";
import Carousel2 from "./Carousel2";
import Dropdown from "../Modal/Dropdown.jsx";
import Cardvolunteer from "../Modal/Cardvolunteer";

const Beranda = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="z-50">
        <Navbar className="z-50" />
      </div>

      {/* Carousel */}
      <div className="relative">
        <Carousel2 />
        {/* Searching Bar */}
        <div className="absolute -bottom-12 md:inset-x-32 inset-x-10">
          <form className="flex justify-between items-center bg-gra2b py-4 px-6 text-white rounded-2xl">
            <div>
              <label className="font-bold text-xl w-full">Kategori</label>{" "}
              <br /> <br />
              <select className="bg-gra2b border-0 text-xl w-full rounded-xl">
                <option value="disable">---------</option>
                <option value="terbaru">Terbaru</option>
                <option value="pendidikan">Pendidikan</option>
                <option value="hiburan">Hiburan</option>
                <option value="sosial">Sosial</option>
              </select>
            </div>
            <div>
              <label className="font-bold text-xl w-full">Lokasi</label> <br />{" "}
              <br />
              <select className="bg-gra2b border-0 text-xl w-full">
                <option value="disable">---------</option>
                <option value="terbaru">Batam</option>
                <option value="pendidikan">Jakarta</option>
                <option value="hiburan">Bandung</option>
                <option value="sosial">Semarang</option>
                <option value="sosial">Surabaya</option>
              </select>
            </div>
            <div>
              <label className="font-bold text-xl w-full">Waktu</label> <br />{" "}
              <br />
              <input type="date" className="bg-gra2b border-0 w-full" />
            </div>
            <div>
              <button type="submit" className="p-6 bg-violet-900 rounded-2xl">
                <img src={Search} alt="Cari" />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Isi */}
      <div className="md:px-32 px-10 pb-10">
        {/* Hot Event */}
        <div className="my-20">
          {/* Title */}
          <h1 className="font-bold text-black text-xl underline underline-offset-4 decoration-secondary my-10 text-center">
            HOT EVENT
          </h1>

          {/* Card */}
          <div className="relative md:grid md:grid-cols-3 sm:grid sm:grid-cols-2 w-full grid grid-cols-1 gap-5 z-0">
            <Card className="my-5" />
            <Card className="my-5" />
            <Card className="my-5" />
          </div>
        </div>

        {/* Rekomendasi */}
        <div className="my-20">
          <h1 className="font-bold text-black text-xl underline underline-offset-4 decoration-secondary my-10 ">
            REKOMENDASI TERKINI
          </h1>
          <div className="md:grid md:grid-cols-3 sm:grid sm:grid-cols-2 w-full grid gap-5">
            <Box
              id="1"
              title="Event Woman Days"
              artist="Jennie Kim"
              day="12"
              month="Mei"
              place="Stadion GBK, Jakarta"
              bg={Event}
            />
            <Box
              id="2"
              title="Coldplay Music of The Spheres"
              artist="Coldplay"
              day="23"
              month="December"
              place="Stadiun Temenggung Abdul Jamal, Batam"
              bg={Event1}
              navigate="/event/detail"
            />
            <Box
              id="3"
              title="Lisa Concert: Money"
              artist="Lisa La"
              day="15"
              month="June"
              place="Stadion Andara, Butan"
              bg={Event2}
              className="grid col-span-2"
            />
            <Box
              id="4"
              title="Event Sukacita Bersama"
              artist="Nida Ria"
              day="20"
              month="Agustus"
              place="Lapangan Pusat Kota, Yogyakarta"
              bg={Event3}
              className="grid col-span-2"
            />
            <Box
              id="5"
              title="Event Woman Days"
              artist="Jennie Kim"
              day="12"
              month="Mei"
              place="Stadion GBK, Jakarta"
              bg={Event}
            />
            <Box
              id="6"
              title="New Years Concert"
              artist="Andata Band"
              day="1"
              month="Januari"
              place="Stadion Bandung Lautan Api, Bandung"
              bg={Event4}
            />
          </div>
        </div>

        {/* Kegiatan Lainnya */}
        <div className="my-5">
          <h1 className="font-bold text-black text-xl underline underline-offset-4 decoration-secondary my-10 ">
            KEGIATAN LAINNYA
          </h1>
          <br />
          <div className="flex flex-col gap-10">
            <div>
              <div className="z-50">
                <Dropdown kegiatan="Event" className="relative z-50" />
              </div>
              <div className="relative md:grid md:grid-cols-3 sm:grid sm:grid-cols-2 w-full grid grid-cols-1 gap-5 -z-10 mt-4">
                <Card />
                <Card />
                <Card />
              </div>
              <div className="mt-4 mr-8 w-full text-right text-primary font-medium text-lg cursor-pointer">
                <a className="px-4 hover:underline">See more ...</a>
              </div>
            </div>
            <div className="flex flex-col ">
              <Dropdown kegiatan="Volunteer" />
              <div className="relative md:grid md:grid-cols-3 sm:grid sm:grid-cols-2 w-full grid grid-cols-1 gap-5 z-0 mt-4">
                <Cardvolunteer />
                <Cardvolunteer />
                <Cardvolunteer />
              </div>
            </div>
            <div className="mt-4 mr-8 w-full text-right text-primary font-medium text-lg cursor-pointer">
              <a className="px-4 hover:underline">See more ...</a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Beranda;
