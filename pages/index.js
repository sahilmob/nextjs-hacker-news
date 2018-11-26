import fetch from "isomorphic-fetch";
import React, { Component } from "react";
import Error from "next/error";

export default class Index extends Component {
	static async getInitialProps() {
		let stories;
		try {
			const response = await fetch(
				"https://node-hnapi.herokuapp.com/news?pae=1"
			);
			stories = await response.json();
		} catch (err) {
			console.log(err);
			stories = [];
		}
		return { stories };
	}
	render() {
		const { stories } = this.props;
		if (stories.length === 0) {
			return <Error statusCode={503} />;
		}
		return (
			<div>
				<h1>hacker next</h1>
				<div>
					{stories.map(story => (
						<h2 key={story.id}>{story.title}</h2>
					))}
				</div>
			</div>
		);
	}
}
