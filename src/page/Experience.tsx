import React from 'react';
import { Typography, Flex } from 'antd';
import { EnvironmentOutlined } from '@ant-design/icons';
import { experiences } from '../data/data';

const { Title } = Typography;

const Experience: React.FC = () => {
	return (
		<Flex className='lg:p-8 p-4' vertical justify='center' align='center'>
			<Title level={2} className='heading-text'>
				Professional Experience
			</Title>
			<div className='space-y-8 lg:w-1/2 w-full'>
				{experiences.map((experience, index) => (
					<div key={index} className='relative lg:pl-10 pl-8'>
						<div className='absolute top-0 left-0 lg:w-8 lg:h-8 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center'>
							<EnvironmentOutlined className='text-white' />
						</div>
						<div className='bg-white p-6 shadow-lg rounded-lg'>
							<h3 className='lg:text-xl text-sm font-semibold'>
								{experience.role}
							</h3>
							<p className='text-gray-500 text-sm'>
								{experience.company} - {experience.location}
							</p>
							<p className='text-gray-500 text-sm'>{experience.duration}</p>
							<p className='mt-2 text-sm text-gray-700 whitespace-pre-line'>
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
