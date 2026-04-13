const { getInitials } = require("./snack")

//1 SNACK
test("La funzione getInitials restituisce le iniziali di un nome completo", () => {
    expect(getInitials('Budino Cioccolato')).toBe('B.C.')
    expect(getInitials('Jonathan gilli')).toBe('J.G.')
})

//2 SNACK
test("La funzione createSlug restituisce una stringa in lowercase.", () => {

    expect(createSlug('CIOCCOLATOSOO')).toBe('cioccolatosoo')
})

function createSlug(stringa) {

    return stringa.toLowerCase()
}