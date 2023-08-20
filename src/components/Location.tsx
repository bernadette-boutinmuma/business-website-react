import Section from "./general/Section"

const Location = () => {
  return (
    <Section id="location">
      <h2 style={{ marginTop: 0 }}>Location</h2>

      <iframe
        title="location-google-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2801.211495205061!2d-75.7249315438753!3d45.405074563032265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce043867eceb47%3A0x8c01bf3056fbd6ac!2s72%20Bayswater%20Ave%2C%20Ottawa%2C%20ON%20K1Y%202E7!5e0!3m2!1sen!2sca!4v1692543873675!5m2!1sen!2sca"
        style={{ width: "100%", height: 400, border: 0, borderRadius: 8 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </Section>
  )
}

export default Location
