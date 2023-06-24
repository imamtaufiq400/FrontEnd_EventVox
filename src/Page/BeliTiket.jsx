import "../App.css";
import Navbar from "../Components/NavbarProfile";

const BeliTiket = () => {
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
          <form>
            <div className="md:flex gap-10">
              {/* Info Pembeli */}
              <div className="md:w-3/4">
                <p className="text-2xl text-primary text-medium">
                  Informasi Pembeli
                </p>
                <p>
                  Pastikan semua informasi yang diberikan benar. Anda tidak
                  dapat mengubahnya dikemudian hari
                </p>
                <div className="border-2 p-4">
                  <input
                    type="text"
                    value="Fiqih Fadillah N"
                    name="nama"
                    className="text-2xl text-medium text-black my-2"
                  />{" "}
                  <br />
                  <input
                    type="email"
                    value="fiqihfadillah@gmail.com"
                    name="email"
                    className="my-1"
                  />{" "}
                  <br />
                  <input
                    type="tel"
                    value="+6281234567890"
                    name="telepon"
                    className="my-1"
                  />{" "}
                  <br />
                  <input type="text" value="Perempuan" className="my-1" />{" "}
                  <br /> <br />
                  <div className="flex justify-end">
                    <button
                      onClick=""
                      className="px-4 rounded-full bg-gradient-to-b from-gra1a to-gra1b text-white font-semibold"
                    >
                      Ubah Informasi
                    </button>
                  </div>
                </div>

                <div className="flex gap-4">
                  <input
                    type="checkbox"
                    name="snk"
                    value="ya"
                    className="w-6"
                  />
                  <p className="text-primary text-sm">
                    Saya setuju terhadap Syarat dan Ketentuan EventVox dan
                    Kebijakan Privasi EventVox. <br />
                    Setujui dan tekan tombol lanjutkan untuk memproses pesanan
                    Anda
                  </p>
                </div>
              </div>
              <br />

              {/* Pesanana */}
              <div className="border-2 text-xl p-2">
                <p className="text-black font-medium">Pesanan Anda</p>
                <p className="text-black font-medium">Day 1 (Pre-Sale)</p>
                <p className="text-base text-gray-600 mb-4">23 Desember 2023</p>

                <div className="flex">
                  <input type="text" value="IDR 700.000" name="harga" disable />
                  <input
                    type="number"
                    name="jumlah_tiket"
                    value="1"
                    className=""
                  />
                </div>
                <hr />

                <div className="flex justify-between mt-2">
                  <label className="text-base text-gray-600">SubTotal</label>
                  <label className="text-base text-gray-600">
                    {" "}
                    <input
                      type="text"
                      name="subtotal"
                      value="IDR 700.000"
                      disable
                      className="text-base text-gray-600 text-right w-fit"
                    />
                  </label>
                </div>
                <div className="flex justify-between mt-2">
                  <label className="text-base text-gray-600">Pajak</label>
                  <label className="text-base text-gray-600">
                    {" "}
                    <input
                      type="text"
                      name="pajak"
                      value="IDR 70.000"
                      disable
                      className="text-base text-gray-600 text-right w-fit"
                    />
                  </label>
                </div>
                <div className="flex justify-between my-2">
                  <label className="text-base text-gray-600">
                    Biaya Platform
                  </label>
                  <label className="text-base text-gray-600">
                    {" "}
                    <input
                      type="text"
                      name="biaya_platform"
                      value="IDR 1.000"
                      disable
                      className="text-base text-gray-600 text-right w-fit"
                    />
                  </label>
                </div>
                <hr />

                <div className="flex justify-between my-2">
                  <label className="text-base text-gray-600">
                    Total (1 Tiket)
                  </label>
                  <label className="text-base text-primary font-bold">
                    <input
                      type="text"
                      name="total"
                      value="IDR 771.000"
                      disable
                      className="text-base text-primary text-right w-fit font-bold"
                    />
                  </label>
                </div>
              </div>
            </div>
            <br /> <br />
            <button
              type=""
              className="md:w-1/5 px-4 py-2 rounded-full bg-gradient-to-b from-gra1a to-gra1b text-white font-semibold"
            >
              Lanjutkan
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BeliTiket;
