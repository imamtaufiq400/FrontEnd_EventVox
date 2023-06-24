import "../App.css";
import { useNavigate } from "react-router-dom";
import Back from "../Asset/icons_back2.svg";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import Navbar from "../Components/NavbarProfile";
import Interest from "../Components/Interest";
import Button from "../Components/Button";
import ButtonOutline from "../Components/ButtonOutline";
import { getMe } from "../features/authSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/Login");
    }
  }, [isError, navigate]);

  return (
    <>
      <Navbar />

      <div className="md:p-14 p-8">
        <div
          className="font-bold text-gra2b text-xl flex items-center gap-3 cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <img src={Back} />
          <p className="hover:underline">Back</p>
        </div>

        <div className="py-4 px-14">
          {/* Informasi User */}
          <div className="md:flex gap-10">
            <div>
              {/* User */}
              <div className="bg-gra2b text-white p-6 rounded-2xl">
                <div>
                  <div className="flex justify-center">
                    <div>
                      <img
                        src=""
                        alt="User"
                        className="w-32 h-32 rounded-full bg-white"
                      />
                      <h1 className="font-bold">FIQIH FADILLAH N</h1>
                    </div>
                  </div>
                  <br />

                  <div>
                    <p className="font-bold text-sm">Mahasiswa</p>
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <p className="text-xs">Tanjung Pinang</p>
                    </div>
                  </div>

                  <div className="my-4 flex gap-2">
                    <Interest>SENI</Interest>
                    <Interest>OLAHRAGA</Interest>
                    <Interest>DANGDUT</Interest>
                  </div>
                </div>
              </div>
              <br />

              {/* Password */}
              <div className="bg-gra2b text-white p-6 rounded-2xl">
                <h1 className="font-bold text-center">Ubah Password</h1>
                <form action="" method="">
                  <div>
                    <label className="w-full">Password Lama</label>
                    <br />
                    <input
                      type="password"
                      className="px-2 mt-2 mb-4 text-black border-2 rounded-md w-full"
                    />
                  </div>
                  <div>
                    <label className="w-full">Password Baru</label>
                    <br />
                    <input
                      type="password"
                      className="px-2 mt-2 mb-4 text-black border-2 rounded-md w-full"
                    />
                  </div>
                  <div className="relative pt-2 pb-8">
                    <input
                      type="submit"
                      className="absolute right-0 py-1 px-4 bg-violet-800 rounded-full600 rounded-full hover:bg-secondary duration-500"
                    />
                  </div>
                </form>
              </div>
            </div>
            <br /> <br />
            {/* Form */}
            <div className="md:w-3/4">
              <form action="" method="">
                <fieldset className="px-8 py-4 bg-white border-2 border-primary drop-shadow-xl rounded-xl">
                  <div className="md:flex justify-between gap-10">
                    <div className="w-full">
                      <div>
                        <label className="w-full text-black">
                          Nama Lengkap
                        </label>
                        <br />
                        <input
                          type="text"
                          className="px-2 mt-2 mb-4 text-black border-2 rounded-md w-full"
                        />
                      </div>
                      <div>
                        <label className="w-full text-black">
                          Jenis Kelamin
                        </label>
                        <br />
                        <select
                          name="gender"
                          id="gender"
                          className="px-2 mt-2 mb-4 text-black border-2 rounded-md w-full"
                        >
                          <option value="" disable>
                            --Pilih--
                          </option>
                          <option value="Laki-Laki">Laki-Laki</option>
                          <option value="Perempuan">Perempuan</option>
                        </select>
                      </div>
                      <div>
                        <label className="w-full text-black">Pekerjaan</label>
                        <br />
                        <select
                          name="job"
                          id="job"
                          className="px-2 mt-2 mb-4 text-black border-2 rounded-md w-full"
                        >
                          <option value="" disable>
                            --Pilih--
                          </option>
                          <option value="Mahasiswa">Mahasiswa</option>
                          <option value="Wirausaha">Wirausaha</option>
                          <option value="Wiraswasta">Wiraswasta</option>
                        </select>
                      </div>
                      <div>
                        <label className="w-full text-black">
                          Domisili Saat Ini
                        </label>
                        <br />
                        <select
                          name="domisili"
                          id="domisili"
                          className="px-2 mt-2 mb-4 text-black border-2 rounded-md w-full"
                        >
                          <option value="" disable>
                            --Pilih--
                          </option>
                          <option value="Batam">Batam</option>
                          <option value="Jakarta">Jakarta</option>
                          <option value="Bandung">Bandung</option>
                        </select>
                      </div>
                      <div>
                        <label className="w-full text-black">Alamat</label>
                        <br />
                        <input
                          type="text"
                          className="px-2 mt-2 mb-4 text-black border-2 rounded-md w-full"
                        />
                      </div>
                    </div>

                    <div className="w-full">
                      <div>
                        <label className="w-full tex-black">Email</label>
                        <br />
                        <input
                          type="email"
                          className="px-2 mt-2 mb-4 text-black border-2 rounded-md w-full"
                        />
                      </div>
                      <div>
                        <label className="w-full tex-black">
                          Nomor Telepon
                        </label>
                        <br />
                        <input
                          type="tel"
                          className="px-2 mt-2 mb-4 text-black border-2 rounded-md w-full"
                        />
                      </div>
                      <div>
                        <label className="w-full tex-black">
                          Akun Instagram
                        </label>
                        <br />
                        <input
                          type="text"
                          className="px-2 mt-2 mb-4 text-black border-2 rounded-md w-full"
                        />
                      </div>
                      <div>
                        <label className="w-full tex-black">
                          Bidang Ketertarikan
                        </label>
                        <br />
                        <div>
                          <select
                            name="interest"
                            id="interest"
                            className="px-2 mt-2 mb-4 text-black border-2 rounded-md w-full"
                          >
                            <option value="" disable>
                              --Pilih--
                            </option>
                            <option value="Seni">Seni</option>
                            <option value="Olahraga">Olahraga</option>
                            <option value="Sosial">Sosial</option>
                            <option value="Pendidikan">Pendidikan</option>
                            <option value="Hiburan">Hiburan</option>
                          </select>
                          <form action="" className="flex gap-4">
                            <input
                              type="text"
                              placeholder="Tambah Tag Baru"
                              className="px-2 mt-2 mb-4 text-black border-2 rounded-md w-full"
                            />
                            <input type="Submit" className="hover:underline" />
                          </form>
                        </div>
                      </div>
                      <br /> <br />
                      <div className="flex justify-end gap-2">
                        <input
                          type="reset"
                          className="py-1 px-4 text-violet-800 border-2 border-violet-800 rounded-full600 rounded-full hover:bg-violet-800 hover:text-white duration-500"
                        />
                        <input
                          type="submit"
                          className="py-1 px-4 text-white bg-violet-800 rounded-full600 rounded-full hover:bg-secondary duration-500"
                        />
                      </div>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
          <br /> <br />
          {/* Kalender Event */}
          <div>
            <h1 className="text-3xl text-black font-bold">KALENDER EVENT</h1>
            <br />

            <div className="md:flex">
              {/* Kalender */}
              <div></div>

              {/* List Event */}
              <div></div>
            </div>
          </div>
          <br /> <br />
          {/* Riwayat Kegiatan */}
          <div>
            <h1 className="text-3xl text-black font-bold">
              RIWAYAT KEGIATANKU
            </h1>
            <br />

            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
