// const input = document.getElementById("input")
// const req = input.value
// console.log(req)

const main = document.getElementById("main")
const info = document.getElementById("info")



const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'dd56ce9576msh6080c645b21880ap13976djsn974779118eef',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

const run = () => {
	const input = document.getElementById("input")
	const req = input.value
	// const req = "Hindupur"
    fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${req}`, options)
	.then(response => response.json())
	.then(response => {
		const name = Object.values(response)[0].name
		const tempinc = Object.values(response)[1].temp_c
		const tempinf = Object.values(response)[1].temp_f
		const region = Object.values(response)[0].region
		const condtion = Object.values(response)[1].condition.text
		main.innerHTML = `
			<p>City name : ${name}</p>
			<p>Region : ${region}</p>
			<p>Condition : ${condtion}</p>
		`
		info.innerHTML = `
		<p>In Celsius : ${tempinc} &#8451;</p>
		<p>In Farenheit : ${tempinf} &#8457</p>
		`
	})
	.catch(err => console.error(err));


}

// const button = document.getElementById("search")
// button.onclick = run()

// 	fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${req}`, options)
// 	.then(response => response.json())
// 	.then(response => {
// 		const name = Object.values(response)[0].name
// 		const tempinc = Object.values(response)[1].temp_c
// 		const tempinf = Object.values(response)[1].temp_f
// 		console.log(name)
// 		console.log(tempinc)
// 	})
// 	.catch(err => console.error(err));
// }