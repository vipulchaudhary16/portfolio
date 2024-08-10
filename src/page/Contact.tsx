import React from 'react';
import { AiFillInstagram, AiFillMail } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { links } from '../data/data';

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
			<h1 className='lg:text-4xl text-2xl font-bold mb-4 text-center'>
				Contact Me
			</h1>
			<p className='lg:text-lg text-sm mb-8 text-center px-4'>
				"Code is like humor. When you have to explain it, it's bad."
			</p>
			<div className='flex flex-wrap items-center justify-center lg:gap-4 gap-2'>
				{socials.map((social) => (
					<a
						key={social.name}
						href={social.link}
						className='flex items-center lg:p-4 p-2 bg-white shadow rounded-lg  w-full sm:w-auto'
						target='_blank'
						rel='noopener noreferrer'
					>
						<span className='lg:text-lg text-sm mr-2'>{social.icon}</span>
						<span className='lg:text-lg text-sm font-semibold'>
							{social.name}
						</span>
					</a>
				))}
			</div>
		</div>
	);
};

export default ContactMe;
