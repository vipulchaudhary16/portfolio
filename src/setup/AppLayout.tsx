import { Route, Routes } from 'react-router-dom';
import Home from '../page/Home';
import { ConfigProvider } from 'antd';

const AppLayout = () => {
	return (
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: '#00ed8e',
				},
			}}
		>
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</ConfigProvider>
	);
};

export default AppLayout;
