import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'

const Pages = ({pages, display}) => {
    if(display) {
        return (
            <div>
                <Link to="/">Home</Link>
                {pages.map(page =>
                    <Link to={"/" + page.toLowerCase()}>{page}</Link>
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
            <Pages pages={pages} display={open} />
            <p>This is where links go!</p>
        </div>
    )
}

export default Sidebar;