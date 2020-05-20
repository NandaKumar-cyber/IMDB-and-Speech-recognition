let githubserver="https://api.github.com/users"

// window.fetch(githubserver)
// .then((data)=>console.log(data))
// .catch((err)=>console.log(err));

window.fetch(githubserver)
.then((data) =>{
    data.json()
    .then((gitUsers)=>{
        let output=[];
        for(let user of gitUsers){
                    output +=`
                    <div>
                     <img src="${user.avatar_url}"/>
                     <h1> user: ${user.login}</h1> 
                     <a href="${user.html_url}" target="_blank">details</a>
                     </div>`;
            }

document.getElementById("template").innerHTML=output;
    })
.catch((err)=> console.log(err))
})
.catch((err)=> console.log(err))


