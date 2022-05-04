import React, { Component } from 'react';
import _ from 'lodash';
import PropType from 'prop-types';

const Pagination = (props) => {
	const { itemsCount, pageSize, onPageChange, currentPage } = props;
	const pagesCount = Math.ceil(itemsCount / pageSize);
	if (pagesCount === 1) return null;
	const pages = _.range(1, pagesCount + 1);

	return (
		<ul className='pagination-list'>
			{pages.map((page) => (
				<li key={page}>
					<a
						className={`pagination-link ${currentPage === page ? 'is-current' : ''}`}
						onClick={() => onPageChange(page)}
					>
						{page}
					</a>
				</li>
			))}
		</ul>
	);
};

Pagination.PropType = {
	itemsCount: PropType.number.isRequired,
	pageSize: PropType.number.isRequired,
	onPageChange: PropType.func.isRequired,
	currentPage: PropType.number.isRequired,
};

export default Pagination;
