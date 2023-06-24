import { useNavigate } from "react-router-dom";
import "../App.css";

import Back from "../Asset/icons_back2.svg";

const PembayaranAdmin = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        {/* Navbar */}

        {/* Pembayaran */}
        <div className="md:p-8 p-4">
          <div
            className="font-bold text-gra2b text-xl flex items-center gap-3 cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <img src={Back} />
            <p className="hover:underline">Back</p>
          </div>

          <div className="md:px-44 px-22">
            <p className="font-bold text-2xl text-primary">Detail Order</p>
            <div className="pb-4 bg-white drop-shadow-xl rounded-xl my-4">
              <div className="px-6 py-4 bg-secondary drop-shadow-xl rounded-xl text-white">
                <h2 className="font-bold text-lg">Sekali Bayar</h2>
                <p>1 Event Premium</p>
              </div>

              <div className="px-6 py-4 flex justify-between">
                <h2 className="font-medium text-lg text-black">
                  Mulai Hari ini
                </h2>
                <h2 className="font-medium text-lg text-black">
                  Sekali Bayar Sebesar Rp. 25.000
                </h2>
              </div>

              <p className="px-6 underline">Persyaratan tawaran berlaku</p>
            </div>
            <br />

            {/* Pembayaran */}
            <p className="font-bold text-2xl text-primary mb-4">Pembayaran</p>
            <form>
              <div className="md:px-44 px-20">
                <div className="flex gap-8 mb-4">
                  <input
                    type="radio"
                    name="metode_pembayaran"
                    value="kartu kredit"
                  />
                  <div>
                    <label>Kartu Kredit atau Debit</label>
                    <p className="font-bold text-black">Kode Virtual Account</p>
                    <div className="py-2 px-4 border-2 rounded-xl w-full">
                      4628320901293735390
                    </div>
                  </div>
                </div>
                <div className="flex gap-8 w-full mb-4">
                  <input type="radio" name="metode_pembayaran" value="dana" />
                  <div>
                    <label className="text-sky-500">DANA</label>
                    <p className="font-bold text-black">Kode Virtual Account</p>
                    <div className="py-2 px-4 border-2 rounded-xl w-full">
                      4628320901293735390
                    </div>
                  </div>
                </div>
                <div className="flex gap-8 w-full mb-4">
                  <input type="radio" name="metode_pembayaran" value="gopay" />
                  <div>
                    <label className="text-green-500">GoPay</label>
                    <p className="font-bold text-black">Kode Virtual Account</p>
                    <div className="py-2 px-4 border-2 rounded-xl w-full">
                      4628320901293735390
                    </div>
                  </div>
                </div>
                <div className="flex gap-8 w-full mb-4">
                  <input type="radio" name="metode_pembayaran" value="ovo" />
                  <div>
                    <label className="text-violet-500">OVO</label>
                    <p className="font-bold text-black">Kode Virtual Account</p>
                    <div className="py-2 px-4 border-2 rounded-xl w-full">
                      4628320901293735390
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PembayaranAdmin;
