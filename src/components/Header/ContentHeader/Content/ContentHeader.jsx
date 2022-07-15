import React from 'react';
import './contentHeaderCss.css';
import gift from '../../../../assets/img/gift.png';
import backgroundTitle from '../../../../assets/img/backgroundTitle.png';
import a from '../../../../assets/img/1.png';
import b from '../../../../assets/img/2.png';
import c from '../../../../assets/img/3.png';
import giftbox from '../../../../assets/img/giftbox.png';
import footer from '../../../../assets/img/footer.png';

const ContentHeader = () => {
    return (
        <>
            <div className='ContentHeader stype-content'>
                <header>
                    <img src={backgroundTitle} alt="" />
                </header>
                <div className='content'>
                    <div className='content-left'>
                        <div className='content-left_img'>
                            <img src={gift} alt="" />
                            <p>QUÀ TẶNG CHƯƠNG TRÌNH</p>
                        </div>
                        <ul className='content-left_prize'>
                            <li>
                                <div className='content-left_prizeTitle'>
                                    <img src={a} alt="" />
                                    <p>5 học sinh giải nhất:</p>
                                </div>
                                <p>
                                    <span>Có tổng điểm 3 môn thi vào 10 cao nhất (không nhân hệ số)</span>
                                    <span>được tặng 500k tiền mặt, 1 bình nước giữ nhiệt, và 1 voucher</span>
                                    <span>giảm 30% vào tài khoản học sinh trên trang Tuyensinh247.</span>
                                    <span>Voucher được áp dụng khi mua khóa học  tại Tuyensinh247.</span>
                                </p>
                            </li>
                            <li>
                                <div className='content-left_prizeTitle'>
                                    <img src={b} alt="" />
                                    <p>100 học sinh giải nhì:</p>
                                </div>
                                <p>
                                    <span>Có điểm tổng 3 môn cao và báo điểm sớm tiếp theo được tặng</span>
                                    <span>1 bình nước+Voucher khuyến mãi 35% vào tài khoản học sinh</span>
                                    <span>trên trang Tuyensinh247.</span>
                                </p>
                            </li>
                            <li>
                                <div className='content-left_prizeTitle'>
                                    <img src={c} alt="" />
                                    <p>50 học sinh giải ba:</p>
                                </div>
                                <p>
                                    <span>Có điểm tổng 3 môn cao và báo điểm sớm tiếp theo nữa được</span>
                                    <span>tặng 1 sổ tay giáo viên+Voucher 25% vào tài khoản</span>
                                    <span>Tuyensinh247.</span>
                                </p>
                            </li>
                        </ul>
                        <div className='content-left_note'>
                            <p>
                                <span><b>Lưu ý:</b> Các voucher không được áp dụng khi mua combo, không áp</span>
                                <span>dụng 2 khuyến mại cùng 1 lúc.</span>
                                <span>Hạn sử dụng voucher:
                                    <span className='dateRed'> 31/08/2022</span>
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className='content-right'>
                        <p>
                            <b>
                                <span>Tham gia chương trình báo tin vui điểm thi vào 10 năm 2022 học sinh sẽ được tặng những</span>
                                <span>phần quà hấp dẫn sau</span>
                            </b>
                        </p>
                        <ul>
                            <li>
                                <div className='gift-box'>
                                    <img src={giftbox} alt="" />
                                    <b>Đối tượng tham gia:</b> tất cả các học sinh lớp 9 tham gia kì thivào 10 năm 2022
                                </div>

                            </li>
                            <li>
                                <div className='gift-box'>
                                    <img src={giftbox} alt="" />
                                    Thời gian báo điểm: <span className='dateRed'> Từ 15/07 - 25/07</span>
                                </div>

                            </li>
                            <li>
                                <div className='gift-box'>
                                    <img src={giftbox} alt="" />
                                    <span><b>Cách tính điểm và xếp hạng:</b> Có điểm tổng 3 môn thi vào 10 (không nhân hệ số) xếp từ trên</span>
                                </div>
                                <span>xuống dưới, đối với những học sinh bằng điểm nhau thì ưu tiên những học sinh báo điểm sớm hơn</span>
                            </li>
                            <li>
                                <div className='gift-box'>
                                    <img src={giftbox} alt="" />
                                    <span><b>Các bước tham gia chương trình:</b></span>
                                </div>
                                <span>- Bước 1: Đăng nhập/ Đăng kí tài khoảntrên Tuyensinh 247.</span>
                                <span>- Bước 2: Click vào nút "Báo tin ngay" sau đó nhập đầy đủ thông tin theo hướng dẫn.</span>
                            </li>
                            <li>
                                <div className='gift-box'>
                                    <img src={giftbox} alt="" />
                                    <b>Thời gian công bố danh sách quà tặng: </b><span className='dateRed'>28/07/2022</span>
                                </div>
                            </li>
                            <li>
                                <div className='gift-box'>
                                    <img src={giftbox} alt="" />
                                    <span><b>Thời gian gửi quà:</b></span>
                                </div>
                                <span>- Đối với quà tặng là tiền mặt: Sẽ được gửi chuyển khoản vào 01/08</span>
                                <span>- Đối với quà tặng là voucher: Sẽ được đẩy vào tài khoản học sinh trên trang Tuyensinh247 vào</span>
                                <span>ngày 01/08.</span>
                                <span>- Đối với quà tặng là hiện vật: Sẽ được gửi đi ngày 10/08/2022.</span>
                            </li>
                            <li>
                                <div>
                                    <div className='gift-box'>
                                        <img src={giftbox} alt="" />
                                        <span><b>Chú ý:</b></span>
                                    </div>
                                    <span>- Trong thời gian diễn ra chương trình, nếu
                                        <span style={{
                                            display: 'inline',
                                            borderBottom: '1px solid',
                                            color: '#1b59b3'
                                        }}>
                                            <b> Tuyensinh247.com </b>
                                        </span>
                                        phát hiện có gian lận về báo</span>
                                    <span>điểm thì Tuyensinh247.com sẽ tự động hủy quà tặng của người tham gia mà không cần thông</span>
                                    <span>báo trước.</span>
                                    <span>- Học sinh không điền đủ thông tin trong form đăng kí sẽ bị hủy kết quả báo điểm.</span>
                                    <span>Hotline liên hệ miễn phí: <span className='telephoneOrange'>1800 6947</span> hoặc <span className='telephoneOrange'>0247 300 7989</span></span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <footer className='ContentHeader-footer'>
                <img src={footer} alt="" />
            </footer>
        </>
    )
}

export default ContentHeader