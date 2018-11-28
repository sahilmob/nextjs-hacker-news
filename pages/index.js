import fetch from "isomorphic-fetch";
import React, { Component } from "react";
import Error from "next/error";

import Layout from "../components/Layout";
import StoryList from "../components/StoryList";

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
			<Layout
				title="Hacker Next"
				description="A Hacker News clone made with Next.js"
			>
				<StoryList stories={stories} />
			</Layout>
		);
	}
}
