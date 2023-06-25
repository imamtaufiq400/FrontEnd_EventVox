import '../App.css'
import Button from '../Components/Button'
import ButtonOutline from '../Components/ButtonOutline'
import Img from '../Asset/event2.jpg'
import Verify from '../Asset/icons_verify.svg'
import Navbar from '../Components/NavbarAdmin'

const ProfileAdmin = () => {
  return (
    <>
      <div>
        {/* Navbar */}
        <Navbar />

        <div className="bg-gray-100 py-8 px-16 flex gap-4 items-center">
          <div className="bg-secondary text-secondary h-full ">
            <h1>..</h1>
          </div>
          <h1 className="text-primary text-3xl font-bold">AKUN SAYA</h1>
        </div>

        <div className="py-8 px-10 sm:px-24 md:px-72">
          <form>
            {/* Foto & Nama */}
            <div className="flex gap-10 items-center">
              <div className="text-center">
                <img src={Img} className="w-40 h-40 rounded-full bg-primary drop-shadow-md mb-4"/>
                <a href="" className="text-secondary hover:underline">Ubah Foto</a>
              </div>

              <div>
                <input type="text" placeholder="Fiqih Fadillah N" name="nama" className="px-4 py-2 border-2 rounded-xl w-full mt-4 text-2xl"/> <br />
                <div className="text-secondary font-semibold flex gap-4 items-center mt-2">
                  <img src={Verify} className="w-6 h-6"/>
                  <p>Akun Telah Terverifikasi</p>
                </div>
              </div>
            </div>

            {/* Info */}
            <div>
              <input type="email" placeholder="Fiqihfadillah@gmail.com" name="email" className="px-4 py-2 border-2 rounded-md w-full mt-4"/> <br />
              <input type="password" placeholder="Fiqihnaksuban123" name="password" className="px-4 py-2 border-2 rounded-md w-full mt-4"/> <br />
              <input type="text" placeholder="Himpunan Mahasiswa Manajemen" name="pekerjaan" className="px-4 py-2 border-2 rounded-md w-full mt-4"/> <br />
              <select name="interest" className="px-4 py-2 border-2 rounded-md w-full mt-4">
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
  )
}

export default ProfileAdmin