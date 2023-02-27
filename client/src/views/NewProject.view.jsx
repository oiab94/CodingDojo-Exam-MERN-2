import { 
	Container, 
	Col, 
	Row,
	Button, 
	Card, 
	Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const NewProject = () => {
	return (
		<>
			<Container>
				{/* Despliega el botón de retorno */}
				<Col>
					<Row className="justify-content-end mb-2" sm={6}>
						<Link to="/">Back to dashboard</Link>
					</Row>
			
				{/* Despliega el formulario de nuevo proyecto */}
					<Row>
						<Card>
							<Card.Header>Plan a new project</Card.Header>
							<Card.Body className="p-5">
								<Form>
									<Form.Group as={Row} controlId="formNewProject" className="mb-5">
										<Form.Label column sm={2}>Project</Form.Label>
										<Col sm={10}>
										<Form.Control type="text" placeholder="Name of project" /> 
										</Col>
									</Form.Group>

									<Form.Group as={Row} controlId="formNewProject" className="mb-5">
										<Form.Label column sm={2}>Due date</Form.Label>
										<Col sm={10}>
										<Form.Control type="date" /> 
										</Col>
									</Form.Group>
									<Row>
										<Button>Plan Project</Button>
									</Row>
								</Form>
							</Card.Body>
						</Card>
					</Row>
				</Col>
			</Container>
		</>
	);
}

export default NewProject;