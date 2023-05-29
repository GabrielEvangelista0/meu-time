
export async function getCountries(key: string) {
    const res = await fetch("https://v3.football.api-sports.io/countries", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": key
        }
    })

    const data = await res.json()
    console.log(data)
    if (data.errors.token != undefined) {
        alert(data.errors.token)
    } else {
        sessionStorage.setItem('key', key)
        sessionStorage.setItem('countries', JSON.stringify(data.response))
        window.location.href = '/'
    }
}


export async function getLeaguesFromContry (key: string, country: string) {
    try {
        const res = await fetch(`https://v3.football.api-sports.io/leagues?country=${country}`, {
            method: "GET",
            headers: {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": key
            }
        });

        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }

        const data = await res.json();
        sessionStorage.setItem(`${country}`, JSON.stringify(data.response))
        console.log(data);
        return data.response
    } catch (error) {
        console.error(error);
    }
}