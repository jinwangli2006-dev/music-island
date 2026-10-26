//app background music
playSound("sound://category_background/wavering_wind.mp3");

//screenHome
onEvent("buttonNextOnScreenHome","click",function(){
  playSound("click-sound-(1).mp3",false);
  setScreen("screenIntro");
});

//screenIntro
onEvent("buttonNextOnScreenIntro","click",function(){
  playSound("click-sound-(1).mp3",false);
  setScreen("screenImage");
});
onEvent("buttonBackOnScreenIntro","click",function(){
  playSound("click-sound-(1).mp3",false);
  setScreen("screenHome");
});

//screenImage
onEvent("imageInstrumentsOnScreenImage", "click", function(){
  setScreen("screenGuitar");
});

onEvent("buttonNextOnScreenImage","click",function(){
  playSound("click-sound-(1).mp3",false);
  setScreen("screenExplain");
});
onEvent("buttonBackOnScreenImage","click",function(){
  playSound("click-sound-(1).mp3",false);
  setScreen("screenIntro");
});

//screenGuitar
onEvent("imageGuitarOnScreenGuitar","click",function(){
  stopSound();
  playSound("click-sound-(1).mp3",false);
  playSound("acoustic-guitar_zjrsq7ho.mp3", false);
  });
onEvent("buttonNextOnScreenGuitar","click",function(){
  stopSound();
  playSound("click-sound-(1).mp3",false);
  setScreen("screenDrums");
  playSound("sound://category_background/wavering_wind.mp3");
});
onEvent("buttonBackOnScreenGuitar","click",function(){
  stopSound();
  playSound("click-sound-(1).mp3",false);
  setScreen("screenImage");
  playSound("sound://category_background/wavering_wind.mp3");
});

//screenDrums
onEvent("imageDrumsOnScreenDrums","click",function(){
  stopSound();
  playSound("click-sound-(1).mp3",false);
  playSound("Drums.mp3",false)
  });
onEvent("buttonNextOnScreenDrums","click",function(){
  stopSound();
  playSound("click-sound-(1).mp3",false);
  setScreen("screenExplain");
  playSound("sound://category_background/wavering_wind.mp3");
});
onEvent("buttonBackOnScreenDrums","click",function(){
  stopSound();
  playSound("click-sound-(1).mp3",false);
  setScreen("screenGuitar");
  playSound("sound://category_background/wavering_wind.mp3");
});

//screenExplain
onEvent("buttonNextOnScreenExplain","click",function(){
  playSound("click-sound-(1).mp3",false);
  setScreen("screenThePoint");
});
onEvent("buttonBackOnScreenExplain","click",function(){
  playSound("click-sound-(1).mp3",false);
  setScreen("screenImage");
});

//screenThePoint
onEvent("buttonNextOnScreenThePoint","click",function(){
  playSound("click-sound-(1).mp3",false);
  setScreen("screenEnd");
});
onEvent("buttonBackOnScreenThePoint","click",function(){
  playSound("click-sound-(1).mp3",false);
  setScreen("screenExplain");
});

//screenEnd
onEvent("buttonSubmitOnScreenEnd","click",function(){
  playSound("sound://category_bell/notification_4.mp3",false);
  setText("textInputOnScreenEnd","");
  showElement("labelNotificationOnScreenEnd");
  });
onEvent("buttonReturnOnScreenEnd","click",function(){
  playSound("click-sound-(1).mp3",false);
  setScreen("screenHome");
});
onEvent("buttonBackOnScreenEnd","click",function(){
  playSound("click-sound-(1).mp3",false);
  setScreen("screenThePoint");
});
onEvent("imageStarOnScreenEnd", "click", function(){
  setProperty("imageStarOnScreenEnd","icon-color",rgb(randomNumber(),randomNumber(),randomNumber()));
});
