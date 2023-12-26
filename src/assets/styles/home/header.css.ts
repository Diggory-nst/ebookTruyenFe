
import styled from "styled-components";

const Div = styled.header`

    .section-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 0;
        width: 100%;
        height: 110px;
    }

    .section-logo {

        /* padding: 20px 0; */

        div {
            display: flex;
            align-items: center;

            img {
                width: 80px;
            }

            div {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-left: 6px;

                img:first-child {
                    width: 138px;
                    height: 24px;
                    margin-bottom: 8px;
                    transform: translateY(6px);
                }

                img:last-child {
                    width: 196px;
                    height: 34px;
                    transform: translateY(7px);
                }
            }
        }
    }

    .section-search {
        /* display: flex;
        flex-direction: column;
        align-items: center; */
        display: flex;
        justify-content: center;
        width: calc(100% - 282px);
    }

    .search {

        display: flex;
        align-items: center;
        background-color: white;
        border-radius: 5px;
        box-shadow: 0px 3px 6px 0px #7e8d749c, 0px 1px 3px 0px #7e8d749c;
        /* box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.08); */
        position: relative;

        span {
            font-size: 2.2rem;
            color: #bec7d5;
            margin-right: 18px;
            cursor: pointer;
        }

        input {
            border: none;
            width: 434px;
            height: 40px;
            padding-left: 20px;
            font-size: 1.8rem;
            outline: none;
            margin-right: 18px;
            background-color: white;
            color: #000000ad;
            border-radius: 5px;
        }

        input::placeholder {
            color: #bec7d5;
        }
    }

    .show_list_search{
        /* display: none; */
        display: flex;
        flex-direction: column;
        width: 492px;
        margin-top: 48px;
        background-color: white;
        border-radius: 5px;
        box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.4), 0px 1px 3px 0px rgba(0, 0, 0, 0.08);
        position: absolute;
        max-height: 245px;
        overflow-y: auto;
        z-index: 10;
    
        a {
            margin-left: 10px;
            margin-top: 15px;
            font-size: 1.8rem;
            line-height: 2.2rem;
            cursor: pointer;
        }

        a:last-child{
            margin-bottom: 15px;
        }

        h1 {
            margin-left: 10px;
            margin-top: 15px;
            font-size: 1.8rem;
            margin-bottom: 15px;
            text-align: center;
        }
    }
`

export {
    Div
}