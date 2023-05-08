import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import MainPage from "./components/MainPage/MainPage";
import Players from "./components/NBA/Players/Players";
import Games from "./components/NBA/Games/Games";
import Stats from "./components/NBA/Stats/Stats";
import { useState } from "react";
import Teams from "./components/NBA/Teams/Teams";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

	const [count, setCount] = useState(0);


	return (
		<>


			<div className='container'>
				<header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
					<a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">

						<span className="fs-4">Домашнее задание №6</span>

					</a>

				</header>
				<NavBar />

				<div className='row'>
					<div className='col-md-12'>
						<Routes>

							<Route path="/" element={<MainPage />} />
							<Route path="/players" element={<Players />} />
							<Route path="/games" element={<Games />} />
							<Route path="/stats" element={<Stats />} />
							<Route path="/teams" element={<Teams count={count} setCount={setCount} />} />

						</Routes>
					</div>


				</div>

			</div>



		</>
	);
}

export default App;
