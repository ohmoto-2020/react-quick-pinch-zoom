import { Header } from "../header"
import React, { useCallback, useRef } from "react"
import QuickPinchZoom, { make3dTransformValue } from "react-quick-pinch-zoom"

const IMG_URL =
  "https://user-images.githubusercontent.com/4661784/" +
  "56037265-88219f00-5d37-11e9-95ef-9cb24be0190e.png"

type UpdateProps = {
  x: number
  y: number
  scale: number
}

export const ReactQuickPinchZoom = () => {
  const imgRef = useRef<HTMLImageElement | null>(null)

  const onUpdate = useCallback((props: UpdateProps) => {
    const { x, y, scale } = props
    console.log(x)
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
        <img alt="" ref={imgRef} src={IMG_URL} />
      </QuickPinchZoom>
    </>
  )
}
