import "./App.css"
import Banner from "./components/Banner"
import ContactUs from "./components/ContactUs"
import Location from "./components/Location"
import OurJourney from "./components/OurJourney"
import OurMission from "./components/OurMission"
import OurServices from "./components/OurServices"
import WhatWeDo from "./components/WhatWeDo"
import Nav from "./components/nav/Nav"

function App() {
  return (
    <>
      <Nav />
      <Banner />
      <OurJourney />
      <OurMission />
      <WhatWeDo />
      <OurServices />
      <Location />
      <ContactUs />
      <footer style={{ margin: "32px 0", textAlign: "center", color: "grey" }}>PChem Regulatory Consulting Inc.</footer>
    </>
  )
}

export default App
