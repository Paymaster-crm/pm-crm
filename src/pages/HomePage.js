// import React, { useState, useEffect, useContext } from "react";
// import Box from "@mui/material/Box";
// import CssBaseline from "@mui/material/CssBaseline";
// import Toolbar from "@mui/material/Toolbar";
// import { Route, Routes } from "react-router-dom";
// import { TabValueContext } from "../contexts/TabValueContext.js";
// import AppbarComponent from "../components/home/AppbarComponent.js";
// import DrawerComponent from "../components/home/DrawerComponent.js";
// import ProtectedRoute from "../routes/ProtectedRoute.js";
// import UnAuthorisedRoute from "../routes/UnAuthorisedRoute.js";
// import routesConfig from "../routes/routesConfig.js";
// import EventStrip from "../components/home/EventStrip.js";
// import axios from "axios";
// import { UserContext } from "../contexts/UserContext";
// import { ChatBotWidget } from "chatbot-widget-ui";
// import ChatIcon from "@mui/icons-material/Chat";

// const drawerWidth = 60;

// function HomePage(props) {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [tabValue, setTabValue] = useState(0);
//   const [events, setEvents] = useState([]);
//   const [messages, setMessages] = useState([
//     { type: "bot", text: "Hello, how can I assist you today!" },
//   ]);

//   // Access user data from the context
//   const { user } = useContext(UserContext);

//   useEffect(() => {
//     async function getEvents() {
//       try {
//         const res = await axios.get(
//           `${process.env.REACT_APP_API_STRING}/get-events`,
//           { withCredentials: true }
//         );
//         setEvents(res.data);
//       } catch (err) {
//         console.error(err);
//       }
//     }

//     getEvents();
//   }, []);

//   // Pass user to routesConfig to get filtered routes
//   const filteredRoutes = routesConfig(user);

//   // Custom API call to handle messages using axios
//   const handleChatbot = async (message) => {
//     try {
//       const response = await axios.post(
//         `${process.env.REACT_APP_API_STRING}/chatbot`,
//         {
//           message,
//         },
//         { withCredentials: true }
//       );

//       // Assuming API returns { content: "response text" }
//       return response.data.answer;
//     } catch (error) {
//       console.error("Error in API call:", error);
//       return "Oops! Something went wrong. Try again."; // Fallback error message
//     }
//   };

//   return (
//     <TabValueContext.Provider value={{ tabValue, setTabValue }}>
//       <Box sx={{ display: "flex" }}>
//         <CssBaseline />
//         <AppbarComponent
//           mobileOpen={mobileOpen}
//           setMobileOpen={setMobileOpen}
//           showSidebar={props.showSidebar}
//           setShowSidebar={props.setShowSidebar}
//         />

//         {props.showSidebar && (
//           <DrawerComponent
//             mobileOpen={mobileOpen}
//             setMobileOpen={setMobileOpen}
//           />
//         )}

//         {/* Content */}
//         <Box
//           component="main"
//           sx={{
//             flexGrow: 1,
//             width: {
//               lg: `calc(100% - ${drawerWidth}px)`,
//             },
//             backgroundColor: "#F9FAFB",
//             height: "100vh",
//             overflow: "scroll",
//             padding: events.length === 0 ? "20px" : "50px 20px",
//             paddingTop: 0,
//           }}
//         >
//           <Toolbar />
//           <Routes>
//             {filteredRoutes.map(({ path, element, allowedModules }, index) => (
//               <Route
//                 key={index}
//                 path={path}
//                 element={
//                   allowedModules.length === 0 ? (
//                     element
//                   ) : (
//                     <ProtectedRoute allowedModules={allowedModules}>
//                       {element}
//                     </ProtectedRoute>
//                   )
//                 }
//               />
//             ))}
//             <Route path="/not-authorized" element={<UnAuthorisedRoute />} />
//             <Route path="*" element={<UnAuthorisedRoute />} />
//           </Routes>

//           {events.length > 0 && <EventStrip events={events} />}
//         </Box>
//       </Box>

//       <ChatBotWidget
//         callApi={handleChatbot}
//         primaryColor="#0B61AE"
//         inputMsgPlaceholder="Type your message..."
//         chatbotName="Chatbot"
//         isTypingMessage="Typing..."
//         IncommingErrMsg="Oops! Something went wrong. Try again."
//         handleNewMessage={setMessages}
//         chatIcon={<ChatIcon />}
//         messages={messages}
//       />
//     </TabValueContext.Provider>
//   );
// }

// export default React.memo(HomePage);

import React, { useState, useEffect, useContext } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import { Route, Routes } from "react-router-dom";
import { TabValueContext } from "../contexts/TabValueContext.js";
import AppbarComponent from "../components/home/AppbarComponent.js";
import DrawerComponent from "../components/home/DrawerComponent.js";
import ProtectedRoute from "../routes/ProtectedRoute.js";
import UnAuthorisedRoute from "../routes/UnAuthorisedRoute.js";
import routesConfig from "../routes/routesConfig.js";
import EventStrip from "../components/home/EventStrip.js";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";
import { ChatBotWidget } from "chatbot-widget-ui";
import ChatIcon from "@mui/icons-material/Chat";

const drawerWidth = 60;

function HomePage(props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  const [events, setEvents] = useState([]);
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hello, how can I assist you today!" },
  ]);

  // Access user data from the context
  const { user } = useContext(UserContext);

  useEffect(() => {
    async function getEvents() {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_STRING}/get-events`,
          { withCredentials: true }
        );
        setEvents(res.data);
      } catch (err) {
        console.error(err);
      }
    }

    getEvents();
  }, []);

  // Keyboard shortcut to toggle chatbox
  useEffect(() => {
    const handleKeydown = (event) => {
      const chatbotToggler = document.querySelector(".chatbot-toggler");

      // Check if the chatbot is open by inspecting the body class
      const isChatbotOpen = document.body.classList.contains("show-chatbot");

      // Open chatbot with Ctrl+Shift+A or Cmd+Shift+A
      if (
        (event.ctrlKey || event.metaKey) &&
        event.shiftKey &&
        event.key.toLowerCase() === "a"
      ) {
        event.preventDefault();
        if (chatbotToggler) {
          chatbotToggler.click(); // Simulate click on the button
        }
      }

      // Close chatbot on Escape if it's open
      if (event.key === "Escape" && isChatbotOpen) {
        event.preventDefault();
        if (chatbotToggler) {
          chatbotToggler.click(); // Simulate click again to close
        }
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  // Pass user to routesConfig to get filtered routes
  const filteredRoutes = routesConfig(user);

  // Custom API call to handle messages using axios
  const handleChatbot = async (message) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_STRING}/chatbot`,
        {
          message,
        },
        { withCredentials: true }
      );

      // Assuming API returns { content: "response text" }
      return response.data.answer;
    } catch (error) {
      console.error("Error in API call:", error);
      return "Oops! Something went wrong. Try again."; // Fallback error message
    }
  };

  return (
    <TabValueContext.Provider value={{ tabValue, setTabValue }}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppbarComponent
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
          showSidebar={props.showSidebar}
          setShowSidebar={props.setShowSidebar}
        />

        {props.showSidebar && (
          <DrawerComponent
            mobileOpen={mobileOpen}
            setMobileOpen={setMobileOpen}
          />
        )}

        {/* Content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            width: {
              lg: `calc(100% - ${drawerWidth}px)`,
            },
            backgroundColor: "#F9FAFB",
            height: "100vh",
            overflow: "scroll",
            padding: events.length === 0 ? "20px" : "50px 20px",
            paddingTop: 0,
          }}
        >
          <Toolbar />
          <Routes>
            {filteredRoutes.map(({ path, element, allowedModules }, index) => (
              <Route
                key={index}
                path={path}
                element={
                  allowedModules.length === 0 ? (
                    element
                  ) : (
                    <ProtectedRoute allowedModules={allowedModules}>
                      {element}
                    </ProtectedRoute>
                  )
                }
              />
            ))}
            <Route path="/not-authorized" element={<UnAuthorisedRoute />} />
            <Route path="*" element={<UnAuthorisedRoute />} />
          </Routes>

          {events.length > 0 && <EventStrip events={events} />}
        </Box>
      </Box>

      {/* Chatbot Widget */}
      <ChatBotWidget
        callApi={handleChatbot}
        primaryColor="#0B61AE"
        inputMsgPlaceholder="Type your message..."
        chatbotName="Chatbot"
        isTypingMessage="Typing..."
        IncommingErrMsg="Oops! Something went wrong. Try again."
        handleNewMessage={setMessages}
        chatIcon={<ChatIcon />}
        messages={messages}
      />
      <button className="chatbot-toggler" style={{ display: "none" }}>
        Toggle Chatbot
      </button>
    </TabValueContext.Provider>
  );
}

export default React.memo(HomePage);
