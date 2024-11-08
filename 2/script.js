async function fetchData() {
    try{
        let res = await fetch('https://api.github.com/users?per_page=10');
        console.log(res);
        let data = await res.json();
        console.log(data);
        data.forEach((element) => {
            console.log(`Node Id : ${element.login}`);
            let p = document.createElement('p');
            p.innerText=element.login;
            let top = document.getElementById('top');
            top.appendChild(p);
        });
    }
    catch(err){
        console.log(err);
    }
}
// fetchData();