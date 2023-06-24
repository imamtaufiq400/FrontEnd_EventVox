import "../App.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, reset } from "../features/authSlice";
import bgLogin from "../Asset/Subtracts.svg";
import logoFacebook from "../Asset/logos_facebook.svg";
import logoGoogle from "../Asset/logos_google-icon.svg";
import logoGooglePlus from "../Asset/logos_google-plus.svg";
import Logo from "../Asset/Logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = React.useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isError, isSucces, isLoading, message } = useSelector(
    (state) => state.auth
  );
  console.log(user);
  useEffect(() => {
    if (user || isSucces) {
      navigate("/profile");
    }
    dispatch(reset());
  }, [user, isSucces]);
  // console.log(userData);
  useEffect(() => {
    if (userData === "user") {
      navigate("/profile");
    }
    dispatch(reset());
  });

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ email, password }));
  };
  React.useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("users"));
    const user = localData?.users?.role;
    // console.info(localData.user);
    setUserData(user);
  }, []);
  return (
    <div className="md:flex text-center w-screen h-screen">
      {/* Formulir Daftar */}
      <div className="md:w-2/4 w-screen h-full px-20 py-6">
        <div className="flex align-center justify-center rounded-2xl">
          <img
            src={Logo}
            alt="Logo"
            className=" double-border border-2 border-primary rounded-2xl h-14 w-30 mx-8 px-auto object-center"
          ></img>
        </div>
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-gra1a to-gra1b mt-10 mb-10">
          LOGIN PAGE
        </h1>

        {/* Form */}
        <form onSubmit={Auth} action="" method="" className="text-left">
          {isError && <p className="text-center">{message}</p>}
          <div>
            <label className="text-sm font-bold">USERNAME</label>
            <br />
            <input
              type="text"
              name="username"
              placeholder="Mark123"
              className="border-solid border-2 px-3 py-1 rounded-lg w-full text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="mt-4">
            <label className="text-sm font-bold">PASSWORD</label>
            <br />
            <input
              type="password"
              name="password"
              placeholder="xxxxxx"
              className="border-solid border-2 px-3 py-1 rounded-lg w-full text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div>
            <a href="" className="text-primary">
              Lupa Password
            </a>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="text-white bg-gradient-to-r from-gra1a to-gra1b font-bold text-sm my-5 py-2 px-8 rounded-lg"
            >
              {isLoading ? "Loading...." : "LOGIN"}
            </button>
          </div>
          <div className="flex flex-col justify-center">
            <br />
            <p className="text-sm text-center">Atau Daftar dengan</p>
            <br />
            <div className="flex flex-row justify-center space-x-6 mb-10">
              <img src={logoGoogle} alt="Google" className="w-6"></img>
              <img src={logoFacebook} alt="Facebook" className="w-6"></img>
              <img src={logoGooglePlus} alt="Google+" className="w-6"></img>
            </div>
          </div>
        </form>
      </div>

      {/* Image */}
      <div
        className="md:w-2/4 w-screen h-full text-white align-center bg-cover"
        style={{ backgroundImage: `url(${bgLogin})` }}
      >
        <div className="pt-60 px-7">
          <h1 className="text-4xl font-bold mt-2 mb-4">WELLCOME BACK !!</h1>
          <p className="text-lg mb-6">Belum Punya Akun? Daftar Sekarang!</p>
          <button
            onClick={() => navigate("/daftar")}
            className="bg-secondary text-lg font-bold py-1 px-10 mt-4 rounded-lg"
          >
            DAFTAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
