import logo from './logo.svg';
import './App.css';
import Img from './img/W.png';

function App() {
  return (
			<div className='box'>
				<div className='articlebox'>
					<div className='textbox'>
						<div className='logo'>
							<img src={Img}/> 
							<div className='text'>Wisecrypto</div>
						</div>
					</div>
				</div>
			</div>
  );
}

export default App;
