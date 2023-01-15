import React from 'react';
import Img from '../img/W1.png';
import './loginForm.css';

function LoginForm() {
    
    return (
        <div className='box'>
            <div className='upper-box'>
                <img src={Img}/>
                <div className='form-text'>Wisecrypto</div>
            </div>
            <div className='middle-box'>
                
                <div className='form-text-box'>
                    <div className='title'>Selamat Datang</div>
                    <div className='sub-title'>Trusted by millions of users worldwide</div>
                </div>
                <div className='form-box'>
                    <div className='form'>
                        <div className='text-email'>Email</div>
                        <input className='input' placeholder='botpablo@gmail.com'/>
                    </div>
                    <div className='second-form'>
                        <div className='text-name'>Kata Sandi</div>
                        <input className='input' placeholder='Masukkan kata Sandi'/>
                    </div>
                    <div className='low-box'>

                        <div>Lupa Kata Sandi?</div>
                        <button style={{flexGrow: 2}}>MASUK</button>
                        <div>Belum Punya Akun? Daftar disini</div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default LoginForm;