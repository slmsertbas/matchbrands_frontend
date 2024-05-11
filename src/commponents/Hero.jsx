import React from 'react'
// import heroUser1 from "../Assets/hero-user1.png";
// import heroUser2 from "../Assets/hero-user2.svg";
// import heroUser3 from "../Assets/hero-user3.svg";
// import heroUser4 from "../Assets/hero-user4.svg";
// import heroUser5 from "../Assets/hero-user5.svg";
// import heroUser6 from "../Assets/hero-user6.png";
import play from "../Assets/Play.svg"
import image from "../Assets/Image (4).png"



function Hero({ onClickDown, PopShow }) {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col hero-left mt-5'>
                    <h1 className='border-design'>Power Your Marketing with Influencers!</h1>
                    <p className='mt-5 pt-3 text-start w-75'>Empowering Collaboration Between Brands and Influencers, Connect with Influencers to Amplify Your Brand's Reach.</p>
                    <div className='mt-2 d-flex justify-content-around align-items-center w-75'>
                        <h6 className='btn-1' onClick={onClickDown}>Find Influencers Now</h6>
                        <h6 className='w-100'><spam className="pe-3" ><img src={play} alt='play' onClick={PopShow} style={{ cursor: "pointer" }} /></spam>View Demo</h6>
                    </div>
                </div>
                <div className='col hero-right mt-5 d-flex justify-content-center align-items-center'>
                    <img src={image} alt='rightPicture' />
                </div>
                {/* <div className='col hero-right mt-5 d-flex flex-wrap justify-content-evenly'>
                    <div className='d-flex flex-wrap justify-content-around align-items-around gap-5'>
                        <img src={heroUser1} width={100} height={100} alt='user1' />
                        <img src={heroUser2} alt='user2' />
                        <img src={heroUser3} alt='user3' />
                    </div>
                    <div className='d-flex flex-wrap justify-content-around align-items-around gap-5'>
                        <img src={heroUser4} alt='user4' />
                        <img src={heroUser6} width={100} height={100} alt='user6' />
                        <img src={heroUser5} alt='user5' />

                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Hero