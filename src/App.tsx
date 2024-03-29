import "./App.css"
import Banner from "./components/Banner"
import ContactUs from "./components/ContactUs"
import Location from "./components/Location"
import OurJourney from "./components/OurJourney"
import OurServices from "./components/OurServices"
import Nav from "./components/nav/Nav"
import { ConfigProvider } from "antd"
import { COLORS } from "./constants/general"
import WhatWeDo from "./components/WhatWeDo"

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: COLORS.primary,
          borderRadius: 8,
        },
      }}
    >
      <Nav />
      <Banner />
      <OurJourney />
      <WhatWeDo />
      <OurServices />
      <Location />
      <ContactUs />
      <footer style={{ margin: "32px 0", textAlign: "center", color: "grey" }}>PChem Regulatory Consulting Inc.</footer>
    </ConfigProvider>
  )
}

export default App
