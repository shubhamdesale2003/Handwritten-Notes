//Nav-bar btn
let NavBar = document.querySelector('.res-nav');
let btn = document.querySelector('#btn');
let links = document.querySelector('.links');
let links2 = document.querySelector('.links2');
let links3 = document.querySelector('.links3');
let count = 0

btn.addEventListener('click', ()=>{
   
   if(count == 0){
      NavBar.style.width="50%";
      links.style.display='block';
      links2.style.display='block';
      links3.style.display='block';
      count = 1;
   }
   else{
      NavBar.style.width="0";
      links.style.display='none';
      links2.style.display='none';
      links3.style.display='none';
      count = 0;
   }
})

// selects all images for rendering.. 

let python = document.querySelector('#python-img');
let java = document.querySelector('.java-img');
let cpp = document.querySelector('.cpp-img');
let js = document.querySelector('.js-img');
let dbms = document.querySelector('.dbms-img');
let sql2 = document.querySelector('.sql2-img');
let dsa = document.querySelector('.dsa-img');
let sql = document.querySelector('.sql-img');

//  for hidding another tabs

let product = document.querySelector('.product');
let mainHeading = document.querySelector('.main-heading');
let product2 = document.querySelector('.product2');
let mainHeading2 = document.querySelector('.main-heading2');
let hero = document.querySelector('.hero');
let adv = document.querySelector('.adv');
let ftr = document.querySelector('.ftr');

// For showing tabs

let pythonTab = document.querySelector('.python-tab');
let javaTab = document.querySelector('.java-tab');
let dbmsTab = document.querySelector('.dbms-tab');
let jsTab = document.querySelector('.js-tab');
let cppTab = document.querySelector('.cpp-tab');
let dsaTab = document.querySelector('.dsa-tab');
let sqlTab = document.querySelector('.sql-tab');
let sql2Tab = document.querySelector('.sql2-tab');


python.addEventListener("click",function(){
    pythonTab.style.display="block";
    product.style.display="none"
    mainHeading.style.display="none"
    product2.style.display="none"
    mainHeading2.style.display="none"
    hero.style.display="none"
   adv.style.display="none"
   ftr.style.display="none"
})
java.addEventListener("click",function(){
    javaTab.style.display="block";
    product.style.display="none"
    mainHeading.style.display="none"
    product2.style.display="none"
    mainHeading2.style.display="none"
    hero.style.display="none"
   adv.style.display="none"
   ftr.style.display="none"
})
dbms.addEventListener("click",function(){
   dbmsTab.style.display="block";
   product.style.display="none"
   mainHeading.style.display="none"
   product2.style.display="none"
   mainHeading2.style.display="none"
   hero.style.display="none"
  adv.style.display="none"
  ftr.style.display="none"
  
})
js.addEventListener("click",function(){
    jsTab.style.display="block";
    product.style.display="none"
    mainHeading.style.display="none"
    product2.style.display="none"
    mainHeading2.style.display="none"
    hero.style.display="none"
   adv.style.display="none"
   ftr.style.display="none"
})
cpp.addEventListener("click",function(){
    cppTab.style.display="block";
    product.style.display="none"
    mainHeading.style.display="none"
    product2.style.display="none"
    mainHeading2.style.display="none"
    hero.style.display="none"
   adv.style.display="none"
   ftr.style.display="none"
})
dsa.addEventListener("click",function(){
    dsaTab.style.display="block";
    product.style.display="none"
    mainHeading.style.display="none"
    product2.style.display="none"
    mainHeading2.style.display="none"
    hero.style.display="none"
   adv.style.display="none"
   ftr.style.display="none"
})
sql.addEventListener("click",function(){
    sqlTab.style.display="block";
    product.style.display="none"
    mainHeading.style.display="none"
    product2.style.display="none"
    mainHeading2.style.display="none"
    hero.style.display="none"
   adv.style.display="none"
   ftr.style.display="none"
})
sql2.addEventListener("click",function(){
    sql2Tab.style.display="block";
    product.style.display="none"
    mainHeading.style.display="none"
    product2.style.display="none"
    mainHeading2.style.display="none"
    hero.style.display="none"
   adv.style.display="none"
   ftr.style.display="none"
})