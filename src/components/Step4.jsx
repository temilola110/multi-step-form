import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../App';
import { validateName, validateEmail, validatePhone } from './Step1';
import { Form, Button } from 'react-bootstrap';
import Sidebar from './Sidebar';
import ContentHeader from './ContentHeader';
import SummaryCard from './SummaryCard';


const Step4 = () => {
    const { userData, setUserData } = useContext(AppContext);
    const navigate = useNavigate();

    // Run when user presses 'confirm' button
    const handleSubmit = (e) => {
        // Prevent reloading the page
        e.preventDefault();
        const { name, email, phone } = userData.userInfo;

        // Check if user has provided required info
        if (!validateName(name) || !validateEmail(email) || !validatePhone(phone)) {
            alert('Please provide personal info in Step 1. After filling the form, click "Next Step" to register your data.');
            // Redirect user to step1
            navigate('/')
            return;
        }

        // POST USER DATA TO THE SERVER HERE

        // Reset user data
        setUserData({
            userInfo: {
                name: '',
                email: '',
                phone: ''
            },
            plan: {
                planTitle: 'Arcade',
                paymentPlan: 'monthly',
                price: 9
            },
            addOns: []
        });

        navigate('/complete');
    }


    return (
        <div className='container'>
            <Sidebar />

            <div className='main-container'>
                <ContentHeader
                    contentTitle='Finishing up'
                    contentDescription='Double-check everything looks OK before confirming.'
                />
                <SummaryCard />
            </div>

            <Form onSubmit={handleSubmit} className='summary'>
                <div className='button-box'>
                    <Link className='go-back light-gray-text' to='/step3'>Go Back</Link>
                    <Button type='submit' className='confirm__btn'>
                        Confirm
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default Step4;