import React from "react"

const Layout = ({ children }) => (

    <div
    style={{
        backgroundColor: `white`,
        width: `100%`,
        marginTop: `800px`
    }}
    >
        <div
        style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
        }}
    >
        <main>{children}</main>

    </div>
    </div>
)

export default Layout
