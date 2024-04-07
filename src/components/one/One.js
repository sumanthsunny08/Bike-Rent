import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './One.css'

export function One()
{
    return (
        <Navbar expand="lg" className="bg-body-tertiary1">
          <Container fluid>
            <Navbar.Brand href="#" className='yes'>BIKE-RENT</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '200px' }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Bikes</Nav.Link>
                <Nav.Link href="#action3">Destination</Nav.Link>
                <Nav.Link href="#action4">Reviews</Nav.Link>
              </Nav>
              <Form>
                <Button  className='oneb' >Sign up</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}