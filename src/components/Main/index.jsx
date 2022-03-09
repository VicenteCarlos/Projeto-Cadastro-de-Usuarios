import Header from "../Header"
import { DivMain } from "./styled"

const Main = (props) => {
    return (
        <>
            <Header />
            <main className="content">
                <DivMain>
                    <h2>Seja bem vindo!</h2>
                    <p>
                        Sistema para exemplificar a construção 
                        de um cadastro desenvolvido em React!
                    </p>
                </DivMain>
            </main>
        </>
    )
}

export default Main

