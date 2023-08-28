import { COLORS } from "../constants/general"
import Section from "./general/Section"

const OurMission = () => {
  return (
    <Section id="our-mission" style={{ backgroundColor: COLORS.lightGrey }}>
      <div style={{ display: "flex", gap: 48, margin: "16px 0", flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: 320 }}>
          <h2>Our Mission</h2>
          <p>
            PChem Regulatory Consulting is a leading consulting firm specializing in pesticide regulatory affairs. Our
            team of experienced professionals is dedicated to providing exceptional service to our clients. We are based
            in Ottawa, ON, Canada, but our expertise is recognized worldwide.
          </p>
          <p>
            Our mission is to help our clients navigate the complex and ever-changing regulatory landscape. We provide
            tailored solutions to meet their specific needs and ensure compliance with all applicable regulations. Our
            commitment to excellence and attention to detail set us apart, and we are proud to have earned the trust and
            loyalty of our clients over the years.
          </p>
        </div>
        <div
          className="imgCtn"
          style={{ backgroundImage: "url('./images/our-mission.jpg')", flex: 1, minWidth: 320, height: 400 }}
        ></div>
      </div>
    </Section>
  )
}

export default OurMission
