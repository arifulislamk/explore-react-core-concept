import Book from "./Book"
export default function BookStore({books}){
    console.log(books)
    return (
        <div>
            <h2>Books :{books.length}</h2>
            <h2>Bookstore :{books[3].name}</h2>
            {
                books.map(book => <Book book={book}></Book>)
            }
        </div>
    )
}