import { LinkOutlined, GithubOutlined } from '@ant-design/icons';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProjectCard = ({ project }: any) => {
	return (
		<div
			key={project.id}
			className='bg-white shadow-lg rounded-lg overflow-hidden'
		>
			<img
				src={project.image}
				alt={project.title}
				className='w-full h-48 object-cover'
			/>
			<div className='p-6'>
				<h3 className='text-xl font-semibold mb-2'>{project.title}</h3>
				<p className='text-gray-700 mb-4'>{project.desc}</p>
				<div className='flex space-x-4'>
					{project.live_link && (
						<a
							href={project.live_link}
							target='_blank'
							rel='noopener noreferrer'
							className='text-blue-500 hover:text-blue-700 flex items-center'
						>
							<LinkOutlined className='mr-1' /> Live Site
						</a>
					)}
					{project.github_link && (
						<a
							href={project.github_link}
							target='_blank'
							rel='noopener noreferrer'
							className='text-gray-900 hover:text-gray-700 flex items-center'
						>
							<GithubOutlined className='mr-1' /> GitHub
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
