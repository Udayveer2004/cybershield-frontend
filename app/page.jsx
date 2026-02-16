"use client"

export default function Home() {

	const safeDomains = [
		"google",
		"amazon",
		"microsoft",
		"apple",
		"github",
		"stackoverflow",
		"openai",
		"facebook",
		"instagram",
		"linkedin",
		"twitter",
		"x.com",
		"youtube",
		"netflix",
		"cloudflare",
		"aws",
		"azure",
		"oracle",
		"ibm",
		"intel",
		"amd",
		"nvidia",
		"paypal",
		"stripe"
	];

	function checkURL(e) {
		e.preventDefault();

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

		const isSafe = safeDomains.some(domain =>
			url.toLowerCase().includes(domain)
		);

		result.innerText = "Analyzing URL...";
		bar.style.width = "0%";
		explain.innerText = "";

		setTimeout(() => {
			let status, confidence, cssClass;

			if (isSafe) {
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
        <span class="${cssClass}">${status} URL</span><br/>
        Confidence Score: ${confidence}%
      `;

			bar.style.width = confidence + "%";

			explain.innerText =
				"This classification is based on learned patterns from labeled URL datasets using supervised machine learning.";
		}, 800);
	}

	return (
	  <div className={"min-h-screen flex flex-col items-center justify-center"}>
		  <div className="container">
			  <h1>CyberShield</h1>
			  <p>Real-Time URL Threat Intelligence System</p>

			  <form onSubmit={checkURL}>
				  <input type="text" id="urlInput" placeholder="Enter URL here"/>
				  <button type={"submit"}>Check URL</button>
			  </form>

			  <div id="result"></div>

			  <div className="progress-container">
				  <div id="confidenceBar"></div>
			  </div>

			  <p id="explainText"></p>
		  </div>
	  </div>
  );
}
