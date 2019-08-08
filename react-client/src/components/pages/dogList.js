import React from 'react';
import Dog from './dog.js';

const DogList = (props) => {
	
	const dogsArray = props.dogs.map((dogURL) => {
		return <Dog url={dogURL} />
	})
	return (
		<div className="container-fluid">
			{dogsArray}
		</div>
	)
}

export default DogList;