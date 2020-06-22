/*
포켓몬 배틀(자스스톤 응용)

포켓몬 잡아오기, 포켓몬배틀 구역을 나누기

포켓몬 랜덤으로 뿌리기
<<
도감에 6명 넣기
<<
포켓몬의 체력 경험치 최대
<<



턴제로 실행되고
여섯마리까지 포켓몬을 데리고다닐수 있으며 3마리를 뽑는다.
포켓몬의 체력이 0 이되면 기절.
상대가 가진 모든 포켓몬을 기절 상태로 만들면 승리..
승리하면 경험치가 쌓여서 쌓이면 ㅠ 포켓몬 레벨이 오름.
지면 포켓몬 회복센터(체력강화)로 돌아감

!!!!!!!!!!!!!!!!!!!!!!!!
데이터를 만들고
화면에 그리기.
!!!!!!!!!!!!!!!!!!!!!!!!

*/

var pocketMon = [
'피카츄','이상해씨','파이리','꼬부기','푸린',
'디그다','나옹','왕눈해','또도가스','메타콩',
'치코리타','구구','모래두지','피죤','냄새꼬',
'뚜벅쵸','고라파덕','근육몬','쥬레곤','미뇽'
]

//포켓몬 랜덤뽑기
function random(who){	
	var choiceMon = [];
	var loopmon;
	while(choiceMon.length < 12){
		loopmon = pocketMon[Math.floor(Math.random() * pocketMon.length)];
		if(choiceMon.indexOf(loopmon) === -1){
			choiceMon.push(loopmon)
		}
	}
	return who ? choiceMon.slice(0,5) : choiceMon.slice(6,11);
}
document.getElementById('btn-random').addEventListener('click',function(){
	//random()
	alert('포켓몬 6마리가 뽑혔습니다.')
})

function Monster(me){
	if(me){
		this.name = random();
	}else{	
		this.name = random(true);
	}
	this.hp = 100
	this.exp = 0
}

function Factory(me){
	return new Monster(me)
}

//내포켓몬
function meBall(){
	for(var i = 0; i < 5; i++){
		console.log(Factory(true))
	}
}


meBall()