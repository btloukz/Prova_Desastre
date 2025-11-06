import {useState} from 'react'
import bomDesativado from './assets/bomDesativado.png'
import bomAtivado from './assets/bomAtivado.png'
import neutroDesativado from './assets/neutroDesativado.png'
import neutroAtivado from './assets/neutroAtivado.png'
import ruimDesativado from './assets/ruimDesativado.png'
import ruimAtivado from './assets/ruimAtivado.png'

export default function ItemAvaliado(props){

    
    const [exibicaoRuim, setExibicaoRuim] = useState(ruimDesativado)
    const [exibicaoNeutra, setExibicaoNeutra] = useState(neutroDesativado)
    const [exibicaoBom, setExibicaoBom] = useState(bomDesativado)
    
    function ativarRuim(){
        let ativado = ruimAtivado
        setExibicaoRuim(ativado)
        props.ruim(ativado)
    }

    function ativarNeutra(){
        let ativado = neutroAtivado
        setExibicaoNeutra(ativado)
        props.neutro(ativado)
    }

    function ativarBom(){
        let ativado = bomAtivado
        setExibicaoBom(ativado)
        props.bom(ativado)
    }

    return <>
        <h2>{props.item}</h2>
        <img src={exibicaoRuim} onClick={ativarRuim}/> <img src={exibicaoNeutra} onClick={ativarNeutra}/> <img src={exibicaoBom} onClick={ativarBom}/>
    </>
}
