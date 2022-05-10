import React from 'react';

const Word = (props) => {
	const { guess, guested, keyidx } = props;

	const handleColor = (i) => {
		if (guess === '     ') {
			return 'bg-light';
		}
		if (guess[i] === guested[i]) {
			return 'bg-success';
		}
		if (guested.includes(guested[i])) {
			return 'bg-warning';
		}
		if (!guested.includes(guested[i])) {
			return 'bg-dark text-light';
		}
		return 'bg-light';
	};

	return (
		<div className='row flex-row grid mx-auto justify-content-center' key={keyidx}>
			{guess.split('').map((char, i) => (
				<span
					key={i}
					// style={{ width: '60px', height: '60px', lineHeight: '53px', fontSize: '35px' }}
					className={`letter border border-2 rounded-0 mb-3 fw-bold mx-1 ${handleColor(i)}`}>
					{char.toUpperCase()}
				</span>
			))}
		</div>
	);
};

export default Word;
