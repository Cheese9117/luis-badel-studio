# Luis Badel · Edición Atelier

Sitio web editorial de **Luis Badel Sala de Belleza**, salón de belleza ubicado en el barrio Los Colores, Laureles, Medellín. Concepto visual de tipo "atelier" — paleta terracota/oliva, tipografía editorial (Fraunces + Sora) y navegación por índice numerado, pensado para diferenciarse de otras propuestas digitales del mismo cliente y posicionar el salón como un estudio de autor.

## Estructura

```
luis-badel-studio/
├── index.html
├── css/
│   ├── variables.css     # design tokens: color, tipografía, espaciado
│   ├── reset.css          # reset moderno + utilidades base
│   ├── base.css           # tipografía y elementos base
│   ├── layout.css         # contenedores, grid editorial, nav de índice
│   ├── components.css     # botones, tarjetas, hero, galería, reserva...
│   ├── animations.css      # reveal on scroll, microanimaciones
│   ├── utilities.css       # clases utilitarias (sin estilos inline)
│   └── responsive.css      # breakpoints mobile / tablet / desktop
├── js/
│   ├── nav.js              # menú móvil + scroll-spy del índice lateral
│   ├── reveal.js           # animaciones al hacer scroll
│   └── app.js              # back-to-top, año dinámico del footer
├── assets/
│   └── images/             # fotografías del salón (JPG + WebP, con variantes)
├── robots.txt
└── sitemap.xml
```

## Secciones

01. **Inicio** — hero de presentación
02. **Filosofía** — propuesta de valor del salón
03. **Servicios** — corte, color, balayage, manicure y más
04. **Galería** — fotografías del estudio y trabajos realizados
05. **Equipo** — presentación del equipo de estilistas
06. **Testimonios** — opiniones de clientas
07. **Reserva** — contacto y agendamiento por WhatsApp

## Información del negocio

- **Nombre:** Luis Badel Sala de Belleza
- **Ubicación:** Laureles, barrio Los Colores, Medellín
- **Reservas:** WhatsApp
- **Redes:** Instagram y Facebook

## Características técnicas

- HTML5 semántico, CSS modular con custom properties, JavaScript ES2022 (sin frameworks ni dependencias)
- Diseño 100% responsivo: nav de índice lateral en desktop, menú móvil a pantalla completa en dispositivos pequeños
- Imágenes optimizadas en WebP con fallback JPG, `loading="lazy"` y dimensiones explícitas para evitar CLS
- SEO on-page: metadatos Open Graph/Twitter Card, datos estructurados JSON-LD (`HairSalon`), `robots.txt` y `sitemap.xml`
- Content Security Policy vía meta tag, sin scripts ni dependencias externas más allá de Google Fonts
- Animaciones de aparición al scroll respetando `prefers-reduced-motion`

## Desarrollo

Sitio estático sin dependencias ni build. Para desarrollo local:

```bash
npx serve .
```

Luego abre el puerto indicado en el navegador.

## Licencia

MIT © Juan Sebastián Henao
