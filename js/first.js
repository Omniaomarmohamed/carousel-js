

var imgs = Array.from(document.getElementsByClassName("img-item"));//6 images
var lightBoxContainer = document.getElementById("lightboxContainer");
var lightboxitem=document.getElementById("lightboxitem");
var closeIcon = document.getElementById("close");
var nextIcon = document.getElementById("next");
var prevIcon = document.getElementById("prev");
var currentIndex=0;

for(var i=0 ; i<imgs.length ; i++)
{
    imgs[i].addEventListener("click" ,  openLightBox);
}

function openLightBox(eventInfo)
 {
    lightBoxContainer.style.display="flex";
    var imgsrc =  eventInfo.target.src;
    lightboxitem.style.backgroundImage =`url(${imgsrc})`
    currentIndex = imgs.indexOf(eventInfo.target);
  }

  function closeLightBox()
  {
    lightBoxContainer.style.display="none";
  }
  closeIcon.addEventListener("click" , closeLightBox);


  function nextSlide()
  {
      currentIndex++;

      if (currentIndex == imgs.length)
      {
          currentIndex = 0;
      }
      console.log(currentIndex); 
      var imgsrc = imgs[currentIndex].src;
      lightboxitem.style.backgroundImage =`url(${imgsrc})`
  }
  nextIcon.addEventListener("click" , nextSlide);

  function prevSlide()
  {
      currentIndex--;
      if (currentIndex <0)
      {
          currentIndex = imgs.length-1;
      }

      console.log(currentIndex);
      var imgsrc = imgs[currentIndex].src;
      lightboxitem.style.backgroundImage =`url(${imgsrc})`
  }
  prevIcon.addEventListener("click" ,prevSlide );

  document.addEventListener("keydown" , function(eventInfo){

    if (eventInfo.keyCode == 39)
    {
        nextSlide();
    }
    else if (eventInfo.keyCode == 37)
    {
        prevSlide();
    }

  })