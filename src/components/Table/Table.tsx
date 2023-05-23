import { Link } from "react-router-dom"
import styled from "styled-components"
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import './pagination.css'

export default function Table() {
    const storageCountries = JSON.parse(sessionStorage.getItem('countries') || '[]')
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 10; // Quantidade de itens por página
    const pageCount = Math.ceil(storageCountries.length / itemsPerPage); // Cálculo do número total de páginas
    const startIndex: number = currentPage * itemsPerPage;
    const endIndex: number = startIndex + itemsPerPage;
    const displayedItems = storageCountries.slice(startIndex, endIndex);


    const handlePageChange = ({ selected }: { selected: number }) => {
        setCurrentPage(selected);
    };


    return (
        <section className="container">
            <StyledTable>
                <thead>
                    <tr>
                        <th>Bandeira</th>
                        <th>nome</th>
                        <th>codigo</th>
                    </tr>
                </thead>
                <tbody>
                    {displayedItems.map((item: typeof storageCountries) => (
                        <tr key={item.name}>
                            <th>
                                <img src={item.flag} alt="" />
                            </th>
                            <th>
                                <Link to={'/'}>
                                    {item.name}
                                </Link>
                            </th>
                            <th>{item.code}</th>
                        </tr>
                    ))}
                </tbody>
            </StyledTable>
            <ReactPaginate
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageChange}
                containerClassName={'pagination'}
                activeClassName={'active'}
                
            />
        </section>


    )
}

const StyledTable = styled.table`
    height: 80vh;
    width: 70%;
    overflow: scroll;
    img{
        width: 50px;
        border-radius: 10px;
    }
    th{
        border: 1px solid black;
        padding: 1rem;
        text-align: justify;
    }
`