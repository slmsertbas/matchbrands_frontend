import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import star from '../Assets/Star 8.svg';
import stipe from '../Assets/stipe.svg'
import user1 from '../Assets/user1.svg'
import user2 from '../Assets/user2.svg'
import user3 from '../Assets/user3.svg'
import user4 from '../Assets/user4.svg'

function Reviews() {
    const Reviews = [
        {
            review: "I stumbled upon this platform while looking for influencers to promote my new product line, and I couldn't be happier with the results! The influencer discovery tool made it incredibly easy to find the perfect match for my brand. The campaign management feature streamlined the entire process, from negotiation to content approval.",
            user: "Aria Zinanrio"
        },
        {
            review: "I stumbled upon this platform while looking for influencers to promote my new product line, and I couldn't be happier with the results! The influencer discovery tool made it incredibly easy to find the perfect match for my brand. The campaign management feature streamlined the entire process, from negotiation to content approval.",
            user: "Aria Zinanrio"
        },
        {
            review: "I stumbled upon this platform while looking for influencers to promote my new product line, and I couldn't be happier with the results! The influencer discovery tool made it incredibly easy to find the perfect match for my brand. The campaign management feature streamlined the entire process, from negotiation to content approval.",
            user: "Aria Zinanrio"
        }
    ];

    const settingstech = {
        dots: true,
        infinite: true,
        speed: 1000, // Adjust the speed for slide transition
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true, // Enable automatic sliding
        autoplaySpeed: 3000, // Set the duration for each slide
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className='mt-5 pt-5'>
            <div className='container pt-5'>
                <div>
                    <div className='d-flex justify-content-between align-items-start text-start p-5 '>
                        <h2 style={{ maxWidth: "400px" }}>What People are saying about matchbrand</h2>
                        <div style={{ minHeight: "80px" }} className='review-imgs d-flex gap-3 justify-content-end'>
                            <img src={user1} alt='user1' />
                            <img src={user2} alt='user2' />
                            <img src={user3} alt='user3' />
                            <img src={user4} alt='user4' />
                        </div>
                    </div>
                </div>
                <div className=' text-start p-5'>
                    <Slider {...settingstech} >
                        {
                            Reviews.map((val) => {
                                return (
                                    <div className='p-3'>
                                        <img src={stipe} />
                                        <p className='grey-texts mt-5'>{val.review}</p>
                                        <div className='d-flex justify-content-between mt-3'>
                                            <p>_{val.user}</p>
                                            <ul style={{ listStyle: "none" }} className='d-flex'>
                                                <li><img src={star} /></li>
                                                <li><img src={star} /></li>
                                                <li><img src={star} /></li>
                                                <li><img src={star} /></li>
                                                <li><img src={star} /></li>
                                            </ul>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Reviews