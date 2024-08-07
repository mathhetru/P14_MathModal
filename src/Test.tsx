import Modal from "./Modal";
import { useState } from "react";

function Test() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const HandleClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <button onClick={HandleClick}></button>
      <Modal
        isOpen={isModalOpen}
        header={true}
        footer={true}
        headerTitle={"C'est un header"}
        buttonFooter={"close the door"}
      />
    </div>
  );
}

export default Test;
