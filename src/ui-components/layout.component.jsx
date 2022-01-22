import styled from "styled-components";
import {Outlet} from "react-router-dom";

import NavBar from "../components/header/navbar";
import Footer from "../components/footer/footer";

function Layout() {
    return (
        <Section>
            <NavBar/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </Section>
    );
}

export default Layout;

const Section = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
  align-items: stretch;
  align-content: stretch;
  flex-direction: column;

  header {
    width: 100%;
    height: auto;
    flex-grow: 0;
    display: flex;
  }

  main {
    width: 100%;
    height: auto;
    flex-grow: 2;
    display: flex;
    position: relative;
    justify-content: center;
  }

  footer {
    width: 100%;
    height: auto;
    flex-grow: 0;
  }
`
