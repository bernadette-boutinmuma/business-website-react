import { bannerImgStyle, imageMuskStyle, textContentCtnStyle } from "../constants/general"

const Banner = () => {
  return (
    <div style={{ position: "relative", height: 500 }}>
      <div
        style={{
          ...bannerImgStyle,
          backgroundImage:
            "url(https://images.unsplash.com/photo-1488330890490-c291ecf62571?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=70)",
        }}
      ></div>
      <div style={imageMuskStyle}></div>
      <div style={textContentCtnStyle}>
        <h1 style={{ fontSize: "3rem", lineHeight: 1.2 }}>
          Streamline Your <br /> Pesticide Compliance
        </h1>
        <p style={{ fontSize: "1.5rem", margin: '0 16px' }}>
          Expert consulting to ensure regulatory compliance and <br /> navigate complex pesticide regulations.
        </p>
      </div>
    </div>
  )
}

export default Banner
