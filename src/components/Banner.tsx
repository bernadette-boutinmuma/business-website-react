import { bannerImgStyle, imageMuskStyle, textContentCtnStyle } from "../constants/general"

const Banner = () => {
  return (
    <div style={{ position: "relative", height: 500 }}>
      <div
        style={{
          ...bannerImgStyle,
          backgroundImage:
            "url(https://images.unsplash.com/photo-1680458841726-358cd1c28d0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjI5NjF8MHwxfHNlYXJjaHwxN3x8UGVzdGljaWRlJTIwUmVndWxhdG9yeSUyMENvbnN1bHRpbmd8ZW58MHx8fHwxNjkwNTYyODA3fDA&ixlib=rb-4.0.3&q=80&w=1080)",
        }}
      ></div>
      <div style={imageMuskStyle}></div>
      <div style={textContentCtnStyle}>
        <h1 style={{ fontSize: "3rem", lineHeight: 1.2 }}>
          Streamline Your <br /> Pesticide Compliance
        </h1>
        <p style={{ fontSize: "1.5rem", margin: 0 }}>
          Expert consulting to ensure regulatory compliance and <br /> navigate complex pesticide regulations.
        </p>
      </div>
    </div>
  )
}

export default Banner
