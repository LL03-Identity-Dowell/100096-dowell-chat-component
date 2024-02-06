## Chat App Component

This documentation provides an overview and usage guide for the React Chat App, a simple chat application developed using React. The app includes a chat button on the main page that, when clicked, opens a chat modal powered by the DowellChatBox component.

## Installation / How to run

1. You can install DowellChat via npm or yarn:

    ```bash
    npm install dowellchat
    ```
    or
    ```bash
    yarn add dowellchat
    ```
2. Install Tailwindcss, use the following link for more reference:
    * https://tailwindcss.com/
    
3. Include the following file in your `tailwind.config.js`
    ```
    './node_modules/dowellchat/**/*.{vue,js,ts,jsx,tsx}',
    ```
    
    - Then the `tailwind.config.js` file might look like:
        ```
        /** @type {import('tailwindcss').Config} */
        module.exports = {
          content: ["./index.html",
          "./src/**/*.{js,ts,jsx,tsx}",
          './node_modules/dowellchat/**/*.{vue,js,ts,jsx,tsx}',
        ],
          theme: {
            extend: {},
          },
          plugins: [],
        }
        ```


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

