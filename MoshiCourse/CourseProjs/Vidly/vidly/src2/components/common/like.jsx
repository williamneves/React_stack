import React from 'react';

const Like = (props) => {
	let classes = 'clicable fa-light fa-heart';
	if (props.liked) {
		classes = 'clicable fa-solid fa-heart';
	}
	return <i onClick={props.onClick} className={classes}></i>;
};

export default Like;
