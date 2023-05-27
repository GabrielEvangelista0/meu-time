import { useParams } from "react-router-dom";
import { getLeaguesFromContry } from "../services/getData";
import { useEffect } from "react";

export default function Pais() {
    const key = sessionStorage.getItem('key') ?? '';
    const params = useParams();
    const country = params.id ?? '';
    const countryData = JSON.parse(sessionStorage.getItem(country?.toLocaleLowerCase()) || '{}');
    console.log(countryData);

    useEffect(() => {
        //getLeague(key)
        if (sessionStorage.getItem(country?.toLocaleLowerCase()) == null) {
            getLeaguesFromContry(key, country?.toLocaleLowerCase());
        }
    }, [])

    return (
        <>

            <h1>{country}</h1>
            <section>
                <h2>
                    Todas as Competições
                </h2>
                <ul>
                    {countryData.map((item: typeof countryData, index: number) => (
                        <li key={index}>
                            <h3>
                                {item.league.name}
                            </h3>
                        </li>
                    ))}
                </ul>
            </section>

        </>
    )
}