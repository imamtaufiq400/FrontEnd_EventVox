import '../App.css'
import { useNavigate } from 'react-router-dom'
import Button from '../Components/Button'
import ButtonOutline from '../Components/ButtonOutline'
import Mobile from '../Asset/mobile.png'

const Unavailable = () => {
  const navigate = useNavigate()
  
  return (
    <>
      <div className="md:flex items-center h-screen px-20">
        {/* Teks */}
        <div className="">
          <h1 className="font-bold text-5xl text-black">MOHON MAAF!</h1>
          <br />
          <h3 className="font-medium text-3xl text-black">Proses ini masih dalam proses pengembangan.</h3>
          <br />
          
          <div className="flex gap-4">
            <Button onClick={() => navigate(-1)}>Kembali</Button>
          </div>
        </div>
        <br />

        {/* Gambar */}
        <div>
          <img src={Mobile} alt="Unavailable" />
        </div>
      </div>
    </>
  )
}

export default Unavailable