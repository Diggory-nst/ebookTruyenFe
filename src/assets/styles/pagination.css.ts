import styled from "styled-components";

const Div = styled.div`

    display: flex;
    justify-content: end;

    .control {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.6rem;
        width: 30px;
        height: 30px;
        border: 1px solid #c1c1c1;
        border-radius: 4px;
        cursor: pointer;
        user-select: none;
    }

    .number-page {
        display: flex;
        margin: 0 8px;

        p {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.6rem;
            width: 30px;
            height: 30px;
            border: 1px solid #c1c1c1;
            border-radius: 4px;
            margin-right: 5px;
            color: #666666;
            cursor: pointer;
            user-select: none;
        }

        p:last-child {
            margin: 0;
        }
    }

    .custom-page {

        display: flex;
        align-items: center;

        input {
            height: 30px;
            width: 30px;
            border: 1px solid #c1c1c1;
            border-radius: 4px;
            outline: none;
            margin: 0 8px;
            font-size: 1.6rem;
            color: #666666;
            padding-left: 6px;
        }

        p {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.6rem;
            color: white;
            background-color: #c15151;
            border-radius: 4px;
            height: 30px;
            width: 30px;
            cursor: pointer;
        }
    }
`

export {
    Div
}