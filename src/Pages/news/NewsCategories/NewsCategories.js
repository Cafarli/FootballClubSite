import React from "react";
import '../NewsCategories/NewsCategories.css';
import { AiOutlineRight }  from 'react-icons/ai';

export function NewsCategories() {
    return(
        <div className="NewsCategories">
            <h2>Categories</h2>
            <div className="categories">
                <p><AiOutlineRight className="open-icon" />OVERALL</p>
                <p><AiOutlineRight className="open-icon" />PLAYERS</p>

            </div>
        </div>
    );
}