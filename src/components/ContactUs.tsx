import { COLORS } from "../constants/general"
import Section from "./general/Section"

const ContactUs = () => {
  return (
    <Section id="contact-us" backgroundColor={COLORS.lightGrey}>
      <div style={{ display: "flex", gap: 48, margin: "16px 0" }}>Contact Us</div>
    </Section>
  )
}

export default ContactUs
