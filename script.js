const content = {
    a: { text: "A for Apple", image: "img/Apple.png", audio: "sound/A.mp3" },
    b: { text: "B for Banana", image: "img/Banana.png", audio: "sound/B.mp3" },
    c: { text: "C for Cat", image: "img/Cat.png", audio: "sound/C.mp3" },
    d: { text: "D for Dog", image: "img/Dog.png", audio: "sound/D.mp3" },
    e: { text: "E for Elephant", image: "img/Elephant.png", audio: "sound/E.mp3" },
    f: { text: "F for Fish", image: "img/Fish.png", audio: "sound/F.mp3" },
    g: { text: "G for Grapes", image: "img/Grapes.png", audio: "sound/G.mp3" },
    h: { text: "H for Horse", image: "img/Horse.png", audio: "sound/H.mp3" },
    i: { text: "I for Ice Cream", image: "img/Ice-cream.png", audio: "sound/I.mp3" },
    j: { text: "J for Jug", image: "img/Jug.png", audio: "sound/J.mp3" },
    k: { text: "K for Kite", image: "img/Kite.png", audio: "sound/K.mp3" },
    l: { text: "L for Lion", image: "img/Lion.png", audio: "sound/L.mp3" },
    m: { text: "M for Mango", image: "img/Mango.png", audio: "sound/M.mp3" },
    n: { text: "N for Nest", image: "img/Nest.png", audio: "sound/N.mp3" },
    o: { text: "O for Orange", image: "img/Orange.png", audio: "sound/O.mp3" },
    p: { text: "P for Parrot", image: "img/Parrot.png", audio: "sound/P.mp3" },
    q: { text: "Q for Queen", image: "img/Queen.png", audio: "sound/Q.mp3" },
    r: { text: "R for Rat", image: "img/Rat.png", audio: "sound/R.mp3" },
    s: { text: "S for Sun", image: "img/Sun.png", audio: "sound/S.mp3" },
    t: { text: "T for Tiger", image: "img/Tiger.png", audio: "sound/T.mp3" },
    u: { text: "U for Umbrella", image: "img/Umbrella.png", audio: "sound/U.mp3" },
    v: { text: "V for Van", image: "img/Van.png", audio: "sound/V.mp3" },
    w: { text: "W for Watemelon", image: "img/Watermelon.png", audio: "sound/W.mp3" },
    x: { text: "X for X-ray", image: "img/X-ray.jpg", audio: "sound/X.mp3" },
    y: { text: "Y for Yak", image: "img/Yak.png", audio: "sound/Y.mp3" },
    z: { text: "Z for Zebra", image: "img/Zebra.png", audio: "sound/Z.mp3" },
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