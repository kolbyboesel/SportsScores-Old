//API KEY-9f3436bf65c47b3988484cb92d3cb3be

function clearNBA()
{  	let container = document.querySelector('.containerNBA');
	container.innerHTML = "";
}

function clearMLB()
{  	let container = document.querySelector('.containerMLB');
	container.innerHTML = "";
}

options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7c01195a20mshbc9188a6ca4f5a5p1ce61cjsn5e640810eca6',
		'X-RapidAPI-Host': 'odds.p.rapidapi.com'
	}
};

async function getData(url){
  try {
    let res = await fetch(url, options);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

async function showNBAOdds() {
	buildOddsBoard(await getData('https://odds.p.rapidapi.com/v4/sports/basketball_nba/odds?regions=us&oddsFormat=american&markets=spreads,totals,h2h&dateFormat=iso'), 'containerNBA')
}

async function showMLBOdds() {
	buildOddsBoard(await getData('https://odds.p.rapidapi.com/v4/sports/baseball_mlb/odds?regions=us&oddsFormat=american&markets=spreads,totals,h2h&dateFormat=iso'), 'containerMLB')	
}

async function showNFLOdds() {
	buildOddsBoard(await getData('https://odds.p.rapidapi.com/v4/sports/americanfootball_nfl/odds?regions=us&oddsFormat=american&markets=spreads,totals,h2h&dateFormat=iso'), 'containerNFL')	
}

async function showNHLOdds() {
	buildOddsBoard(await getData('https://odds.p.rapidapi.com/v4/sports/icehockey_nhl/odds?regions=us&oddsFormat=american&markets=spreads,totals,h2h&dateFormat=iso'), 'containerNHL')	
}

async function buildOddsBoard(allOdds, containerName) {
clear(containerName);

  let html = '';
  allOdds.forEach(currentGame => {
    let awaySpread = 0;
    let homeSpread = 0;
    let homeSpreadOdds = 0;
    let awaySpreadOdds = 0;
    let awayMoneyline = 0;
    let homeMoneyline = 0;
    let overValue = 0;
    let underValue = 0;
    let overOdds = 0;
    let underOdds = 0;
    if(currentGame.bookmakers[0].markets.length === 1){
        currentMarket = currentGame.bookmakers[0].markets[0].key;
        if(currentMarket === "spreads"){
            if(currentGame.away_team == currentGame.bookmakers[0].markets[0].outcomes[0].name){
                awaySpread = currentGame.bookmakers[0].markets[0].outcomes[0].point;
                awaySpreadOdds = currentGame.bookmakers[0].markets[0].outcomes[0].price;
                homeSpread = currentGame.bookmakers[0].markets[0].outcomes[1].point;
                homeSpreadOdds = currentGame.bookmakers[0].markets[0].outcomes[1].price;
            }
            else{
                awaySpread = currentGame.bookmakers[0].markets[0].outcomes[1].point;
                awaySpreadOdds = currentGame.bookmakers[0].markets[0].outcomes[1].price;
                homeSpread = currentGame.bookmakers[0].markets[0].outcomes[0].point;
                homeSpreadOdds = currentGame.bookmakers[0].markets[0].outcomes[0].price;
            }
        }
        if(currentMarket === "h2h"){
            if(currentGame.away_team == currentGame.bookmakers[0].markets[0].outcomes[0].name){
                awayMoneyline = currentGame.bookmakers[0].markets[0].outcomes[0].price;
                homeMoneyline = currentGame.bookmakers[0].markets[0].outcomes[1].price;
            }
        }
        if(currentMarket === "totals"){
            if(currentGame.bookmakers[0].markets[0].outcomes[0].name == "Over"){
                overValue = currentGame.bookmakers[0].markets[0].outcomes[0].point;
                overOdds = currentGame.bookmakers[0].markets[0].outcomes[0].price;
                underValue = currentGame.bookmakers[0].markets[0].outcomes[1].point;
                underOdds = currentGame.bookmakers[0].markets[0].outcomes[1].price;
            }
            else{
                overValue = currentGame.bookmakers[0].markets[i].outcomes[1].point;
                overOdds = currentGame.bookmakers[0].markets[i].outcomes[1].price;
                underValue = currentGame.bookmakers[0].markets[i].outcomes[0].point;
                underOdds = currentGame.bookmakers[0].markets[i].outcomes[0].price;
            }
        }
    }
    if(currentGame.bookmakers[0].markets.length === 2){
        for(let i = 0; i < 2; i++){
            currentMarket = currentGame.bookmakers[0].markets[i].key;
                if(currentMarket === "spreads"){
                    if(currentGame.away_team == currentGame.bookmakers[0].markets[i].outcomes[0].name){
                        awaySpread = currentGame.bookmakers[0].markets[i].outcomes[0].point;
                        awaySpreadOdds = currentGame.bookmakers[0].markets[i].outcomes[0].price;
                        homeSpread = currentGame.bookmakers[0].markets[i].outcomes[1].point;
                        homeSpreadOdds = currentGame.bookmakers[0].markets[i].outcomes[1].price;
                    }
                    else{
                        awaySpread = currentGame.bookmakers[0].markets[i].outcomes[1].point;
                        awaySpreadOdds = currentGame.bookmakers[0].markets[i].outcomes[1].price;
                        homeSpread = currentGame.bookmakers[0].markets[i].outcomes[0].point;
                        homeSpreadOdds = currentGame.bookmakers[0].markets[i].outcomes[0].price;
                    }
                }else if(currentMarket === "h2h"){
                    if(currentGame.away_team == currentGame.bookmakers[0].markets[i].outcomes[0].name){
                        awayMoneyline = currentGame.bookmakers[0].markets[i].outcomes[0].price;
                        homeMoneyline = currentGame.bookmakers[0].markets[i].outcomes[1].price;
                    }
                }else if(currentMarket === "totals"){
                    if(currentGame.bookmakers[0].markets[i].outcomes[0].name == "Over"){
                        overValue = currentGame.bookmakers[0].markets[i].outcomes[0].point;
                        overOdds = currentGame.bookmakers[0].markets[i].outcomes[0].price;
                        underValue = currentGame.bookmakers[0].markets[i].outcomes[1].point;
                        underOdds = currentGame.bookmakers[0].markets[i].outcomes[1].price;
                    }
                    else{
                        overValue = currentGame.bookmakers[0].markets[i].outcomes[1].point;
                        overOdds = currentGame.bookmakers[0].markets[i].outcomes[1].price;
                        underValue = currentGame.bookmakers[0].markets[i].outcomes[0].point;
                        underOdds = currentGame.bookmakers[0].markets[i].outcomes[0].price;
                    }
                }
        }
    }
    if(currentGame.bookmakers[0].markets.length === 3){
        for(let i = 0; i < 3; i++){
            currentMarket = currentGame.bookmakers[0].markets[i].key;
                if(currentMarket === "spreads"){
                    if(currentGame.away_team == currentGame.bookmakers[0].markets[i].outcomes[0].name){
                        awaySpread = currentGame.bookmakers[0].markets[i].outcomes[0].point;
                        awaySpreadOdds = currentGame.bookmakers[0].markets[i].outcomes[0].price;
                        homeSpread = currentGame.bookmakers[0].markets[i].outcomes[1].point;
                        homeSpreadOdds = currentGame.bookmakers[0].markets[i].outcomes[1].price;
                    }
                    else{
                        awaySpread = currentGame.bookmakers[0].markets[i].outcomes[1].point;
                        awaySpreadOdds = currentGame.bookmakers[0].markets[i].outcomes[1].price;
                        homeSpread = currentGame.bookmakers[0].markets[i].outcomes[0].point;
                        homeSpreadOdds = currentGame.bookmakers[0].markets[i].outcomes[0].price;
                    }
                } else if(currentMarket === "h2h"){
                    if(currentGame.away_team == currentGame.bookmakers[0].markets[i].outcomes[0].name){
                        awayMoneyline = currentGame.bookmakers[0].markets[i].outcomes[0].price;
                        homeMoneyline = currentGame.bookmakers[0].markets[i].outcomes[1].price;
                    }
                    else{
                        homeMoneyline = currentGame.bookmakers[0].markets[i].outcomes[0].price;
                        awayMoneyline = currentGame.bookmakers[0].markets[i].outcomes[1].price;
                    }
                } else if(currentMarket === "totals"){
                    if(currentGame.bookmakers[0].markets[i].outcomes[0].name == "Over"){
                        overValue = currentGame.bookmakers[0].markets[i].outcomes[0].point;
                        overOdds = currentGame.bookmakers[0].markets[i].outcomes[0].price;
                        underValue = currentGame.bookmakers[0].markets[i].outcomes[1].point;
                        underOdds = currentGame.bookmakers[0].markets[i].outcomes[1].price;
                    }
                    else{
                        overValue = currentGame.bookmakers[0].markets[i].outcomes[1].point;
                        overOdds = currentGame.bookmakers[0].markets[i].outcomes[1].price;
                        underValue = currentGame.bookmakers[0].markets[i].outcomes[0].point;
                        underOdds = currentGame.bookmakers[0].markets[i].outcomes[0].price;
                    }
                }
        }
    }

    let completedDate = formatDate(currentGame.commence_time);

    html += generateOddsBoard(currentGame, awaySpread, homeSpread, awaySpreadOdds, homeSpreadOdds, awayMoneyline, homeMoneyline, overValue, underValue, overOdds, underOdds, completedDate);
  });
  let container = document.querySelector('.' + containerName);
  container.innerHTML = html;
}

function formatDate(rawDate){
  let dateTimeValue = Date.parse(rawDate);
  let dateRaw = new Date(dateTimeValue);

  return dateRaw.toLocaleDateString() + " Start Time: " + dateRaw.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
}

function generateOddsBoard(currentGame, awaySpread, homeSpread, awaySpreadOdds, homeSpreadOdds, awayMoneyline, homeMoneyline, overValue, underValue, overOdds, underOdds, dateTimeValue) {
  let htmlSegment = `<div class="outerBetBoard"><div class="betBoard">`;
  let gameStatus;

    htmlSegment += `<div class="header">
        <div class="headerDate">Date: ${dateTimeValue}</div>
        <div class="headerElement">Spread</div>
        <div class="headerElement">Over/Under</div>
        <div class="headerElement">Moneyline</div>
      </div>
      <div class="team win">
        <div class="betteam">${currentGame.away_team}</div>
        <div class="betTeamElement">${awaySpread + "(" + awaySpreadOdds + ")"}</div>
        <div class="betTeamElement">${overValue + "(" + overOdds + ")"}</div>
        <div class="betTeamElement">${awayMoneyline}</div>
      </div>
      <div class="betdivider"></div>
      <div class="team lose">
        <div class="betteam">${currentGame.home_team}</div>
        <div class="betTeamElement">${homeSpread + "(" + homeSpreadOdds + ")"}</div>
        <div class="betTeamElement">${underValue + "(" + underOdds + ")"}</div>
        <div class="betTeamElement">${homeMoneyline}</div>
      </div>`;

      htmlSegment += `
      </div>
    </div>`;

  return htmlSegment;
}
