
import { memo } from 'react'
import header_img from '../../assets/images/header_img.jpg'

import { Div } from '../../assets/styles/admin/header.css';

const Header = () => {
    return (
        <Div className='header'>
            <div style={{ backgroundImage: `url(${header_img})`, backgroundPosition: '0px -228px' }}></div>
        </Div>
    )
}

export default memo(Header);