import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import theme from '../components/theme/theme';

export default class Document extends NextDocument {
	render() {
		return (
			<Html lang='en' style={{ overflowX: 'hidden' }}>
				<Head />
				<body>
					<ColorModeScript
						initialColorMode={theme.initialColorMode}
					/>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
