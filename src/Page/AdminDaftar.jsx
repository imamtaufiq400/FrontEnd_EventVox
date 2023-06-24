import "../App.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DaftarPromotor, reset } from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import Logo from "../Asset/Logo.png";

const AdminDaftar = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [nomorTelepon, setNomorTelepon] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSucces, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user || isSucces) {
      navigate("/admin/login");
    }
    dispatch(reset());
  }, [user, isSucces]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(DaftarPromotor({ name, username, nomorTelepon, email, password }));
  };

  return (
    <>
      <div className="h-screen">
        <img src={Logo} alt="EventVox" className="md:w-60 w-36" />

        <div className="flex justify-center">
          <div className="text-center px-8">
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-gra1a to-gra1b mt-10 mb-4">
              HELLO, FRIENDS!
            </h1>
            <p className="text-primary">
              Silakan isi form dibawah ini untuk menjadi akun EventVox Organizer
            </p>
            <br />
            <br />

            <form onSubmit={Auth} method="" action="">
              <div>
                <input
                  type="text"
                  placeholder="Nama Lengkap Anda"
                  className="w-full border-2 px-4 py-2 rounded-lg mb-4"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />{" "}
                <br />
                <input
                  type="text"
                  placeholder="Username Anda"
                  className="w-full border-2 px-4 py-2 rounded-lg mb-4"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />{" "}
                <br />
                <input
                  type="email"
                  placeholder="Email Anda"
                  className="w-full border-2 px-4 py-2 rounded-lg mb-4"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />{" "}
                <br />
                <input
                  type="telp"
                  placeholder="No Telp Anda"
                  className="w-full border-2 px-4 py-2 rounded-lg mb-4"
                  value={nomorTelepon}
                  onChange={(e) => setNomorTelepon(e.target.value)}
                />{" "}
                <br />
                <input
                  type="password"
                  placeholder="Password Anda"
                  className="w-full border-2 px-4 py-2 rounded-lg mb-4"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex justify-between">
                <input type="text" />
              </div>
              <br />

              <button
                type="submit"
                className="text-white bg-gradient-to-b from-gra1a to-gra1b font-bold text-sm my-4 py-2 px-10 rounded-lg"
              >
                {isLoading ? "Loading...." : "Daftar"}
              </button>
            </form>

            <p>
              Belum menjadi partner?{" "}
              <a href="/admin/login" className="text-primary hover:underline">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDaftar;
