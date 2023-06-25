import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Daftar from './Page/Daftar'
import Login from './Page/Login'
import Beranda from './Components/Beranda'
import Unavailable from './Page/Unavailable'

// Profile
import Profile from './Page/Profile'
import DetailTicket from './Page/DetailTicket'
import DetailTicketOnline from './Page/DetailTicketOnline'
import Pesanan from './Page/Pesanan'
import Favorite from './Page/Favorite'

// Event
import KegiatanEvent from './Page/KegiatanEvent'
import DetailEvent from './Page/DetailEvent'
import BeliTiket from './Page/BeliTiket'
import Pembayaran from './Page/Pembayaran'
import PembayaranSelesai from './Page/PembayaranSelesai'

// Volunteer
import KegiatanVolunteer from './Page/KegiatanVolunteer'
import DetailVolunteer from './Page/DetailVolunteer'
import DaftarVolunteer from './Page/DaftarVolunteer'

// Admin
import AdminLogin from './Page/AdminLogin'
import AdminDaftar from './Page/AdminDaftar'
import PembayaranAdmin from './Page/AdminPembayaran'
import PembayaranVolunteerAdmin from './Page/AdminPembayaranVolunteer'
import ProfileAdmin from './Page/AdminProfile'

import EventAdmin from './Page/AdminEvent'
import AdminEventPembelian from './Page/AdminEventPembelian'
import AdminEventPembelianDetail from './Page/AdminEventPembelianDetail'
import DaftarkanEvent from './Page/AdminDaftarkanEvent'
import PendaftaranEvent from './Page/AdminPendaftaranEvent'

import AdminVolunteer from './Page/AdminVolunteer'
import AdminVolunteerPendaftar from './Page/AdminVolunteerPendaftar'
import AdminVolunteerPendaftarDetail from './Page/AdminVolunteerPendaftarDetail'
import DaftarkanVolunteer from './Page/AdminDaftarkanVolunteer'
import PendaftaranVolunteer from './Page/AdminPendaftaranVolunteer'

// Footer
import InfoMendaftarkan from './Page/Info_MendaftarkanEvent'

export default function App() {
  return (
    // <Router>
      <Routes>
        <Route exact path="/" element={<Beranda />} />
        <Route path="/login" element={<Login />} />
        <Route path="/daftar" element={<Daftar />} />

        {/* Profil */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/pesanan" element={<Pesanan />} />
        <Route path="/pesanan/offline/detail" element={<DetailTicket />} />
        <Route path="/pesanan/online/detail" element={<DetailTicketOnline />} />
        <Route path="/profile/tambahkan-moment" element={<Unavailable />} />
        <Route path="/favorite" element={<Favorite />} />

        {/* Event */}
        <Route path="/event" element={<KegiatanEvent />} />
        <Route path="/event/detail" element={<DetailEvent />} />
        <Route path="/event/beli-tiket" element={<BeliTiket />} />
        <Route path="/event/pembayaran" element={<Pembayaran />} />
        <Route path="/event/pembayaran-selesai" element={<PembayaranSelesai />} />

        {/* Volunteer */}
        <Route path="/volunteer" element={<KegiatanVolunteer />} />
        <Route path="/volunteer/detail" element={<DetailVolunteer />} />
        <Route path="/volunteer/daftar-volunteer" element={<DaftarVolunteer />} />

        {/* Admin */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/daftar" element={<AdminDaftar />} />
        <Route path="/admin/pembayaran" element={<PembayaranAdmin />} />
        <Route path="/admin/pembayaran-volunteer" element={<PembayaranVolunteerAdmin />} />
        <Route path="/admin/profile" element={<ProfileAdmin />} />
        
        <Route path="/admin/event" element={<EventAdmin />} />
        <Route path="/admin/event/pembelian" element={<AdminEventPembelian />} />
        <Route path="/admin/event/pembelian/detail" element={<AdminEventPembelianDetail />} />
        <Route path="/admin/daftarkan-event" element={<DaftarkanEvent />} />
        <Route path="/admin/pendaftaran-event" element={<PendaftaranEvent />} />

        <Route path="/admin/volunteer" element={<AdminVolunteer />} />
        <Route path="/admin/volunteer/pendaftar" element={<AdminVolunteerPendaftar />} />
        <Route path="/admin/volunteer/pendaftar/detail" element={<AdminVolunteerPendaftarDetail />} />
        <Route path="/admin/daftarkan-volunteer" element={<DaftarkanVolunteer />} />
        <Route path="/admin/pendaftaran-volunteer" element={<PendaftaranVolunteer />} />
        
        {/* Footer */}
        <Route path="/info-mendaftarkan-event-dan-volunteer-event" element={<InfoMendaftarkan />} />
      </Routes>
    // </Router>
    
    // <div>
    //   <Navbar />
    //   <Login />
    //   <Daftar />
    // </div>
  )
}
