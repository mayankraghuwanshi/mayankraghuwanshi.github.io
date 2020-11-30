import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import { Location } from "@reach/router"
import "./layout.css"
import Navbar from "../components/navbar/Navbar"



const Wrapper = styled.div`
	background-color: #081736;
	width: 100%;
	background-repeat: no-repeat;
	background-size: cover;
	min-height: 100vh;
	height: auto;
	background-position: bottom;
	padding: 5% 8%;
	position: relative;
	@media (max-width: 700px) {
		min-height: 100vh;
		height: auto;
	}
`;


const Layout = ({ children }) => (
  <>
    <Location>
      {({ location }) => {
        return (
          <Wrapper
            className={
              location.pathname === "/"
                ? "cutBackground"
                : ""
            }
          ><Navbar/>
            {children}
          </Wrapper>
        )
      }}
    </Location>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
