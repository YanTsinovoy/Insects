var smokesForDel = []
var Comarik = function(){
   this.point = document.createElement ( 'div' )
   this.point.className = 'point'
   this.point.style.transition = "all 1s"
   document.body.appendChild ( this.point )
   this.fly= function(){
      this.point.x=Math.round(Math.random()*window.innerWidth)
      this.point.y=Math.round(Math.random()*window.innerHeight)
      this.point.style.left = this.point.x + 'px'
      this.point.style.top =  this.point.y + 'px'
   
   }
   this.fly()
   var point = this.point
   
   function delComarik(){
     setTimeout(function(){
       point.parentNode.removeChild(point)
     },500)
   }
   function expl(){
     point.style.backgroundImage="url(http://bestanimations.com/Military/Explosions/explosion-animation-1.gif)"
   }
   this.point.onclick = function(event){
     expl()
     delComarik()
   }
   //this.timeout = setTimeout(delComarik(),1000)
}
var insects = []
for(var i = 0; i<10;i++){
   insects[i]=new Comarik()
}
var int = Math.round(Math.random()+0.2)
insects.forEach(function(x){
  setInterval (function(){
           x.point.style.transition = "all " + int + "s"
           x.fly()
   },int * 1000)
})

var btn = document.createElement('button')
btn.className = 'button'
btn.innerHTML = "Clear"
btn.style.margin = "10%"
document.body.appendChild(btn)

var Smoke = function(){
  this.smoke = document.createElement('img')
  this.smoke.className = 'smoke'
  this.smoke.src = "https://vignette.wikia.nocookie.net/animal-jam-roleplay/images/f/f1/Animated-smoke-gif-transparent-8.gif/revision/latest?cb=20180325065340"
  smokesForDel.push(this.smoke)
  document.body.appendChild(this.smoke)
}


var smokes = []
btn.onclick = function(event){
  if (smokesForDel.length!==2){
      for(var i=0;i<2;i++){
        smokes[i]= new Smoke()
      }
  }
  for (var i=0;i<insects.length;i++){
    insects[i].point.style.backgroundImage = "url(http://static.wixstatic.com/media/dcd199_f1e940a65f034490b39a2e216b1549ff.gif)"
  }
  setTimeout(function(){
    for(elem of insects){
     elem.point.parentNode.removeChild(elem.point)
       console.log(elem.point)
     }
  },500) 
  document.body.style.backgroundColor="black"
  
}