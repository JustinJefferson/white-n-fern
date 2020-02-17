import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'

const Pages = ({pages, display}) => {
    if(display) {
        return (
            <div>
                {pages.map(page =>
                    <Link path={'/' + page.toLowerCase()}>{page}</Link>
                )}
            </div>
        )
    }

    return null;
}

const Sidebar = ({pages, open, change}) => {
    const button = open ? '☰' : 'x';
    return (
        <div>
            <button onClick={change}>{button}</button>

            <p>This is where links go!</p>
        </div>
    )
}

export default Sidebar;