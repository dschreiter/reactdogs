import { useState, useEffect } from 'react';

const Header = (props) => {
	const [dropdownText, setdropdownText] = useState('Loading...'); // default Dropdown text
	const [breedList, setBreedList] = useState(''); // JSON list of dogs

	//Get Dropdown Data from API: List of Dogs
	async function getDropdownData() {
		try {
			const response = await fetch('https://dog.ceo/api/breeds/list/all');
			const data = await response.json();
			const createBreedList = Object.keys(data.message); // convert obj to array
			setdropdownText('Choose A Dog Breed');

			//update Dropdown's state
			setBreedList(
				createBreedList.map((breed) => {
					return <option>{breed}</option>;
				})
			);
		} catch {
			console.log(`An error occurred while fetching`);
		}
	}

	//Load Data Once On First Render
	useEffect(() => {
		getDropdownData();
	}, []);

	function getUserSelection(event) {
		props.getDDSelection(event.target.value); // pass up to parent (App), which passes to images component
	}

	return (
		<div>
			<select onChange={getUserSelection}>
				<option value='default'>{dropdownText}</option>
				{breedList}
			</select>
		</div>
	);
};

export default Header;
