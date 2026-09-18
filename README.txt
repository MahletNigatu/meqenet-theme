MEQENET - Shopify theme v0.6

LEGAL TEXT IS NOW IN THE THEME
All four policies - refund, shipping, privacy, terms - are written out in full
and live at /pages/legal as four expandable sections. The footer's Legal column
links straight to each anchor. Written for a made-to-order brand rather than
copied from a generic template.

ONE PAGE TO CREATE
  Content -> Pages -> Add page
  Title: Legal          Template: page.legal        Body: leave empty
  Confirm the handle reads legal so the URL is /pages/legal

That is the only admin step. The text is in the theme, so editing it later is a
theme edit, not a page edit - it survives every update.

WHY SETTINGS -> POLICIES STILL MATTERS
Shopify's CHECKOUT links to its own policy pages at /policies/..., and only
Settings -> Policies can fill those. A theme cannot write them. If you leave
them empty, the policy links at checkout go nowhere - which looks careless to a
buyer deciding whether to pay.

  The fix is four copy-pastes, once:
  Settings -> Policies -> open each one -> paste -> Save

  Refund policy    <- section 01 on /pages/legal
  Shipping policy  <- section 02
  Privacy policy   <- section 03
  Terms of service <- section 04

Open /pages/legal in the live store, expand a section, select the text, copy,
paste. Five minutes total and the store is consistent everywhere.

TWO THINGS TO CHECK IN THE TEXT
  1. Governing law says State of Maryland, from your store address. Change it in
     sections/legal.liquid if your LLC is registered elsewhere.
  2. The privacy policy names Shopify and Printful as processors, which is
     accurate. If you add another app that touches customer data, add it there.

It is plain-language and honest, not legal advice. A lawyer in your jurisdiction
may want to adjust it.

FOOTER STRUCTURE
  Three columns: the brand block, Shop (auto-listed collections), and Support.
  Support holds Our Story, Contact & help, Shipping, Returns, Size guide, and a
  single Policies link to /pages/legal. There is no separate Legal column, and
  nothing legal appears in the main menu - the header only ever shows your
  collections, Our Story and Contact.

FILES TO UPLOAD FOR v0.6
  assets/base.css                       (replaced)
  sections/legal.liquid                 (new)
  sections/footer.liquid                (replaced)
  templates/page.legal.json             (new)

STILL NOT RE-UPLOADING
  config/settings_data.json
  templates/index.json
