import React from "react"

const Layout = ({ children }) => (

    <div
        style={{
            backgroundColor: `white`,
            marginTop: `50px`,
            width: `100%`,
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
