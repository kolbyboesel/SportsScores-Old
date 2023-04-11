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
	let url = 'https://odds.p.rapidapi.com/v4/sports/basketball_nba/scores?daysFrom=2';
	try {
		let res = await fetch(url, options);
		return await res.json();
	} catch (error) {
		console.log(error);
	}
}

async function loadNBA() {
    let allScores = await getNBA();
    let html = '';
    allScores.forEach(currentScore => {
		let awayScore = 0;
		let homeScore = 0;
		try {
			awayScore = currentScore.scores[1].score;
			homeScore = currentScore.scores[0].score;
		} catch (error) {
			homeScore = 0;
			awayScore = 0;
		}
		let compareHomeScore = homeScore;
		let compareAwayScore = awayScore;

		if(homeScore.length != 3){
			compareHomeScore = "0" + homeScore;
		}
		if(awayScore.length != 3){
			compareAwayScore = "0" + awayScore;
		}
		let winningTeam;

		if(compareAwayScore > compareHomeScore){
            winningTeam = currentScore.away_team;
		}
        else{
            winningTeam = currentScore.home_team;
		}
    html += generateScoreboard(currentScore, awayScore, homeScore, winningTeam);

    });

    let container = document.querySelector('.containerNBA');
    container.innerHTML = html;
}

async function getMLB() {
	let url = 'https://odds.p.rapidapi.com/v4/sports/baseball_mlb/scores?daysFrom=1';
	try {
		let res = await fetch(url, options);
		return await res.json();
	} catch (error) {
		console.log(error);
	}
}

async function loadMLB() {
    let allScores = await getMLB();
    let html = '';
    allScores.forEach(currentScore => {
		let awayScore = 0;
		let homeScore = 0;
		try {
			awayScore = currentScore.scores[1].score;
			homeScore = currentScore.scores[0].score;
		} catch (error) {
			homeScore = 0;
			awayScore = 0;
		}
		let compareHomeScore = homeScore;
		let compareAwayScore = awayScore;

		if(homeScore.length != 2){
			compareHomeScore = "0" + homeScore;
		}
		if(awayScore.length != 2){
			compareAwayScore = "0" + awayScore;
		}

        let winningTeam;

		if(compareAwayScore > compareHomeScore){
            winningTeam = currentScore.away_team;
		}
        else{
            winningTeam = currentScore.home_team;
		}
    html += generateScoreboard(currentScore, awayScore, homeScore, winningTeam);

});

let container = document.querySelector('.containerMLB');
container.innerHTML = html;
}

function generateScoreboard(currentScore, awayScore, homeScore, winningTeam) {
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

