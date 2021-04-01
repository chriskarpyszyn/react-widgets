import React, { useState, useEffect } from "react";

const Search = () => {
	const [term, setTerm] = useState("");

	useEffect(() => {
		//make request to wikipedia api
	}, [term]);

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
		</div>
	);
};

export default Search;
