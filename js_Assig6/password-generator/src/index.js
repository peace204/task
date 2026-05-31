import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

import PasswordProvider from "./context/PasswordContext"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <PasswordProvider>
    <App />
  </PasswordProvider>
)