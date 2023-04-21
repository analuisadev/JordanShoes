import { MainContent, Highlights, ListOfProducts, Product } from "./styles";

import tennisOne from "../../assets/1.png"
import tennisTwo from "../../assets/2.png"
import tennisThree from "../../assets/3.png"
import tennisFour from "../../assets/4.png"
import tennisFive from "../../assets/5.png"
import tennisSix from "../../assets/6.png"
import tennisSeven from "../../assets/7.png"
import tennisEight from "../../assets/8.png"

export function Main() {
    return (
        <>
            <MainContent>
                <Highlights>
                    <h2>Destaques</h2>
                    <p>Frete grátis e chinelo de brinde é aqui,
                        aproveite por tempo limitado.
                    </p>
                </Highlights>

                <ListOfProducts>
                    <Product>
                        <img src={tennisOne} alt="Jordan Green sneakers with pink laces" />
                    </Product>

                    <Product>
                        <img src={tennisTwo} alt="Jordan sneakers Purple, white and green" />
                    </Product>

                    <Product>
                        <img src={tennisThree} alt="Jordan white and purple sneakers" />
                    </Product>

                    <Product>
                        <img src={tennisFour} alt="Jordan gray and white sneakers" />
                    </Product>

                    <Product>
                        <img src={tennisFive} alt="Jordan sneakers black, white and red" />
                    </Product>

                    <Product>
                        <img src={tennisSix} alt="Jordan orange and white sneakers" />
                    </Product>

                    <Product>
                        <img src={tennisSeven} alt="Jordan lime and white sneakers" />
                    </Product>

                    <Product>
                        <img src={tennisEight} alt="Jordan sneakers black and white" />
                    </Product>
                </ListOfProducts>
            </MainContent>

        </>
    )
}