import React from "react"
import Layout from "../components/layout"
import Button from "../components/button"
import Gallery from "../components/gallery"
import SEO from "../components/seo"

const GalleryPage = ({ data }) => {
    const { edges: projectImgData } = data.ProjectImgs;
    return (
        <Layout>
            <div
                style={{
                    margin: `0 auto`,
                    maxWidth: 960,
                    padding: `0px 1.0875rem 1.45rem`,
                    paddingTop: 0,
                }}
            >
                <SEO title="Gallery" keywords={[`about`, `limitless`, `wake`, `lessons`, `austin`, `texas`]} />
                <h1>Gallery</h1>
                <Gallery galleryImgs={projectImgData}/>
            </div>
            <Button />
        </Layout>
    )
}

export default GalleryPage

export const query = graphql`
  query allImgsQuery {
    site {
      siteMetadata {
        title
        description
      }
    }

    ProjectImgs: allFile(
      sort: { order: ASC, fields: [absolutePath] }
      filter: { relativePath: { regex: "/gallery/.*.png/" } }
    ) {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            sizes(maxWidth: 320) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;
