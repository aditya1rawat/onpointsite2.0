import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import { createBreakpoints } from '@chakra-ui/theme-tools';
const breakpoints = createBreakpoints({
	sm: '426px',
	md: '1025px',
	lg: '1441px',
	xl: '2561px'
});

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider
			theme={extendTheme({
				// breakpoints,
				fonts: {
					body: 'Montserrat'
				}
			})}
		>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
