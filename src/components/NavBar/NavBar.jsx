import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavBar() {


	return (

		// <nav className="navbar navbar-expand-lg bg-body-tertiary">
		// 	<div class="collapse navbar-collapse" id="navbarSupportedContent">
		// 		<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
		// 			<li className='nav-item '><Link className="nav-link" to={'/'}>Домой</Link></li>
		// 			<li className='nav-item '><Link className="nav-link" to={'/players'}>Игроки NBA</Link></li>
		// 			<li className='nav-item '><Link className="nav-link" to={'/games'}>Игры NBA</Link></li>
		// 			<li className='nav-item '><Link className="nav-link" to={'/stats'}>Статистика по NBA</Link></li>
		// 			<li className='nav-item '><Link className="nav-link" to={`/teams`}>Статистика по Teams</Link></li>
		// 		</ul>
		// 	</div>
		// </nav>
		<Navbar bg="light" expand="lg">
			<Container>


				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="/">Домой</Nav.Link>
						<Nav.Link href="/players">Игроки NBA</Nav.Link>
						<Nav.Link href="/games">Игры NBA</Nav.Link>
						<Nav.Link href="/stats">Статистика по NBA</Nav.Link>
						<Nav.Link href="/teams">Статистика по Teams</Nav.Link>

					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>

	)
}
