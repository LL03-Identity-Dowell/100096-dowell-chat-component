import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";

/**
 * Functional component representing the DowellChatBox component.
 * This component renders a chat box with input field and send button for sending messages.
 * @param {string} props.title - The title displayed in the DowellChatBox component.
 * @param {string} props.ContainerPosition - The positioning style of the DowellChatBox component. It accepts a CSS positioning style.
 * @param {string} props.inputStyle - The styling applied to the input field within the DowellChatBox component. It accepts a string representing CSS styles.
 * @param {string} props.buttonStyle - The styling applied to the send button within the DowellChatBox component. It accepts a string representing CSS styles.
 * @returns {JSX.Element} The rendered DowellChatBox component containing a chat interface.
 */

const DowellChatBox = ({ title, ContainerPosition, inputStyle, buttonStyle }) => {
  const [textMessage, setTextMessage] = useState("");
  const [messages, setMessages] = useState([]);
  //   const inputValue = useRef(null);

  const sendTextMessage = () => {
    if (textMessage.trim() !== "") {
      setMessages([...messages, textMessage]);
      setTextMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendTextMessage();
    }
  };

  return (
    <div
      className={`${ContainerPosition} bg-white flex flex-col justify-center items-center md:w-80 p-2 space-y-5 shadow-lg rounded-lg border-2 border-solid`}
    >
      <h5 className=''>{title} </h5>
      <div className='border-solid w-64 rounded-md h-60 overflow-y-auto border-2 border-[#f4f4f4] space-y-2 p-2'>
        {React.Children.toArray(
          messages.map((message) => (
            <div className='bg-[#f4f4f4] p-1.5 rounded-md'>{message}</div>
          ))
        )}
      </div>
      <div className='flex  flex-col md:flex-row gap-2'>
        <input
          type='text'
          value={textMessage}
          onChange={(e) => setTextMessage(e.target.value)}
          className={`${inputStyle}`}
          onKeyUp={handleKeyPress}
        />

        <button className={`${buttonStyle}`} onClick={sendTextMessage}>
          <IoIosSend size={30} />
        </button>
      </div>
    </div>
  );
};
export default DowellChatBox;
