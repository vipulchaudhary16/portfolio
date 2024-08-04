import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3, DiReact, DiNodejsSmall, DiMysql } from 'react-icons/di';
import {
	SiJavascript,
	SiRedux,
	SiTailwindcss,
	SiFirebase,
	SiMongodb,
} from 'react-icons/si';
import { FaSass, FaJava, FaGitAlt, FaAws, FaLinux } from 'react-icons/fa';
import { BsBootstrap } from 'react-icons/bs';
import { TbApi } from 'react-icons/tb';
import { Flex, Typography } from 'antd';

import cpp from '../assets/images/cpp.png';

const skillsMap = {
	Frontend: [
		{ name: 'HTML', icon: <AiFillHtml5 /> },
		{ name: 'CSS', icon: <DiCss3 /> },
		{ name: 'JavaScript', icon: <SiJavascript /> },
		{ name: 'ReactJs', icon: <DiReact /> },
		{ name: 'Redux', icon: <SiRedux /> },
		{ name: 'SCSS', icon: <FaSass /> },
		{ name: 'Tailwind', icon: <SiTailwindcss /> },
		{ name: 'Bootstrap', icon: <BsBootstrap /> },
	],
	Backend: [
		{ name: 'NodeJs', icon: <DiNodejsSmall /> },
		{ name: 'Firebase', icon: <SiFirebase /> },
		{ name: 'MongoDB', icon: <SiMongodb /> },
		{ name: 'REST API', icon: <TbApi /> },
		{ name: 'MySQL', icon: <DiMysql /> },
	],
	Other: [
		{ name: 'C++', icon: <img src={cpp} alt='C++' className='w-6 h-6' /> },
		{ name: 'Java', icon: <FaJava /> },
		{ name: 'Git', icon: <FaGitAlt /> },
		{ name: 'AWS', icon: <FaAws /> },
		{ name: 'Linux', icon: <FaLinux /> },
	],
};

const { Title } = Typography;

const Skills = () => {
	return (
		<Flex className='p-8' vertical justify='center' align='center'>
			<Title level={2} className='heading-text'>
				Skills
			</Title>
			<div className='p-8'>
				{Object.entries(skillsMap).map(([category, skills]) => (
					<div key={category} className='mb-8'>
						<h3 className='text-2xl font-semibold mb-4'>{category}</h3>
						<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6'>
							{skills.map((skill) => (
								<div
									key={skill.name}
									className='flex flex-col items-center p-4 bg-white rounded-lg shadow-md transform transition duration-300 hover:scale-105'
								>
									<div className='text-4xl mb-2'>{skill.icon}</div>
									<p className='text-gray-700'>{skill.name}</p>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</Flex>
	);
};

export default Skills;
