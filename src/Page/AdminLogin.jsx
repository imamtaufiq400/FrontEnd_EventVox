import "../App.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginPromotor, reset } from "../features/authSlice";
import Logo from "../Asset/Logo.png";

const AdminLogin = () => {
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
      navigate("/admin/profile");
    }
    dispatch(reset());
  }, [user, isSucces]);

  useEffect(() => {
    if (userData === "promotor") {
      navigate("/admin/profile");
    }
    dispatch(reset());
  });

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginPromotor({ email, password }));
  };
  React.useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("users"));
    const user = localData?.users?.role;
    console.info(localData.user);
    setUserData(user);
  }, []);

  return (
    <>
      <div className="h-screen">
        <img src={Logo} alt="EventVox" className="md:w-60 w-36" />

        <div className="flex justify-center">
          <div className="text-center px-8">
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-gra1a to-gra1b mt-10 mb-4">
              HELLO, Wellcome Back!
            </h1>
            <p className="text-primary">
              Silakan login terlebih dahulu, untuk menjadi akun EventVox
              Organizer
            </p>
            <br />
            <br />

            <form onSubmit={Auth} method="" action="">
              {isError && <p className="text-center">{message}</p>}
              <div>
                <input
                  type="email"
                  placeholder="Email Anda"
                  className="w-full border-2 px-4 py-2 rounded-lg mb-4"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                <a href="" className="text-primary hover:underline">
                  Lupa Password
                </a>
              </div>
              <br />

              <button
                type="submit"
                className="text-white bg-gradient-to-b from-gra1a to-gra1b font-bold text-sm my-4 py-2 px-10 rounded-lg"
              >
                {isLoading ? "Loading..." : "LOGIN"}
              </button>
            </form>

            <p>
              Belum menjadi partner?{" "}
              <a href="/admin/daftar" className="text-primary hover:underline">
                Daftar
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
