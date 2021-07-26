import { ChakraProvider, extendTheme } from '@chakra-ui/react';

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider
			theme={extendTheme({
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
