import React from 'react';
import './Items.css';
import one from './img/producto1.jpg';
import two from './img/producto2.jpg';
import three from './img/producto3.jpg';
import Image from 'react-bootstrap/Image';
import ItemCount from './ItemCount/ItemCount';


function Items (){
    return(
        <div className='items'>
            <ul className='items'>
                <li>
                    <Image className="producto" src={one}/>
                    <ItemCount/>
                </li>
                <li>
                    <Image className="producto" src={two}/>
                    <ItemCount/>
                </li>
                <li>
                    <Image className="producto" src={three}/>
                    <ItemCount/>
                </li>
            </ul>
        </div>
    );
}

export default Items;