import { Header } from "../header"
import React, { useCallback, useRef } from "react"
import QuickPinchZoom, { make3dTransformValue } from "react-quick-pinch-zoom"
import { ImagePath } from "../../utils/imagePath"

type UpdateProps = {
  x: number
  y: number
  scale: number
}

export const ReactQuickPinchZoom = () => {
  const imgRef = useRef<HTMLImageElement | null>(null)

  const onUpdate = useCallback((props: UpdateProps) => {
    const { x, y, scale } = props
    const { current: img } = imgRef

    if (img) {
      const value = make3dTransformValue({ x, y, scale })

      img.style.setProperty("transform", value)
    }
  }, [])

  return (
    <>
      <Header />
      <QuickPinchZoom onUpdate={onUpdate}>
        <img alt="" ref={imgRef} src={ImagePath} />
      </QuickPinchZoom>
    </>
  )
}
