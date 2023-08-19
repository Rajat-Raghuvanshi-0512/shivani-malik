import { useEffect, useState } from 'react';
import LandingPage from './Pages/LandingPage';
import texture1 from './assets/texture-1.webp';
import texture2 from './assets/texture-2.webp';
import Modal from 'react-modal';
import cross from './assets/CROSS.webp';
import ellipse from './assets/ellipse.svg';

const customStyles = {
  content: {
    zIndex: 60,
    position: 'absolute',
    padding: 0,
    'border-radius': '26px',
    'border-width': '0px',
    'box-shadow': '4px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    height: window.innerWidth > 768 ? '80%' : '50%',
  },
  overlay: {
    zIndex: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    display: 'flex',
    'flex-direction': 'column',
    'justify-content': 'center',
    'align-items': 'center',
  },
};

function App() {
  const [loading, setLoading] = useState(true);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  if (loading) {
    return (
      <div
        className="w-screen h-screen flex justify-center items-center"
        style={{ backgroundImage: `url(${texture1})` }}
      >
        <div className="w-1/2 h-1/2 flex flex-col space-y-6 justify-center items-center">
          <div role="status">
            <svg
              aria-hidden="true"
              className="w-12 h-12 mr-2 animate-spin text-[#4e301738] fill-[#4E3017]"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>

          <p className="text-5xl md:text-6xl text-[#4E3017] ml-4 font-Rockness">
            Loading...
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="App bg-[#FFFCF8]">
      <LandingPage openModal={openModal} />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div
          class="w-full h-full flex flex-col justify-center items-center bg-[#FFF9F0]"
          style={{ backgroundImage: `url(${texture2})` }}
        >
          <button
            className="absolute top-0 left-0 sm:m-14 m-8"
            onClick={closeModal}
          >
            <img src={cross} alt="cross" className="w-5 h-5" />
          </button>
          <div className="w-full h-1/2 flex flex-col space-y-6 justify-center items-center md:px-0 px-6">
            <div class="flex md:w-1/2 justify-center relative">
              <img
                src={ellipse}
                alt="ellipse"
                className="md:w-1/3 w-4/5 md:-top-24 md:left-24 -left-10 -top-12 justify-self-end absolute"
                style={{ transform: 'rotate(-5.382deg)' }}
              />
              <p className="md:text-6xl text-5xl text-[#4E3017] font-Rockness">
                Thank you
              </p>
            </div>
            <p className="text-base md:w-3/5 text-[#4E3017] font-Questrial text-center pt-4">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
              iaculis justo. Pellentesque habitant morbi tristique senectus et
              netus et malesuada fames ac turpis egestas. “
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default App;
