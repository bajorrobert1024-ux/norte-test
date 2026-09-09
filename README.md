# NORTE FastFood

# NORTE — LOVABLE MASTERPROMPT

## 1. PROJEKAT

Napravi kompletan, produkcijski spreman web sajt za **NORTE** — smash burger restoran u Novom Sadu (Kornelija Stankovića 11). Sajt treba da bude jednostranični (single-page, scroll-based) sa sekcijama: Hero, Meni, O nama, Poručivanje (Wolt/Glovo), Praćenje pošiljke, Lokacija, Footer.

Ton brenda: urban, noćni, "smash burger" energija — neonski, malo drsko, gladno. Referenca: fotografije burgera na tamnoj pozadini sa neonskim naslovima (u prilogu).

## 2. DIZAJN SISTEM — BOJE (OBAVEZNO KORISTITI TAČNO OVE HEX KODOVE NA CELOM SAJTU)

Boje su preuzete direktno sa NORTE menija (neonski meni na tamnoj pozadini). Koristi ih dosledno kroz ceo sajt, ne samo u meni sekciji.

```

--bg-primary: #0A0B14;        /* glavna pozadina, skoro crna navy */

--bg-secondary: #13141F;      /* pozadina kartica, panela */

--neon-blue: #2F6FFF;         /* naslovi, brojevi/cene, linije, glow akcenti */

--neon-pink: #FF3E8E;         /* naslovi kategorija (BURGERI, SNACKS...), glow akcenti */

--text-primary: #FFFFFF;

--text-secondary: #B8B8C7;    /* opisi, sastojci */

--border-glow: rgba(47, 111, 255, 0.4);  /* za neon border efekat */

```

Pravilo naizmeničnosti: naslovi sekcija (BURGERI, SNACKS, PALAČINKE, POMFRITI, SOSEVI I DODACI) idu u `--neon-pink`, cene i pod-labele (DOUBLE/TRIPLE/DOUBLE DOUBLE/TRIPLE DOUBLE) idu u `--neon-blue`. Svi border-ovi kartica i panela imaju suptilan `box-shadow` glow u istoj boji kao njihov naslov (neon efekat, ne solid border).

**Font:** naslovi — bold, kondenzovan sans (tip "Anton" ili "Bebas Neue" za velike naslove tipa "TRIPLE DOUBLE BURGER"), telo teksta — čist sans (Inter ili Poppins).

## 3. HERO SEKCIJA

- Full-bleed fotografija burgera (placeholder: koristi jednu od priloženih — npr. Truffle burger na tamnoj tacni) sa tamnim gradient overlay-om (`--bg-primary` na 60% opacity od dna ka vrhu).

- Naslov: "JEDINI ODGOVOR NA GLAD" — veliki, bold, italic pod-naslov ispod: "Tvoj savršeni smash burger."

- Dva CTA dugmeta jedno pored drugog: **"Poruči preko Wolt-a"** i **"Poruči preko Glovo-a"**, svako sa brend-bojom svoje platforme kao ivicom (Wolt tirkizna, Glovo žuta) ali unutar NORTE tamne palete — dugme pozadina `--bg-secondary`, tekst i ivica u brend boji platforme, hover: neon glow u `--neon-pink`.

- NORTE logo (plavi krug sa ribom/kompasom, kakav je na slikama) fiksiran gore levo/centrirano u navigaciji, sticky pri skrolu, sa blagim glow efektom.

## 4. MENI SEKCIJA — UNESI TAČNO OVE PODATKE

Naslov sekcije: "MENI" — veliki, outline/neon stil, sa horizontalnim neon linijama levo/desno (tačno kao na slici menija).

### BURGERI

Tabela/grid sa 4 kolone cena: Double / Triple / Double Double / Triple Double

| Burger | Sastojci | Double | Triple | Double Double | Triple Double |

|---|---|---|---|---|---|

| EL CLASICO | burger sos, kiseli krastavci, crveni luk, 100% junetina, cheddar, kečap | 750 | 950 | 1150 | 1350 |

| NORTE | burger sos, kiseli krastavci, iceberg, 100% junetina, cheddar, hrskava slaninica | 790 | 990 | 1150 | 1390 |

| MATADOR | BBQ sos, iceberg, 100% junetina, cheddar, jalapeño, hrskava slaninica | 850 | 1050 | 1250 | 1450 |

| TRUFFLE | truffle mayo, karamelizovani luk, 100% junetina, cheddar | 890 | 1090 | 1290 | 1490 |

| EL PATRON | bacon mayo, hrskava slaninica, cheddar, karamelizovani luk, 100% junetina | 890 | 1090 | 1290 | 1490 |

| BLUE CHEESE | bacon mayo, iceberg, 100% junetina, ementaler, gorgonzola, cheddar | 920 | 1120 | 1320 | 1520 |

Svaki red je karta na hover-u koja se blago diže (translateY -4px) i dobija neon border glow u `--neon-blue`.

### SNACKS

- CHEESE BALLS — 420

- JALAPEÑO BALLS — 380

- ONION RINGS — 360

- MOZZARELA STICKS — 390

### POMFRITI

- CLASSIC — 140/200

- CHEDDAR — 380

- CHEDDAR BACON — 360

- TARTUF PARMEZAN — 390

### PALAČINKE

- NUTELA PLAZMA — 290

- NUTELA PLAZMA U MLEKU — 340

- ŠVARCVALD — 380

### SOSEVI I DODACI (sve po 80 RSD)

TRUFFLE MAYO, BACON MAYO, BBQ, KETCHUP, BURGER SOS, HONEY MUSTARD, SLANINICA, JALAPEÑO, KARAMEL LUK — prikaži kao chip/pill grid, ne tabelu.

Layout meni sekcije: BURGERI zauzima glavnu širu kolonu (kao na originalnom meniju), SNACKS i PALAČINKE u levoj užoj koloni ispod, POMFRITI i SOSEVI I DODACI u desnoj užoj koloni — replikuj tačno raspored sa slike menija (asimetrični grid, ne jednostavna lista).

## 5. PORUČIVANJE — WOLT I GLOVO (VAŽNO: NEMA SOPSTVENE KORPE)

NORTE ne prima porudžbine direktno na sajtu. Sve porudžbine idu preko Wolt i Glovo aplikacija. Zato:

- U hero sekciji i kao sticky floating dugme (donji desni ugao, uvek vidljivo pri skrolu) postavi dva dugmeta: **Wolt** i **Glovo**, svako sa svojim logom.

- Dugmad vode na spoljne linkove — ostavi placeholder promenljive koje ću ja popuniti sa stvarnim linkovima:

  - `WOLT_RESTAURANT_URL` (npr. `https://wolt.com/sr/srb/novi-sad/restaurant/norte`)

  - `GLOVO_RESTAURANT_URL`

- Na mobilnom: detektuj da li je Wolt/Glovo app instaliran i pokušaj deep link (`wolt://` / `glovoapp://`), sa fallback na web link ako app link ne radi. Ako Lovable/React okruženje ne podržava pouzdanu app-detekciju, koristi običan `<a href>` sa target="_blank" — nemoj graditi lažnu detekciju koja ne radi.

- Ispod menija, ponovi CTA: "Gladni ste? Poručite odmah" sa istim dva dugmeta.

## 6. PRAĆENJE POŠILJKE — REALNO REŠENJE

Wolt i Glovo **ne nude javni API za embed live-tracking statusa porudžbine na sajtovima trećih strana** — to postoji samo unutar njihovih sopstvenih aplikacija. Zato sekcija "Prati porudžbinu" treba da bude realna, ne lažna:

- Sekcija sa dva dugmeta: **"Prati porudžbinu na Wolt-u"** i **"Prati porudžbinu na Glovo-u"**, koja vode direktno na order-tracking/order-history stranicu tih aplikacija (`wolt.com/orders` odn. Glovo ekvivalent), otvara se u novom tabu/app-u gde korisnik već ima svoju aktivnu porudžbinu.

- Kratak tekst iznad: "Porudžbinu pratite direktno u Wolt ili Glovo aplikaciji — tu vidite tačno vreme dostave uživo."

- Nemoj praviti fake progress bar ili status koji ne dobija stvarne podatke — to bi zavaralo korisnika.

- Ako kasnije budeš imao Wolt/Glovo partner API pristup (retko se odobrava malim restoranima), ovo se može nadograditi pravim webhook statusom — za sada ostavi kao redirect.

## 7. "MAGIJA" — INTERAKCIJE I ANIMACIJE

- **Cursor glow**: suptilan radijalni gradient koji prati kursor preko tamne pozadine (kao topla/neon svetlost), samo na desktop-u.

- **Neon flicker intro**: kada se "MENI" naslov pojavi u viewport-u (scroll-trigger, IntersectionObserver), neonski flicker animacija pri paljenju (2-3 kratka treptaja pa stabilno svetli).

- **Hover na burger karticama**: blagi 3D tilt (perspective transform prati poziciju miša) + glow border.

- **Parallax na hero fotografiji**: fotografija se blago pomera sporije od scroll brzine.

- **Sticky order bar**: kada korisnik skroluje kroz meni, tanka traka na dnu ekrana sa Wolt/Glovo dugmićima postaje vidljiva (fade in posle 300px skrola).

- **Broj cena "flip" efekat**: kada meni kartica uđe u viewport, cene animirano broje od 0 do stvarne vrednosti (600ms, ease-out).

- Sve animacije drži suptilne i brze (200-500ms) — brend je "gladan i brz", ne sporo/dramatično.

## 8. DODATNE SEKCIJE

- **O nama**: kratak pasus (2-3 rečenice) — pišem ja tekst kasnije, ostavi placeholder sa odgovarajućim stilom.

- **Lokacija**: Google Maps embed za Kornelija Stankovića 11, Novi Sad + telefon 069 162 90 63 + radno vreme (placeholder).

- **Footer**: NORTE logo, adresa, telefon, linkovi ka Instagram/Wolt/Glovo, copyright.

## 9. RESPONSIVE

Mobile-first. Na mobilnom: meni grid se stack-uje u jednu kolonu po redosledu BURGERI → SNACKS → POMFRITI → PALAČINKE → SOSEVI, sticky Wolt/Glovo traka na dnu ekrana uvek vidljiva (thumb-reach zona).

## 10. TEHNIČKO

- React + Tailwind (Lovable default).

- Sve boje definiši kao CSS custom properties u `:root` (vidi sekciju 2), ne hardkoduj hex vrednosti po komponentama — lakše za buduće izmene.

- Meni podatke drži kao JS/TS niz objekata (array of objects) na vrhu fajla ili u posebnom `data/menu.ts` fajlu, ne hardkoduj u JSX — lakše mi je da kasnije menjam cene.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://norte-test.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/9e848edb-0fe3-4462-ac87-eb906a91b0a4).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
