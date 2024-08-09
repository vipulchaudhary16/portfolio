import React from 'react';
import { AiFillInstagram, AiFillMail } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { links } from '../assets/data';

const socials = [
	{
		name: 'LinkedIn',
		link: links.linkedin,
		icon: <FaLinkedin />,
	},
	{
		name: 'Twitter',
		link: links.twitter,
		icon: <BsTwitterX />,
	},
	{
		name: 'Mail',
		link: 'mailto:' + links.mail,
		icon: <AiFillMail />,
	},
	{
		name: 'Instagram',
		link: links.instagram,
		icon: <AiFillInstagram />,
	},
];

const ContactMe: React.FC = () => {
	return (
		<div className='min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6'>
			<h1 className='text-4xl font-bold mb-4'>Contact Me</h1>
			<p className='text-lg mb-8 text-center'>
				"Code is like humor. When you have to explain it, it's bad."
			</p>
			<div className='flex md:flex-col lg:flex-row items-center justify-center gap-4'>
				{socials.map((social) => (
					<a
						key={social.name}
						href={social.link}
						className='flex items-center p-4 bg-white shadow rounded-lg transition-transform transform hover:scale-105'
						target='_blank'
						rel='noopener noreferrer'
					>
						<span className='text-2xl mr-2'>{social.icon}</span>
						<span className='text-lg font-semibold'>{social.name}</span>
					</a>
				))}
			</div>
		</div>
	);
};

export default ContactMe;
