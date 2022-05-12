import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

const Table = ({ columns, data, sortColumn, onSort } ) => {
	return (
		<table className='table table-striped table-light table-sm table align-middle'>
			<TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
			<TableBody data={data} columns={columns} />
		</table>
	);
};

export default Table;
