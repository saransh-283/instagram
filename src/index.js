import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import FirebaseContext from "./context/firebase";
import { firebase, FieldValue } from "./lib/firebase";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FirebaseContext.Provider value={(firebase, FieldValue)}>
    <App />
  </FirebaseContext.Provider>
);

// client side rendered app: cra
//   database: firebase
//   external: react - loading - skeleton
//   styling: tailwind

// folder structure:
//   src
//     components,
//     constants,
//     context,
//     helpers,
//     lib(firebase)
//     services
//     styles(tailwind folder): app/tailwind
