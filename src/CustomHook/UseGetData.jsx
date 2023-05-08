import { useEffect, useState } from "react";
import { useHref } from 'react-router-dom';

function useGetData(defaultValue) {
	const [data, setData] = useState(defaultValue);
	const url = useHref();

	useEffect(() => {

		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': 'e677f1763cmsh1c92bfe3cff794fp18512ajsn662affd1055a',
				'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
			}
		};

		fetch(`https://free-nba.p.rapidapi.com${url}?page=0&per_page=25`, options)
			.then(response => response.json())
			.then(response => setData(response.data))
			.catch(err => console.log(err));



	}, [url])

	return [data, setData];
}

export default useGetData