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

fetch("http://127.0.0.1:5501/table.json").then(function (response) {
  return response.json();
});

// .then((data: any) => {
//   var original_data = JSON.parse(JSON.stringify(data));
//   console.log(original_data);
//   this.booking = original_data.data;
//   console.log(this.booking);
// })

// .then(function(data){
//   let placeholder = document.querySelector("#full");
//   // console.log(placeholder);
//   let out = "";
//   for (let product of data.results){
//     // console.log(product);
//     out += `

//                 <p>${product.date}</p>
//     `;

//   }

//   placeholder.innerHTML = out;
//   // console.log(out);
//   // console.log(placeholder);
// })

fetch("http://127.0.0.1:5501/table.json")
  .then(function (response) {
    return response.json();
  })

  .then(function (datatable) {
    let placeholder = document.querySelector("#tb");
    // console.log(placeholder);
    let out = "";
    for (let pr of datatable.results) {
      // console.log(pr);
      out += `
    
                
                <tr>
                    <th rowspan="2" style="color: green;">6:30 - 7:30</th>
                    <td>${pr.accessPointName} - ${pr.resources}</td>
                    <td>Trade</td>
                    <th rowspan="2">${pr.scheduledDuration}</th>
                </tr>
                <tr>
                    <th>${pr.contactName}</th>
                    <th>Destination</th>
                </tr>

                
                
          
        
    `;
    }

    placeholder.innerHTML = out;
    // console.log(out);
    // console.log(placeholder);
  });

// fetch("http://127.0.0.1:5501/table.json")
// .then(function(response){
//   return response.json();
// })

// .then(function(datatable){
//   let placeholder = document.querySelector("#full");

//   var startDate = "2021-11-14T00:00:00";
//   var endDate = "2021-11-16T00:00:00";

//   // console.log(placeholder);
//   let out = "";

//   for (let pr of datatable.results){

//     out += `

//     <p>${pr.date}</p>

//   `;

//     pr = datatable.results.filter(
//       function (a)
//       {
//           return (a.date) > startDate && (a.date) < endDate;

//       }
//       );

//     //   out += `
//     // <p>${pr}</p>
//     //  `;
//     // out += `
//     // <p>${pr.date}</p>
//     // `;
//     // console.log(a.date);
//     // console.log(pr);
//   }

//   placeholder.innerHTML = out;
// })

// fetch("http://127.0.0.1:5501/table.json")
// .then(function(response){
//   return response.json();
// })

// .then(function(datatable){
//   let placeholder = document.querySelector("#full");
//   var startDate = "2021-11-15T00:00:00";
//   var endDate = "2021-11-17T00:00:00";
//   // console.log(placeholder);
//   let out = "";
//   for (let pr of datatable.results){

//     pr = datatable.results.filter(
//       function (a)
//       {
//           return (a.date) > startDate && (a.date) < endDate;

//       }
//       );

//     //   out += `
//     // <p>${pr}</p>
//     //  `;
//     // out += `
//     // <p>${pr.date}</p>
//     // `;
//     // console.log(pr);
//   }

//   placeholder.innerHTML = out;
// })

// var product_data = [
//   {
//       "productId": "12",
//       "productName": "ProductA",
//       "productPrice": "1562",
//       "ProductDateCreated": "2015-07-24T12:58:17.430Z",
//       "TotalProduct": 294
//   },
//   {
//       "productId": "13",
//       "productName": "ProductB",
//       "productPrice": "8545",
//       "TotalProduct": 294,
//       "ProductHits":
//           "2015-08-01T00:00:00Z"

//   },
//   {
//       "productId": "14",
//       "productName": "ProductC",
//       "productPrice": "8654",
//       "TotalProduct": 78,
//       "ProductHits":
//         "2015-08-10T00:00:00Z"
//   }
// ];
// console.log(product_data);

fetch("http://127.0.0.1:5501/table.json")
  .then(function (response) {
    return response.json();
  })

  .then(function (datatable) {
    let placeholder = document.getElementById("full").innerHTML;
    // console.log(placeholder)
    var startDate = "2021-11-14T00:00:00";
    var endDate = "2021-11-16T00:00:00";
    out = "";
    // for (let i= 0 ; i<datatable.results.length ;i++){
    //   out += `
    //     <p>${i.date}</p>
    //   `;
    //   console.log(i.date)
    //   console.log(datatable.results[i]);
    // }
    
    // console.log(out);
    var resultProductData = datatable.results.filter(function (a) {
      for(var i of datatable.results){
        // console.log(i);
        // console.log(i.date);
          out += `
        <p>${i.date}</p>
      `
      
        }
      // console.log(i)
      // console.log(i)
      // console.log(date[i][j])
      return a.date > startDate && a.date < endDate;
    });


    // document.write(datatable.results[0].approvedBy);
    // console.log(datatable)
    // console.log(datatable.results)
    // console.log(datatable.results[i]);
    
    // for(var i in datatable.results){
    //   for(j in datatable.results.date){
    //   }
    //     out += `
    //     <p>${datatable.results.date}</p>
    //   `;
     
    // }
    // console.log(datatable.results[i])
    // console.log(out)
    console.log(resultProductData);
    placeholder.innerHTML = out;
  });




fetch("http://127.0.0.1:5501/table.json")
  .then(function (response) {
    return response.json();
  })

  .then(function (datatable) {
    // console.log(datatable)
    // console.log(datatable.results)
    let placeholder = document.querySelector("#full");
    var startDate = "2021-11-15T00:00:00";
    var endDate = "2021-11-17T00:00:00";
    out = "";

    out += `
        <p>${datatable.results.date}</p>
      `;
    // console.log(out);
    var resultProductData = datatable.results.filter(function (a) {
      return a.date > startDate && a.date < endDate;
    });
    // console.log(resultProductData);
    placeholder.innerHTML = out;
  });



  fetch("http://127.0.0.1:5501/table.json")
  .then(function (response) {
    return response.json();
  })

  .then(function (datatable) {
    // console.log(datatable)
    // console.log(datatable.results)
    let placeholder = document.querySelector("#full");
    var startDate = "2021-11-16T00:00:00";
    var endDate = "2021-11-18T00:00:00";
    out = "";

    out += `
        <p>${datatable.results.date}</p>
      `;
    // console.log(out);
    var resultProductData = datatable.results.filter(function (a) {
      return a.date > startDate && a.date < endDate;
    });
    // console.log(resultProductData);
    // placeholder.innerHTML = out;
  });


  fetch("http://127.0.0.1:5501/table.json")
  .then(function (response) {
    return response.json();
  })

  .then(function (datatable) {
    // console.log(datatable)
    // console.log(datatable.results)
    let placeholder = document.querySelector("#full");
    var startDate = "2021-11-17T00:00:00";
    var endDate = "2021-11-19T00:00:00";
    out = "";

    out += `
        <p>${datatable.results.date}</p>
      `;
    // console.log(out);
    var resultProductData = datatable.results.filter(function (a) {
      return a.date > startDate && a.date < endDate;
    });
    // console.log(resultProductData);
    placeholder.innerHTML = out;
  });


  fetch("http://127.0.0.1:5501/table.json")
  .then(function (response) {
    return response.json();
  })

  .then(function (datatable) {
    // console.log(datatable)
    // console.log(datatable.results)
    let placeholder = document.querySelector("#full");
    var startDate = "2021-11-18T00:00:00";
    var endDate = "2021-11-20T00:00:00";
    out = "";

    out += `
        <p>${datatable.results.date}</p>
      `;
    // console.log(out);
    var resultProductData = datatable.results.filter(function (a) {
      return a.date > startDate && a.date < endDate;
    });
    // console.log(resultProductData);
    placeholder.innerHTML = out;
  });


  fetch("http://127.0.0.1:5501/table.json")
  .then(function (response) {
    return response.json();
  })

  .then(function (datatable) {
    // console.log(datatable)
    // console.log(datatable.results)
    let placeholder = document.querySelector("#full");
    var startDate = "2021-11-19T00:00:00";
    var endDate = "2021-11-21T00:00:00";
    out = "";

    out += `
        <p>${datatable.results.date}</p>
      `;
    // console.log(out);
    var resultProductData = datatable.results.filter(function (a) {
      return a.date > startDate && a.date < endDate;
    });
    // console.log(resultProductData);
    placeholder.innerHTML = out;
  });