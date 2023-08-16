import { useEffect, useState } from 'react';
import LandingPage from './Pages/LandingPage';
import texture1 from './assets/texture-1.webp';
import texture2 from './assets/texture-2.webp';
import ReactLoading from 'react-loading';
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
          <ReactLoading type="spin" color="#4E3017" height={50} width={50} />
          <p className="text-4xl text-[#4E3017] ml-4 font-Rockness">
            Loading...
          </p>
        </div>
      </div>
    );
  } else {
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
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                sed iaculis justo. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas. “
              </p>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default App;
