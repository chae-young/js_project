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


각 차례 일때 상대방 체력을 0 으로 만들어서 승리.
승리할시 경험치 10% 증가.


*/
var trainer = document.getElementById('trainner');
var me = document.getElementById('me');

var pocketMon = [
'피카츄','이상해씨','파이리','꼬부기','푸린',
'디그다','나옹','왕눈해','또도가스','메타콩',
'치코리타','구구','모래두지','피죤','냄새꼬',
'뚜벅쵸','고라파덕','근육몬','쥬레곤','미뇽'
]
var choiceMon = [];

var myMon = [];
var trainerMon = [];

var turn = false; //false면 나 true 상대방

//포켓몬 랜덤뽑기
function random(who){	
	var loopmon;
	while(choiceMon.length < 10){
		loopmon = pocketMon[Math.floor(Math.random() * pocketMon.length)];
		if(choiceMon.indexOf(loopmon) === -1){
			choiceMon.push(loopmon)
		}
	}
	return who ? choiceMon.slice(0,5) : choiceMon.slice(5,10);
}

function Monster(me,i){
	if(me){
		this.name = random(true)[i];
	}else{	
		this.name = random()[i];
	}
	this.hp = 100,
	this.exp = 0,
	this.attack = Math.floor(Math.random() * 50)
}

function Factory(me,i){
	return new Monster(me,i)
}

//그리기
var myputCard;
var trputCard;
function draw(member,data,i){

	var card = document.querySelector('.hidden .monster').cloneNode(true);

	card.querySelector('.monster .name').textContent = data.name;
	card.querySelector('.monster .hp .in').style.width = data.hp + '%';
	card.querySelector('.monster .attack .in').style.width = data.attack + '%';
	member.querySelector('.ball-box').appendChild(card);

	card.addEventListener('click',function(){

		if(member.querySelector('.selected-stage').children.length == 0){
			console.log('1')
			if(member==me){
				myputCard = myMon.splice(i,1)[0];
			}else{
				trputCard = trainerMon.splice(i,1)[0];
			}

			stageDraw(member);

			member.querySelector('.selected-stage').appendChild(card)
		}else{	
			if(!turn && member == trainer){//내차례인데 상대방 클릭했을때
				console.log('상대방',trputCard.hp - myputCard.attack)
				trputCard.hp = trputCard.hp - myputCard.attack
			}
		}


	})


}


//내포켓몬
function meBall(){
	for(var i = 0; i < 5; i++){
		myMon.push(Factory(true,i));
	}
	myMon.forEach(function(data,i){
		draw(me,data,i)
	})
	//me.querySelector('.ball-box').firstElementChild.remove()
}

//상대포켓몬
function trainerBall(){
	for(var i = 0; i < 5; i++){
		trainerMon.push(Factory(false,i));

	}
	trainerMon.forEach(function(data,i){
		draw(trainer,data,i)
	})
}

//각 스텥이지에 그리기
function stageDraw(member){
	var mbArr;
	if(member==me){
		mbArr = myMon;
	}else{
		mbArr = trainerMon;
	}
	member.querySelector('.ball-box').innerHTML = '';
	mbArr.forEach(function(data,i){
		draw(member,data,i)
	})
}
document.getElementById('btn-random').addEventListener('click',function(){
	//random()
	alert('포켓몬 5마리가 뽑혔습니다.')
	//meBall();
	//trainerBall()
})


document.getElementById('btn-turn').addEventListener('click',function(){


})

meBall();
trainerBall()