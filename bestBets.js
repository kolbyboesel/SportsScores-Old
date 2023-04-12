//API KEY-9f3436bf65c47b3988484cb92d3cb3be

function clearNBA()
{  	let container = document.querySelector('.containerNBA');
	container.innerHTML = "";
}

function clearMLB()
{  	let container = document.querySelector('.containerMLB');
	container.innerHTML = "";
}

const betPredict = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7c01195a20mshbc9188a6ca4f5a5p1ce61cjsn5e640810eca6',
		'X-RapidAPI-Host': 'betigolo-predictions.p.rapidapi.com'
	}
};

fetch(url, betPredict)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

async function getBetData(url){
  try {
    let res = await fetch(url, betPredict);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

async function showNBABets() {
    buildBestBetBoard(await getBetData('https://betigolo-predictions.p.rapidapi.com/basketball/2023-04-12'), 'containerNBA')
}

async function showMLBBets() {
	buildBestBetBoard(await getBetData('https://betigolo-predictions.p.rapidapi.com/baseball/2023-04-12'), 'containerMLB')	
}

async function showNFLBets() {
	buildBestBetBoard(await getData('https://betigolo-predictions.p.rapidapi.com/football/2023-04-12'), 'containerNFL')	
}

async function showNHLBets() {
	buildBestBetBoard(await getData('https://betigolo-predictions.p.rapidapi.com/icehockey/2023-04-12'), 'containerNHL')	
}

function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

async function buildBestBetBoard(allOdds, containerName) {
clear(containerName);

  let html = '';
  allOdds.forEach(currentGame => {
    let homeTeam = 0;
    let awayTeam = 0;
    let homeMoneylineVal = 0;
    let awayMoneylineVal = 0;
    if(currentGame.country_name === "USA"){
        homeTeam = currentGame.home_team_name;
        awayTeam = currentGame.away_team_name;
        homeMoneylineVal = round(currentGame.rank_htw_nt, 2);
        awayMoneylineVal = round(currentGame.rank_atw_nt, 2);
        html += generateBestBetsBoard(currentGame, homeTeam, awayTeam, homeMoneylineVal, awayMoneylineVal);

    }
  });
  let container = document.querySelector('.' + containerName);
  container.innerHTML = html;
}

function generateBestBetsBoard(currentGame, homeTeam, awayTeam, homeMoneylineVal, awayMoneylineVal) {
  let htmlSegment = `<div class="outerBestBets"><div class="bestBets">`;

    htmlSegment += `<div class="header">
        <div class="headerElement-team">Team Name</div>
        <div class="headerElement-best">Moneyline Value</div>
        <div class="headerElement-best">% Odds to Hit</div>
      </div>
      <div class="team">
        <div class="bestBetTeam">${awayTeam}</div>
        <div class="bestBetElement">-170</div>
        <div class="bestBetElement">${awayMoneylineVal * 100}</div>
      </div>
     
      <div class="team">
        <div class="bestBetTeam">${homeTeam}</div>
        <div class="bestBetElement">140</div>
        <div class="bestBetElement">${homeMoneylineVal * 100}</div>
      </div>`;

      htmlSegment += `
      </div>
    </div>`;

  return htmlSegment;
}
