import React from 'react';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import me from '../assets/images/me-3.png';
import { links } from '../data/data';

const AboutMe: React.FC = () => {
	return (
		<>
			<div className='flex flex-col items-center justify-center h-screen z-10'>
				<p className={`text-center lg:text-xl mb-6 mx-4 max-w-2xl `}>
					"Vipul is a passionate software developer with a strong foundation in
					full-stack development and a keen eye for innovative solutions.
					Graduating with distinction from Pandit Deendayal Energy University,
					he has honed his skills in JavaScript, Ruby on Rails, React, and
					Flutter. His experience includes developing robust applications and
					enhancing user experience in agile environments. With a proven track
					record in hackathons and a commitment to continuous learning, he
					thrives on building impactful, customer-centric solutions."
				</p>
				<Button
					type='primary'
					icon={<DownloadOutlined />}
					size='large'
					onClick={() => window.open(links.resume, '_blank')}
				>
					Download Resume
				</Button>
			</div>
			<img
				src={me}
				alt='Vipul Chaudhary'
				className='absolute bottom-0 lg:right-20 right-0 lg:h-3/4 h-1/3 z-0'
			/>
		</>
	);
};

export default AboutMe;
