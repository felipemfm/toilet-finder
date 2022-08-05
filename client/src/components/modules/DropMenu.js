import React from 'react';
import { useEffect, useState } from 'react';

import '../../styles/components/modules/DropMenu.css';

export default function DropMenu(props) {
    return (
        <div>
            <select class='drop_menu' onChange={e => props.setMode(e.target.value)}>
                <option value="closest_bathroom">Closest Bathroom</option>
                <option value="public_bathroom">Public Bathroom</option>
                <option value="non_public_bathroom">Non-Public Bathroom</option>
                <option value="all_bathrooms">All Bathrooms</option>
            </select> 
        </div>
        
    )
}