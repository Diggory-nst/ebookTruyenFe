
import { useState } from "react";
import { Div } from "../assets/styles/pagination.css";
import { useDispatch } from "react-redux";
import { shareCurrentPage } from "../redux/store";

interface Props {
    totalDc: number,
    limitPage: number
}

const Pagination: React.FC<Props> = ({ totalDc, limitPage }) => {

    const dispatch = useDispatch()

    const totalPage = Math.ceil(totalDc / limitPage)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [startPage, setStartPage] = useState<number>(1)
    const [midPage, setMidPage] = useState<number>(2)
    const [endPage, setEndPage] = useState<number>(3)

    const [fastPage, setFastPage] = useState<string>('')

    const arrPages = Array.from({ length: totalPage }, (_, index) => index + 1)

    const handleNextPage = () => {
        if (currentPage < totalPage) {
            dispatch(shareCurrentPage({ currentPage: (currentPage + 1) }))
            setCurrentPage(prev => prev + 1)
            const conditionA = (((currentPage + 1) === endPage) || ((currentPage + 1) === startPage && (currentPage + 1) > 1))
            const conditionB = (((currentPage + 1) + 1) < (totalPage - 2))
            if (conditionA && conditionB) {
                setStartPage((currentPage + 1) - 1)
                setMidPage((currentPage + 1))
                setEndPage((currentPage + 1) + 1)
            }
        }
    }

    const handlePrevPage = () => {
        if (currentPage > 1) {
            dispatch(shareCurrentPage({ currentPage: (currentPage - 1) }))
            setCurrentPage(prev => prev - 1)
            const conditionA = (((currentPage - 1) === endPage) || ((currentPage - 1) === startPage && (currentPage - 1) > 1))
            const conditionB = (((currentPage - 1) + 1) < (totalPage - 2))
            if (conditionA && conditionB) {
                setStartPage((currentPage - 1) - 1)
                setMidPage((currentPage - 1))
                setEndPage((currentPage - 1) + 1)
            }
        }
    }

    const customPage = (numberPage: number) => {

        dispatch(shareCurrentPage({ currentPage: numberPage }))
        setCurrentPage(numberPage)

        const conditionA = ((numberPage === endPage) || (numberPage === startPage && numberPage > 1))
        const conditionB = ((numberPage + 1) < (totalPage - 2))
        if (conditionA && conditionB) {
            setStartPage(numberPage - 1)
            setMidPage(numberPage)
            setEndPage(numberPage + 1)
        }
    }

    const handleFastPage = () => {

        if (!fastPage) return
        const currentPage = Number(fastPage)
        dispatch(shareCurrentPage({ currentPage }))
        setCurrentPage(currentPage)
        setFastPage('')
    }

    return (
        <Div className="pagination">
            <p className="control prev" onClick={handlePrevPage}>&lt;</p>
            <div className="number-page">
                {totalPage > 6 ?
                    <>
                        <p className={currentPage === startPage ? 'act' : 'inact'} onClick={() => customPage(startPage)}>{startPage}</p>
                        <p className={currentPage === midPage ? 'act' : 'inact'} onClick={() => customPage(midPage)}>{midPage}</p>
                        <p className={currentPage === endPage ? 'act' : 'inact'} onClick={() => customPage(endPage)}>{endPage}</p>
                        {endPage < (totalPage - 3) && <p >...</p>}
                        <p className={currentPage === (totalPage - 2) ? 'act' : 'inact'} onClick={() => customPage(totalPage - 2)}>{totalPage - 2}</p>
                        <p className={currentPage === (totalPage - 1) ? 'act' : 'inact'} onClick={() => customPage(totalPage - 1)}>{totalPage - 1}</p>
                        <p className={currentPage === totalPage ? 'act' : 'inact'} onClick={() => customPage(totalPage)}>{totalPage}</p>
                    </>
                    :
                    arrPages.map(pageNumber => (
                        <p key={pageNumber} className={currentPage === pageNumber ? 'act' : 'inact'} onClick={() => customPage(pageNumber)}>{pageNumber}</p>
                    ))
                }
            </div>
            <p className="control next" onClick={handleNextPage}>&gt;</p>
            <div className="custom-page">
                <input type="text" value={fastPage} onChange={e => setFastPage(e.target.value)} />
                <p onClick={handleFastPage}>Đi</p>
            </div>
        </Div>
    )
}

export default Pagination;