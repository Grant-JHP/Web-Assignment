import jsonData from './page-content.json';

var pageHash, pageData;

LoadPage();

function LoadPage() {

  pageHash = location.hash.replace('#', '').toLowerCase();
  console.log('Hash: ' + pageHash);

  if (!jsonData['pages'].includes(pageHash))
    console.error(pageHash + ' is not a valid hash!');
  
  pageData = jsonData[pageHash];
  console.log('Page Data: ', pageData);

  LoadNavBar();

  for (var i = 0; i < 4; i++)
    LoadContentBox(i);

  LoadCredits();
}

function LoadNavBar() {

  document.querySelector('.navBar').innerHTML = `
    <h1>Navigation Bar!</h1>
  `;
}

function LoadContentBox(i) {

  var html = `
    <div class='heading'>
      <h1>${pageData['titles'][i]}</h1>
    
      <hr>
    </div>

    `;

    if (pageData['layouts'][i] == 'left') {
      html += `
        <div class='content'>
          <p>${pageData['contents'][i]}</p>
        
          <img src='./assets/${pageData['images'][i]}'>
        </div>
        `;
    }

    if (pageData['layouts'][i] == 'right') {
      html += `
        <div class='content'>
          <img src='./assets/${pageData['images'][i]}'>

          <p>${pageData['contents'][i]}</p>
        </div>
        `;
    }

    if (pageData['layouts'][i] == 'center') {
      html += `
      <div class='content'>
        <p>${pageData['contents'][i]}</p>
      </div>
      `;
    }
  
  document.querySelector('.contentBox#cB-' + i).innerHTML = html;
}

function LoadCredits() {

  document.querySelector('.credits').innerHTML = `
    <h1>Credits!</h1>
  `;
}