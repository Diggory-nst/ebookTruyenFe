
import '../assets/styles/base.css'
import '../assets/styles/grid_system.css'

import { Div, Story } from '../assets/styles/home.css'
import Header from '../components/home/header'
import Footer from '../components/home/footer'

import { Link } from 'react-router-dom'
import IonIcon from '@reacticons/ionicons'
import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

import axios from 'axios'
import configDomain from '../configs/config.domain'
import Pagination from '../components/pagination'

interface Ebook {
    _id: string,
    name: string,
    slug: string,
    author: string,
    status: string,
    chap_number: string,
    image: string,
}

const Home = () => {

    const domain = configDomain?.domain

    const [isError, setIsError] = useState<boolean>(false)
    const [messageError, setMessageError] = useState<string>('')

    const [ebooks, setEbooks] = useState<Ebook[]>([])
    const [filterEbook, setFilterEbook] = useState<string>('Mới Nhất')

    // Pagination
    const [totalDc, setTotalDc] = useState<number>(0)
    const limitPage = useRef(20)
    const currentPage = useSelector((state: { pagination: { currentPage: number } }) => {
        return state.pagination.currentPage
    })

    const getEbooks = async (status: string) => {

        setFilterEbook(status)

        const url = `${domain}`

        try {
            const res = await axios.get(url, { params: { status, limit: limitPage.current, currentPage } })
            const { ebooks, totalDc } = res.data.metadata

            if (ebooks === 0) {
                setIsError(true)
                setMessageError('Không Có Ebook Nào')
                return
            }

            setTotalDc(totalDc)
            setIsError(false)
            setEbooks(ebooks)
        } catch (error: any) {
            setIsError(true)
            setMessageError(error.response.data.message)
        }
    }

    useEffect(() => {
        getEbooks(filterEbook)
    }, [currentPage])

    useEffect(() => {
        const hasSeenAlert = localStorage.getItem('hasSeenAlert');

        if (!hasSeenAlert) {
            alert("Trang web chỉ tương thích với Máy Tính. Chúng tôi sẽ sớm hoàn thiện trang web để tương thích với mọi thiết bị. Xin lỗi vì sự bất tiện này");
            localStorage.setItem('hasSeenAlert', 'true');
        }
    }, [])

    return (
        <Div className='home-page'>
            <Header />
            <div className='space'></div>
            <div className="container">
                <div className="grid wide">
                    <Story className="section-story">
                        <div className="sum-story">
                            <div className='number-of-story'>
                                <IonIcon name="dice-outline"></IonIcon>
                                <h3>{totalDc} Truyện ( Tất cả Ebook đều là Dịch thuần Việt )</h3>
                            </div>
                            <div className='sort-by'>
                                <h4 className={filterEbook === 'Mới Nhất' ? 'active' : 'no-active'} onClick={() => getEbooks('Mới Nhất')}>Mới Nhất</h4>
                                <h4 className={filterEbook === 'Hoàn Thành' ? 'active' : 'no-active'} onClick={() => getEbooks('Hoàn Thành')}>Hoàn Thành</h4>
                                <h4 className={filterEbook === 'Đang Ra' ? 'active' : 'no-active'} onClick={() => getEbooks('Đang Ra')}>Đang Ra</h4>
                            </div>
                        </div>
                        <div className="list-story">
                            <h1 style={{ marginTop: '20px', textAlign: 'center', color: '#000000ad' }}>Ebook được cập nhật theo yêu cầu của mọi người. Liên hệ ngay nhé!</h1>
                            {isError === false ?
                                <>
                                    <div className='have-ebook'>
                                        {ebooks.map(ebook => {
                                            return (
                                                <Link to={`/ebook/${ebook.slug}`} className="item-story" key={ebook._id}>
                                                    <div className="image">
                                                        <img src={`${domain}/images/` + ebook.image} alt={ebook.name} />
                                                    </div>
                                                    <div className="information">
                                                        <h1 className="name">{ebook.name}</h1>
                                                        <h2 className="author">{ebook.author}</h2>
                                                        <h3 className="status">{ebook.status}</h3>
                                                    </div>
                                                </Link>
                                            )
                                        })}
                                    </div>
                                    {totalDc > limitPage.current && <Pagination totalDc={totalDc} limitPage={limitPage.current} />}
                                </>
                                :
                                <div className='non-ebook'>
                                    <h1>{messageError}</h1>
                                </div>
                            }
                        </div>
                    </Story>
                </div>
            </div>
            <Footer />
        </Div>
    )
}

export default Home;