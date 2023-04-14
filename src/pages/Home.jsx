import ItemCategory from "../components/home_components/ItemCategory";


const Home = ({items, setItems,cartItems, setCartItems}) => {
	return <main className='home'>
		<ItemCategory items= {items} setItems={setItems} cartItems={cartItems}setCartItems={setCartItems} />
	</main>;
};

export default Home;
