import { useState } from 'react';
import { Button, Modal } from 'flowbite-react';


import './App.css';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSelected, setIsSelected] = useState(false);  

  const openModal = () => setIsVisible(true);
  const onClickOpenAside = () => setIsSelected(!isSelected);
  const closeModal = () => setIsVisible(false);

  return (
    <div>
      <main className='bg-red-200 h-[100vh]'>
        main
        <Button onClick={onClickOpenAside}>open aside</Button>
      </main>
      <aside  className={`bg-red-300 fixed top-0 bottom-0 right-[68px] w-[480px] h-full ${
        isSelected ? 'translate-y-0' : 'translate-y-full'
      } transition-transform`}>
        <Button onClick={openModal}>Toggle modal</Button>
          <Modal show={isVisible} onClose={closeModal}>
            <Modal.Header>Terms of Service</Modal.Header>
            <Modal.Body className='space-y-6'>
              <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
                With less than a month to go before the European Union enacts new
                consumer privacy laws for its citizens, companies around the world
                are updating their terms of service agreements to comply.
              </p>
              <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
                The European Union’s General Data Protection Regulation (G.D.P.R.)
                goes into effect on May 25 and is meant to ensure a common set of
                data rights in the European Union. It requires organizations to
                notify users as soon as possible of high-risk data breaches that
                could personally affect them.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={closeModal}>I accept</Button>
              <Button color='alternative' onClick={closeModal}>
                Decline
              </Button>
            </Modal.Footer>
          </Modal>
      </aside>
    </div>
  );
}

export default App;
