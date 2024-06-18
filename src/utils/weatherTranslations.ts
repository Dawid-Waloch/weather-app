interface WeatherTranslations {
    [key: string]: {
        weatherName: string;
        uniCode: string;
    }; 
};

const weatherTranslations: WeatherTranslations = {
    "broken clouds": {
        weatherName: "Pochmurnie",
        uniCode: "\u2601",
    },
    "clear sky": {
        weatherName: "Słonecznie",
        uniCode: "\u2600",
    },
    "scattered clouds": {
        weatherName: "Częściowo pochmurnie",
        uniCode: "\u26C5",
    },
    "few clouds": {
        weatherName: "Częściowo słonecznie",
        uniCode: "\u26C5",
    },
    "shower rain": {
        weatherName: "Mżawka",
        uniCode: "\u{1F326}",
    },
    "rain": {
        weatherName: "Deszczowo",
        uniCode: "\u{1F327}",
    },
    "thunderstorm": {
        weatherName: "Burzowo",
        uniCode: "\u{1F329}",
    },
    "snow": {
        weatherName: "Śnieżnie",
        uniCode: "\u{1F328}",
    },
    "mist": {
        weatherName: "Mgliście",
        uniCode: "\u{1F32B}",
    },
}

export default weatherTranslations