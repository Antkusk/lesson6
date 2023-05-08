import React from 'react'
import useGetData from '../../../CustomHook/UseGetData';
import ListGroup from 'react-bootstrap/ListGroup';
export default function Stats() {

	const [stats, setStats] = useGetData([]);
	console.log(stats);
	return (
		<div>Stats



			<ListGroup as="ol" numbered>
				{stats.map((el) => {
					return <ListGroup.Item as="li" key={el.id}>{el.id}</ListGroup.Item>
				})}
			</ListGroup>

		</div>
	)
}
