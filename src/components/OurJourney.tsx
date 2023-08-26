import Section from "./general/Section"

const OurJourney = () => {
  return (
    <Section id="our-journey">
      <div style={{ margin: "16px 0" }}>
        <img
          src="./bernadette.jpg"
          alt="Bernadette's photo"
          width={200}
          height={200}
          style={{ borderRadius: 8, float: "left", margin: "30px 32px 0 0" }}
        />
        <h2>PChem Consulting Inc.'s Journey: A Decade of Expertise in Pesticide Regulations and Compliance</h2>
        <p>
          Established in Ottawa, Canada in 2014, PChem Consulting Inc. is the brainchild of Bernadette Boutin-Muma, a
          veteran in pesticide regulatory processes both in Canada, through the PMRA, and around the globe. Bernadette
          has a specialized acumen in product chemistry, which forms the core of her work.
        </p>
        <p>
          Over the years, Bernadette has been an indispensable advisor to businesses, guiding them in preparing chemical
          applications for regulatory agencies. Beyond this, her capabilities extend to meeting governmental
          requirements for pesticide product registration, reflecting her in-depth understanding of the chemistry
          evaluation process.
        </p>
        <p>
          Bernadette's strong leadership traits and excellent interpersonal skills, combined with her bilingual
          proficiency in English and French, empower her to provide superior service to her clientele, both within
          Canada and internationally.
        </p>
        <p>
          PChem Regulatory Consulting stands at the forefront of pesticide regulatory consulting services in Canada.
          Backed by our rich expertise and deep industry knowledge, we assist businesses in deciphering the intricate
          web of pesticide regulations, ensuring they adhere to the highest standards of compliance. Our team of
          seasoned professionals is committed to providing exemplary results and personalized solutions, designed to
          address the distinctive needs of each client.
        </p>
        <p>
          From multinational corporations to small enterprises, we extend our comprehensive guidance and strategic
          counsel, aiding them in successfully steering through regulatory processes. At PChem Regulatory Consulting, we
          are steadfast in our mission to enable our clients to excel in a highly regulated field, while ensuring the
          safety and sustainability of their products.
        </p>
      </div>
    </Section>
  )
}

export default OurJourney
