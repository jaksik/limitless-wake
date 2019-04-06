import React from "react"
import Layout from "../components/layout"
import Button from "../components/button"
import SEO from "../components/seo"

const IndexPage = () => (
    <Layout>
        <div
            style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `0px 1.0875rem 1.45rem`,
                paddingTop: 0,
            }}
        >
            <SEO title="Abput" keywords={[`about`, `limitless`, `wake`, `lessons`, `austin`, `texas`]} />
            <h1>Gallery Coming Soon</h1>
        </div>
        <Button />
    </Layout>
)

export default IndexPage
