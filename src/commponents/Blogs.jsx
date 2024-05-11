import React from 'react';
import blogsimage from '../Assets/blogimage.svg';
import Card from 'react-bootstrap/Card';

function Blogs({ PopShow }) {
    const Blogs = [
        {
            image: blogsimage,
            title: 'From Zero to Hero: How to Launch a Successful Campaign',
            text: 'To start a campaign first you have to search for your exact target audience .....',
            link: "#"
        },
        {
            image: blogsimage,
            title: 'From Zero to Hero: How to Launch a Successful Campaign',
            text: 'To start a campaign first you have to search for your exact target audience .....',
            link: "#"
        },
        {
            image: blogsimage,
            title: 'From Zero to Hero: How to Launch a Successful Campaign',
            text: 'To start a campaign first you have to search for your exact target audience .....',
            link: "#"
        }
    ];

    return (
        <div className='mt-5 pb-5'>
            <div className='container pb-5'>
                <div className='pt-5'>
                    <h2>Blogs & Articles</h2>
                    <p className='mt-5 grey-texts'>Checkout our latest blogs and articles resources</p>
                </div>
                <div className='d-flex justify-content-center gap-5 flex-wrap pb-5'>
                    {Blogs.map((val, index) => (
                        <Card key={index} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={val.image} />
                            <Card.Body className='text-start'>
                                <Card.Title>{val.title}</Card.Title>
                                <Card.Text className='grey-texts'>{val.text}</Card.Text>
                                <a href={val.link} onClick={PopShow} className='btn-3'>READ MORE</a>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Blogs;
