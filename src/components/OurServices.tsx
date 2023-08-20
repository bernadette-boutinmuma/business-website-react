import { COLORS } from "../constants/general"
import Section from "./general/Section"

const OurServices = () => {
  return (
    <Section id="our-services" backgroundColor={COLORS.lightGrey}>
      <div style={{ display: "flex", flexDirection: "column", gap: 32, margin: "16px 0" }}>
        <h2 style={{ marginTop: 0 }}>Our Services</h2>
        <div
          className="imgCtn"
          style={{
            backgroundImage: "url('https://source.unsplash.com/collection/214')",
            height: 500,
            width: "100%",
          }}
        ></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa rem qui ut esse, sint illum, doloribus voluptas
          et molestias molestiae quas corporis saepe fugit quis corrupti quos praesentium porro vel.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione iure eos molestias voluptatibus fugiat quas
          perferendis optio alias nulla cupiditate. Accusantium quos nostrum autem debitis sequi veritatis cumque,
          adipisci esse.
        </p>
      </div>
    </Section>
  )
}

export default OurServices
