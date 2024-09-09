import React, { useState } from 'react';

const BulletTabs = ({ onSelect }) => {
    const [hoveredId, setHoveredId] = useState(null);

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

    // Ensure consistent height with line-height and flex properties
    const textStyle = { 
        color: 'white', 
        cursor: 'default',
        lineHeight: '2rem', // Consistent line height
        transition: 'font-size 0.2s ease-in-out' // Smooth transition for size change
    };

    return (
        <div className='w-full flex justify-center font-bold'>
            {items.map(item => (
                <div 
                    className={`w-52 flex justify-center items-center ${hoveredId === item.id ? 'text-2xl' : 'text-xl'}`} 
                    style={textStyle}
                    key={item.id} 
                    onClick={() => handleClick(item.id)}
                    onMouseEnter={() => setHoveredId(item.id)}
                    onMouseLeave={() => setHoveredId(null)}
                >
                    {item.text}
                </div>
            ))}
        </div>
    );
};

export default BulletTabs;


