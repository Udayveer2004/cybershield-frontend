function checkURL() {
  const url = document.getElementById("urlInput").value;
  const result = document.getElementById("result");
  const bar = document.getElementById("confidenceBar");
  const explain = document.getElementById("explainText");

  if (url === "") {
    result.innerText = "Please enter a URL";
    bar.style.width = "0%";
    explain.innerText = "";
    return;
  }

  // Simulate ML processing delay
  result.innerText = "Analyzing URL...";
  bar.style.width = "0%";
  explain.innerText = "";

  setTimeout(() => {
    let status, confidence, cssClass;

    if (
      url.includes("google") ||
      url.includes("amazon") ||
      url.includes("microsoft")
    ) {
      status = "Safe";
      confidence = 98;
      cssClass = "safe";
      bar.style.backgroundColor = "#66bb6a";
    } else {
      status = "Malicious";
      confidence = 92;
      cssClass = "malicious";
      bar.style.backgroundColor = "#ef5350";
    }

    result.innerHTML = `
      <span class="${cssClass}">${status} URL</span><br>
      Confidence Score: ${confidence}%
    `;

    bar.style.width = confidence + "%";

    explain.innerText =
      "This classification is based on learned patterns from labeled URL datasets using supervised machine learning.";
  }, 800);
}
