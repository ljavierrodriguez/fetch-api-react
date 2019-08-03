import React, { useState } from "react";
import PropTypes from "prop-types";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

const Button = props => {
	const [count, setCount] = useState(0);
	const [name, setName] = useState("anonimous");
	return (
		<button onClick={() => setCount(count + 1)}>
			{props.texto} {count} veces
		</button>
	);
};

Button.propTypes = {
	texto: PropTypes.string
};

//create your first component
export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			users: []
		};
	}
	componentDidMount() {
		this.getUsers();
	}

	getUsers() {
		fetch("https://jsonplaceholder.typicode.com/users/", {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => resp.json())
			.then(data => {
				console.log(data);
				this.setState({
					users: data
				});
			});
	}

	render() {
		return (
			<div className="text-center mt-5">
				<h1>Hello Rigo!</h1>
				<p>
					<img src={rigoImage} />
				</p>
				<a href="#" className="btn btn-success">
					If you see this green button... bootstrap is working
				</a>
				<p>
					Made by{" "}
					<a href="http://www.4geeksacademy.com">4Geeks Academy</a>,
					with love!
				</p>
				<p>
					<Button texto={"Has hecho click"} />
				</p>
				<ul>
					{this.state.users.map(user => {
						return <li key={user.id}>{user.name}</li>;
					})}
				</ul>
			</div>
		);
	}
}
