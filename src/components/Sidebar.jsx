import React from 'react';
import { NavLink } from 'react-router-dom';

const sidebarSource = [
    {
        num: 1,
        path: '/',
        title: 'YOUR INFO'
    },
    {
        num: 2,
        path: '/step2',
        title: 'SELECT PLAN'
    },
    {
        num: 3,
        path: '/step3',
        title: 'ADD-ONS'
    },
    {
        num: 4,
        path: '/step4',
        title: 'SUMMARY'
    }
]


const Sidebar = () => {
    let activeStyle = {
        backgroundColor: 'hsl(206, 94%, 87%)',
        color: 'hsl(243, 100%, 62%)'
    };

    return <div className='sidebar-container'>
        {sidebarSource.map((item) => {
            return <div key={item.num} className='sidebar__content-box'>
                <div>
                    <NavLink
                        to={item.path}
                        className='sidebar__num'
                        style={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        {item.num}
                    </NavLink>
                </div>
                <div>
                    <p className='sidebar__step light-gray-text'>step {item.num}</p>
                    <p className='sidebar__title'>{item.title}</p>
                </div>
            </div>
        })}
    </div>
}

export default Sidebar;