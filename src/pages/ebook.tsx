

import { Div } from '../assets/styles/ebook.css';
import { Link, useParams } from 'react-router-dom';

import configDomain from '../configs/config.domain';

import bg from '../assets/images/background/phong_canh.jpg'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Page404 from './page404';

interface Ebook {
    _id: string,
    name: string,
    author: string,
    status: string,
    chap_number: string,
    image: string,
    listChapter: string,
    ebook: string[]
}

const Ebook = () => {

    const domain = configDomain?.domain

    const [isError, setIsError] = useState<boolean>(false)
    const [ebook, setEbook] = useState<Ebook | null>(null)

    // Get slug param
    const param = useParams()
    const slug = param.slug

    const fetchData = async () => {

        const url = `${domain}/ebook/${slug}`

        try {

            const res = await axios.get(url)
            const ebook = res.data.metadata.ebook

            setEbook(ebook)
            setIsError(false)
        } catch (error) {
            setIsError(true)
        }
    }

    // Get data for page
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            {ebook &&
                <Div className="ebook-page" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover' }}>
                    <header>
                        <Link to='/'>
                            <div className="cover-photo"></div>
                        </Link>
                        <div className="grid wide">
                            <div className="border-line"></div>
                            <div className="detail-story-header">
                                <img src={`${domain}/images/` + ebook.image} alt={ebook.name} />
                                <div className="detail-story__info">
                                    <h1 className='name-ebook'>{ebook.name}</h1>
                                    <div className="detail-story__info-1">
                                        <div className="information-ebook">
                                            <span className="author-ebook">{ebook.author}</span>
                                            <span className="status-ebook">{ebook.status}</span>
                                            <h2 className="number-chapter-ebook">{ebook.chap_number} <b>Chương</b></h2>
                                            <button className='btn-forward'>
                                                <a href="https://dgreader.pro/" style={{ color: 'white' }}>Đọc Truyện Tại Đây</a>
                                            </button>
                                        </div>
                                        <div className="install-ebook">
                                            <h1>Tải Ebook</h1>
                                            <div className="part-ebook">
                                                <a className='list-chapter' href={`${domain}/ebooks/` + ebook.listChapter} >Danh sách chương</a>
                                                <ul>
                                                    {ebook.ebook.map((item, index) => (
                                                        <li key={index}>
                                                            <a href={`${domain}/ebooks/` + item}>Phần {index + 1}</a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                </Div>
            }
            {isError === true && < Page404 />}
        </>
    )
}

export default Ebook;