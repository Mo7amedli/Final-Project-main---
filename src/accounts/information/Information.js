import React from 'react'
import '../CSS.css'
function Information() {
  return (
    <div >
        <h3>My Info</h3>
        <div className='Account'>
            <div>
                <h4>Account</h4>
                <img className='user-photo' src='https://t4.ftcdn.net/jpg/00/65/10/47/360_F_65104718_x17a76wzWKIm3BlhA6uyYVkDs9982c6q.jpg' alt='Acc'/>
            </div>
            <div className='Acc-info'>
                <label>User Name:</label>
                <p>mahmud111</p>
                <label>Name:</label>
                <p>Mahmoud Abdelafatah</p>
                <label>Email:</label>
                <p>mah@gmail.com</p>
                <label>Country:</label>
                <p>Egypt</p>
            </div>
        </div>
        
    </div>
  )
}
export default Information;