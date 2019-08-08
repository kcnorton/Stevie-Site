import React from 'react';

const Dog = (props) => {

	return (
		<div className="dog">
			<img style={{width: 300, height: 300 }} src={props.url} />
		</div>
	)
}

export default Dog;