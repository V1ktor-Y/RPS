let playerAns = 0
let ans = 0
var arr = ["rock", "paper", "scissors"]

function playSound(src,vol) {
	var audio = new Audio(src)
	audio.volume = vol
	audio.play()
}

function rng(min, max) {
	return Math.floor(Math.random() * (max - min) + min)
}

function select(selected) {
	console.log(selected)
	let keyword = ""
	for(let i = 0; i < 3; i++){
		if(i == 0)
				keyword = 'rock'
			else if(i == 1)
				keyword = 'paper'
			else
				keyword = 'scissors'
		if(i + 1 == selected){
			document.getElementById(keyword).classList.add("selected")
			document.getElementById(keyword).classList.remove("img")
			continue
		}
		document.getElementById(keyword).classList.remove("selected")
		document.getElementById(keyword).classList.add("img")
	}
	playerAns = selected
}

function determineWinner() {
	if(playerAns == 0)
		return 2
	ans = rng(1,4)
	let temp_ans = ans
	console.log(ans)
	console.log(playerAns)
	if(ans == playerAns)
	{
		console.log("Draw")
		return 0
	}
	
	if(ans != 3)
		ans++
	else 
		ans = 1
	
	if(ans == playerAns)
	{
		console.log("Player wins")
		ans = temp_ans
		return 1
	}
	else 
	{
		console.log("Computer wins")
		ans = temp_ans
		return -1
	}
}

function showResult() {
	let result = determineWinner()
	if(result == 2)
		return
	document.getElementById("computer").textContent = "The computer chose "
	document.getElementById("ans").textContent = arr[ans - 1].toUpperCase()
	if(result == 0){
		playSound("wild-west-whistle.mp3",0.1)
		document.getElementById('result').textContent = "DRAW"
		document.getElementById("resultImg").src = "https://wetheitalians.com/storage/app/uploads/public/5fe/844/297/5fe8442975583053965003.jpg"
	}

	else if(result == 1){
		playSound("victory-royale.mp3",0.1)
		document.getElementById('result').textContent = "YOU WIN"
		document.getElementById("resultImg").src = "https://static.wikia.nocookie.net/fortnite/images/1/1e/VictoryRoyaleSlate.png/revision/latest?cb=20220329154427"
	}

	else{
		playSound("vine-boom.mp3",0.1)
		document.getElementById('result').textContent = "YOU LOSE"
		document.getElementById("resultImg").src = "https://cdn.7tv.app/emote/6445de261208a4e91da301a9/4x.webp"
	}
}
