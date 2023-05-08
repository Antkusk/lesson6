import React from 'react'
import useGetData from '../../../CustomHook/UseGetData';
import ListGroup from 'react-bootstrap/ListGroup';
export default function Games() {


	const [games, setGames] = useGetData([]);
	console.log(games);
	return (
		<div>Games

			<ListGroup as="ol" numbered>
				{games.map((el) => {
					return <ListGroup.Item as="li" key={el.id}> {el.home_team.full_name} -:- {el.visitor_team.full_name}</ListGroup.Item>
				})}
			</ListGroup>


		</div>
	)
}
