MEQENET - Shopify theme v0.4

WHAT'S NEW
Everything that used to need your clicks is now authored in code.

  Footer          Five columns, fully written - Shop (auto-lists your real
                  collections), The brand, Help, and the newsletter signup.
                  NO SHOPIFY MENUS NEEDED. Nothing to build in Navigation.
  Header nav      Also automatic. It lists Shop All, every collection that has
                  products, Addis Abeba and Our Story. If you ever want manual
                  control, tick "Use a Shopify menu instead" in the Header
                  section and it switches over.
  Our Story       The full page, designed, with the complete meqenet text and
                  the WE GATHER / WE RISE creed block.
  Addis Abeba     Coming-soon page with the waitlist form. Signups are tagged
                  addis-abeba-waitlist in your Shopify customer list.
  Shipping        Written.
  Returns         Written.
  Size guide      Written.
  How it's made   Written.
  Contact         Written.
  Search          Results page.

THE ONE THING I CANNOT DO FROM CODE
Shopify pages have to exist in the admin before a template can attach to them.
Creating one takes about fifteen seconds and you never touch it again, because
the copy lives in the theme, not in the page.

  Content -> Pages -> Add page
  Leave the content body EMPTY. Set Title and, on the right under
  "Theme template", pick the matching template. Save.

  Title            Template to pick      URL it must end up at
  Our Story        page.our-story        /pages/our-story
  Addis Abeba      page.addis-abeba      /pages/addis-abeba
  Shipping         page.shipping         /pages/shipping
  Returns          page.returns          /pages/returns
  Size guide       page.size-guide       /pages/size-guide
  How it's made    page.how-its-made     /pages/how-its-made
  Contact          page.contact          /pages/contact

The URL comes from the title automatically - "Size guide" becomes
/pages/size-guide. If Shopify gives you something else, edit the handle at the
bottom of the page editor to match the table.

Seven pages, about two minutes total. Then the footer links all resolve and you
are done with the admin.

ALSO WORTH DOING ONCE
Settings -> Policies. Shopify generates refund, privacy and terms drafts.
Read them and adjust. The footer already links to them.

FILES TO UPLOAD FOR v0.4
  assets/base.css                       (replaced)
  sections/header.liquid                (replaced)
  sections/footer.liquid                (replaced)
  sections/our-story.liquid             (new)
  sections/addis-soon.liquid            (new)
  sections/prose-page.liquid            (new)
  sections/main-search.liquid           (new)
  templates/page.our-story.json         (new)
  templates/page.addis-abeba.json       (new)
  templates/page.shipping.json          (new)
  templates/page.returns.json           (new)
  templates/page.size-guide.json        (new)
  templates/page.how-its-made.json      (new)
  templates/page.contact.json           (new)
  templates/search.json                 (replaced)

STILL NOT RE-UPLOADING
  config/settings_data.json
  templates/index.json
Leave both alone - Shopify writes your editor changes into them.

STILL TO COME
  Checkout branding (logo, colours, type - Settings -> Checkout, not code).
  Addis Abeba artwork when you have it.
