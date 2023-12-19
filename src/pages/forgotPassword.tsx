import IonIcon from "@reacticons/ionicons";
import background from '../assets/images/background/bg_5.jpg'

import { Section } from "../assets/styles/forgot_password.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import configDomain from "../configs/config.domain";

const FogotPassword = () => {

    const navigate = useNavigate()

    const domain = configDomain?.domain

    const [email, setEmail] = useState<string>('')
    const [isError, setIsError] = useState<boolean>(false)
    const [messageError, setMessageError] = useState<string>('')

    const handleSubmit = (e: any) => {
        e.preventDefault()

        const url = `${domain}/user/forgot-password`
        const data = {
            email
        }

        axios.post(url, data)
            .then(_res => navigate('../waiting-reset-password'))
            .catch(error => {
                setIsError(true)
                setMessageError(error.response.data.message)
            })
    }

    return (
        <Section style={{ background: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
            <div className="form-box">
                <div className="form-value">
                    <form>
                        <h2>Lấy Lại Mật Khẩu</h2>
                        <p>
                            Vui lòng nhập địa chỉ Email và Chúng tôi sẽ gửi link để lấy lại mật khẩu
                        </p>
                        <p>
                            Bạn vui lòng kiểm tra phần thư rác (spam) trong email!
                        </p>
                        <div className="inputbox">
                            <IonIcon name="mail-outline"></IonIcon>
                            <input type="email" name="new-email" required onChange={e => setEmail(e.target.value)} />
                            <label>Email</label>
                        </div>
                        {isError &&
                            <p className="error">{messageError}</p>
                        }
                        <button type="submit" onClick={handleSubmit}>Tiếp Tục</button>
                    </form>
                </div>
            </div>
        </Section>
    )
}

export default FogotPassword;