import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import Facebook from "../Asset/logos_facebook.svg";
import Instagram from "../Asset/logos_instagram.svg";
import YouTube from "../Asset/logos_youtube.svg";
import Calendar from "../Asset/icons_calendar.svg";
import Back from "../Asset/icons_back.svg";
import Time from "../Asset/icons_time.svg";
import BG from "../Asset/event1.jpg";
import Navbar from "../Components/Navbar";
import Title from "../Components/Title";
import SubTitle from "../Components/SubTitle";
import Tag from "../Components/Tag";
import Card from "../Modal/Card";
import Footer from "../Components/Footer";
import Alert from "../Modal/Hapus";
import { useEffect, useState } from "react";

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
                        Stadiun Temenggung Abdul Jamal, Batam
                      </p>
                    </div>
                  </div>
                  <br /> <br />
                  {/* Action */}
                  <div className="rounded-xl bg-white p-10 text-black md:w-2/5">
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
                    <br />
                    <button
                      className="bg-primary w-full p-2 mb-2 rounded-md font-bold text-white text-lg hover:bg-secondary"
                      onClick={() => navigate("/event/beli-tiket")}
                    >
                      Beli Sekarang
                    </button>
                    <button
                      className="bg-white w-full p-2 rounded-md font-bold text-lg text-primary border-2 border-primary hover:bg-primary hover:text-white hover:fill-white flex justify-center items-center gap-1"
                      onClick=""
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-5 h-5"
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
        <div className="sm:flex sm:gap-20 lg:gap-36 text-justify">
          {/* Left */}
          <div className="md:w-4/6">
            <div className="my-5">
              <Title title="Deskripsi" />
              <p>
                <b>Konser Coldplay</b> adalah pengalaman yang luar biasa yang
                menampilkan kombinasi musik yang menakjubkan, visual yang
                menakjubkan, dan energi yang luar biasa. Coldplay terkenal
                dengan pertunjukan panggung yang megah dan spektakuler,
                menciptakan atmosfer yang magis bagi penonton.
                <br />
                <br />
                Selama konser, Coldplay menyajikan katalog lagu yang luas,
                termasuk lagu-lagu populer dari album-album mereka. Setiap lagu
                disampaikan dengan semangat dan intensitas yang tinggi, dengan
                vokal yang kuat dari penyanyi utama, Chris Martin. Para anggota
                band juga menunjukkan keterampilan musik mereka yang luar biasa
                dengan menguasai instrumen mereka dan menampilkan solo yang
                menakjubkan.
              </p>
            </div>
            <div className="my-5">
              <SubTitle title="Waktu dan Tempat" />
              <div className="flex gap-3">
                <img src={Calendar} />
                23 Desember 2023
              </div>
              <div className="flex gap-3 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="fill-secondary w-5 h-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                    clip-rule="evenodd"
                  />
                </svg>
                <p className="">Stadiun Temenggung Abdul Jamal, Batam</p>
              </div>
            </div>
            <div className="my-5">
              <Title title="Aturan" />
              <div>
                <p>
                  Berikut ini adalah beberapa aturan umum yang mungkin berlaku
                  ketika menonton konser Coldplay atau konser lainnya:
                </p>
                <ul className="list-disc pl-5">
                  <li>
                    Tiket: Pastikan Anda memiliki tiket yang valid sebelum
                    memasuki lokasi konser. Tiket harus dibeli melalui saluran
                    resmi dan tidak melalui pihak ketiga yang tidak sah.
                  </li>
                  <li>
                    Identitas: Biasanya, Anda harus membawa identitas pribadi
                    yang valid, seperti kartu identitas atau paspor, sebagai
                    tanda bahwa tiket adalah milik Anda.
                  </li>
                  <li>
                    Waktu Kedatangan: Disarankan untuk tiba lebih awal agar Anda
                    memiliki waktu yang cukup untuk melewati proses pemeriksaan
                    keamanan dan menemukan tempat duduk atau berdiri yang sesuai
                    dengan tiket Anda.
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

export default DetailEvent;
