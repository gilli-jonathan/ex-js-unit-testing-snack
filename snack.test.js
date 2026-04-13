const { getInitials } = require("./snack")


//1 SNACK
test("La funzione getInitials restituisce le iniziali di un nome completo", () => {
    expect(getInitials('Budino Cioccolato')).toBe('B.C.')
    expect(getInitials('Jonathan gilli')).toBe('J.G.')
})