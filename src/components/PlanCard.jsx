import React from 'react';
import Card from 'react-bootstrap/Card';


const PlanCard = ({ id, imgSrc, planTitle, price, benefit, handleClick, selectedPlan }) => {
    const clickedStyle = {
        backgroundColor: 'hsl(231, 100%, 99%)',
        border: '1px solid hsl(253, 77%, 61%)'
    }

    return (
        <Card onClick={handleClick} id={id} style={selectedPlan === planTitle ? clickedStyle : null}>
            <Card.Img variant='top' src={imgSrc} className='plan__icon' id={id} />
            <Card.Body id={id}>
                <Card.Title id={id}>{planTitle}</Card.Title>
                <Card.Text id={id} className='light-gray-text'>{price}</Card.Text>
                <Card.Text id={id}>{benefit}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default PlanCard