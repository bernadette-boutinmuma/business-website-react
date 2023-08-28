import { MenuOutlined } from "@ant-design/icons"
import { COLORS } from "../../constants/general"
import { useState } from "react"

const anchorStyle = {
  borderBottom: `2px ${COLORS.primary}25 solid`,
  padding: "16px 24px",
  textAlign: "center",
} as const

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div
      style={{
        zIndex: 100,
        backgroundColor: "#fff",
        boxShadow: "0 0 16px rgba(0,0,0,0.1)",
        position: "fixed",
        inset: "0 0 0 0",
        bottom: "unset",
        height: 63.5,
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "8px 48px",
          margin: " 0 auto",
        }}
      >
        <a href="#">
          <img src="./logo-s.png" alt="PChem Regulatory Consultant logo" height={42} width={99.5} />
        </a>
        <nav className="navCtn">
          <a href="#our-journey">Our Journey</a>
          <a href="#our-mission">Our Mission</a>
          <a href="#what-we-do">What We Do</a>
          <a href="#our-services">Our Services</a>
          <a href="#location">Location</a>
          <a href="#contact-us">Contact Us</a>
        </nav>

        <div
          style={{
            display: showMenu ? "block" : "none",
            position: "fixed",
            inset: 0,
            backgroundColor: "#000",
            opacity: 0.6,
            cursor: "pointer",
          }}
          onClick={() => setShowMenu(false)}
        ></div>

        <nav
          style={{
            display: showMenu ? "flex" : "none",
            flexDirection: "column",
            position: "fixed",
            inset: 48,
            backgroundColor: "#fff",
            borderRadius: 8,
          }}
          onClick={() => setShowMenu(false)}
        >
          <a style={anchorStyle} href="#our-journey">
            Our Journey
          </a>
          <a style={anchorStyle} href="#our-mission">
            Our Mission
          </a>
          <a style={anchorStyle} href="#what-we-do">
            What We Do
          </a>
          <a style={anchorStyle} href="#our-services">
            Our Services
          </a>
          <a style={anchorStyle} href="#location">
            Location
          </a>
          <a style={anchorStyle} href="#contact-us">
            Contact Us
          </a>
        </nav>

        <div className="hamburgerIcon" onClick={() => setShowMenu((pre) => !pre)}>
          <MenuOutlined style={{ color: COLORS.primary, fontSize: 22, cursor: "pointer" }} />
        </div>
      </div>
    </div>
  )
}

export default Nav
