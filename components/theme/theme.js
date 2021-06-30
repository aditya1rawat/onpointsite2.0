import { extendTheme } from '@chakra-ui/react';
const styles = {
	global: () => ({
		body: {
			color: 'white',
			bg: 'black'
		}
	})
};
const theme = extendTheme({
	fonts: {
		heading: 'Montserrat',
		body: 'Montserrat'
	},
	styles,
	initialColorMode: 'dark',
	useSystemColorMode: false
});
export default theme;
