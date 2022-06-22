// fetch('http://127.0.0.1:5501/table.json')
// .then(response => response.json())
//   .then(data =>{
//     console.log(data)
//   })

  fetch("http://127.0.0.1:5501/table.json")
  .then(response => {
     return response.json();
  })
  .then(data => {
    console.log(data)
    // console.log(JSON.stringify(data))
    console.log(data.results);
  })