import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { links } from '../assets/data';
import { BG_DARK_COLOR } from '../setup/variables';
import { BsGithub, BsLinkedin, BsTwitterX } from 'react-icons/bs';
import { FaCode } from 'react-icons/fa';
import { ImOffice } from 'react-icons/im';
import { MdOutlineWork } from 'react-icons/md';
import { AiOutlineContacts } from 'react-icons/ai';

const { Sider } = Layout;

const Sidebar: React.FC = () => {
	const [current, setCurrent] = React.useState('about_me');
	const location = useLocation();

	const items = [
		{
			key: 'about_me',
			icon: <UserOutlined />,
			label: 'About Me',
			path: '/',
		},
		{
			key: 'skills',
			icon: <FaCode />,
			label: 'Skills',
			path: '/skills',
		},
		{
			key: 'experience',
			icon: <ImOffice />,
			label: 'Experience',
			path: '/experience',
		},
		{
			key: 'portfolio',
			icon: <MdOutlineWork />,
			label: 'Projects',
			path: '/portfolio',
		},
		{
			key: 'contact',
			icon: <AiOutlineContacts />,
			label: 'Contact Me',
			path: '/contact',
		},
	];

	const quickSocialLinks = [
		{
			icon: <BsGithub />,
			link: links.github,
		},
		{
			icon: <BsLinkedin />,
			link: links.linkedin,
		},
		{
			link: links.twitter,
			icon: <BsTwitterX />,
		},
	];

	useEffect(() => {
		const path = location.pathname.split('/')[1];
		console.log(path);
		console.log(location);
		setCurrent(path === '' ? 'about_me' : path);
	}, [location]);

	return (
		<Sider
			width={250}
			className='fixed'
			style={{
				overflow: 'auto',
				height: '100vh',
				position: 'fixed',
				left: 0,
				background: BG_DARK_COLOR,
			}}
		>
			<div className='text-center p-4 bg-gray-800 text-red-400 text-lg font-bold'>
				Vipul Chaudhary
			</div>
			<Menu
				mode='inline'
				className='bg-gray-900 h-full mt-4'
				selectedKeys={[current]}
				style={{ height: '100%', borderRight: 0 }}
				theme='dark'
				onClick={(e) => setCurrent(e.key)}
				items={items.map((item) => ({
					...item,
					label: <Link to={item.path}>{item.label}</Link>,
				}))}
			/>
			<div className='absolute bottom-0 w-full p-4 flex justify-around bg-gray-800'>
				{quickSocialLinks.map(({ icon, link }) => (
					<a
						href={link}
						target='_blank'
						rel='noopener noreferrer'
						style={{ color: '#ffffff' }}
					>
						{icon}
					</a>
				))}
			</div>
		</Sider>
	);
};

export default Sidebar;
