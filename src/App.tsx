import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import { Home } from "./features/home"
import { ReactQuickPinchZoom } from "./features/reactQuickPinchZoom"
import { ReactZoomPanPinch } from "./features/reactZoomPanPinch"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/react-quick-pinch-zoom"
          element={<ReactQuickPinchZoom />}
        />
        <Route
          path="/react-zoom-pan-pinch"
          element={<ReactZoomPanPinch />}
        />
      </Routes>
    </Router>
  )
}

export default App
