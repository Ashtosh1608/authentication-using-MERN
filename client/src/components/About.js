import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import '../App.css'

const About = () => {

    const history = useHistory();
    const [userData, setUserData] = useState({})


    const callAboutPage = async () => {
        try {
            const res = await fetch('/about', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();
            // console.log(data);
            setUserData(data);
            // console.log(userData.name);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }


        } catch (err) {
            console.log(err)
            history.push('/login')
        }
    }
    useEffect(() => {
        callAboutPage();
    }, []);


    return (
        <div >
            <form action="GET">

                <div>
                    <h5>{userData.name}</h5>
                    <h6>Web Developer</h6>
                </div>
                <div>
                    <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                            {/* <a className="nav-link" id='home-tab' data-toggle="tab" href="#home" role="tab" type='button'>About</a> */}
                            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Homee</button>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" id='profile-tab' data-toggle="tab" href="#profile" role="tab" type='button'>Timeline</a> */}
                            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Tiles</button>
                            {/* <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button> */}

                        </li>

                    </ul>

                </div>
                <div>
                    <input type="submit" name='btnAddMore' value="Edit Profile" />
                </div>
                <div class="tab-content" id="myTabContent">
                    <div className='tab-pane fade show active' id='home' role="tabpanel" aria-labelledby='home-tab'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <label>USER ID</label>
                            </div>
                            <div className='col-md-6'>
                                <p>{userData._id}</p>
                            </div>
                            <div className='col-md-6'>
                                <label>Name</label>
                            </div>
                            <div className='col-md-6'>
                                <p>{userData.name}</p>
                            </div>
                            <div className='col-md-6'>
                                <label>Email</label>
                            </div>
                            <div className='col-md-6'>
                                <p>{userData.email}</p>
                            </div>
                            <div className='col-md-6'>
                                <label>Phone</label>
                            </div>
                            <div className='col-md-6'>
                                <p>{userData.phone}</p>
                            </div>
                            <div className='col-md-6'>
                                <label>Work</label>
                            </div>
                            <div className='col-md-6'>
                                <p>{userData.work}</p>
                            </div>

                        </div>
                    </div>

                    <div className='tab-pane fade show active' id='profile' role="tabpanel" aria-labelledby='home-tab'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <label>Name</label>
                            </div>
                            <div className='col-md-6'>
                                <p>Ashtosh Kumar</p>
                            </div>
                            <div className='col-md-6'>
                                <label>Name</label>
                            </div>
                            <div className='col-md-6'>
                                <p>Ashtosh Kumar</p>
                            </div>
                            <div className='col-md-6'>
                                <label>Name</label>
                            </div>
                            <div className='col-md-6'>
                                <p>Ashtosh Kumar</p>
                            </div>
                            <div className='col-md-6'>
                                <label>Name</label>
                            </div>
                            <div className='col-md-6'>
                                <p>Ashtosh Kumar</p>
                            </div>
                        </div>
                    </div>
                </div>
            </form>








            {/* <ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Homee</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Contact</button>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
</div> */}






        </div >
    )
}

export default About