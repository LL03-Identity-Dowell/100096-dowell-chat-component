import { useState } from "react";
import DowellChatBox from "../Chat/DowellChatBox";

/**
 * Functional component representing the DowellChat component.
 * This component renders a button that toggles a modal containing a DowellChatBox component.
 * @param {string} props.position - The position of the DowellChat component within the layout. It accepts a CSS class name or a combination of class names for positioning.
 * @param {string} props.title - The title displayed in the DowellChatBox component within the modal.
 * @param {string} props.ContainerPosition - The positioning style of the DowellChatBox component within the modal. It accepts a CSS positioning style.
 * @param {string} props.inputStyle - The styling applied to the input field within the DowellChatBox component. It accepts a string representing CSS styles.
 * @param {string} props.buttonStyle - The styling applied to the button within the DowellChatBox component. It accepts a string representing CSS styles.
 * @returns {JSX.Element} The rendered DowellChat component containing a button to toggle the modal.
 */

const DowellChat = ({ position, title, ContainerPosition, inputStyle, buttonStyle }) => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <div className={`${position}`}>
      <button
        className={`${modal ? "bg-red-300" : "bg-blue-300"} p-3 rounded-full`}
        onClick={toggleModal}
      >
        chat
      </button>
      {modal && (
          <DowellChatBox
          title={title ?? 'Dowell Customer Support'}
          ContainerPosition={ContainerPosition ?? "fixed bottom-16 left-16 sm:right-16 md:right-24 lg:right-28"}
          inputStyle={ inputStyle ??
            "rounded-lg h-10 appearance-none bg-transparent border text-gray-700 px-1 focus:outline-none"
          }
          buttonStyle={ buttonStyle ??
            "rounded-lg border-4 border-double border-white bg-blue-300 py-1 px-2 h-10"
          }
        />
      )}
    </div>
  );
};
export default DowellChat;
