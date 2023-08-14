import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"
import { Header } from "../header"
import { ImagePath } from "../../utils/imagePath"

export const ReactZoomPanPinch = () => {
  return (
    <>
      <Header />
      <TransformWrapper
        initialScale={1}
        initialPositionX={200}
        initialPositionY={100}
      >
        <TransformComponent>
          <img alt="" src={ImagePath} />
        </TransformComponent>
      </TransformWrapper>
    </>
  )
}
