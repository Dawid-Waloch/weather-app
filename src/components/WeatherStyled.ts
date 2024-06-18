import styled from "styled-components";

export const WeatherWrapper = styled.div`
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px 0;
    border-radius: 1em;
    margin-bottom: 20px;
    transition: transform 0.3s ease-in-out;
    margin-top: 50px;

    &:hover {
        transform: scale(1.05);
    }
`

export const Temperature = styled.p`
    float: left;
    width: 50%;
    font-size: 24px;
    text-align: center;
`

export const Description = styled.p`
    float: left;
    width: 50%;
    font-size: 24px;
    text-align: center;
`

export const Wind = styled.p`
    float: left;
    width: 50%;
    font-size: 24px;
    text-align: center;
`

export const Humidity = styled.p`
    float: left;
    width: 50%;
    font-size: 24px;
    text-align: center;
`

export const City = styled.h2`
    font-size: 40px;
    text-align: center;
    font-weight: bold;
`
