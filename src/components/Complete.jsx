import React from 'react';
import thankYouIcon from '../assets/images/icon-thank-you.svg';
import Sidebar from './Sidebar';

const Complete = () => {
    return (
        <div className='container complete'>
            <Sidebar />

            <main className='thank-container'>
                <img src={thankYouIcon} className='thank__icon' alt='icon'></img>
                <h1 className='thank__title'>Thank you!</h1>
                <p className='light-gray-text'>
                    Thank you for confirming your subscription!
                    We hope you have fun using our platform. If you ever need support,
                    please feel free to email us at <a href='mailto: support@loremgaming.com' className='mail'>support@loremgaming.com</a>.
                </p>
            </main>
        </div>
    )
}

export default Complete;