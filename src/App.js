import { useState } from 'react';
import Container from './Components/Container';
import Header from './Components/Header';
import Dropdown from './Components/Dropdown';
import Images from './Components/Images';
import MyModal from './Components/MyModal';

const App = () => {
	const [userSelectedValue, setUserSelectedValue] = useState('');
	const [imageUrl, setImageUrl] = useState('aaaa');

	function userSelected(breed) {
		setUserSelectedValue(breed);
	}

	function passImageUrl(url) {
		//alert('411: ' + url);
		setImageUrl(url);
	}

	return (
		<Container>
			<Header />
			<Dropdown getDDSelection={userSelected} />
			<Images setDDSelection={userSelectedValue} passUrl={passImageUrl} />
			<MyModal setUrl={imageUrl} />
			<h1>{imageUrl}</h1>
		</Container>
	);
};
export default App;
