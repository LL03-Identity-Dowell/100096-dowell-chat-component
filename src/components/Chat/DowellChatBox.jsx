import React, { useState, useEffect, useRef } from "react";
import { IoIosSend } from "react-icons/io";
import ChatMessage from "./components/ChatMessage";
import styles from "./DowellChatBoxStyle.jsx";

/**
 * Functional component representing the DowellChatBox component.
 * This component renders a chat box with input field and send button for sending messages.
 * @param {string} props.title - The title displayed in the DowellChatBox component.
 * @param {string} props.ContainerPosition - The positioning style of the DowellChatBox component. It accepts a CSS positioning style.
 * @param {string} props.inputStyle - The styling applied to the input field within the DowellChatBox component. It accepts a string representing CSS styles.
 * @param {string} props.buttonStyle - The styling applied to the send button within the DowellChatBox component. It accepts a string representing CSS styles.
 * @returns {JSX.Element} The rendered DowellChatBox component containing a chat interface.
 */

const DowellChatBox = ({
  title,
  message,
  changeMessage,
  ContainerPosition,
  inputStyle,
  buttonStyle,
  className,
}) => {
  const [textMessage, setTextMessage] = useState("");
  const containerRef = useRef(null);

  useEffect(() => {
    // Function to scroll to the bottom of the container
    const scrollToBottom = () => {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    };

    // Scroll to bottom whenever items change
    scrollToBottom();
  }, [message]);

  const sendTextMessage = () => {
    if (textMessage.trim() !== "") {
      const time = new Date().toLocaleTimeString();
      changeMessage({
        sender: "user",
        message: textMessage,
        time: time,
      });
    }
    setTextMessage("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendTextMessage();
    }
  };

  return (
    <div
      className={className}
      style={{ ...styles.dowellContainer, ...ContainerPosition }}
    >
      <h5 style={styles.chatTitle}>Dowell Customer Support</h5>
      <div style={styles.messageContainer} ref={containerRef}>
        {message &&
          message.map((msg, index) => (
            <ChatMessage
              sender={msg.sender}
              message={msg.message}
              time={msg.time}
              key={index}
            />
          ))}
      </div>

      <div style={styles.inputContainer}>
        <input
          type="text"
          value={textMessage}
          onChange={(e) => setTextMessage(e.target.value)}
          style={{ ...styles.inputField, ...inputStyle }}
          onKeyUp={handleKeyPress}
          placeholder="Type a message"
        />
        <button
          style={{ ...styles.sendButton, ...buttonStyle }}
          onClick={sendTextMessage}
        >
          <IoIosSend size={30} />
        </button>
      </div>
    </div>
  );
};

export default DowellChatBox;
