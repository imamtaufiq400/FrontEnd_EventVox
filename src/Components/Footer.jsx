import "../App.css";
import { Link } from "react-router-dom";
import PlayStore from "../Asset/logos_play-store.svg";
import Facebook from "../Asset/logos_facebook.svg";
import Instagram from "../Asset/logos_instagram.svg";
import YouTube from "../Asset/logos_youtube.svg";

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-gra1a to-gra1b px-10 py-10 md:flex sm:px-32">
      {/* INFORMASI */}
      <div className="md:w-3/4">
        <h1 className="text-white font-bold text-xl">INFORMASI</h1>
        <br />
        <div>
          <h4 className="text-secondary text-base">Event</h4>
          <div className="px-5">
            <ul className="list-disc text-white text-sm">
              <li>
                <Link
                  to="/info-mendaftarkan-event-dan-volunteer-event"
                  className="hover:underline"
                >
                  Mendaftarkan event
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">
                  Daftar event
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <br />
        <div>
          <h4 className="text-secondary text-base">Tiket</h4>
          <div className="px-5">
            <ul className="list-disc text-white text-sm">
              <li>
                <Link to="/" className="hover:underline">
                  Pembayaran tiket event
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">
                  Pemesanan tiket melalui mobile app
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <br />
        <div>
          <h4 className="text-secondary text-base">Volunteer</h4>
          <div className="px-5">
            <ul className="list-disc text-white text-sm">
              <li>
                <Link to="/" className="hover:underline">
                  Mendaftarkan diri sebagai volunteer
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">
                  Mekanisme seleksi penerimaan volunteer
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <br />
        <div className="mb-5">
          <Link
            to=""
            className="text-secondary font-bold text-xl hover:underline"
          >
            Pusat Bantuan:{" "}
            <span className="text-white text-lx my-5">081238839393</span>
          </Link>
          <br />
        </div>
      </div>

      {/* LOKASI */}
      <div className="md:w-1/4">
        <h1 className="text-white font-bold text-xl">LOKASI</h1>
        <p className="text-white text-sm mt-2">
          Nongsa Digital Park, Sambau, Kecamatan Nongsa, Kota Batam, Kepulauan
          Riau 29466
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.964418378384!2d104.09909067423881!3d1.185421562083832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da27e2a4951e67%3A0xb4fde627f3a44477!2sNongsa%20Digital%20Park!5e0!3m2!1sid!2sid!4v1685808044261!5m2!1sid!2sid"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          height="135px"
          className="rounded-lg mt-2 w-full"
        ></iframe>
        <br />

        {/* Mobile App/Social Media */}
        <div className="mt-4">
          <h1 className="text-white font-bold text-xl mb-2">
            Download APP di:
          </h1>
          <div className="flex gap-5 w-full">
            <Link
              to=""
              className="bg-black rounded-lg w-28 h-10 p-2 hover:bg-slate-800"
            >
              <img
                src={PlayStore}
                alt="App Store"
                className="w-full h-full"
              ></img>
            </Link>
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
              <img src={YouTube} alt="YouTube" className="w-full h-full"></img>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
