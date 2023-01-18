const movieContainer = document.querySelector('.movieContainer');
const movieContainer1 = document.createElement('div');
const ur = document.createElement('ul');
movieContainer.append(movieContainer1);
movieContainer.append(ul)
const url = 'test.json'
window.addEventListener('DOMContentLoaded',()=>{
    movieContainer.textContent = 'ready';
    loadData();
})

function loadData(){
    fetch(url).then(rep=>rep.json())
    .then((data)=>{
        console.log(data);
        addtoPage(data);
    })
}

function addtoPage(arr){
    arr.array.forEach(element => {
        console.log();
    });
}