import { ReactNode } from "react";
import { Nav, Navbar, Container, Col, Row } from "react-bootstrap";
import { Icon } from "@iconify/react";
import github from "@iconify/icons-bytesize/github";
import hakerrank from "@iconify/icons-cib/hackerrank";
import linkedin from "@iconify/icons-cib/linkedin";
// import lighticon from "../content/icons/brightness-high.svg";
// import darkicon from "../content/icons/brightness-high-fill.svg";
import "./Layout.css";

type Props = {
	children?: ReactNode;
};

const Layout = ({ children }: Props) => (
	<div>
		<Navbar bg="dark" expand="lg">
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="nav">
					<Nav.Item>
						<Nav.Link className="header-link" href="/" style={{ color: "#d4d4d4" }}>
							About Me
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link className="header-link" href="/ContactMe" style={{ color: "#d4d4d4" }}>
							Contact Me
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link className="header-link" href="/Projects" style={{ color: "#d4d4d4" }}>
							Projects
						</Nav.Link>
					</Nav.Item>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
		{children}
		<footer className="page-footer">
			<Container>
				<Row className="footer-row">
					<Col md="12">
						<a href="https://www.linkedin.com/in/joseph-hall-9883111a8/">
							<Icon icon={linkedin} color="white" className="ico" />
						</a>
						<a href="https://github.com/JoeHall97">
							<Icon icon={github} color="white" className="ico" />
						</a>
						<a href="https://www.hackerrank.com/Joe_Hall">
							<Icon icon={hakerrank} color="white" className="ico" />
						</a>
					</Col>
				</Row>
			</Container>
		</footer>
	</div>
);

export default Layout;
