//API KEY-9f3436bf65c47b3988484cb92d3cb3be

function clearNBA(elementID)
{
    let container = document.querySelector('.containerNBA');
    container.innerHTML = "";
}

function clearMLB(elementID)
{
    let container = document.querySelector('.containerMLB');
    container.innerHTML = "";
}

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7c01195a20mshbc9188a6ca4f5a5p1ce61cjsn5e640810eca6',
		'X-RapidAPI-Host': 'odds.p.rapidapi.com'
	}
};

let data;

fetch(url, options)
	.then(response => response.json())
	.then(response => {
		data = response;
		// You can also do something with the data here
	  })
	.catch(err => console.error(err));


console.log(data);

async function getNBA() {

	let url = 'https://odds.p.rapidapi.com/v4/sports/basketball_nba/scores?daysFrom=3';
	try {
		let res = await fetch(url, options);
		return await res.json();
	} catch (error) {
		console.log(error);
	}
}

async function loadNBA() {
	clearNBA("containerNBA");

    let allScores = await getNBA();
    let html = '';
    allScores.forEach(currentScore => {
		let awayScore = 0;
		let homeScore = 0;
		try {
			let awayScoreRaw = currentScore.scores[1].score;
			let homeScoreRaw = currentScore.scores[0].score;

			awayScoreRaw === null ? awayScore = 0 : awayScore = Number(awayScoreRaw);
			homeScoreRaw === null ? homeScore = 0 : homeScore = Number(homeScoreRaw);
		} catch (error) {
			homeScore = 0;
			awayScore = 0;
		}

        let winningTeam = awayScore < homeScore ? currentScore.home_team : currentScore.away_team;
		let completedDate = formatDate(currentScore.completed_date);
    html += generateScoreboard(currentScore, awayScore, homeScore, winningTeam, completedDate);

    });

    let container = document.querySelector('.containerNBA');
    container.innerHTML = html;
}

async function getMLB() {

	let url = 'https://odds.p.rapidapi.com/v4/sports/baseball_mlb/scores?daysFrom=3';
	try {
		let res = await fetch(url, options);
		return await res.json();
	} catch (error) {
		console.log(error);
	}
}

async function loadMLB() {
	clearMLB("containerMLB");

    let allScores = await getMLB();
    let html = '';
    allScores.forEach(currentScore => {
		let awayScore = 0;
		let homeScore = 0;
		try {
			let awayScoreRaw = currentScore.scores[1].score;
			let homeScoreRaw = currentScore.scores[0].score;

			awayScoreRaw === null ? awayScore = 0 : awayScore = Number(awayScoreRaw);
			homeScoreRaw === null ? homeScore = 0 : homeScore = Number(homeScoreRaw);
		} catch (error) {
			homeScore = 0;
			awayScore = 0;
		}

        let winningTeam = awayScore < homeScore ? currentScore.home_team : currentScore.away_team;
		let completedDate = formatDate(currentScore.completed_date);

    html += generateScoreboard(currentScore, awayScore, homeScore, winningTeam, completedDate);

});

let container = document.querySelector('.containerMLB');
container.innerHTML = html;
}

function formatDate(rawDate){
	let dateTimeValue = Date.parse(rawDate);
	let dateRaw = new Date(dateTimeValue);

	return dateRaw.toLocaleDateString() + " Start Time: " + dateRaw.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
}

function generateScoreboard(currentScore, awayScore, homeScore, winningTeam, dateTimeValue) {
  let htmlSegment = `<div class="outer">
    <div class="scoreboard">`;

	let gameStatus;
    if(currentScore.completed){
        gameStatus = "FINAL";
    }
    else{
        gameStatus = ""
    }
  if (winningTeam === currentScore.away_team) {
    htmlSegment += `
	<div class="date">${dateTimeValue}</div>
      <div class="team win">
        <div class="team">${currentScore.away_team}</div>
        <div class="score">${awayScore}</div>
      </div>
      <div class="divider"><p>${gameStatus}</p></div>
      <div class="team lose">
        <div class="team">${currentScore.home_team}</div>
        <div class="score">${homeScore}</div>
      </div>`;
  } else {
    htmlSegment += `
	<div class="date">${dateTimeValue}</div>
      <div class="team lose">
        <div class="team">${currentScore.away_team}</div>
        <div class="score">${awayScore}</div>
      </div>
      <div class="divider"><p>${gameStatus}</p></div>
      <div class="team win">
        <div class="team">${currentScore.home_team}</div>
        <div class="score">${homeScore}</div>
      </div>`;
  }

  htmlSegment += `
    </div>
  </div>`;

  return htmlSegment;
}
