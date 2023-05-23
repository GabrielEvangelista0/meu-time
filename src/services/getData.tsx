export const data = {
    getCountries:async function (key: string) {
        fetch("https://v3.football.api-sports.io/countries", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": key
            }
        })
            .then(response => {
                console.log(response);
                if(response.status == 200 || 204){
                    console.log(response)
                    sessionStorage.setItem('key', key)
                }
            })
            .catch(err => {
                console.log(err);
            });
    }
}