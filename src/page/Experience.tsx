import React from 'react';
import { Typography, Flex } from 'antd';
import { EnvironmentOutlined } from '@ant-design/icons';
import { experiences } from '../data/data';

const { Title } = Typography;

const Experience: React.FC = () => {
	return (
		<Flex className='p-8' vertical justify='center' align='center'>
			<Title level={2} className='heading-text'>
				Professional Experience
			</Title>
			<div className='space-y-8 w-1/2'>
				{experiences.map((experience, index) => (
					<div key={index} className='relative pl-10'>
						<div className='absolute top-0 left-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center'>
							<EnvironmentOutlined className='text-white' />
						</div>
						<div className='bg-white p-6 shadow-lg rounded-lg'>
							<h3 className='text-xl font-semibold'>{experience.role}</h3>
							<p className='text-gray-500'>
								{experience.company} - {experience.location}
							</p>
							<p className='text-gray-500'>{experience.duration}</p>
							<p className='mt-4 text-gray-700 whitespace-pre-line'>
								{experience.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</Flex>
	);
};

export default Experience;
