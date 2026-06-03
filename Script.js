/* ═══════════════════════════════════════════════════
   CADEAUX & MERVEILLES — Script.js
   CORRECTIONS :
   1. Panier : articles visibles + bouton Commander toujours affiché
   2. Formulaire : validation email & téléphone obligatoire
   3. Galerie modale : thumbnails masqués, navigation uniquement par flèches < >
═══════════════════════════════════════════════════ */

'use strict';

/* ─────────────────────────────────────────────────
   DATA: PRODUCTS
───────────────────────────────────────────────── */
const PRODUCTS = [
  {
    id: 1,
    name: "Montre Élégance ",
    category: "Montres",
    occasions: ["anniversaire","mariage","reussite"],
    price: 10000,
    originalPrice: 12000,
    badge: "Bestseller",
    rating: 4.9,
    reviews: 87,
    img: "images/montre3.png", fallbackImg: "images/montre3.png",
    description: "Un coffret d'exception mêlant force et élégance. Une montre masculine au cadran noir profond rehaussé de détails dorés, accompagnée de ses bracelets assortis.",
    gallery: [
      { src:"images/montre3.png", price:10000, originalPrice:12000, description:"Un coffret d'exception mêlant force et élégance. Une montre masculine au cadran noir profond rehaussé de détails dorés, accompagnée de ses bracelets assortis." },
      { src:"images/montre1.png", price:5000, description:"L'élégance à l'état pur. Une montre automatique d'exception arborant un cadre bleu azur captivant, présentée dans son écrin vert iconique signé Rolex." },
      { src:"images/montre2.png", price:7000, description:"Le minimalisme nocturne. Une montre au design épuré dotée d'un boîtier en acier noir mat et d'un cadran sombre, idéale pour une élégance discrète en soirée." },
      { src:"images/montre4.png", price:5800, description:"Féminité et délicatesse. Une magnifique montre fine couleur or rose accompagnée de son jonc élégant, parfaite pour sublimer les poignets fins au quotidien." },
      { src:"images/montre5.png", price:95000, description:"Le charme du vintage chic. Une montre fine rectangulaire dorée lovée dans un mini-écrin raffiné, un classique indémodable pour toutes les occasions." },
    ],
    variants: ["Noir/Or", "Argent/Blanc", "Rose Gold", "Noir/Argent", "Cuivre/Brun"]
  },
  {
    id: 2,
    name: "Coffret Parfum Luxe",
    category: "Parfums",
    occasions: ["anniversaire","saint-valentin","fete-des-meres","mariage"],
    price: 6900,
    originalPrice: 10500,
    badge: "Coup de cœur",
    rating: 4.8,
    reviews: 142,
    description: "Un écrin de séduction pour les amateurs de beaux parfums. Ce coffret luxueux contient un flacon de 100ml à la fragrance florale-orientale, un roll-on voyage 10ml et une bougie parfumée assortie.",
    img: "images/parf2.png", fallbackImg: "images/parf2.png",
    gallery: [
      { src:"images/parf2.png", price:6900 },
      { src:"images/parf1.png", price:8000 },
      { src:"images/parf3.png", price:10000 },
      { src:"images/parf4.png", price:11000 },
      { src:"images/parf5.png", price:15000 },
    ],
    variants: ["Floral Oriental", "Boisé Musqué", "Frais Aquatique", "Épicé Ambré", "Rose Oud", "Vanille Bois"]
  },
  {
    id: 3,
    name: "Bouquet Roses Premium",
    category: "Fleurs",
    occasions: ["saint-valentin","anniversaire","fete-des-meres","mariage","naissance"],
    price: 4500,
    badge: null,
    rating: 4.9,
    reviews: 203,
    description: "Un bouquet d'exception de 30 roses fraîches sélectionnées avec le plus grand soin. Présenté dans un emballage de prestige, il est le messager parfait de vos sentiments les plus profonds.",
    img: "images/fleurs2.png", fallbackImg: "images/fleurs2.png",
    gallery: [
      { src:"images/fleurs2.png", price:4500 },
      { src:"images/fleurs3.png", price:3000 },
      { src:"images/fleurs1.png", price:3500 },
      { src:"images/fleurs4.png", price:5000 },
      { src:"images/fleurs5.png", price:5500 },
      { src:"images/fleurs6.png", price:6000 },
      { src:"images/fleurs7.png", price:6200 },
      { src:"images/fleurs8.png", price:6500 },
    ],
    variants: ["Roses Rouges ×30", "Roses Blanches ×30", "Roses Roses ×30", "Mix Coloré ×40", "Pivoines ×20", "Orchidées ×15"]
  },
  {
    id: 4,
    name: "Sac à Main Cuir",
    category: "Accessoires",
    occasions: ["anniversaire","saint-valentin","fete-des-meres","noel"],
    price: 5800,
    badge: "Nouveau",
    rating: 4.7,
    reviews: 56,
    description: "Un sac à main en cuir véritable au design intemporel. Finitions dorées, doublure en satin, fermeture magnétique. Ce sac élégant est la définition même du cadeau qui dure une vie entière.",
    img: "images/sac4.png", fallbackImg: "images/sac4.png",
    gallery: [
      { src:"images/sac4.png",  price:5800, description:"Alliant la douceur du rose pastel à un design géométrique moderne, ce sac à main rigide aux finitions dorées." },
      { src:"images/sac1.png",  price:2500, description:"Alliant la douceur du noir pastel à un design géométrique moderne, ce sac à main rigide aux finitions dorées." },
      { src:"images/sac9.png",  price:4000, description:"Alliant la douceur du vert pastel à un design géométrique moderne, ce sac à main rigide aux finitions blanches." },
      { src:"images/sac5.png",  price:7000, description:"Alliant la douceur des perles blanches à un design géométrique moderne, ce sac à main rigide aux finitions dorées." },
      { src:"images/sac10.png", price:5000, description:"Alliant la douceur du bordeaux à un design géométrique moderne, ce sac à main rigide aux finitions dorées." },
      { src:"images/sac7.png",  price:3000, description:"Alliant la douceur du bleu pastel à un design géométrique moderne, ce sac à main rigide aux finitions dorées." },
      { src:"images/sac2.png",  price:4500, description:"Alliant la douceur du rouge pastel à un design géométrique moderne, ce sac à main rigide aux finitions dorées." },
      { src:"images/sac8.png",  price:4000, description:"Alliant la douceur du noir à un design géométrique moderne, ce sac à main rigide aux finitions blanches." },
      { src:"images/sac3.png",  price:2500, description:"Alliant la douceur du marron pastel à un design géométrique moderne, ce sac à main rigide aux finitions dorées." },
      { src:"images/sac6.png",  price:3000, description:"Alliant la douceur du noir à un design géométrique moderne, ce sac à main rigide aux finitions silver." },
    ],
    variants: ["Camel", "Noir", "Bordeaux", "Cognac", "Crème", "Marine"]
  },
  {
    id: 5,
    name: "Laptop Ultrafin Pro",
    category: "High-Tech",
    occasions: ["anniversaire","reussite","noel"],
    price: 99000,
    badge: "Premium",
    rating: 4.9,
    reviews: 31,
    description: "Le cadeau high-tech par excellence. Ultra-léger (1,2 kg), écran Retina 14\", autonomie 18h. Pour célébrer les grandes réussites avec un cadeau à la hauteur des ambitions. Livré dans sa boîte premium avec accessoires.",
    img: "images/pc3.png", fallbackImg: "images/pc3.png",
    gallery: [
      { src:"images/pc3.png", price:99000, description:"Processeur de dernière génération, mémoire RAM ultra rapide et SSD performant, ce PC garantit une fluidité absolue et une réactivité instantanée." },
      { src:"images/pc1.png", price:95000, description:"Processeur de dernière génération, mémoire RAM ultra rapide et SSD performant, ce PC garantit une fluidité absolue et une réactivité instantanée." },
      { src:"images/pc2.png", price:80000, description:"Processeur de dernière génération, mémoire RAM ultra rapide et SSD performant, ce PC garantit une fluidité absolue et une réactivité instantanée." },
      { src:"images/pc4.png", price:60000, description:"Processeur de dernière génération, mémoire RAM ultra rapide et SSD performant, ce PC garantit une fluidité absolue et une réactivité instantanée." },
    ],
    variants: ["Argent 256Go", "Argent 512Go", "Noir Sidéral 256Go", "Noir Sidéral 512Go", "Or Champagne 256Go"]
  },
  {
    id: 6,
    name: "Coffret Chocolats Belges",
    category: "Gourmandises",
    occasions: ["anniversaire","saint-valentin","noel","mariage","fete-des-meres"],
    price: 3000,
    badge: null,
    rating: 4.8,
    reviews: 178,
    description: "Un voyage gustatif au cœur de la Belgique. Chocolats artisanaux aux ganaches exquises dans un élégant coffret noir et or. Pralinés, truffes, ganaches aux fruits — chaque bouchée est une fête pour les sens.",
    img: "images/chocolat2.png", fallbackImg: "images/chocolat2.png",
    gallery: [
      { src:"images/chocolat2.png", price:3000 },
      { src:"images/chocolat1.png", price:2500 },
      { src:"images/chocolat3.png", price:4000 },
      { src:"images/chocolat6.png", price:2700 },
      { src:"images/chocolat5.png", price:5000 },
      { src:"images/chocolat7.png", price:3500 },
      { src:"images/chocolat4.png", price:4500 },
    ],
    variants: ["Assortiment 36 pcs", "Pralinés ×24", "Truffes ×20", "Noir Intense ×30", "Coffret 54 pcs Luxe"]
  },
  {
    id: 7,
    name: "Bijou Collier Or",
    category: "Bijoux",
    occasions: ["anniversaire","saint-valentin","mariage","fete-des-meres","noel"],
    price: 18500,
    badge: "Coup de cœur",
    rating: 5.0,
    reviews: 94,
    description: "Un collier en or 18 carats serti d'un pendant en forme de cœur avec un diamant central. Livré dans un écrin de velours bordeaux. Un cadeau éternel pour une femme exceptionnelle, à un moment exceptionnel.",
    img: "images/bijoux8.png", fallbackImg: "images/bijoux8.png",
    gallery: [
      { src:"images/bijoux8.png", price:18500, description:"Ce collier finement ciselé alterne l'éclat de cristaux translucides et la douceur de la pierre bleu azur taillée en poire pour illuminer magnifiquement votre décolleté." },
      { src:"images/bijoux7.png", price:2000,  description:"Symbole de grâce et de pureté, sublimé par un pavage de cristaux étincelants aux reflets chauds." },
      { src:"images/bijoux9.png", price:7000,  description:"Cette parure d'un romantisme absolu réunit une montre sophistiquée, un bracelet, un collier, une bague et des boucles d'oreille assorties." },
      { src:"images/bijoux1.png", price:8000,  description:"Un collier en or 18 carats serti d'un pendant en forme de cœur avec un diamant central. Livré dans un écrin de velours bordeaux." },
      { src:"images/bijoux2.png", price:12000, description:"Cette parure d'un romantisme absolu réunit une montre sophistiquée, un bracelet, un collier, une bague et des boucles d'oreille assorties." },
      { src:"images/bijoux4.png", price:20000, description:"Une bague solitaire en or met magnifiquement en valeur un cristal pour sceller vos plus belles promesses." },
      { src:"images/bijoux3.png", price:15000, description:"Cette parure d'un romantisme absolu réunit une montre sophistiquée, un collier, une bague et des boucles d'oreille assorties." },
      { src:"images/bijoux5.png", price:7000,  description:"Symbole de grâce et de pureté, sublimé par un pavage de cristaux étincelants aux reflets chauds." },
      { src:"images/bijoux6.png", price:15000, description:"Cette parure d'un romantisme absolu réunit un collier, une bague et des boucles d'oreille assorties." },
    ],
    variants: ["Or Jaune", "Or Rose", "Or Blanc", "Or Jaune + Diamant", "Or Rose + Rubis", "Platine"]
  },
  {
    id: 8,
    name: "Livre ",
    category: "Livres",
    occasions: ["anniversaire","noel","reussite","ramadan"],
    price: 1800,
    badge: null,
    rating: 4.6,
    reviews: 67,
    description: "Un beau livre relié en lin avec tranche dorée. Une lecture profonde et apaisante sur l'art de trouver le bonheur dans les petites choses. Magnifique objet de bibliothèque, il embellira aussi bien la maison que le cœur.",
    img: "images/livre4.png", fallbackImg: "images/livre4.png",
    gallery: [
      { src:"images/livre4.png", price:1800 },
      { src:"images/l3.png", price:2000 },
      { src:"images/l2.png", price:2000 },
      { src:"images/quran.png",  price:1000 },
      { src:"images/livre1.png", price:2000 },
      { src:"images/livre6.png", price:1500 },
      { src:"images/livre7.png", price:2000 },
      { src:"images/livre5.png", price:2000 },
      { src:"images/livre8.png", price:2000 },
    ],
    variants: ["Édition Standard", "Édition Collector Signée", "Coffret 3 volumes", "Édition Luxe Cuir", "Format Poche"]
  },
  {
    id: 9,
    name: "Vêtement & Model",
    category: "Vêtements",
    occasions: ["anniversaire","noel","fete-des-meres"],
    price: 4000,
    badge: null,
    rating: 4.7,
    reviews: 49,
    description: "Un pull en pur cachemire d'une douceur incomparable. Tissé à la main par des artisans, il offre légèreté, chaleur et un luxe discret que l'on apprécie à chaque port. Le cadeau cocooning par excellence.",
    img: "images/vet5.png", fallbackImg: "images/vet5.png",
    gallery: [
      { src:"images/vet5.png",      price:4000 },
      { src:"images/vet4.png",      price:6000 },
      { src:"images/vet6.png",      price:9000 },
      { src:"images/vet7.png",      price:10000 },
      { src:"images/vet2.png",      price:4000 },
      { src:"images/vet1.png",      price:6000 },
      { src:"images/vet3.png",      price:5500 },
      { src:"images/vet12.png",     price:5000 },
      { src:"images/vetement1.png", price:3500 },
      { src:"images/vetement2.png", price:4000 },
      { src:"images/vetement3.png", price:6000 },
      { src:"images/vetement4.png", price:8000 },
      { src:"images/vetement7.png", price:7000 },
      { src:"images/vet8.png",      price:4000 },
      { src:"images/vet9.png",      price:5000 },
      { src:"images/vet10.png",     price:10000 },
      { src:"images/vet11.png",     price:3500 },
      { src:"images/vetement6.png", price:5000 },
    ],
    variants: ["Crème / S", "Crème / M", "Crème / L", "Camel / S", "Camel / M", "Camel / L", "Gris perle / S", "Gris perle / M"]
  },
  {
    id: 10,
    name: "Coffret Spa & Bien-être",
    category: "Beauté",
    occasions: ["anniversaire","fete-des-meres","saint-valentin","noel","mariage"],
    price: 5000,
    badge: "Nouveau",
    rating: 4.9,
    reviews: 115,
    description: "Offrez une parenthèse de douceur absolue. Ce coffret spa contient : huile de bain aux pétales de rose, gommage au sucre de canne, crème corps karité, bougies de massage et masque hydratant. Un vrai cadeau de luxe.",
    img: "images/spa1.png", fallbackImg: "images/spa1.png",
    gallery: [
      { src:"images/spa1.png", price:5000 },
      { src:"images/spa2.png", price:5500 },
      { src:"images/spa3.png", price:6000 },
      { src:"images/spa4.png", price:6500 },
      { src:"images/spa5.png", price:7000 },
    ],
    variants: ["Rose & Jasmin", "Vanille & Miel", "Lavande & Eucalyptus", "Argan & Or", "Coffret Deluxe 8 pcs"]
  },
  {
    id: 11,
    name: "Ourson Peluche Géante",
    category: "Jouets",
    occasions: ["naissance","anniversaire","saint-valentin","noel"],
    price: 4000,
    badge: null,
    rating: 4.8,
    reviews: 88,
    description: "Un ourson en peluche ultra-doux de 80 cm, idéal pour les petits comme pour les grands. Rembourrage hypoallergénique, fourrure premium lavable. Le compagnon câlin parfait pour les cœurs tendres !",
    img: "images/p1.png", fallbackImg: "images/p1.png",
    gallery: [
      { src:"images/p1.png", price:4000 },
      { src:"images/p2.png", price:5000 },
      { src:"images/p3.png", price:4500 },
      { src:"images/p4.png", price:5000 },
      { src:"images/p5.png", price:6000 },
    ],
    variants: ["Beige 60cm", "Beige 80cm", "Beige 100cm", "Blanc 60cm", "Blanc 80cm", "Brun Foncé 60cm", "Avec habit personnalisé"]
  },
  {
    id: 12,
    name: "Smartwatch Connectée",
    category: "High-Tech",
    occasions: ["anniversaire","reussite","noel"],
    price: 7000,
    badge: "Bestseller",
    rating: 4.7,
    reviews: 62,
    description: "La montre connectée qui allie style et technologie. Suivi de santé en temps réel, GPS intégré, autonomie 7 jours, résistance à l'eau. Compatible iOS & Android. Le cadeau idéal pour les passionnés de tech.",
    img: "images/m1.png", fallbackImg: "images/m1.png",
    gallery: [
      { src:"images/m1.png", price:7000 },
      { src:"images/m2.png", price:10000 },
      { src:"images/m3.png", price:12000 },
    ],
    variants: ["Noir Sport", "Argent Classique", "Or Rose Luxe", "Blanc Pur", "Bleu Nuit"]
  },
  {
    id: 13,
    name: "Coffret Thé & Douceurs",
    category: "Gourmandises",
    occasions: ["anniversaire","ramadan","noel","fete-des-meres"],
    price: 3200,
    badge: null,
    rating: 4.6,
    reviews: 74,
    description: "Un voyage sensoriel à travers les meilleures théières du monde. 12 variétés de thés premium (oolong, sencha, darjeeling, rooibos...) accompagnées de gâteaux secs artisanaux et d'un miel de fleurs rare.",
    img: "images/the3.png", fallbackImg: "images/the3.png",
    gallery: [
      { src:"images/the3.png", price:3200 },
      { src:"images/the5.png", price:4000 },
      { src:"images/the1.png", price:4400 },
      { src:"images/the2.png", price:3000 },
      { src:"images/the4.png", price:4200 },
      { src:"images/the6.png", price:5000 },
      { src:"images/the7.png", price:5200 },
    ],
    variants: ["Coffret 12 Thés", "Coffret 20 Thés Luxe", "Coffret Zen + Théière", "Box Mensuelle 3 mois"]
  },
  {
    id: 14,
    name: "Tableau Déco Prestige",
    category: "Décoration",
    occasions: ["mariage","anniversaire","naissance","reussite"],
    price: 6500,
    badge: "Nouveau",
    rating: 4.8,
    reviews: 39,
    description: "Une œuvre d'art contemporaine tirée sur toile premium, format 60×80 cm, encadrée en bois doré. Des motifs abstraits dorés sur fond blanc cassé qui habillent avec élégance n'importe quel intérieur. Livré emballé cadeau.",
    img: "images/tableau4.png", fallbackImg: "images/tableau4.png",
    gallery: [
      { src:"images/tableau4.png", price:6500 },
      { src:"images/tableau5.png", price:6000 },
      { src:"images/tableau1.png", price:7000 },
      { src:"images/tableau6.png", price:8000 },
      { src:"images/tableau7.png", price:8500 },
      { src:"images/tableau2.png", price:9000 },
      { src:"images/tableau8.png", price:6800 },
    ],
    variants: ["40×60 cm", "60×80 cm", "80×100 cm", "Triptyque 3×40cm", "Format Panoramique"]
  },
  {
    id: 15,
    name: "Coffret Naissance Magique",
    category: "Bébé",
    occasions: ["naissance"],
    price: 5800,
    badge: "Coup de cœur",
    rating: 5.0,
    reviews: 127,
    description: "Le coffret idéal pour accueillir un nouveau-né dans la magie. Contient : doudou personnalisé prénom, body 100% coton bio, paire de chaussons en laine, livre d'éveil illustré et bougie parfumée pour maman.",
    img: "images/naiss3.png", fallbackImg: "images/naiss3.png",
    gallery: [
      { src:"images/naiss3.png", price:5800 },
      { src:"images/naiss5.png", price:5900 },
      { src:"images/naiss2.png", price:6000 },
      { src:"images/naiss4.png", price:6500 },
      { src:"images/naiss1.png", price:5900 },
      { src:"images/naiss6.png", price:5090 },
    ],
    variants: ["0–3 mois", "3–6 mois", "6–9 mois", "Personnalisé Prénom", "Coffret Jumeaux"]
  },
  {
    id: 16,
    name: "Coffret Eclat de Maman",
    category: "meres",
    occasions: ["fete-des-meres"],
    price: 8900,
    originalPrice: 10500,
    badge: "Offre Speciale",
    rating: 4.8,
    reviews: 142,
    description: "Célébrez la beauté et la douceur maternelles avec une œuvre d'art raffinée. Un véritable hymne à la délicatesse qui apportera une touche de lumière et de sérénité à son intérieur. Le cadeau parfait pour honorer la plus merveilleuse des mamans.",
    img: "images/mother2.png", fallbackImg: "images/mother2.png",
    gallery: [
      { src:"images/mother2.png", price:8900 },
      { src:"images/pack24.png", price:8900 },
      { src:"images/mother1.png", price:7000 },
      { src:"images/mother3.png", price:7600 },
      { src:"images/mother4.png", price:7900 },
      { src:"images/mother5.png", price:6700 },
      { src:"images/mother6.png", price:6000 },
      { src:"images/mother7.png", price:4590 },
      { src:"images/mother8.png", price:5000 },
    ],
    variants: ["Floral Oriental", "Boisé Musqué", "Frais Aquatique", "Épicé Ambré", "Rose Oud", "Vanille Bois"]
  },
];

/* ─────────────────────────────────────────────────
   DATA: PACKS
───────────────────────────────────────────────── */
const PACKS = [
  {
    id: '1',
    name: "Pack Romantique ✦",
    tag: "Pour les amoureux",
    desc: "Tout ce qu'il faut pour faire fondre le cœur de votre moitié.",
    img: "images/pack17.png", fallbackImg: "images/pack17.png",
    includes: ["Bouquet roses", "Coffret chocolats belges", "Bougie parfumée", "Emballage satin rouge", "Carte calligraphiée"],
    price: 8900,
    ribbon: "Saint-Valentin",
  },
  {
    id: 'p2',
    name: "Pack Luxe & Prestige ✦",
    tag: "L'ultime cadeau",
    desc: "Pour les occasions exceptionnelles qui méritent l'extraordinaire.",
    img: "images/pack21.png", fallbackImg: "images/pack21.png",
    includes: ["Montre élégance dorée", "Coffret parfum luxe", "Bougie de Grasse", "Boîte aimantée noire/or", "Ruban satin doré"],
    price: 24500,
    ribbon: "Premium"
  },
  {
    id: 'p3',
    name: "Pack Naissance Étoile ✦",
    tag: "Pour la nouvelle arrivée",
    desc: "Un concentré de douceur pour accueillir bébé et réconforter maman.",
    img: "images/pack31.png", fallbackImg: "images/pack31.png",
    includes: ["Coffret naissance complet", "Bougie maman relax", "Tisane bien-être", "Livre naissance", "Emballage kraft naturel"],
    price: 8000,
    ribbon: "Naissance"
  },
  {
    id: 'p4',
    name: "Pack Bien-être Total ✦",
    tag: "Cadeau de soin",
    desc: "Offrez une pause bien méritée avec ce coffret soin haut de gamme.",
    img: "images/pack41.png", fallbackImg: "images/pack41.png",
    includes: ["Coffret spa complet", "Thé relaxation", "Livre mindfulness", "Masque yeux", "Pochon en tissu luxe"],
    price: 9500,
    ribbon: null
  }
];

/* ─────────────────────────────────────────────────
   DATA: CARD MESSAGES
───────────────────────────────────────────────── */
const CARD_MESSAGES = {
  romantique: [
    "Dans les yeux que tu portes, j'ai vu ma maison. Ce cadeau n'est qu'un souffle de ce que je ressens pour toi — une infime partie de l'immense amour que tu mérites chaque jour. À toi, pour toujours.",
    "Il y a des moments dans la vie où les mots s'effacent et laissent place au cœur. Ce cadeau est ce cœur — il t'est entièrement dédié, comme tout le reste de moi.",
    "Tu illumines mes jours sans même le savoir. Aujourd'hui, j'ai voulu t'offrir un peu de cette lumière que tu me donnes si généreusement. Je t'aime plus que tous les mots."
  ],
  poetique: [
    "Les étoiles ont mis un peu de temps à s'aligner, mais ce jour était inscrit dans le ciel depuis longtemps. Que ce cadeau soit le reflet du beau que tu répands autour de toi, comme la lumière d'une aurore.",
    "Il est des âmes qui fleurissent là où elles posent les pieds. Tu es de celles-là. Ce cadeau est une pétale dans le bouquet de tout ce que tu représentes pour moi.",
    "Si les saisons s'enchaînent et que le temps file, il est une chose qui demeure : la gratitude d'avoir quelqu'un comme toi dans ma vie. Ce cadeau en est la preuve, petite mais sincère."
  ],
  drole: [
    "Bon, j'aurais voulu t'offrir la lune, mais la livraison était hors zone. Du coup, j'ai pris ça — et je crois que tu vas quand même sauter de joie ! 🎉 Joyeux [occasion] !",
    "Chercher le cadeau parfait pour toi, c'est comme grimper l'Everest... en tongs. Mais j'ai tenu bon. Parce que tu le vaux (et parce que j'ai peur de tes réactions quand t'es déçu/e 😅)",
    "J'aurais pu t'offrir rien — mais ça fait un peu radin. Alors voilà, c'est pour toi, avec tout mon amour et un léger soulagement d'avoir enfin trouvé !"
  ],
  chaleureux: [
    "Ce cadeau est une façon de te dire merci — merci d'être là, d'être toi, de mettre de la chaleur partout où tu passes. Je suis si heureux/se de t'avoir dans ma vie. Profites-en bien !",
    "Chaque fois que tu utiliseras ce cadeau, j'espère que tu ressentiras un peu de la joie que tu m'apportes au quotidien. Tu mérites tout le bonheur du monde — et encore plus.",
    "Il y a des personnes qui rendent le monde meilleur juste en existant. Tu en fais partie. Ce cadeau, c'est un grand câlin emballé avec soin, rien que pour toi."
  ],
  solennel: [
    "En ce jour particulier, permettez-moi de vous exprimer toute mon admiration et mon affection. Ce cadeau symbolise la considération et le respect profond que je vous porte. Avec toute ma sincérité.",
    "Les grandes occasions méritent des gestes à leur hauteur. Si ce cadeau ne reflète qu'une part infime de l'estime que je vous témoigne, qu'il soit néanmoins le témoin de mon attachement sincère.",
    "Aujourd'hui marque un moment important. Je souhaitais vous offrir quelque chose à la mesure de ce que vous représentez pour moi — un signe tangible de mon respect et de ma gratitude."
  ]
};

/* ─────────────────────────────────────────────────
   STATE
───────────────────────────────────────────────── */
let cart = [];
let wishlist = [];
let currentProduct = null;
let currentQty = 1;
let currentVariant = null;
let currentOccasion = 'all';
let cardMessage = '';
let quizAnswers = {};
let quizStep = 1;
let urgencyInterval = null;

// Index de la slide active dans la galerie modale
let modalGalleryIndex = 0;
let modalGallery = [];

/* ─────────────────────────────────────────────────
   UTILITIES
───────────────────────────────────────────────── */
const fmt = n => n.toLocaleString('fr-DZ') + ' DA';
const $ = id => document.getElementById(id);
const $$ = sel => document.querySelectorAll(sel);

function openOverlay(overlayId, modalId) {
  $(overlayId).classList.add('open');
  $(modalId).classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeOverlay(overlayId, modalId) {
  $(overlayId).classList.remove('open');
  $(modalId).classList.remove('open');
  document.body.style.overflow = '';
}

/* ─────────────────────────────────────────────────
   TOAST NOTIFICATION
───────────────────────────────────────────────── */
let toastTimer = null;
function showToast(msg) {
  const t = $('toast');
  t.textContent = msg;
  t.classList.add('show');
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2800);
}

/* ─────────────────────────────────────────────────
   HEADER SCROLL
───────────────────────────────────────────────── */
window.addEventListener('scroll', () => {
  const header = $('mainHeader');
  if (window.scrollY > 60) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
});

/* ─────────────────────────────────────────────────
   MOBILE NAV
───────────────────────────────────────────────── */
$('menuToggle').addEventListener('click', () => {
  $('mobileNav').classList.add('open');
  $('mobileNavOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
});
$('mobileNavClose').addEventListener('click', closeMobileNav);
$('mobileNavOverlay').addEventListener('click', closeMobileNav);
function closeMobileNav() {
  $('mobileNav').classList.remove('open');
  $('mobileNavOverlay').classList.remove('open');
  document.body.style.overflow = '';
}
$$('.mobile-nav-link').forEach(a => a.addEventListener('click', closeMobileNav));

/* ─────────────────────────────────────────────────
   URGENCY COUNTDOWN
───────────────────────────────────────────────── */
(function initUrgency() {
  let totalSecs = 2 * 3600 + 14 * 60;
  function update() {
    totalSecs--;
    if (totalSecs <= 0) { clearInterval(urgencyInterval); return; }
    const h = Math.floor(totalSecs / 3600);
    const m = Math.floor((totalSecs % 3600) / 60);
    const s = totalSecs % 60;
    const el = $('urgencyTime');
    if (el) el.textContent = h > 0 ? `${h}h${String(m).padStart(2,'0')}min` : `${m}min${String(s).padStart(2,'0')}s`;
  }
  urgencyInterval = setInterval(update, 1000);
})();

/* ─────────────────────────────────────────────────
   FADE-IN OBSERVER
───────────────────────────────────────────────── */
(function initObserver() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  $$('.fade-in-up, .fade-in-right').forEach(el => obs.observe(el));
})();

/* ─────────────────────────────────────────────────
   IMAGE HELPERS
───────────────────────────────────────────────── */
function imgSrc(product) {
  return product.fallbackImg || product.img || 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=500&q=80';
}
function gallerySrc(item) {
  return item.src || item.fallback || '';
}

/* ─────────────────────────────────────────────────
   SEARCH — FULLY FUNCTIONAL
───────────────────────────────────────────────── */
let searchOpen = false;

$('searchToggle').addEventListener('click', () => {
  searchOpen = !searchOpen;
  $('searchBarWrap').classList.toggle('open', searchOpen);
  $('searchOverlay').classList.toggle('open', searchOpen);
  if (searchOpen) setTimeout(() => $('searchInput').focus(), 200);
  else {
    $('searchInput').value = '';
    $('searchResults').innerHTML = '';
  }
});
$('searchOverlay').addEventListener('click', closeSearch);
$('searchClear').addEventListener('click', () => {
  $('searchInput').value = '';
  $('searchResults').innerHTML = '';
  $('searchInput').focus();
});
function closeSearch() {
  searchOpen = false;
  $('searchBarWrap').classList.remove('open');
  $('searchOverlay').classList.remove('open');
  $('searchInput').value = '';
  $('searchResults').innerHTML = '';
}
$('searchInput').addEventListener('input', function() {
  const query = this.value.trim().toLowerCase();
  const resultsEl = $('searchResults');
  if (!query) { resultsEl.innerHTML = ''; return; }
  const matches = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(query) ||
    p.category.toLowerCase().includes(query) ||
    p.occasions.some(o => o.toLowerCase().includes(query)) ||
    (p.description && p.description.toLowerCase().includes(query))
  );
  if (matches.length === 0) {
    resultsEl.innerHTML = `<div class="search-no-result">😔 Aucun résultat pour "<strong>${query}</strong>"</div>`;
    return;
  }
  resultsEl.innerHTML = '';
  matches.slice(0, 8).forEach(p => {
    const item = document.createElement('div');
    item.className = 'search-result-item';
    item.innerHTML = `
      <img src="${imgSrc(p)}" alt="${p.name}" onerror="this.src='${p.fallbackImg}'" />
      <div>
        <div class="search-result-name">${p.name}</div>
        <div class="search-result-price">${fmt(p.price)}</div>
      </div>
    `;
    item.addEventListener('click', () => { closeSearch(); openProductModal(p); });
    resultsEl.appendChild(item);
  });
});

/* ─────────────────────────────────────────────────
   WISHLIST
───────────────────────────────────────────────── */
$('wishlistToggle').addEventListener('click', openWishlistPanel);
$('wishlistClose').addEventListener('click', closeWishlistPanel);
$('wishlistOverlay').addEventListener('click', closeWishlistPanel);

function openWishlistPanel() {
  $('wishlistOverlay').classList.add('open');
  $('wishlistPanel').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeWishlistPanel() {
  $('wishlistOverlay').classList.remove('open');
  $('wishlistPanel').classList.remove('open');
  document.body.style.overflow = '';
}
function toggleWishlist(product, btnEl) {
  const idx = wishlist.findIndex(w => w.id === product.id);
  if (idx === -1) {
    wishlist.push(product);
    if (btnEl) btnEl.classList.add('active');
    showToast(`❤️ ${product.name} ajouté aux favoris`);
  } else {
    wishlist.splice(idx, 1);
    if (btnEl) btnEl.classList.remove('active');
    showToast(`💔 ${product.name} retiré des favoris`);
  }
  updateWishlistCount();
  renderWishlistPanel();
  syncWishlistButtons();
}
function syncWishlistButtons() {
  $$('.product-wishlist-btn').forEach(btn => {
    const pid = parseInt(btn.dataset.id);
    btn.classList.toggle('active', wishlist.some(w => w.id === pid));
  });
  const wishlistBtn = $('wishlistToggle');
  if (wishlist.length > 0) wishlistBtn.classList.add('active');
  else wishlistBtn.classList.remove('active');
}
function updateWishlistCount() {
  const el = $('wishlistCount');
  el.textContent = wishlist.length;
  el.classList.toggle('visible', wishlist.length > 0);
}
function renderWishlistPanel() {
  const itemsEl = $('wishlistItems');
  const empty = $('wishlistEmpty');
  if (wishlist.length === 0) {
    empty.style.display = 'flex';
    Array.from(itemsEl.children).forEach(c => { if (c !== empty) c.remove(); });
    return;
  }
  empty.style.display = 'none';
  Array.from(itemsEl.children).forEach(c => { if (c !== empty) c.remove(); });
  wishlist.forEach(p => {
    const el = document.createElement('div');
    el.className = 'wishlist-item';
    el.innerHTML = `
      <img src="${imgSrc(p)}" alt="${p.name}" onerror="this.src='${p.fallbackImg}'" />
      <div>
        <div class="wishlist-item-name">${p.name}</div>
        <div class="wishlist-item-price">${fmt(p.price)}</div>
      </div>
      <div class="wishlist-item-actions">
        <button class="wishlist-add-cart" data-id="${p.id}">🛒 Ajouter</button>
        <button class="wishlist-remove" data-id="${p.id}">✕</button>
      </div>
    `;
    el.querySelector('.wishlist-add-cart').addEventListener('click', () => {
      addToCart(p, 1, null);
      showToast(`🛍️ ${p.name} ajouté au panier`);
    });
    el.querySelector('.wishlist-remove').addEventListener('click', () => toggleWishlist(p, null));
    el.querySelector('img').addEventListener('click', () => { closeWishlistPanel(); openProductModal(p); });
    itemsEl.appendChild(el);
  });
}

/* ─────────────────────────────────────────────────
   RENDER PRODUCTS
───────────────────────────────────────────────── */
function renderProducts(occasion = 'all') {
  const grid = $('productsGrid');
  const filtered = occasion === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.occasions.includes(occasion));
  grid.innerHTML = '';
  filtered.forEach((p, i) => {
    const isWishlisted = wishlist.some(w => w.id === p.id);
    const card = document.createElement('div');
    card.className = 'product-card';
    card.style.animationDelay = `${i * 0.05}s`;
    card.innerHTML = `
      <div class="product-img-wrap">
        <img src="${imgSrc(p)}" alt="${p.name}" loading="lazy" onerror="this.src='${p.fallbackImg}'" />
        ${p.badge ? `<span class="product-badge ${p.badge === 'Premium' ? 'gold-badge' : ''}">${p.badge}</span>` : ''}
        <button class="product-wishlist-btn ${isWishlisted ? 'active' : ''}" data-id="${p.id}" aria-label="Ajouter aux favoris">♡</button>
        <button class="product-quick-add" data-id="${p.id}">+ Ajouter au panier</button>
      </div>
      <div class="product-info">
        <div class="product-occasion-tag">${p.occasions.slice(0,2).map(o => o.charAt(0).toUpperCase()+o.slice(1)).join(' · ')}</div>
        <h3 class="product-name">${p.name}</h3>
        <div class="product-rating">${'★'.repeat(Math.floor(p.rating))} <span style="color:var(--mid-gray);font-size:.8rem;">(${p.reviews})</span></div>
        <div class="product-price">
          ${fmt(p.price)}
          ${p.originalPrice ? `<span class="original-price">${fmt(p.originalPrice)}</span>` : ''}
        </div>
      </div>
    `;
    card.querySelector('.product-wishlist-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      toggleWishlist(p, e.currentTarget);
    });
    card.querySelector('.product-quick-add').addEventListener('click', (e) => {
      e.stopPropagation();
      addToCart(p, 1, null);
      showToast(`🛍️ ${p.name} ajouté au panier`);
      openCart();
    });
    card.addEventListener('click', (e) => {
      if (!e.target.closest('.product-quick-add') && !e.target.closest('.product-wishlist-btn')) {
        openProductModal(p);
      }
    });
    grid.appendChild(card);
  });

  const titleEl = $('productsTitle');
  if (occasion === 'all') titleEl.textContent = 'Nos Meilleures Ventes';
  else {
    const names = {
      anniversaire:'Anniversaire', mariage:'Mariage', 'saint-valentin':'Saint-Valentin',
      naissance:'Naissance', 'fete-des-meres':'Fête des Mères', ramadan:'Ramadan',
      reussite:'Réussite', noel:'Noël'
    };
    titleEl.textContent = `Cadeaux pour ${names[occasion] || occasion}`;
  }
  $$('.fade-in-up').forEach(el => {
    el.classList.remove('visible');
    setTimeout(() => el.classList.add('visible'), 50);
  });
}

/* ─────────────────────────────────────────────────
   RENDER PACKS
───────────────────────────────────────────────── */
function renderPacks() {
  const grid = $('packsGrid');
  PACKS.forEach(pack => {
    const card = document.createElement('div');
    card.className = 'pack-card';
    card.innerHTML = `
      ${pack.ribbon ? `<span class="pack-ribbon">${pack.ribbon}</span>` : ''}
      <img src="${pack.fallbackImg}" alt="${pack.name}" class="pack-img" onerror="this.src='${pack.fallbackImg}'" loading="lazy" />
      <div class="pack-body">
        <div class="pack-tag">✦ ${pack.tag}</div>
        <h3 class="pack-name">${pack.name}</h3>
        <p class="pack-desc">${pack.desc}</p>
        <ul class="pack-includes">
          ${pack.includes.map(i => `<li>${i}</li>`).join('')}
        </ul>
        <div class="pack-price-row">
          <span class="pack-price">${fmt(pack.price)}</span>
          <button class="btn-primary" data-pack-id="${pack.id}">Offrir ce pack ✦</button>
        </div>
      </div>
    `;
    card.querySelector('.btn-primary').addEventListener('click', () => addPackToCart(pack));
    grid.appendChild(card);
  });
}
function addPackToCart(pack) {
  const item = {
    id: 'pack_' + pack.id,
    name: pack.name,
    variant: pack.tag,
    price: pack.price,
    img: pack.fallbackImg,
    qty: 1
  };
  addCartItem(item);
  showToast(`🎁 ${pack.name} ajouté au panier`);
  openCart();
}

/* ─────────────────────────────────────────────────
   OCCASIONS
───────────────────────────────────────────────── */
$$('.occasion-card').forEach(btn => {
  btn.addEventListener('click', () => {
    $$('.occasion-card').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentOccasion = btn.dataset.occasion;
    renderProducts(currentOccasion);
    const section = $('bestsellers');
    if (section) section.scrollIntoView({ behavior:'smooth', block:'start' });
  });
});

/* ─────────────────────────────────────────────────
   PRODUCT MODAL — GALERIE SANS THUMBNAILS
   Navigation uniquement via les flèches < >
───────────────────────────────────────────────── */
function openProductModal(product) {
  currentProduct = product;
  currentQty = 1;
  currentVariant = product.variants ? product.variants[0] : null;
  modalGalleryIndex = 0;
  modalGallery = product.gallery || [{ src: product.fallbackImg || product.img }];

  $('modalTag').textContent = product.occasions.map(o => o.charAt(0).toUpperCase()+o.slice(1)).join(' · ');
  $('modalTitle').textContent = product.name;
  $('modalPrice').textContent = fmt(product.price);
  $('modalDesc').textContent = product.description;
  $('qtyValue').textContent = '1';
  $('modalStars').innerHTML = `${'★'.repeat(Math.floor(product.rating))} <span>(${product.reviews} avis)</span>`;

  // Wishlist btn
  const wBtn = $('modalWishlistBtn');
  const isWL = wishlist.some(w => w.id === product.id);
  wBtn.classList.toggle('active', isWL);
  wBtn.textContent = isWL ? '❤️ Dans vos favoris' : '♡ Ajouter aux favoris';

  // Afficher la première image
  updateModalImage(0);

  // Flèches : toujours visibles si galerie > 1
  const prevBtn = $('modalPrevBtn');
  const nextBtn = $('modalNextBtn');
  if (modalGallery.length <= 1) {
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
  } else {
    prevBtn.style.display = 'flex';
    nextBtn.style.display = 'flex';
  }

  // Variants
  const varWrap = $('modalVariants');
  varWrap.innerHTML = '';
  if (product.variants && product.variants.length) {
    product.variants.forEach((v, i) => {
      const btn = document.createElement('button');
      btn.className = 'variant-btn' + (i === 0 ? ' active' : '');
      btn.textContent = v;
      btn.addEventListener('click', () => {
        $$('.variant-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentVariant = v;
      });
      varWrap.appendChild(btn);
    });
  }

  openOverlay('productModalOverlay', 'productModal');
}

/* Met à jour l'image principale selon l'index */
function updateModalImage(index) {
  if (!modalGallery.length) return;
  // Boucle circulaire
  if (index >= modalGallery.length) index = 0;
  if (index < 0) index = modalGallery.length - 1;
  modalGalleryIndex = index;

  const g = modalGallery[modalGalleryIndex];
  const mainImg = $('modalMainImg');
  mainImg.src = gallerySrc(g);
  mainImg.alt = (currentProduct && currentProduct.name) || '';

  // Mettre à jour prix si défini dans la slide
  if (g.price !== undefined) {
    $('modalPrice').textContent = fmt(g.price);
    currentProduct = { ...currentProduct, price: g.price };
  } else if (currentProduct) {
    $('modalPrice').textContent = fmt(currentProduct.price);
  }
  // Mettre à jour description si définie dans la slide
  if (g.description !== undefined) {
    $('modalDesc').textContent = g.description;
  } else if (currentProduct) {
    $('modalDesc').textContent = currentProduct.description;
  }
}

// Attacher les événements flèches une seule fois
$('modalPrevBtn').addEventListener('click', (e) => {
  e.stopPropagation();
  updateModalImage(modalGalleryIndex - 1);
});
$('modalNextBtn').addEventListener('click', (e) => {
  e.stopPropagation();
  updateModalImage(modalGalleryIndex + 1);
});

$('modalClose').addEventListener('click', () => closeOverlay('productModalOverlay', 'productModal'));
$('productModalOverlay').addEventListener('click', () => closeOverlay('productModalOverlay', 'productModal'));

$('qtyMinus').addEventListener('click', () => {
  if (currentQty > 1) { currentQty--; $('qtyValue').textContent = currentQty; }
});
$('qtyPlus').addEventListener('click', () => {
  currentQty++;
  $('qtyValue').textContent = currentQty;
});

$('modalAddToCart').addEventListener('click', () => {
  if (!currentProduct) return;
  addToCart(currentProduct, currentQty, currentVariant);
  showToast(`🛍️ ${currentProduct.name} ajouté au panier`);
  closeOverlay('productModalOverlay', 'productModal');
  openCart();
  showUpsell(currentProduct);
});

$('modalWishlistBtn').addEventListener('click', () => {
  if (!currentProduct) return;
  const wBtn = $('modalWishlistBtn');
  toggleWishlist(currentProduct, null);
  const isWL = wishlist.some(w => w.id === currentProduct.id);
  wBtn.classList.toggle('active', isWL);
  wBtn.textContent = isWL ? '❤️ Dans vos favoris' : '♡ Ajouter aux favoris';
});

$('zoomBtn').addEventListener('click', () => {
  const src = $('modalMainImg').src;
  $('lightboxImg').src = src;
  $('lightbox').classList.add('open');
});
$('lightboxClose').addEventListener('click', () => $('lightbox').classList.remove('open'));
$('lightbox').addEventListener('click', (e) => {
  if (e.target === $('lightbox')) $('lightbox').classList.remove('open');
});

/* ─────────────────────────────────────────────────
   CART — CORRECTION COMPLÈTE
   Le bouton Commander est TOUJOURS visible
   Les articles s'affichent correctement
───────────────────────────────────────────────── */
function addToCart(product, qty = 1, variant = null) {
  const itemId = `${product.id}_${variant || 'default'}`;
  const existing = cart.find(i => i.id === itemId);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({
      id: itemId,
      productId: product.id,
      name: product.name,
      variant: variant || (product.variants ? product.variants[0] : null),
      price: product.price,
      img: product.fallbackImg || imgSrc(product),
      qty
    });
  }
  updateCartUI();
  updateCartCount();
}

function addCartItem(item) {
  const existing = cart.find(i => i.id === item.id);
  if (existing) existing.qty += item.qty;
  else cart.push(item);
  updateCartUI();
  updateCartCount();
}

function removeFromCart(itemId) {
  cart = cart.filter(i => i.id !== itemId);
  updateCartUI();
  updateCartCount();
}

function updateItemQty(itemId, delta) {
  const item = cart.find(i => i.id === itemId);
  if (item) {
    item.qty = Math.max(1, item.qty + delta);
    updateCartUI();
    updateCartCount();
  }
}

function updateCartCount() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  const el = $('cartCount');
  el.textContent = total;
  el.classList.toggle('visible', total > 0);
}

function getCartTotal() {
  return cart.reduce((s, i) => s + i.price * i.qty, 0);
}

function updateCartUI() {
  const itemsEl = $('cartItems');
  const empty = $('cartEmpty');
  const delivery = $('cartDelivery');
  const upsell = $('cartUpsell');
  // cartFooter est TOUJOURS visible (pas de display:none)

  if (cart.length === 0) {
    empty.style.display = 'flex';
    delivery.style.display = 'none';
    upsell.style.display = 'none';
    // Supprimer les items précédents
    Array.from(itemsEl.children).forEach(c => { if (c !== empty) c.remove(); });
    // Mettre total à 0
    $('cartTotalAmount').textContent = '0 DA';
    return;
  }

  // Panier non vide
  empty.style.display = 'none';
  delivery.style.display = 'block';

  // Supprimer les anciens items (garder seulement empty)
  Array.from(itemsEl.children).forEach(c => { if (c !== empty) c.remove(); });

  // Ajouter chaque article
  cart.forEach(item => {
    const el = document.createElement('div');
    el.className = 'cart-item';
    el.innerHTML = `
      <img
        src="${item.img}"
        alt="${item.name}"
        class="cart-item-img"
        onerror="this.src='https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=200&q=80'"
      />
      <div class="cart-item-details">
        <div class="cart-item-name">${item.name}</div>
        ${item.variant ? `<div class="cart-item-variant">${item.variant}</div>` : ''}
        <div class="cart-item-qty">
          <button class="ciqty-btn" data-id="${item.id}" data-delta="-1">−</button>
          <span class="ciqty-val">${item.qty}</span>
          <button class="ciqty-btn" data-id="${item.id}" data-delta="1">+</button>
        </div>
      </div>
      <div class="cart-item-right">
        <div class="cart-item-price">${fmt(item.price * item.qty)}</div>
        <button class="cart-item-remove" data-id="${item.id}">✕</button>
      </div>
    `;
    el.querySelectorAll('.ciqty-btn').forEach(btn => {
      btn.addEventListener('click', () => updateItemQty(btn.dataset.id, parseInt(btn.dataset.delta)));
    });
    el.querySelector('.cart-item-remove').addEventListener('click', () => removeFromCart(item.id));
    itemsEl.appendChild(el);
  });

  // Mettre à jour le total
  $('cartTotalAmount').textContent = fmt(getCartTotal());
}

function openCart() {
  $('cartOverlay').classList.add('open');
  $('cartPanel').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  $('cartOverlay').classList.remove('open');
  $('cartPanel').classList.remove('open');
  document.body.style.overflow = '';
}

$('cartToggle').addEventListener('click', openCart);
$('cartClose').addEventListener('click', closeCart);
$('cartOverlay').addEventListener('click', closeCart);

$('sendToRecipient').addEventListener('change', (e) => {
  $('recipientAddress').style.display = e.target.checked ? 'flex' : 'none';
});

/* ─────────────────────────────────────────────────
   UPSELL
───────────────────────────────────────────────── */
function showUpsell(mainProduct) {
  const related = PRODUCTS
    .filter(p => p.id !== mainProduct.id && p.occasions.some(o => mainProduct.occasions.includes(o)))
    .slice(0, 4);
  if (related.length === 0) return;
  const upsellEl = $('cartUpsell');
  const upsellGrid = $('upsellProducts');
  upsellGrid.innerHTML = '';
  related.forEach(p => {
    const card = document.createElement('div');
    card.className = 'upsell-card';
    card.innerHTML = `
      <img src="${imgSrc(p)}" alt="${p.name}" onerror="this.src='${p.fallbackImg}'" />
      <div class="upsell-card-body">
        <div class="upsell-card-name">${p.name}</div>
        <div class="upsell-card-price">+${fmt(p.price)}</div>
      </div>
    `;
    card.addEventListener('click', () => {
      addToCart(p, 1, null);
      showToast(`✨ ${p.name} ajouté au panier`);
      upsellEl.style.display = 'none';
    });
    upsellGrid.appendChild(card);
  });
  upsellEl.style.display = 'block';
}

/* ─────────────────────────────────────────────────
   CHECKOUT
───────────────────────────────────────────────── */
$('checkoutBtn').addEventListener('click', () => {
  closeCart();
  openCardGenerator();
});

function openCheckout() {
  const itemsEl = $('checkoutItems');
  itemsEl.innerHTML = '';
  cart.forEach(item => {
    const el = document.createElement('div');
    el.className = 'checkout-item';
    el.innerHTML = `
      <img src="${item.img}" alt="${item.name}" onerror="this.src='https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=100&q=80'" />
      <div class="checkout-item-name">${item.name}${item.variant ? ` <small style="color:var(--mid-gray)">· ${item.variant}</small>` : ''} × ${item.qty}</div>
      <div class="checkout-item-price">${fmt(item.price * item.qty)}</div>
    `;
    itemsEl.appendChild(el);
  });
  const subtotal = getCartTotal();
  $('checkoutSubtotal').textContent = fmt(subtotal);
  $('checkoutTotal').textContent = fmt(subtotal + 600);
  if (cardMessage) {
    $('checkoutCardSummary').style.display = 'block';
    $('checkoutCardText').textContent = cardMessage;
  } else {
    $('checkoutCardSummary').style.display = 'none';
  }
  openOverlay('checkoutOverlay', 'checkoutModal');
}

$('checkoutClose').addEventListener('click', () => closeOverlay('checkoutOverlay', 'checkoutModal'));
$('checkoutOverlay').addEventListener('click', () => closeOverlay('checkoutOverlay', 'checkoutModal'));

$('birthdayReminderCheck').addEventListener('change', (e) => {
  $('birthdayDates').style.display = e.target.checked ? 'block' : 'none';
});

$$('[name="delivery"]').forEach(radio => {
  radio.addEventListener('change', () => {
    const map = { standard:600, express:500, relay:1200 };
    const deliveryCost = map[radio.value] || 600;
    const subtotal = getCartTotal();
    const free = subtotal >= 5000 && radio.value === 'standard';
    $('checkoutDelivery').textContent = free ? 'Gratuit ✦' : fmt(deliveryCost);
    $('checkoutTotal').textContent = fmt(subtotal + (free ? 0 : deliveryCost));
  });
});

/* ─────────────────────────────────────────────────
   VALIDATION FORMULAIRE — Email & Téléphone
───────────────────────────────────────────────── */
function validateEmail(email) {
  // Regex standard email
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
}

function validatePhone(phone) {
  // Numéro algérien : 10 chiffres commençant par 0
  // Accepte aussi les formats avec espaces ou tirets ex: 055 123 45 67
  const cleaned = phone.replace(/[\s\-\.]/g, '');
  return /^0[5-7]\d{8}$/.test(cleaned) || /^0[1-9]\d{8}$/.test(cleaned);
}

function showFieldError(fieldId, errorId, show) {
  const field = $(fieldId);
  const error = $(errorId);
  if (show) {
    field.classList.add('input-error');
    error.style.display = 'block';
  } else {
    field.classList.remove('input-error');
    error.style.display = 'none';
  }
}

// Validation en temps réel
$('checkoutEmail').addEventListener('blur', function() {
  if (this.value.trim() !== '') {
    showFieldError('checkoutEmail', 'emailError', !validateEmail(this.value));
  }
});
$('checkoutEmail').addEventListener('input', function() {
  if (this.classList.contains('input-error') && validateEmail(this.value)) {
    showFieldError('checkoutEmail', 'emailError', false);
  }
});
$('checkoutTel').addEventListener('blur', function() {
  if (this.value.trim() !== '') {
    showFieldError('checkoutTel', 'telError', !validatePhone(this.value));
  }
});
$('checkoutTel').addEventListener('input', function() {
  if (this.classList.contains('input-error') && validatePhone(this.value)) {
    showFieldError('checkoutTel', 'telError', false);
  }
});

/* Bouton Confirmer avec validation obligatoire */
$('placeOrderBtn').addEventListener('click', () => {
  const prenom    = $('checkoutPrenom').value.trim();
  const nom       = $('checkoutNom').value.trim();
  const email     = $('checkoutEmail').value.trim();
  const tel       = $('checkoutTel').value.trim();
  const adresse   = $('checkoutAdresse').value.trim();
  const ville     = $('checkoutVille').value.trim();
  const wilaya    = $('checkoutWilaya').value;

  let valid = true;

  // Validation email
  if (!email || !validateEmail(email)) {
    showFieldError('checkoutEmail', 'emailError', true);
    valid = false;
  } else {
    showFieldError('checkoutEmail', 'emailError', false);
  }

  // Validation téléphone
  if (!tel || !validatePhone(tel)) {
    showFieldError('checkoutTel', 'telError', true);
    valid = false;
  } else {
    showFieldError('checkoutTel', 'telError', false);
  }

  // Champs obligatoires basiques
  if (!prenom || !nom || !adresse || !ville || !wilaya) {
    showToast('⚠️ Veuillez remplir tous les champs obligatoires (*)');
    valid = false;
  }

  if (!valid) {
    // Scroll vers le premier champ en erreur
    const firstError = document.querySelector('.input-error, .field-error[style="display: block;"]');
    if (firstError) firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }

  // Tout est valide — confirmer la commande
  closeOverlay('checkoutOverlay', 'checkoutModal');
  cart = [];
  updateCartUI();
  updateCartCount();
  cardMessage = '';
  openOverlay('successOverlay', 'successModal');
});

$('successClose').addEventListener('click', () => closeOverlay('successOverlay', 'successModal'));

/* ─────────────────────────────────────────────────
   CARD GENERATOR
───────────────────────────────────────────────── */
let selectedTone = 'romantique';

function openCardGenerator() {
  openOverlay('cardGenOverlay', 'cardGenModal');
  $('generatedCard').style.display = 'none';
  $('cardPreview').textContent = '';
}
$('cardGenClose').addEventListener('click', () => closeOverlay('cardGenOverlay', 'cardGenModal'));
$('cardGenOverlay').addEventListener('click', () => closeOverlay('cardGenOverlay', 'cardGenModal'));

$('cardModeAuto').addEventListener('click', () => {
  $('cardModeAuto').classList.add('active');
  $('cardModeManual').classList.remove('active');
  $('cardAutoMode').style.display = 'block';
  $('cardManualMode').style.display = 'none';
});
$('cardModeManual').addEventListener('click', () => {
  $('cardModeManual').classList.add('active');
  $('cardModeAuto').classList.remove('active');
  $('cardManualMode').style.display = 'block';
  $('cardAutoMode').style.display = 'none';
});

$$('.tone-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    $$('.tone-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedTone = btn.dataset.tone;
  });
});

$('generateCardBtn').addEventListener('click', () => {
  const msgs = CARD_MESSAGES[selectedTone];
  const msg = msgs[Math.floor(Math.random() * msgs.length)];
  $('cardPreview').textContent = msg;
  $('generatedCard').style.display = 'block';
  cardMessage = msg;
});

$('regenerateBtn').addEventListener('click', () => {
  const msgs = CARD_MESSAGES[selectedTone];
  let msg;
  do { msg = msgs[Math.floor(Math.random() * msgs.length)]; }
  while (msg === $('cardPreview').textContent && msgs.length > 1);
  $('cardPreview').textContent = msg;
  cardMessage = msg;
});

$('saveCardBtn').addEventListener('click', () => {
  if ($('cardModeManual').classList.contains('active')) {
    cardMessage = $('cardTextarea').value.trim();
  }
  closeOverlay('cardGenOverlay', 'cardGenModal');
  openCheckout();
});
$('skipCardBtn').addEventListener('click', () => {
  cardMessage = '';
  closeOverlay('cardGenOverlay', 'cardGenModal');
  openCheckout();
});

/* ─────────────────────────────────────────────────
   QUIZ
───────────────────────────────────────────────── */
function goToQuizStep(step) {
  $$('.quiz-step').forEach(el => el.classList.remove('active'));
  const stepId = step === 'results' ? 'quizResults' : `quizStep${step}`;
  $(stepId).classList.add('active');
  $$('.quiz-prog-dot').forEach(dot => {
    dot.classList.toggle('active', parseInt(dot.dataset.step) <= step);
  });
  quizStep = step;
}
$$('.quiz-opt').forEach(btn => {
  btn.addEventListener('click', () => {
    const key = btn.dataset.key;
    const val = btn.dataset.val;
    quizAnswers[key] = val;
    btn.closest('.quiz-options').querySelectorAll('.quiz-opt').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    setTimeout(() => {
      if (key === 'who') goToQuizStep(2);
      else if (key === 'occasion') goToQuizStep(3);
      else if (key === 'budget') showQuizResults();
    }, 300);
  });
});

function showQuizResults() {
  const { who, occasion, budget } = quizAnswers;
  const budgetMap = { low:[0,3000], mid:[2999,8001], high:[7999,20001], luxury:[19999,Infinity] };
  const [minB, maxB] = budgetMap[budget] || [0, Infinity];
  let filtered = PRODUCTS.filter(p => {
    const inOcc = !occasion || p.occasions.includes(occasion);
    const inBudget = p.price >= minB && p.price <= maxB;
    return inOcc && inBudget;
  });
  if (who === 'homme') {
    const cats = ['Montres','High-Tech','Livres','Gourmandises'];
    const f = filtered.filter(p => cats.includes(p.category));
    if (f.length >= 4) filtered = f;
  } else if (who === 'femme') {
    const cats = ['Bijoux','Parfums','Beauté','Fleurs','Accessoires','Vêtements'];
    const f = filtered.filter(p => cats.includes(p.category));
    if (f.length >= 4) filtered = f;
  } else if (who === 'enfant') {
    const cats = ['Jouets','Bébé','Livres','Gourmandises'];
    const f = filtered.filter(p => cats.includes(p.category));
    if (f.length >= 2) filtered = f;
  }
  if (filtered.length < 4) {
    const extras = PRODUCTS.filter(p => !filtered.includes(p));
    filtered = [...filtered, ...extras].slice(0, 4);
  }
  const results = filtered.slice(0, 4);
  const grid = $('quizResultsGrid');
  grid.innerHTML = '';
  results.forEach(p => {
    const card = document.createElement('div');
    card.className = 'quiz-result-card';
    card.innerHTML = `
      <img src="${imgSrc(p)}" alt="${p.name}" onerror="this.src='${p.fallbackImg}'" loading="lazy" />
      <div class="qrc-body">
        <div class="qrc-name">${p.name}</div>
        <div class="qrc-price">${fmt(p.price)}</div>
      </div>
    `;
    card.addEventListener('click', () => openProductModal(p));
    grid.appendChild(card);
  });
  goToQuizStep('results');
}

$('quizRestart').addEventListener('click', () => {
  quizAnswers = {};
  quizStep = 1;
  $$('.quiz-opt').forEach(b => b.classList.remove('selected'));
  goToQuizStep(1);
  $$('.quiz-prog-dot').forEach((dot, i) => dot.classList.toggle('active', i === 0));
});

/* ─────────────────────────────────────────────────
   LOAD MORE
───────────────────────────────────────────────── */
$('loadMoreBtn').addEventListener('click', () => {
  $('quiz').scrollIntoView({ behavior:'smooth' });
  $('loadMoreBtn').textContent = 'Découvrir le Quiz Cadeau ✦';
});

/* ─────────────────────────────────────────────────
   RETURN POLICY LINK
───────────────────────────────────────────────── */
$('returnPolicyLink').addEventListener('click', (e) => {
  e.preventDefault();
  openOverlay('returnOverlay', 'returnModal');
});
$('returnClose').addEventListener('click', () => closeOverlay('returnOverlay', 'returnModal'));
$('returnOverlay').addEventListener('click', () => closeOverlay('returnOverlay', 'returnModal'));

/* ─────────────────────────────────────────────────
   SMOOTH SCROLL
───────────────────────────────────────────────── */
$$('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior:'smooth', block:'start' });
    }
  });
});

/* ─────────────────────────────────────────────────
   ESC KEY
───────────────────────────────────────────────── */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeCart();
    closeWishlistPanel();
    closeSearch();
    closeOverlay('productModalOverlay', 'productModal');
    closeOverlay('cardGenOverlay', 'cardGenModal');
    closeOverlay('checkoutOverlay', 'checkoutModal');
    closeOverlay('successOverlay', 'successModal');
    closeOverlay('returnOverlay', 'returnModal');
    $('lightbox').classList.remove('open');
    closeMobileNav();
    document.body.style.overflow = '';
  }
});

/* ─────────────────────────────────────────────────
   INIT
───────────────────────────────────────────────── */
(function init() {
  renderProducts('all');
  renderPacks();
  updateCartUI();
  updateWishlistCount();
  setTimeout(() => {
    $$('.fade-in-up, .fade-in-right').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) el.classList.add('visible');
    });
  }, 100);
})();