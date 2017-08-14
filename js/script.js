function animasiIntro(){
  $(".logo, span, img, h3, p, a, li").velocity("callout.bounce",
                                                {stagger:30,
                                                complete:  function (){introIcon()
                                              }
                                            });
}

function introIcon(){
  $(".icon-landing i").velocity("transition.bounceIn",{stagger:250})
  .velocity({ scale: 1.1 },{stagger:550 , duration: 600, loop: true, // Loop one time (animate scale to 1.5 then back to its original value).
  });
}


function showMenu(){
  $(".smartphone-menu").velocity("transition.bounceDownIn");
}

function closeMenu(){
  $(".smartphone-menu").velocity("transition.bounceUpOut");
}


$(document).ready(function(){
  animasiIntro();

});
