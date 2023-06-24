import "../App.css";

const Alert = (props) => {
  return (
    <div>
      <button
        className="btn bg-violet-700"
        onClick={() => window.my_modal_4.showModal()}
      >
        {props.button}
      </button>
      <dialog id="my_modal_4" className="modal modal-bottom sm:modal-middle">
        <form
          method="dialog"
          className="modal-box w-7/12 max-w-3xl text-center"
        >
          <div className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="indigo"
              class="w-60 h-60"
            >
              <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <h3 className="font-bold text-xl text-primary">
            Pembayaran Berhasil !
          </h3>
          <div className="modal-action">
            <button className="btn">Close</button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default Alert;
