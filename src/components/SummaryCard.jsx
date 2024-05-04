import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../App';

const SummaryCard = () => {
    const { userData } = useContext(AppContext);
    const { plan, addOns } = userData;

    // Calculate total price of selected plan + optional add-ons
    const addOnsTotal = addOns.map((item) => {
        return plan.paymentPlan === 'monthly' ? item.monthlyPrice : item.yearlyPrice;
    })
    const totalPrice = [...addOnsTotal, plan.price].reduce((acc, curr) => acc + curr)

    return (
        <div className='sum-container'>
            <div className='sum-plans-container'>
                <div className='sum-plan-box'>
                    <div>
                        <p className='sum-plan__title'>
                            {`${plan.planTitle} (${plan.paymentPlan})`}
                        </p>
                        <p>
                            <Link className='change-link' to='/step2'>Change</Link>
                        </p>
                    </div>
                    <div>
                        <p className='sum-plan__price'>${plan.price}/{plan.paymentPlan === 'monthly' ? 'mo' : 'yr'}</p>
                    </div>
                </div>
                <div className='sum-addons-container'>
                    {addOns.length > 0 && addOns.map((item) => {
                        return <div key={item.addOnsTitle} className='sum-addon'>
                            <p className='light-gray-text'>{item.addOnsTitle}</p>
                            <p className='sum-addon__price'>
                                {plan.paymentPlan === 'monthly' ? `+$${item.monthlyPrice}/mo` : `+$${item.yearlyPrice}/yr`}
                            </p>
                        </div>
                    })}
                </div>
            </div>
            <div className='total-container'>
                <p className='light-gray-text'>Total (per year)</p>
                <p className='total__price'>
                    {plan.paymentPlan === 'monthly' ? `$${totalPrice}/mo` : `$${totalPrice}/yr`}
                </p>
            </div>
        </div>
    )
}

export default SummaryCard;