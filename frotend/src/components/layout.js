import * as React from "react"
import Header from "./Header"
import { GlobalStyle } from "./styles/GlobalStyles"
import Footer from "./Footer"
import { Container } from "react-bootstrap"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
    
            <Header />
            <main>{children}</main>
      </>
  )
}



export default Layout
