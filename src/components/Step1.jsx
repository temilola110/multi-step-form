import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../App';
import { Form, Button } from 'react-bootstrap';
import Sidebar from './Sidebar';
import ContentHeader from './ContentHeader';

// These functions are defined globally so that they can be used in other component
// Check for errors in name input
const validateName = (val) => {
    let error = ''
    const nameFeedback = document.querySelector('.feedback--name');
    const nameInput = document.querySelector('.input--name');

    // Remove feedback and red border
    if (nameFeedback && nameInput) {
        nameFeedback.textContent = error;
        nameInput.classList.remove('red-border');
    }

    if (val === '') {
        error = 'This field is required';
        if (nameFeedback && nameInput) {
            nameFeedback.textContent = error;
            nameInput.classList.add('red-border');
        }
        return false;
    }

    return true;
}

// Check for errors in email input
const validateEmail = (val) => {
    let error = '';
    const emailFeedback = document.querySelector('.feedback--email');
    const emailInput = document.querySelector('.input--email');

    if (emailFeedback && emailInput) {
        emailFeedback.textContent = error;
        emailInput.classList.remove('red-border');
    }

    if (val === '') {
        error = 'This field is required';
        if (emailFeedback && emailInput) {
            emailFeedback.textContent = error;
            emailInput.classList.add('red-border');
        }
        return false;
    } else if ((val.indexOf('@') === -1
        || val.indexOf('.') === -1)) {
        error = 'Invalid email format';
        if (emailFeedback && emailInput) {
            emailFeedback.textContent = error;
            emailInput.classList.add('red-border');
        }
        return false;
    }

    return true;
}

// Check for errors in phone input
const validatePhone = (val) => {
    let error = '';
    const phoneFeedback = document.querySelector('.feedback--phone');
    const phoneInput = document.querySelector('.input--phone');

    if (phoneFeedback && phoneInput) {
        phoneFeedback.textContent = error;
        phoneInput.classList.remove('red-border');
    }

    // valid characters
    let pattern = /^[0-9,+]+$/;

    if (val === '') {
        error = 'This field is required';
        if (phoneFeedback && phoneInput) {
            phoneFeedback.textContent = error;
            phoneInput.classList.add('red-border');
        }
        return false;
    } else if (!val.match(pattern)) {
        error = 'Invalid format for phone number';
        if (phoneFeedback && phoneInput) {
            phoneFeedback.textContent = error;
            phoneInput.classList.add('red-border');
        }
        return false;
    }

    return true;
}


const Step1 = () => {
    const { userData, setUserData } = useContext(AppContext);
    const [input, setInput] = useState({
        name: userData.userInfo.name,
        email: userData.userInfo.email,
        phone: userData.userInfo.phone
    });

    const navigate = useNavigate();


    // Update the input state when user interacts
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput((prevValue) => {
            return { ...prevValue, [name]: value }
        })
        name === 'name' && validateName(value);
        name === 'email' && validateEmail(value);
        name === 'phone' && validatePhone(value);
    };

    // Run when user press 'Next step' button and updates userData state
    const handleNextClick = () => {
        validateName(input.name);
        validateEmail(input.email);
        validatePhone(input.phone);
        if (!validateName(input.name) || !validateEmail(input.email) || !validatePhone(input.phone)) {
            alert('Please make change(s) to your input.')
            return;
        }
        setUserData((prev) => {
            return { ...prev, userInfo: { ...input } }
        })
        navigate('/step2')
    };


    return (
        <div className='container'>
            <Sidebar />

            <main className='main-container'>
                <ContentHeader
                    contentTitle='Personal Info'
                    contentDescription='Please provide your name, email address and phone number.'
                />

                <Form className='form-container'>
                    <Form.Group controlId='name'>
                        <div className='label-box'>
                            <Form.Label>Name</Form.Label>
                            <p className='feedback feedback--name'></p>
                        </div>
                        <Form.Control
                            className='input--name'
                            onChange={handleChange}
                            name='name'
                            value={input.name}
                            type='text'
                            placeholder='e.g.Stephen King'
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId='email'>
                        <div className='label-box'>
                            <Form.Label>Email Adress</Form.Label>
                            <p className='feedback feedback--email'></p>
                        </div>
                        <Form.Control
                            className='input--email'
                            onChange={handleChange}
                            name='email'
                            value={input.email}
                            type='email'
                            placeholder='e.g.stephenking@lorem.com'
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId='phone'>
                        <div className='label-box'>
                            <Form.Label>Phone Number</Form.Label>
                            <p className='feedback feedback--phone'></p>
                        </div>
                        <Form.Control
                            className='input--phone'
                            onChange={handleChange}
                            name='phone'
                            value={input.phone}
                            type='phone'
                            placeholder='e.g. +1 234 567 890'
                            required
                        />
                    </Form.Group>
                </Form>
            </main>

            <div className='button-box next__btn-box'>
                <Button onClick={handleNextClick} className='next__btn'>
                    Next Step
                </Button>
            </div>
        </div>
    )
}

export default Step1;
export { validateName, validateEmail, validatePhone };