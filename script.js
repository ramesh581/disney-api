let body = document.querySelector('body');
body.innerHTML =
`<div class="main-container">
<h1>Disney Characters</h1>
</div>`;

let getData =  async ()=>{
    try{
        let database = await fetch('https://api.disneyapi.dev/characters');
        database = await database.json();
        let users = database.data;
        console.log(users);
        let main = document.querySelector('.main-container');
        let div = document.createElement('div');
        main.appendChild(div);
        div.classList.add('user-container');
        
        users.forEach(user =>{
            div.innerHTML +=
    `<div class="user-card">
    <img src='${user.imageUrl}' alt='${user.name}'
     height='200' width='200' />
    <p>Name : ${user.name}</p>
    <a href="${user.url}" target="_blank">Click for Details</a>
    </div>`;
            
        });
    }catch(err){
        console.log(err);
    }
}
getData();

