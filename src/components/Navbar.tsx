import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navbars = () => {
  return (
    <>
      <Navbar bg="light" variant="light" fixed='top' expand={true} collapseOnSelect={true}>
        <Container>
          <Navbar.Brand href="#home">The Monkey Maffia</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Projects" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="monkeywars">Monkey Wars</NavDropdown.Item>
                  <NavDropdown.Item href="jeffindahood">Jeff in da Hood</NavDropdown.Item>
                  <NavDropdown.Item href="nekkletser">De Nek Kletser</NavDropdown.Item>
              </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
export default Navbars;