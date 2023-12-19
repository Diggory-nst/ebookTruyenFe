import styled from "styled-components";

const Section = styled.section`

    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100%;

    .waiting-verification {
        padding: 0 10px;

        h2 {
            text-align: center;
            font-size: 2.8rem;
            color: white;
            line-height: 3rem;
        }

        p {
            margin-top: 20px;
            text-align: center;
            font-size: 2.8rem;
            color: white;
            line-height: 3rem;
        }
    }
`

export {
    Section
}