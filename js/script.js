 // 스킵메뉴
 let skipMenu = document.querySelector('.skip-menu');

 // 스킵메뉴 포커스인/포커스아웃
 skipMenu.addEventListener('focusin',function(){
     skipFocus('0');
 })
 skipMenu.addEventListener('focusout',function(){
     skipFocus('-1000px');
 })

 function skipFocus(pTop){
     skipMenu.style.top = pTop;
 }


 // 서브메뉴
 let mainNavEl = document.querySelector('.nav-depth1');
 let subNavEl = document.querySelectorAll('.nav-depth2');

 // 서브메뉴 호출/닫기
 mainNavEl.addEventListener('mouseenter',function(){
     navMenu('135px');
 });
 mainNavEl.addEventListener('mouseleave',function(){
     navMenu('0');
 });

 function navMenu(subH){
     for(let idx=0; idx<subNavEl.length; idx++){
         subNavEl[idx].style.height = subH;
     }
 }


 // 슬라이드
 let slider = document.querySelectorAll('.slide');
 let tmp = 0;
//  console.log(slider);

 setInterval(function(){
     tmp+=100;
     if(tmp==300){
         tmp=0;
         for(let idx=0; idx<slider.length; idx++){
             slider[idx].style.transition = '0';
         }
     }
     for(let idx=0; idx<slider.length; idx++){
         slider[idx].style.transform = 'translateY(-'+ tmp +'%)';
     }
 },3000);


 // 공지사항/갤러리 탭메뉴
 let subTit = document.querySelectorAll('.sub-tit');
 let artBtn = document.querySelectorAll('.art');

 tabMenu();

 function tabMenu(){
     for(let idx=0; idx<subTit.length; idx++){
         subTit[idx].addEventListener('click',function(){
             for(let idx2=0; idx2<artBtn.length; idx2++){
                 artBtn[idx2].classList.remove('on');
                 this.parentElement.classList.add('on');
             } 
         })
     }
 }
 

 // 공지사항/갤러리 모달팝업
 // 공지사항 변수
 let modalN = document.querySelector('.modal-notice');
 let modalTit = document.querySelector('.modal-tit');
 let modalTxt = document.querySelector('.modal-txt');
 let modalTitle = document.querySelectorAll('.notice-content .title');
 let modalCon = document.querySelectorAll('.notice-content .content');
 let btnCloseN = document.querySelector('.modal-notice .btn-modal-close');

 // 갤러리 변수
 let modalG = document.querySelector('.modal-gallery');
 let gallImg = document.querySelectorAll('.gallery-list .img-box img');
 let btnCloseG = document.querySelector('.modal-gallery .btn-modal-close');
 let modalImg = document.querySelector('.gallery-img');


 // 공지사항
 for(let idx=0; idx<modalTitle.length; idx++){
     
     modalTitle[idx].addEventListener('click',function(e){
         noticeBtn('block');
         modalTit.innerHTML = this.innerHTML;
         modalTxt.innerHTML = modalCon[idx].innerHTML;

         e.preventDefault();
     })
     
 }
 
 btnCloseN.addEventListener('click',function(){
     noticeBtn('none');
 })

 function noticeBtn(e){
     modalN.style.display = e;
 }

 // 갤러리
 for(let idx=0; idx<gallImg.length; idx++){
     gallImg[idx].addEventListener('click',function(e){  
         galleryBtn('block')

         let newImg = this.src;
         modalImg.setAttribute('src',newImg);  

         e.preventDefault();      
     })
 }

 btnCloseG.addEventListener('click',function(){
     galleryBtn('none');
 })
 
 function galleryBtn(e){
     modalG.style.display = e;
 }