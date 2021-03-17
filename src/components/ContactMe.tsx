import { Container, Col, Row } from "react-bootstrap";

const ContactMe = () => (
	<div>
		<Container fluid>
			<Row style={{ height: "85vh" }}>
				<Col lg={2} sm={1} />
				<Col lg={8} sm={10}>
					<div className="text-center" style={{ marginTop: "25%", wordWrap: "break-word" }}>
						<p className="h2">I am able to be contacted at the following email address:</p>
						<p className="h2">josephdahall@hotmail.co.nz</p>
						<p className="h2" style={{ paddingTop: "50px" }}>
							I am also available for contact via
							<a href="https://www.linkedin.com/in/joseph-hall-9883111a8/"> Linkedin.</a>
						</p>
					</div>
				</Col>
				<Col lg={2} sm={1} />
			</Row>
		</Container>
	</div>
);

export default ContactMe;
