import ItemAvaliado from "./ItemAvaliado";
import {useState} from 'react'


export default function PesquisaSatisfacao(props){

    const [respondido, setRespondido] = useState([])
    const [total, setTotal] = useState(0)
    const [mensagem, setMensagem] = useState("")
    const [mensagemMedia, setMensagemMedia] = useState("")


    function clica(){
        setMensagem("Obrigado por responder!")
        setMensagemMedia("Sua média: X.XX")
    }




    return <div style={{verticalAlign:"middle", marginLeft:"650px", textAlign:"center"}}>
        <h1>Pesquisa de satisfação</h1>
        {props.itens.map((item)=>
            <ItemAvaliado item={item}/>
        )}
        <br/>
        <br/>
        <button onClick={clica}>Finalizar</button>
        <h3>{mensagem}</h3>
        <h3>{mensagemMedia}</h3>

    </div>
}
