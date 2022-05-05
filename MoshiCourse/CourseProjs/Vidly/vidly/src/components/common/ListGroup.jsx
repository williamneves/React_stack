import React from 'react';

const ListGroup = ({ items, onItemSelect, selectedItem, valueProperty, textProperty }) => {
	return (
		<div className='list-group'>
			{items.map((item) => (
				<span
					onClick={() => onItemSelect(item)}
					className={`clicable list-group-item list-group-item-action ${
						item === selectedItem ? 'active' : ''
					}`}
					key={item[valueProperty]}
				>
					{item[textProperty]}
				</span>
			))}
		</div>
	);
};

ListGroup.defaultProps = {
	textProperty: 'name',
	valueProperty: '_id',
};

export default ListGroup;
