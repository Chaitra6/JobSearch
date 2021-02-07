var page = 0 ;
const btn_next = document.querySelector('#btn-next');
const btn_prev = document.querySelector('#btn-prev');

const msg = document.querySelector('#data');
//const description = document.getElementById('description').value ;
const loc = document.getElementById('location').value ;

const nextPage =()=>{
 page += 1 ;
}

const prevPage =()=>{
  page -= 1 ;
 }

function searchJOB() {  
  page = 0;
 // https://jobs.github.com/positions.json?description=python&full_time=true&location=sf  description=${description}&
  const promise = new Promise((resolve, reject) => {
  const request = new XMLHttpRequest();
  request.open('GET', `https://jobs.github.com/positions.json?location=${loc}`);
  request.onload = () => {
    if (request.status === 200) {
      resolve(request.response); // we got data here, so resolve the Promise
    } else {
      reject(Error(request.statusText)); // status is not 200 OK, so reject
    }
  };
  request.onerror = () => {
    reject(Error('Error fetching data.')); // error occurred, reject the  Promise
  };
  request.send(); // send the request
});  
promise.then((data) => {
    console.log(JSON.parse(data))
  console.log('Got data! Promise fulfilled.');
  const result = JSON.parse(data)
  
  var company=''     
                  result.forEach(function(comp) {

                    company+=
                  `<div class="company">                    
                    <img src="${comp.company_logo}" id="clogo" alt="c_logo">
                    <br>
                    <div class="text1">${comp.created_at} </div>
                    <div class="text1">  ${comp.type} </div>
                    <div class="strength">${comp.title}</div>
                    <div class="comp-name">${comp.company}</div>
                    <div class="loc" >${comp.location}</div> </br>
                    <input type="button" class="applyJ" onclick="location.href='${comp.url}';" value="APPLY" />
                   </div>`
              } );     
  msg.innerHTML = company;
}, (error) => {
  console.log('Promise rejected.');
  console.log(error.message);
});
}

// loadall();

// function loadall(){
//   const promise = new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://jobs.github.com/positions.json?&page=${page}`);
//     request.onload = () => {
//       if (request.status === 200) {
//         resolve(request.response); // we got data here, so resolve the Promise
//       } else {
//         reject(Error(request.statusText)); // status is not 200 OK, so reject
//       }
//     };
//     request.onerror = () => {
//       reject(Error('Error fetching data.')); // error occurred, reject the  Promise
//     };
//     request.send(); // send the request
//   });  
//   promise.then((data) => {
//       console.log(JSON.parse(data))
//     console.log('Got data! Promise fulfilled.');
//     const result = JSON.parse(data)
//     var company='<h2></h2>'     
//                     result.forEach(function(comp) {
//                       company+=
//                     `<div class="company">
//                       <img src="${comp.company_logo}" id="clogo" alt="c_logo">
//                       <br>
//                       <div class="text1">${comp.created_at} </div>
//                       <div class="text1">  ${comp.type} </div>
//                       <div class="strength">${comp.title}</div>  
//                       <div class="comp-name">${comp.company}</div>
//                       <div class="loc" >${comp.location}</div>                                           
//                       </div>
//                      </div>`
//                 } );     
//     msg.innerHTML = company;
//   }, (error) => {
//     console.log('Promise rejected.');
//     console.log(error.message);
//   });
// }


btn_next.onclick = function () {
    // page=Number(btn_next.value)+(++count1);
    nextPage();
    const promise = new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open('GET', `https://jobs.github.com/positions.json?&page=${page}`);
    request.onload = () => {
      if (request.status === 200) {
        resolve(request.response); // we got data here, so resolve the Promise
      } else {
        reject(Error(request.statusText)); // status is not 200 OK, so reject
      }
    };
    request.onerror = () => {
      reject(Error('Error fetching data.')); // error occurred, reject the  Promise
    };
    request.send(); // send the request
  });  
  promise.then((data) => {
      console.log(JSON.parse(data))
    console.log('Got data! Promise fulfilled.');
    const result = JSON.parse(data)
    var company='<h2></h2>'     
                    result.forEach(function(comp) {
                      company+=
                    `<div class="company">
                      <img src="${comp.company_logo}" id="clogo" alt="c_logo">
                      <br>
                      <div class="text1">${comp.created_at} </div>
                      <div class="text1">  ${comp.type} </div>
                      <div class="strength">${comp.title}</div>  
                      <div class="comp-name">${comp.company}</div>
                      <div class="loc" >${comp.location}</div> </br> 
                      <input type="button" class="applyJ" onclick="location.href='${comp.url}';" value="APPLY" />                                         
                      </div>
                     </div>`
                } );     
    msg.innerHTML = company;
  }, (error) => {
    console.log('Promise rejected.');
    console.log(error.message);
  });
}


btn_prev.onclick = function () {
  // page=Number(btn_prev.value)+count1--;
  prevPage();
  const promise = new Promise((resolve, reject) => {
  const request = new XMLHttpRequest();
  request.open('GET', `https://jobs.github.com/positions.json?&page=${page}`);
  request.onload = () => {
    if (request.status === 200) {
      resolve(request.response); // we got data here, so resolve the Promise
    } else {
      reject(Error(request.statusText)); // status is not 200 OK, so reject
    }
  };
  request.onerror = () => {
    reject(Error('Error fetching data.')); // error occurred, reject the  Promise
  };
  request.send(); // send the request
});  
promise.then((data) => {
    console.log(JSON.parse(data))
  console.log('Got data! Promise fulfilled.');
  const result = JSON.parse(data)
  var company='<h2></h2>'     
                  result.forEach(function(comp) {
                    company+=
                  `<div class="company">
                    <img src="${comp.company_logo}" id="clogo" alt="c_logo">
                    <br>
                    <div class="text1">${comp.created_at} </div>
                    <div class="text1">  ${comp.type} </div>
                    <div class="strength">${comp.title}</div>  
                    <div class="comp-name">${comp.company}</div>
                    <div class="loc" >${comp.location}</div> </br>
                    <input type="button" class="applyJ" onclick="location.href='${comp.url}';" value="APPLY" />                                          
                    </div>
                   </div>`
              } );     
  msg.innerHTML = company;
}, (error) => {
  console.log('Promise rejected.');
  console.log(error.message);
});
}






