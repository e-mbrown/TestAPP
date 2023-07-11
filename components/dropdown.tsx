import React from 'react';
import ReactDOM  from 'react';
import {Text} from 'react-native';
import  DisplayReceipt from '@comp/receipts';
import '@style';

const Dropdown = () => {
    const [open,setOpen] = React.useState(false);
    const [receipt, SetReceipt] = React.useState([])

    const handleOpen = () => {
        SetReceipt([])
        setOpen(!open);
    };

    const handleMenuOne = (img) => {
        SetReceipt([<DisplayReceipt img={img} key="temp"/>])
        setOpen(!open);
      };


    return (
        <div>
            <Text> Image dropdown area </Text>
            <button onClick={handleOpen}>Choose image</button>
            {open ? (
                <ul className="menu">
                    <li className="menu-item">
                        <button onClick={() => handleMenuOne(0)}>Image A</button>
                    </li>
                    <li className="menu-item">
                        <button onClick={() => handleMenuOne(1)}>Image B</button>
                    </li>                    
                    <li className="menu-item">
                        <button onClick={() => handleMenuOne(2)}>Image C</button>
                    </li>
                    <li className="menu-item">
                        <button onClick={() => handleMenuOne(3)}>Image D</button>
                    </li>
                    <li className="menu-item">
                        <button onClick={() =>handleMenuOne(4)}>Image E</button>
                    </li>         
                </ul>
                ) : null}
                {receipt}
        </div>
    );
};

export default Dropdown;