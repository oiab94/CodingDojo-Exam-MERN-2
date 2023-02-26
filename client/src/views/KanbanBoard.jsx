import {
	Container,
	Row,
	Col
} from "react-bootstrap"
import CardKanban from "../components/CardKanban";
import {
	valuesBacklog,
	valuesInProgress,
	valuesCompleted
} from "../test/valuesKanban.test";

const KanbanBoard = () => {
	const backlog = valuesBacklog;
	const inProgress = valuesInProgress;
	const completed = valuesCompleted;

	return (
		<>
		<Container>
			<Row>
				{/* Muestra los componentes en Backlog */}
				<Col className="border border-end-0 border-dark">
					<Row>
						<div className="bg-info text-center">
							<h2>Backlog</h2>
						</div>
					</Row>
					<Row>
						<div className="border-top border-dark pb-2 overflow-scroll"  style={{height:"470px"}}>
							{
								backlog.map((item, index) =>{
									return <CardKanban key={index} values={item} />
								})
							}
						</div>
					</Row>
				</Col>
				
				{/* Muestra los componentes que se encuentran en progreso */}
				<Col className="border border-end-0 border-dark">
					<Row>
						<div className="bg-warning text-center">
							<h2>In Progress</h2>
						</div>
					</Row>
					<Row>
						<div className="border-top border-dark pb-2 overflow-scroll"  style={{height:"470px"}}>
							{
								inProgress.map((item, index) =>{
									return <CardKanban key={index} values={item} />
								})
							}
						</div>
					</Row>
				</Col>
				
				{/* Muestra los componentes completados */}
				<Col className="border border-dark">
				<Row>
						<div className="bg-success text-center">
							<h2>In Progress</h2>
						</div>
					</Row>
					<Row>
						<div className="border-top border-dark pb-2 overflow-scroll" style={{height:"470px"}}>
							{
								completed.map((item, index) =>{
									return <CardKanban key={index} values={item} />
								})
							}
						</div>
					</Row>
				</Col>
			</Row>
		</Container>
		</>
	);
}

export default KanbanBoard;