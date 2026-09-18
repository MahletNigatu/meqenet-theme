MEQENET - Shopify theme v0.2

NEW IN v0.2
- Product page: sliding gallery with arrows and diamond dots, colour swatches,
  size buttons, quantity, add to cart. All wired to real Shopify variants;
  picking a colour swings the gallery to that variant's photo.
- Collection page: product grid on the sky-tilat mat, pagination, sold-out flag.
- Collections list page and the cart page.
- Home page, header and footer unchanged from v0.1.

FILES CHANGED SINCE v0.1
  assets/base.css                       (appended - product, collection, cart styles)
  assets/product.js                     (new)
  snippets/swatch.liquid                (new - colour name to hex)
  sections/main-product.liquid          (new)
  sections/main-collection.liquid       (new)
  sections/main-list-collections.liquid (new)
  sections/main-cart.liquid             (new)
  templates/product.json                (replaced)
  templates/collection.json             (replaced)
  templates/list-collections.json       (replaced)
  templates/cart.json                   (replaced)

Everything else is identical to v0.1 - only the files above need to land in the repo.

HOW IT REACHES THE STORE
The repo is connected, so drop these files into meqenet-theme on the main
branch and Shopify picks them up within a minute. Keep previewing, do not
publish yet.

COLOUR SWATCHES
snippets/swatch.liquid maps Printful colour names to hex by keyword - natural,
black, olive, sky, navy, salmon, mauve, rust and so on. If a swatch shows up
grey, its colour name is not in the list; tell me the exact name Printful uses
and I will add it.

STILL TO COME
  Our Story page, the Addis Abeba coming-soon page with email capture,
  search, and checkout branding.
