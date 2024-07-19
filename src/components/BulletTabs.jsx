import React, { useState } from 'react';

const BulletTabs = ({ onSelect }) => {
    const [items, setItems] = useState([
        { id: 1, text: '• Front-end •' },
        { id: 2, text: 'Back-end' },
        { id: 3, text: 'Tools/etc' }
    ]);

    const handleClick = (id) => {
        setItems((prevItems) => 
            prevItems.map(item => 
                item.id === id
                    ? { ...item, text: `• ${item.text.replace(/^• | •$/g, '')} •` }
                    : { ...item, text: item.text.replace(/^• | •$/g, '') }
            )
        );
        onSelect(id);
    };

    const textStyle = { color: 'white', cursor: 'default' }; // Define inline style

    return (
        <div className='w-full flex justify-center font-bold'>
            {items.map(item => (
                <div 
                    className='w-52 flex justify-center' 
                    style={textStyle} // Apply inline style
                    key={item.id} 
                    onClick={() => handleClick(item.id)}
                >
                    {item.text}
                </div>
            ))}
        </div>
    );
};

export default BulletTabs;



