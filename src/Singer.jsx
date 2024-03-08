export default function Singer({singer}){
    console.log(singer)
    const {name, age}= singer
    return (
        <div>
            <h2>Name : {name}</h2>
            <p>Age : {age}</p>
        </div>
    )
}