// let download_app_open_btn = document.getElementById("download_app_open_btn");
// let download_app_close_btn = document.getElementById("download_app_close_btn");

function handleDownload(value) {
  console.log(value);
  let element = document.getElementById("emergency-trigger-panel");
  if (value) element.style = "display: block !important";
  else element.style = "display: none !important";
}

function handleBadgeColor(value) {
  document.getElementById("badge1").style.background = "var(--light-theme-main-color)";
  document.getElementById("badge2").style.background = "var(--light-theme-main-color)";
  document.getElementById("badge3").style.background = "var(--light-theme-main-color)";
  let element = document.getElementById(value);
  element.style.background = "var(--light-theme-dropdown-bg-color)";
}
handleBadgeColor('badge1');  //default call for badge 1
