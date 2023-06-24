import "../App.css";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../Asset/Logo.png";

const NavbarProfile = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar bg-primary text-white">
      <div className="navbar-start">
        <div className="dropdown bg-primary">
          <label tabIndex={0} className="btn btn-ghost bg-primary lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52"
          >
            <li>
              <a>Beranda</a>
            </li>
            <li>
              <a>Kegiatan</a>
              <ul className="pl-2">
                <li>
                  <a>Event</a>
                </li>
                <li>
                  <a>Volunteer</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Daftarkan</a>
              <ul className="pl-2">
                <li>
                  <a>Daftarkan Event</a>
                </li>
                <li>
                  <a>Daftarkan Volunteer</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <img
          src={Logo}
          alt="LogoEventVox"
          className="h-30 w-52 mx-8 btn btn-ghost"
        ></img>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Beranda</a>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Kegiatan</summary>
              <ul className="pl-2 text-primary">
                <li>
                  <Link to="/event">Event</Link>
                </li>
                <li>
                  <Link to="/volunteer">Volunteer</Link>
                </li>
              </ul>
            </details>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Daftarkan</summary>
              <ul className="pl-2 text-primary">
                <li>
                  <Link to="admin/login">Daftarkan Event</Link>
                </li>
                <li>
                  <Link to="admin/login">Daftarkan Volunteer</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="dropdown dropdown-end pl-64">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-primary rounded-box w-52"
        >
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarProfile;
