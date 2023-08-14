import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"
import { ImagePath } from "../../utils/imagePath"
import { Header } from "../header"

export const ReactZoomPanPinch = () => {
  return (
    <>
      <Header />
      <TransformWrapper
        initialScale={1}
        initialPositionX={200}
        initialPositionY={100}
      >
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <>
            <div className="tools">
              <button onClick={() => zoomIn()}>+</button>
              <button onClick={() => zoomOut()}>-</button>
              <button onClick={() => resetTransform()}>x</button>
            </div>
            <TransformComponent>
              <img src={ImagePath} alt="test" />
              <div>Example text</div>
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    </>
  )
}
