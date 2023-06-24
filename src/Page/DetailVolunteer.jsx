import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import Facebook from "../Asset/logos_facebook.svg";
import Instagram from "../Asset/logos_instagram.svg";
import YouTube from "../Asset/logos_youtube.svg";
import Calendar from "../Asset/icons_calendar.svg";
import Back from "../Asset/icons_back.svg";
import BG from "../Asset/volunteer_detail.jpg";
import Navbar from "../Components/Navbar";
import Title from "../Components/Title";
import SubTitle from "../Components/SubTitle";
import Tag from "../Components/Tag";
import Card from "../Modal/Cardvolunteer";
import Footer from "../Components/Footer";

const DetailVolunteer = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="p-14 text-justify">
        {/* Isi */}
        <div>
          <div
            style={{ backgroundImage: `url(${BG})` }}
            className="text-white w-full rounded-3xl bg-cover"
          >
            <div className="p-5 bg-gradient-to-b from-gra1a/50 to-gra1b/50  w-full h-full rounded-3xl ">
              {/* <img src={Background} /> */}
              <div className="w-full h-full rounded-3xl">
                <div
                  className="font-bold text-white text-xl flex items-center gap-3 cursor-pointer"
                  onClick={() => navigate(-1)}
                >
                  <img src={Back} />
                  <p className="hover:underline">Back</p>
                </div>

                <div className="text-center text-6xl my-10 mx-20">
                  {/* Judul */}
                  <h1 className="font-bold ">
                    <span className="text-secondary">CREW</span> COLDPLAY MUSIC
                    OF THE SPHERES
                  </h1>
                  {/* Penyelenggara dan Lokasi */}
                  <div className="flex justify-center items-center gap-10">
                    <h2 className="text-xl font-bold ">
                      BY <span className="text-secondary">PartyEvent</span>
                    </h2>
                    <div className="flex gap-2 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="fill-secondary w-6 h-6"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <p className="text-medium text-xl">
                        Stadion GBK, Jakarta
                      </p>
                    </div>
                  </div>
                  <br /> <br />
                  {/* Action */}
                  <div className="flex justify-center items-center gap-8">
                    <Link
                      className="bg-secondary p-2 rounded-md font-bold text-xl hover:bg-primary"
                      to="/daftar-volunteer"
                    >
                      Daftar Sekarang
                    </Link>
                    <button
                      className="bg-white py-2 px-5 rounded-md font-bold text-xl text-primary hover:bg-primary hover:text-white hover:fill-white flex items-center gap-1"
                      onClick=""
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="fill-primary w-5 h-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                      </svg>
                      Favorite
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br /> <br />
        <div className="sm:flex sm:gap-20 lg:gap-36">
          {/* Left */}
          <div className="md:w-4/6">
            <div className="my-5">
              <Title title="Deskripsi" />
              <p>
                Volunteer panitia konser Coldplay adalah sekelompok individu
                yang secara sukarela bekerja untuk membantu mengatur dan
                menyelenggarakan konser Coldplay. Mereka adalah para pemberi
                waktu dan tenaga yang berdedikasi untuk memastikan konser
                berjalan lancar dan memberikan pengalaman yang luar biasa bagi
                para penggemar.
              </p>
            </div>
            <div className="my-5">
              <SubTitle title="Waktu Pelaksanaan Seleksi" />
              <p className="lg:flex gap-2">
                <div className="flex gap-2">
                  <img src={Calendar} />
                  23 Desember 2023 -
                </div>
                <div className="flex gap-2">
                  <img src={Calendar} />
                  30 Desember 2023
                </div>
              </p>
            </div>
            <div className="my-5">
              <SubTitle title="Waktu Pelaksanaan Acara" />
              <p className="lg:flex gap-2">
                <div className="flex gap-2">
                  <img src={Calendar} />1 Januari 2024 -
                </div>
                <div className="flex gap-2">
                  <img src={Calendar} />5 Januari 2024
                </div>
              </p>
            </div>
            <div className="my-5">
              <Title title="Divisi" />
              <p className="grid md:grid-cols-5 grid-cols-3">
                <Tag tag="Produksi" />
                <Tag tag="Keuangan" />
                <Tag tag="Logistik" />
                <Tag tag="Keamanan" />
                <Tag tag="Relawan" />
                <Tag tag="Pemasaran dan Produksi" />
              </p>
            </div>
            <div className="my-5">
              <Title title="Aturan" />
              <div>
                <ul className="list-disc pl-5">
                  <li>
                    Pendaftaran: Calon anggota panitia diharapkan untuk
                    mengajukan permohonan atau mendaftar melalui proses
                    pendaftaran yang ditentukan.
                  </li>
                  <li>
                    Seleksi berdasarkan kualifikasi: Pihak penyelenggara akan
                    mengevaluasi kualifikasi dan keahlian calon anggota panitia.
                  </li>
                  <li>
                    Wawancara: Calon anggota panitia yang berhasil melewati
                    tahap seleksi awal mungkin akan diundang untuk wawancara.
                    Wawancara ini dapat digunakan untuk mengevaluasi
                    kepribadian, motivasi, dan dedikasi calon anggota panitia.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="md:w-2/6">
            <div className="my-5">
              <Title title="Lokasi" />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.964418378384!2d104.09909067423881!3d1.185421562083832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da27e2a4951e67%3A0xb4fde627f3a44477!2sNongsa%20Digital%20Park!5e0!3m2!1sid!2sid!4v1685808044261!5m2!1sid!2sid"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                height="135px"
                className="rounded-lg mt-2 w-full shadow-lg"
              ></iframe>
            </div>
            <div className="my-5">
              <SubTitle title="Alamat" />
              <p>
                Jl. Engku Putri, Tlk. Tering, Kec. Batam Kota, Kota Batam,
                Kepulauan Riau 29444
              </p>
            </div>
            <div className="my-5">
              <Title title="Tag" />
              <p className="grid md:grid-cols-3 grid-cols-2">
                <Tag tag="Batam" />
                <Tag tag="Konser" />
                <Tag tag="Coldplay" />
                <Tag tag="Hiburan" />
                <Tag tag="Crew" />
              </p>
            </div>
            <div className="my-5">
              <SubTitle title="Contac Person" />
              <a href="wa.me/+6281234567889">+6281234567889</a>
            </div>
            <div className="my-5">
              <SubTitle title="Bagikan" />
              <div className="flex gap-5 w-full">
                <Link
                  to=""
                  className="bg-black rounded-full w-10 h-10 p-2 hover:bg-slate-800"
                >
                  <img
                    src={Instagram}
                    alt="Instagram"
                    className="w-full h-full"
                  ></img>
                </Link>
                <Link
                  to=""
                  className="bg-black rounded-full w-10 h-10 p-2 hover:bg-slate-800"
                >
                  <img
                    src={Facebook}
                    alt="Facebook"
                    className="w-full h-full"
                  ></img>
                </Link>
                <Link
                  to=""
                  className="bg-black rounded-full w-10 h-10 p-2 hover:bg-slate-800"
                >
                  <img
                    src={YouTube}
                    alt="YouTube"
                    className="w-full h-full"
                  ></img>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <br />
        <Title title="KEGIATAN YANG MUNGKIN ANDA SUKAI" />
        <div className="md:grid md:grid-cols-3 sm:grid sm:grid-cols-2 grid grid-cols-1 gap-5">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DetailVolunteer;
