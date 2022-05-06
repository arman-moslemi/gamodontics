import React from 'react';
import { BrowserRouter,Routes , Route } from 'react-router-dom';
import Home from '../components/features/Pages/Home/Home';
import Login from "../components/features/Pages/Login/Login";
import Guide from '../components/features/Pages/Guide/Guide';
import Test from '../components/features/Pages/Test/Test';
import TestStep1 from '../components/features/Pages/Test/TestStep1';
import TestStep2 from '../components/features/Pages/Test/TestStep2';
import AboutUs from '../components/features/Pages/AboutUs/AboutUs';
import Bank from '../components/features/Pages/Bank/Bank';
import Rank from '../components/features/Pages/Rank/Rank';
import Questions from '../components/features/Pages/Questions/Questions';
const MainRoutes = (props) => {
	return (
  <BrowserRouter basename="/">
			<Routes>
				<Route
					exact
					path='/'
					name='صفحه اصلی'
					element={<Home/>}
				/></Routes>
		<Routes>
				<Route
					exact
					path='/Login'
					name='ورود'
					element={<Login/>}
				/></Routes>
				<Routes>
				<Route
					exact
					path='/Guide'
					name='راهنمای بازی'
					element={<Guide/>}
				/></Routes>
					<Routes>
				<Route
					exact
					path='/Test'
					name='تست'
					element={<Test/>}
				/></Routes>
				<Routes>
				<Route
					exact
					path='/TestStep1'
					name='تست'
					element={<TestStep1/>}
				/></Routes>
				<Routes>
				<Route
					exact
					path='/TestStep2'
					name='تست'
					element={<TestStep2/>}
				/></Routes>
					<Routes>
				<Route
					exact
					path='/AboutUs'
					name='درباره ما'
					element={<AboutUs/>}
				/></Routes>
						<Routes>
				<Route
					exact
					path='/Bank'
					name='بانک'
					element={<Bank/>}
				/></Routes>
					<Routes>
				<Route
					exact
					path='/Rank'
					name='جدول امتیاز'
					element={<Rank/>}
				/></Routes>
					<Routes>
				<Route
					exact
					path='/Questions'
					name='سوالات'
					element={<Questions/>}
				/></Routes>
		</BrowserRouter>
	);
};

export default MainRoutes;
