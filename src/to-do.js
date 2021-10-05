import React from 'react';

class TODO extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: ''
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({ text: e.target.value });
	}

	render() {
		return (
			<div>
				<h1>TODO APP</h1>
				<form>
					<label htmlFor="id">Input Item</label>
					<br />
					<label>{this.state.text}</label>
					<br />
					<input id="id" onChange={this.handleChange} value={this.state.text} />
					<button>Add</button>
				</form>
			</div>
		);
	}
}

export default TODO;
