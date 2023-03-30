import {Container, Navbar} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

function Header() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Subinnnnnn
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default Header;