import { Form, Input, Button } from "antd"
import { COLORS, CONTACT_US_FORM } from "../constants/general"
import Section from "./general/Section"

type TContactUsForm = { subject: string; content: string }

const ContactUs = () => {
  const [form] = Form.useForm<TContactUsForm>()

  const onFinish = () => {
    const emailLink = new URL("mailto:linkfang@outlook.com")
    const { subject, content } = form.getFieldsValue()
    console.log({ emailLink })
    emailLink.searchParams.append("subject", subject)
    emailLink.searchParams.append("body", content)
    window.location.assign(emailLink)
  }
  return (
    <Section id="contact-us" backgroundColor={COLORS.lightGrey}>
      <div style={{ display: "flex", gap: 48 }}>
        <div style={{ flex: 1 }}>
          <h2 style={{ marginTop: 0 }}>Contact Us Today</h2>
          <p>
            Fill out the form below to get in touch with our team. We are here to answer any questions you may have and
            provide expert advice for your pesticide regulatory needs.
          </p>
        </div>

        <Form form={form} onFinish={onFinish} layout="vertical" style={{ flex: 1, marginTop: 4 }}>
          <Form.Item label="Subject" name={CONTACT_US_FORM.subject} rules={[{ required: true }]}>
            <Input size="large" />
          </Form.Item>
          <Form.Item label="Content" name={CONTACT_US_FORM.content} rules={[{ required: true }]}>
            <Input.TextArea style={{ height: 100 }} />
          </Form.Item>
          <Button type="primary" htmlType="submit" style={{ boxShadow: "none", marginTop: 24, height: 40 }}>
            Open Email to Send
          </Button>
        </Form>
      </div>
    </Section>
  )
}

export default ContactUs
