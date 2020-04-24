// Add your code here
window.addEventListener("loaded",function(e){
  e.preventDefault();
  
})

function submitData(userName,userEmail){
  
  let formData = {
    name: userName,
    email: userEmail
  };
  
   let configObj = {
    method:"POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };
  
 fetch('http://localhost:3000/users',configObj)
  .then(response => response.json())
  .then(data => handleRequest(data.users))
  .catch(error => console.log(error));
  
  function handleRequest(data){
    data.forEach(el => function(el){
      const createEl = document.createEelement("div");
      createEl.appendChild(el);
    })
  }
}

