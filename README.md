## Chat App Component

This documentation provides an overview and usage guide for the React Chat App, a simple chat application developed using React. The app includes a chat button on the main page that, when clicked, opens a chat modal powered by the DowellChatBox component.

## Installation

1. You can install DowellChat via npm or yarn:

    ```bash
    npm install dowellchat
    ```
    or
    ```bash
    yarn add dowellchat
    ```
2. Import the DowellChat component and useState hook in your React component:
      ```bash
      import DowellChat from "dowellchat";
      ```

## USAGE

1. Define Custom Styles
Define custom CSS styles for positioning the chat component within your application

      ```js
      const styles = {
        customPositioning: {
          position: 'fixed',
          bottom: '1.25rem',
          left: '1.5rem',
          marginLeft: '0.75rem',
          zIndex: '50',
        },
      }
      ```

2. Create App Component
Create a functional component (e.g., App) to manage the DowellChat component:

      ```js
      function App() {
        const [message, setMessage] = useState(
          [{sender: "user", message: "Hello, I am a user", time: "12:00"}, 
          {sender: "bot", message: "Hello, I am a bot", time: "12:01"},
        ]); // Initialize with initial message state

        const changeMessage = (msg) => {
          setMessage([...message, msg]);
        };

        return (
          <>
            <DowellChat
              position={styles.customPositioning}
              message={message}
              changeMessage={changeMessage}
            />
          </>
        );
      }

      ```


# Example

```js
import { useState } from 'react';
import DowellChat from 'dowellchat';

const styles = {
  customPositioning: {
    position: 'fixed',
    bottom: '1.25rem',
    left: '1.5rem',
    marginLeft: '0.75rem',
    zIndex: '50',
  },
};

function App() {
  const [message, setMessage] = useState([]);

  const changeMessage = (msg) => {
    setMessage([...message, msg]);
  };

  return (
    <>
      <DowellChat
        position={styles.customPositioning}
        message={message}
        changeMessage={changeMessage}
      />
    </>
  );
}

export default App;

```

<!-- 
# DoWellChat Component
## Overview
The DoWellChat component renders a button that toggles a modal containing the DowellChat component.

## Usage ( DowellChat Component Usage )

```
import React from "react";
import DowellChat from "dowellchat";

const App = () => {
  return (
    <div>
      <DowellChat
        position="fixed bottom-5 left-6 ml-3 z-50"
        title="Dowell Customer Support"
        ContainerPosition="fixed bottom-16 left-16 sm:right-16 md:right-24 lg:right-28"
        inputStyle="rounded-lg h-10 appearance-none bg-transparent border text-gray-700 px-1 focus:outline-none"
        buttonStyle="rounded-lg border-4 border-double border-white bg-blue-300 py-1 px-2 h-10"
      />
    </div>
  );
};

export default App;

```

## Props ( DowellChat Component Props )
  - `position`: The position of the DowellChat component within the layout. It accepts a CSS class name or a combination of class names for positioning.
  - `title`: The title displayed in the DowellChatBox component within the modal. 
  - `ContainerPosition`: The positioning style of the DowellChatBox component within the modal. It accepts a CSS positioning style.
  - `inputStyle`: The styling applied to the input field within the DowellChatBox component. It accepts a string representing CSS styles.
  - `buttonStyle`: The styling applied to the button within the DowellChatBox component. It accepts a string representing CSS styles.

# DowellChatBox Component
The DowellChatBox component renders a chat box with an input field and a send button for sending messages.
```
import React from "react";
import {DowellChatBox} from "dowellchat";

const ChatPage = () => {
  return (
    <div>
      <DowellChatBox
        title="Dowell Customer Support"
        ContainerPosition="fixed bottom-16 left-16 sm:right-16 md:right-24 lg:right-28"
        inputStyle="rounded-lg h-10 appearance-none bg-transparent border text-gray-700 px-1 focus:outline-none"
        buttonStyle="rounded-lg border-4 border-double border-white bg-blue-300 py-1 px-2 h-10"
      />
    </div>
  );
};

export default ChatPage;
```

# Props

  - `title`: The title displayed in the DowellChatBox component.
  - `ContainerPosition`: The positioning style of the DowellChatBox component.
  - `inputStyle`: The styling applied to the input field within the DowellChatBox component.
  - `buttonStyle`: The styling applied to the send button within the DowellChatBox component.
 -->
