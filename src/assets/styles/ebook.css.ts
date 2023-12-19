
import styled from "styled-components";

const Div = styled.div`

    min-height: 100vh;

    header {

        .cover-photo {
            width: 100%;
            height: 240px;
        }

        .border-line {
            height: 122px;
            width: 100%;
            background-color: white;
            transform: translateY(-61px);
            border: 2px solid rgba(0, 0, 0, .1);
            border-bottom: none;
        }

        .detail-story-header {
            display: flex;
            width: 100%;
            transform: translateY(-183px);
            padding: 20px;
            background-color: white;
        }

        .detail-story-header>img {
            width: 148px;
            height: 198px;
            box-shadow: 2px 2px 6px grey;
        }

        .detail-story__info {
            padding-top: 16px;
            margin-left: 40px;
            width: calc(100% - 188px);
        }

        .information-ebook {
            width: 396px;
        }

        .name-ebook {
            font-size: 2.3rem;
            color: #666;
        }

        .detail-story__info-1 {
            display: flex;
            margin-top: 30px;
        }

        .author-ebook {
            font-size: 1.5rem;
            margin-right: 12px;
            padding: 3px 10px;
            border: 1px solid #9fadc9;
            border-radius: 14px;
            color: #3f5a93;
        }

        .status-ebook {
            font-size: 1.5rem;
            margin-right: 12px;
            padding: 3px 10px;
            border-radius: 14px;
            border: 1px solid #ffb0b4;
            color: #bf2c24;
        }

        .number-chapter-ebook {
            font-size: 1.8rem;
            margin-right: 15px;
            margin-top: 25px;

            b {
                font-weight: 100;
                font-size: 1.4rem;
                color: #666;
            }
        }

        .btn-forward {
            margin-top: 25px;
            font-size: 1.8rem;
            padding: 5px 20px;
            border: none;
            background-color: #818c77;
            color: white;
            cursor: pointer;
        }

        .install-ebook {
            width: calc(100% - 396px);

            h1 {
                font-size: 2rem;
                text-align: center;
                color: #838b79;
            }
        }

        .part-ebook {
            margin-top: 20px;
            margin-left: 34px;

            .list-chapter {
                display: block;
                font-size: 1.8rem;
                margin-bottom: 14px;
            }

            ul {

                li {

                    font-size: 1.8rem;
                    float: left;
                    width: 25%;
                    margin-bottom: 14px;

                    a {

                    }
                }
            }
        }
    }

`

const Container = styled.div`

`

export {
    Div, Container
}