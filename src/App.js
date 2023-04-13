import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Sell from './pages/Sell';
import Header from './components/global_components/Header';
import ItemCategory from './components/home_components/ItemCategory';


function App() {

	return (
		<div className='App'>
			<Header />
			
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/sell'
					element={<Sell />}
				/>
			</Routes>
			<ItemCategory />
		</div>
	);
}

export default App;
