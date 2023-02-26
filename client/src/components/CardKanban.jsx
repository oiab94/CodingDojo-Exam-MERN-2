import { useState } from "react"
import {Card, Button} from "react-bootstrap";

const CardKanban = (props) => {
	const {title, date, state, status} = props.values;

	return (
		<>
			<Card className="mt-2 ">
				<Card.Body>
					<Card.Title>{ title }</Card.Title>
					<Card.Text>{ date }</Card.Text>
					<Button className={state}>{ status }</Button>
				</Card.Body>
			</Card>
		</>
	);
}

export default CardKanban;