
const select =document.querySelector(".byy")
const select2=document.querySelector(".by")
const currency= document.querySelector('input[type="number"]');
const dollar=document.querySelector('#dollar')
const btn=document.querySelector("button")


function goBack() {
  let value=Number( currency.value)
//from rupees
  if(select.value==="rupees"){

  if(select2.value==="dollar"){
dollar.value=value/90
}
  else if(select2.value="euro"){
  dollar.value=value/105

}
}
//from dollar
 else if (select.value==="dollar"){
  if(select2.value==="rupees"){
  dollar.value=value*90
  }
  else if(select2.value==="euro"){
    dollar.value=value*0.86
  }
}
 //from euro
else if(select.value==="euro"){
  if(select2.value==="rupees"){
 dollar.value=value*105}
  }
  else if (select2.value==="dollar"){
    dollar.value=value*0.86
  }
}
btn.addEventListener('click', goBack);