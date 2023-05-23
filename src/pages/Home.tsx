import { useEffect } from "react"
import {useNavigate} from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate()
    useEffect(() => {
        const key = sessionStorage.getItem('key');
        if (key == undefined) {
            navigate('/login')
        }
    },[])
    return (
        <h1>
            Home
        </h1>
    )
}