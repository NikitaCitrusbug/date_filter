// fetch('http://127.0.0.1:5501/table.json')
// .then(response => response.json())
//   .then(data =>{
//     console.log(data)
//   })




  // fetch("http://127.0.0.1:5501/table.json")
  // .then(response => {
  //    return response.json();
  // })
  // .then(data => {
  //   console.log(data)
  //   // console.log(JSON.stringify(data))
  //   console.log(data.results);
  //   console.log(typeof(data));
  //   const myArray = Object.values(data);
  //   console.log(myArray);
  //   // console.log(Object.results);
  //   // for(i in data){
  //   //   i = document.getElementById('booking').value;
  //   // }
  // })


  fetch("http://127.0.0.1:5501/table.json")
.then(function(response){
  return response.json();
})

// .then((data: any) => {
//   var original_data = JSON.parse(JSON.stringify(data));
//   console.log(original_data);
//   this.booking = original_data.data;
//   console.log(this.booking);
// })

.then(function(data){
  let placeholder = document.querySelector("#tb");
  // console.log(placeholder);
  let out = "";
  for (let product of data.results){
    console.log(product);
    out += `
    
            
                <tr>
                    <th rowspan="2" style="color: green;">6:30 - 7:30</th>
                    <td>${product.accessPointName} - ${product.resources}</td>
                    <td>Trade</td>
                    <th rowspan="2">${product.scheduledDuration}</th>
                </tr>
                <tr>
                    <th>${product.contactName}</th>
                    <th>Destination</th>
                </tr>

                
                
          
        
    `;

  }
  
  placeholder.innerHTML = out;
  console.log(out);
  // console.log(placeholder);
})