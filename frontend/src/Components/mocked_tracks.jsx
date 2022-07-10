const mocked_tracks = [
  {
    artist: "Mandragora",
    audio:
      "http://cdn-preview-f.deezer.com/stream/c-fb7ef496de81a8c0121fadca843580f2-5.mp3",
    image:
      "http://e-cdn-images.dzcdn.net/images/cover/0100550db373ed65f15c407cd712cf77/250x250-000000-80-0-0.jpg",
    isrc: "QZES51893102",
    title: "Sem Voce, Sou Ninguem",
  },
  {
    artist: "Henrique Camacho",
    audio:
      "http://cdn-preview-3.deezer.com/stream/c-3868bff406021603d0cdc4a5cfa9c128-3.mp3",
    image:
      "http://e-cdn-images.dzcdn.net/images/cover/be06c1e2941791adbc63c1283260c515/250x250-000000-80-0-0.jpg",
    isrc: "GBLV61911508",
    title: "Sevilla (Original Mix)",
  },
  {
    artist: "Vermont (Br) & Bandi",
    audio:
      "http://cdn-preview-4.deezer.com/stream/c-445ebd1c43ee0faedae3051be29b1e44-12.mp3",
    image:
      "http://e-cdn-images.dzcdn.net/images/cover/acc502022a8b064f43ace006b93aec11/250x250-000000-80-0-0.jpg",
    isrc: "TCADN1832978",
    title: "Kazahi",
  },
  {
    artist: "Henrique Camacho",
    audio:
      "http://cdn-preview-0.deezer.com/stream/c-02856f807c343d413ab42318be94aa11-3.mp3",
    image:
      "http://e-cdn-images.dzcdn.net/images/cover/7b8dec672ee26d0dfbfa7aeb595e41cd/250x250-000000-80-0-0.jpg",
    isrc: "GBKQU1986317",
    title: "Contagiante II (Original Mix)",
  },
  {
    artist: "Astrix",
    audio:
      "http://cdn-preview-3.deezer.com/stream/c-3af90ef3003dd81b742457f2a53d34f9-6.mp3",
    image:
      "http://e-cdn-images.dzcdn.net/images/cover/125013add4f431bfc40f7768b33ce6b9/250x250-000000-80-0-0.jpg",
    isrc: "DKZVA1761574",
    title: "Adhana",
  },
  {
    artist: "Mandragora",
    audio:
      "http://cdn-preview-4.deezer.com/stream/c-464efdeacfac3bc54fd1fb78155bb4d9-6.mp3",
    image:
      "http://e-cdn-images.dzcdn.net/images/cover/6d94edc8bf75450e4da2316e396ced86/250x250-000000-80-0-0.jpg",
    isrc: "GBLV61642320",
    title: "Sem Chão (Original Mix)",
  },
  {
    artist: "Sajanka",
    audio:
      "http://cdn-preview-b.deezer.com/stream/c-be785f105fa307191fadcb4aaaf95729-5.mp3",
    image:
      "http://e-cdn-images.dzcdn.net/images/cover/e35100d6b82b6fb41166215fcfd30715/250x250-000000-80-0-0.jpg",
    isrc: "QZDA41827896",
    title: "Tana Num 170bpm",
  },
  {
    artist: "Henrique Camacho",
    audio:
      "http://cdn-preview-b.deezer.com/stream/c-b98b13defb75100342e2ed79c69e672b-3.mp3",
    image:
      "http://e-cdn-images.dzcdn.net/images/cover/56b9de31b7bfe27ef9506fb426304c33/250x250-000000-80-0-0.jpg",
    isrc: "GBLV61717872",
    title: "Mãe das Águas (Original Mix)",
  },
  {
    artist: "HVME",
    audio:
      "http://cdn-preview-e.deezer.com/stream/c-e67d34da02b7fe0aeeea690a64b0e636-4.mp3",
    image:
      "http://e-cdn-images.dzcdn.net/images/cover/f1c61639aea9ae483a9cf554a79b01b1/250x250-000000-80-0-0.jpg",
    isrc: "TCAEW2040509",
    title: "Goosebumps",
  },
  {
    artist: "Henrique Camacho",
    audio:
      "http://cdn-preview-6.deezer.com/stream/c-6e2f9d6449d25610eb343d9e33d1c936-3.mp3",
    image:
      "http://e-cdn-images.dzcdn.net/images/cover/340408eccbd366d685ba646e62ffb7ae/250x250-000000-80-0-0.jpg",
    isrc: "CA5KR1831635",
    title: "Catalunya (Original Mix)",
  },
  {
    artist: "Babalos",
    audio:
      "http://cdn-preview-5.deezer.com/stream/c-59eadfbace7cf43d100e6d8611d840eb-6.mp3",
    image:
      "http://e-cdn-images.dzcdn.net/images/cover/772cde9baa1adb1af2bd6c660c9875a4/250x250-000000-80-0-0.jpg",
    isrc: "QZANL1772920",
    title: "Power Up",
  },
  {
    artist: "Babalos",
    audio:
      "http://cdn-preview-4.deezer.com/stream/c-44d8c9edac2c6c815fdeca3c24505f5f-3.mp3",
    image:
      "http://e-cdn-images.dzcdn.net/images/cover/135ee58892e1b3314c8e4cc5388a1993/250x250-000000-80-0-0.jpg",
    isrc: "QZES51953932",
    title: "Emotional Break",
  },
  {
    artist: "Babalos",
    audio:
      "http://cdn-preview-6.deezer.com/stream/c-683b98fb68cf403a497b23d1df18fd4a-4.mp3",
    image:
      "http://e-cdn-images.dzcdn.net/images/cover/17ba19a077301e2bd5cb437cc18c89be/250x250-000000-80-0-0.jpg",
    isrc: "QZFYY2061833",
    title: "Evolve",
  },
  {
    artist: "Flakkë",
    audio:
      "http://cdn-preview-b.deezer.com/stream/c-bd2852b8583d3a4ba57492fa07426695-4.mp3",
    image:
      "http://e-cdn-images.dzcdn.net/images/cover/cc3afb53633048f31b7cc9c2bbf266fd/250x250-000000-80-0-0.jpg",
    isrc: "BXHBP1900192",
    title: "Não Vou Sair (feat. AYA)",
  },
  {
    artist: "Henrique Camacho",
    audio:
      "http://cdn-preview-d.deezer.com/stream/c-d9950961b00908e5e296b2b0aa62d2da-2.mp3",
    image:
      "http://e-cdn-images.dzcdn.net/images/cover/7d4526685457d35196e0ee1dd76d9bce/250x250-000000-80-0-0.jpg",
    isrc: "GBLV61816520",
    title: "Maharani (Black Muffin Remix)",
  },
  {
    artist: "Bläzy",
    audio:
      "http://cdn-preview-3.deezer.com/stream/c-3e1db0cca3057235b9bcfa7b917be587-3.mp3",
    image:
      "http://e-cdn-images.dzcdn.net/images/cover/0d2cc960632a04bf11b6256f475f643a/250x250-000000-80-0-0.jpg",
    isrc: "GBKQU1868187",
    title: "Interlude",
  },
  {
    artist: "Flakkë",
    audio:
      "http://cdn-preview-0.deezer.com/stream/c-0708b0fcd7a81e9c0768c0d76cc8b719-3.mp3",
    image:
      "http://e-cdn-images.dzcdn.net/images/cover/5246fddb5e4d52e6558d3eb38a707cbc/250x250-000000-80-0-0.jpg",
    isrc: "BRUM72002119",
    title: "Open Your Heart",
  },
  {
    artist: "BECKER",
    audio:
      "http://cdn-preview-c.deezer.com/stream/c-c9dcb004138bb5eab7bf2018de9560be-4.mp3",
    image:
      "http://e-cdn-images.dzcdn.net/images/cover/19b482eed58f745680a55d57488cca92/250x250-000000-80-0-0.jpg",
    isrc: "US7VG1921863",
    title: "Illusion",
  },
  {
    artist: "Vegas (Brazil)",
    audio:
      "http://cdn-preview-1.deezer.com/stream/c-1027d0f7412b420d011c82a2b54d52a6-6.mp3",
    image:
      "http://e-cdn-images.dzcdn.net/images/cover/3384070c9224e49b3eb1caebad92a447/250x250-000000-80-0-0.jpg",
    isrc: "NLWV71700011",
    title: "Answer From The Stars (Vini Vici vs. Bizzare Contact Remix)",
  },
  {
    artist: "Sajanka",
    audio:
      "http://cdn-preview-2.deezer.com/stream/c-2a1f56a7b27928e4bc4fda2a1200fbf7-7.mp3",
    image:
      "http://e-cdn-images.dzcdn.net/images/cover/2e32b970883ed0cf3854fa9c80efa7be/250x250-000000-80-0-0.jpg",
    isrc: "QZCE61894576",
    title: "Jumpa Lumpa",
  },
  {
    artist: "Mandragora",
    audio:
      "http://cdn-preview-3.deezer.com/stream/c-3a8d537b619842c693fa3b0294b76b48-2.mp3",
    image:
      "http://e-cdn-images.dzcdn.net/images/cover/5fd5362d2b2f7607bdcad544af496850/250x250-000000-80-0-0.jpg",
    isrc: "GBKQU1972016",
    title: "Ammo (Original Mix)",
  },
  {
    artist: "KVSH",
    audio:
      "http://cdn-preview-6.deezer.com/stream/c-6445ed6caa1eb865b6f9ac3b5b42eae0-6.mp3",
    image:
      "http://e-cdn-images.dzcdn.net/images/cover/fd53e3888a740ac40d78e55d3532c2b4/250x250-000000-80-0-0.jpg",
    isrc: "BXHBP1900068",
    title: "Me Gusta (feat. Emy Perez)",
  },
  {
    artist: "Felguk",
    audio:
      "http://cdn-preview-b.deezer.com/stream/c-b4e566488561fdbbb0a21f9faffd5da1-2.mp3",
    image:
      "http://e-cdn-images.dzcdn.net/images/cover/0a0a9dbcada9f111e9d4a37bef64a64f/250x250-000000-80-0-0.jpg",
    isrc: "NLZ542000412",
    title: "OK (Extended Mix)",
  },
  {
    artist: "Astrix",
    audio:
      "http://cdn-preview-a.deezer.com/stream/c-ae3e2c49067df5dcf643ea7acfb5dafd-8.mp3",
    image:
      "http://e-cdn-images.dzcdn.net/images/cover/18c26153566cb227d5cabce2ca18e3e3/250x250-000000-80-0-0.jpg",
    isrc: "UKR6V2031300",
    title: "Beyond the Senses (Bliss Remix)",
  },
  {
    artist: "Mandragora",
    audio:
      "http://cdn-preview-3.deezer.com/stream/c-360aababefdd666c2d941daee8ef777e-3.mp3",
    image:
      "http://e-cdn-images.dzcdn.net/images/cover/fdd328b48b183c494b148dd506f14d5d/250x250-000000-80-0-0.jpg",
    isrc: "GBKQU1967485",
    title: "Lion-Tech (Original Mix)",
  },
  {
    artist: "Henrique Camacho",
    audio:
      "http://cdn-preview-0.deezer.com/stream/c-0004c23c80344a53a1cbb7c31ce13771-3.mp3",
    image:
      "http://e-cdn-images.dzcdn.net/images/cover/7d4526685457d35196e0ee1dd76d9bce/250x250-000000-80-0-0.jpg",
    isrc: "GBLV61816519",
    title: "Maharani Hi-Tech (Original Mix)",
  },
  {
    artist: "Perpectua",
    audio:
      "http://cdn-preview-c.deezer.com/stream/c-c5fde78c7cc873499f01975f42612389-2.mp3",
    image:
      "http://e-cdn-images.dzcdn.net/images/cover/48132ced1da39b9bd6d96ee39c109090/250x250-000000-80-0-0.jpg",
    isrc: "GBKQU2071138",
    title: "Virtude",
  },
  {
    artist: "Henrique Camacho",
    audio:
      "http://cdn-preview-8.deezer.com/stream/c-8cad82553e03a81f85646d5cf65b2ea4-2.mp3",
    image:
      "http://e-cdn-images.dzcdn.net/images/cover/808217bbc51af4acc4a2d2788bc65548/250x250-000000-80-0-0.jpg",
    isrc: "GBKQU2031506",
    title: "50's",
  },
  {
    artist: "Astrix",
    audio:
      "http://cdn-preview-b.deezer.com/stream/c-bf274e3f4c54743b7acb86a4e64fd736-3.mp3",
    image:
      "http://e-cdn-images.dzcdn.net/images/cover/0de2c0190f6bf4c33e3ae41981d45a1b/250x250-000000-80-0-0.jpg",
    isrc: "USA2P1611449",
    title: "Deep Jungle Walk",
  },
  {
    artist: "Special M",
    audio:
      "http://cdn-preview-a.deezer.com/stream/c-a21890d0d120035c08c4175fc64218ec-3.mp3",
    image:
      "http://e-cdn-images.dzcdn.net/images/cover/3564299d2d671e8f30759d0bb4c36be9/250x250-000000-80-0-0.jpg",
    isrc: "USL4Q1809794",
    title: "Monster Breeze",
  },
];

export default mocked_tracks;
