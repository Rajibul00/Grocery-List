let inputbox = document.querySelector('input');
let lists = document.querySelector('#lists')
let main = document.querySelector('.main');
function addItem(){
    let h3 = document.createElement('h3');

    h3.innerHTML=` - ${inputbox.value}`;
lists.appendChild(h3);
h3.addEventListener('click',function(click){
    h3.style.textDecoration='line-through'
})
    
}
main.addEventListener('keydown',function(val){
    if(val.key== 'Enter'){
        addItem();
        inputbox.value =''
    }
});
