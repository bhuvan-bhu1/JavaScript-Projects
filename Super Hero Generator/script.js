const hero = document.getElementById("hero1")
const power = document.getElementById("power")
const baseurl = "https://www.superheroapi.com/api.php/109638598681476/"
const newhero = document.getElementById("newhero")
const displayname = document.getElementById("name")



const random = () => {
    return Math.floor((Math.random() * 730) + 1 )
}

const stats = (given) => {
    power.innerHTML = `
    🪪Id : ${given.id} <br/> 
    💪Power : ${given.powerstats.power} <br/>
    🧠Intelligence : ${given.powerstats.intelligence} <br/>
    ⚡Speed : ${given.powerstats.speed} <br/>
    🏋️Strength : ${given.powerstats.strenght} <br/>
    `
}

const run = () => {
    const id = random()
    // const id = 655
    fetch(`${baseurl}/${id}`)
    .then(response => response.json())
    .then(json => {
        // const give = json
        const update = json.image.url
        hero.innerHTML = `<img src = ${update} height = 300px width = 300px>`
        // console.log(json.name)
        displayname.innerHTML = json.name
        stats(json)
    })
    
}

const getherobysearch = (name) => {
    const url = "https://www.superheroapi.com/api.php/109638598681476/search/" + name
    // console.log(url)
    fetch(url)
    .then (response => response.json())
    .then (json => {
        
        const imageurl = json.results[0].image.url
        hero.innerHTML = `<img src = ${imageurl} height = 300px width = 300px>`
        displayname.innerHTML = json.results[0].name
        console.log(json)
        stats(json.results[0])
    })
}

const searchbutton = document.getElementById("search")
searchbutton.onclick = () => {
    const input = document.getElementById("input")
    getherobysearch(input.value)
}

newhero.onclick = () => run()