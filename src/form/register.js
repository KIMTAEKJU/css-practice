import React from "react";
import './register.css';
import Img from '../img/W1.png';
import Right from '../img/chevron-right.png';

function Register() {

    return (
        <div className="box">
            <div className="logo-box">
                <img src={Img} className="logo-img"/>
                <span className="logo-text">Wisecrypto</span>
            </div>
            <div className="form-box">
                <div className="title-box">
                    <div className="main-title">Daftar Sekarang</div>
                    <div className="sub-title">Trusted by millions of users worldwide</div>
                </div>
                <div className="form-data-box">
                    <div className="form2-box">
                        <div className="form">
                            <div className="form-text-1">Nama Lengkap</div>
                            <input placeholder="Nama Lengkap Pengguna"/>
                        </div>
                        <div className="form">
                            <div className="form-text-2">No. Telp</div>
                            <input placeholder="No. Telp yang dapat dihubungi"/>
                        </div>
                        <div className="form">
                            <div className="form-text-3">Daftar Sebagai</div>
                            <input placeholder="Pengguna"/>
                            <img src={Right} className="input-right"/>
                        </div>
                    </div>
                    <button>
                        <div className="btn-text">SELANJUTNYA</div>
                    </button>
                    <div className="footer-text">Sudah Punya Akun? Masuk disinis</div>
                </div>
            </div>
        </div>
    )
}

export default Register;