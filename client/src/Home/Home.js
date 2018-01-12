import React, { Component } from 'react';
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment
} from 'semantic-ui-react';

class Home extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="container">
        {isAuthenticated() && (
          <div>
            <Menu fixed="top" inverted>
              <Container>
                <Menu.Item as="a" header>
                  <Image
                    size="mini"
                    src="/ops1logo.png"
                    style={{ marginRight: '1.5em' }}
                  />
                  OPS1 New Hope Fire Department
                </Menu.Item>
                <Menu.Item as="a">Home</Menu.Item>

                <Dropdown item simple text="Dropdown">
                  <Dropdown.Menu>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Header>Header Item</Dropdown.Header>
                    <Dropdown.Item>
                      <i className="dropdown icon" />
                      <span className="text">Submenu</span>
                      <Dropdown.Menu>
                        <Dropdown.Item>List Item</Dropdown.Item>
                        <Dropdown.Item>List Item</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Container>
            </Menu>
            <Container text style={{ marginTop: '7em' }}>
              <Header as="h1">Semantic UI React Fixed Template</Header>
              <p>
                This is a basic fixed menu template using fixed size containers.
              </p>
              <p>
                A text container is used for the main container, which is useful
                for single column layouts.
              </p>
            </Container>

            <Segment
              inverted
              vertical
              style={{ margin: '5em 0em 0em', padding: '5em 0em' }}
            >
              <Container textAlign="center">
                <Grid divided inverted stackable>
                  <Grid.Row>
                    <Grid.Column width={3}>
                      <Header inverted as="h4" content="Group 1" />
                      <List link inverted>
                        <List.Item as="a">Link One</List.Item>
                        <List.Item as="a">Link Two</List.Item>
                        <List.Item as="a">Link Three</List.Item>
                        <List.Item as="a">Link Four</List.Item>
                      </List>
                    </Grid.Column>
                    <Grid.Column width={3}>
                      <Header inverted as="h4" content="Group 2" />
                      <List link inverted>
                        <List.Item as="a">Link One</List.Item>
                        <List.Item as="a">Link Two</List.Item>
                        <List.Item as="a">Link Three</List.Item>
                        <List.Item as="a">Link Four</List.Item>
                      </List>
                    </Grid.Column>
                    <Grid.Column width={3}>
                      <Header inverted as="h4" content="Group 3" />
                      <List link inverted>
                        <List.Item as="a">Link One</List.Item>
                        <List.Item as="a">Link Two</List.Item>
                        <List.Item as="a">Link Three</List.Item>
                        <List.Item as="a">Link Four</List.Item>
                      </List>
                    </Grid.Column>
                    <Grid.Column width={3}>
                      <Header inverted as="h4" content="Footer Header" />
                      <h4>You are logged in!</h4>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>

                <Divider inverted section />
                <Image centered size="mini" src="/ops1logo.png" />
                <List horizontal inverted divided link>
                  <List.Item as="a" href="#">
                    Site Map
                  </List.Item>
                  <List.Item as="a" href="#">
                    Contact Us
                  </List.Item>
                  <List.Item as="a" href="#">
                    Terms and Conditions
                  </List.Item>
                  <List.Item as="a" href="#">
                    Privacy Policy
                  </List.Item>
                </List>
              </Container>
            </Segment>
          </div>
        )}
        {!isAuthenticated() && (
          <h4>
            You are not logged in! Please{' '}
            <a style={{ cursor: 'pointer' }} onClick={this.login.bind(this)}>
              Log In
            </a>{' '}
            to continue.
          </h4>
        )}
      </div>
    );
  }
}

export default Home;
