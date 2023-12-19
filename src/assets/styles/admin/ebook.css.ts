import styled from "styled-components";

const Div = styled.div`

    width: calc(100% - 275px);
    padding: 20px 30px;
    border: 1px solid #e0deda;

    .add-ebook {
        display: flex;
        justify-content: center;
        margin-bottom: 8px;

        span {
            font-size: 2rem;
            color: #128c7e;
            border: 1px solid #128c7e;
            padding: 6px 20px;
            cursor: pointer;
        }
    }

    .ebook {
        display: flex;
        margin-bottom: 40px;
    }

    .ebook-name {
        font-size: 1.8rem;
        line-height: 2.2rem;
        margin-right: 46px;
    }

    .ebook-delete {
        height: 22px;
        font-size: 1.6rem;
        background-color: #5b9c5b;
        padding: 2px 16px;
        color: white;
        border-radius: 3px;
        margin-right: 15px;
        cursor: pointer;
    }

    .ebook-edit {
        height: 22px;
        font-size: 1.6rem;
        background-color: #56b1a6;
        padding: 2px 16px;
        color: white;
        border-radius: 3px;
        cursor: pointer;
    }

    .form-group {
        display: flex;
        flex-direction: column;
        margin-bottom: 24px;
        width: 262px;
    }

    .form-group:nth-of-type(odd) {
        margin-right: 20px;
    }

    .form-group>label {
        font-size: 1.8rem;
        margin-bottom: 15px;
    }

    .form-group>input[type="text"] {
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
        margin-top: 10px;
        font-size: 1.8rem;
        border: 1px solid #128c7e;
        padding: 5px 20px;
        color: #128c7e;
        width: 104px;
        cursor: pointer;
    }

    //Modal

    .modal-body__addEbook {
        display: block;
        width: 584px;
        height: 438px;
        padding: 0px 20px;
        margin: auto;
        background-color: white;
        z-index: 2;
    }

    .modal-body__editEbook {
        display: block;
        width: 584px;
        height: 438px;
        padding: 0px 20px;
        margin: auto;
        background-color: white;
        z-index: 2;
    }

    .information-ebook {
        display: flex;
        flex-wrap: wrap;
    }
`

export {
    Div
}