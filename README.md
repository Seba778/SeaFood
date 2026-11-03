# Seafood Shack: sitio web (propuesta)

Sitio de una sola página para Seafood Shack (3 sucursales: Northwest Hwy y Webb Chapel en Dallas, y Mesquite, TX).
El sitio tiene 4 objetivos: **menú, ubicación, contacto y buenas fotos**.

## Uso

```bash
npm install
npm run dev       # desarrollo en http://localhost:5173
npm run build     # genera dist/ (sitio estático listo para subir)
npm run preview   # sirve dist/ en http://localhost:4173
npm run images    # regenera public/img/ a partir de source/
```

## Secciones

1. **Hero**: foto del local, CTA al menú y a ubicaciones, e indicador "Abierto ahora" (hora de Texas).
2. **Favoritos de la casa**: carrusel de platillos con foto y precio.
3. **Especiales del día**: Rita Mondays, Taco Tuesday, Tequila & Boiling Wednesdays. La tarjeta del día actual se resalta. Debajo va un acceso a los Lunch Specials.
4. **Menú completo**: selector de sucursal, pestaña "Menú completo" (todo el menú en la página, por defecto) y pestañas por categoría y botón "Ver menú impreso" con la imagen original de la sucursal elegida.
5. **Galería**: 5 fotos del local, con visor (lightbox).
6. **Ubicaciones y contacto**: tarjeta por sucursal con su propio mapa (dirección, teléfonos clicables, cómo llegar, ver su menú) y horario.
7. **Footer**: Facebook, Instagram y TikTok.

Además, el sitio incluye:

- Versión en inglés y en español (botón EN/ES).
- Barra fija en móvil con Menú / Cómo llegar / Llamar.
- Datos estructurados `schema.org/Restaurant` por sucursal, para SEO local.

## Diferencias de menú por sucursal

Salen de comparar los menús impresos de las 3 sucursales:

- *Salmón con Frambuesa y Chipotle* ($19.99) solo está en **Northwest**.
- Lunch: **Mesquite** tiene *Tacos Vallarta (3)* en lugar de *Tacos Cancún (3)*.
- Todos los demás precios son iguales.

## Pendientes / por confirmar con el cliente

- Precios de "1 LB Shrimp" y "1 LB Crablegs" del miércoles: el menú impreso no los trae. Hoy aparecen como "Pregunta el precio".
- ¿Tienen pedidos en línea o delivery (Uber Eats, DoorDash…)? Si los tienen, se agrega un botón "Ordenar".
- ¿Hay correo de contacto o reservaciones para eventos?
- Dominio y hosting.
- Fotos de platillos: las actuales están recortadas del menú impreso. Para el sitio final conviene una sesión de fotos de comida en la misma línea que las fotos del local.
