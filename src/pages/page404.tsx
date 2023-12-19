
import img_404 from '../assets/images/404_gift.gif'
import { Section } from '../assets/styles/page404.css';

import { Link } from 'react-router-dom';

const Page404 = () => {
    return (
        <Section className="page_404">
            <div className="background" style={{ backgroundImage: `url(${img_404})` }}>
                <h1>404</h1>
            </div>
            <div className="control">
                <p>Nội dung bạn truy cập không tồn tại hoặc đã bị xóa, vui lòng quay lại trang chủ.</p>
                <Link to='/'>Quay lại trang chủ</Link>
            </div>
        </Section>
    )
}

export default Page404;