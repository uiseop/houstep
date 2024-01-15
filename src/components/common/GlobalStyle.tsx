import { Global, css } from '@emotion/react';

export const GlobalStyle = () => {
	return <Global styles={resetStyle} />;
};

const resetStyle = css`
	/*! minireset.css v0.0.6 | MIT License | github.com/jgthms/minireset.css */
	blockquote,
	body,
	dd,
	dl,
	dt,
	fieldset,
	figure,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	hr,
	html,
	iframe,
	legend,
	li,
	ol,
	p,
	pre,
	textarea,
	ul {
		margin: 0;
		padding: 0;
	}
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-size: 100%;
		font-weight: 400;
	}
	ul {
		list-style: none;
	}
	button,
	input,
	select {
		margin: 0;
		border: none;
		outline: 0;
		padding: 0;
	}
	html {
		box-sizing: border-box;
		font-family: 'Inter', sans-serif;
		font-size: 18px;
	}
	*,
	:after,
	:before {
		box-sizing: inherit;
	}
	img,
	video {
		height: auto;
		max-width: 100%;
	}
	iframe {
		border: 0;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
	td,
	th {
		padding: 0;
	}
	a {
		text-decoration: none;
		color: var(--colors-text);
	}
	button {
		cursor: pointer;
		-moz-appearance: none; // Reset
		-webkit-appearance: none; // Reset

		&:disabled {
			pointer-events: none;
			cursor: default;
		}
	}
`;
