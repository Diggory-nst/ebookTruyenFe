
import bg from '../assets/images/background/bg_5.jpg'
import { Section } from '../assets/styles/wverification.css';

const WaitingVerification = () => {
    return (
        <Section style={{
            background: `url(${bg})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }}>
            <div className="waiting-verification">
                <h2>Vui lòng xác thực email để hoàn tất đăng ký tài khoản.</h2>
                <p>Bạn vui lòng kiểm tra phần thư rác (spam) nếu không thấy để kích hoạt email.</p>
            </div>
        </Section>
    )
}

export default WaitingVerification;