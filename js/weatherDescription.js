const weatherDescriptionArr = [
  { category: "Thunderstorm", en: "thunderstorm with light rain", ko: "약한 비를 동반한 천둥번개" },
  { category: "Thunderstorm", en: "thunderstorm with rain", ko: "비를 동반한 천둥번개" },
  { category: "Thunderstorm", en: "thunderstorm with heavy rain", ko: "강한 비를 동반한 천둥번개" },
  { category: "Thunderstorm", en: "light thunderstorm", ko: "약한 천둥번개" },
  { category: "Thunderstorm", en: "thunderstorm", ko: "천둥번개" },
  { category: "Thunderstorm", en: "heavy thunderstorm", ko: "강한 천둥번개" },
  { category: "Thunderstorm", en: "ragged thunderstorm", ko: "불규칙한 천둥번개" },
  { category: "Thunderstorm", en: "thunderstorm with light drizzle", ko: "이슬비를 동반한 천둥번개" },
  { category: "Thunderstorm", en: "thunderstorm with drizzle", ko: "이슬비를 동반한 천둥번개" },
  { category: "Thunderstorm", en: "thunderstorm with heavy drizzle", ko: "짙은 이슬비를 동반한 천둥번개" },

  { category: "Drizzle", en: "light intensity drizzle", ko: "약한 이슬비" },
  { category: "Drizzle", en: "drizzle", ko: "이슬비" },
  { category: "Drizzle", en: "heavy intensity drizzle", ko: "짙은 이슬비" },
  { category: "Drizzle", en: "light intensity drizzle rain", ko: "약한 이슬비와 비" },
  { category: "Drizzle", en: "drizzle rain", ko: "이슬비와 비" },
  { category: "Drizzle", en: "heavy intensity drizzle rain", ko: "짙은 이슬비와 비" },
  { category: "Drizzle", en: "shower rain and drizzle", ko: "소나기와 이슬비" },
  { category: "Drizzle", en: "heavy shower rain and drizzle", ko: "강한 소나기와 이슬비" },
  { category: "Drizzle", en: "shower drizzle", ko: "소나기와 이슬비" },

  { category: "Rain", en: "light rain", ko: "약한 비" },
  { category: "Rain", en: "moderate rain", ko: "보통 비" },
  { category: "Rain", en: "heavy intensity rain", ko: "강한 비" },
  { category: "Rain", en: "very heavy rain", ko: "매우 강한 비" },
  { category: "Rain", en: "extreme rain", ko: "극심한 비" },
  { category: "Rain", en: "freezing rain", ko: "어는 비" },
  { category: "Rain", en: "light intensity shower rain", ko: "약한 소나기" },
  { category: "Rain", en: "shower rain", ko: "소나기" },
  { category: "Rain", en: "heavy intensity shower rain", ko: "강한 소나기" },
  { category: "Rain", en: "ragged shower rain", ko: "불규칙한 소나기" },

  { category: "Snow", en: "light snow", ko: "약한 눈" },
  { category: "Snow", en: "snow", ko: "눈" },
  { category: "Snow", en: "heavy snow", ko: "강한 눈" },
  { category: "Snow", en: "sleet", ko: "진눈깨비" },
  { category: "Snow", en: "light shower sleet", ko: "약한 소나기 진눈깨비" },
  { category: "Snow", en: "shower sleet", ko: "소나기 진눈깨비" },
  { category: "Snow", en: "light rain and snow", ko: "약한 비와 눈" },
  { category: "Snow", en: "rain and snow", ko: "비와 눈" },
  { category: "Snow", en: "light shower snow", ko: "약한 소나기 눈" },
  { category: "Snow", en: "shower snow", ko: "소나기 눈" },
  { category: "Snow", en: "heavy shower snow", ko: "강한 소나기 눈" },

  { category: "Atmosphere", en: "mist", ko: "박무" },
  { category: "Atmosphere", en: "smoke", ko: "연기" },
  { category: "Atmosphere", en: "haze", ko: "연무" },
  { category: "Atmosphere", en: "sand/dust whirls", ko: "모래 및 먼지 회오리" },
  { category: "Atmosphere", en: "fog", ko: "안개" },
  { category: "Atmosphere", en: "sand", ko: "황사" },
  { category: "Atmosphere", en: "dust", ko: "먼지" },
  { category: "Atmosphere", en: "volcanic ash", ko: "화산재" },
  { category: "Atmosphere", en: "squalls", ko: "돌풍" },
  { category: "Atmosphere", en: "tornado", ko: "토네이도" },

  { category: "Clear", en: "clear sky", ko: "맑음" },

  { category: "Clouds", en: "few clouds", ko: "구름 조금" },
  { category: "Clouds", en: "scattered clouds", ko: "구름 낌" },
  { category: "Clouds", en: "broken clouds", ko: "구름 많음" },
  { category: "Clouds", en: "overcast clouds", ko: "흐림" }
];

const dustLevel = {
  //미세먼지
  findDust :[
    { max: 20, level: "매우좋음" },
    { max: 50, level: "좋음" },
    { max: 100, level: "보통" },
    { max: 200, level: "나쁨" },
    { max: Infinity, level: "매우나쁨" }
  ],
  //초미세먼지
  ultrafineDust : [
    { max: 10, level: "매우좋음" },
    { max: 25, level: "좋음" },
    { max: 50, level: "보통" },
    { max: 75, level: "나쁨" },
    { max: Infinity, level: "매우나쁨" }]

};

export {weatherDescriptionArr,dustLevel};