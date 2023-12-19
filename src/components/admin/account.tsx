
import { useEffect, useRef, useState } from "react"
import configDomain from "../../configs/config.domain"
import axios from "axios"
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux'

import { Div } from "../../assets/styles/admin/account.css";
import { showToastAdmin, errorAuthAdmin } from "../../redux";

import IonIcon from "@reacticons/ionicons"
import Pagination from "../pagination";

interface Props {
    headers: {
        ['Content-Type']: string | null,
        ['x-client-id']: string | null,
        authorization: string | null,
        ['x-rtoken-id']: string | null
    }
}

interface UserType {
    _id: string,
    name: string,
    email: string,
    status: string,
    roles: string
}

const Account: React.FC<Props> = ({ headers }) => {

    const dispatch = useDispatch()

    const domain = configDomain?.domain

    const [isErrorAccount, setIsErrorAccount] = useState<boolean>(false)
    const [messageErrorAccount, setMessageErrorAccount] = useState<string>('')

    const [errorEditUser, setErrorEditUser] = useState<boolean>(false)
    const [messageErrorEditUser, setMessageErrorEditUser] = useState<string>('')

    const [filterUser, setFilterUser] = useState<string>('active')

    const [users, setUsers] = useState<UserType[]>([])

    const [user, setUser] = useState<UserType>({
        _id: '',
        name: '',
        email: '',
        status: '',
        roles: ''
    })

    // Pagination
    const [totalDc, setTotalDc] = useState<number>(0)
    const limitPage = useRef(2)
    const currentPage = useSelector((state: { pagination: { currentPage: number } }) => {
        return state.pagination.currentPage
    })

    // Pop up
    const modalRef = useRef(null)

    const [modalTag, setModalTag] = useState<HTMLDivElement | null>(null)

    const getAllUser = async (status: string) => {

        setFilterUser(status)

        const url_user = `${domain}/admin`

        // Get Data User
        try {

            const res = await axios.get(url_user, { headers, params: { status, limit: limitPage.current, currentPage } })
            const { users, totalDc } = res.data.metadata

            if (users === 0) {
                setIsErrorAccount(true)
                setMessageErrorAccount('Không Có Tài Khoản Nào')
                return
            }

            setTotalDc(totalDc)
            setIsErrorAccount(false)
            setUsers(users)
        } catch (error: any) {
            if (error.response?.data.status === "UNAUTHORIZED") {
                dispatch(errorAuthAdmin({ errorAuth: true, messageErrorAuth: error.response?.data.message }))
                return
            }

            setIsErrorAccount(true)
            setMessageErrorAccount(error.response?.data.message)
        }
    }

    useEffect(() => {
        getAllUser(filterUser)
    }, [currentPage])

    useEffect(() => {
        setModalTag(modalRef.current)
    }, [users])

    const openModalAccount = (indexUser: number) => {
        if (!modalTag) return
        modalTag.style.display = 'flex'

        setUser(users[indexUser])
    }

    const closeModal = () => {
        if (!modalTag) return
        modalTag.style.display = 'none'
    }

    // Handle Change
    const handleChangeUser = (e: any) => {
        setUser(prev => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }

    // Handle User
    const deleteUser = async (user_id: string) => {
        try {
            axios.get(`${domain}/admin/delete-user/${user_id}`, { headers })
        } catch (error: any) {
            dispatch(showToastAdmin({ showToast: true, messageToast: error.response.data.message, typeToast: 'error' }))
        }

        const new_users = users.filter(item => item._id != user_id)
        setUsers(new_users)
    }

    const deleteInactiveAccount = () => {
        const url = `${domain}/admin/delete-inactive-account`
        axios.get(url, { headers })
    }

    const editUser = async (user_id: string) => {

        const url = `${domain}/admin/edit-user/${user_id}`
        const data = user

        try {
            await axios.patch(url, data, { headers })
        } catch (error: any) {
            setErrorEditUser(true)
            setMessageErrorEditUser(error.response.data.message)
        }

        const usersAfterUpdate = users.map(item => {
            if (item._id === user_id) {
                return {
                    ...item,
                    status: user.status,
                    roles: user.roles
                }
            } else {
                return item
            }
        })

        setUsers(usersAfterUpdate)
        closeModal()
    }

    return (
        <Div className="accounts">
            <div className="report-filter">
                <span className={filterUser === 'active' ? 'act' : 'inact'} onClick={() => getAllUser('active')}>Active</span>
                <span className={filterUser === 'inactive' ? 'act' : 'inact'} onClick={() => getAllUser('inactive')}>Inactive</span>
                <div className="delete-inactive-account" onClick={deleteInactiveAccount}>Delete Inactive Accounts</div>
            </div>
            {isErrorAccount === false ?
                <div className="row" style={{ minHeight: '244px' }}>
                    {users.map((user, index) => {
                        return (
                            <div className="col l-6 xl-4" key={user._id}>
                                <div className="account">
                                    <h1 className="account-name">{user.name}</h1>
                                    <h1 className="account-delete" onClick={() => deleteUser(user._id)}>Delete</h1>
                                    <h1 className="account-edit" onClick={() => openModalAccount(index)}>Edit</h1>
                                </div>
                            </div>
                        )
                    })}
                </div>
                :
                <div className="error" style={{ height: 'calc(100% - 68px)' }}>
                    <h1>{messageErrorAccount}</h1>
                </div>
            }
            {isErrorAccount === false && totalDc > limitPage.current && <Pagination totalDc={totalDc} limitPage={limitPage.current} />}
            <div className="modal" style={{ display: 'none' }} ref={modalRef} >
                <div className="modal-overlay"></div>
                <div className="modal-body__account" style={{ height: errorEditUser ? '460px' : '430px' }}>
                    <div className="icon-close" onClick={closeModal}>
                        <span id="icon-close-1">
                            <IonIcon name="close-outline"></IonIcon>
                        </span>
                    </div>
                    <div className="information-account">
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" value={user.name} disabled />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" value={user.email} disabled />
                        </div>
                        <div className="form-group">
                            <label>Status</label>
                            <select value={user.status} name="status" onChange={handleChangeUser}>
                                <option value="active">active</option>
                                <option value="inactive">inactive</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Role</label>
                            <select value={user.roles} name="roles" onChange={handleChangeUser}>
                                <option value="user">user</option>
                                <option value="admin">admin</option>
                            </select>
                        </div>
                        {errorEditUser && <h1 className="error-modal">{messageErrorEditUser}</h1>}
                        <div className="save-info" onClick={() => editUser(user._id)}>Lưu Lại</div>
                    </div>
                </div>
            </div>
        </Div>
    )
}

export default Account;