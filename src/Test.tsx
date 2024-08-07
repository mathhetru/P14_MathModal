import Modal from "./Modal";
import { useState } from "react";

function Test() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const HandleClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={HandleClick}>BOUTOOOON</button>
      <Modal isOpen={isModalOpen} onClose={handleClose} hasHeader={false} hasFooter={true}/>
    </div>
  );
}

export default Test;
