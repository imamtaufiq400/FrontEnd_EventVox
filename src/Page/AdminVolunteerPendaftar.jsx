import '../App.css'
import { useNavigate, Link } from 'react-router-dom'

import Button from '../Components/Button'
import ButtonOutline from '../Components/ButtonOutline'
import Card from '../Modal/CardAdminVolunteer'
import Img from '../Asset/event2.jpg'
import Navbar from '../Components/NavbarAdmin'

const AdminVolunteerPendaftar = () => {
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
          <h1 className="text-primary text-3xl font-bold">VOLUNTEER</h1>
        </div>

        <div className="py-8 px-10 md:py-10 md:px-16 sm:flex gap-10">
          {/* Side */}
          <div className="md:w-1/4">
            <div className="border-2 border-secondary rounded-lg py-4 px-6 flex gap-4 hover:bg-secondary cursor-pointer" onClick={() => navigate("/admin/volunteer")}>
              <svg width="27" height="22" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.95 6.47059V14.2353C25.245 14.2353 27 12.5529 27 10.3529C27 8.15294 25.245 6.47059 22.95 6.47059ZM12.15 5.17647H2.7C1.215 5.17647 0 6.34118 0 7.76471V12.9412C0 14.3647 1.215 15.5294 2.7 15.5294H4.05V19.4118C4.05 20.8353 5.265 22 6.75 22H9.45V15.5294H12.15L17.55 20.7059H20.25V0H17.55L12.15 5.17647Z" fill="#011F68"/>
              </svg>
              <p className="font-semibold text-black">Daftar Volunteer</p>
            </div>
            <br />

            <div className="bg-secondary rounded-lg py-4 px-6 flex gap-4">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6818 16.3333C16.6818 15.1231 13.4054 14.1429 9.36364 14.1429M16.6818 16.3333C16.6818 17.5436 13.4054 18.5238 9.36364 18.5238C5.32191 18.5238 2.04545 17.5436 2.04545 16.3333M16.6818 16.3333V21.7405C16.6818 22.988 13.4054 24 9.36364 24C5.32191 24 2.04545 22.9891 2.04545 21.7405V16.3333M16.6818 16.3333C20.6796 16.3333 24 15.2523 24 14.1429V3.19048M9.36364 14.1429C5.32191 14.1429 2.04545 15.1231 2.04545 16.3333M9.36364 14.1429C4.74482 14.1429 1 13.0619 1 11.9524V6.47619M9.36364 4.28571C4.74482 4.28571 1 5.26595 1 6.47619M1 6.47619C1 7.68643 4.74482 8.66667 9.36364 8.66667C9.36364 9.77614 12.7645 10.8571 16.7623 10.8571C20.7591 10.8571 24 9.77614 24 8.66667M24 3.19048C24 1.98024 20.7591 1 16.7623 1C12.7645 1 9.52464 1.98024 9.52464 3.19048M24 3.19048C24 4.40071 20.7591 5.38095 16.7623 5.38095C12.7655 5.38095 9.52464 4.40071 9.52464 3.19048M9.52464 3.19048V14.3247" stroke="#011F68" stroke-width="1.5"/>
              </svg>
              <p className="font-semibold text-black">Pendaftar</p>
            </div>
            <br />
          </div>

          {/* Info */}
          <div className="md:w-3/4">
            {/* Up */}
            <div className="flex justify-between w-full">
              <div className="flex gap-2">
                <div className="bg-gra1b rounded-t-xl text-white font-semibold px-4 py-2">
                  <h1>Semua Kegiatan</h1>
                </div>
                <div className="hover:bg-gra1b hover:rounded-t-xl hover:text-white font-semibold px-4 py-2 cursor-pointer" onClick={() => navigate("")}>
                  <h1>Tayang</h1>
                </div>
                <div className="hover:bg-gra1b hover:rounded-t-xl hover:text-white font-semibold px-4 py-2 cursor-pointer" onClick={() => navigate("")}>
                  <h1>Berakhir</h1>
                </div>
              </div>

              {/* Tambah Event */}
              <Button onClick={() => navigate("/admin/daftarkan-event")}>+ Tambah Kegiatan</Button>
            </div>

            {/* Kotak */}
            <div className="bg-white rounded-b-2xl drop-shadow-xl px-6 py-10 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              <Card img={Img} month="Jun" date="20" title="Bedah Buku" artist="Maudy Ayunda" place="Perpusnas" price="0" terjual="30" sisa="2" button="Detail" onClick={() => navigate("/admin/volunteer/pendaftar/detail")} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminVolunteerPendaftar