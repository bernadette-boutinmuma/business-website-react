import Section from "./general/Section"

const Location = () => {
  return (
    <Section id="location">
      <div style={{ margin: "0 auto" }}>
        <h2 style={{ marginTop: 0 }}>Location</h2>

        <iframe
          title="pchem-consulting-inc-location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d325.5380676534473!2d-75.72019518991537!3d45.40500427995148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05706d8c8bff%3A0xaad794f5d0b9b362!2sPChem%20Consulting%20Inc!5e0!3m2!1sen!2sca!4v1696185726452!5m2!1sen!2sca"
          style={{ width: "100%", height: 400, border: 0, borderRadius: 8 }}
          loading="eager"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </Section>
  )
}

export default Location
