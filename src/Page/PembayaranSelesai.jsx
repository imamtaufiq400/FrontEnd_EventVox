import "../App.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/NavbarProfile";

const PembayaranSelesai = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <Navbar />

        <div className="md:p-8 p-4">
          <p className="text-2xl text-medium mb-4">
            Konfirmasi Tiket Anda Untuk
          </p>
          <h1 className="text-primary font-bold text-3xl">
            COLDPLAY MUSIC of the SPHERE
          </h1>
          <br /> <br />
          <div className="flex justify-center text-center text-primary">
            <div className="bg-white drop-shadow-2xl p-14 rounded-xl border-2">
              <div className="flex justify-center"></div>
              <h1 className="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-b from-gra1a to-gra1b">
                TIKET TELAH DIKIRIM
              </h1>
              <p className="text-black">No. Pesanan : 33121-29052023-010</p>
              <br />

              <p>
                Mohon segera periksa email anda
                <br />
                E-ticket telah dikirimkan melalui email :{" "}
                <b>fiqihfadillah@.gmail.com</b>
              </p>
              <br />

              <p className="font-bold text-secondary">
                Jika E-ticket tidak terkirim silahkan hubungi kami
              </p>
              <br />

              <button
                onClick={() => navigate("/pesanan")}
                className="px-4 py-2 rounded-xl bg-gradient-to-b from-gra1a to-gra1b text-white"
              >
                Kembali
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PembayaranSelesai;
