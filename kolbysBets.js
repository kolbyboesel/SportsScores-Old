function showKolbysNBA(){
    let htmlSegment = `<div class="kolbyPicksFullCont">`;
    htmlSegment += `<div class="outerKolbysPicks"><div class="kolbysPicks">
   <div class="pick">
        <div class="pickNo">1. </div>
        <div class="pickName">Gary Trent Jr. Points</div>
        <div class="pickLine">Over 13.5</div>
      </div></div></div>`


      htmlSegment += `<div class="outerKolbysPicks"><div class="kolbysPicks">
<div class="pick">
        <div class="pickNo">2. </div>
        <div class="pickName">Gary Trent Jr. 3 Pointers Made</div>
        <div class="pickLine">Over 1.5</div>
      </div></div></div>`

      htmlSegment += `<div class="outerKolbysPicks"><div class="kolbysPicks">
<div class="pick">
        <div class="pickNo">3. </div>
        <div class="pickName">Jakob Poetl Rebounds</div>
        <div class="pickLine">Under 9.5</div>
      </div></div></div>`

      htmlSegment += `<div class="outerKolbysPicks"><div class="kolbysPicks">
<div class="pick">
      <div class="pickNo">4. </div>
      <div class="pickName">Josh Giddey Assists</div>
      <div class="pickLine">Over 5.5</div>
    </div></div></div>`

    htmlSegment += `<div class="outerKolbysPicks"><div class="kolbysPicks">
<div class="pick">
    <div class="pickNo">5. </div>
    <div class="pickName">Trey Murphy Rebounds</div>
    <div class="pickLine">Over 3.5</div>
  </div></div></div>`

  htmlSegment += `<div class="outerKolbysPicks"><div class="kolbysPicks">
<div class="pick">
  <div class="pickNo">6. </div>
  <div class="pickName">Patrick Beverley Assists</div>
  <div class="pickLine">Over 2.5</div>
</div></div></div>`

    htmlSegment += `<div class="outerKolbysPicks"><div class="kolbysPicks">
<div class="pick">
    <div class="pickNo">7. </div>
    <div class="pickName">C.J. McCollum Points</div>
    <div class="pickLine">Over 22.5</div>
</div></div></div>`

htmlSegment += `<div class="outerKolbysPicks"><div class="kolbysPicks">
<div class="pick">
    <div class="pickNo">8. </div>
    <div class="pickName">Nikola Vucevic Rebounds</div>
    <div class="pickLine">Over 10.5</div>
</div>`

      htmlSegment += `
      </div>
    </div>
    </div>`;

    container = document.querySelector('.containerNBA');
    console.log(htmlSegment);
    container.innerHTML = htmlSegment;
}

function showKolbysMLB(){
    let htmlSegment = `<div class="outerKolbysPicks"><div class="kolbysPicks">`;

    htmlSegment += `<div class="pick">
        <div class="pickNo"></div>
        <div class="pickName"></div>
        <div class="pickLine"></div>
      </div>`

      htmlSegment += `
      </div>
    </div>`;

    container = document.querySelector('.containerNBA');
    container.innerHTML = htmlSegment;
}

function showKolbysNHL(){
    let htmlSegment = `<div class="outerKolbysPicks"><div class="kolbysPicks">`;

    htmlSegment += `<div class="pick">
        <div class="pickNo"></div>
        <div class="pickName"></div>
        <div class="pickLine"></div>
      </div>`

      htmlSegment += `
      </div>
    </div>`;

    container = document.querySelector('.containerNBA');
    container.innerHTML = htmlSegment;
}

function showKolbysNFL(){
    let htmlSegment = `<div class="outerKolbysPicks"><div class="kolbysPicks">`;

    htmlSegment += `<div class="pick">
        <div class="pickNo"></div>
        <div class="pickName"></div>
        <div class="pickLine"></div>
      </div>`

      htmlSegment += `
      </div>
    </div>
    </div>`;

    container = document.querySelector('.containerNBA');
    container.innerHTML = htmlSegment;
}