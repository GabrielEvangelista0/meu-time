import { useParams } from "react-router-dom";
import { getLeaguesFromContry } from "../services/getData";
import { useEffect, useState } from "react";

interface League {
  league: {
    name: string;
    logo: string;
    type: string;
    id: number;
  };
  country: {
    code: string;
    flag: string;
    name: string;
  }
}

export default function Pais() {
  const key = sessionStorage.getItem("key") ?? "";
  const params = useParams();
  const country = params.id ?? "";
  const countrySessionStorage = sessionStorage.getItem(
    country?.toLocaleLowerCase()
  );
  const [countryData, setCountryData] = useState<League[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (countrySessionStorage === null) {
        const data = await getLeaguesFromContry(
          key,
          country?.toLocaleLowerCase()
        );
        setCountryData(data);
      } else {
        setCountryData(JSON.parse(countrySessionStorage || "[]"));
      }
    };

    fetchData();
  }, [key, country, countrySessionStorage]);

  return (
    <>
      <h1>{country}</h1>
      <section>
        <h2>Todas as Competições</h2>
        <ul>
          {countryData.map((item, index) => (
            <li key={index}>
                <img src={item.league.logo} alt="" />
              <h3>{item.league.name}</h3>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
