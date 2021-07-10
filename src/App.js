// import React, { useState } from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Form from "./components/Form";
import Container from "./example/components/Container";
import Button from "./example/components/Button";
import Card from "./example/components/Card";
import theme from "./components/ThemeStyles"

import "./App.css";

function App () {

  return (
    <Router>
      <AppWrapper>
        <Header>
          <Container>
            <h1>Iron Hack Complaints Form</h1>
          </Container>
        </Header>

        <Main className="app">
          <Switch>
            <Route exact path="/"> 
              <Link to="/form">
                <Button btnType="primary" >
                    Start
                </Button> 
              </Link>   
            </Route>

            <Route path="/form">
              <Form /> 
            </Route>

            <Route path="/overview">
              <Container>
                <div className="card-container">
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                </div>
              </Container>
            </Route>
          </Switch>
        </Main>

        <Footer>
          <Container>&copy; WEB DEV 0321 | Iron Hack</Container>
        </Footer>
      </AppWrapper>
    </Router> 
  );
}

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Header = styled.header`
  flex: 1;
  padding: 1.5rem;
`;
const Footer = styled.footer`
  flex: 1;
  background-color: ${theme.footer};
  padding: 1.5rem;
`;
const Main = styled.main`
  flex: 10;
`;

export default App;
