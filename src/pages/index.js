import React from "react"
import Footer from "../components/footer"
import IndexFirstSection from "../components/index/index_first_section"
import IndexSecondSection from "../components/index/index_second_section"
import IndexThirdSection from "../components/index/index_third_section"
import IndexFourthSection from "../components/index/index_fourth_section"
import IndexFifthSection from "../components/index/index_fifth_section"
import IndexSixthSection from "../components/index/index_sixth_section"
import IndexSeventhSection from "../components/index/index_seventh_section"
import ContactForm from "../components/index/contact_form"
import { Helmet } from "react-helmet"

export default () => (
  <div>
    <Helmet>
      <title>Tu partner AWS Advanced en Cloud y BigData - Qualoom</title>
      <meta
        name="description"
        content="Tu Partner Advanced en AWS con servicios DevOps, SysOps, SysAdmin, migración a la nube, Cloud híbrida, recuperación ante desastres, BigData y IoT"
      />
    </Helmet>
    <IndexFirstSection />
    <IndexSecondSection />
    <IndexThirdSection />
    <IndexFourthSection />
    <IndexFifthSection />
    <IndexSixthSection />
    <IndexSeventhSection />
    <ContactForm />
    <Footer />
  </div>
)
