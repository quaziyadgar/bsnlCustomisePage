// let download_app_open_btn = document.getElementById("download_app_open_btn");
// let download_app_close_btn = document.getElementById("download_app_close_btn");

function handleDownload(value) {
    console.log(value);
  let element = document.getElementsByClassName("emergency-trigger-panel");
  if (value) element.style = "display: block !important";
  else element.style = "display: none !important";
}

// download_app_open_btn.addEventListener(()=>{
//     element.style.display = "block";
// })

// download_app_close_btn.addEventListener(()=>{
//     element.style.display = "none";
// })
