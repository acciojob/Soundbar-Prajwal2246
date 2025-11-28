//your JS code here. If required.
const sounds=["applause","boo","gasp","tada","victory","wrong"];

sounds.forEach(sound=>{
	const audio=document.createElement("audio");
	audio.src=`./sounds/${sound}.mp3`;
	audio.id=sound;
	document.body.appendChild(audio);
})

function playSound(sound){
	stopAllSound();
	document.getElementById(sound).play();
}

function stopAllSound(){
	sounds.forEach(sound=>{
		const audio =  document.getElementById(sound);
		audio.pause();
		audio.currentTime=0;
	})
}

document.querySelectorAll(".btn").forEach(btn=>{
	btn.addEventListener("click",()=>{
		playSound(btn.innerText)
	})
})

document.querySelector(".stop").addEventListener("click",stopAllSound)