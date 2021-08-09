import { Box, Button, chakra, Link, useColorModeValue } from '@chakra-ui/react';

export default function DonateService() {
	return (
		<Box
			bg={useColorModeValue('black', 'white')}
			color={useColorModeValue('white', 'black')}
			borderRadius='25px'
			py='5'
			px='5'
		>
			<Box py='5'>
				<HackClubLogo />
			</Box>
			<Link href='https://hackclub.com/bank' isExternal>
				<chakra.h1 fontSize='30px' fontWeight='700'>
					Hack Club Bank
				</chakra.h1>
			</Link>
			<a
				href='https://bank.hackclub.com/donations/start/onpoint'
				target='_blank'
			>
				<Button
					width='100%'
					mx='auto'
					mt='5'
					boxSizing='border-box'
					borderRadius='10px'
					bg={useColorModeValue('white', 'black')}
					color={useColorModeValue('black', 'white')}
					fontSize='25px'
					px='5'
					py='6'
					fontWeight='bold'
					variant='solid'
				>
					Donate
				</Button>
			</a>
		</Box>
	);
}

export const HackClubLogo = () => {
	return (
		<svg
			style={{ margin: 'auto' }}
			width='125'
			height='125'
			viewBox='0 0 200 200'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<rect width='200' height='200' rx='25' fill='url(#paint0_radial)' />
			<g filter='url(#filter0_ddii)'>
				<path
					d='M89.9242 37.7874C89.9242 36.82 89.0539 36.0851 88.1008 36.2471L63.8009 40.373C63.0497 40.5005 62.5 41.1514 62.5 41.9134V160.222C62.5 161.085 63.1995 161.785 64.0625 161.785H88.3617C89.225 161.785 89.9242 161.085 89.9242 160.222V115.935C89.9242 102.443 97.0789 94.085 103.041 94.085C108.406 94.085 109.956 99.4584 109.956 107.577V160.222C109.956 161.085 110.655 161.785 111.519 161.785H135.938C136.801 161.785 137.5 161.085 137.5 160.222V103.637C137.5 85.2498 130.584 73.4289 112.58 73.4289C105.353 73.4289 98.3008 75.1688 92.682 79.0201C91.5664 79.785 89.9242 79.0318 89.9242 77.6782V37.7874Z'
					fill='white'
				/>
			</g>
			<defs>
				<filter
					id='filter0_ddii'
					x='46.5'
					y='32.2246'
					width='107'
					height='157.56'
					filterUnits='userSpaceOnUse'
					color-interpolation-filters='sRGB'
				>
					<feFlood flood-opacity='0' result='BackgroundImageFix' />
					<feColorMatrix
						in='SourceAlpha'
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
						result='hardAlpha'
					/>
					<feOffset dy='12' />
					<feGaussianBlur stdDeviation='8' />
					<feColorMatrix
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
					/>
					<feBlend
						mode='normal'
						in2='BackgroundImageFix'
						result='effect1_dropShadow'
					/>
					<feColorMatrix
						in='SourceAlpha'
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
						result='hardAlpha'
					/>
					<feOffset dy='4' />
					<feGaussianBlur stdDeviation='4' />
					<feColorMatrix
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.125 0'
					/>
					<feBlend
						mode='normal'
						in2='effect1_dropShadow'
						result='effect2_dropShadow'
					/>
					<feBlend
						mode='normal'
						in='SourceGraphic'
						in2='effect2_dropShadow'
						result='shape'
					/>
					<feColorMatrix
						in='SourceAlpha'
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
						result='hardAlpha'
					/>
					<feOffset dy='-2' />
					<feGaussianBlur stdDeviation='3' />
					<feComposite
						in2='hardAlpha'
						operator='arithmetic'
						k2='-1'
						k3='1'
					/>
					<feColorMatrix
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.125 0'
					/>
					<feBlend
						mode='normal'
						in2='shape'
						result='effect3_innerShadow'
					/>
					<feColorMatrix
						in='SourceAlpha'
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
						result='hardAlpha'
					/>
					<feOffset dy='-2' />
					<feGaussianBlur stdDeviation='3' />
					<feComposite
						in2='hardAlpha'
						operator='arithmetic'
						k2='-1'
						k3='1'
					/>
					<feColorMatrix
						type='matrix'
						values='0 0 0 0 0.92549 0 0 0 0 0.215686 0 0 0 0 0.313726 0 0 0 0.5 0'
					/>
					<feBlend
						mode='normal'
						in2='effect3_innerShadow'
						result='effect4_innerShadow'
					/>
				</filter>
				<radialGradient
					id='paint0_radial'
					cx='0'
					cy='0'
					r='1'
					gradientUnits='userSpaceOnUse'
					gradientTransform='translate(119.5 100) rotate(-140.833) scale(132.206)'
				>
					<stop stop-color='#FF8C37' />
					<stop offset='1' stop-color='#EC3750' />
				</radialGradient>
			</defs>
		</svg>
	);
};
