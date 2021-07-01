import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
	sm: '17em',
	md: '48em',
	lg: '62em',
	xl: '80em',
	'2xl': '96em'
});

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
	breakpoints,
	initialColorMode: 'dark',
	useSystemColorMode: false
});
export default theme;
