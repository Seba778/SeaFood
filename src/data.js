// Contenido del sitio. Fuente: menús impresos por sucursal (source/menu/*.png),
// Linktree de ubicaciones y redes sociales oficiales.
// Si cambia un precio, se edita aquí.

export const SOCIAL = {
  facebook: 'https://www.facebook.com/SeafoodShackTx/',
  instagram: 'https://www.instagram.com/seafoodshackdallas/',
  tiktok: 'https://www.tiktok.com/@seafoodshackdfw',
};

// Mismo horario en las 3 sucursales (pie del menú impreso).
// day: 0 = domingo … 6 = sábado. Horas en formato 24h, hora de Texas (America/Chicago).
export const HOURS = [
  { days: [1, 2, 3, 4], label: { en: 'Mon – Thu', es: 'Lun – Jue' }, open: '11:00', close: '22:00' },
  { days: [5], label: { en: 'Friday', es: 'Viernes' }, open: '11:00', close: '23:00' },
  { days: [6], label: { en: 'Saturday', es: 'Sábado' }, open: '10:30', close: '23:00' },
  { days: [0], label: { en: 'Sunday', es: 'Domingo' }, open: '10:30', close: '22:00' },
];

export const LOCATIONS = [
  {
    id: 'northwest',
    name: 'Northwest Hwy',
    city: 'Dallas',
    street: '3701 W Northwest Hwy, Ste 195',
    cityLine: 'Dallas, TX 75220',
    phones: ['(214) 351-2000', '(214) 351-2016'],
    maps: 'https://maps.app.goo.gl/8ZpmyGKNZ6V9kySaA',
    geo: [32.8611918, -96.8564937],
    menuImages: ['northwest-a', 'northwest-b'],
  },
  {
    id: 'webb-chapel',
    name: 'Webb Chapel',
    city: 'Dallas',
    street: '11625 Webb Chapel Rd',
    cityLine: 'Dallas, TX 75229',
    phones: ['(972) 406-0890', '(972) 406-0421'],
    maps: 'https://maps.app.goo.gl/mtCzdVoB532UW9Vk7',
    geo: [32.9077439, -96.872777],
    menuImages: ['webb-chapel-a', 'webb-chapel-b'],
  },
  {
    id: 'mesquite',
    name: 'Mesquite',
    city: 'Mesquite',
    street: '2103 N Town East Blvd',
    cityLine: 'Mesquite, TX 75150',
    phones: ['(469) 567-3912', '(469) 567-3898'],
    maps: 'https://maps.app.goo.gl/xMNu6F4nftKtVB8p8',
    geo: [32.8117602, -96.6331629],
    menuImages: ['mesquite-a', 'mesquite-b'],
  },
];

export const SPECIALS = [
  {
    day: { en: 'Rita Mondays', es: 'Lunes de Margarita' },
    color: 'teal',
    items: [
      ['Margaritas all day', '6.00'],
      ['Ceviche Tostada (1)', '5.00'],
      ['Shrimp Tostada (1)', '5.50'],
    ],
  },
  {
    day: { en: 'Taco Tuesday', es: 'Martes de Tacos' },
    color: 'blue',
    items: [['“All Day” Fish Tacos — sautéed or fried', '3.99']],
  },
  {
    day: { en: 'Tequila & Boiling Wednesdays', es: 'Miércoles de Tequila y Boiling' },
    color: 'yellow',
    items: [
      ['1 LB Shrimp', null],
      ['1 LB Crablegs', null],
      ['“All Day” Tequila Shots — selected tequilas', '6.50'],
    ],
  },
];

// Platillos destacados: solo fotos con fondo (Drive del cliente); nada de recortes con fondo blanco.
export const FAVORITES = [
  { img: 'boil-camaron', name: 'Shack Boiling Pot · 1 LB Shrimp', price: 'Market', note: { en: 'Spicy shrimp boil with corn and potatoes', es: 'Camarón picante con elote y papa' } },
  { img: 'boil-cangrejo', name: 'Shack Boiling Pot · 1 LB Crablegs', price: 'Market', note: { en: 'Crab legs in our spicy boil sauce, with corn', es: 'Patas de cangrejo en salsa boiling picante, con elote' } },
  { img: 'sams-cajun', name: 'Sam’s Cajun', price: '19.99', note: { en: 'Fish, shrimp & octopus in a creamy cajun sauce', es: 'Pescado, camarón y pulpo en salsa cajún cremosa' } },
  { img: 'caldo-mariscos', name: 'Caldo de Mariscos', price: '15.99+', note: { en: 'Shrimp, fish & octopus soup', es: 'Caldo de camarón, pescado y pulpo' } },
  { img: 'tilapia-mexicana', name: 'Tilapia a la Mexicana', price: '18.99', note: { en: 'Tilapia in ranchero sauce with rice & veggies', es: 'Tilapia en salsa ranchera con arroz y verduras' } },
  { img: 'calamari', name: 'Fried Calamari with Jalapeños', price: '13.99', note: { en: 'Crispy calamari & jalapeños with coleslaw', es: 'Calamar y jalapeño fritos con ensalada de col' } },
  { img: 'fajitas', name: 'Fajitas', price: '18.99+', note: { en: 'Skirt steak, chicken or jumbo shrimp', es: 'Arrachera, pollo o camarón jumbo' } },
  { img: 'aguachile', name: 'Camarones Aguachile', price: '18.99', note: { en: 'Butterfly shrimp in spicy lime & pineapple', es: 'Camarón mariposa en limón y piña picante' } },
  { img: 'tacos', name: 'Tacos Cancún', price: '15.99', note: { en: 'Lightly battered fish, cabbage & queso fresco', es: 'Pescado capeado, repollo y queso fresco' } },
];

// Menú. Cada item: { name, desc?, price | prices: [[label, price]], tags?: ['raw','spicy'], only?: [locIds], replace?: {locId: item} }
export const MENU = [
  {
    id: 'appetizers', title: { en: 'Appetizers', es: 'Entradas' },
    items: [
      { name: 'Oysters El Rey', desc: 'Dressed with Ceviche El Rey', prices: [['6', '18.99'], ['12', '28.99']], tags: ['raw'] },
      { name: 'Oysters on the Half Shell', prices: [['6', '15.99'], ['12', '22.99']], tags: ['raw'] },
      { name: 'Cold Shrimp', prices: [['6', '13.99'], ['12', '19.99']] },
      { name: 'Seafood Gumbo', price: '8.99' },
      { name: 'Cheese Sticks', price: '8.99' },
      { name: 'Shrimp & Bacon Jalapeños (6)', price: '13.99', tags: ['spicy'] },
      { name: 'Shrimp & Crab Jalapeños (3)', price: '13.99', tags: ['spicy'] },
      { name: 'Fried Calamari with Jalapeños', price: '13.99', tags: ['spicy'] },
      { name: 'Fried Octopus', price: '18.99' },
      { name: 'Chips & Guacamole', price: '10.99' },
      { name: 'Chips & Salsa', price: '6.99' },
      { name: 'Shack Sampler', prices: [['2 people', '20.99'], ['4 people', '30.99']] },
      { name: 'Nachos', desc: 'Pico de gallo, guacamole, queso y crema', prices: [['Pollo', '18.99'], ['Camarón', '19.99']] },
    ],
  },
  {
    id: 'house', title: { en: 'House Specialties', es: 'Especialidades' },
    items: [
      { name: 'Cocteles', desc: 'Fresh peeled shrimp, octopus or oyster, tomatoes, onions, serrano, cilantro & our special sauce', prices: [['10 oz', '11.99'], ['18 oz', '15.99'], ['28 oz', '19.99'], ['Mix L', '21.99']] },
      { name: 'Tostada de Ceviche (2)', desc: 'Fresh minced fish cooked in lime, tomatoes, onions, serrano, carrots & cilantro', price: '10.99', tags: ['raw'] },
      { name: 'Tostada de Camarón (2)', desc: 'Cold shrimp in cajun tartar sauce, pico de gallo & avocado', price: '11.99' },
      { name: 'Ceviche El Rey', desc: 'Fish & shrimp cooked in lime juice, tomatoes, onions, carrots, cucumber, serrano, cilantro & avocado', price: '15.99', tags: ['raw'] },
      { name: 'Rafa’s Premium Ceviche', desc: 'Cubed red snapper fillet cooked in lime juice, carrots, cherry tomatoes, cucumber, pico de gallo & avocado', price: '17.99', tags: ['raw'] },
      { name: 'Camarones Aguachile', desc: 'Fresh butterfly shrimp slightly cooked in a spicy pineapple-lime juice, with crisp cucumber, red onion & cilantro', price: '18.99', tags: ['spicy', 'raw'] },
      { name: 'Mojarra Frita', desc: 'Deep fried whole tilapia', price: '18.99' },
      { name: 'Huachinango Frito', desc: 'Fried whole red snapper, sold per lb. A la Mexicana (spicy ranchero sauce) or A la Diabla (spicy Mexican red sauce)', price: 'Market' },
      { name: 'Flautas (2)', desc: 'Corn tortilla, fish or shrimp with cheese, topped with cabbage salad, sour cream, queso fresco and sauce', price: '15.99' },
      { name: 'Flautas de Pollo', desc: 'Chicken flautas', price: '12.99' },
      { name: 'Enchiladas de Camarón', desc: 'Corn tortilla filled with sautéed shrimp & cheese, topped with creamy cajun sauce', price: '15.99' },
      { name: 'Combinación de Mariscos', desc: 'Fish, shrimp & octopus sautéed with tomatoes, onions & house sauce', price: '18.99', tags: ['spicy'] },
      { name: 'Sam’s Cajun', desc: 'Fish, shrimp & octopus in a creamy cajun sauce', price: '19.99' },
      { name: 'Salmón con Frambuesa y Chipotle', desc: 'Oven baked salmon with raspberry-chipotle sauce, spinach or broccoli', price: '19.99', only: ['northwest'] },
    ],
  },
  {
    id: 'tilapia-shrimp', title: { en: 'Tilapia & Camarones', es: 'Tilapia y Camarones' },
    note: { en: 'Choose your style', es: 'Elige tu estilo' },
    items: [
      { name: 'Tilapia', desc: 'A la Mexicana (ranchero sauce) · Al Ajo (sautéed with garlic) · A la Diabla (spicy Mexican red sauce) · A la Parrilla (grilled)', price: '18.99' },
      { name: 'Camarones', desc: 'Jumbo shrimp. A la Diabla (spicy Mexican red sauce) · Al Mojo de Ajo (fresh minced garlic & onions) · Al Chipotle (chipotle sauce & fresh minced garlic)', price: '19.99' },
    ],
  },
  {
    id: 'boiling', title: { en: 'Shack Boiling Pot', es: 'Boiling Pot' },
    note: { en: 'Spicy, served with corn and potatoes. Flavors: Cajun & Garlic · Garlic · Chipotle · Cajun Original', es: 'Picante, con elote y papa. Sabores: Cajun y Ajo · Al Ajo · Al Chipotle · Cajun Original' },
    items: [
      { name: '1 LB Crablegs', price: 'Market' },
      { name: '1 LB Shrimp', price: 'Market' },
      { name: '1 LB Shrimp & 1 LB Crablegs', price: 'Market' },
      { name: '½ LB Sausage', price: '7.99' },
    ],
  },
  {
    id: 'grilled', title: { en: 'Shack Grilled', es: 'A la Parrilla' },
    note: { en: 'Includes mixed veggies & rice', es: 'Incluye verduras mixtas y arroz' },
    items: [
      { name: 'Salmon 8 oz', price: 'Market' },
      { name: 'Fajitas', desc: 'With pico de gallo, guacamole, sour cream & tortillas', prices: [['Chicken', '18.99'], ['Jumbo Shrimp', '19.99'], ['Skirt Steak', '21.99'], ['Beef, Chicken & Shrimp', '22.99']] },
    ],
  },
  {
    id: 'fried', title: { en: 'Fried Baskets & Combos', es: 'Canastas y Combos Fritos' },
    note: { en: 'Cajun optional. Includes fries & hushpuppies', es: 'Cajun opcional. Incluye papas y hushpuppies' },
    items: [
      { name: 'US Farm Whole Catfish', price: '17.99' },
      { name: '2 Piece Filets', price: '10.99' },
      { name: '3 Piece Filets', price: '12.99' },
      { name: 'Fried Oysters', prices: [['6', '12.99'], ['12', '20.99']] },
      { name: 'Jumbo Shrimp', prices: [['6', '13.99'], ['12', '21.99']] },
      { name: '4 Shrimp / 1 Filet', price: '11.99' },
      { name: '4 Shrimp / 2 Filet', price: '13.99' },
      { name: '6 Shrimp / 6 Oysters', price: '21.99' },
      { name: 'Shack Jumbo Combo', desc: '2 filet, 4 shrimp, 4 oysters & cole slaw', price: '22.95' },
    ],
  },
  {
    id: 'tacos', title: { en: 'Tacos', es: 'Tacos' },
    items: [
      { name: 'Tacos Cancún (3)', desc: 'Lightly battered fish filet in corn tortillas, cabbage salad & queso fresco', price: '15.99' },
      { name: 'Tacos (3)', desc: 'Fish or shrimp sautéed in onions, tomatoes, jalapeños, Monterey Jack cheese & avocado in corn tortilla', price: '15.99' },
      { name: 'Taco Gobernador (1)', desc: 'Shrimp with mozzarella cheese in corn tortilla', price: '4.99' },
    ],
  },
  {
    id: 'soups', title: { en: 'Soups', es: 'Caldos' },
    items: [
      { name: 'Caldo de Pescado', desc: 'Fish soup', prices: [['Sm', '13.99'], ['Lg', '16.99']] },
      { name: 'Caldo de Camarón', desc: 'Shrimp soup', prices: [['Sm', '13.99'], ['Lg', '19.99']] },
      { name: 'Caldo de Mariscos', desc: 'Seafood soup — shrimp, fish & octopus', prices: [['Sm', '15.99'], ['Lg', '20.99']] },
    ],
  },
  {
    id: 'sandwiches', title: { en: 'Sandwiches & Extras', es: 'Sándwiches y Extras' },
    items: [
      { name: 'Po-Boys', prices: [['Fish or Shrimp', '10.99'], ['Oyster', '12.99']] },
      { name: 'Hamburger', desc: '100% Angus beef (10 oz)', price: '10.99' },
      { name: 'Chicken Sandwich', desc: 'Grilled, breaded or buffalo', price: '10.99' },
      { name: 'Jumbo Buffalo Wings', prices: [['6', '11.99'], ['12', '18.99']] },
    ],
  },
  {
    id: 'lunch', title: { en: 'Lunch Specials', es: 'Especiales de Comida' },
    note: { en: 'Monday – Friday, 11 AM – 3 PM', es: 'Lunes a viernes, 11 AM – 3 PM' },
    items: [
      { name: '2 Piece Filet w/ Fries & Hushpuppies', price: '8.99' },
      { name: 'Shrimp Tostadas (2)', price: '8.99' },
      { name: 'Po-Boys', prices: [['Fish or Shrimp', '8.99'], ['Oyster', '10.99']] },
      { name: 'Shrimp Enchiladas w/ Rice (2)', price: '10.99' },
      { name: 'Flautas Fish or Shrimp (2)', price: '10.99' },
      { name: 'Tacos Cancún (3)', price: '10.99', replace: { mesquite: { name: 'Tacos Vallarta (3)', price: '10.99' } } },
      { name: 'Grilled Salmon w/ Rice & Veggies (6 oz)', price: '12.99' },
      { name: 'Garlic Tilapia Sautéed', price: '12.99' },
      { name: 'Chicken Flautas', price: '9.99' },
    ],
  },
  {
    id: 'family', title: { en: 'Family Packs', es: 'Paquetes Familiares' },
    items: [
      { name: 'Fried Fish', desc: 'Includes fries & hushpuppies', prices: [['12 filets', '31.99'], ['18 filets', '44.99'], ['24 filets', '59.99'], ['Extra filet', '3.99']] },
      { name: 'Ceviche', desc: 'Fresh minced fish cooked in lime mixed with pico de gallo. Includes 6 tostadas per pound & half an avocado', prices: [['2 LB', '32.99'], ['3 LB', '44.99'], ['Extra LB after 3rd', '14.00']], tags: ['raw'] },
      { name: 'Tostada de Camarón', desc: 'Cold shrimp in cajun tartar sauce, pico de gallo & avocado', prices: [['2 LB', '34.99'], ['3 LB', '46.99'], ['Extra LB after 3rd', '14.00']] },
      { name: 'Tacos de Camarón o Pescado', desc: 'Includes rice, salad & avocado', prices: [['12 tacos · feeds 4–5', '45.99'], ['18 tacos · feeds 6–9', '65.99']] },
      { name: 'Enchiladas de Camarón', desc: 'Includes rice', prices: [['12', '45.99'], ['18', '65.99']] },
      { name: 'Flautas de Camarón o Pescado', desc: 'Includes rice & salad', prices: [['8', '45.99'], ['12', '65.99']] },
      { name: 'Flautas de Pollo', prices: [['8', '40.99'], ['12', '60.99']] },
      { name: 'Margarita or Michelada Mix by the Gallon', prices: [['Margarita', '40.00'], ['Michelada', '40.00']] },
    ],
  },
  {
    id: 'kids', title: { en: 'Kids Plates', es: 'Para Niños' },
    note: { en: 'Includes french fries & fountain drink (12 & under)', es: 'Incluye papas y refresco (12 años o menos)' },
    items: [
      { name: 'Chicken Tenders', price: '6.99' },
      { name: 'Fried Fish or Shrimp', price: '6.99' },
      { name: 'Cheese Quesadilla', price: '6.99' },
    ],
  },
  {
    id: 'sides', title: { en: 'Sides, Drinks & Desserts', es: 'Guarniciones, Bebidas y Postres' },
    items: [
      { name: 'Shack Sides', desc: 'Hushpuppies, fried okra, french fries, cole slaw, potatoes, corn, sweet corn nuggets', price: '4.50' },
      { name: 'Sodas, Tea, Fountain Drinks', price: '3.50' },
      { name: 'Virgin Margaritas', desc: 'Mango, tamarindo, lemon, maracuyá', prices: [['Sm', '5.00'], ['Lg', '8.00']] },
      { name: 'Dessert', desc: 'Seasonal', price: '6.99' },
    ],
  },
];
