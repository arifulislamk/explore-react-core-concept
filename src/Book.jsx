import './Book.css'
export default function Book({book}){
    console.log(book)
    const {name, Price}= book
    return (
        <div className='book'>
            <h2>bools</h2>
            <h2>Book Name:{name}</h2>
            <p>Price : {Price}</p>
        </div>
    )
}