import { useNavigate } from "react-router-dom";
import "../App.css";
import Icon1 from "../Asset/icons_1.svg";
import Icon2 from "../Asset/icons_2.svg";
import Icon3 from "../Asset/icons_3.svg";
import Icon4 from "../Asset/icons_4.svg";

const DaftarkanVolunteer = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        {/* Navbar */}

        {/* Hero */}
        <div className="flex justify-center">
          <div className="bg-gradient-to-b from-gra1a to-gra1b text-center text-white font-bold w-full py-14">
            <h1 className="text-3xl">
              DAFTARKAN KEGIATANMU SEKARANG JUGA SECARA MUDAH{" "}
            </h1>
            <br />
            <p className="text-xl text-secondary">
              Kenapa Daftar Kegiatan Disini?
            </p>
            <br />

            <div className="grid grid-cols-1 gap-10 md:grid-cols-4 sm:grid-cols-2 md:mx-60">
              <div>
                <div className="flex justify-center my-4">
                  <img src={Icon1} />
                </div>
                <p>Pendaftaran Kegiatan Mudah dan Cepat</p>
              </div>
              <div>
                <div className="flex justify-center my-4">
                  <img src={Icon2} />
                </div>
                <p>Lakukan Pendaftaran Dimanapun</p>
              </div>
              <div>
                <div className="flex justify-center my-4">
                  <img src={Icon3} />
                </div>
                <p>Daftarkan Kegiatan Dengan Harga Terjangkau</p>
              </div>
              <div>
                <div className="flex justify-center my-4">
                  <img src={Icon4} />
                </div>
                <p>Jangkau Lebih Banyak Pembeli</p>
              </div>
            </div>
          </div>
        </div>

        {/* Paket */}
        <div className="py-10">
          <p className="font-bold text-2xl text-primary text-center">
            Daftarkan Kegiatan Anda
          </p>
          <br />

          <div className="flex justify-center">
            <div className="p-8 drop-shadow-xl bg-white rounded-xl">
              <div className="text-center text-secondary mb-4 border-2 border-secondary rounded-full">
                <p>EventVox</p>
              </div>

              <div className="mb-4">
                <h1 className="font-bold text-xl text-primary">
                  Satu Kali Bayar
                </h1>
                <p>Harga Rp. 25.000 / Event</p>
                <p>Berlaku Untuk Pendaftaran 1 Event</p>
              </div>

              <button
                onClick={() => navigate("/admin/pembayaran")}
                className="bg-secondary py-1 w-full text-white rounded-full hover:bg-orange-600"
              >
                Mulai
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DaftarkanVolunteer;
