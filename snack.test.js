const { getInitials, createSlug, average, isPalidrome, findPostById } = require("./snack")

describe('lavorare con le stringhe', () => {

    //1 SNACK
    test("La funzione getInitials restituisce le iniziali di un nome completo", () => {
        expect(getInitials('Budino Cioccolato')).toBe('B.C.')
        expect(getInitials('Jonathan gilli')).toBe('J.G.')
    })

    //5 SNACK
    test("La funzione isPalindrome verifica se una stringa è un palindromo.", () => {
        expect(isPalidrome('StrinGa')).toBeFalsy()
        expect(isPalidrome('otto')).toBeTruthy()
        expect(isPalidrome('anna otto anna')).toBeTruthy()
    })

})

describe('lavorare con gli array', () => {

    //3 SNACK
    test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
        expect(average([5, 15])).toBe(10)
        expect(average([10, 20, 30, 40, 50])).toBe(30)
    })

    //7 SNACK
    const post = [
        { id: 1, title: 'la banana come pistola', slug: 'banastola' },
        { id: 2, title: 'pregi e difetti delle rapine', slug: 'aiuto-polizia' },
        { id: 3, title: 'si stava meglio quando si stava peggio', slug: 'anche-no' }
    ]

    test("La funzione findPostById restituisce il post corretto dato l’array di post e l’id", () => {
        expect(findPostById(post, 3)).toEqual({ id: 3, title: 'si stava meglio quando si stava peggio', slug: 'anche-no' })
        expect(findPostById(post, 4)).toBe(null)
        expect(() => findPostById(post, 'budino')).toThrow('valore di ricerca ID non valido')
        expect(() => findPostById([1, 2, 3, 4, 5], 2)).toThrow('array non valido')
    })

})

describe('test per lo slug', () => {

    //2 SNACK
    test("La funzione createSlug restituisce una stringa in lowercase.", () => {
        expect(createSlug('CIOCCOLATOSOO')).toBe('cioccolatosoo')
        // expect(createSlug('uNa fRaSE LUngHa')).toBe('una frase lungha')
    })

    //4 SNACK
    test("La funzione createSlug sostituisce gli spazi con -.", () => {
        expect(createSlug('EsemPio DI una StrinGa')).toBe('esempio-di-una-stringa')
        expect(createSlug('BuoNgIoRno siGnoriNA')).toBe('buongiorno-signorina')
    })

    //6 SNACK
    test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido.", () => {
        expect(() => createSlug('')).toThrow('errore stringa non valida')
        expect(() => createSlug(null)).toThrow('errore stringa non valida')
    })

})

