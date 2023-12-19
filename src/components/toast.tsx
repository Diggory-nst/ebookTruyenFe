
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, memo } from 'react';
import { showToastAdmin } from '../redux';
import IonIcon from '@reacticons/ionicons';

const Toast = () => {

    const dispatch = useDispatch()

    const { showToast, typeToast, messageToast } = useSelector((state: {
        generalAdmin: {
            showToast: boolean,
            typeToast: string,
            messageToast: string
        }
    }) => {
        return state.generalAdmin
    })

    useEffect(() => {

        let clearSetTime: any

        if (showToast) {
            clearSetTime = setTimeout(() => {
                dispatch(showToastAdmin({ showToast: false, typeToast: 'success', messageToast: '' }))
            }, 3500)
        }

        return () => {
            clearTimeout(clearSetTime)
        }
    }, [showToast])

    return (
        <div id="toast">
            {showToast &&
                <div className="toast">
                    {typeToast === 'success' &&
                        <IonIcon name="checkmark-outline" style={{ backgroundColor: "#33c333" }}></IonIcon>
                    }
                    {typeToast === "error" &&
                        <IonIcon name="alert-outline"></IonIcon>
                    }
                    <h1>{messageToast}</h1>
                </div>
            }
        </div>
    )
}

export default memo(Toast);