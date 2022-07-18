import React from 'react';
import './giftListCss.css';
import { Pagination } from 'antd';

const GiftList = () => {
    const x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <>
            <div className='style-content GiftList'>
                <div className='GiftList-header'>
                    <button>BÁO TIN NGAY</button>
                    <p className='GiftList-headerHoners'>TUYÊN DƯƠNG HỌC SINH CÓ THÀNH TÍCH XUẤT SẮC KÌ THI VÀO 10 NĂM 2022</p>
                    <p className='GiftList-headerRules'>THỂ LỆ CHƯƠNG TRÌNH</p>
                </div>
                <div className='GiftList-table'>
                    <ul className='option'>
                        <li>Điểm cao nhất</li>
                        <li>Mới nhất</li>
                        <li>Quà tặng</li>
                    </ul>
                    <table>
                        <thead>
                            <tr>
                                <th className='table-name' rowspan="2">Họ và tên</th>
                                <th colspan="4">Điểm các môn</th>
                                <th className='table-totalScore table-subject' rowspan="2">Tổng điểm</th>
                                <th className='table-matriculationScore' rowspan="2">Điểm trúng tuyển</th>
                                <th className='table-gift' rowspan="2">Quà tặng</th>
                            </tr>
                            <tr>
                                <th className='table-subject'>Môn 1</th>
                                <th className='table-subject'>Môn 2</th>
                                <th className='table-subject'>Môn 3</th>
                                <th className='table-subject'>Điểm ưu tiên</th>
                            </tr>
                        </thead>
                        <tbody>
                            {x.map((list, index) => {
                                const x = list % 2 === 0 ? 'grey' : 'white'
                                console.log(x)
                                return (
                                    <tr className={x} key={index}>
                                        <td className='table-infor'>
                                            <img src="https://thuvienplus.com/themes/cynoebook/public/images/default-user-image.png" alt="" />
                                            Phạm Xuân Trường
                                        </td>
                                        <td>10</td>
                                        <td>10</td>
                                        <td>10</td>
                                        <td>0</td>
                                        <td>30</td>
                                        <td>Thái Bình</td>
                                        <td>
                                            <img src="" alt="" />
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className='currentPage'>
                    <Pagination defaultCurrent={1} total={50} />
                </div>
            </div>
            <div className='banner'>

            </div>
        </>
    )
}

export default GiftList