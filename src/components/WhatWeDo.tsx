import Section from "./general/Section"

const WhatWeDo = () => {
  return (
    <Section id="what-we-do">
      <div style={{ display: "flex", gap: 48, margin: "16px 0" }}>
        <div
          className="imgCtn"
          style={{ backgroundImage: "url('https://source.unsplash.com/collection/1802604')", flex: 1, height: 400 }}
        ></div>
        <div style={{ flex: 1 }}>
          <h2>What We Do</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa rem qui ut esse, sint illum, doloribus
            voluptas et molestias molestiae quas corporis saepe fugit quis corrupti quos praesentium porro vel.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione iure eos molestias voluptatibus fugiat quas
            perferendis optio alias nulla cupiditate. Accusantium quos nostrum autem debitis sequi veritatis cumque,
            adipisci esse.
          </p>
        </div>
      </div>
    </Section>
  )
}

export default WhatWeDo
