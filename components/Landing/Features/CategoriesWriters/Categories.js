import {
	chakra,
	useColorModeValue,
	Box,
	Stack,
	Text,
	Flex,
	Tooltip,
	SimpleGrid,
	Grid
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

export default function Categories() {
	return (
		<Box
			bg='#38A169'
			color={useColorModeValue('white', 'black')}
			py={{
				sm: '10',
				md: '10',
				lg: '16',
				xl: '16',
				base: '10'
			}}
			mt={{
				sm: '0',
				md: '16',
				lg: '16',
				xl: '16',
				base: '0'
			}}
		>
			<Box mb='16' textAlign='center'>
				<chakra.h1
					fontSize={{
						sm: '40px',
						md: '40px',
						lg: '40px',
						xl: '50px',
						base: '40px'
					}}
					fontWeight='700'
				>
					But Wait... There's More!
				</chakra.h1>
				<Text fontSize='20px'>
					Just when you thought it couldn't get better
				</Text>
			</Box>
			<Flex width='100%'>
				<Stack
					direction={{
						sm: 'column',
						md: 'column',
						lg: 'row',
						xl: 'row',
						base: 'column'
					}}
					spacing={{
						sm: 'column',
						md: 'column',
						lg: '32',
						xl: '52',
						base: 'column'
					}}
					justifyContent='center'
					mx='auto'
				>
					<Box
						width={{
							sm: '300px',
							md: '450px',
							lg: '425px',
							xl: '500px',
							base: '300px'
						}}
						textAlign={{
							sm: 'center',
							md: 'center',
							lg: 'unset',
							xl: 'unset',
							base: 'center'
						}}
					>
						<chakra.h1
							fontSize={{
								sm: '40px',
								md: '40px',
								lg: '40px',
								xl: '50px',
								base: '40px'
							}}
							fontWeight='700'
							mb='10'
							mt={{
								sm: 'unset',
								md: 'unset',
								lg: '25px',
								xl: '60px',
								base: 'unset'
							}}
						>
							Diverse Categories
						</chakra.h1>
						<Text>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Condimentum diam orci pretium a pharetra,
							feugiat cursus. Dictumst risus, sem egestas odio
							cras adipiscing vulputate. Nisi, risus in suscipit
							non. Non commodo volutpat, pharetra, vel.
						</Text>
						<Stack
							direction={{
								sm: 'column',
								md: 'row',
								lg: 'row',
								xl: 'row',
								base: 'column'
							}}
							mt='10'
						>
							<Grid
								justifyContent={{
									sm: 'center',
									md: 'center',
									lg: 'unset',
									xl: 'unset',
									base: 'center'
								}}
								templateColumns={{
									sm: 'repeat(2, 1fr)',
									md: 'repeat(4, 1fr)',
									lg: 'repeat(4, 1fr)',
									xl: 'repeat(4, 1fr)',
									base: 'repeat(2, 0.35fr)'
								}}
								gap='25px'
								mb={{
									sm: '14',
									md: '24',
									lg: 'unset',
									xl: 'unset',
									base: '14'
								}}
							>
								<motion.div
									whileHover={{ y: -10 }}
									transition={{ duration: 0.2 }}
								>
									<ArtIcon />
								</motion.div>
								<motion.div
									whileHover={{ y: -10 }}
									transition={{ duration: 0.2 }}
								>
									<BusinessIcon />
								</motion.div>
								<motion.div
									whileHover={{ y: -10 }}
									transition={{ duration: 0.2 }}
								>
									<CurrentEventsIcon />
								</motion.div>
								<motion.div
									whileHover={{ y: -10 }}
									transition={{ duration: 0.2 }}
								>
									<EntertainmentIcon />
								</motion.div>
							</Grid>
						</Stack>
					</Box>
					<Box
						width={{
							sm: '300px',
							md: '450px',
							lg: '375px',
							xl: '500px',
							base: '300px'
						}}
						height={{
							sm: '300px',
							md: '450px',
							lg: '375px',
							xl: '500px',
							base: '300px'
						}}
						bg='#5465FF'
						boxShadow='rgba(0, 0, 0, 0.5) 0px 0px 25px 0px'
						borderRadius='250px'
					>
						<Flex mx='auto' justifyContent='center'>
						<motion.div
									whileHover={{ scale: 1.04 }}
									transition={{ duration: 0.2 }}
								>
							<Box
								width='200px'
								height='200px'
								border={useColorModeValue(
									'',
									'2px black solid'
								)}
								bg={useColorModeValue('white', 'black')}
								boxShadow='rgba(0, 0, 0, 0.75) 0px 0px 25px 0px'
								cursor='pointer'
								borderRadius='10px'
								mr={{
									sm: '15px',
									md: '20px',
									lg: '5',
									xl: '10',
									base: '15px'
								}}
							>
								<chakra.h1
									textAlign='center'
									py='4'
									fontSize='30px'
									fontWeight='800'
									color={useColorModeValue('black', 'white')}
								>
									Politics
								</chakra.h1>

								<svg
									width='100'
									height='90'
									viewBox='0 0 65 59'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
									style={{ margin: 'auto' }}
								>
									<path
										fill-rule='evenodd'
										clip-rule='evenodd'
										d='M6.5 48.75V6.5H45.5V48.75C45.5 49.8896 45.6955 50.9835 46.0548 52H9.75C7.95507 52 6.5 50.5449 6.5 48.75ZM55.25 58.5H9.75C4.36522 58.5 0 54.1348 0 48.75V0H45.5H48.75H52V16.25H65V19.5V22.75V48.75C65 54.1348 60.6348 58.5 55.25 58.5ZM52 22.75H58.5V48.75C58.5 50.5449 57.0449 52 55.25 52C53.4551 52 52 50.5449 52 48.75V22.75ZM26 13V26H13V13H26ZM39 22.75V16.25H29.25V22.75H39ZM39 29.25V35.75H13V29.25H39ZM39 45.5V39H13V45.5H39Z'
										fill={useColorModeValue(
											'black',
											'white'
										)}
									/>
								</svg>
							</Box>
						</motion.div>
						<motion.div
									whileHover={{ scale: 1.04 }}
									transition={{ duration: 0.2 }}
								>
							<Box
								mt={{
									sm: '15px',
									md: '20px',
									lg: '5',
									xl: '10',
									base: '15px'
								}}
								boxShadow='rgba(0, 0, 0, 0.75) 0px 0px 25px 0px'
								cursor='pointer'
								width='200px'
								height='200px'
								border={useColorModeValue(
									'',
									'2px black solid'
								)}
								bg={useColorModeValue('white', 'black')}
								borderRadius='10px'
							>
								<chakra.h1
									textAlign='center'
									py='3'
									fontSize='30px'
									fontWeight='800'
									color={useColorModeValue('black', 'white')}
								>
									Sports
								</chakra.h1>
								<Box mt='3'>
									<svg
										width='100'
										height='90'
										viewBox='0 0 100 90'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
										style={{ margin: 'auto' }}
									>
										<path
											fill-rule='evenodd'
											clip-rule='evenodd'
											d='M55 80V74.6456C64.9175 73.227 73.4938 67.6508 78.9067 59.7392C92.4771 57.8694 100 46.1142 100 30V15C100 9.47715 95.5229 5 90 5H83.6622C81.9331 2.01099 78.7014 0 75 0H25C21.2986 0 18.0669 2.01099 16.3378 5H10C4.47715 5 0 9.47715 0 15V30C0 46.1142 7.52293 57.8694 21.0933 59.7392C26.5062 67.6508 35.0825 73.227 45 74.6456V80H40C34.4772 80 30 84.4771 30 90H70C70 84.4771 65.5229 80 60 80H55ZM10 15H15V40C15 42.2888 15.2197 44.5262 15.6391 46.6924C11.9514 43.3732 10 37.6563 10 30V15ZM85 15V40C85 42.2888 84.7803 44.5262 84.3609 46.6924C88.0486 43.3732 90 37.6563 90 30V15H85ZM25 40V10H75V40C75 53.8071 63.8071 65 50 65C36.1929 65 25 53.8071 25 40Z'
											fill={useColorModeValue(
												'black',
												'white'
											)}
										/>
									</svg>
								</Box>
							</Box>
							</motion.div>
						</Flex>
						<Flex mx='auto' justifyContent='center'>
						<motion.div
									whileHover={{ scale: 1.04 }}
									transition={{ duration: 0.2 }}
								>
							<Box
								width='200px'
								height='200px'
								border={useColorModeValue(
									'',
									'2px black solid'
								)}
								boxShadow='rgba(0, 0, 0, 0.75) 0px 0px 25px 0px'
								cursor='pointer'
								bg={useColorModeValue('white', 'black')}
								borderRadius='10px'
								mr={{
									sm: '15px',
									md: '20px',
									lg: '5',
									xl: '10',
									base: '15px'
								}}
							>
								<chakra.h1
									textAlign='center'
									py='3'
									fontSize='30px'
									fontWeight='800'
									color={useColorModeValue('black', 'white')}
								>
									Science
								</chakra.h1>
								<Box>
									<svg
										width='100'
										height='100'
										viewBox='0 0 100 100'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
										style={{ margin: 'auto' }}
									>
										<path
											fill-rule='evenodd'
											clip-rule='evenodd'
											d='M89.9459 50C100.905 67.922 103.658 85.2152 94.4365 94.4365C85.2152 103.658 67.922 100.905 50 89.9459C32.078 100.905 14.7848 103.658 5.56353 94.4365C-3.65774 85.2152 -0.905304 67.9221 10.054 50.0001L10.0537 49.9997L10.0538 49.9996C-0.905334 32.0777 -3.65769 14.7848 5.56353 5.56353C14.7848 -3.65769 32.0777 -0.905334 49.9996 10.0538L49.9997 10.0537L50.0001 10.054C67.9221 -0.905304 85.2152 -3.65774 94.4365 5.56353C103.658 14.7848 100.905 32.078 89.9459 50ZM35.188 35.188C40.0394 30.3366 45.0605 26.1326 50.0003 22.6345C54.9398 26.1325 59.9607 30.3363 64.8119 35.1875C69.6634 40.039 73.8675 45.0604 77.3657 50.0002C73.8675 54.9399 69.6636 59.961 64.8123 64.8123C59.961 69.6636 54.9399 73.8675 50.0002 77.3657C45.0604 73.8675 40.039 69.6634 35.1875 64.8119C30.3363 59.9607 26.1325 54.9398 22.6345 50.0003C26.1326 45.0605 30.3366 40.0394 35.188 35.188ZM72.2179 27.7814C68.1132 23.6767 63.8667 19.9521 59.5804 16.6591C71.8877 10.0323 82.5191 8.45829 87.0305 12.9698C91.542 17.4812 89.9679 28.1127 83.3411 40.4201C80.0479 36.1334 76.323 31.8865 72.2179 27.7814ZM16.6591 59.5804C19.9521 63.8667 23.6767 68.1132 27.7814 72.2179C31.8865 76.323 36.1334 80.0479 40.4201 83.3411C28.1127 89.9679 17.4812 91.542 12.9698 87.0305C8.45829 82.5191 10.0323 71.8877 16.6591 59.5804ZM83.341 59.5801C89.9679 71.8875 91.542 82.519 87.0305 87.0305C82.519 91.542 71.8875 89.9679 59.5801 83.341C63.8666 80.0479 68.1133 76.3231 72.2182 72.2182C76.3231 68.1133 80.0479 63.8666 83.341 59.5801ZM40.4198 16.659C28.1125 10.0323 17.4812 8.4583 12.9698 12.9698C8.4583 17.4812 10.0323 28.1125 16.659 40.4198C19.9521 36.1333 23.6769 31.8866 27.7818 27.7818C31.8866 23.6769 36.1333 19.9521 40.4198 16.659ZM55.2366 49.9997C55.2366 47.1075 52.892 44.7629 49.9997 44.7629C47.1075 44.7629 44.7629 47.1075 44.7629 49.9997C44.7629 52.892 47.1075 55.2366 49.9997 55.2366C52.892 55.2366 55.2366 52.892 55.2366 49.9997Z'
											fill={useColorModeValue(
												'black',
												'white'
											)}
										/>
									</svg>
								</Box>
							</Box>
							</motion.div>
							<motion.div
									whileHover={{ scale: 1.04 }}
									transition={{ duration: 0.2 }}
								>
							<Box
								mt={{
									sm: '15px',
									md: '20px',
									lg: '5',
									xl: '10',
									base: '15px'
								}}
								cursor='pointer'
								boxShadow='rgba(0, 0, 0, 0.75) 0px 0px 25px 0px'
								width='200px'
								height='200px'
								border={useColorModeValue(
									'',
									'2px black solid'
								)}
								bg={useColorModeValue('white', 'black')}
								borderRadius='10px'
							>
								<chakra.h1
									textAlign='center'
									py='3'
									fontSize='30px'
									fontWeight='800'
									color={useColorModeValue('black', 'white')}
								>
									Tech
								</chakra.h1>
								<Box mt='3'>
									<svg
										width='74'
										height='90'
										viewBox='0 0 74 90'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
										style={{ margin: 'auto' }}
									>
										<path
											fill-rule='evenodd'
											clip-rule='evenodd'
											d='M65.4546 0H22.8509L0 22.8509V81.8182C0 86.3369 3.66312 90 8.18182 90H65.4546C69.9732 90 73.6364 86.3369 73.6364 81.8182V8.18182C73.6364 3.66312 69.9732 0 65.4546 0ZM8.1818 81.8182V26.2399L26.2399 8.1818H65.4545V81.8182H8.1818ZM53.1818 12.2727H61.3636V36.8182H53.1818V12.2727ZM49.091 12.2727H40.9092V36.8182H49.091V12.2727ZM28.6364 12.2727H36.8182V36.8182H28.6364V12.2727ZM24.5454 24.5455H16.3636V40.9091H24.5454V24.5455Z'
											fill={useColorModeValue(
												'black',
												'white'
											)}
										/>
									</svg>
								</Box>
							</Box>
							</motion.div>
						</Flex>
					</Box>
				</Stack>
			</Flex>
		</Box>
	);
}

export const ArtIcon = () => {
	return (
		<Tooltip label='Art' placement='bottom'>
			<Box
				width='100px'
				height='100px'
				bg='#5465FF'
				px='6'
				py='4'
				borderRadius='10px'
				cursor='pointer'
			>
				<svg
					width='50'
					height='69'
					viewBox='0 0 50 69'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						fill-rule='evenodd'
						clip-rule='evenodd'
						d='M49.9998 0V24.9999H50L49.9999 28.125L49.9998 31.2499L49.9998 37.4819C50.0271 42.2389 47.3731 43.7446 39.9729 45.9621C35.6355 47.2618 34.3749 47.9758 34.3749 48.4374C34.3749 50.8361 34.5945 52.4468 35.0628 54.32C34.9723 53.9578 35.506 56.0217 35.6239 56.5716C35.8311 57.5388 35.9374 58.4192 35.9374 59.3748C35.9374 64.565 31.0551 68.7498 24.9999 68.7498C18.9447 68.7498 14.0625 64.565 14.0625 59.3748C14.0625 58.4192 14.1687 57.5388 14.376 56.5716C14.4938 56.0217 15.0276 53.9578 14.937 54.32C15.4053 52.4468 15.625 50.8361 15.625 48.4374C15.625 47.9727 14.3678 47.2603 10.0395 45.9618C2.64909 43.7447 0 42.2435 0 37.4999V31.2499V24.9999V0H49.9998ZM27.895 31.2499H43.7499L43.7499 37.4999C43.7525 37.9701 42.5013 38.6799 38.1789 39.9751L38.1654 39.9792C30.779 42.1926 28.1249 43.6958 28.1249 48.4373C28.1249 51.3771 28.4131 53.4903 28.9995 55.8359C28.9436 55.6122 29.4271 57.4817 29.5127 57.8812C29.6331 58.443 29.6874 58.8935 29.6874 59.3748C29.6874 60.881 27.7989 62.4998 24.9999 62.4998C22.201 62.4998 20.3125 60.881 20.3125 59.3748C20.3125 58.8935 20.3668 58.443 20.4872 57.8812C20.5728 57.4817 21.0563 55.6122 21.0004 55.8359C21.5868 53.4903 21.875 51.3771 21.875 48.4373C21.875 43.6937 19.2259 42.1925 11.8354 39.9754C7.50715 38.6769 6.25 37.9645 6.25 37.4999V31.2499H27.895ZM6.25 24.9999V6.24998H12.5V18.7499H18.75V6.24998H25V15.625H31.25V6.24998H43.7499V24.9999H6.25Z'
						fill='white'
					/>
				</svg>
			</Box>
		</Tooltip>
	);
};

export const BusinessIcon = () => {
	return (
		<Tooltip label='Business' placement='bottom'>
			<Box
				width='100px'
				height='100px'
				bg='#5465FF'
				px='17px'
				py='17px'
				borderRadius='10px'
				cursor='pointer'
			>
				<svg
					width='65'
					height='68.25'
					viewBox='0 0 75 79'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						fill-rule='evenodd'
						clip-rule='evenodd'
						d='M68.1818 0H6.81818C3.0526 0 0 3.35786 0 7.5V67.5C0 71.6421 3.0526 75 6.81818 75H11.25V78.75H18.75V75H56.25V78.75H63.75V75H68.1818C71.9474 75 75 71.6421 75 67.5V7.5C75 3.35786 71.9474 0 68.1818 0ZM7.5 67.5V7.5H67.5V15H63.75V22.5H67.5V52.5H63.75V60H67.5V67.5H7.5ZM58.9019 53.5984L53.5986 58.9017L45.12 50.4231C42.8868 51.7427 40.2819 52.5 37.5 52.5C34.7183 52.5 32.1134 51.7428 29.8803 50.4233L21.4019 58.9017L16.0986 53.5984L24.5769 45.1201C23.2573 42.8868 22.5 40.2819 22.5 37.5C22.5 34.7181 23.2573 32.1132 24.5769 29.8799L16.0986 21.4017L21.4019 16.0984L29.8803 24.5767C32.1134 23.2572 34.7183 22.5 37.5 22.5C40.2819 22.5 42.8868 23.2573 45.1201 24.5769L53.5986 16.0984L58.9019 21.4017L50.4233 29.8803C51.7428 32.1134 52.5 34.7183 52.5 37.5C52.5 40.2817 51.7428 42.8866 50.4233 45.1197L58.9019 53.5984ZM45 37.5C45 41.6421 41.6421 45 37.5 45C33.3579 45 30 41.6421 30 37.5C30 33.3579 33.3579 30 37.5 30C41.6421 30 45 33.3579 45 37.5Z'
						fill='white'
					/>
				</svg>
			</Box>
		</Tooltip>
	);
};

export const CurrentEventsIcon = () => {
	return (
		<Tooltip label='Current Events' placement='bottom'>
			<Box
				width='100px'
				height='100px'
				bg='#5465FF'
				borderRadius='10px'
				px='3'
				py='3'
				cursor='pointer'
			>
				<svg
					width='75'
					height='75'
					viewBox='0 0 65 65'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						fill-rule='evenodd'
						clip-rule='evenodd'
						d='M32.5 0C50.4493 0 65 14.5507 65 32.5C65 50.4493 50.4493 65 32.5 65C14.5507 65 0 50.4493 0 32.5C0 14.5507 14.5507 0 32.5 0ZM58.858 36.035C55.7257 37.6642 51.6003 39.0265 46.9159 39.9658C46.25 46.7672 44.675 52.7711 42.3843 57.1932C51.1271 53.6904 57.577 45.679 58.858 36.035ZM41.3231 34.877C41.3499 34.0945 41.3636 33.3017 41.3636 32.5C41.3636 17.68 36.6553 5.90909 32.5 5.90909C28.3447 5.90909 23.6364 17.68 23.6364 32.5C23.6364 33.3479 23.6518 34.1857 23.6816 35.012C26.4533 35.3018 29.4148 35.4546 32.5001 35.4546C35.5375 35.4546 38.5177 35.2403 41.3231 34.877ZM47.2616 33.8418C47.269 33.3966 47.2727 32.9493 47.2727 32.5C47.2727 22.6683 45.4836 13.7898 42.3843 7.80681C51.1776 11.3298 57.6514 19.4137 58.8797 29.1323C57.4893 30.6929 53.104 32.5466 47.2616 33.8418ZM24.165 41.0012C26.8155 41.24 29.6072 41.3636 32.5001 41.3636C35.3463 41.3636 38.1504 41.2023 40.8474 40.9032C39.5147 51.5323 35.8298 59.0909 32.5 59.0909C29.1805 59.0909 25.508 51.5788 24.165 41.0012ZM17.7437 34.1256C16.0479 33.7873 14.4675 33.389 13.0245 32.9358C9.35944 31.7849 6.96436 30.3742 6.10307 29.2718C7.28677 19.4911 13.7804 11.3467 22.6157 7.80681C19.5164 13.7898 17.7273 22.6683 17.7273 32.5C17.7273 33.0449 17.7328 33.5869 17.7437 34.1256ZM18.1088 40.2138C18.7884 46.9132 20.3529 52.8249 22.6157 57.1932C14.0245 53.7511 7.64743 45.9555 6.2133 36.5352C9.29629 38.141 13.3644 39.3891 18.1088 40.2138Z'
						fill='white'
					/>
				</svg>
			</Box>
		</Tooltip>
	);
};

export const EntertainmentIcon = () => {
	return (
		<Tooltip label='Entertainment' placement='bottom'>
			<Box
				width='100px'
				height='100px'
				bg='#5465FF'
				borderRadius='10px'
				px='15px'
				py='5'
				cursor='pointer'
			>
				<svg
					width='70'
					height='57.27'
					viewBox='0 0 65 54'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						fill-rule='evenodd'
						clip-rule='evenodd'
						d='M17.5412 8.40679C17.7505 8.11579 17.983 7.75954 18.2795 7.27918C18.3877 7.10387 18.6825 6.61747 18.9023 6.25478L18.9032 6.25333L18.9036 6.2526C19.0207 6.05938 19.1164 5.90161 19.1508 5.84531C21.6 1.83887 23.3805 0 26.5909 0H38.4091C41.6195 0 43.4 1.83887 45.8492 5.84531C45.8837 5.90165 45.9794 6.05958 46.0966 6.25297L46.0968 6.25335C46.3168 6.61619 46.6122 7.10364 46.7205 7.27918C47.017 7.75954 47.2495 8.11579 47.4588 8.40679C47.5968 8.5987 47.7174 8.75118 47.8158 8.86364H56.1364C61.0316 8.86364 65 12.832 65 17.7273V44.3182C65 49.2134 61.0316 53.1818 56.1364 53.1818H8.86364C3.96839 53.1818 0 49.2134 0 44.3182V17.7273C0 12.832 3.96839 8.86364 8.86364 8.86364H17.1842C17.2826 8.75118 17.4032 8.5987 17.5412 8.40679ZM8.86364 14.7727C7.23189 14.7727 5.90909 16.0955 5.90909 17.7273V44.3182C5.90909 45.9499 7.23189 47.2727 8.86364 47.2727H56.1364C57.7681 47.2727 59.0909 45.9499 59.0909 44.3182V17.7273C59.0909 16.0955 57.7681 14.7727 56.1364 14.7727H47.2727C45.3099 14.7727 43.9862 13.6985 42.6618 11.8573C42.3571 11.4337 42.0552 10.9712 41.692 10.3825C41.5675 10.1809 41.2445 9.64783 41.0227 9.28195L41.0193 9.27638C40.9158 9.10555 40.8349 8.97207 40.8076 8.92742C39.4712 6.74145 38.6653 5.90909 38.4091 5.90909H26.5909C26.3347 5.90909 25.5288 6.74145 24.1924 8.92742C24.1649 8.97237 24.0831 9.10732 23.9786 9.27977L23.9775 9.28169L23.9773 9.28188C23.7556 9.64776 23.4325 10.1809 23.308 10.3825C22.9448 10.9712 22.6429 11.4337 22.3382 11.8573C21.0138 13.6985 19.6901 14.7727 17.7273 14.7727H8.86364ZM56.1364 20.6818C56.1364 22.3136 54.8136 23.6364 53.1818 23.6364C51.5501 23.6364 50.2273 22.3136 50.2273 20.6818C50.2273 19.0501 51.5501 17.7273 53.1818 17.7273C54.8136 17.7273 56.1364 19.0501 56.1364 20.6818ZM17.7273 29.5455C17.7273 37.7042 24.3412 44.3182 32.5 44.3182C40.6588 44.3182 47.2727 37.7042 47.2727 29.5455C47.2727 21.3867 40.6588 14.7727 32.5 14.7727C24.3412 14.7727 17.7273 21.3867 17.7273 29.5455ZM41.3636 29.5455C41.3636 34.4407 37.3953 38.4091 32.5 38.4091C27.6047 38.4091 23.6364 34.4407 23.6364 29.5455C23.6364 24.6502 27.6047 20.6818 32.5 20.6818C37.3953 20.6818 41.3636 24.6502 41.3636 29.5455Z'
						fill='white'
					/>
				</svg>
			</Box>
		</Tooltip>
	);
};
