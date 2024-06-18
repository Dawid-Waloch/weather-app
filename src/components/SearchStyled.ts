import styled from "styled-components";

export const SearchWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1em;
    margin: 10px;
`

export const SearchInput = styled.input`
    padding: 10px;
    font-size: 16px;
    border: 2px solid #ccc;
    border-radius: 1em;
    margin-right: 10px;
    width: 300px;

    &:focus {
        outline: none;
        border-color: #007bff;
        box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
    }
`

export const SearchButton = styled.button`
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 1em;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
        background-color: #0056b3;
    }

    &:focus {
        outline: none;
    }
`