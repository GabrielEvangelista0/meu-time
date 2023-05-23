import { useNavigate } from "react-router-dom"

export const data = {
    getCountries: async function (key: string) {
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
            sessionStorage.setItem('coutries', JSON.stringify(data.response))
            window.location.href = '/'
        }

    }
}