import React, { Component } from 'react';

const Like = (props) => {
	let classes = 'fa-light fa-heart';
	if (props.liked) {
		classes = 'fa-solid fa-heart';
	}
	return <i onClick={props.onClick} className={classes} style={{ cursor: 'pointer' }}></i>;
};

export default Like;
