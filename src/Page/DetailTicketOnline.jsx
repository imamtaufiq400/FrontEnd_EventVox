import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import Facebook from "../Asset/logos_facebook.svg";
import Instagram from "../Asset/logos_instagram.svg";
import YouTube from "../Asset/logos_youtube.svg";
import Calendar from "../Asset/icons_calendar.svg";
import Back from "../Asset/icons_back.svg";
import Time from "../Asset/icons_time.svg";
import Info from "../Asset/icons_info.svg";
import BG from "../Asset/volunteer_detail.jpg";

import Navbar from "../Components/NavbarProfile";
import Title from "../Components/Title";
import SubTitle from "../Components/SubTitle";
import Tag from "../Components/Tag";
import Card from "../Modal/Card";
import Footer from "../Components/Footer";
import Alert from "../Modal/Hapus";

const DetailEvent = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="p-14">
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
                  onClick={() => navigate(-1)}
                  className="font-bold text-white text-xl flex items-center gap-3 cursor-pointer"
                >
                  <img src={Back} />
                  <p className="hover:underline">Back</p>
                </div>

                <div className="md:flex md:justify-between gap-10 m-10">
                  {/* Info */}
                  <div className="">
                    <h1 className="font-bold text-6xl">
                      COLDPLAY MUSIC OF THE SPHERES
                    </h1>
                    <br />
                    <h2 className="text-xl font-bold ">
                      BY <span className="text-secondary">PartyEvent</span>
                    </h2>
                    <br />
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
                        Online Via Zoom Meeting
                      </p>
                    </div>
                  </div>
                  <br /> <br />
                  {/* Action */}
                  <div className="rounded-xl bg-white p-10 text-black md:w-2/5 md:m-10">
                    <div>
                      <Title title="Tanggal & Waktu" />
                      <div className="flex gap-3">
                        <img src={Calendar} />
                        23 Desember 2023
                      </div>
                      <div className="flex gap-3">
                        <img src={Time} />
                        20.00 WIB
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br /> <br />
        <div className="sm:flex sm:gap-20 lg:gap-36 text-justify">
          {/* Left */}
          <div className="md:w-4/6">
            <div className="flex gap-4 items-start bg-violet-600/20 rounded-xl p-4">
              <img src={Info} />
              <p>
                <b>Informasi Event Online: </b>Silahkan tunjukkan e-ticket /
                innvoice yang telah dikirimkan melalui email atau website ini
                kepada petugas penyelenggara sebagai bukti pemesanan.
              </p>
            </div>
            <div className="my-5">
              <Title title="Informasi Pemesanan" />
              <table>
                <tr>
                  <td className="font-bold text-blue-800/70">No. Pesanan</td>
                  <td className="w-3/5">11111-12773739-1923</td>
                </tr>
                <tr>
                  <td className="font-bold text-blue-800/70">
                    Tanggal Pesanan
                  </td>
                  <td className="">23 Desember 2023</td>
                </tr>
                <tr>
                  <td className="font-bold text-blue-800/70">Jenis Event</td>
                  <td className="">Hiburan</td>
                </tr>
                <tr>
                  <td className="font-bold text-blue-800/70">Nama Acara</td>
                  <td className="">COLDPLAY MUSIC of the SPHERE</td>
                </tr>
                <tr>
                  <td className="font-bold text-blue-800/70">Jumlah Tiket</td>
                  <td className="">1 Tiket</td>
                </tr>
              </table>
            </div>
            <hr className="border-2" />

            <div className="my-5">
              <Title title="Informasi Pembeli" />
              <table>
                <tr>
                  <td className="font-bold text-blue-800/60">Nama</td>
                  <td className="w-3/5">Fiqih Fadillah N</td>
                </tr>
                <tr>
                  <td className="font-bold text-blue-800/70">E-mail</td>
                  <td className="">fiqihfadillah@gmail.com</td>
                </tr>
                <tr>
                  <td className="font-bold text-blue-800/70">No. Telp</td>
                  <td className="">+6281234567890</td>
                </tr>
                <tr>
                  <td className="font-bold text-blue-800/70">Jenis Kelamin</td>
                  <td className="">Perempuan</td>
                </tr>
              </table>
            </div>
            <hr className="border-2" />

            <div className="my-5">
              <h2 className="text-md font-bold text-blue-800 mb-4 mt-8">
                SYARAT DAN KETENTUAN ACARA
              </h2>
              <div>
                <p>
                  Harap partisipan mempersiapkan beberapa hal yang dibutuhkan
                  sebelum mengikuti sebuah event, yaitu:
                </p>
                <ul className="list-decimal pl-5">
                  <li>Persiapkan tiket yang sudah di cetak.</li>
                  <li>IPersiapkan identitas diri anda.</li>
                  <li>
                    Bagi partisipan dilarang membawa barang terlarang dan
                    senjata tajam saat datang dalam sebuah event yang
                    diselenggarakan.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="md:w-2/6">
            <div className="my-5">
              <Title title="Link Acara" />
              <p>Buka link di bawah ini untuk mengikuti event online:</p>
              <br />
              <Link
                to="https://us06web.zoom.us/j/85120603843?pwd=Zm1BeFhPWElTc3dZSUtiSXROeWhOZz09"
                className="text-sky-500 underline"
              >
                https://us06web.zoom.us/j/85120603843?pwd=Zm1BeFhPWElTc3dZSUtiSXROeWhOZz09{" "}
              </Link>
            </div>
            <br />

            <div className="my-5">
              <Title title="Tag" />
              <p className="grid md:grid-cols-3 grid-cols-2">
                <Tag tag="Batam" />
                <Tag tag="Konser" />
                <Tag tag="Coldplay" />
                <Tag tag="Hiburan" />
              </p>
            </div>
            <br />

            <div className="my-5">
              <SubTitle title="Contac Person" />
              <a href="wa.me/+6281234567889">+6281234567889</a>
            </div>
            <br />

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
        <br />
        <br />
      </div>

      <Footer />
    </>
  );
};

export default DetailEvent;
