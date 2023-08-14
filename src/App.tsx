import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import { Home } from "./features/home"
import { ReactQuickPinchZoom } from "./features/reactQuickPinchZoom"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/react-quick-pinch-zoom"
          element={<ReactQuickPinchZoom />}
        />
      </Routes>
    </Router>
  )
}

export default App
