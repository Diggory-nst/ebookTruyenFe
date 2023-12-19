import { useState, useEffect } from "react";
import axios from "axios";

interface HeadersType {
    x_client_id?: string,
    x_rtoken_id?: string,
    authorization?: string
}

interface DataType {
    _id: string,
    name: string,
    slug: string,
    author: string,
    status: string,
    chap_number: string,
    image: string,
    ebook: string
}

type DataTypeArray = DataType[]

const useGet = (url: string, headers: HeadersType) => {

    const [data, setData] = useState<DataTypeArray>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [isError, setIsError] = useState<boolean>(false)
    const [messageError, setMessageError] = useState<string>('')

    useEffect(() => {

        const cancelToken = axios.CancelToken.source()

        async function fetchData() {

            try {
                const res = await axios({
                    url,
                    method: 'GET',
                    headers: {
                        "Content-Type": 'application/json',
                        "x-client-id": headers.x_client_id,
                        "authorization": headers.authorization,
                        "x-rtoken-id": headers.x_rtoken_id
                    },
                    cancelToken: cancelToken.token

                })

                const recieveData = res && res.data ? res.data : []

                if (recieveData.status === 200) {

                    const full_data = recieveData.metadata.ebook

                    if (Array.isArray(full_data)) {
                        setData(full_data)
                    } else {
                        setData([full_data])
                    }
                } else {
                    setData(recieveData)
                }

                setIsLoading(false)
            } catch (error: any) {
                if (axios.isCancel(error)) {
                    console.log('cancelled');
                } else {
                    setIsLoading(false);
                    setIsError(true);
                    setMessageError(error.response.data.message)
                }
            }
        }

        fetchData()

        return () => {
            cancelToken.cancel()
        }
    }, [url])

    return {
        data, isLoading, isError, messageError
    }
}

export default useGet