import { useState, useEffect } from 'react';
import './image.css';

const Images = (props) => {
	const userSelection = props.setDDSelection;
	const [dogImage, setDogImage] = useState([]);

	async function getDogImages() {
		if (userSelection === '' || userSelection === 'default') {
			return false;
		}

		//call API, passing in userSelection
		const response = await fetch(
			`https://dog.ceo/api/breed/${userSelection}/images`
		);

		// returned array of Images
		const data = await response.json();
		setDogImage(data.message);
		console.log(userSelection);
	}

	const openModal = (event) => {
		props.passUrl(event.target.src);
	};

	useEffect(() => {
		getDogImages();
	}, [props.setDDSelection]); // call once, when user select new breed

	return (
		<div>
			<div className='slideshow'>
				{dogImage.map(function (dog) {
					return (
						<img className='image' src={dog} onClick={openModal} />
					);
				})}
			</div>
		</div>
	);
};

export default Images;

// function createSlideshow(images) {
// 	let currentPosition = 0;
// 	clearInterval(timer);
// 	clearTimeout(deleteFirstPhotoDelay);

// 	if (images.length > 1) {
// 		document.getElementById('slideshow').innerHTML = `
// 	<div class="slide" style="background-image: url('${images[0]}')"></div>
// 	<div class="slide" style="background-image: url('${images[1]}')"></div>
// 	`;
// 		currentPosition += 2;
// 		if (images.length == 2) currentPosition = 0;
// 		timer = setInterval(nextSlide, 3000);
// 	} else {
// 		document.getElementById('slideshow').innerHTML = `
// 	<div class="slide" style="background-image: url('${images[0]}')"></div>
// 	<div class="slide"></div>
// 	`;
// 	}

// 	function nextSlide() {
// 		document
// 			.getElementById('slideshow')
// 			.insertAdjacentHTML(
// 				'beforeend',
// 				`<div class="slide" style="background-image: url('${images[currentPosition]}')"></div>`
// 			);
// 		deleteFirstPhotoDelay = setTimeout(function () {
// 			document.querySelector('.slide').remove();
// 		}, 1000);
// 		if (currentPosition + 1 >= images.length) {
// 			currentPosition = 0;
// 		} else {
// 			currentPosition++;
// 		}
// 	}
// }
