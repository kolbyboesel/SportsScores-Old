//API KEY-9f3436bf65c47b3988484cb92d3cb3be


const getNews = {
	method: 'GET',
    url: 'https://nba-latest-news.p.rapidapi.com/articles',
    headers: {
    'X-RapidAPI-Key': '7c01195a20mshbc9188a6ca4f5a5p1ce61cjsn5e640810eca6',
    'X-RapidAPI-Host': 'nba-latest-news.p.rapidapi.com'
  }
};

async function getNewsData(url){
  try {
    let res = await fetch(url, getNews);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

async function showNBANews() {
    buildHomepage(await getNewsData('https://nba-latest-news.p.rapidapi.com/articles'), 'containerNBA')
}

async function showMLBNews() {
}

async function showNFLNews() {
}

async function showNHLNews() {
}

async function buildHomepage(allNews, containerName) {
clear(containerName);

  let html = '<div style="width: 100%; height: 1%; padding-top: 2%; text-align: center; display: inline-block; font-size: 40px; font-family: Impact, Haettenschweiler, Arial Narrow Bold, sans-serif;">Click Any Of The Boxes Below To View The Latest Stories!</div>';
  allNews.forEach(currentGame => {
    let newsTitle = currentGame.title;
    let url = currentGame.url;
    let src = currentGame.source;
    let img = 0;
    if(src === "nba_canada" || src === "nba"){
        img = 'nbaLogo.png';
    }
    if(src === "espn"){
        img = 'espnLogo.png';
    }
    if(src === "slam"){
        img = 'slamLogo.png';
    }
    if(src === "yahoo"){
        img = 'yahooLogo.png';
    }
    if(src === "bleacher_report"){
        img = 'brLogo.png';
    }



    html += generateHomepage(newsTitle, url, img);
    });

  let container = document.querySelector('.' + containerName);
  container.innerHTML = html;
}

function generateHomepage(newsTitle, url, img) {
  let htmlSegment = `<a class="sportsLink" href="${url}"><div class="outerNews"><div class="sportsNews"`;

    htmlSegment += `
      <div class="article">
        <div class="sourceLogo"><img class="imageStyle" src="${img}"></img></div>
        <div class="newsTitle">${newsTitle}</div>
      </div>`
      htmlSegment += `
      </div>
    </div>
    </a>`;

  return htmlSegment;
}
