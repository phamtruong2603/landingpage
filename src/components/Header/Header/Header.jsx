import React from 'react';
import './headerCss.css';
import { GrFacebookOption } from "react-icons/gr";
import logo from '../../../assets/img/logo.png'
import telephone from '../../../assets/img/telephone.png'
import Rules from '../../../assets/img/Rules.png'
import user from '../../../assets/img/user.png'

const Header = () => {
    return (
        <div className='stype-content header'>
            <ul className='header-menu header-menu_left'>
                <li className='header-menu_logo'>
                    <img src={logo} alt="" />
                </li>
                <li>
                    <img src={telephone} alt="" /> 1800.6947
                </li>
                <li>
                    <img src={Rules} alt="" />Thể lệ
                </li>
            </ul>
            <div className='header-menu'>
                <img src={user} alt="" />
                <ul className='header-menu header-menu_right'>
                    <li> Đăng nhập</li>
                    <li>Đăng kí</li>
                </ul>
                <ul className='header-menu'>
                    <li>
                        <button className='header-menu_button'>
                            <span className='iconFB'><GrFacebookOption /></span>
                            <span className='header-menu_buttonSpan'>Chia sẻ</span>
                        </button>
                    </li>
                    <li>
                        <button className='header-menu_view'>2k</button>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Header