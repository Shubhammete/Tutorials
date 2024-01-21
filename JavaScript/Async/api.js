let apiCall = async(body)=>{
    const data = await fetch("https://dummyjson.com/todos/add",{
        method:"POST",
        mode:"cors",
        body: JSON.stringify(body),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
    })
    
    console.log(await data.json())
}

const body = {
    id:9009,
    todo:"Shubh",
    completed:false,
    userId:99
}
apiCall(body)