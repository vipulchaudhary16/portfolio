import { Route, Routes } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import Sidebar from '../components/Sidebar';
import AboutMe from '../page/AboutMe';
import Experience from '../page/Experience';
import Portfolio from '../page/Portfolio';
import Skills from '../page/Skills';
import { PRIMARY_COLOR } from './variables';
import ContactMe from '../page/Contact';
import { useTheme } from '../context/theme.context';

const AppLayout = () => {
	const { collapsible } = useTheme();
	return (
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: PRIMARY_COLOR,
				},
			}}
		>
			<Sidebar />
			<div
				className={`${
					collapsible ? 'ml-[80px]' : 'ml-64'
				} flex-1 overflow-auto bg-gray-100 overflow-x-hidden min-h-screen`}
			>
				<Routes>
					<Route path='/' element={<AboutMe />} />
					<Route path='/experience' element={<Experience />} />
					<Route path='/portfolio' element={<Portfolio />} />
					<Route path='/skills' element={<Skills />} />
					<Route path='/contact' element={<ContactMe />} />
				</Routes>
			</div>
		</ConfigProvider>
	);
};

export default AppLayout;
