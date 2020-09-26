import React, { useState } from 'react';
import Modal from 'react-modal';


function UploadImg() {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Open</button>
      <Modal isOpen={modalIsOpen}>
        <h2>Title</h2>
        <p>Details</p>
        <div>
          <button onClick={() => setModalIsOpen(false)}>Close</button>
        </div>
      </Modal>

      {/* <button onClick={setModalIsOpen(false)}>Open</button> */}

    </div>
  );

}

export default UploadImg;