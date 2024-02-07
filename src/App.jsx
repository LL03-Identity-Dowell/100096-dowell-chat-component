import DowellChat from "./components/Home/DowellChat";
import {useState} from "react";

const styles = {
  customPositioning: {
    position: 'fixed',
    bottom: '1.25rem', // bottom-5
    left: '1.5rem', // left-6
    marginLeft: '0.75rem', // ml-3
    zIndex: '50', // z-50
  },
};

function App() {

  const [message, setMessage] = useState(
    [{sender: "user", message: "Hello, I am a user", time: "12:00"}, 
          {sender: "bot", message: "Hello, I am a bot", time: "12:01"},
          {sender: "user", message: "Hello, I am a user", time: "12:00"},
          {sender: "bot", message: "Hello, I am a bot", time: "12:01"},
          {sender: "user", message: "Hello, I am a user", time: "12:00"},
          {sender: "user", message: "Hello, I am a user", time: "12:00"},
          {sender: "bot", message: "Hello, I am a bot", time: "12:01"},
        ]
  )

  const changeMessage = (msg) => {
    setMessage([...message, msg])
  }

  return (
    <>
      <DowellChat
        position={styles.customPositioning}
        message = {message}
        changeMessage = {changeMessage}
      />
    </>
  );
}

export default App;
