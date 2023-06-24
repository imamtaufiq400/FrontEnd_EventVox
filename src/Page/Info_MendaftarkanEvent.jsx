import "../App.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const InfoMendaftarkan = () => {
  return (
    <>
      <div>
        <Navbar />

        <div className="py-10 px-8">
          <h1 className="font-bold text-xl">
            Mendaftarkan Event dan Volunteer Event
          </h1>
          <br />

          {/* Daftar Isi */}
          <h2 className="font-bold mb-2">Daftar Isi</h2>
          <div className="md:flex">
            <div className="w-full">
              <a href="#event" className="text-blue-500 hover:underline">
                Mendaftarkan Event
              </a>
              <br />
              <a href="#volunteer" className="text-blue-500 hover:underline">
                Mendaftarkan Volunteer Event
              </a>
            </div>
            <br /> <br />
            {/* Isi */}
            <div className="text-justify">
              <p>
                Mendaftarkan event dan volunteer event ini menjelaskan bagaimana
                tata cara, prosedur dan ketentuan-ketentuan dalam mendaftarkan
                event dan volunteer event. Disini kami membantu anda dalam
                penggunaan layanan yang telah kami sediakan sebagai prioritas
                kami. Kami menggunakan ini untuk meningkatkan Layanan Kami.
                <br />
                <br />
                EVENTVOX tersedia (a) melalui Situs Web Goers "www.eventvox.com"
                dan Aplikasi Seluler Eventvox di mana Anda dapat melihat,
                memesan, membeli, bergabung dalam berbagai aktivitas yang sesuai
                dengan minat Anda; (b) melalui "Situs Web Eventvox" tempat Anda
                dapat membeli, mengelola event dan volunteer event, dan menjual
                tiket sebuah event; (a) dan (b) secara bersama-sama disebut
                sebagai "Layanan Kami".
                <br />
                <br />
                Dengan menggunakan Layanan Kami, Anda menerima praktik yang
                dijelaskan dalam Mendaftarkan Event dan Volunteer Event ini.
                Harap baca Mendaftarkan Event dan Volunteer Event ini dengan
                cermat. Kami dapat memperbarui, mengubah, atau memodifikasi
                mendaftarkan event dan volunteer event ini dari waktu ke waktu
                dan, jika Anda memiliki pertanyaan, komentar, atau permintaan
                apa pun terkait dengan mendaftarkan event dan volunnteer event
                ini, hubungi kami dengan menggunakan detail kontak di bawah ini.
                Jika Anda tidak setuju dengan ketentuan Mendaftrakan Event dan
                Volunteer Event, mohon untuk tidak menggunakan Layanan Kami.
              </p>
              <br />

              {/* Event */}
              <h1
                className="font-bold text-2xl text-blue-800 opacity-70 mb-2"
                id="event"
              >
                Daftarkan Event
              </h1>
              <p>
                Kami memiliki tata cara dimana memudahkan Anda untuk memposting,
                mengunggah, menerbitkan, mengirimkan, komentar, pertanyaan,
                gambar, dan konten sebuah event atau informasi. Kami dapat
                memudahkan informasi berikut tentang Anda yang Anda berikan
                kepada kami saat menggunakan Layanan Kami seperti:
              </p>
              <ol className="px-8 mt-2 list-decimal">
                <li>
                  Sebelum anda mendaftarkan sebuah event, anda terlebih dahulu
                  daftar/login di website kami.
                </li>
                <li>
                  Apabila anda sudah memiliki akun, isi data diri anda dengan
                  lengkap.
                </li>
                <li>
                  Selanjutnya unruk mendaftarkan sebuah event, anda harus
                  melakukan transaksi agar dapat mendaftarkan event anda di
                  website/aplikasi kami.
                </li>
                <li>
                  Setelah transaksi anda selesai, anda dapat mendaftar 1 event
                  anda di website/aplikasi kami dengan mengisi form sesuai
                  syarat dan ketentuan yang sudah kami infokan.
                </li>
              </ol>
              <br />

              {/* Volunteer */}
              <h1
                className="font-bold text-2xl text-blue-800 opacity-70 mb-2"
                id="volunteer"
              >
                Daftarkan Volunteer Event
              </h1>
              <p>
                Kami memiliki tata cara dimana memudahkan Anda untuk memposting,
                mengunggah, menerbitkan, mengirimkan, komentar, pertanyaan,
                gambar, dan konten sebuah volunteer event atau informasi. Kami
                dapat memudahkan informasi berikut tentang Anda yang Anda
                berikan kepada kami saat menggunakan Layanan Kami seperti:
              </p>
              <ol className="px-8 mt-2 list-decimal">
                <li>
                  Sebelum anda mendaftarkan sebuah volunteer event, anda
                  terlebih dahulu daftar/login di website kami.
                </li>
                <li>
                  Apabila anda sudah memiliki akun, isi data diri anda dengan
                  lengkap.
                </li>
                <li>
                  Selanjutnya unruk mendaftarkan sebuah volunteer event, anda
                  harus melakukan transaksi agar dapat mendaftarkan volunteer
                  event anda di website/aplikasi kami.
                </li>
                <li>
                  Setelah transaksi anda selesai, anda dapat mendaftar volunteer
                  event anda di website/aplikasi kami dengan mengisi form sesuai
                  syarat dan ketentuan yang sudah kami infokan.
                </li>
              </ol>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default InfoMendaftarkan;
