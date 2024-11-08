async function fetchData() {
    try{
        let res = await fetch('https://api.github.com/users?per_page=10');
        console.log(res);
        let data = await res.json();
        console.log(data);
        data.forEach((element) => {
            console.log(`Node Id : ${element.login}`);
            let p = document.createElement('a');
            p.innerText=element.login;
            p.setAttribute("href",element.html_url)
            let d = document.createElement('div');
            d.appendChild(p);
            let top = document.getElementById('top');
            top.appendChild(d);
        });
    }
    catch(err){
        console.log(err);
    }
}
// fetchData();