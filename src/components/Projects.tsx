import { Container, Col, Row } from "react-bootstrap";
import pidphoto from "../content/images/PIDController_Code.png";
import policeloginphoto from "../content/images/PolicePhotoTagging.png";
import mapscreenshot from "../content/images/Map.png";
import emailyscreenshot from "../content/images/EmailyScreenshot.png";

const Projects = () => (
	<div>
		<Container fluid>
			<Row className="content-row-top">
				<Col lg={12} sm={12}>
					<a href="https://github.com/JoeHall97/HonoursProject">
						<h1 className="display-4 text-center" style={{ paddingBottom: "50px" }}>
							Honours Disertation Project
						</h1>
					</a>
				</Col>
				<Col lg={1} />
				<Col lg={3} sm={12}>
					<img className="img-fluid" src={pidphoto} alt="Java code for a PID controller" />
				</Col>
				<Col lg={7} sm={12}>
					<p className="mb-0">
						For my honours disertation I worked on building a benchmarking application that could measure the parallel
						execution of legacy programming langauges. There has been much research showing that legacy languages (such
						as C, Cobol, and Fortran) can be divided into independant processes and then executed concurrently. There
						had, however, been no attempt to find the best way for these programs to be executed in parallel, i.e. what
						is the best way to allocate threads during the run time of these programs. My project, therefore, worked
						towards building a benchmarking application for these legacy applications and how effective a PID controller
						would be compaired to other execution strategies. I built the benchmarking application using Java, and
						analysized the results using python and the Pandas library.
					</p>
				</Col>
				<Col lg={1} />
			</Row>
			<Row className="content-row">
				<Col lg={12} sm={12}>
					<a href="https://github.com/JBAkroyd/PolicePhotoTagging">
						<h1 className="display-4 text-center" style={{ paddingBottom: "50px" }}>
							Police Photo Tagging Website
						</h1>
					</a>
				</Col>
				<Col lg={{ span: 1, order: 12 }} />
				<Col lg={{ span: 3, order: 11 }} sm={12}>
					<img className="img-fluid" src={policeloginphoto} alt="Login screen" />
				</Col>
				<Col lg={{ span: 7, order: 2 }} sm={12}>
					<p className="mb-0">
						During one of my university papers, I worked with a group to build a website for the Waikato Police. The
						website allowed for users to upload photos along side a set of tags. These tags could then be used to search
						for all images that have the same tags as one another. The website was built using React, Node, and a SQL
						database.
					</p>
				</Col>
				<Col lg={{ span: 1, order: 1 }} />
			</Row>
			<Row className="content-row">
				<Col lg={12} sm={12}>
					<a href="https://github.com/JoeHall97/FullStackCourseApp">
						<h1 className="display-4 text-center" style={{ paddingBottom: "50px" }}>
							Email Survey Website
						</h1>
					</a>
				</Col>
				<Col lg={1} />
				<Col lg={3} sm={12}>
					<img className="img-fluid" src={emailyscreenshot} alt="Login screen" />
				</Col>
				<Col lg={7} sm={12}>
					<p className="mb-0">
					As part of an online course I, built a full stack website that utilises, NodeJS, ReactJS and MongoDB. 
					The website allows users to create and send out email surveys, and view the responses to the survey(s). 
					I am currently working on redesigning the front-end, implementing some new features, and converting the code base over to typescript.
					The site is hosted over on <a href='https://emaily-test-project-joehall.herokuapp.com/'>Heroku.</a>
					</p>
				</Col>
				<Col lg={1} />
			</Row>
			<Row className="content-row-bottom">
				<Col lg={12} sm={12}>
					<a href="https://github.com/JoeHall97/PathFinder">
						<h1 className="display-4 text-center" style={{ paddingBottom: "50px" }}>
							Python Path Finder
						</h1>
					</a>
				</Col>
				<Col lg={{ span: 1, order: 12 }} />
				<Col lg={{ span: 3, order: 11 }} sm={12}>
					<img className="img-fluid" src={mapscreenshot} alt="Screenshot of a map file" />
				</Col>
				<Col lg={{ span: 7, order: 2 }} sm={12}>
					<p className="mb-0">
						A python program that I've built to find the shortest path between two points on a map file. The program can
						use depth-first, breadth-first, best-first, and A* algorithms to find this path.
					</p>
				</Col>
				<Col lg={{ span: 1, order: 1 }} />
			</Row>
		</Container>
	</div>
);

export default Projects;
