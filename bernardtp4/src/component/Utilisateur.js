
const Utilisateur = ({utilisateur}) => {
    return (

        <tr>
            <td>{utilisateur.prenom}</td>
            <td>{utilisateur.nom}</td>
            <td>{utilisateur.typeUtilisateur}</td>
        </tr>
    )
}

export default Utilisateur;