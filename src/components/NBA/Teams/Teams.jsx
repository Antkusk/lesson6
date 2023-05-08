import React, { useEffect, useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';

export default function Teams({ count, setCount }) {

	const [teams, setTeams] = useState([]);

	console.log(count);
	useEffect(() => {

		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': 'e677f1763cmsh1c92bfe3cff794fp18512ajsn662affd1055a',
				'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
			}
		};

		fetch(`https://free-nba.p.rapidapi.com/teams?page=${count}`, options)
			.then(response => response.json())
			.then(response => setTeams(response.data))
			.catch(err => console.log(err));


	}, [count, setCount])


	return (
		<div><h2>Teams</h2>

			<button className='btn btn-secondary'
				onClick={() => {
					if (count >= 2) {
						setCount(0)
					} else {
						setCount(count + 1)
					}

				}}
			>Page + 1</button>

			<ListGroup as="ol" numbered>
				{teams.map((el) => {
					return <ListGroup.Item as="li" key={el.id}>{el.name}</ListGroup.Item>
				})}
			</ListGroup>
		</div>
	)
}

