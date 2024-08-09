import React from 'react';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import me from '../assets/images/me-2.png';
import { links } from '../assets/data';

const AboutMe: React.FC = () => {
	return (
		<>
			<div className='flex flex-col items-center justify-center h-screen '>
				<p className={`text-center text-xl mb-6 mx-4 max-w-2xl`}>
					"Vipul is a passionate software developer with a strong foundation in
					full-stack development and a keen eye for innovative solutions.
					Graduating with distinction from Pandit Deendayal Energy University,
					he has honed his skills in JavaScript, Ruby on Rails, React, and
					Flutter. His experience includes developing robust applications and
					enhancing user experience in agile environments. With a proven track
					record in hackathons and a commitment to continuous learning, he
					thrives on building impactful, customer-centric solutions.""
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
				style={{ position: 'absolute', bottom: 0, right: 20, height: '70%' }}
			/>
		</>
	);
};

export default AboutMe;
