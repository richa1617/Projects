document.getElementById("get-activity").addEventListener("click", function() {
  fetch("http://www.boredapi.com/api/activity/")
    .then(response => response.json())
    .then(data => {
      document.getElementById("activity").textContent = data.activity
    })
})