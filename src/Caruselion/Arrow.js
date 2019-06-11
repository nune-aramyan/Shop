import React from 'react';
import '../Styles.css';




const Arrow = ({ direction, clickFunction}) => (
	<div 
		className={ `slide-arrow ${direction}` } 
		onClick={ clickFunction }>
	</div>
);

export default Arrow;