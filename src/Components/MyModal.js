import { useState } from 'react';
import Modal from 'react-modal';

const MyModal = (props) => {
	const [modalIsOpen, setModalIsOpen] = useState(true);

	//Make API Call to Wiki for dog breed info
	// Provide Intro

	return (
		<Modal
			isOpen={modalIsOpen}
			onRequestClose={() => setModalIsOpen(false)}
		>
			<div className='flex-center'>
				<h2>Insert Dog Breed</h2>
			</div>
			<div className='flex-center'>
				<img
					src='https://images.dog.ceo/breeds/briard/n02105251_1201.jpg'
					alt=''
				/>
			</div>
			<div className='flex-center'>
				<button onClick={() => setModalIsOpen(false)}>Close</button>
			</div>
			<div>
				<h3>Learn More via Wiki</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
					veritatis tempora accusantium id porro eaque est, dolores
					obcaecati pariatur quae voluptas incidunt perferendis
					distinctio alias? Ipsum, vitae! Inventore, error nesciunt?
				</p>
			</div>
		</Modal>
	);
};

export default MyModal;
