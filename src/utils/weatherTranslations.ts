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
    "rain": {
        weatherName: "Deszczowo",
        uniCode: "\u{1F327}",
    },
    "overcast clouds": {
        weatherName: "Pochmurnie",
        uniCode: "\u2601",
    },
    "thunderstorm with light rain": {
        weatherName: "Burza z lekkim deszczem",
        uniCode: "\u26C8 \u{1F327}"
    },
    "thunderstorm with rain": {
        weatherName: "Burza z deszczem",
        uniCode: "\u26C8 \u{1F327}"
    },
    "thunderstorm with heavy rain": {
        weatherName: "Burza z silnym deszczem",
        uniCode: "\u26C8 \u{1F327}"
    },
    "light thunderstorm": {
        weatherName: "Lekka burza",
        uniCode: "\u26C8"
    },
    "thunderstorm": {
        weatherName: "Burza",
        uniCode: "\u26C8"
    },
    "heavy thunderstorm": {
        weatherName: "Silna burza",
        uniCode: "\u26C8"
    },
    "ragged thunderstorm": {
        weatherName: "Burza rozpierzchła",
        uniCode: "\u26C8"
    },
    "thunderstorm with light drizzle": {
        weatherName: "Burza z lekką mżawką",
        uniCode: "\u26C8 \u{1F327}"
    },
    "thunderstorm with drizzle": {
        weatherName: "Burza z mżawką",
        uniCode: "\u26C8 \u{1F327}"
    },
    "thunderstorm with heavy drizzle": {
        weatherName: "Burza z silną mżawką",
        uniCode: "\u26C8 \u{1F327}"
    },
    "light intensity drizzle": {
        weatherName: "Lekka mżawka",
        uniCode: "\u{1F327}"
    },
    "drizzle": {
        weatherName: "Mżawka",
        uniCode: "\u{1F327}"
    },
    "heavy intensity drizzle": {
        weatherName: "Silna mżawka",
        uniCode: "\u{1F327}"
    },
    "light intensity drizzle rain": {
        weatherName: "Lekki deszcz mżawki",
        uniCode: "\u{1F327}"
    },
    "drizzle rain": {
        weatherName: "Deszcz mżawki",
        uniCode: "\u{1F327}"
    },
    "heavy intensity drizzle rain": {
        weatherName: "Silny deszcz mżawki",
        uniCode: "\u{1F327}"
    },
    "shower rain and drizzle": {
        weatherName: "Przelotne opady deszczu i mżawki",
        uniCode: "\u{1F327}"
    },
    "heavy shower rain and drizzle": {
        weatherName: "Silne przelotne opady deszczu i mżawki",
        uniCode: "\u{1F327}"
    },
    "shower drizzle": {
        weatherName: "Przelotna mżawka",
        uniCode: "\u{1F327}"
    },
    "light rain": {
        weatherName: "Lekki deszcz",
        uniCode: "\u{1F327}"
    },
    "moderate rain": {
        weatherName: "Umiarkowany deszcz",
        uniCode: "\u{1F327}"
    },
    "heavy intensity rain": {
        weatherName: "Silny deszcz",
        uniCode: "\u{1F327}"
    },
    "very heavy rain": {
        weatherName: "Bardzo silny deszcz",
        uniCode: "\u{1F327}"
    },
    "extreme rain": {
        weatherName: "Ekstremalny deszcz",
        uniCode: "\u{1F327}"
    },
    "freezing rain": {
        weatherName: "Deszcz marznący",
        uniCode: "\u2744"
    },
    "light intensity shower rain": {
        weatherName: "Lekkie przelotne opady deszczu",
        uniCode: "\u{1F327}"
    },
    "shower rain": {
        weatherName: "Przelotne opady deszczu",
        uniCode: "\u{1F327}"
    },
    "heavy intensity shower rain": {
        weatherName: "Silne przelotne opady deszczu",
        uniCode: "\u{1F327}"
    },
    "ragged shower rain": {
        weatherName: "Niespójne przelotne opady deszczu",
        uniCode: "\u{1F327}"
    },
    "light snow": {
        weatherName: "Lekki śnieg",
        uniCode: "\u2744"
    },
    "snow": {
        weatherName: "Śnieg",
        uniCode: "\u2744"
    },
    "heavy snow": {
        weatherName: "Silny śnieg",
        uniCode: "\u2744"
    },
    "sleet": {
        weatherName: "Śnieg z deszczem",
        uniCode: "\u2744 \u{1F327}"
    },
    "light shower sleet": {
        weatherName: "Lekki śnieg z deszczem",
        uniCode: "\u2744 \u{1F327}"
    },
    "shower sleet": {
        weatherName: "Śnieg z deszczem",
        uniCode: "\u2744 \u{1F327}"
    },
    "light rain and snow": {
        weatherName: "Lekki deszcz i śnieg",
        uniCode: "\u{1F327} \u2744"
    },
    "rain and snow": {
        weatherName: "Deszcz i śnieg",
        uniCode: "\u{1F327} \u2744"
    },
    "light shower snow": {
        weatherName: "Lekki śnieg",
        uniCode: "\u2744"
    },
    "shower snow": {
        weatherName: "Śnieg",
        uniCode: "\u2744"
    },
    "heavy shower snow": {
        weatherName: "Silny śnieg",
        uniCode: "\u2744"
    },
    "mist": {
        weatherName: "Mgła",
        uniCode: "\u{1F32B}"
    },
    "smoke": {
        weatherName: "Dym",
        uniCode: "\u{1F32B}"
    },
    "haze": {
        weatherName: "Mgła spowodowana pyłem",
        uniCode: "\u{1F32B}"
    },
    "sand/dust whirls": {
        weatherName: "Wiry piaskowe/kurzowe",
        uniCode: "\u{1F32B}"
    },
    "fog": {
        weatherName: "Mgła",
        uniCode: "\u{1F32B}"
    },
    "sand": {
        weatherName: "Piasek",
        uniCode: "\u{1F32B}"
    },
    "dust": {
        weatherName: "Kurz",
        uniCode: "\u{1F32B}"
    },
    "volcanic ash": {
        weatherName: "Popiół wulkaniczny",
        uniCode: "\u{1F32B}"
    },
    "squalls": {
        weatherName: "Porywy wiatru",
        uniCode: "\u{1F32B}"
    },
    "tornado": {
        weatherName: "Tornado",
        uniCode: "\u{1F32A}"
    },
}

export default weatherTranslations