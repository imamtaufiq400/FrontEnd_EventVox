import "../App.css";
import Swal from "sweetalert2";

const Alert = (props) => {
  function handleClick() {
    Swal.fire("Berhasil!", "Data Berhasil Terhapus!", "success");
  }

  return (
    <div>
      <button
        className="btn bg-violet-700"
        onClick={() => window.my_modal_4.showModal()}
      >
        {props.button}
      </button>
      <dialog id="my_modal_4" className="modal modal-bottom sm:modal-middle">
        <form method="dialog" className="modal-box w-8/12 max-w-5xl ">
          <div className="flex flex-row justify-center my-4 mx-20 gap-3">
            <div className="flex flex-col text-left">
              <h3 className="font-bold text-2xl text-primary my-10 gap-1">
                Apa Anda Yakin Untuk Menghapus Ini?
              </h3>
              <p className="text-secondary">
                Jika anda menghapusnya, kamu tidak bisa mengembalikannya
              </p>
              <div className="flex my-4 gap-5 justify-end">
                {/* <AlertHapus button="Ya" /> */}
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="purple"
              class="w-60 h-60"
            >
              <path
                fill-rule="evenodd"
                d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div className="modal-action">
            <button className="border-double border-2 border-black font-semibold w-24 h-12 rounded-xl hover:bg-black/30 hover:border-none">
              Kembali
            </button>
            <button
              onClick={handleClick}
              className="btn w-24 h-12 bg-primary text-white font-semibold hover:bg-neutral-300 hover:border-2 hover:border-black hover:text-black"
            >
              YA
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default Alert;
