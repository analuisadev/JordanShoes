import styled from "styled-components";
import bgJordan from '../../assets/bg-jordanShoes.jpeg'

export const Introduction = styled.div`
    background: url( ${bgJordan} ) center/cover;
    height: 37.7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const InfoIntroduction = styled.div`
    padding: 2.0rem;
    color: var(--White);
    display: grid;
    gap: 1.2rem;
    width: 100%;
    h1 {
        font-size: 2.8rem;
        font-weight: 700;
    }

    p {
        width: 35.7rem;
        font-weight: 600;
    }
`