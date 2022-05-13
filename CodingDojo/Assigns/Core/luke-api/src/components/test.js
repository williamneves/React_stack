const getPlanetId = (url) => {
	const urlArray = url.split('/');
	return urlArray[urlArray.length - 2];
};

console.log(getPlanetId('https://swapi.dev/api/planets/15/'));
