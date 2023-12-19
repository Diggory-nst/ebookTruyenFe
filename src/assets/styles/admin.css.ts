import styled from "styled-components";

const Div = styled.div`

    #toast {
        position: fixed;
        right: 32px;
        top: 6%;
    }

    .toast {
        display: flex;
        align-items: center;
        padding: 6px 20px;
        background-color: white;
        border-radius: 2px;
        min-height: 40px;
        animation: slideInLeft 1s ease forwards, fadeOut 1s 3s linear forwards;

        span {
            font-size: 1.4rem;
            color: white;
            padding: 3px;
            background-color: orange;
            border-radius: 50%;
            margin-right: 20px;
        }

        h1 {
            font-size: 1.6rem;
            line-height: 2rem;
            text-align: center;
            max-width: 235px;
            color: #616262;
        }
    }

    @keyframes slideInLeft {
        from {
            opacity: 0;
            transform: translateX(124%);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes fadeOut {
        to{
            opacity: 0;
            visibility: hidden;
        }
    }
`

const Container = styled.div`

    .personal-body {
        width: 100%;
        display: flex;
        padding-top: 30px;
        min-height: calc(100vh - 374px);
    }

    .personal-category {
        width: 235px;
        margin-right: 40px;
    }

    .personal-category__item {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        padding: 15px 30px;
        cursor: pointer;
    }

    .personal-category__item#active {
        border-radius: 4px;
        background-color: #c15151;
        color: white;
    }

    .personal-category__item>span {
        margin-right: 10px;
        font-size: 2.2rem;
    }

    .personal-category__item>h2 {
        font-size: 1.8rem;
        line-height: 2rem;
    }

    .accounts {
        width: calc(100% - 275px);
        padding: 20px 30px;
        border: 1px solid #e0deda;
    }

    .account {
        display: flex;
        margin-bottom: 40px;
    }

    .account-name {
        font-size: 1.8rem;
        line-height: 2.2rem;
        margin-right: 46px;
    }

    .account-delete {
        height: 22px;
        font-size: 1.6rem;
        background-color: #5b9c5b;
        padding: 2px 16px;
        color: white;
        border-radius: 3px;
        margin-right: 15px;
        cursor: pointer;
    }

    .account-edit {
        height: 22px;
        font-size: 1.6rem;
        background-color: #56b1a6;
        padding: 2px 16px;
        color: white;
        border-radius: 3px;
        cursor: pointer;
    }

    // Modal

    .modal {
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    .modal-overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #89898957;
    }

    .modal-body__account {
        display: block;
        width: 450px;
        height: 588px;
        padding: 0 20px;
        margin: auto;
        background-color: white;
        z-index: 2;
    }

    .icon-close {
        font-size: 2.2rem;
        display: flex;
        justify-content: end;
        margin: 15px 0px;
    }

    .icon-close>span {
        width: 25px;
        height: 25px;
        text-align: center;
        padding-top: 1px;
        transition: transform 0.5s linear;
        cursor: pointer;

        span {
            font-size: 2.2rem;
        }
    }

    .icon-close>span:hover {
        transform: rotate(90deg);
        color: red;
    }

    .action-change {
        margin-top: 25px;
        display: flex;
        justify-content: space-between;
    }

    .action-change__save {
        font-size: 1.8rem;
        border: 1px solid #128c7e;
        padding: 5px 20px;
        color: #128c7e;
        cursor: pointer;
    }

    .action-change__delete {
        font-size: 1.8rem;
        border: 1px solid #c15151;
        padding: 5px 20px;
        color: #c15151;
        cursor: pointer;
    }

    .report-filter {
        margin-bottom: 40px;
        display: flex;
        justify-content: end;
        align-items: center;

        span {
            font-size: 1.8rem;
            margin-right: 20px;
            cursor: pointer;
        }

        .act {
            color: red;
        }
    }

    .delete-inactive-account {
        font-size: 1.6rem;
        background-color: #5b9c5b;
        padding: 6px 16px;
        color: white;
        border-radius: 3px;
        cursor: pointer;
    }

    // ERROR

    .error {
        display: flex;
        justify-content: center;
        align-items: center;

        h1 {
            font-size: 2.2rem;
        }
    }
    
    .error-modal {
        color: #c70a0a;
        text-align: center;
        font-size: 1.6rem;
    }

    .pagination {

        .number-page {

            .act {
                color: #009d96;
                border-color: #009d96;
            }
        }
    }

    /* Container End */

`

export {
    Div, Container
}