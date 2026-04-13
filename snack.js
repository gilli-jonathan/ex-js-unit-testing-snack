function getInitials(nomeCognome) {
    const [nome, cognome] = nomeCognome.split(" ")
    return `${nome.charAt(0).toUpperCase()}.${cognome.charAt(0).toUpperCase()}.`
}

function createSlug(stringa) {
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

module.exports = {
    getInitials,
    createSlug,
    average,
    isPalidrome,
}