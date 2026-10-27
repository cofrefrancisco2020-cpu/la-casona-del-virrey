# La Casona del Virrey — versión 1
Entrega: 27 de octubre de 2026. Sitio estático, en español de Chile, listo para un repositorio de GitHub y despliegue en Vercel.

## Abrir la web
Abre index.html en un navegador. No requiere instalación, compilación, claves ni variables de entorno.
La página usa tipografías del sistema para evitar descargas de fuentes. Las fotografías y el logo están incluidos localmente.
El mapa, las redes sociales y WhatsApp requieren conexión a internet.

## Archivos
- index.html: contenido, carta, datos locales y metadatos.
- styles.css: diseño adaptable, animaciones, estados de foco y reducción de movimiento.
- script.js: menú móvil, filtros y preparación de la solicitud de reserva.
- assets/: todos los recursos finales; sin subcarpetas.
- vercel.json: configuración estática y cabeceras.
- robots.txt: rastreo de la página; exclusión de documentos de trabajo.
- brief-marca.md: fuentes, decisiones, precios y procedencia de las imágenes.
- .gitignore: exclusiones habituales. No hay contraseñas ni credenciales.

## Subir a GitHub
1. Crea el repositorio que prefieras.
2. Sube EL CONTENIDO de version 1 a la raíz del repositorio. index.html debe quedar directamente en la raíz; conserva la carpeta assets.
3. Incluye styles.css, script.js, vercel.json, robots.txt y assets. README.md y brief-marca.md pueden quedarse en el repositorio para referencia.

## Publicar en Vercel
1. Importa ese repositorio desde tu cuenta de Vercel.
2. Framework Preset: Other.
3. Root Directory: la raíz del repositorio.
4. Build Command: vacío, sin compilación.
5. Output Directory: . (punto; la raíz). vercel.json ya lo declara.
6. No se requieren variables de entorno ni Install Command.
7. Publica y comprueba las imágenes, la carta, WhatsApp y el enlace de ruta.

Si subes la carpeta de la empresa completa, elige version 1 como Root Directory. Es más simple subir directamente el contenido de version 1.
Referencia oficial: https://vercel.com/docs/builds/configure-a-build

## Qué funciona
- Navegación y menú móvil, con cierre al navegar y con Escape.
- Siete platos con precios proporcionados, cinco filtros y consultas individuales por WhatsApp.
- Formulario con nombre, fecha, hora, personas y ocasión. Prepara un mensaje; el visitante decide enviarlo. No registra una reserva automáticamente ni confirma cupos.
- Se impiden fechas anteriores al día actual en Chile.
- Teléfono, correo, redes y ruta a Ramírez 725, Vallenar.
- Mapa integrado con enlace de ruta siempre visible. Si Google no carga, se muestra una composición local de ubicación.
- Animaciones discretas, navegación por teclado y respeto de movimiento reducido.

## Fotografías
Se conserva el logo entregado. Las siete imágenes de carta se limpiaron y adaptaron con IA desde las capturas proporcionadas, retirando toda la interfaz. La portada y el salmón se mejoraron a partir de fotografías del Instagram del restaurante.
Por pedido expreso del usuario, pastelería, cócteles y wok fueron recreados con IA a partir de sus referencias: tarta de rejilla sin envases; mismos vasos de cobre con iluminación profesional; lomo saltado al wok con fuego natural.
Las imágenes son versiones editoriales basadas en las fuentes y no garantizan una reproducción exacta de cada porción servida.
Los originales y las capturas de investigación se conservaron fuera de la entrega, en el área de trabajo. assets contiene solo recursos utilizados.

## Ajustes cuando exista dominio definitivo
No se inventó un dominio. Antes de solicitar indexación:
- Añadir canonical y og:url con la URL HTTPS oficial.
- Convertir og:image a URL absoluta de /assets/hero-lomo.webp.
- Crear sitemap.xml con la única URL pública de esta página y enlazarlo desde robots.txt.
- Verificar el dominio en Google Search Console y enviar el sitemap.
- Actualizar precios y horarios si el restaurante lo indica.

## Comprobaciones realizadas
Navegador: escritorio, 768 px, 390 px y 320 px; sin desbordamiento horizontal.
Los 15 elementos de imagen cargaron correctamente (13 archivos; el logo y la fotografía de cócteles se reutilizan).
Filtros: 2 clásicos peruanos, 3 chifa, 1 para compartir, 1 brasas y 7 en total.
Reserva: texto de WhatsApp verificado con nombre, fecha, hora, personas y ocasión; no se envió ningún mensaje.
JavaScript sin errores de sintaxis; consola de la página sin errores ni advertencias durante las pruebas.
El enlace a WhatsApp reconoce La Casona Del Virrey.
No se ha creado repositorio remoto ni publicado en Vercel: la entrega es local, según el método solicitado.

## Editar después
Los platos, precios y enlaces están como HTML editable en index.html. Para sustituir una fotografía, conserva su nombre en assets o actualiza la ruta correspondiente.
Para futuras versiones, duplica la carpeta como version 2 y conserva version 1.



## Anuncio de Instagram
Ventana accesible a los 3 segundos de entrar, con enlace oficial a @lacasonadelvirrey y cierre visible. Solo una vez por sesión de pestaña; usa sessionStorage sin datos personales. Se puede cerrar con Escape, con la X, con el botón de seguir explorando o pulsando fuera. Se pospone si el visitante está completando la reserva o la pestaña no está visible.
