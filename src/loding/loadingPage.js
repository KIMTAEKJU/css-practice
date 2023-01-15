import './loadingPage.css';
import Img from '../img/W.png';
import Loading from '../img/loading.png';

function LoadingPage() {
  return (
		<div className='box'>
			<div className='articlebox'>
				<div className='textbox'>
					<div className='logo'>
						<img src={Img}/> 
						<div className='text'>Wisecrypto</div>
					</div>
					<div className='logotext'>
						Trusted by millions of users <br/> worldwide
					</div>
				</div>
				<img src={Loading}/>
			</div>
		</div>
  );
}

export default LoadingPage;
