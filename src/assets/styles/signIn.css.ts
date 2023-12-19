import styled from "styled-components";

const Section = styled.section`

    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100%;

    .form-box {
        height: 564px;
        position: relative;
        width: 400px;
        background: transparent;
        border: 2px solid rgba(255,255,255,0.5);
        border-radius: 20px;
        backdrop-filter: blur(15px);
        display: flex;
        justify-content: center;
        align-items: center;

        .form-value {

            form {

                h2 {
                    font-size: 2rem;
                    color: #fff;
                    text-align: center;
                }

                .inputbox {
                    margin-top: 30px;
                    position: relative;
                    margin: 30px 0;
                    width: 310px;
                    border-bottom: 2px solid #fff;

                    span {
                        position: absolute;
                        right: 8px;
                        color: #fff;
                        font-size: 1.8rem;
                        top: 20px;
                    }

                    input {
                        width: 100%;
                        height: 50px;
                        background: transparent;
                        border: none;
                        outline: none;
                        font-size: 1.6rem;
                        padding: 0 35px 0 5px;
                        color: #fff;
                    }

                    label {
                        position: absolute;
                        top: 50%;
                        left: 5px;
                        transform: translateY(-50%);
                        color: #fff;
                        font-size: 1.7rem;
                        pointer-events: none;
                        transition: .5s;
                    }

                    input:focus ~ label, input:valid ~ label {
                        top: -5px;
                    }

                    input:-webkit-autofill,
                    input:-webkit-autofill:hover, 
                    input:-webkit-autofill:focus, 
                    input:-webkit-autofill:active{
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: #ffffff;
                        transition: background-color 5000s ease-in-out 0s;
                        /* box-shadow: inset 0 0 20px 20px #23232329; */
                    }
                }

                .forget {
                    margin-bottom: 28px;
                    font-size: 1.5rem;
                    color: #fff;
                    display: flex;
                    justify-content: end;

                    a{
                        color: #fff;
                        text-decoration: none;
                    }
                }

                .error {
                    color: white;
                    font-size: 1.5rem;
                    margin-bottom: 15px;
                    text-align: center;
                    line-height: 2rem;
                }

                button {
                    width: 100%;
                    height: 40px;
                    border-radius: 40px;
                    background: #fff;
                    border: none;
                    outline: none;
                    cursor: pointer;
                    font-size: 1.8rem;
                    font-weight: 600;
                }

                .register {
                    font-size: .9rem;
                    color: #fff;
                    text-align: center;
                    margin: 25px 0 10px;

                    p {
                        font-size: 1.6rem;

                        a {
                            text-decoration: none;
                            color: #fff;
                            font-weight: 600;
                            font-size: 1.6rem;
                        }
                    }
                }
            }
        }
    }

`

export {
    Section
}