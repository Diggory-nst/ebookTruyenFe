import styled from "styled-components";

const Div = styled.div`

    .space {
        height: 40px;
        background-color: #7e8d74;
    }

    .container {
        margin-top: 40px;
    }
`

const Story = styled.div`

    .sum-story {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 10px;
        border-bottom: 1px solid #c3c3c3;

        div {
            display: flex;
            align-items: center;
        }

        .number-of-story{
            span {
                margin-right: 10px;
                font-size: 2.6rem;
                color: #7e8d74;
            }

            h1 {
                font-size: 2.2rem;
                color: #000000ad;
            }
        }

        .sort-by {

            h1 {
                font-size: 1.8rem;
                margin-left: 24px;
                cursor: pointer;
            }

            .active {
                color: #17a6b1;
            }

            .no-active{
                color: #898585;
            }
        }
    }

    .list-story {
        min-height: calc(100vh - 390px);
    }

    .have-ebook {

        display: flex;
        flex-wrap: wrap;
        margin-top: 20px;

        .item-story {
            width: 216px;
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: #7e8d7430;
            padding: 15px;
            margin: 0 12px;
            margin-bottom: 24px;
            border-radius: 4px;

            .image {
                width: 156px;
                height: 208px;
                overflow: hidden;

                img {
                    width: 100%;
                    height: 100%;
                    transition: transform .3s ease-out;
                    /* -webkit-transition: transform 0.5s, filter 0.5s;
                    -moz-transition: transform 0.5s, filter 0.5s;
                    -o-transition: transform 0.5s, filter 0.5s;
                    transition: transform 0.5s, filter 0.5s; */
                }

                img:hover {
                    -webkit-transform: scale(1.1);
                    -moz-transform: scale(1.1);
                    -ms-transform: scale(1.1);
                    -o-transform: scale(1.1);
                }
            }

            .information {
                
                .name{
                    color: black;
                    margin-top: 12px;
                    font-size: 1.7rem;
                    line-height: 2.2rem;
                    font-weight: 400;
                    text-align: center;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                }

                .author {
                    text-align: center;
                    margin-top: 10px;
                    font-size: 1.6rem;
                    font-weight: 400;
                    color: #a83d2d;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    line-height: 2.2rem;
                }

                .status {
                    text-align: center;
                    font-size: 1.5rem;
                    margin-top: 15px;
                    color: #597d38;
                }
            }
        }
    }

    .non-ebook {
        display: flex;
        height: calc(100vh - 370px);
        justify-content: center;
        align-items: center;

        h1 {
            color: #000000ad;
            font-size: 2.6rem;
        }
    }

    .error {
        display: flex;
        height: calc(100vh - 360px);
        justify-content: center;
        align-items: center;

        h1 {
            color: #000000ad;
            font-size: 2.6rem;
        }
    }

    .pagination {

        .number-page {

            .act {
                color: #009d96;
                border-color: #009d96;
            }
        }

        .custom-page {
            p {
                background-color: #a10000;
            }
        }
    }
`

export {
    Div, Story
}