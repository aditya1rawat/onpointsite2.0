import { Box } from '@chakra-ui/react';
import Categories from './Categories/Categories';
import Community from './Community';
import Writers from './Writers/Writers';

export default function CategoriesWriters() {
	return (
		<Box
			background={
				'linear-gradient(90deg, rgba(131,58,180,.8) 0%, rgba(253,29,29,.8) 50%, rgba(255,136,9,.8) 100%)'
			}
		>
			<Categories />
			<Writers />
			<Community />
		</Box>
	);
}
