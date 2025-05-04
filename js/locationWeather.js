    import {weatherDescriptionArr,dustLevel} from './weatherDescription.js';
    
    //날짜 표시
    function getAllDate(){

      const today = new Date();
      const year = today.getFullYear();
      const month = today.getMonth() + 1;
      const day = today.getDate();

      document.querySelector('.year').textContent = year + '년';
      document.querySelector('.month').textContent = month + '월';
      document.querySelector('.day').textContent = day + '일';
    }

    getAllDate();

// 지오로케이션으로 좌표 불러옴
    function getLocation(){
          navigator.geolocation.getCurrentPosition(position => {
          
            const longitude = position.coords.longitude; //경도
            const latitude = position.coords.latitude; //위도
        
          /*
            navigator.geolocation.getCurrentPosition가
            비동기적으로 실행되기 때문에 위치 정보를 가져온 후에
            위치 정보를 사용하는 함수를 호출
          */

          //위치가 업데이트 된 다음 실행;
          getWeather(longitude,latitude);
          useLocation(longitude,latitude);
        }),
          error => {
            console.log('위치 정보 오류: ',error)
          };
      }
      //위치정보 불러오기
      getLocation();
      

    // 날씨정보함수
    function getWeather(longitude,latitude){
      //날씨,대기오염 api key
      const WEATHER_API_KEY = '날씨,대기오염 api key'

      // 날씨API
      const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric&lang=en`;

      // 대기오염API
      const AIR_POLLUTION_API = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`;

      //날씨정보 promise
      const weatherPromise = new Promise(function(resolve, reject) {
        fetch(WEATHER_API)
          .then(response => response.json())
          .then(jsonData => {
            console.log(jsonData)
            resolve(jsonData);
          }).catch(
            error => reject(error)
          )
      })

      weatherPromise.then(function(data) {

          const weatherImg = document.querySelector('.weather-img');
          const weatherBg = document.querySelector('body');
          const weatherArr = ['sun.png','rain.png','cloudy.png','snow.png']
          const weatherBgArr = ['clearBg.jpg','rainBg.jpg','cloudyBg.jpg','snowBg.jpg'];
          const weatherMain = data.weather[0].main;
          const description = data.weather[0].description;
        
          // description을 한글로 번역
          function translateDescription(description){
            const match = weatherDescriptionArr.find((item) => item.en === description );
            return match ? match.ko : description;
          }
          //날씨 상태 문구
          document.querySelector('.weather-value').textContent = translateDescription(description);
          //온도 표시
          document.querySelector('.temp-value').textContent = `${data.main.temp}${String.fromCharCode(176)}C`;
        
           //날씨별 배경 및 상태 이미지 
          if(weatherMain === 'Clear'){
            weatherImg.src = `../img/${weatherArr[0]}`;
            weatherBg.style.backgroundImage = `url('../bg/${weatherBgArr[0]}')`
          }else if(weatherMain === 'Rain' || weatherMain === 'Drizzle' || weatherMain === "Thunderstorm"){
            weatherImg.src = `../img/${weatherArr[1]}`;
            weatherBg.style.backgroundImage = `url('../bg/${weatherBgArr[1]}')`
            document.querySelector('.rainfall').classList.add('show');
            document.querySelector('.rainfall-value').textContent = `${data.rain['1h']}mm`
          }else if(weatherMain === 'Clouds'){
            weatherImg.src = `../img/${weatherArr[2]}`;
            weatherBg.style.backgroundImage = `url('../bg/${weatherBgArr[2]}')`
          }else if(weatherMain === 'Snow'){
            weatherImg.src = `../img/${weatherArr[3]}`;
            weatherBg.style.backgroundImage = `url('../bg/${weatherBgArr[3]}')`
          }else{
            weatherImg.src = `../img/${weatherArr[0]}`;
            weatherBg.style.backgroundImage = `url('../bg/${weatherBgArr[0]}')`
          }
      
        //날씨 정보를 받아오면 미세먼지 정보를 받아옴
        const airPollutionPromise = new Promise(function(resolve, reject){
          fetch(AIR_POLLUTION_API)
          .then(response => response.json())
          .then(data => {
            resolve(data);
          }).catch(
            error => reject(error)
          )
        })
        return airPollutionPromise;

      }).then(function(data){
        //미세먼지
        const pm10 = data.list[0].components.pm10;
        //초미세먼지
        const pm25 = data.list[0].components.pm2_5;

        function dustChk(pm,dustLevelType){
          return dustLevel[dustLevelType].find(({ max }) => pm < max)?.level;
        }
        //미세먼지 표시
        document.querySelector('.aqi-value').textContent = dustChk(pm10, 'findDust');
      })
      .catch(function(error){
        console.log('날씨, 미세먼지 정보 오류: ',error);
      });
    }
        

      //카카오 맵 REST API를 이용한 위치 정보 가져오기(역지오코딩, 좌표 -> 주소)
      function useLocation(longitude,latitude){
        // 카카오 api key 
        const KAKAO_API_KEY = '카카오 api key'
        const KAKAO_MAP_API = `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${longitude}&y=${latitude}&input_coord=WGS84`;

          fetch(KAKAO_MAP_API,{
            method: 'GET',
            headers: {
            'Authorization' : `KakaoAK ${KAKAO_API_KEY}`
          }
          }).then(response => response.json())
          .then(data => {
            console.log(data);
            if(data.documents.length > 0 && data.documents[0].address){
                document.querySelector('.location').textContent = data.documents[0].address.region_2depth_name;
            }else{
              console.log('주소 정보 오류', error);
            }
            }).catch(error => {
              console.log('위치 정보 오류: ',error)
            });
      
      }


    
