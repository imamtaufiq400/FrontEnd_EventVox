import "../App.css";
import Button from "../Components/Button";
import ButtonOutline from "../Components/ButtonOutline";

const ProfileAdmin = () => {
  return (
    <>
      <div>
        {/* Navbar */}

        <div className="bg-gray-100 py-8 px-16">
          <h1 className="text-primary text-3xl font-bold">AKUN SAYA</h1>
        </div>

        <div className="px-10 sm:px-24 md:px-72">
          <form>
            {/* Foto & Nama */}
            <div></div>

            {/* Info */}
            <div>
              <input
                type="email"
                placeholder="Fiqihfadillah@gmail.com"
                name="email"
                className="px-4 py-2 border-2 rounded-md w-full mt-4"
              />{" "}
              <br />
              <input
                type="password"
                placeholder="Fiqihnaksuban123"
                name="password"
                className="px-4 py-2 border-2 rounded-md w-full mt-4"
              />{" "}
              <br />
              <input
                type="text"
                placeholder="Himpunan Mahasiswa Manajemen"
                name="pekerjaan"
                className="px-4 py-2 border-2 rounded-md w-full mt-4"
              />{" "}
              <br />
              <select
                name="interest"
                className="px-4 py-2 border-2 rounded-md w-full mt-4"
              >
                <option value="Pendidikan">Pendidikan</option>
                <option value="Sosial">Sosial</option>
                <option value="Hiburan">Hiburan</option>
              </select>
            </div>

            {/* Action */}
            <div className="flex gap-4 justify-end mt-8">
              <ButtonOutline type="reset">Reset</ButtonOutline>
              <Button type="reset">Simpan</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProfileAdmin;
