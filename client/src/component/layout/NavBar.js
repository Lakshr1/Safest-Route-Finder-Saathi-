import React from "react";
import {Navbar,Nav, Button} from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import '../../App.css';
export default function NavBar(props) {
	let history = useHistory();
	const logOut = () => {
		axios.get('/api/auth/logout')
		.then(res => {
			props.setUser(null);
			history.push('/')
		});
	}
	
	return (
		<Navbar bg="dark" expand="lg" variant='dark'>
			<Navbar.Brand href="/">Saathi</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="/SearchSafeRoutes">Search Safe routes</Nav.Link>
					<Nav.Link href='/MyLocation'>My Location</Nav.Link>
				</Nav>
				<Nav className="ml-auto">
					{props.user ? <span className="text-white">{props.user.email} <Button variant="danger" className="ml-3" onClick={() => logOut()}>Log Out</Button> </span> : <Link to="/login"><Button variant="danger">Log In</Button></Link>}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}
