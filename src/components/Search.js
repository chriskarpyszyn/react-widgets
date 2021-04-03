import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
	const [term, setTerm] = useState("");
	const [results, setResults] = useState([]);

	useEffect(() => {
		//make request to wikipedia api
		let baseUrl = "https://en.wikipedia.org/w/api.php";
		const search = async () => {
			const { data } = await axios.get(baseUrl, {
				params: {
					action: "query",
					list: "search",
					origin: "*",
					format: "json",
					srsearch: term,
				},
			});
			setResults(data.query.search);
		};
		if (term) {
			search();
		}
	}, [term]);

	const renderedResults = results.map((result) => {
		const regex = /(<([^>]+)>)|(&quot;)/gi;
		const cleanSnippet = result.snippet.replace(regex, "");
		return (
			<div key={result.pageid} className="item">
				<div className="right floated content">
					<a
						className="ui button"
						href={`https://en.wikipedia.org?curid=${result.pageid}`}
					>
						Nav to Page
					</a>
				</div>
				<div className="content">
					<div className="header">{result.title}</div>
					{cleanSnippet}
				</div>
			</div>
		);
	});

	return (
		<div>
			<div className="ui form">
				<div className="field">
					<label>Enter Search Term</label>
					<input
						value={term}
						onChange={(e) => setTerm(e.target.value)}
						className="input"
					/>
				</div>
			</div>
			<div className="ui celled list">{renderedResults}</div>
		</div>
	);
};

export default Search;
