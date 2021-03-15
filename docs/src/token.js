const JQ_TOKEN_TITLE = $('#modalTokenCardTitle');
const JQ_TOKEN_FIELD = $('#tokenInput');
const JQ_TOKEN_BTN   = $('#addTokenBtn');
const JQ_TOKEN_POPUP = $('#useful_forks_token_popup');


function openTokenDialog() {
  ga_openToken();
  JQ_TOKEN_POPUP.addClass('is-active');
  JQ_TOKEN_FIELD.focus();
}
function closeTokenDialog() {
  ga_closeToken();
  JQ_TOKEN_POPUP.removeClass('is-active');
  JQ_REPO_FIELD.focus();
}
function saveTokenBtnClicked() {
  ga_saveToken();
  const INPUT_TOKEN = JQ_TOKEN_FIELD.val();
  localStorage.setItem(GITHUB_ACCESS_TOKEN_STORAGE_KEY, INPUT_TOKEN);
  LOCAL_STORAGE_GITHUB_ACCESS_TOKEN = INPUT_TOKEN;
  drawAddTokenBtn(INPUT_TOKEN);
  closeTokenDialog();
}

function drawAddTokenBtn(accessToken) {
  let verb = 'Add';
  if (accessToken) {
    verb = 'Edit';
    JQ_TOKEN_FIELD.val(accessToken);
  }
  JQ_TOKEN_BTN.html('<img src="assets/settings-icon.png" alt="Settings" />'
      + verb + ' Access Token');
  JQ_TOKEN_TITLE.html(verb + ' GitHub Access Token');
}


JQ_TOKEN_FIELD.keyup(event => {
  if (event.keyCode === 13) { // 'ENTER'
    saveTokenBtnClicked();
  }
  if (event.keyCode === 27) { // 'ESC'
    closeTokenDialog();
  }
});

/* Get the locally saved Access Token. */
const GITHUB_ACCESS_TOKEN_STORAGE_KEY = "useful-forks-access-token";
let LOCAL_STORAGE_GITHUB_ACCESS_TOKEN = localStorage.getItem(GITHUB_ACCESS_TOKEN_STORAGE_KEY);
drawAddTokenBtn(LOCAL_STORAGE_GITHUB_ACCESS_TOKEN);


/* Burger-menu toggling */
$(".navbar-burger").click(function() {
  $(".navbar-burger").toggleClass("is-active");
  $(".navbar-menu").toggleClass("is-active");
});