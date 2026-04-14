function getInitials(nomeCognome) {
    const [nome, cognome] = nomeCognome.split(" ")
    return `${nome.charAt(0).toUpperCase()}.${cognome.charAt(0).toUpperCase()}.`
}

function createSlug(stringa) {
    if (!stringa) {
        throw new Error('errore stringa non valida')
    }
    return stringa.toLowerCase().replaceAll(" ", "-")
}

function average(arrayNumeri) {
    let somma = 0
    arrayNumeri.forEach(num => somma += num);
    return somma / arrayNumeri.length
}

function isPalidrome(stringa) {
    const parolaInvertita = stringa.split('').reverse().join('')
    return stringa === parolaInvertita

}

function findPostById(post, id) {
    if (isNaN(id)) {
        throw new Error('valore di ricerca ID non valido')
    }
    post.forEach(p => {
        if (p.id === undefined ||
            p.title === undefined ||
            p.slug === undefined
        ) { throw new Error('array non valido') }
    })
    return post.find(p => p.id === id) || null;

}

module.exports = {
    getInitials,
    createSlug,
    average,
    isPalidrome,
    findPostById,
}