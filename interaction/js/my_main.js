(()=>{
    let yOffset = 0;


    
    const sceneInfo =[
        {
            //0
            type:'sticy',
            heigthNum:5,//브라우저 높이의 n배만큼 scrollHeight값 설정
            scrollHeight:0,//scrollh할 구간,
            obj:{
                container:document.querySelector('#scroll-section-0')
            }
        },
        {
            //1
            type:'normal',
            heigthNum:5,//브라우저 높이의 n배만큼 scrollHeight값 설정
            scrollHeight:0,//scrollh할 구간
            obj:{
                container:document.querySelector('#scroll-section-1')
            }            
        },
        {
            //2
            type:'sticy',
            heigthNum:5,//브라우저 높이의 n배만큼 scrollHeight값 설정
            scrollHeight:0,//scrollh할 구간
            obj:{
                container:document.querySelector('#scroll-section-2')
            }            
        },
        {
            //3
            type:'sticy',
            heigthNum:5,//브라우저 높이의 n배만큼 scrollHeight값 설정
            scrollHeight:0,//scrollh할 구간
            obj:{
                container:document.querySelector('#scroll-section-3')
            }            
        }                        
    ]

    function  setLayout(){
        //각 스크롤 섹션의 높이 세팅
        for(let i = 0;i<sceneInfo.length;i++){
            sceneInfo[i].scrollHeight = sceneInfo[i].heigthNum * window.innerHeight;
            sceneInfo[i].obj.container.style.height = `${sceneInfo[i].scrollHeight}px`;
        }
    }


    function scrollLoop(){
    }
    window.addEventListener('resize',setLayout);
    window.addEventListener('scroll',()=>{
        yOffset = window.pageYOffset;

        scrollLoop()
    })
    setLayout()
})();