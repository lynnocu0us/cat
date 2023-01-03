let generate = document.querySelector(".btn");

generate.addEventListener("click", deployCat);

function deployCat(){
    let catImg = document.querySelector('.catImg')
    catImg.innerHTML = "" //allows web page to regenerate

    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then((data) => {
        let catImgUrl = data[0].url 

        let catImgEl = document.createElement("img")
        catImgEl.setAttribute('src', `${catImgUrl}`)
        catImgEl.classList.add("catcase")
    
        let catImg = document.querySelector('.catImg')
        catImg.appendChild(catImgEl)
    })
    .catch(err => console.log(err))
}