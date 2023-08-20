import { WalletOutlined, FieldTimeOutlined, CrownOutlined } from "@ant-design/icons"
import { COLORS } from "../constants/general"
import Section from "./general/Section"
import { Card, Tabs } from "antd"

const iconStyle = { fontSize: 48, color: COLORS.primary, marginTop: 24 } as const

const areasTabContent = (
  <div style={{ display: "grid", gap: 32, gridTemplateColumns: "1fr 1fr 1fr" }}>
    <Card
      hoverable
      cover={
        <img
          style={{ height: 240, objectFit: "cover", objectPosition: "center" }}
          alt="Pesticide Registration Assistance"
          src="https://source.unsplash.com/collection/214"
        />
      }
    >
      <Card.Meta
        title="Pesticide Registration Assistance"
        description="Obtain expert assistance for pesticide registration process. Accelerate your product's market entry efficiently."
      />
    </Card>

    <Card
      hoverable
      cover={
        <img
          style={{ height: 240, objectFit: "cover", objectPosition: "center" }}
          alt="Regulatory Compliance Guidance"
          src="https://source.unsplash.com/collection/3333421"
        />
      }
    >
      <Card.Meta
        title="Regulatory Compliance Guidance"
        description="Stay informed about pesticide regulations and ensure compliance with our expert guidance and insightful advice."
      />
    </Card>

    <Card
      hoverable
      cover={
        <img
          style={{ height: 240, objectFit: "cover", objectPosition: "center" }}
          alt="Product Chemistry"
          src="https://source.unsplash.com/collection/381380"
        />
      }
    >
      <Card.Meta title="Product Chemistry" description="Obtain Expert advice on Product Chemistry requirements" />
    </Card>
  </div>
)

const servicesTabContent = (
  <>
    <p style={{ textAlign: "center" }}>PMRA Product application /New pesticide registration</p>

    <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
      <Card>
        <Card.Meta title="Product amendments" />
      </Card>
      <Card>
        <Card.Meta title="Product Chemistry- Five batch data assessment" />
      </Card>
      <Card>
        <Card.Meta title="Statement of Product Specification Form (SPSF) verification" />
      </Card>
      <Card>
        <Card.Meta title="Advice on chemical equivalence criteria" />
      </Card>
      <Card>
        <Card.Meta title="Advice on manufacturing process and impurities of concern" />
      </Card>
      <Card>
        <Card.Meta title="Advice on formulants" />
      </Card>
      <Card>
        <Card.Meta title="Assist with US EPA Pesticide Product Chemistry requirements" />
      </Card>
      <Card>
        <Card.Meta title="Efficacy trial reports-Value Summary" />
      </Card>
      <Card>
        <Card.Meta title="Data Compensation/Data negotiation (PPIP)" />
      </Card>
      <Card>
        <Card.Meta title="MSDS Preparation/Translation into French" />
      </Card>
      <Card>
        <Card.Meta title="Pesticide Label Preparation/Translation" />
      </Card>
      <Card>
        <Card.Meta title="DER (Applicant data evaluation report preparation)" />
      </Card>
    </div>
  </>
)

const benefitsTabContent = (
  <>
    <p style={{ textAlign: "center" }}>Why your business will benefit from our service?</p>

    <div style={{ display: "grid", gap: 32, gridTemplateColumns: "1fr 1fr 1fr" }}>
      <Card cover={<CrownOutlined style={iconStyle} />}>
        <Card.Meta
          style={{ textAlign: "center" }}
          title="Expertise"
          description="PChem collaborates with a team that is knowledgeable of the PMRA process. We treat your applications on a case by case basis ensuring that they meet the essential requirements before submission."
        />
      </Card>

      <Card cover={<FieldTimeOutlined style={iconStyle} />}>
        <Card.Meta
          style={{ textAlign: "center" }}
          title="Value and timely service"
          description="PChem collaborates with a team that is knowledgeable of the PMRA process. We treat your applications on a case by case basis ensuring that they meet the essential requirements before submission."
        />
      </Card>

      <Card cover={<WalletOutlined style={iconStyle} />}>
        <Card.Meta
          style={{ textAlign: "center" }}
          title="Reasonable Cost"
          description="PChem collaborates with a team that is knowledgeable of the PMRA process. We treat your applications on a case by case basis ensuring that they meet the essential requirements before submission."
        />
      </Card>
    </div>
  </>
)

const OurServices = () => {
  return (
    <Section id="our-services" style={{ backgroundColor: COLORS.lightGrey }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 32, margin: "16px 0" }}>
        <div>
          <h2 style={{ marginTop: 0 }}>Our Services</h2>
          <p>
            Approaching a decade since its inception in Ottawa, Canada in 2014, PChem Consulting Inc. has been
            effectively aiding businesses with pesticide registration in Canada. Bernadette Boutin-Muma, with her rich
            experience of over 15 years in handling both conventional and non-conventional pesticide regulation at PMRA,
            steers the helm. Along with a skilled team of collaborators, she delivers a comprehensive suite of pesticide
            regulatory consulting services.
          </p>
        </div>

        <Tabs
          defaultActiveKey="1"
          centered
          items={[
            { label: "Areas", key: "areas", children: areasTabContent },
            { label: "Services", key: "services", children: servicesTabContent },
            { label: "Benefits", key: "benefits", children: benefitsTabContent },
          ]}
        />
      </div>
    </Section>
  )
}

export default OurServices
