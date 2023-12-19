
import IonIcon from "@reacticons/ionicons";
import axios from "axios";
import { useState, memo } from "react";
import configDomain from "../../configs/config.domain";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { shareSectionShowAdmin } from "../../redux";

interface Props {
    headers: {
        ['Content-Type']: string | null,
        ['x-client-id']: string | null,
        authorization: string | null,
        ['x-rtoken-id']: string | null
    }
}

const Category: React.FC<Props> = ({ headers }) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const domain = configDomain?.domain

    const [sectionShow, setSectionShow] = useState<string>('account')

    const handleShow = async (section: string) => {
        setSectionShow(section)
        dispatch(shareSectionShowAdmin({ sectionShow: section }))
    }

    const logout = async () => {

        const url = `${domain}/user/logout`
        try {
            await axios.get(url, { headers })

            localStorage.clear()
            navigate('../logIn-secret')
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="personal-category">
            <div onClick={() => handleShow('account')} className="personal-category__item" id={sectionShow === 'account' ? 'active' : 'inactive_1'}>
                <IonIcon className="icon" name="person-outline"></IonIcon>
                <h2>Tài Khoản</h2>
            </div>
            <div onClick={() => handleShow('ebook')} className="personal-category__item" id={sectionShow === 'ebook' ? 'active' : 'inactive_2'}>
                <IonIcon name="planet-outline"></IonIcon>
                <h2>Quản Lý Ebook</h2>
            </div>
            <div onClick={logout} className="personal-category__item">
                <IonIcon name="enter-outline"></IonIcon>
                <h2>Đăng Xuất</h2>
            </div>
        </div>
    )
}

export default memo(Category);