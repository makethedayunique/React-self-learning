import React from 'react';

class Post extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
	return (

		<div style={{backgroundColor:'lightblue',margin:10,padding:10, textAlign:'center', borderRadius:15}}>
			<h1>
				{this.props.title}
			</h1>

			<p>
				{this.props.body}
			</p>

		</div>
	)}
};

export {Post};