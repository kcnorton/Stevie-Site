import React from 'react';

const Dog = (props) => {

	return (
		<div className="dog col-1-5">
			<img style={{width: 300, height: 300 }} src={props.url} />
		</div>
	)
}

export default Dog;