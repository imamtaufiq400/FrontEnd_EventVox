import "../App.css";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../Asset/Logo.png";

const Navbar = () => {
  const navigate = useNavigate();

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
                <li>
                  <Link to="/event" className="hover:bg-violet-600">
                    Event
                  </Link>
                </li>
                <li>
                  <Link to="/volunteer" className="hover:bg-violet-600">
                    Volunteer
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a>Daftarkan</a>
              <ul className="pl-2">
                <li>
                  <Link to="/admin/login" className="hover:bg-violet-600">
                    Daftarkan Event
                  </Link>
                </li>
                <li>
                  <Link to="/admin/login" className="hover:bg-violet-600">
                    Daftarkan Volunteer
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <Link to="/login">
          <img
            src={Logo}
            alt="LogoEventVox"
            className="h-30 w-52 mx-8 btn btn-ghost hover:bg-violet-600"
          ></img>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-2">
          <li className="rounded-xl hover:bg-secondary">
            <Link to="/">Beranda</Link>
          </li>
          <li tabIndex={0} className="rounded-xl hover:bg-secondary">
            <details>
              <summary className="hover:bg-secondary">Kegiatan</summary>
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
      <div className="navbar-end pl-52">
        <button
          onClick={() => navigate("/Login")}
          className="group border-double border-2 px-8 py-1 rounded-xl border-white text-align text-lg hover:bg-secondary"
        >
          Masuk
        </button>
      </div>
    </div>
  );
};

export default Navbar;
