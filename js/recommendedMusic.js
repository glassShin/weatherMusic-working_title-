const YT_API_KEY =  '유튜브 API 키'
const PLAYLIST_ID =   '포크라노스 offical audio 플레이리스트'

async function getIndieSong() {

try{
    const maxResult = 3578;
    const YT_API = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${PLAYLIST_ID}&maxResults=${maxResult}&key=${YT_API_KEY}`;

    const response = await fetch(YT_API);
    const data = await response.json();

    if (data.items.length > 0) {

      const randomIndex = Math.floor(Math.random() * data.items.length);
      const VIDEO = data.items[randomIndex];
      // const title = video.snippet.title;
      const VIDEO_ID = VIDEO.snippet.resourceId.videoId;

      const musicPlayArea = document.querySelector('.music-frame-area');
      musicPlayArea.innerHTML = `
        <iframe class="music-frame"width="100%" height="350"
          src="https://www.youtube.com/embed/${VIDEO_ID}"
          frameborder="10"
          allowfullscreen>
        </iframe>
      `;
      // console.log(VIDEO_ID)
    } else {
      alert("추천할 곡이 없습니다!");
    }
  }catch{
    console.log('플레이리스트 조회 실페 : ', error);
  }
}

document.addEventListener('DOMContentLoaded',getIndieSong);
document.querySelector('.recommend-btn').addEventListener('click', getIndieSong);