const Container = (props) => {
	return (
		<div clasNames='ui container'>
			<div className='header'>{props.children}</div>
		</div>
	);
};

export default Container;
