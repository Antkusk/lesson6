import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import useGetData from '../../../CustomHook/UseGetData';

export default function Players() {
	const [players, setPlayers] = useGetData([]);
	console.log(players);

	return (
		<div>Players



			<ListGroup as="ol" numbered>
				{players.map((el) => {
					return <ListGroup.Item as="li" key={el.id}>{el.first_name} {el.last_name} из <b>{el.team.full_name}</b></ListGroup.Item>
				})}
			</ListGroup>

		</div>
	)
}
