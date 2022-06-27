// import moment from 'moment';


fetch("http://127.0.0.1:5501/table.json").then(function (response) {
  return response.json();
});




  fetch("http://127.0.0.1:5501/table.json")
  .then(function (response) {
    return response.json();
  })

  .then(function (datatable) {
    // console.log(datatable)
    // console.log(datatable.results)
    // let placeholder = document.getElementById("date").innerHTML;
    let pr = document.querySelector("#date");
    
    // console.log(placeholder)
    // console.log(pr)
    // var startDate = "2021-11-14T00:00:00";
    // var endDate = "2021-11-21T00:00:00";
    
    function byDate (a,b){
      // console.log(new Date(a.date).valueOf()-new Date(b.date).valueOf());
      return new Date(a.date).valueOf()-new Date(b.date).valueOf();
    }
    // console.log(byDate);
    const sortedData = datatable.results.sort(byDate)
    const dateLimit=moment(sortedData[0].date).format('D/MM/YY')+" - "+(moment(sortedData[sortedData.length-1].date).format('D/MM/YY') )
    // console.log(dateLimit);
    // console.log(datatable.results.sort(byDate));
    // const dates = datatable.results.map((item)=>item.date.getDate())
    // console.log(dates);
    // const sortedArray  =dates.sort((a,b) => new Moment(a.date).format('D/MM/YY') - new Moment(b.date).format('YYYYMMDD'))
    // console.log(sortedData);
    // for(i of datatable.results){
    //   console.log(typeof(i.date));
    //   out += `
    //     <p>${i.date} - ${i.date}</p>
    //   `;
    // }
    // console.log(resultProductData);
    out = dateLimit;
    pr.innerHTML = out;
    // placeholder.innerHTML = out;
  });

  fetch("http://127.0.0.1:5501/table.json")
  .then(function (response) {
    return response.json();
  })

  .then(function (datatable) {
    // console.log(datatable)
    // console.log(datatable.results)
    // let placeholder = document.getElementById("date").innerHTML;
    let pr = document.querySelector("#full");
    
    // console.log(placeholder)
    // console.log(pr)
    var startDate = "2021-11-14T00:00:00";
    var endDate = "2021-11-16T00:00:00";

    out = "";
  var resultProductData = datatable.results.filter(function (a) {
        return a.date > startDate && a.date < endDate;
      });
      // console.log(typeof(resultProductData));
      // console.log(Object.entries(resultProductData));
      // console.log(resultProductData);
      function getFields(input, field) {
        var output = [];
        for (var i=0; i < input.length ; ++i)
            output.push(input[i][field]);
            // console.log(output)
        return output;
    }
    var result = getFields(resultProductData, "date");
    // console.log(result);
    
    // console.log(typeof(result));
    for(i of result){
      // console.log(i);  
      const n = moment(i);
      // console.log(n);
      const nm = n.format('dddd DD MMMM');
      // console.log(nm);
      out = nm;
    }
    // console.log(out);
      // console.log(Object.keys(obj));
      pr.innerHTML = out;
  });


  fetch("http://127.0.0.1:5501/table.json")
  .then(function (response) {
    return response.json();
  })

  .then(function (datatable) {
    // console.log(datatable)
    // console.log(datatable.results)
    // let placeholder = document.getElementById("date").innerHTML;
    let pr = document.querySelector("#full1");
    
    // console.log(placeholder)
    // console.log(pr)
    var startDate = "2021-11-15T00:00:00";
    var endDate = "2021-11-17T00:00:00";

    out = "";
  var resultProductData = datatable.results.filter(function (a) {
        return a.date > startDate && a.date < endDate;
      });
      // console.log(typeof(resultProductData));
      // console.log(Object.entries(resultProductData));
      // console.log(resultProductData);
      function getFields(input, field) {
        var output = [];
        for (var i=0; i < input.length ; ++i)
            output.push(input[i][field]);
        return output;
    }
    var result = getFields(resultProductData, "date");
    // console.log(result);
    
    // console.log(typeof(result));
    for(i of result){
      // console.log(i);  
      const n = moment(i);
      // console.log(n);
      const nm = n.format('dddd DD MMMM');
      // console.log(nm);
      out = nm;
    }
    // console.log(out);
      // console.log(Object.keys(obj));
      pr.innerHTML = out;
  });



  fetch("http://127.0.0.1:5501/table.json")
  .then(function (response) {
    return response.json();
  })

  .then(function (datatable) {
    // console.log(datatable)
    // console.log(datatable.results)
    // let placeholder = document.getElementById("date").innerHTML;
    let pr = document.querySelector("#full2");
    
    // console.log(placeholder)
    // console.log(pr)
    var startDate = "2021-11-16T00:00:00";
    var endDate = "2021-11-18 T00:00:00";

    out = "";
  var resultProductData = datatable.results.filter(function (a) {
        return a.date > startDate && a.date < endDate;
      });
      // console.log(typeof(resultProductData));
      // console.log(Object.entries(resultProductData));
      // console.log(resultProductData);
      function getFields(input, field) {
        var output = [];
        for (var i=0; i < input.length ; ++i)
            output.push(input[i][field]);
        return output;
    }
    var result = getFields(resultProductData, "date");
    // console.log(result);
    
    // console.log(typeof(result));
    for(i of result){
      // console.log(i);  
      const n = moment(i);
      // console.log(n);
      const nm = n.format('dddd DD MMMM');
      // console.log(nm);
      out = nm;
    }
    // console.log(out);
      // console.log(Object.keys(obj));
      pr.innerHTML = out;
  });



  fetch("http://127.0.0.1:5501/table.json")
  .then(function (response) {
    return response.json();
  })

  .then(function (datatable) {
    // console.log(datatable)
    // console.log(datatable.results)
    // let placeholder = document.getElementById("date").innerHTML;
    let pr = document.querySelector("#full3");
    
    // console.log(placeholder)
    // console.log(pr)
    var startDate = "2021-11-17T00:00:00";
    var endDate = "2021-11-19T00:00:00";

    out = "";
  var resultProductData = datatable.results.filter(function (a) {
        return a.date > startDate && a.date < endDate;
      });
      // console.log(typeof(resultProductData));
      // console.log(Object.entries(resultProductData));
      // console.log(resultProductData);
      function getFields(input, field) {
        var output = [];
        for (var i=0; i < input.length ; ++i)
            output.push(input[i][field]);
        return output;
    }
    var result = getFields(resultProductData, "date");
    // console.log(result);
    
    // console.log(typeof(result));
    for(i of result){
      // console.log(i);  
      const n = moment(i);
      // console.log(n);
      const nm = n.format('dddd DD MMMM');
      // console.log(nm);
      out = nm;
    }
    // console.log(out);
      // console.log(Object.keys(obj));
      pr.innerHTML = out;
  });


  fetch("http://127.0.0.1:5501/table.json")
  .then(function (response) {
    return response.json();
  })

  .then(function (datatable) {
    // console.log(datatable)
    // console.log(datatable.results)
    // let placeholder = document.getElementById("date").innerHTML;
    let pr = document.querySelector("#full4");
    
    // console.log(placeholder)
    // console.log(pr)
    var startDate = "2021-11-18T00:00:00";
    var endDate = "2021-11-20T00:00:00";

    out = "";
  var resultProductData = datatable.results.filter(function (a) {
        return a.date > startDate && a.date < endDate;
      });
      // console.log(typeof(resultProductData));
      // console.log(Object.entries(resultProductData));
      // console.log(resultProductData);
      function getFields(input, field) {
        var output = [];
        for (var i=0; i < input.length ; ++i)
            output.push(input[i][field]);
        return output;
    }
    var result = getFields(resultProductData, "date");
    // console.log(result);
    
    // console.log(typeof(result));
    for(i of result){
      // console.log(i);  
      const n = moment(i);
      // console.log(n);
      const nm = n.format('dddd DD MMMM');
      // console.log(nm);
      out = nm;
    }
    // console.log(out);
      // console.log(Object.keys(obj));
      pr.innerHTML = out;
  });


  fetch("http://127.0.0.1:5501/table.json")
  .then(function (response) {
    return response.json();
  })

  .then(function (datatable) {
    // console.log(datatable)
    // console.log(datatable.results)
    // let placeholder = document.getElementById("date").innerHTML;
    let pr = document.querySelector("#full5");
    
    // console.log(placeholder)
    // console.log(pr)
    var startDate = "2021-11-19T00:00:00";
    var endDate = "2021-11-21T00:00:00";

    out = "";
  var resultProductData = datatable.results.filter(function (a) {
        return a.date > startDate && a.date < endDate;
      });
      // console.log(typeof(resultProductData));
      // console.log(Object.entries(resultProductData));
      // console.log(resultProductData);
      function getFields(input, field) {
        var output = [];
        for (var i=0; i < input.length ; ++i)
            output.push(input[i][field]);
        return output;
    }
    var result = getFields(resultProductData, "date");
    // console.log(result);
    
    
    
    // console.log(typeof(result));
    for(i of result){
      // console.log(i);  
      const n = moment(i);
      // console.log(n);
      const nm = n.format('dddd DD MMMM');
      // console.log(nm);
      out = nm;
    }
    // console.log(out);
      // console.log(Object.keys(obj));
      pr.innerHTML = out;
  });


  


fetch("http://127.0.0.1:5501/table.json")
.then(function (response) {
  return response.json();
})
.then(function (datatable) {
  let placeholder = document.querySelector("#tb");
  let out = ""
  var startDate = "2021-11-14T00:00:00";
  var endDate = "2021-11-16T00:00:00";
  var resultProductData = datatable.results.filter(function (a) {
    return a.date > startDate && a.date < endDate;
  });
  console.log(resultProductData);
  const sortTime = resultProductData.sort((a, b) => a.scheduledTimeIn.localeCompare(b.scheduledTimeIn))
  console.log(sortTime);
 

  
  for (let pr of resultProductData) {
    
    function time_convert(d)
  { 
    var a = Math.floor(d/3600);
    var x = d%3600;
    var b = Math.floor(x/60); 
    if(a > 0){ 
      // console.log(a)
      if(b <= 0){
        // console.log(b)
        return a + "hr" 
      } 
      return a + "hr" +  b + "min"
    }
    else{
      return b + "min"
    }
  
    
  // return a + "hr" + b + "min";  
 }
 const f = pr.scheduledTimeIn
 const g = pr.scheduledTimeOut
  const n = moment(f);
  k = n.format('LT');
  // console.log(k);
  const m = moment(g);
  p = m.format("LT");
    var e = time_convert(pr.scheduledDuration)
    // console.log(e);
    out += `
  
              
              <tr>
                  <th rowspan="2" style="color: green;">${k} - ${p}</th>
                  <td>${pr.accessPointName} - ${pr.resources}</td>
                  <td>Trade</td>
                  <th rowspan="2">${e}</th>
              </tr>
              <tr>
                  <th>${pr.contactName}</th>
                  <th>Destination</th>
              </tr>

              
              
        
      
  `;
  // const moment = require('moment');
  // const m = moment(new Date(pr.scheduledTimeIn));
  // m.format('h:mma'); 
//  console.log(typeof(pr.scheduledTimeIn));
//  console.log(time_convert(1800));
//  console.log(time_convert(5400));
//  console.log(time_convert(3600));
  }


  
  placeholder.innerHTML = out;
  // console.log(time_convert)
});




fetch("http://127.0.0.1:5501/table.json")
.then(function (response) {
  return response.json();
})
.then(function (datatable) {
  let placeholder = document.querySelector("#tb1");
  let out = ""
  var startDate = "2021-11-15T00:00:00";
  var endDate = "2021-11-17T00:00:00";
  var resultProductData = datatable.results.filter(function (a) {
    return a.date > startDate && a.date < endDate;
  });
  console.log(resultProductData);
  const sortTime = resultProductData.sort((a, b) => a.scheduledTimeIn.localeCompare(b.scheduledTimeIn))
  console.log(sortTime);
  for (let pr of resultProductData) {
    
    function time_convert(d)
  { 
    var a = Math.floor(d/3600);
    var x = d%3600;
    var b = Math.floor(x/60); 
    if(a > 0){ 
      // console.log(a)
      if(b <= 0){
        // console.log(b)
        return a + "hr" 
      } 
      return a + "hr" +  b + "min"
    }
    else{
      return b + "min"
    }
  
    
  // return a + "hr" + b + "min";  
 }
 const f = pr.scheduledTimeIn
 const g = pr.scheduledTimeOut
  const n = moment(f);
  k = n.format('LT');
  // console.log(k);
  const m = moment(g);
  p = m.format("LT");
    var e = time_convert(pr.scheduledDuration)
    // console.log(e);
    out += `
  
              
              <tr>
                  <th rowspan="2" style="color: green;">${k} - ${p}</th>
                  <td>${pr.accessPointName} - ${pr.resources}</td>
                  <td>Trade</td>
                  <th rowspan="2">${e}</th>
              </tr>
              <tr>
                  <th>${pr.contactName}</th>
                  <th>Destination</th>
              </tr>

              
              
        
      
  `;
  // const moment = require('moment');
  // const m = moment(new Date(pr.scheduledTimeIn));
  // m.format('h:mma'); 
//  console.log(typeof(pr.scheduledTimeIn));
//  console.log(time_convert(1800));
//  console.log(time_convert(5400));
//  console.log(time_convert(3600));
  }


  
  placeholder.innerHTML = out;
  // console.log(time_convert)
});


fetch("http://127.0.0.1:5501/table.json")
.then(function (response) {
  return response.json();
})
.then(function (datatable) {
  let placeholder = document.querySelector("#tb2");
  let out = ""
  var startDate = "2021-11-16T00:00:00";
  var endDate = "2021-11-18T00:00:00";
  var resultProductData = datatable.results.filter(function (a) {
    return a.date > startDate && a.date < endDate;
  });
  console.log(resultProductData);
  const sortTime = resultProductData.sort((a, b) => a.scheduledTimeIn.localeCompare(b.scheduledTimeIn))
  console.log(sortTime);
  for (let pr of resultProductData) {
    
    function time_convert(d)
  { 
    var a = Math.floor(d/3600);
    var x = d%3600;
    var b = Math.floor(x/60); 
    if(a > 0){ 
      // console.log(a)
      if(b <= 0){
        // console.log(b)
        return a + "hr" 
      } 
      return a + "hr" +  b + "min"
    }
    else{
      return b + "min"
    }
  
    
  // return a + "hr" + b + "min";  
 }
 const f = pr.scheduledTimeIn
 const g = pr.scheduledTimeOut
  const n = moment(f);
  k = n.format('LT');
  // console.log(k);
  const m = moment(g);
  p = m.format("LT");
    var e = time_convert(pr.scheduledDuration)
    // console.log(e);
    out += `
  
              
              <tr>
                  <th rowspan="2" style="color: green;">${k} - ${p}</th>
                  <td>${pr.accessPointName} - ${pr.resources}</td>
                  <td>Trade</td>
                  <th rowspan="2">${e}</th>
              </tr>
              <tr>
                  <th>${pr.contactName}</th>
                  <th>Destination</th>
              </tr>

              
              
        
      
  `;
  // const moment = require('moment');
  // const m = moment(new Date(pr.scheduledTimeIn));
  // m.format('h:mma'); 
//  console.log(typeof(pr.scheduledTimeIn));
//  console.log(time_convert(1800));
//  console.log(time_convert(5400));
//  console.log(time_convert(3600));
  }


  
  placeholder.innerHTML = out;
  // console.log(time_convert)
});



fetch("http://127.0.0.1:5501/table.json")
.then(function (response) {
  return response.json();
})
.then(function (datatable) {
  let placeholder = document.querySelector("#tb3");
  let out = ""
  var startDate = "2021-11-17T00:00:00";
  var endDate = "2021-11-19T00:00:00";
  var resultProductData = datatable.results.filter(function (a) {
    return a.date > startDate && a.date < endDate;
  });
  console.log(resultProductData);
  const sortTime = resultProductData.sort((a, b) => a.scheduledTimeIn.localeCompare(b.scheduledTimeIn))
  console.log(sortTime);
  for (let pr of resultProductData) {
    
    function time_convert(d)
  { 
    var a = Math.floor(d/3600);
    var x = d%3600;
    var b = Math.floor(x/60); 
    if(a > 0){ 
      // console.log(a)
      if(b <= 0){
        // console.log(b)
        return a + "hr" 
      } 
      return a + "hr" +  b + "min"
    }
    else{
      return b + "min"
    }
  
    
  // return a + "hr" + b + "min";  
 }
 const f = pr.scheduledTimeIn
 const g = pr.scheduledTimeOut
  const n = moment(f);
  k = n.format('LT');
  // console.log(k);
  const m = moment(g);
  p = m.format("LT");
    var e = time_convert(pr.scheduledDuration)
    // console.log(e);
    out += `
  
              
              <tr>
                  <th rowspan="2" style="color: green;">${k} - ${p}</th>
                  <td>${pr.accessPointName} - ${pr.resources}</td>
                  <td>Trade</td>
                  <th rowspan="2">${e}</th>
              </tr>
              <tr>
                  <th>${pr.contactName}</th>
                  <th>Destination</th>
              </tr>

              
              
        
      
  `;
  // const moment = require('moment');
  // const m = moment(new Date(pr.scheduledTimeIn));
  // m.format('h:mma'); 
//  console.log(typeof(pr.scheduledTimeIn));
//  console.log(time_convert(1800));
//  console.log(time_convert(5400));
//  console.log(time_convert(3600));
  }


  
  placeholder.innerHTML = out;
  // console.log(time_convert)
});



fetch("http://127.0.0.1:5501/table.json")
.then(function (response) {
  return response.json();
})
.then(function (datatable) {
  let placeholder = document.querySelector("#tb4");
  let out = ""
  var startDate = "2021-11-18T00:00:00";
  var endDate = "2021-11-20T00:00:00";
  var resultProductData = datatable.results.filter(function (a) {
    return a.date > startDate && a.date < endDate;
  });
  console.log(resultProductData);
  const sortTime = resultProductData.sort((a, b) => a.scheduledTimeIn.localeCompare(b.scheduledTimeIn))
  console.log(sortTime);
  for (let pr of resultProductData) {
    
    function time_convert(d)
  { 
    var a = Math.floor(d/3600);
    var x = d%3600;
    var b = Math.floor(x/60); 
    if(a > 0){ 
      // console.log(a)
      if(b <= 0){
        // console.log(b)
        return a + "hr" 
      } 
      return a + "hr" +  b + "min"
    }
    else{
      return b + "min"
    }
  
    
  // return a + "hr" + b + "min";  
 }
 const f = pr.scheduledTimeIn
 const g = pr.scheduledTimeOut
  const n = moment(f);
  k = n.format('LT');
  // console.log(k);
  const m = moment(g);
  p = m.format("LT");
    var e = time_convert(pr.scheduledDuration)
    // console.log(e);
    out += `
  
              
              <tr>
                  <th rowspan="2" style="color: green;">${k} - ${p}</th>
                  <td>${pr.accessPointName} - ${pr.resources}</td>
                  <td>Trade</td>
                  <th rowspan="2">${e}</th>
              </tr>
              <tr>
                  <th>${pr.contactName}</th>
                  <th>Destination</th>
              </tr>

              
              
        
      
  `;
  // const moment = require('moment');
  // const m = moment(new Date(pr.scheduledTimeIn));
  // m.format('h:mma'); 
//  console.log(typeof(pr.scheduledTimeIn));
//  console.log(time_convert(1800));
//  console.log(time_convert(5400));
//  console.log(time_convert(3600));
  }


  
  placeholder.innerHTML = out;
  // console.log(time_convert)
});


fetch("http://127.0.0.1:5501/table.json")
.then(function (response) {
  return response.json();
})
.then(function (datatable) {
  let placeholder = document.querySelector("#tb5");
  let out = ""
  var startDate = "2021-11-19T00:00:00";
  var endDate = "2021-11-21T00:00:00";
  var resultProductData = datatable.results.filter(function (a) {
    return a.date > startDate && a.date < endDate;
  });
  console.log(resultProductData);

  const sortTime = resultProductData.sort((a, b) => a.scheduledTimeIn.localeCompare(b.scheduledTimeIn))
  console.log(sortTime);
  
  for (let pr of resultProductData) {
    
    function time_convert(d)
  { 
    var a = Math.floor(d/3600);
    var x = d%3600;
    var b = Math.floor(x/60); 
    if(a > 0){ 
      // console.log(a)
      if(b <= 0){
        // console.log(b)
        return a + "hr" 
      } 
      return a + "hr" +  b + "min"
    }
    else{
      return b + "min"
    }
  
    
  // return a + "hr" + b + "min";  
 }
 
 const f = pr.scheduledTimeIn
 const g = pr.scheduledTimeOut
  const n = moment(f);
  k = n.format('LT');
  // console.log(k);
  const m = moment(g);
  p = m.format("LT");
    var e = time_convert(pr.scheduledDuration)
    // console.log(e);
    out += `
  
              
              <tr>
                  <th rowspan="2" style="color: green;">${k} - ${p}</th>
                  <td>${pr.accessPointName} - ${pr.resources}</td>
                  <td>Trade</td>
                  <th rowspan="2">${e}</th>
              </tr>
              <tr>
                  <th>${pr.contactName}</th>
                  <th>Destination</th>
              </tr>

              
              
        
      
  `;
  // const moment = require('moment');
  // const m = moment(new Date(pr.scheduledTimeIn));
  // m.format('h:mma'); 
//  console.log(typeof(pr.scheduledTimeIn));
//  console.log(time_convert(1800));
//  console.log(time_convert(5400));
//  console.log(time_convert(3600));
  }

  placeholder.innerHTML = out;
  // console.log(time_convert)
});




  
//  console.log(time_convert(450));
//  console.log(time_convert(1441));





const n = moment("2021-11-15T08:30:00");
// console.log(n.format('LT'));