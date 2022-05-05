import React from 'react';
import _ from 'lodash';
import PropType from 'prop-types';

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
	const pagesCount = Math.ceil(itemsCount / pageSize);
	if (pagesCount === 1) return null;
	const pages = _.range(1, pagesCount + 1);

	return (
		<nav aria-label='Page navigation example'>
			<ul className='pagination justify-content-start'>
				{pages.map((page) => (
					<li className={`page-item ${currentPage === page ? 'active' : ''}`} key={page}>
						<span className={`page-link clicable`} onClick={() => onPageChange(page)}>
							{page}
						</span>
					</li>
				))}
			</ul>
		</nav>
	);
};

Pagination.PropType = {
	itemsCount: PropType.number.isRequired,
	pageSize: PropType.number.isRequired,
	onPageChange: PropType.func.isRequired,
	currentPage: PropType.number.isRequired,
};

export default Pagination;
