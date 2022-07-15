import React from 'react';
import './giftListCss.css';

const GiftList = () => {
    return (
        <>
            <div className='style-content GiftList'>
                <div className='GiftList-header'>
                    <button>BÁO TIN NGAY</button>
                    <p>TUYÊN DƯƠNG HỌC SINH CÓ THÀNH TÍCH XUẤT SẮC KÌ THI VÀO 10 NĂM 2022</p>
                    <p>THỂ LỆ CHƯƠNG TRÌNH</p>
                </div>
                <div>
                    <ul>
                        <li>Điểm cao nhất</li>
                        <li>Mới nhất</li>
                        <li>Quà tặng</li>
                    </ul>
                </div>
            </div>
            <div className='banner'> 

            </div>
        </>
    )
}

export default GiftList