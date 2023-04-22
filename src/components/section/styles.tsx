import styled from "styled-components";
import bgJordan from '../../assets/bg-jordanShoes.jpeg'

export const Introduction = styled.div`
    background: url( ${bgJordan} ) center/cover;
    height: 37.7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
`

export const InfoIntroduction = styled.div`
    color: var(--White);
    display: grid;
    gap: 1.2rem;
    width: fit-content;
    h1 {
        font-size: 2.8rem;
        font-weight: 700;
    }

    p {
        width: 34.7rem;
        line-height: 180%;
    }

    @media screen and (min-width: 830px) {
        margin-left: 10.0rem;

        h1 {
            font-size: 4.8rem;
            font-weight: 600;
        }

        p {
            width: 637px;
            font-size: 2.4rem;
            line-height: 160%;
            
        }
    }
`