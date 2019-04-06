import React from "react"
import Layout from "../components/layout"
import Button from "../components/button"
import Image from "../components/image-chandler"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        // padding: `0px 1.0875rem 1.45rem`,
        paddingTop: 0,
      }}
    >
    <SEO title="Abput" keywords={[`about`, `limitless`, `wake`, `lessons`, `austin`, `texas`]} />
    <h1>About Limitless Wake</h1>
    <h5 style={{ marginBottom: `30px`}}>Founded By Chandler Crouch</h5>
     
        <div className="container">
        <div style={{ marginBottom: `1.45rem` }}>
        <Image />
      </div>
        <p>
          Born on Lake Travis in Austin, Texas, Limitless Wake Owner, Chandler, knows the value of time spent out on the lake. Since junior high Chandler was volunteering to coach and teach youths at local wakeboard camps like One Wakeboard camp in Austin, TX.
          In college at Texas A&M University, Chandler helped organize and manage a competitive boat wakeboard team that now has finished among the top teams in the nation for the last several years.
        </p>
          In 2016, he won the individual national championship for the intermediate level class. He operated a local 2.0 wakeboard cable park and taught riders from beginner to advance on how to improve their skills quickly and safely.
        <p>
          Following his graduation, Chandler followed his passion for watersports to the mecca capital: Orlando, Florida. He began coaching wakeboard and wakesurf lessons under the mentorship of Cobe and Tarah Mikacich at Freedom Wake Park.
        </p>
        <p>
          Working with Cobe and Tarah helped Chandler to hone his skills while training elite wakeboarders riding on the Pro Series Tour.
          With Limitless Wake, Chandler will continue to share his passion while coaching wakeboard and wakesurf in the Austin area. From beginner to advanced, Chandler’s ability to tailor his
          instruction to the needs of the individual will ensure that all riders progress and keep having fun. His passion for coaching and attitude towards safety and make Chandler a natural fit for water sports.
        </p></div>
    </div>
    <Button/>
  </Layout>
)

export default IndexPage
