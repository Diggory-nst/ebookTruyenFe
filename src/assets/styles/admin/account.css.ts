import styled from "styled-components";

const Div = styled.div`

    .form-group {
        display: flex;
        flex-direction: column;
        margin-bottom: 16px;
    }

    .form-group>label {
        font-size: 1.8rem;
        margin-bottom: 15px;
    }

    .form-group>input {
        height: 32px;
        border: 1px solid;
        border-color: #e0deda;
        padding-left: 15px;
        font-size: 1.6rem;
    }

    .form-group>input:focus {
        color: #495057;
        background-color: #fff;
        border-color: #80bdff;
        outline: 0;
        font-size: 1.7rem;
    }

    .form-group>select {
        height: 32px;
        font-size: 1.6rem;
        outline: none;
        border-color: #e0deda;
        padding-left: 15px;
        padding-right: 15px;
    }

    .save-info {
        display: block;
        margin-top: 25px;
        font-size: 1.8rem;
        border: 1px solid #128c7e;
        padding: 5px 20px;
        color: #128c7e;
        width: 104px;
        cursor: pointer;
    }
`

export {
    Div
}