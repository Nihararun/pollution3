const $homepage=document.getElementById("homepage")
const $airpollution=document.getElementById("airpollution");
const $landpollution=document.getElementById("landpollution");
const $noisepollution=document.getElementById("noisepollution");
const $waterpollution=document.getElementById("waterpollution");
$homepage.onclick=()=>{
  document.body.style.backgroundImage="url('https://smartbuildingsmagazine.com/imager/news/103090/Air_comparison_46527c80523046a5c0b3b8e30581599a.jpg')"
  document.body.style.backgroundSize="100%";
  document.body.style.color="black";
  document.getElementById("heading").innerHTML="Pollution";
document.getElementById("definition").innerHTML="Pollution is the introduction of harmful materials into the environment."
document.getElementById("cause").innerHTML="Pollution is hazardous and can cause problems to the population and the environment. Environmental pollution occurs when chemicals pollute natural surroundings."
document.getElementById("save").innerHTML="The concept of three R’s which means to reduce, reuse and recycle is good to implement in our daily lives."

}

$airpollution.onclick=()=>{
    document.body.style.backgroundImage="url('https://miro.medium.com/max/700/1*2JetYEAI5zZSFmCnL9grsw.png')";
    document.body.style.backgroundSize="100%";
    document.body.style.color="black";
    document.getElementById("heading").innerHTML="Air pollution";
    document.getElementById("definition").innerHTML="Air pollution is the presence of substances in the atmosphere that are harmful to the health of humans and other living beings, or cause damage to the climate or to materials.";
  document.getElementById("cause").innerHTML="Air pollution is caused by solid and liquid particles and certain gases that are suspended in the air. ";
   document.getElementById("save").innerHTML="Reduce the number of trips you take in your car.";
  
   
}

$landpollution.onclick=()=>{
    document.body.style.backgroundImage="url('https://pixfeeds.com/images/save-nature/1280-172940213-broken-field.jpg')";
    document.body.style.backgroundSize="100%";
    document.body.style.color="white";
    document.getElementById("heading").innerHTML="Land pollution";
    document.getElementById("definition").innerHTML="Land pollution refers to the deterioration of the earth's land surfaces, at and below ground level.";
  document.getElementById("cause").innerHTML="Land pollution can occur due to poor handling of hazardous materials, unintended accidents, and even acts of nature such as floods and hurricanes";
   document.getElementById("save").innerHTML="Improve fertility of the land by reforesting.";
  

}

$noisepollution.onclick=()=>{
    document.body.style.backgroundImage="url('https://connectionsbyfinsa.com/wp-content/uploads/2019/02/contaminacion-acustica-2.jpg')";
    document.body.style.backgroundSize="100%";
    document.body.style.color="white";
    document.getElementById("heading").innerHTML="Noise pollution";
    document.getElementById("definition").innerHTML="Noise pollution is generally defined as regular exposure to elevated sound levels that may lead to adverse effects in humans or other living organisms.";
  document.getElementById("cause").innerHTML=" Exposure to loud noise can also cause high blood pressure, heart disease, sleep disturbances, and stress.";
   document.getElementById("save").innerHTML="Invest in Noise-Canceling Headphones.";
  

}

$waterpollution.onclick=()=>{
    document.body.style.backgroundImage="url('https://assets.nrdc.org/sites/default/files/styles/full_content/public/media-uploads/guide_waterpollution_c09gbd_rm_ds_2400.jpg?itok=5dj0gLGQ')"
    document.body.style.backgroundSize="100%";
    document.body.style.color="black";
    document.getElementById("heading").innerHTML="Water pollution";
    document.getElementById("definition").innerHTML="Water pollution is any chemical, physical or biological change in the quality of water that has a harmful effect on any living thing that drinks or uses or lives in it. ";
  document.getElementById("cause").innerHTML="Leakage from Underground Storage and Piping";
   document.getElementById("save").innerHTML="DO NOT dispose of household chemicals or cleaning agents down the sink or toilet. ";   
 
}