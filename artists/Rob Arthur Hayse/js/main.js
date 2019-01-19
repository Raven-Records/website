var images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"]; //your urls
var song = ["The Pre-Retox Detox", "Could be Ghosts", "Coming Soon!", "Coming Soon!", "Coming Soon!", "Coming Soon!"];
var description = [
                    "Beautiful black Cayman S available in Rancho Cucomonga.",
                    "Exelent example of a Subaru BRZ in classic BRZ Blue available for sale in Claremont.",
                    "Unbeatable deal on this used black Cayman S available in Diamond Bar.",
                    "Subaru BRZ with rear lip in perfect condition with low miles available in Riverside.",
                    "Aggressively optioned Black Cayman S with matte black hood available in West Hollywood.",
                    "Brand new blue Subaru BRZ tS available at STGAuto of Ontario."
];
console.log(images);
var url ; //assign later, make scope global to script

//split song string on whitspace for url links
var songLink = [];
for(var s=0; s < song.length; s++){
  var str = song[s].replace(/\s/g, "-");
  songLink.push(str);
}


for(var i=0; i < images.length; i++) //establish for, 6 items, last index place is 5, if you recall
{
  var gridDiv = document.getElementById("gridDiv");
  var card = document.createElement("div");
  var cardBody = document.createElement("div");
  var imgInDiv = document.createElement("img");
  var songBtn = document.createElement("button");
  var cardTitle = document.createElement("h5");
  var cardContent = document.createTextNode(song[i]);
  var favorite = document.createElement("input");
  var unfavorite = document.createElement("input");
  var textid = song[i];
  var link = document.createElement("a");



  console.log("image in iteration is " + images[i]);
  console.log(song[i]);
  console.log(description[i]);
  url = "C:\\Users\\jrivy.DESKTOP-E7SO70T\\Dropbox\\School\\CIS_3110\\Phase_4_Assignment\\play.png" //+ images[i];
  urlOfDetailPage = "https://robarthurhayes.bandcamp.com/track/" + songLink[i]; //where you will navigate, once you press the image, will send the detail page the img to analyze

  card.setAttribute("class", "card");
  cardBody.setAttribute("class", "card-body");
  favorite.setAttribute("id", [i]);
  cardTitle.appendChild(cardContent);
  card.appendChild(cardTitle);
  imgInDiv.setAttribute("class", "card-img-top"); //fit to div
  imgInDiv.setAttribute("src", url); //src to url, above, determined by for i
  imgInDiv.setAttribute("alt", "Song image");
  songBtn.setAttribute("class", "btn btn-lg btn-block");
  songBtn.setAttribute("type", "button");
  link.setAttribute("href", urlOfDetailPage); // so you'll navigate to the url

  link.appendChild(imgInDiv); //make the image the link
  card.appendChild(link);//place the link inside of each div
  console.log(textid);

  $(favorite).attr({
    "type" : "button",
    "id" : [i],
    "value" : "Make Favorite",
    "name" : song[i],
    "onclick" : "console.log(i)"
  });

  unfavorite.setAttribute("type", "button");
  unfavorite.setAttribute("id", "unfav");

  $(unfavorite).attr({
    "type" : "button",
    "id" : "unfav" + [i],
    "value" : "Unfavorite"
  });

  $(card).append(favorite, unfavorite);
  gridDiv.appendChild(card);
  document.body.appendChild(gridDiv);//then appd to body, document.body.appendChild


}
