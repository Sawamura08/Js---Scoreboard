let homeScoreEl = document.getElementById("home-score-el");
let homeFoulsEl = document.getElementById("home-fouls-el");
let periodEl = document.getElementById("period-el");
let guestScoreEl = document.getElementById("guest-score-el");
let guestFoulsEl = document.getElementById("guest-fouls-el");

let homeScore = 0;
let homeFoul = 0;
let guestScore = 0;
let guestFoul = 0;
let newPeriod = 0;

const homeplus1 = () => {
	homeScore += 1;
	homeScoreEl.innerText = homeScore;
};

const homeplus2 = () => {
	homeScore += 2;
	homeScoreEl.innerText = homeScore;
};

const homeplus3 = () => {
	homeScore += 3;
	homeScoreEl.innerText = homeScore;
};

const homefoul = () => {
	homeFoul += 1;
	homeFoulsEl.innerText = homeFoul;
};

const guestplus1 = () => {
	guestScore += 1;
	guestScoreEl.innerText = guestScore;
};

const guestplus2 = () => {
	guestScore += 2;
	guestScoreEl.innerText = guestScore;
};

const guestplus3 = () => {
	guestScore += 3;
	guestScoreEl.innerText = guestScore;
};

const guestfoul = () => {
	guestFoul += 1;
	guestFoulsEl.innerText = guestFoul;
};

const reset = () => {
	homeScoreEl.innerText = 0;
	guestScoreEl.innerText = 0;
	homeFoulsEl.innerText = 0;
	guestFoulsEl.innerText = 0;
	periodEl.innerText = 0;
	homeScore = 0;
	homeFoul = 0;
	guestScore = 0;
	guestFoul = 0;
};

const period = () => {
	if (newPeriod < 4) {
		newPeriod += 1;
		periodEl.innerText = newPeriod;

		homeFoul = 0;
		guestFoul = 0;
		homeFoulsEl.innerText = homeFoul;
		guestFoulsEl.innerText = guestFoul;
	}
};
