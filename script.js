const data = [
  {
    id: 1,
    name: "Pokemon",
    image: "media/pokemon-shinsaku-anime-1680202985.png",
    episode: 30,
  },
  {
    id: 2,
    name: "Undead Unluck",
    image: "media/undead-unluck-1696013292.png",
    episode: 8,
  },
  {
    id: 3,
    name: "Shield Hero Season 3",
    image: "media/tate-no-yuusha-no-nariagari-season-3-1698302959.png",
    episode: 8,
  },
  {
    id: 4,
    name: "Samurai X",
    image: "media/rurouni-kenshin-meiji-kenkaku-romantan-2023-1688156760.png",
    episode: 21,
  },
  {
    id: 5,
    name: "Jujutsu Kaisen",
    image: "media/jujutsukaisen.png",
    episode: 18,
  },
  {
    id: 6,
    name: "Spy x Family",
    image: "media/spy-x-family-season-2-1696012743.png",
    episode: 8,
  },
  {
    id: 7,
    name: "Eminence of Shadow",
    image:
      "media/kage-no-jitsuryokusha-ni-naritakute-2nd-season-1698286773.png",
    episode: 8,
  },
  {
    id: 8,
    name: "Dr. Stone",
    image: "media/dr-stone-new-world-part-2-1696007370.png",
    episode: 7,
  },
  {
    id: 9,
    name: "Doraemon",
    image: "media/doraemon-movie-22-nobita-to-tsubasa-no-yuusha-tachi.png",
    episode: 1022,
  },
  {
    id: 10,
    name: "Migi to Dali",
    image: "media/migi-to-dali.png",
    episode: 7,
  },
  {
    id: 11,
    name: "Demon Slayer Movie",
    image: "media/kimetsu-no-yaiba-asakusa-hen.png",
    episode: 1,
  },
  {
    id: 12,
    name: "Reincarnated as slime",
    image: "media/tensei-shitara-slime-datta-ken-coleus-no-yume.png",
    episode: 5,
  },
];

let cardmain = document.querySelector(".card-main");
for (let i = 0; i < data.length; i++) {
  cardmain.innerHTML += `
  <div class="card">
    <img src="${data[i].image}" alt="" />
    <h1>${data[i].name}</h1>
    <p>Epsiode: ${data[i].episode}</p>
  </div>
  `;
}
