import { GiAssassinPocket } from "react-icons/gi";

export default function LogoProject(){
    return (
        <div style={styles.main}>
            < GiAssassinPocket className ="text-cpowerPurple text-3xl mt-1"/>
            <h1><span style={styles.color}>Porti</span>fólio</h1>
        </div>
    )
}

const styles = {
    main: {
        display: "flex", 
        color: 'white',
        gap: 14,
        fontSize: 28,
        justifyContent: 'center',
        alignItens: "center"
    },
    color: {
        color: '#4F359B'
    }
}