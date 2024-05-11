import React from 'react';
import influencerImage from "../Assets/influencer.svg";
import managementImage from "../Assets/campaign.svg";
import analyticsImage from "../Assets/analytics.svg";


function Services({ PopShow }) {
    const services = [
        {
            image: influencerImage,
            title: "Influencer Discovery",
            content: "Find the perfect influencer for your brand."
        },
        {
            image: managementImage,
            title: "Campaign Management",
            content: "Effortlessly manage your influencer campaigns."
        },
        {
            image: analyticsImage,
            title: "Performance Analytics",
            content: "Track your campaign's success with detailed analytics."
        }
    ];
    return (
        <div className='container mt-5'>
            <div className='service-top'>
                <h3>Featured services for you.</h3>
                <p className='grey-texts'>We offer a variety of interesting features that you can help increase leads and manage your promotions easily.</p>
                <button className='btn-1' onClick={PopShow}>Get started</button>
            </div>
            <div className='service-bottom mt-5'>
                <div className='d-flex pt-5 justify-content-center align-items-center gap-4 row'>
                    {
                        services.map((val) => {
                            return (
                                <div className='service-card col'>
                                    <img src={val.image} width={75} alt='services' />
                                    <h4 className='mt-5'>{val.title}</h4>
                                    <p className='mt-2 grey-texts'>{val.content}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Services


