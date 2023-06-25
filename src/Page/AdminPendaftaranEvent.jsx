import "../App.css";
import Input from "../Components/Input";
import Textarea from "../Components/Input_Textarea";
import Button from "../Components/Button";
import ButtonOutline from "../Components/ButtonOutline";
import Navbar from '../Components/NavbarAdmin';

const PendaftaranEvent = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Formulir */}
      <form>
        <div className="grid gap-10 md:grid-cols-3 sm:grid-cols-2 md:px-16 md:pt-16 sm:px-12 sm:pt-12 p-8">
          <div>
            <Input type="text" name="nama">
              Nama Lengkap
            </Input>
            <Input type="text" name="penyelenggara">
              Penyelenggara Event
            </Input>
            <Input type="date" name="tanggal">
              Tanggal Event
            </Input>
            <Input type="text" name="tempat">
              Tempat Event
            </Input>
            <Input type="url" name="map_tempat">
              Link Maps Lokasi Event
            </Input>
            <Textarea name="deskripsi">Deskripsi Event</Textarea>
          </div>
          <div>
            <Input type="number" name="tiket">
              Kuota Tiket
            </Input>
            <Input type="tel" name="telp_penyelenggara">
              Contact Person
            </Input>
            <Input type="url" name="akun_ig">
              Link Akun Instagram Penyelenggara
            </Input>
            <Input type="date" name="periode_awal">
              Periode Pembelian Tiket (Tanggal Dimulai)
            </Input>
            <Input type="date" name="periode_akhir">
              Periode Pembelian Tiket (Tanggal Berakhir)
            </Input>
            <Textarea name="aturan">Aturan Event</Textarea>
          </div>
          <div className="h-screen">
            <Input type="text" name="kategori">
              Jenis Event
            </Input>
            <Input type="file" name="thumbnail">
              TAMBAHKAN GAMBAR
            </Input>
            <br />
            <br />

            <div className="flex justify-end gap-4">
              <ButtonOutline type="reset">Reset</ButtonOutline>
              <Button type="submit">Simpan</Button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default PendaftaranEvent;
