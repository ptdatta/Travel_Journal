import world from '../images/Fill 213.png'

export default function Header(){
    return (
        <header>
            <img className='header--img' src={world}/>
            <h2 className='header--text'>my travel journal</h2>
        </header>
    )
}