import { Global } from '@emotion/react';

const Fonts = () => (
	<Global
		styles={`
      @font-face {
        font-family: 'Montserrat';
      }
      `}
	/>
);

export default Fonts;
