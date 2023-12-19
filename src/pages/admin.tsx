
import Header from "../components/admin/header";
import Category from "../components/admin/category";
import Account from "../components/admin/account";
import Ebook from "../components/admin/ebook";
import Toast from "../components/toast";
import { Div, Container } from "../assets/styles/admin.css";

import { useSelector } from 'react-redux'
import { useMemo } from "react";

const Admin = () => {

    const { categoryAdmin, accountAdmin } = useSelector((state: {
        categoryAdmin: { sectionShow: string },
        accountAdmin: {
            errorAuth: boolean,
            messageErrorAuth: string
        }
    }) => {
        return state
    })

    const sectionShow = categoryAdmin.sectionShow
    const isErrorAuth = accountAdmin.errorAuth
    const messageErrorAuth = accountAdmin.messageErrorAuth

    const headers = useMemo(() => {
        // Retrieve Token from LocalStorage
        const client_id = localStorage.getItem('client_id')
        const access_token = localStorage.getItem('access_token')
        const refresh_token = localStorage.getItem('refresh_token')

        // Set headers requets
        return {
            "Content-Type": 'application/json',
            "x-client-id": client_id,
            "authorization": access_token,
            "x-rtoken-id": refresh_token
        }
    }, [])

    return (
        <>
            {isErrorAuth &&
                <div style={{ display: "flex", height: '100vh', justifyContent: "center", alignItems: "center" }}>
                    <h1 style={{ fontSize: "3rem", lineHeight: "3.2rem" }}>{messageErrorAuth}</h1>
                </div>
            }
            {!isErrorAuth &&
                <Div className="home_page">
                    <Toast />
                    <Header />
                    <Container className="container">
                        <div className="grid wide">
                            <div className="personal-body">
                                <Category headers={headers} />
                                {sectionShow === 'account' && <Account headers={headers} />}
                                {sectionShow === 'ebook' && <Ebook headers={headers} />}
                            </div>
                        </div>
                    </Container>
                </Div>
            }
        </>
    )
}

export default Admin;