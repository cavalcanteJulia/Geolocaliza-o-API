const map = L.map('leafletMap').setView([31.9686, -99.9018], 6);

L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
}).addTo(map);

const locais = [
  {
    nome: "The Alamo",
    cidade: "San Antonio",
    coords: [29.425967, -98.486142],
    imagem: "alamo.jpg"
  },
  {
    nome: "Cadillac Ranch",
    cidade: "Amarillo",
    coords: [35.1872, -101.9876],
    imagem: "cadillac.jpg"
  },
  {
    nome: "Natural Bridge Caverns",
    cidade: "San Antonio",
    coords: [29.6976, -98.1172],
    imagem: "naturalbridgecaverns.jpg"
  },
  {
    nome: "San Antonio River Walk",
    cidade: "San Antonio",
    coords: [29.4252, -98.4916],
    imagem: "riverwalk.jpg"
  },
  {
    nome: "Houston Zoo",
    cidade: "Houston",
    coords: [29.7114, -95.3909],
    imagem: "houstonzoo.jpg"
  }
];

const marcadores = {};

locais.forEach(local => {
  const popup = `<b>${local.nome}</b><br>${local.cidade}<br><img src="${local.imagem}" width="200px">`;
  const marker = L.marker(local.coords).addTo(map).bindPopup(popup);
  marcadores[local.nome] = marker;
});

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    const nome = card.getAttribute('data-local');
    const marker = marcadores[nome];
    if (marker) {
      map.setView(marker.getLatLng(), 13, { animate: true });
      marker.openPopup();
      document.getElementById('leafletMap').scrollIntoView({ behavior: 'smooth' });
    }
  });
});
