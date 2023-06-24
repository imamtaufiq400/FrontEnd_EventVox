import "../App.css";
import Navbar from "../Components/NavbarProfile";
import Clock from "../Asset/icons_clock.svg";

const Pembayaran = () => {
  return (
    <>
      <div>
        <Navbar />

        <div className="">
          {/* Detasil Pesanan */}
          <div className="bg-gradient-to-b from-gra1a to-gra1b text-white py-10">
            <div className="flex justify-center px-10">
              <div>
                <p className="font-bold text-2xl my-4">Order Detail</p>
                <div className="flex gap-4 bg-secondary px-4 py-2 rounded-xl text-lg font-medium mb-4">
                  <img src={Clock} className="w-6" />
                  <p>Selesaikan Pesanan Anda Sebelum 17.00, 25 Mei 2023</p>
                </div>

                <table className="mb-4">
                  <tr>
                    <td>No. Order</td>
                    <td>: 11111-12773739-1923</td>
                  </tr>
                  <tr>
                    <td>Email Pembeli</td>
                    <td>: ma***@gmail.com</td>
                  </tr>
                </table>
                <hr />

                <div className="flex justify-between items-center md:gap-96 sm:gap-24 my-4">
                  <div>
                    1x (Day 1 Pre-Sale)
                    <br />
                    <p className="text-sm">23 Desember 2023</p>
                  </div>

                  <div className="">IDR 700.000</div>
                </div>
                <hr />

                <p className="font-bold text-2xl my-4">Order Summary</p>
                <div className="flex justify-between items-center md:gap-96 sm:gap-24">
                  <div>Subtotal</div>

                  <div className="">IDR 700.000</div>
                </div>
                <div className="flex justify-between items-center md:gap-96 sm:gap-24">
                  <div>Pajak</div>

                  <div className="">IDR 70.000</div>
                </div>
                <div className="flex justify-between items-center md:gap-96 sm:gap-24 mb-4">
                  <div>Biaya Platform</div>

                  <div className="">IDR 1.000</div>
                </div>
                <hr />

                {/* Total */}
                <div className="flex justify-between items-center md:gap-96 sm:gap-24">
                  <div>
                    <p className="font-bold text-2xl my-4">Total</p>
                  </div>

                  <div className="font-bold">
                    <p className="font-bold text-2xl">IDR 771.000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Metode Pembayaran */}
          <div>
            <form>
              <div className="px-10 md:px-96 sm:px-24">
                <div>
                  <p className="font-bold text-2xl text-primary my-4">
                    Pembayaran
                  </p>

                  <div className="flex gap-8 w-full mb-4">
                    <input
                      type="radio"
                      name="metode_pembayaran"
                      value="kartu kredit"
                    />
                    <div>
                      <label>Kartu Kredit atau Debit</label>
                      <p className="font-bold text-black">
                        Kode Virtual Account
                      </p>
                      <div className="py-2 px-4 border-2 rounded-xl w-full">
                        4628320901293735390
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-8 w-full mb-4">
                    <input type="radio" name="metode_pembayaran" value="dana" />
                    <div>
                      <label className="text-sky-500">DANA</label>
                      <p className="font-bold text-black">
                        Kode Virtual Account
                      </p>
                      <div className="py-2 px-4 border-2 rounded-xl w-full">
                        4628320901293735390
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-8 w-full mb-4">
                    <input
                      type="radio"
                      name="metode_pembayaran"
                      value="gopay"
                    />
                    <div>
                      <label className="text-green-500">GoPay</label>
                      <p className="font-bold text-black">
                        Kode Virtual Account
                      </p>
                      <div className="py-2 px-4 border-2 rounded-xl w-full">
                        4628320901293735390
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-8 w-full mb-4">
                    <input type="radio" name="metode_pembayaran" value="ovo" />
                    <div>
                      <label className="text-violet-500">OVO</label>
                      <p className="font-bold text-black">
                        Kode Virtual Account
                      </p>
                      <div className="py-2 px-4 border-2 rounded-xl w-full">
                        4628320901293735390
                      </div>
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

export default Pembayaran;
