function loadcoupon(){
    document.getElementById('coupon').style.visibility='visible';
    document.getElementById('coupon-clr').style.opacity='0.7';

}
function closecoupon(){
    document.getElementById('coupon').style.visibility='hidden';
 document.getElementById('coupon-clr').style.opacity='1';

}

/*Light & dark mode*/
const clormode=()=>{
    let mybody =document.body;
   mybody.classList.toggle('mydark')
}




  

    