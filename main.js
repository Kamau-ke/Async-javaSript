const getTodos=(resource)=>{

    return new Promise((resolve, reject)=>{


const request=new XMLHttpRequest();


request.addEventListener('readystatechange', ()=>{
    // console.log(request, request.readyState)

    if(request.readyState===4 && request.status===200){
        const data=JSON.parse(request.responseText)
        resolve(data)
    }else if(request.readyState===4){
        reject('could not fetch the data');
    }

})
request.open('GET', resource)

request.send()

})

}

// getTodos('https://jsonplaceholder.typicode.com/todos/').then(data=>{
//     console.log('promise resolved:', data);
//     return getTodos('https://jsonplaceholder.typicode.com/comments')
// }).then(data=>{
// console.log('promise resolves:', data);
// return getTodos('https://jsonplaceholder.typicode.com/users')
// }).then(data =>{
//     console.log('promise resolves:', data);
// }).catch(err=>{
//     console.log('promise rejected:', err)
// });


fetch('https://jsonplaceholder.typicode.com/comments').then(response=>{
    console.log(response);
    return response.json();
}).then(data=>{
    console.log(data)
})










// values and their states

// Value	State	               Description
// 0	-   UNSENT     	            Client has been created. open() not called yet.
// 1	   OPENED	                 open() has been called.
// 2      HEADERS_RECEIVED	         send() has been called, and headers and status are available.
// 3	   LOADING	Downloading;      responseText holds partial data.
// 4	   DONE	                        The operation is complete