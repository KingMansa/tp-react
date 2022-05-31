import Entete from "../composants/entete"
import Posts from "../composants/posts"

// On doit afficher les derniers posts avec du scroll horizontal

const Profil = () => {
    return (
        <div className="Profil">
            <h2>La page profil</h2>
            <Entete/>
            <p>L'image</p>
            <p>Le pseudo</p>
            <Posts/> 
            <h2>On affiche le contenu de chaque chronique</h2>
            <Posts/>
        </div>
    )
}

export default Profil