interface Book {
    id: number,
    title: string,
    author: string
}

const book: Book = {
    id: 1,
    title: 'My title',
    author: 'Josep'
};

const books: Book[] = [];

function getBook(book: Book) {
    const pepe: Book[] = []
    pepe.push(book)
    return pepe
}

console.log(getBook({id: 78, title: 'El libro', author: 'Jossid'}))