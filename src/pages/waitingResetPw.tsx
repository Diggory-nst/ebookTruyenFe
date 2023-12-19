
import bg from '../assets/images/background/bg_5.jpg'
import { Section } from '../assets/styles/wverification.css';

const WaitingResetPw = () => {
    return (
        <Section style={{
            background: `url(${bg})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }}>
            <div className="waiting-verification">
                <h2>Vui lòng click vào đường link trong email để hoàn tất tiếp tục lấy lại mật khẩu.</h2>
                <p>Bạn vui lòng kiểm tra phần thư rác (spam) nếu không thấy để kích hoạt email.</p>
            </div>
        </Section>
    )
}

export default WaitingResetPw;