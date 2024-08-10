import { DiReact, DiNodejsSmall, DiMysql } from 'react-icons/di';
import {
	SiRedux,
	SiTailwindcss,
	SiFirebase,
	SiMongodb,
	SiRubyonrails,
	SiPostgresql,
	SiExpress,
	SiGraphql,
	SiTypescript,
} from 'react-icons/si';
import { FaSass, FaGitAlt, FaAws, FaLinux } from 'react-icons/fa';
import { BsBootstrap } from 'react-icons/bs';
import { Flex, Typography } from 'antd';

const skillsMap = {
	Backend: [
		{ name: 'NodeJs', icon: <DiNodejsSmall /> },
		{ name: 'Express', icon: <SiExpress /> },
		{ name: 'Ruby on Rails', icon: <SiRubyonrails /> },
		{ name: 'Firebase', icon: <SiFirebase /> },
		{ name: 'MongoDB', icon: <SiMongodb /> },
		{ name: 'MySQL', icon: <DiMysql /> },
		{ name: 'PostgreSQL', icon: <SiPostgresql /> },
	],
	Frontend: [
		{ name: 'ReactJs', icon: <DiReact /> },
		{ name: 'Redux', icon: <SiRedux /> },
		{ name: 'TypeScript', icon: <SiTypescript /> },
		{ name: 'SCSS', icon: <FaSass /> },
		{ name: 'Tailwind', icon: <SiTailwindcss /> },
		{ name: 'Bootstrap', icon: <BsBootstrap /> },
	],
	Other: [
		{ name: 'GraphQL', icon: <SiGraphql /> },
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
			<div>
				{Object.entries(skillsMap).map(([category, skills]) => (
					<div key={category} className='lg:mb-8 mb-4'>
						<h3 className='lg:text-2xl text-xl font-semibold lg:mb-4 mb-2'>
							{category}
						</h3>
						<div className='grid grid-cols-3 lg:grid-cols-6 lg:gap-6 gap-2'>
							{skills.map((skill) => (
								<div
									key={skill.name}
									className='flex flex-col items-center lg:p-4 p-2 bg-white rounded-lg shadow-md transform transition duration-300 hover:scale-105'
								>
									<div className='lg:text-xl text-xl mb-2'>{skill.icon}</div>
									<p className='lg:text-xl text-[12px] text-gray-700'>
										{skill.name}
									</p>
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
