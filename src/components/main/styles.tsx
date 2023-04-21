import styled from "styled-components";

export const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Highlights = styled.div`
    display: grid;
    gap: .5rem;
    margin-top: 5.0rem;
    text-align: center;
    
    h2{
        color: var(--Black-Light);
        font-size: 2.8rem;
    }

    p {
        width: 30.4rem;
        font-weight: 500;
        line-height: 180%;
        color: var(--Gray);
    }

    @media screen and (min-width: 830px) {
        p {
            width: fit-content;
        }
    }
`

export const ListOfProducts = styled(MainContent)`
    margin: 5.9rem auto;
    gap: 3.0rem;

    @media screen and (min-width: 830px) {
        display: grid;
        grid-template-rows: max-content;
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (min-width: 1240px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media screen and (min-width: 1700px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
        
    }
`

export const Product = styled.div`
    width: 37rem;
    height: 30.2rem;
    background: var(--White-200);
    display: grid;
    place-content: center;

    img {
        width: 25.0rem;
        height: 15.0rem;
    }
`