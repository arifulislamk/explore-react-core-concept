// export default function Todo({task,isDone}){
//     return (
//         <li>Task: {task}</li>
//     )
// }
// export default function Todo({task,isDone}){
//     console.log(task,isDone)
//        if(isDone === true){
//         return (
//                     <li>Finised: {task}</li>
//                 )
//        }
       
//        return (
//         <li>WorkOn: {task}</li>
//        )
//     }

// export default function Todo({task,isDone}){
//     return (
//         <li>{isDone ? "finised": "Worke On"}: {task}</li>
//     )
// }
// export default function Todo({task,isDone}){
//     return (
//         <li>Task: {task} {isDone && "Done"}</li>
//     )
// }
// export default function Todo({task,isDone}){
//     return (
//         <li>Task: {task} {isDone || "Do It"}</li>
//     )
// }

export default function Todo({task,isDone}){
    let listItem;
    if(isDone){
        listItem = <li>Finised: {task}</li>
    }
    else{
        listItem = <li>workOn: {task}</li>
    }
    return listItem ;
}