import React from 'react';
import { BrowserRouter, Switch, Route,HashRouter } from 'react-router-dom';
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
			<Switch>
				<Route
					exact
					path='/'
					name='صفحه اصلی'
					 render={(props) => <Home/>}
				/>
				<Route
					exact
					path='/Login'
					name='ورود'
					 render={(props) => <Login/>}
				/> 
				 
				<Route
					exact
					path='/Guide'
					name='راهنمای بازی'
					 render={(props) => <Guide/>}
				/> 
					 
				<Route
					exact
					path='/Test'
					name='تست'
					 render={(props) => <Test/>}
				/> 
				 
				<Route
					exact
					path='/TestStep1'
					name='تست'
					 render={(props) => <TestStep1/>}
				/> 
				 
				<Route
					exact
					path='/TestStep2'
					name='تست'
					 render={(props) => <TestStep2/>}
				/> 
					 
				<Route
					exact
					path='/AboutUs'
					name='درباره ما'
					 render={(props) => <AboutUs/>}
				/> 
						 
				<Route
					exact
					path='/Bank'
					name='بانک'
					 render={(props) => <Bank/>}
				/> 
					 
				<Route
					exact
					path='/Rank'
					name='جدول امتیاز'
					 render={(props) => <Rank/>}
				/> 
					 
				<Route
					exact
					path='/Questions'
					name='سوالات'
					render={(props) => <Questions/>}
				/> 
				</Switch>
		</BrowserRouter>
	);
};

export default MainRoutes;
