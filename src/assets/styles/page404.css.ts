import styled from "styled-components";

const Section = styled.section`

    .background {
        height: 400px;
        background-repeat: no-repeat;
        background-position: center;
        margin-top: 40px;
    }

    h1 {
        font-size: 8rem;
        line-height: 8.4rem;
        text-align: center;
    }

    .control {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    p {
        font-size: 2.8rem;
        text-align: center;
        width: 790px;
        line-height: 4.8rem;
        margin-bottom: 24px;
    }

    a {
        font-size: 2rem;
        padding: 18px;
        background-color: #39ac31;
        color: white;
        border-radius: 6px;
    }
`

export {
    Section
}