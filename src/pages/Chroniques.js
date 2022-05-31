import Entete from "./composants/entete"
import Posts from "./composants/posts"

// On doit afficher les derniers posts avec du scroll horizontal

const Chronique = () => {
    return (
        <div className="Chronique">
            <h2>La page chroniques</h2>
            <Entete/>
            <h2>Les derniers posts</h2>
            <Posts/> 
            <h2>Tous les chroniques</h2>
            <Posts/>
        </div>
    )
}

export default Chronique