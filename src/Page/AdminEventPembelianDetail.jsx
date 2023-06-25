import '../App.css'
import { useNavigate, Link } from 'react-router-dom'

import Button from '../Components/Button'
import ButtonOutline from '../Components/ButtonOutline'
import Card from '../Modal/CardAdminEvent_NoAction'
import Img from '../Asset/event4.jpg'
import Navbar from '../Components/NavbarAdmin'

const AdminEventPembelian = () => {
  const navigate = useNavigate()
  
  return (
    <>
      <div>
        {/* Navbar */}
        <Navbar />

        <div className="bg-gray-100 py-8 px-16 flex gap-4 items-center">
          <div className="bg-secondary text-secondary h-full ">
            <h1>..</h1>
          </div>
          <h1 className="text-primary text-3xl font-bold">EVENT</h1>
        </div>

        <div className="py-8 px-10 md:py-10 md:px-16 sm:flex gap-10">
          {/* Side */}
          <div className="md:w-1/4">
            <div className="border-2 border-secondary rounded-lg py-4 px-6 flex gap-4 hover:bg-secondary cursor-pointer" onClick={() => navigate("/admin/event")}>
              <svg width="27" height="22" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.95 6.47059V14.2353C25.245 14.2353 27 12.5529 27 10.3529C27 8.15294 25.245 6.47059 22.95 6.47059ZM12.15 5.17647H2.7C1.215 5.17647 0 6.34118 0 7.76471V12.9412C0 14.3647 1.215 15.5294 2.7 15.5294H4.05V19.4118C4.05 20.8353 5.265 22 6.75 22H9.45V15.5294H12.15L17.55 20.7059H20.25V0H17.55L12.15 5.17647Z" fill="#011F68"/>
              </svg>
              <p className="font-semibold text-black">Daftar Event</p>
            </div>
            <br />

            <div className="bg-secondary rounded-lg py-4 px-6 flex gap-4">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6818 16.3333C16.6818 15.1231 13.4054 14.1429 9.36364 14.1429M16.6818 16.3333C16.6818 17.5436 13.4054 18.5238 9.36364 18.5238C5.32191 18.5238 2.04545 17.5436 2.04545 16.3333M16.6818 16.3333V21.7405C16.6818 22.988 13.4054 24 9.36364 24C5.32191 24 2.04545 22.9891 2.04545 21.7405V16.3333M16.6818 16.3333C20.6796 16.3333 24 15.2523 24 14.1429V3.19048M9.36364 14.1429C5.32191 14.1429 2.04545 15.1231 2.04545 16.3333M9.36364 14.1429C4.74482 14.1429 1 13.0619 1 11.9524V6.47619M9.36364 4.28571C4.74482 4.28571 1 5.26595 1 6.47619M1 6.47619C1 7.68643 4.74482 8.66667 9.36364 8.66667C9.36364 9.77614 12.7645 10.8571 16.7623 10.8571C20.7591 10.8571 24 9.77614 24 8.66667M24 3.19048C24 1.98024 20.7591 1 16.7623 1C12.7645 1 9.52464 1.98024 9.52464 3.19048M24 3.19048C24 4.40071 20.7591 5.38095 16.7623 5.38095C12.7655 5.38095 9.52464 4.40071 9.52464 3.19048M9.52464 3.19048V14.3247" stroke="#011F68" strokeWidth="1.5"/>
              </svg>
              <p className="font-semibold text-black">Pembelian</p>
            </div>
            <br />
          </div>

          {/* Info */}
          <div className="md:w-3/4">
            {/* Up */}
            <div className="flex justify-between w-full">
              <div className="flex gap-2">
                <div className="bg-gra1b rounded-t-xl text-white font-semibold px-4 py-2">
                  <h1>Semua Event</h1>
                </div>
                <div className="hover:bg-gra1b hover:rounded-t-xl hover:text-white font-semibold px-4 py-2 cursor-pointer" onClick={() => navigate("")}>
                  <h1>Tayang</h1>
                </div>
                <div className="hover:bg-gra1b hover:rounded-t-xl hover:text-white font-semibold px-4 py-2 cursor-pointer" onClick={() => navigate("")}>
                  <h1>Berakhir</h1>
                </div>
              </div>

              {/* Tambah Event */}
              <div className="bg-gra1b rounded-xl text-white font-semibold px-4 py-2 cursor-pointer hover:bg-gra1a" onClick={() => navigate("/admin/daftarkan-event")}>
                  <h1>+ Tambah Event</h1>
                </div>
            </div>

            {/* Kotak */}
            <div className="bg-white rounded-b-2xl drop-shadow-xl px-6 py-10 w-full">
              <div className="md:flex gap-10">
                <div className="sm:w-1/4">
                  <Card img={Img} month="Jun" date="20" title="Bedah Buku" artist="Maudy Ayunda" place="Perpusnas" price="100 K" terjual="100" sisa="50" button="" onClick=""/>
                </div>
                <br />

                <div className="sm:w-3/4">
                  <h1 className="font-semibold text-2xl text-primary underline underline-offset-8 decoration-secondary">Rekap Pembelian</h1>
                  <br />
                  
                  <div className="md:flex justify-between rounded-xl border-2 px-10 py-6">
                    <div className="text-black w-2/4">
                      <h1 className="font-semibold">Penjualan Tiket</h1>
                      <br />
                      <table className="w-full">
                        <tr>
                          <td className="">Terjual</td>
                          <td className="">: 100</td>
                        </tr>
                        <tr>
                          <td className="">Sisa</td>
                          <td className="">: 50</td>
                        </tr>
                        <tr>
                          <td className="">Harga Tiket</td>
                          <td className="">: 100 K</td>
                        </tr>
                      </table>
                    </div>

                    <div className="bg-secondary text-secondary">
                      <h1>.</h1>
                    </div>

                    <div className="text-black w-2/4 pl-10">
                      <h1 className="font-semibold">Hasil Penjualan Tiket</h1>
                      <br />
                      <table className="text-center w-full">
                        <tr>
                          <td>Terjual</td>
                          <td>X</td>
                          <td>Harga Tiket</td>
                        </tr>
                        <tr>
                          <td>100</td>
                          <td>X</td>
                          <td>100.000</td>
                        </tr>
                      </table>
                      <br /> 
                      <p className="text-right">Total : 10.000.000</p>
                    </div>
                  </div>
                </div>
              </div>
              <br /> <br /> <br />

              <div>
                <h1 className="font-semibold text-2xl text-primary underline underline-offset-8 decoration-secondary">Data Pembelian</h1>
                <br />

                <hr className="border-2 my-4" />
                <table className="table-auto text-center text-primary w-full text-sm">
                  <tr>
                    <th className="py-4">Nama Pembeli</th>
                    <th className="py-4">No. Pesanan</th>
                    <th className="py-4">Tanggal Pemesanan</th>
                    <th className="py-4">Jenis Event</th>
                    <th className="py-4">Nama Acara</th>
                    <th className="py-4">Jumlah Tiket</th>
                    <th className="py-4">Harga Tiket</th>
                  </tr>
                  <tr className="mb-2 bg-red-100">
                    <td className="py-4">Fiqih Fadillah N</td>
                    <td className="py-4">1111-92929-1919</td>
                    <td className="py-4">20-10-2023</td>
                    <td className="py-4">Pendidikan</td>
                    <td className="py-4">Bedah Buku</td>
                    <td className="py-4">1</td>
                    <td className="py-4">100.000</td>
                  </tr>
                  <tr className=" bg-slate-100">
                    <td className="py-4">Fiqih Fadillah N</td>
                    <td className="py-4">1111-92929-1919</td>
                    <td className="py-4">20-10-2023</td>
                    <td className="py-4">Pendidikan</td>
                    <td className="py-4">Bedah Buku</td>
                    <td className="py-4">1</td>
                    <td className="py-4">100.000</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminEventPembelian