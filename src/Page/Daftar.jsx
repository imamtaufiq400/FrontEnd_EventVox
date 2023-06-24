import "../App.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DaftarUser, reset } from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import bgDaftar from "../Asset/Subtract.svg";
import logoFacebook from "../Asset/logos_facebook.svg";
import logoGoogle from "../Asset/logos_google-icon.svg";
import logoGooglePlus from "../Asset/logos_google-plus.svg";
import Logo from "../Asset/Logo.png";

const Daftar = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSucces, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user || isSucces) {
      navigate("/login");
    }
    dispatch(reset());
  }, [user, isSucces]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(DaftarUser({ name, username, email, password }));
  };

  return (
    <div className="md:flex text-center w-screen h-screen">
      {/* Image */}
      <div
        className="md:w-2/4 w-screen h-full text-white align-center"
        style={{ backgroundImage: `url(${bgDaftar})` }}
      >
        <div className="pt-60 px-7">
          <h1 className="text-4xl font-bold mb-4">HELLO, FRIENDS !</h1>
          <p className="text-lg mb-12">
            Beli atau Daftarkan Eventmu Secara Mudah Disini!
          </p>
          <button
            onClick={() => navigate("/login")}
            className="bg-secondary text-lg font-bold py-1 px-10 rounded-lg"
          >
            LOGIN
          </button>
        </div>
      </div>

      {/* Formulir Daftar */}
      <div className="md:w-2/4 w-screen h-full px-20 py-6">
        <div className="flex align-center justify-center rounded-2xl">
          <img
            src={Logo}
            alt="Logo"
            className=" double-border border-2 border-primary rounded-2xl h-14 w-30 mx-8 px-auto object-center"
          ></img>
        </div>
        <h1 className="my-4 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-gra1a to-gra1b mb-10">
          BUAT AKUN
        </h1>

        {/* Form */}
        <form onSubmit={Auth} action="" method="" className="text-left">
          {isError && (
            <p className="text-center text-red-700">
              Silahkan Input Data. Data tidak boleh kosong!
            </p>
          )}
          <div className="mb-4">
            <label className="text-sm font-bold">NAMA LENGKAP</label>
            <br />
            <input
              type="text"
              name="name"
              placeholder="Mark Zuckerberg"
              className="border-solid border-2 px-3 py-1 rounded-lg w-full text-sm"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div className="mb-4">
            <label className="text-sm font-bold">USERNAME</label>
            <br />
            <input
              type="text"
              name="username"
              placeholder="Mark123"
              className="border-solid border-2 px-3 py-1 rounded-lg w-full text-sm"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </div>
          <div className="mb-4">
            <label className="text-sm font-bold">EMAIL</label>
            <br />
            <input
              type="email"
              name="email"
              placeholder="markz@gmail.com"
              className="border-solid border-2 px-3 py-1 rounded-lg w-full text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="mb-4">
            <label className="text-sm font-bold">BUAT PASSWORD</label>
            <br />
            <input
              type="password"
              name="password"
              placeholder="markmark123"
              className="border-solid border-2 px-3 py-1 rounded-lg w-full text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="text-white bg-gradient-to-r from-gra1a to-gra1b font-bold text-sm my-4 py-2 px-10 rounded-lg"
            >
              {isLoading ? "Loading...." : "Daftar"}
            </button>
          </div>
        </form>

        {/* Opsi Daftar */}
        <br />
        <p className="text-sm">Atau Daftar dengan</p>
        <br />
        <div className="flex justify-center gap-5 mb-10">
          <img src={logoGoogle} alt="Google" className="w-6"></img>
          <img src={logoFacebook} alt="Facebook" className="w-6"></img>
          <img src={logoGooglePlus} alt="Google+" className="w-6"></img>
        </div>
      </div>
    </div>
  );
};

export default Daftar;
