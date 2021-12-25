import { Box } from '@chakra-ui/react';
import Categories from './Categories/Categories';
import Community from './Community';
import Writers from './Writers/Writers';

export default function CategoriesWriters() {
	return (
		<Box
			background={
				'linear-gradient(135deg, rgb(131,58,180), rgb(253,29,29), rgb(255,136,9))'
			}
		>
			<Box justifyContent={'center'} mx='auto' width={'80%'}>
				<Categories />
				<Writers />
				<Community />
			</Box>
		</Box>
	);
}
