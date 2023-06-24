import "../App.css";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../Asset/Logo.png";
import profil from "../Asset/profil.png";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    localStorage.removeItem("users");
    dispatch(reset());
    navigate("/login");
  };

  return (
    <div className="navbar bg-primary text-white">
      <div className="navbar-start">
        <div className="dropdown bg-primary hover:bg-violet-600">
          <label tabIndex={0} className="bg-primary lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
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
            className="menu menu-sm dropdown-content mt-3 p-2 bg-primary rounded-box w-52"
          >
            <li>
              <Link to="/" className="hover:bg-violet-600">
                Beranda
              </Link>
            </li>
            <li>
              <a>Kegiatan</a>
              <ul className="pl-2">
                <Link to="/event" className="hover:bg-violet-600">
                  Event
                </Link>
                <Link to="/volunteer" className="hover:bg-violet-600">
                  Volunteer
                </Link>
              </ul>
            </li>
            <li>
              <a>Daftarkan</a>
              <ul className="pl-2">
                <Link to="/admin/login" className="hover:bg-violet-600">
                  Daftarkan Event
                </Link>
                <Link to="/admin/login" className="hover:bg-violet-600">
                  Daftarkan Volunteer
                </Link>
              </ul>
            </li>
          </ul>
        </div>
        <img
          src={Logo}
          alt="LogoEventVox"
          className="h-30 w-52 mx-8 btn btn-ghost hover:bg-violet-600"
        ></img>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-2">
          <li className="rounded-xl hover:bg-secondary">
            <Link to="/">Beranda</Link>
          </li>
          <li tabIndex={0} className="rounded-xl hover:bg-secondary">
            <details>
              <summary classname="hover:bg-secondary">Kegiatan</summary>
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
          <li tabIndex={0} className="rounded-xl hover:bg-secondary">
            <details>
              <summary>Daftarkan</summary>
              <ul className="pl-2 text-primary">
                <li>
                  <Link to="/admin/login">Daftarkan Event</Link>
                </li>
                <li>
                  <Link to="/admin/login">Daftarkan Volunteer</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="dropdown dropdown-end pl-64">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src={profil} />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-white text-black rounded-box w-52"
        >
          <li>
            <a href="/profile" className="justify-between">
              Akun Saya
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </span>
            </a>
          </li>
          <li>
            <a href="/pesanan" className="justify-between">
              Pesanan
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                  />
                </svg>
              </span>
            </a>
          </li>
          <li>
            <a className="justify-between">
              Favorite
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    stroke-strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </span>
            </a>
          </li>
          <li>
            <button onClick={logout} className="justify-between">
              Keluar
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                  />
                </svg>
              </span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
