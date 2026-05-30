const content = {
  a: { text: "A for Apple", image: "img/Apple.png", audio: "A.mp3" },
  b: { text: "B for Banana", image: "img/Banana.png", audio: "B.mp3" },
  c: { text: "C for Cat", image: "img/Cat.png", audio: "C.mp3" },
  d: { text: "D for Dog", image: "img/Dog.png", audio: "D.mp3" },
  e: { text: "E for Elephant", image: "img/Elephant.png", audio: "E.mp3" },
  f: { text: "F for Fish", image: "img/Fish.png", audio: "F.mp3" },
  g: { text: "G for Grapes", image: "img/Grapes.png", audio: "G.mp3" },
  h: { text: "H for Horse", image: "img/Horse.png", audio: "H.mp3" },
  i: { text: "I for Ice Cream", image: "img/Ice-cream.png", audio: "I.mp3" },
  j: { text: "J for Jug", image: "img/Jug.png", audio: "J.mp3" },
  k: { text: "K for Kite", image: "img/Kite.png", audio: "K.mp3" },
  l: { text: "L for Lion", image: "img/Lion.png", audio: "L.mp3" },
  m: { text: "M for Mango", image: "img/Mango.png", audio: "M.mp3" },
  n: { text: "N for Nest", image: "img/Nest.png", audio: "N.mp3" },
  o: { text: "O for Orange", image: "img/Orange.png", audio: "O.mp3" },
  p: { text: "P for Parrot", image: "img/Parrot.png", audio: "P.mp3" },
  q: { text: "Q for Queen", image: "img/Queen.png", audio: "Q.mp3" },
  r: { text: "R for Rat", image: "img/Rat.png", audio: "R.mp3" },
  s: { text: "S for Sun", image: "img/Sun.png", audio: "S.mp3" },
  t: { text: "T for Tiger", image: "img/Tiger.png", audio: "T.mp3" },
  u: { text: "U for Umbrella", image: "img/Umbrella.png", audio: "U.mp3" },
  v: { text: "V for Van", image: "img/Van.png", audio: "V.mp3" },
  w: { text: "W for Watemelon", image: "img/Watermelon.png", audio: "W.mp3" },
  x: { text: "X for X-ray", image: "img/X-ray.jpg", audio: "X.mp3" },
  y: { text: "Y for Yak", image: "img/Yak.png", audio: "Y.mp3" },
  z: { text: "Z for Zebra", image: "img/Zebra.png", audio: "Z.mp3" },
};

function playAudio(letter) {
  const letterContent = content[letter.toLowerCase()];
  if (letterContent) {
      document.getElementById('letter').textContent = letter.toUpperCase();
      document.getElementById('description').textContent = letterContent.text;
      document.getElementById('image').src = letterContent.image;
      const audioElement = document.getElementById('audio');
      audioElement.src = letterContent.audio;
      audioElement.play();
  }
}
