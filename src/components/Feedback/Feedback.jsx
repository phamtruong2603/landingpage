import React, { } from 'react';
import './FeedbackCss.css';

const Feedback = () => {

  const comments = [
    {
      img: 'https://thuvienplus.com/themes/cynoebook/public/images/default-user-image.png',
      content: '.',
      name: 'abc',
      date: '19 tháng 7'
    },
    {
      img: 'https://thuvienplus.com/themes/cynoebook/public/images/default-user-image.png',
      content: '.',
      name: 'abc',
      date: ''
    },
  ]

  return (
    <div className='Feedback style-content'>
      <div className='Feedback-numberComment'>
        <p className='numberComment'>3 bình luận</p>
        <div className='login'>
          <img src="https://thuvienplus.com/themes/cynoebook/public/images/default-user-image.png" alt="" />
          <p>Vui lòng <span> đăng nhập để bình luận!</span></p>
        </div>
        <div className='hr'></div>
      </div>
      <div>
        {
          comments.map((comment, index) => {
            return (
              <div>
                <div className='Feedback-comment login'>
                  <img src={comment.img} alt="" />
                  <div>
                    <p>{comment.name}</p>
                    <p>{comment.date}</p>
                  </div>
                </div>
                <div className='answer'>
                  <div>
                    <p className='number-comment'>1 bình luận</p>
                  </div>
                  <div>
                    <div>

                    </div>
                    <div className='answer-login'>
                      <img src="https://thuvienplus.com/themes/cynoebook/public/images/default-user-image.png" alt="" />
                      <textarea name="" id="" placeholder='Viết bình luận......' ></textarea>
                      <button>Gửi</button>
                    </div>
                  </div>
                </div>
                <div className='hr'></div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Feedback