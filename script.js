const content = {
  a: { text: "A for Apple", image: "Apple.png", audio: "A.mp3" },
  b: { text: "B for Banana", image: "Banana.png", audio: "B.mp3" },
  c: { text: "C for Cat", image: "Cat.png", audio: "C.mp3" },
  d: { text: "D for Dog", image: "Dog.png", audio: "D.mp3" },
  e: { text: "E for Elephant", image: "Elephant.png", audio: "E.mp3" },
  f: { text: "F for Fish", image: "Fish.png", audio: "F.mp3" },
  g: { text: "G for Grapes", image: "Grapes.png", audio: "G.mp3" },
  h: { text: "H for Horse", image: "Horse.png", audio: "H.mp3" },
  i: { text: "I for Ice Cream", image: "Ice-cream.png", audio: "I.mp3" },
  j: { text: "J for Jug", image: "Jug.png", audio: "J.mp3" },
  k: { text: "K for Kite", image: "Kite.png", audio: "K.mp3" },
  l: { text: "L for Lion", image: "Lion.png", audio: "L.mp3" },
  m: { text: "M for Mango", image: "Mango.png", audio: "M.mp3" },
  n: { text: "N for Nest", image: "Nest.png", audio: "N.mp3" },
  o: { text: "O for Orange", image: "Orange.png", audio: "O.mp3" },
  p: { text: "P for Parrot", image: "Parrot.png", audio: "P.mp3" },
  q: { text: "Q for Queen", image: "Queen.png", audio: "Q.mp3" },
  r: { text: "R for Rat", image: "Rat.png", audio: "R.mp3" },
  s: { text: "S for Sun", image: "Sun.png", audio: "S.mp3" },
  t: { text: "T for Tiger", image: "Tiger.png", audio: "T.mp3" },
  u: { text: "U for Umbrella", image: "Umbrella.png", audio: "U.mp3" },
  v: { text: "V for Van", image: "Van.png", audio: "V.mp3" },
  w: { text: "W for Watemelon", image: "Watermelon.png", audio: "W.mp3" },
  x: { text: "X for X-ray", image: "X-ray.jpg", audio: "X.mp3" },
  y: { text: "Y for Yak", image: "Yak.png", audio: "Y.mp3" },
  z: { text: "Z for Zebra", image: "Zebra.png", audio: "Z.mp3" },
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
