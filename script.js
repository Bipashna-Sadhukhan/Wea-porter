const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Tokyo';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '47841216c4msh8e4fac881fc91f1p1bb545jsnb76d01e0b63a',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}