import SellForm from "../components/sell_components/SellForm";
const Sell = ({setItems}) => {
	return <main className='sell'>
		<SellForm setItems={setItems}/>
	</main>;
};

export default Sell;
