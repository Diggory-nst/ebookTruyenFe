
import axios from 'axios';
import { Div } from '../assets/styles/activate.css';
import configDomain from "../configs/config.domain";
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";

const Activate = () => {

    const domain = configDomain?.domain

    const navigate = useNavigate()

    const param = useParams()
    const username_encode = param.username_encode

    const [isError, setIsError] = useState<boolean>(false)
    const [messageError, setMessageError] = useState<string>('')

    const fetchActivate = async () => {

        const url = `${domain}/user/activate/${username_encode}`

        try {
            await axios.get(url)
            setTimeout(() => {
                navigate('../login-secret')
            }, 1500)
        } catch (error: any) {
            setIsError(true)
            setMessageError(error.response.data.message)
        }
    }

    useEffect(() => {
        fetchActivate()
    }, [])

    return (
        <Div className="activate-page">
            {isError === true ?
                <h1>{messageError}</h1>
                :
                <h1>Tài Khoản Đã Được Kích Hoạt</h1>
            }
        </Div>
    )
}

export default Activate;