const { getInitials, createSlug, average, isPalidrome } = require("./snack")

//1 SNACK
test("La funzione getInitials restituisce le iniziali di un nome completo", () => {
    expect(getInitials('Budino Cioccolato')).toBe('B.C.')
    expect(getInitials('Jonathan gilli')).toBe('J.G.')
})

//2 SNACK
// test("La funzione createSlug restituisce una stringa in lowercase.", () => {
//     expect(createSlug('CIOCCOLATOSOO')).toBe('cioccolatosoo')
//     expect(createSlug('uNa fRaSE LUngHa')).toBe('una frase lungha')
// })

//3 SNACK
test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
    expect(average([5, 15])).toBe(10)
    expect(average([10, 20, 30, 40, 50])).toBe(30)
})

//4 SNACK
test("La funzione createSlug sostituisce gli spazi con -.", () => {
    expect(createSlug('EsemPio DI una StrinGa')).toBe('esempio-di-una-stringa')
    expect(createSlug('BuoNgIoRno siGnoriNA')).toBe('buongiorno-signorina')
})

//5 SNACK
test("La funzione isPalindrome verifica se una stringa è un palindromo.", () => {
    expect(isPalidrome('StrinGa')).toBeFalsy()
    expect(isPalidrome('otto')).toBeTruthy()
    expect(isPalidrome('anna otto anna')).toBeTruthy()
})

//6 SNACK
test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido.", () => {
    expect(() => createSlug('')).toThrow('errore stringa non valida')
    expect(() => createSlug(null)).toThrow('errore stringa non valida')

})


