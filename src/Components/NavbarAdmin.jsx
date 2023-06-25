import '../App.css'
import { useNavigate, Link } from "react-router-dom";
import Logo from "../Asset/logo_admin.svg"
import Profil from "../Asset/profil.png"

const NavbarAdmin = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar bg-primary text-white">
      <div className="navbar-start">
        {/* Responsive */}
        <div className="dropdown bg-primary hover:bg-violet-600">
          <label tabIndex={0} className="bg-primary lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 bg-primary rounded-box w-52">
            <li><Link to="/admin/event" className="hover:bg-violet-600">Event</Link></li>
            <li><Link to="/admin/volunteer" className="hover:bg-violet-600">Volunteer</Link></li>
            <li>
              <a>Daftarkan</a>
              <ul className="pl-2">
                <li><Link to="/admin/daftarkan-event" className="hover:bg-violet-600">Daftarkan Event</Link></li>
                <li><Link to="/admin/daftarkan-volunteer" className="hover:bg-violet-600">Daftarkan Volunteer</Link></li>
              </ul>
            </li>
          </ul>
        </div>
        <img src={Logo} alt="LogoEventVox" className="h-30 w-52 mx-8 btn btn-ghost hover:bg-violet-600"></img>
      </div>

      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-2">
          <li className="rounded-xl hover:bg-secondary"><Link to="/admin/event">Event</Link></li>
          <li className="rounded-xl hover:bg-secondary"><Link to="/admin/volunteer">Volunteer</Link></li>
          <li tabIndex={0} className="rounded-xl hover:bg-secondary">
            <details>
              <summary>Daftarkan</summary>
              <ul className="pl-2 text-primary">
                <li><Link to="/admin/daftarkan-event">Daftarkan Event</Link></li>
                <li><Link to="/admin/daftarkan-volunteer">Daftarkan Volunteer</Link></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      
      <div className="dropdown dropdown-end pl-64">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <svg width="41" height="38" viewBox="0 0 41 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M28.1875 14.2663C28.1875 16.15 27.3776 17.9565 25.9359 19.2884C24.4942 20.6203 22.5389 21.3686 20.5 21.3686C18.4611 21.3686 16.5058 20.6203 15.0641 19.2884C13.6224 17.9565 12.8125 16.15 12.8125 14.2663C12.8125 12.3827 13.6224 10.5762 15.0641 9.24427C16.5058 7.91234 18.4611 7.16406 20.5 7.16406C22.5389 7.16406 24.4942 7.91234 25.9359 9.24427C27.3776 10.5762 28.1875 12.3827 28.1875 14.2663Z" fill="white"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M0 19.0019C0 13.9789 2.15982 9.16155 6.00431 5.60972C9.84881 2.0579 15.0631 0.0625 20.5 0.0625C25.9369 0.0625 31.1512 2.0579 34.9957 5.60972C38.8402 9.16155 41 13.9789 41 19.0019C41 24.0249 38.8402 28.8422 34.9957 32.3941C31.1512 35.9459 25.9369 37.9413 20.5 37.9413C15.0631 37.9413 9.84881 35.9459 6.00431 32.3941C2.15982 28.8422 0 24.0249 0 19.0019ZM20.5 2.42992C17.1221 2.43009 13.8128 3.31146 10.9532 4.9726C8.0935 6.63374 5.79966 9.00713 4.33566 11.8196C2.87165 14.632 2.29699 17.7693 2.67781 20.8702C3.05863 23.9711 4.37945 26.9096 6.48825 29.3475C8.30763 26.6392 12.3128 23.7367 20.5 23.7367C28.6872 23.7367 32.6898 26.6368 34.5118 29.3475C36.6206 26.9096 37.9414 23.9711 38.3222 20.8702C38.703 17.7693 38.1283 14.632 36.6643 11.8196C35.2003 9.00713 32.9065 6.63374 30.0468 4.9726C27.1872 3.31146 23.8779 2.43009 20.5 2.42992Z" fill="white"/>
            </svg>
          </div>
        </label>
        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-white text-black rounded-box w-52">
          <li>
            <a href="/admin/profile" className="justify-between">
              Akun Saya
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
            </a>
          </li>
          <li><Link to="" className="justify-between">Keluar
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
            </svg>
          </span></Link></li>
        </ul>
      </div>
    </div>
  );
};


export default NavbarAdmin