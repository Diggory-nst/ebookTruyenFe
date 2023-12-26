
import { useEffect, useRef, useState } from "react"
import configDomain from "../../configs/config.domain"
import axios from "axios"
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux'

import { showToastAdmin } from "../../redux";
import { Div } from "../../assets/styles/admin/ebook.css";

import IonIcon from "@reacticons/ionicons"
import Pagination from "../pagination";
import capitalizedText from "../../utils/capitalizedText";

interface Props {
    headers: {
        ['Content-Type']: string | null,
        ['x-client-id']: string | null,
        authorization: string | null,
        ['x-rtoken-id']: string | null
    }
}

interface EbookType {
    _id: string,
    name: string,
    author: string,
    status: string,
    chap_number: string
}

const Ebook: React.FC<Props> = ({ headers }) => {

    const dispatch = useDispatch()

    const domain = configDomain?.domain

    const [isErrorEbook, setIsErrorEbook] = useState<boolean>(false)
    const [messageErrorEbook, setMessageErrorEbook] = useState<string>('')

    const [errorAddEbook, setErrorAddEbook] = useState<boolean>(false)
    const [messageErrorAddEbook, setMessageErrorAddEbook] = useState<string>('')
    const [errorEditEbook, setErrorEditEbook] = useState<boolean>(false)
    const [messageErrorEditEbook, setMessageErrorEditEbook] = useState<string>('')

    const [filterEbook, setFilterEbook] = useState<string>('Hoàn Thành')

    const [ebooks, setEbooks] = useState<EbookType[]>([])

    const [ebookAdd, setEbookAdd] = useState<EbookType>({
        _id: '',
        name: '',
        author: '',
        status: 'Hoàn Thành',
        chap_number: ''
    })

    const [ebookEdit, setEbookEdit] = useState<EbookType>({
        _id: '',
        name: '',
        author: '',
        status: 'Hoàn Thành',
        chap_number: ''
    })

    const [fileImage, setFileImage] = useState<any>(null)
    const [fileListChapter, setFileListChapter] = useState<any>(null)
    const [fileEbook, setFileEbook] = useState<any>(null)

    // Pagination
    const [totalDc, setTotalDc] = useState<number>(0)
    const limitPage = useRef(20)
    const currentPage = useSelector((state: { pagination: { currentPage: number } }) => {
        return state.pagination.currentPage
    })

    // Input
    const inputImageAddRef = useRef<HTMLInputElement | null>(null)
    const inputListChapterAddRef = useRef<HTMLInputElement | null>(null)
    const inputEbookAddRef = useRef<HTMLInputElement | null>(null)

    const inputImageEditRef = useRef<HTMLInputElement | null>(null)
    const inputListChapterEditRef = useRef<HTMLInputElement | null>(null)
    const inputEbookEditRef = useRef<HTMLInputElement | null>(null)

    // Pop up
    const modalRef = useRef(null)
    const modalAddEbookRef = useRef(null)
    const modalEditEbookRef = useRef(null)

    const [modalTag, setModalTag] = useState<HTMLDivElement | null>(null)
    const [modalAddEbookTag, setModalAddEbookTag] = useState<HTMLDivElement | null>(null)
    const [modalEditEbookTag, setModalEditEbookTag] = useState<HTMLDivElement | null>(null)

    // Fetch Data Ebook
    const getAllEbook = async (status: string) => {

        setFilterEbook(status)

        const url = `${domain}/admin/get-ebooks`

        // Get Data Ebook
        try {

            const res = await axios.get(url, { headers, params: { status, limit: limitPage.current, currentPage } })
            const { ebooks, totalDc } = res.data.metadata

            if (ebooks === 0) {
                setIsErrorEbook(true)
                setMessageErrorEbook('Không Có Ebook Nào')
                return
            }

            setTotalDc(totalDc)
            setIsErrorEbook(false)
            setEbooks(ebooks)
        } catch (error: any) {
            setIsErrorEbook(true)
            setMessageErrorEbook(error.response.data.message)
        }
    }

    useEffect(() => {
        getAllEbook(filterEbook)
    }, [currentPage])

    // Handle Pop up
    useEffect(() => {
        setModalTag(modalRef.current)
        setModalAddEbookTag(modalAddEbookRef.current)
        setModalEditEbookTag(modalEditEbookRef.current)
    }, [ebooks])

    const openModalAddEbook = () => {
        if (!modalTag || !modalAddEbookTag) return
        modalTag.style.display = 'flex'
        modalAddEbookTag.style.display = 'block'
    }

    const openModalEditEbook = (indexEbook: number) => {
        if (!modalTag || !modalEditEbookTag) return
        modalTag.style.display = 'flex'
        modalEditEbookTag.style.display = 'block'

        setEbookEdit(ebooks[indexEbook])
    }

    const closeModal = (section: string) => {
        switch (section) {
            case 'addEbook':
                if (!modalTag || !modalAddEbookTag) return
                modalAddEbookTag.style.display = 'none'
                modalTag.style.display = 'none'
                break;
            case 'editEbook':
                if (!modalTag || !modalEditEbookTag) return
                modalEditEbookTag.style.display = 'none'
                modalTag.style.display = 'none'
                break;
            default:
                break;
        }
    }

    // Handle Change
    const handleChangeEbookAdd = (e: any) => {
        setEbookAdd(prev => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }

    const handleChangeEbookEdit = (e: any) => {
        setEbookEdit(prev => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }

    const checkFileEbook = () => {

        const name_file_list = fileListChapter.name
        const size_file_list = fileListChapter.size
        const max_size = 1024 * 1024 * 10 // 5MB

        if (size_file_list > max_size) {
            setErrorAddEbook(true)
            setMessageErrorAddEbook('File Phải Nhỏ Hơn 5MB')
            return false
        }

        const check_name_file_list = name_file_list.substring(name_file_list.length - 3)
        if (check_name_file_list !== '.dg') {
            setErrorAddEbook(true)
            setMessageErrorAddEbook('File Không Hợp Lệ')
            return false
        }

        for (let i = 0; i < fileEbook.length; i++) {

            const name_file_ebook = fileEbook[i].name
            const size_file_ebook = fileEbook[i].size

            if (size_file_ebook > max_size) {
                setErrorAddEbook(true)
                setMessageErrorAddEbook('File Phải Nhỏ Hơn 10MB')
                return false
            }

            const check_name_file_ebook = name_file_ebook.substring(name_file_ebook.length - 3)
            if (check_name_file_ebook !== '.dg') {
                setErrorAddEbook(true)
                setMessageErrorAddEbook('File Không Hợp Lệ')
                return false
            }
        }

        return true
    }

    // Handle User

    const addEbook = async () => {

        if (ebookAdd.name === '' || ebookAdd.author === '' || ebookAdd.chap_number === '' || !fileImage || !fileEbook || !fileListChapter) return

        if (!checkFileEbook()) return

        const name = capitalizedText(ebookAdd.name)
        const author = capitalizedText(ebookAdd.author)

        const url = `${domain}/admin/new-ebook`

        const formData = new FormData()
        formData.append("name", name)
        formData.append("author", author)
        formData.append("status", ebookAdd.status)
        formData.append("chap_number", ebookAdd.chap_number)
        formData.append("image", fileImage, encodeURIComponent(fileImage.name))
        formData.append("listChapter", fileListChapter)

        for (let i = 0; i < fileEbook.length; i++) {
            const fileName = encodeURIComponent(fileEbook[i].name); // Encode filename in UTF-8
            // Append the file with the properly encoded filename
            formData.append("ebook", fileEbook[i], fileName);
        }

        const data = formData

        try {
            const res = await axios.post(url, data, {
                headers: {
                    ...headers,
                    "Content-Type": 'multipart/form-data'
                }
            })
            const ebook = res.data.metadata.ebook

            setEbooks([
                ...ebooks,
                ebook
            ])
            setEbookAdd({
                _id: '',
                name: '',
                author: '',
                status: '',
                chap_number: ''
            })
            setFileEbook(null)
            setFileImage(null)
            setFileListChapter(null)

            if (!inputImageAddRef.current || !inputListChapterAddRef.current || !inputEbookAddRef.current) return
            inputImageAddRef.current.value = ''
            inputListChapterAddRef.current.value = ''
            inputEbookAddRef.current.value = ''

            setIsErrorEbook(false)

            closeModal('addEbook')
        } catch (error: any) {
            setErrorAddEbook(true)
            setMessageErrorAddEbook(error.response?.data.message)
        }
    }

    const deleteEbook = async (ebook_id: string) => {
        try {
            axios.get(`${domain}/admin/delete-ebook/${ebook_id}`, { headers })
        } catch (error: any) {
            dispatch(showToastAdmin({ showToast: true, messageToast: error.response.data.message, typeToast: 'error' }))
        }

        const new_ebooks = ebooks.filter(item => item._id != ebook_id)
        setEbooks(new_ebooks)
    }

    const editEbook = async (ebook_id: string) => {

        const name = capitalizedText(ebookEdit.name)
        const author = capitalizedText(ebookEdit.author)

        const formData = new FormData()
        formData.append("name", name)
        formData.append("author", author)
        formData.append("status", ebookEdit.status)
        formData.append("chap_number", ebookEdit.chap_number)

        const max_size = 1024 * 1024 * 5 // 5MB
        if (fileImage) {
            const sizeFileImage = fileImage.size
            if (sizeFileImage > max_size) {
                setErrorEditEbook(true)
                setMessageErrorEditEbook('File Phải Nhỏ Hơn 5MB')
                return false
            }

            formData.append("image", fileImage, encodeURIComponent(fileImage.name))
        }

        if (fileListChapter) {
            const nameFileList = fileListChapter.name
            const sizeFileList = fileListChapter.size

            if (sizeFileList > max_size) {
                setErrorEditEbook(true)
                setMessageErrorEditEbook('File Phải Nhỏ Hơn 5MB')
                return false
            }

            const checkNameFileList = nameFileList.substring(nameFileList.length - 3)
            if (checkNameFileList !== '.dg') {
                setErrorEditEbook(true)
                setMessageErrorEditEbook('File Không Hợp Lệ')
                return false
            }

            formData.append("listChapter", fileListChapter)
        }

        if (fileEbook) {
            for (let i = 0; i < fileEbook.length; i++) {

                const nameFileEbook = fileEbook[i].name
                const sizeFileEbook = fileEbook[i].size

                if (sizeFileEbook > max_size) {
                    setErrorEditEbook(true)
                    setMessageErrorEditEbook('File Phải Nhỏ Hơn 5MB')
                    return false
                }

                const checkNameFileEbook = nameFileEbook.substring(nameFileEbook.length - 3)
                if (checkNameFileEbook !== '.dg') {
                    setErrorEditEbook(true)
                    setMessageErrorEditEbook('File Không Hợp Lệ')
                    return false
                }
            }

            for (let i = 0; i < fileEbook.length; i++) {
                const fileName = encodeURIComponent(fileEbook[i].name); // Encode filename in UTF-8
                // Append the file with the properly encoded filename
                formData.append("ebook", fileEbook[i], fileName);
            }
        }

        const data = formData
        const url = `${domain}/admin/edit-ebook/${ebook_id}`

        try {
            await axios.patch(url, data, {
                headers: {
                    ...headers,
                    "Content-Type": 'multipart/form-data'
                }
            })
        } catch (error: any) {
            setErrorEditEbook(true)
            setMessageErrorEditEbook(error.response.data.message)
        }

        const ebooksAfterUpdate = ebooks.map(item => {
            if (item._id === ebook_id) {
                return {
                    ...item,
                    name: name,
                    author: author,
                    status: status,
                    chap_number: ebookEdit.chap_number
                }
            } else {
                return item
            }
        })

        setEbooks(ebooksAfterUpdate)
        setFileEbook(null)
        setFileImage(null)
        setFileListChapter(null)

        if (!inputImageEditRef.current || !inputListChapterEditRef.current || !inputEbookEditRef.current) return
        inputImageEditRef.current.value = ''
        inputListChapterEditRef.current.value = ''
        inputEbookEditRef.current.value = ''

        closeModal('editEbook')
    }

    return (
        <Div className="ebooks">
            <div className="add-ebook" onClick={openModalAddEbook}>
                <span>Thêm Ebook</span>
            </div>
            <div className="report-filter">
                <span className={filterEbook === 'Hoàn Thành' ? 'act' : 'inact'} onClick={() => getAllEbook('Hoàn Thành')}>Hoàn Thành</span>
                <span className={filterEbook === 'Đang Ra' ? 'act' : 'inact'} onClick={() => getAllEbook('Đang Ra')}>Đang Ra</span>
            </div>
            {isErrorEbook === false ?
                <div className="row" style={{ minHeight: '244px' }}>
                    {ebooks.map((ebook, index) => {
                        return (
                            <div className="col l-6 xl-6" key={ebook._id}>
                                <div className="ebook">
                                    <h1 className="ebook-name">{ebook.name}</h1>
                                    <h1 className="ebook-delete" onClick={() => deleteEbook(ebook._id)}>Delete</h1>
                                    <h1 className="ebook-edit" onClick={() => openModalEditEbook(index)}>Edit</h1>
                                </div>
                            </div>
                        )
                    })}
                </div>
                :
                <div className="error" style={{ height: 'calc(100% - 94px)' }}>
                    <h1>{messageErrorEbook}</h1>
                </div>
            }
            {isErrorEbook === false && totalDc > limitPage.current && <Pagination totalDc={totalDc} limitPage={limitPage.current} />}
            <div className="modal" style={{ display: 'none' }} ref={modalRef} >
                <div className="modal-overlay"></div>
                <div className="modal-body__addEbook" style={{ display: 'none', height: errorAddEbook ? '468px' : '438px' }} ref={modalAddEbookRef}>
                    <div className="icon-close" onClick={() => closeModal('addEbook')}>
                        <span id="icon-close-2">
                            <IonIcon name="close-outline"></IonIcon>
                        </span>
                    </div>
                    <div className="information-ebook">
                        <div className="form-group">
                            <label>Tên Truyện</label>
                            <input type="text" value={ebookAdd.name} name="name" onChange={handleChangeEbookAdd} />
                        </div>
                        <div className="form-group">
                            <label>Tác Giả</label>
                            <input type="text" value={ebookAdd.author} name="author" onChange={handleChangeEbookAdd} />
                        </div>
                        <div className="form-group">
                            <label>Số Chương</label>
                            <input type="text" value={ebookAdd.chap_number} name="chap_number" onChange={handleChangeEbookAdd} />
                        </div>
                        <div className="form-group">
                            <label>Trạng Thái</label>
                            <select value={ebookAdd.status} name="status" onChange={handleChangeEbookAdd}>
                                <option value="Hoàn Thành">Hoàn Thành</option>
                                <option value="Đang Ra">Đang Ra</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Image</label>
                            <input type="file" ref={inputImageAddRef} name="image" onChange={e => setFileImage(e.target.files?.[0])} />
                        </div>
                        <div className="form-group">
                            <label>File Danh Sách Chương</label>
                            <input type="file" ref={inputListChapterAddRef} name="listChapter" onChange={e => setFileListChapter(e.target.files?.[0])} />
                        </div>
                        <div className="form-group">
                            <label>File Ebook</label>
                            <input type="file" ref={inputEbookAddRef} multiple name="ebook" onChange={e => setFileEbook(e.target.files)} />
                        </div>
                    </div>
                    {errorAddEbook && <h1 className="error-modal">{messageErrorAddEbook}</h1>}
                    <div className="save-info" onClick={() => addEbook()}>Lưu Lại</div>
                </div>
                {ebooks.length > 0 &&
                    <div className="modal-body__editEbook" style={{ display: 'none', height: errorEditEbook ? '468px' : '438px' }} ref={modalEditEbookRef}>
                        <div className="icon-close" onClick={() => closeModal('editEbook')}>
                            <span id="icon-close-2">
                                <IonIcon name="close-outline"></IonIcon>
                            </span>
                        </div>
                        <div className="information-ebook">
                            <div className="form-group">
                                <label>Tên Truyện</label>
                                <input type="text" value={ebookEdit.name} name="name" onChange={handleChangeEbookEdit} />
                            </div>
                            <div className="form-group">
                                <label>Tác Giả</label>
                                <input type="text" value={ebookEdit.author} name="author" onChange={handleChangeEbookEdit} />
                            </div>
                            <div className="form-group">
                                <label>Số Chương</label>
                                <input type="text" value={ebookEdit.chap_number} name="chap_number" onChange={handleChangeEbookEdit} />
                            </div>
                            <div className="form-group">
                                <label>Trạng Thái</label>
                                <select value={ebookEdit.status} name="status" onChange={handleChangeEbookEdit}>
                                    <option value="Hoàn Thành">Hoàn Thành</option>
                                    <option value="Đang Ra">Đang Ra</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Image</label>
                                <input type="file" ref={inputImageEditRef} name="image" onChange={e => setFileImage(e.target.files?.[0])} />
                            </div>
                            <div className="form-group">
                                <label>File Danh Sách Chương</label>
                                <input type="file" ref={inputListChapterEditRef} name="listChapter" onChange={e => setFileListChapter(e.target.files?.[0])} />
                            </div>
                            <div className="form-group">
                                <label>File Ebook</label>
                                <input type="file" ref={inputEbookEditRef} multiple name="ebook" onChange={e => setFileEbook(e.target.files)} />
                            </div>
                        </div>
                        {errorEditEbook && <h1 className="error-modal">{messageErrorEditEbook}</h1>}
                        <div className="save-info" onClick={() => editEbook(ebookEdit._id)}>Lưu Lại</div>
                    </div>
                }
            </div>
        </Div>
    )
}

export default Ebook;