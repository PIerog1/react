import React from "react";

const Przycisk1 = ({text="Button", size = 'medium'}) =>{
    const sizeClassMap ={
        small: 'btn-sm',
        medium: '',
        large: 'btn-lg'
    };
    const sizeClass = sizeClassMap[size] || '';
    const [Currentsize, setCurrentSize] = React.useState(size)
    const handleSizeChange = (newSize) =>{
        setCurrentSize(newSize)
    };
    return (
        <div>
            <button style={{fontSize: Currentsize === 'small' ? '14px': Currentsize === 'large' ? '56px' : '28px'}}>{text}</button>
            <br />
            <button 
            className={`btn \({sizeClassMap.small}`} 
            style={{border: '2px solid black', backgroundColor: 'red' }} 
            onClick={() => handleSizeChange('small')}
            >
            Small
            </button>
            <br />
            <button 
            className={`btn \({sizeClassMap.medium}`} 
            style={{border: '2px solid black', backgroundColor: 'green' }} 
            onClick={() => handleSizeChange('medium')}
            >
            medium
            </button>
            <br />
            <button 
            className={`btn \({sizeClassMap.large}`} 
            style={{border: '2px solid black', backgroundColor: 'yellow' }} 
            onClick={() => handleSizeChange('large')}
            >
            large
            </button>
        </div>
    );
};
export default Przycisk1;
