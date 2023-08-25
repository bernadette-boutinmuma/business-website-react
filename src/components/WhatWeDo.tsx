import { bannerImgStyle, imageMuskStyle, textContentCtnStyle } from "../constants/general"

const WhatWeDo = () => {
  return (
    <div style={{ position: "relative", height: 500, maxWidth: "auto" }}>
      <div
        id="what-we-do"
        style={{
          ...bannerImgStyle,
          backgroundImage:
            "url(https://images.unsplash.com/photo-1574105079770-ad48d14dca10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80)",
        }}
      ></div>
      <div style={{ ...imageMuskStyle, backgroundColor: "#000", opacity: 0.5 }}></div>
      <div style={{ ...textContentCtnStyle, maxWidth: 1280, margin: "0 auto" }}>
        <h2>What We Do</h2>
        <p>
          PChem Regulatory Consulting is a leading provider of pesticide regulatory consulting services based in Canada.
          Our team of experts has extensive experience in navigating the complex regulatory landscape of the pesticide
          industry, ensuring that our clients' products meet all necessary requirements for market approval.
        </p>
        <p>
          At PChem, we are committed to providing our clients with personalized, high-quality consulting services that
          are tailored to their specific needs. We work closely with our clients to understand their unique challenges
          and goals, and develop customized solutions that help them achieve success in the highly competitive pesticide
          market. Whether you are a small startup or a large multinational corporation, PChem has the expertise and
          experience to help you navigate the regulatory landscape and succeed in the pesticide industry.
        </p>
      </div>
    </div>
  )
}

export default WhatWeDo
