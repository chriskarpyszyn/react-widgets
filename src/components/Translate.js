import React, { useState } from "react";
import Dropdown from "./Dropdown";

const options = [
	{
		label: "French",
		value: "fr",
	},
	{
		label: "Russian",
		value: "ru",
	},
	{
		label: "Chinese",
		value: "cn",
	},
];

const Translate = () => {
	const [language, setLanguage] = useState(options[0]);

	return (
		<div>
			<Dropdown
				label="Select a Language"
				selected={language}
				onSelectedChange={setLanguage}
				options={options}
			/>
		</div>
	);
};

export default Translate;
