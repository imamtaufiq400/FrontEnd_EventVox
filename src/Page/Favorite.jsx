import '../App.css'
import { useNavigate } from 'react-router-dom'
import Back from '../Asset/icons_back2.svg'
import Event from '../Asset/event.jpg'
import Event1 from '../Asset/event1.jpg'
import Event2 from '../Asset/event2.jpg'
import Event3 from '../Asset/event3.jpg'

import Navbar from '../Components/NavbarProfile'
import Card from '../Modal/CardFavorite'
import CardVolunteer from '../Modal/CardFavoriteVolunteer'

const Favorite = () => {
  const navigate = useNavigate()
  
  return (
    <>
      <Navbar />
      
      <div className="md:p-14 p-8">
        <div className="font-bold text-gra2b text-xl flex items-center gap-3 cursor-pointer" onClick={() => navigate(-1)}>
          <img src={Back} />
          <p className="hover:underline">Back</p>
        </div>

        <div>
          <h1 className="text-2xl text-center font-semibold">FAVORITE</h1>

          {/* Event */}
          <div className="px-10 md:px-12">
            <h2 className="text-2xl font-semibold mb-8">Event</h2>
            <div className="px-10 grid grid-cols-1 gap-4 md:grid-cols-4 sm:grid-cols-2">
              <Card img={Event} month="Des" date="23" title="COLDPLAY MUSIC OF THE SPHERES" artist="Coldplay" place="Stadiun Temenggung Abdul Jamal, Batam" price="700 K" onClick="" button="Beli" />
              <Card img={Event1} month="Des" date="23" title="COLDPLAY MUSIC OF THE SPHERES" artist="Coldplay" place="Zoom Meeting" price="100 K" onClick="" button="Beli" />
              
            </div>
          </div>
          <br /> <br /> <br />

          {/* Volunteer */}
          <div className="px-10 md:px-12">
            <h2 className="text-2xl font-semibold mb-8">Volunteer</h2>
            <div className="px-10 grid grid-cols-1 gap-4 md:grid-cols-4 sm:grid-cols-2">
              <CardVolunteer img={Event2} month="Des" date="23" title="COLDPLAY MUSIC OF THE SPHERES" artist="Coldplay" place="Stadiun Temenggung Abdul Jamal, Batam" onClick="" button="Daftar"/>
              <CardVolunteer img={Event3} month="Des" date="23" title="COLDPLAY MUSIC OF THE SPHERES" artist="Coldplay" place="Zoom Meeting" onClick="" button="Daftar" />
              
            </div>
          </div>
          <br /> <br />
          
        </div>
      </div>
    </>
  )
}

export default Favorite