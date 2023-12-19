import IonIcon from "@reacticons/ionicons";
import background from '../assets/images/background/bg_5.jpg'

import { Section } from "../assets/styles/signIn.css";
import { useState } from "react";
import validate from "../utils/validate";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import configDomain from "../configs/config.domain";

interface User {
    email: string,
    name: string,
    password: string,
    confirm_password: string
}

const SignIn = () => {

    const navigate = useNavigate()

    const domain = configDomain?.domain

    const [user, setUser] = useState<User>({
        email: '',
        name: '',
        password: '',
        confirm_password: ''
    })

    const [errorValidate, setErrorValidate] = useState<string | null>(null)
    const [isError, setIsError] = useState<boolean>(false)

    const handleChange = (event: any) => {
        setUser(prev => {
            return { ...prev, [event.target.name]: event.target.value }
        })
    }

    // Validate and Post Data
    // Authentication via Email
    const handleSubmit = async (e: any) => {

        e.preventDefault()

        if (user.email == '' || user.name == '' || user.password == '' || user.confirm_password == '') {
            setIsError(true)
            setErrorValidate('Vui lòng nhập đầy đủ')
            return
        }

        const valid = validate(user.email, user.password, user.confirm_password)

        if (!valid.email) {
            setIsError(true)
            setErrorValidate('Email không hợp lệ')
            return
        }

        if (!valid.password) {
            setIsError(true)
            setErrorValidate('Mật khẩu không khớp')
            return
        }

        const url = `${domain}/user/signup`
        const data = {
            email: user.email,
            name: user.name,
            password: user.password
        }

        axios.post(url, data)
            .then(_res => navigate('waiting-verification'))
            .catch(error => {
                setIsError(true)
                setErrorValidate(error.response.data.message)
            })
    }

    return (
        <Section style={{
            background: `url(${background})`, backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center', backgroundSize: 'cover'
        }}>
            <div className="form-box">
                <div className="form-value">
                    <form>
                        <h2>Đăng Ký</h2>
                        <div className="inputbox">
                            <IonIcon name="mail-outline"></IonIcon>
                            <input type="email" name="email" onChange={handleChange} required />
                            <label>Email</label>
                        </div>
                        <div className="inputbox">
                            <IonIcon name="people-outline"></IonIcon>
                            <input type="text" name="name" onChange={handleChange} required />
                            <label>Tên Đăng Nhập</label>
                        </div>
                        <div className="inputbox">
                            <IonIcon name="lock-closed-outline"></IonIcon>
                            <input type="password" name="password" onChange={handleChange} required />
                            <label>Mật Khẩu</label>
                        </div>
                        <div className="inputbox">
                            <IonIcon name="lock-closed-outline"></IonIcon>
                            <input type="password" name="confirm_password" onChange={handleChange} id="confirm_password" required />
                            <label>Xác Nhận Lại Mật Khẩu</label>
                        </div>
                        {isError &&
                            <p className="error">{errorValidate}</p>
                        }
                        <button type="submit" onClick={handleSubmit}>Đăng Ký</button>
                        <div className="register">
                            <p>Có tài khoản: <Link to="../login-secret">Đăng Nhập</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </Section>
    )
}

export default SignIn;