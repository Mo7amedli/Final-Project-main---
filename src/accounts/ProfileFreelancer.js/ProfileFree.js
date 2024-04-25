import React from 'react'
import { FaUserEdit } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import './FreelancerProfile.css'
export default function ProfileFree() {
  return (
    <div className='account d-flex justify-content-center '>
            <div className="account-info col-lg-12 row py-3">
                <div className="head d-flex py-3 " > 
                    <div>
                        <img className='user-photo' src="https://t4.ftcdn.net/jpg/00/65/10/47/360_F_65104718_x17a76wzWKIm3BlhA6uyYVkDs9982c6q.jpg" alt="photo" style={{width:'100px', height:'100px', borderRadius:'50%'}}/>
                    </div>
                    <div className='p-2'>
                        <h2>Mahmoud AbdElfatah</h2>
                        <span><IoLocationOutline />Mansura-Egypt</span>
                    </div>    
                </div>
                <div className="row">
                <div className="Skills col-lg-5 py-3">
                        <div className='py-2'>
                            <h4>Skills</h4>
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JS</span>
                        </div>  
                        <div className='py-3'>
                            <p>Languages:</p>
                            <span>English</span>
                        </div>
                        <div>
                        <h4>LinkedIn:</h4>
                              <a href="#" className='linkedin'>linkedin</a>
                        </div>
                    </div>
                    <div className="about col-lg-7">
                        <div className="px-2 py-3">
                            <h3 className='py-2'>Front-End</h3>
                            <h4>About:</h4>
                              <p className='px-4'> i am student in ........</p>
                            
                        </div>  
                        <button className='btn-edit' ><FaUserEdit /></button>
                    </div>
                      
                </div>           
            </div>
        </div>
  )
}
