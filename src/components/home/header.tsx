
import logo_img from '../../assets/images/logo/logo_img.png'
import logo_text from '../../assets/images/logo/logo_text.png'
import logo_sologan from '../../assets/images/logo/text-slogan.png'

import { Div } from '../../assets/styles/home/header.css';
import { Link } from 'react-router-dom';
import IonIcon from '@reacticons/ionicons';

import configDomain from '../../configs/config.domain';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

interface Ebook {
    _id: string,
    name: string,
    slug: string
}

const Header = () => {

    const domain = configDomain?.domain

    const [isError, setIsError] = useState<boolean>(false)
    const [messageError, setMessageError] = useState<string>('')

    const [search, setSearch] = useState<string>('')
    const [ebooks, setEbooks] = useState<Ebook[]>([])
    const [isPopup, setIsPopup] = useState<boolean>(false)

    const listSearchRef = useRef<HTMLDivElement | null>(null)

    // Get data for Search function
    useEffect(() => {
        const url = `${domain}/ebook/search`
        const data = {
            name_ebook: search
        }

        if (search == '') {
            setIsPopup(false)
            return
        }

        const fetchData = setTimeout(async () => {
            const res = await axios.post(url, data)
            const ebooks = res.data.metadata.ebooks

            setIsPopup(true)
            if (ebooks.length === 0) {
                setIsError(true)
                setMessageError('Không có kết quả nào')
                return
            }

            setIsError(false)
            setEbooks(ebooks)
        }, 500)

        const handleCloseOption = (event: any) => {

            if (!listSearchRef.current?.contains(event.target)) {
                setIsPopup(false)
            }
        }

        document.addEventListener('click', handleCloseOption)

        return () => {
            clearTimeout(fetchData)
            document.removeEventListener('click', handleCloseOption)
        }
    }, [search])

    return (
        <Div className='header'>
            <div className="grid wide">
                <div className="section-header">
                    <div className="section-logo">
                        <div>
                            <img src={logo_img} alt='logo-img' />
                            <div>
                                <img src={logo_text} alt='logo-text' />
                                <img src={logo_sologan} alt='logo-sologan' />
                            </div>
                        </div>
                    </div>
                    <div className="section-search">
                        <div className="search">
                            <input type="text" placeholder='Tìm kiếm' onChange={e => setSearch(e.target.value)} />
                            <IonIcon name="search-outline"></IonIcon>
                        </div>
                        {isPopup &&
                            <div className="show_list_search" ref={listSearchRef}>
                                {isError === false ?
                                    ebooks.map(ebook => {
                                        return (
                                            <Link to={`/ebook/${ebook.slug}`} key={ebook._id}>{ebook.name}</Link>
                                        )
                                    })
                                    :
                                    <h1>{messageError}</h1>
                                }
                            </div>
                        }
                    </div>
                </div>
            </div>
        </Div>
    )
}

export default Header;