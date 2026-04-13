function getInitials(nomeCognome) {
    const [nome, cognome] = nomeCognome.split(" ")
    return `${nome.charAt(0).toUpperCase()}.${cognome.charAt(0).toUpperCase()}.`
}

function createSlug(stringa) {

    return stringa.toLowerCase()
}


module.exports = {
    getInitials,
    createSlug,
}