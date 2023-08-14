import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/react-quick-pinch-zoom">reactQuickPinchZoom</Link>
        </li>
        <li>
          <Link to="/react-zoom-pan-pinch">reactZoomPanPinch</Link>
        </li>
      </ul>
    </>
  )
}
