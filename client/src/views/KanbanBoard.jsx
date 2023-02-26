import {
	Container,
	Row,
	Col
} from "react-bootstrap"

const KanbanBoard = () => {
	return (
		<>
		<Container>
			<Row>
				<Col className="border border-end-0 border-dark">
					<Row>
						<div className="bg-info text-center">
							<h2>Backlog</h2>
						</div>
					</Row>
					<Row>
						<div className="border-top border-dark">
							Hola
						</div>
					</Row>
				</Col>
				
				<Col className="border border-end-0 border-dark">
					<Row>
						<div className="bg-warning text-center">
							<h2>In Progress</h2>
						</div>
					</Row>
					<Row>
						<div className="border-top border-dark">
							Hola
						</div>
					</Row>
				</Col>
				
				<Col className="border border-dark">
				<Row>
						<div className="bg-success text-center">
							<h2>In Progress</h2>
						</div>
					</Row>
					<Row>
						<div className="border-top border-dark">
							Hola
						</div>
					</Row>
				</Col>
			</Row>
		</Container>
		</>
	);
}

export default KanbanBoard;