import React from 'react';
import '../../style/TexLogo.scss';

function TextLogo(props) {
	return (
		<div className='text-logo-container'>
			<a href='/' rel='home'>
				<i className='text-logo' />
			</a>
		</div>
	);
}

export default TextLogo;
