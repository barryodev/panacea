export interface LanguageWord {
  lang: string;
  text: string;
  font: string;
}

export interface EnrichedLanguageWord extends LanguageWord {
  nativeName: string;
  fontAuthor: string | null;
  fontDescription: string | null;
  fontUrl: string | null;
  wikiEntry: string | null;
  wikiExtract: string | null;
  wikiUrl: string | null;
}

export const languagesEnriched: EnrichedLanguageWord[] = [
  {
    lang: "English",
    text: "Hello World",
    font: "Permanent Marker",
    nativeName: "English",
    fontAuthor: "Font Diner",
    fontDescription:
      "Permanent Marker represents the look and feel of a favorite writing instrument.",
    fontUrl: null,
    wikiEntry: "English_language",
    wikiExtract:
      "English is a West Germanic language of the Indo-European language family that emerged in early medieval England and has since become a global lingua franca. The language is named after the Angles, one of the Germanic peoples who migrated to Britain after the end of Roman rule. English is the most spoken language in the world, primarily due to the global influence of the British Empire and the rise of the United States. It is the most widely learned second language in the world, with more second‑language speakers than native speakers. However, English is only the third‑most spoken native language, after Mandarin Chinese and Spanish.",
    wikiUrl: "https://en.wikipedia.org/wiki/English_language",
  },
  {
    lang: "German",
    text: "Hallo Welt",
    font: "UnifrakturMaguntia",
    nativeName: "Deutsch",
    fontAuthor: "j. \\'mach\\' wust",
    fontDescription:
      "UnifrakturMaguntia is based on Peter Wiegel’s font Berthold Mainzer Fraktur which is in turn based on a 1901 typeface by Carl Albert Fahrenwaldt. While the glyph design of Peter Wiegel’s font has hardly been changed at all, UnifrakturMaguntia uses smart font technologies for displaying the font’s ligatures (OpenType, Apple Advanced Typography and SIL Graphite). An experimental feature is the distinction of good blackletter typography between required ligatures ‹ch, ck, ſt, tz› that must be kept when letterspacing is increased, and regular ligatures (for instance, ‹fi, fl›) that are broken up when letterspacing is increased. UnifrakturMaguntia is optimized for @font-face linking on the internet by combining standards compliance with a permissive license. UnifrakturMaguntia has first been published in 2010 at UnifrakturMaguntia . It has been edited with FontForge, the libre outline font editor. OpenType features have been added with FontForge directly. AAT features have been added with ftxenhancer of the Apple Font Tools. Graphite has been added with the Graphite Compiler.",
    fontUrl: null,
    wikiEntry: "German_language",
    wikiExtract:
      "German is a West Germanic language in the Indo-European language family, mainly spoken in Western and Central Europe. It is the majority and official language in Germany, Austria, Switzerland, and Liechtenstein. It is also an official language of Luxembourg, Belgium and the Italian autonomous province of South Tyrol, as well as a recognised national language in Namibia. There are also notable German-speaking communities in other parts of Europe, including: Poland, the Czech Republic, Denmark, Slovakia (Krahule), Romania, Hungary (Sopron), and France (Alsace). Overseas, sizeable communities of German-speakers are found in the Americas.",
    wikiUrl: "https://en.wikipedia.org/wiki/German_language",
  },
  {
    lang: "French",
    text: "Bonjour le monde",
    font: "Playfair Display",
    nativeName: "Français",
    fontAuthor: "Claus Eggers Sørensen",
    fontDescription:
      "Playfair is a transitional design. In the European Enlightenment in the late 18th century, broad nib quills were replaced by pointed steel pens as the popular writing tool of the day. Together with developments in printing technology, ink, and paper making, it became fashionable to print letterforms of high contrast and delicate hairlines that were increasingly detached from the written letterforms. This design lends itself to this period, and while it is not a revival of any particular design, it takes influence from the designs of John Baskerville and from ‘Scotch Roman’ designs. This typeface was initially published in 2011, and had a major update in 2017. Being a Display (large size) design in the transitional genre, functionally and stylistically it can accompany Georgia or Gelasio for body text. It was succeeded in 2023 by the complete Playfair design, which as a variable font includes body text designs in the optical size axis. This is the main family, with a sibling Playfair Display SC small caps family. The main family downloaded font files include a full set of small caps, common ligatures, and discretionary ligatures. The Playfair project is led by Claus Eggers Sørensen, a type designer based in Amsterdam, Netherlands.",
    fontUrl: "https://github.com/clauseggers/Playfair-Display",
    wikiEntry: "French_language",
    wikiExtract:
      "French is a Romance language of the Indo-European family. Like all other Romance languages, French and its closest relatives—the langues d'oïl, historically spoken in northern France and southern Belgium—descended from the Vulgar Latin of the Roman Empire. It was influenced by native Celtic languages of Northern Roman Gaul and by the Germanic Frankish language of the post-Roman Frankish invaders. Over time, French largely supplanted most regional Romance varieties across France, Belgium and Switzerland. As a result of French and later Belgian colonialism, it was introduced to new territories in the Americas, Africa, and Asia, and numerous French-based creole languages, most notably Haitian Creole, were developed. A French-speaking person or nation may be referred to as Francophone in both English and French.",
    wikiUrl: "https://en.wikipedia.org/wiki/French_language",
  },
  {
    lang: "Spanish",
    text: "Hola Mundo",
    font: "Alfa Slab One",
    nativeName: "Español",
    fontAuthor: "JM Solé",
    fontDescription:
      "Alfa Slab One is a contemporary take on the Six-lines Pica Egyptian created by Robert Thorne for the Thorowgood Foundry in 1921. Although initially based on that model, Alfa Slab One was designed with an extreme stem weight, big serifs, more stem contrast and gradual terminals with a single serif. All this attributes give Alfa Slab One a contemporary look with extreme black density.",
    fontUrl: null,
    wikiEntry: "Spanish_language",
    wikiExtract:
      "Spanish or Castilian is a Romance language of the Indo-European language family that evolved from the Vulgar Latin spoken on the Iberian Peninsula of Europe. It originated in the Kingdom of Castile, a historical kingdom in north-central Spain. Today, it is a global language with 519 million native speakers, mainly in the Americas and Spain, and about 636 million speakers total, including second-language speakers. Spanish is the official language of 21 countries, as well as one of the six official languages of the United Nations. Spanish is the world's second-most spoken native language after Mandarin Chinese; the world's fourth-most spoken language overall after English, Mandarin Chinese, and Hindustani (Hindi-Urdu); and the world's most widely spoken Romance language. The country with the largest population of native speakers is Mexico.",
    wikiUrl: "https://en.wikipedia.org/wiki/Spanish_language",
  },
  {
    lang: "Italian",
    text: "Ciao Mondo",
    font: "Italiana",
    nativeName: "Italiano",
    fontAuthor: "Santiago Orozco",
    fontDescription:
      "Italiana was designed for use in the headlines of newspapers and magazines. Italiana is inspired by the calligraphy of the Italian masters. It is suitable for design solutions that require elegance and sophistication. It was conceived with modern proportions that make it great for economical typesetting both on paper and on screen. The Italiana family is in progress and is being regularly improved. If you have a request, wish",
    fontUrl: null,
    wikiEntry: "Italian_language",
    wikiExtract:
      "Italian is a Romance language of the Indo-European language family. It is a standardised form of literary Florentine Tuscan and, together with Sardinian, is the least differentiated language from Latin. Current estimates indicate that between 68 and 85 million people speak Italian, including approximately 64 million native speakers as of 2024.",
    wikiUrl: "https://en.wikipedia.org/wiki/Italian_language",
  },
  {
    lang: "Portuguese",
    text: "Olá Mundo",
    font: "Bilbo",
    nativeName: "Português",
    fontAuthor: "Robert Leuschke",
    fontDescription:
      "Bilbo is a very legible calligraphic style that has a masculine feel. It can be used for more than just display. Use Bilbo in body copy that requires added warmth to a message. Bilbo comes with Latin Character sets including Western, Central, and Vietnamese language support.",
    fontUrl: "https://github.com/googlefonts/bilbo",
    wikiEntry: "Portuguese_language",
    wikiExtract:
      "Portuguese is a Western Romance language of the Indo-European language family, written in the Latin script. With approximately 267 million native speakers, it is the fifth-most spoken native language in the world, and the most widely spoken language in the Southern Hemisphere. It is the official language of eight countries — Portugal, Brazil, Angola, Mozambique, Cape Verde, Guinea-Bissau, São Tomé and Príncipe, and Timor-Leste — and is co-official with other languages in Macau and Equatorial Guinea.",
    wikiUrl: "https://en.wikipedia.org/wiki/Portuguese_language",
  },
  {
    lang: "Dutch",
    text: "Hallo Wereld",
    font: "Josefin Sans",
    nativeName: "Nederlands",
    fontAuthor: "Santiago Orozco",
    fontDescription:
      'The idea of this typeface is to be geometric, elegant, with a vintage feeling, for use at larger sizes. It is inspired by geometric sans serif designs from the 1920s. The x-height is half way from baseline to cap height, an unusual proportion. There is a sister family, Josefin Slab In December 2019, it was updated with a Variable Font "Weight" axis.',
    fontUrl: "https://github.com/googlefonts/josefinsans",
    wikiEntry: "Dutch_language",
    wikiExtract:
      "Dutch is a West Germanic language of the Indo-European language family, spoken by about 25 million people as a first language and 5 million as a second language and is the third most spoken Germanic language. In Europe, Dutch is the native language of most of the population of the Netherlands and Flanders. Dutch was one of the official languages of South Africa until 1925, when it was replaced by Afrikaans, a separate but partially mutually intelligible daughter language of Dutch. Afrikaans, depending on the definition used, may be considered a sister language, spoken, to some degree, by at least 16 million people, mainly in South Africa and Namibia, and evolving from Cape Dutch dialects.",
    wikiUrl: "https://en.wikipedia.org/wiki/Dutch_language",
  },
  {
    lang: "Russian",
    text: "Привет, мир",
    font: "Marck Script",
    nativeName: "Русский",
    fontAuthor: "Denis Masharov",
    fontDescription:
      "Marck Script is based on freehand lettering with felt-tip pen by Marck Fogel. The main advantage over other similar fonts is the lack of connections between characters, that allows wide variety of spacing between letters. It can be used for logotypes, headlines and for short pieces of text, wherever you want to create an informal, confident relationship - it is readable, comfortable and welcoming.",
    fontUrl: null,
    wikiEntry: "Russian_language",
    wikiExtract:
      "Russian is an East Slavic language belonging to the Balto-Slavic branch of the Indo-European language family. It is one of the four extant East Slavic languages, and is the native language of the Russian people. Russian was the de facto official language of the former Soviet Union. It has remained an official language of Russia, Belarus, Kazakhstan, and Kyrgyzstan, has constitutional status as the language of inter-ethnic communication in Tajikistan, and is still used as a lingua franca in Ukraine, Moldova, the Caucasus, Central Asia, and to a lesser extent in the Baltic states and Israel.",
    wikiUrl: "https://en.wikipedia.org/wiki/Russian_language",
  },
  {
    lang: "Ukrainian",
    text: "Привіт, світ",
    font: "Comfortaa",
    nativeName: "Українська",
    fontAuthor: "Johan Aakerlund",
    fontDescription:
      "Comfortaa is a rounded geometric sans-serif type design intended for large sizes. It is absolutely free, both for personal and commercial use. If you like it please visit my DeviantArt page and fav it (but obviously only if you like it.) You are also more than welcome to comment about anything you want (I'm open to critique). I obviously would love to see how my font is being used, so feel free to comment with a link to your work, or send me a message. I hope you will enjoy using my font!",
    fontUrl: null,
    wikiEntry: "Ukrainian_language",
    wikiExtract:
      "Ukrainian is an East Slavic language, spoken primarily in Ukraine. It is the first (native) language of a large majority of Ukrainians.",
    wikiUrl: "https://en.wikipedia.org/wiki/Ukrainian_language",
  },
  {
    lang: "Polish",
    text: "Witaj Świecie",
    font: "Lobster",
    nativeName: "Polski",
    fontAuthor: "Impallari Type",
    fontDescription:
      'The Lobster font took a different approach. The new OpenType format gives us the possibility to have multiple versions of each letter, and that\'s exactly what we are doing: Instead of compromising the design of our letters to force connections, we do what lettering artist do. We draw many versions of each letter and a lot of different letter-pairs (aka "ligatures") so we always use the best possible variation of each letter depending of the context of the letter inside each word. All this happens automatically in any browser that supports ligatures.',
    fontUrl: null,
    wikiEntry: "Polish_language",
    wikiExtract:
      "Polish is a West Slavic language of the Lechitic subgroup, within the Indo-European language family, and is written in the Latin script. It is primarily spoken in Poland and serves as the official language of the country, as well as the language of the Polish diaspora around the world. In 2024, there were over 39.7 million Polish native speakers. It ranks as the sixth-most-spoken among languages of the European Union. Polish is subdivided into regional dialects. It maintains strict T–V distinction, obligatory honorifics, and other formalities when addressing individuals.",
    wikiUrl: "https://en.wikipedia.org/wiki/Polish_language",
  },
  {
    lang: "Czech",
    text: "Ahoj světe",
    font: "Kalam",
    nativeName: "Čeština",
    fontAuthor: "Indian Type Foundry",
    fontDescription:
      "Kalam is a handwriting-style typeface supporting the Devanagari and Latin scripts. This is an Open Source font family first published by the Indian Type Foundry in 2014. Even though Kalam's letterforms derive from handwriting, the fonts have each been optimised for text on screen. All in all, the typeface is a design that feels very personal. Like many informal handwriting-style fonts, it appears rather fresh and new when seen on screen or printed on the page. Kalam's letterforms feature a very steep slant from the top right to the bottom left. They are similar to letters used in everyday handwriting, and look like they might have been written with either a thin felt-tip pen, or a ball-point pen. In the Devanagari letterforms, the knotted-terminals are open, but some other counter forms are closed. Features like these strengthen the feeling that text set in this typeface has been written very quickly, in a rapid manner. Kalam is available in three weights: Light, Regular and Bold. Each font contains 1,025 glyphs, which includes many unique Devanagari conjuncts. These ensure full support for the major languages written with the Devanagari script. The Latin component's character set is a basic western one, which enables typesetting in English and the other Western European languages. Lipi Raval and Jonny Pinhorn developed the family for ITF; Raval designed the Devanagari component while she and Pinhorn worked together on the Latin. The Kalam project is led by Indian Type Foundry, a type design foundry based in Ahmedabad, India.",
    fontUrl: "https://github.com/itfoundry/kalam",
    wikiEntry: "Czech_language",
    wikiExtract:
      "Czech, historically known as Bohemian, is a West Slavic language of the Czech–Slovak group, written in Latin script. Spoken by over 12 million people including second-language speakers, it serves as the official language of the Czech Republic. Czech is closely related to Slovak, to the point of high mutual intelligibility, as well as to Polish to a lesser degree. Czech is a fusional language with a rich system of morphology and relatively flexible word order. Its vocabulary has been extensively influenced by Latin and German.",
    wikiUrl: "https://en.wikipedia.org/wiki/Czech_language",
  },
  {
    lang: "Swedish",
    text: "Hej Värld",
    font: "Fjalla One",
    nativeName: "Svenska",
    fontAuthor: "Sorkin Type, Irina Smirnova",
    fontDescription:
      "Fjalla One is a medium contrast display sans serif. Fjalla One has been carefully adjusted to the restrictions of the screen. Despite having display characteristics Fjalla One can be used in a wide range of sizes. Latest upgrade from March 2023 expands the Latin script language coverage and improves the overhall horizontal space for a better readability.",
    fontUrl: "https://github.com/SorkinType/FjallaOne",
    wikiEntry: "Swedish_language",
    wikiExtract:
      "Swedish is a North Germanic language from the Indo-European language family, spoken predominantly in Sweden and parts of Finland. It has at least 10 million native speakers, making it the fourth most spoken Germanic language, and the first among its type in the Nordic countries overall.",
    wikiUrl: "https://en.wikipedia.org/wiki/Swedish_language",
  },
  {
    lang: "Norwegian",
    text: "Hei Verden",
    font: "Sacramento",
    nativeName: "Norsk",
    fontAuthor: "Astigmatic",
    fontDescription:
      "The Sacramento typeface is a monoline, semi-connected script inspired by hand-lettering artist brochure work of the 1950's and 1960's. It stands on a thin line between formal and casual lettering styles, yet it has a commanding presence for headlines and titles.",
    fontUrl: null,
    wikiEntry: "Norwegian_language",
    wikiExtract:
      "Norwegian is a North Germanic language from the Indo-European language family spoken mainly in Norway, where it is an official language. Along with Swedish and Danish, Norwegian forms a dialect continuum of more or less mutually intelligible local and regional varieties; some Norwegian and Swedish dialects, in particular, are very close. These Scandinavian languages, together with Faroese and Icelandic as well as some extinct languages, constitute the North Germanic languages. Faroese and Icelandic are not mutually intelligible with Norwegian in their spoken form because continental Scandinavian has diverged from them. While the two Germanic languages with the greatest numbers of speakers, English and German, have close similarities with Norwegian, neither is mutually intelligible with it. Norwegian is a descendant of Old Norse, the common language of the Germanic peoples living in Scandinavia during the Viking Age.",
    wikiUrl: "https://en.wikipedia.org/wiki/Norwegian_language",
  },
  {
    lang: "Danish",
    text: "Hej Verden",
    font: "Cormorant",
    nativeName: "Dansk",
    fontAuthor: "Christian Thalmann",
    fontDescription:
      "Cormorant is a free display type family developed by Christian Thalmann. The project currently comprises a total of 45 font files spanning 9 different visual styles (Roman, Italic, Infant, Infant Italic, Garamond, Garamond Italic, Upright Cursive, Small Caps, and Unicase) and 5 weights (Light, Regular, Medium, SemiBold, and Bold.) Cormorant was conceived, drawn, spaced, kerned, programmed, interpolated, and produced in its entirety by Christian Thalmann of Catharsis Fonts. For an illustrated presentation and description of the family, please visit its B&#275;hance page . While this project was heavily inspired by Claude Garamont's immortal legacy, Christian did not use any specific font as a starting point or direct reference for the designs. Most glyphs were drawn from scratch; when he needed guidance on a specific character, he searched for the term Garamond and skimmed through the results for a general impression. He is grateful to the creative souls on the Typophile, TypeDrawers and Typografie forums, and Github, for a wealth of knowledge about type design, and for providing a large amount of excellent feedback on Cormorant during its development. He also thanks the tireless folks at Glyphs, in particular Rainer Erich Scheichelbauer of Schriftlabor and Georg Seifert. Special thanks go to Dave Crossland and Google Fonts for making the libre release of this font family possible through generous funding of the development process. The Cormorant project is led by Christian Thalmann, a type designer based in Zurich, Switzerland.",
    fontUrl: "https://github.com/CatharsisFonts/Cormorant",
    wikiEntry: "Danish_language",
    wikiExtract:
      "Danish is a North Germanic language from the Indo-European language family spoken by about 5.5 million people, principally in and around Denmark. Communities of Danish speakers are also found in Greenland, the Faroe Islands, Iceland and the northern German region of Southern Schleswig, where it has minority language status. Minor Danish-speaking communities are also found in Norway, Sweden, the United States, Canada, Brazil, and Argentina.",
    wikiUrl: "https://en.wikipedia.org/wiki/Danish_language",
  },
  {
    lang: "Finnish",
    text: "Hei Maailma",
    font: "Oswald",
    nativeName: "Suomi",
    fontAuthor: "Vernon Adams, Kalapi Gajjar, Cyreal",
    fontDescription:
      "Oswald is a reworking of the classic style historically represented by the 'Alternate Gothic' sans serif typefaces. The characters of Oswald were initially re-drawn and reformed to better fit the pixel grid of standard digital screens. Oswald is designed to be used freely across the internet by web browsers on desktop computers, laptops and mobile devices. - Since the initial launch in 2011, Oswald was updated continually by Vernon Adams until 2014. Vernon added Light and Bold weights, support for more Latin and Cyrillic languages, tightened the spacing and kerning and made many glyph refinements throughout the family based on hundreds of users' feedback. - In 2016 the Latin part of the family was updated by Kalapi Gajjar to complete the work started by Vernon. - In January 2019, it was updated with a variable font Weight axis. - In July 2023, the font was upgraded with a Cyrillic character set expansion, and the rendering of math symbols was improved.",
    fontUrl: "https://github.com/googlefonts/OswaldFont",
    wikiEntry: "Finnish_language",
    wikiExtract:
      "Finnish is a Finnic language of the Uralic language family, spoken by the majority of the population in Finland and by ethnic Finns outside of Finland. Finnish is one of the two official languages of Finland, alongside Swedish. In Sweden, both Finnish and Meänkieli are official minority languages. Kven, which like Meänkieli is mutually intelligible with Finnish, is spoken in the Norwegian counties of Troms and Finnmark by a minority of Finnish descent. However, these are recognized as independent languages in their relative countries for sociohistorical reasons.",
    wikiUrl: "https://en.wikipedia.org/wiki/Finnish_language",
  },
  {
    lang: "Greek",
    text: "Γειά σου Κόσμε",
    font: "Neuton",
    nativeName: "Ελληνικά",
    fontAuthor: "Brian Zick",
    fontDescription:
      'Neuton is a clean, dark, somewhat Dutch-inspired serif font which reminds you a little of Times. It has a large height, short extenders, and a compact width for better screen use, and economy of space. The family will comprise a regular, italic, and cursive, each in five weights and with smallcaps. Two italics &mdash; one will be called "italic", and the other "cursive" &mdash; are uncommon, but very useful. Ever tried emphasizing something already emphasized? Beyond that obvious example, there are other uses. Sometimes a text needs a different flavor or feel. While one roman can work for a variety of texts, the companion italics don\'t always. In more classical or personal documents, a stiff, sober, modern and down-to-earth italic will never work. And in many essays, some of the fancier italics look ridiculous. Who said a roman needs only one companion?',
    fontUrl: null,
    wikiEntry: "Greek_language",
    wikiExtract:
      "Greek is an Indo-European language, constituting an independent Hellenic branch within the Indo-European language family. It is native to the territories that have had populations of Greeks since antiquity: Greece, Cyprus, Egypt, Turkey, Italy, southern Albania, and other regions of the Balkans, Caucasus, the Black Sea coast, and the Eastern Mediterranean. It has the longest documented history of any Indo-European language, spanning at least 3,400 years of written records. Its writing system is the Greek alphabet, which has been used for approximately 2,800 years; previously, Greek was recorded in writing systems such as Linear B and the Cypriot syllabary.",
    wikiUrl: "https://en.wikipedia.org/wiki/Greek_language",
  },
  {
    lang: "Turkish",
    text: "Merhaba Dünya",
    font: "Yanone Kaffeesatz",
    nativeName: "Türkçe",
    fontAuthor: "Yanone, Cyreal",
    fontDescription:
      '"Yanone Kaffeesatz" was first published in 2004 and is Yanone&rsquo;s first ever finished typeface. Its Bold is reminiscent of 1920s coffee house typography, while the rather thin fonts bridge the gap to present times. Lacking self confidence and knowledge about the type scene, Yanone decided to publish the family for free under a Creative Commons License . A decision that should turn out one of the best he ever made. It has been downloaded over 100,000 times to date, and you can witness Kaffeesatz use on German fresh-water gyms, Dubai mall promos and New Zealand McDonalds ads. And of course on coffee and foodstuff packaging and café design around the globe. In 2009 he reworked much of the typeface and it got published in FontShop&rsquo;s FontFont Library under the new name FF Kava . You can read more about it in an extensive article by Yves Peters on FontFeed . Updated in December 2013 with Cyrillic, designed by Sol Matas and Juan Pablo del Peral at HT Fonts .',
    fontUrl: "https://github.com/yanone/kaffeesatz",
    wikiEntry: "Turkish_language",
    wikiExtract:
      "Turkish is the most widely spoken of the Turkic languages, with around 90 million speakers. It is the national language of Turkey and one of two official languages of Cyprus. Significant smaller groups of Turkish speakers also exist in Germany, Austria, Bulgaria, North Macedonia, Greece, other parts of Europe, the South Caucasus, and some parts of Central Asia, Iraq, and Syria. Turkish is the 18th-most spoken language in the world.",
    wikiUrl: "https://en.wikipedia.org/wiki/Turkish_language",
  },
  {
    lang: "Hungarian",
    text: "Helló Világ",
    font: "Righteous",
    nativeName: "Magyar",
    fontAuthor: "Astigmatic",
    fontDescription:
      "Righteous was initially inspired by the all capitals letterforms from the deco posters of Hungarian artist Robert Berény for Modiano. Grid based and geometric in execution, the letterforms are highly readable at a range of point sizes. Unlike that of the inspiration source, Righteous has a full lowercase to increase flexibility of use.",
    fontUrl: null,
    wikiEntry: "Hungarian_language",
    wikiExtract:
      "Hungarian, or Magyar, is a Ugric language of the Uralic language family spoken in Hungary and parts of several neighboring countries. It is the official language of Hungary and one of the 24 official languages of the European Union. Outside Hungary, it is also spoken by Hungarian communities in southern Slovakia, western Ukraine (Transcarpathia), central and western Romania (Transylvania), northern Serbia (Vojvodina), northern Croatia, northeastern Slovenia (Prekmurje), and eastern Austria (Burgenland).",
    wikiUrl: "https://en.wikipedia.org/wiki/Hungarian_language",
  },
  {
    lang: "Romanian",
    text: "Salut Lume",
    font: "Merriweather",
    nativeName: "Română",
    fontAuthor: "Sorkin Type",
    fontDescription:
      "Merriweather was designed to be a text face that is pleasant to read on screens. It features a very large x height, slightly condensed letterforms, a mild diagonal stress, sturdy serifs and open forms. There is also Merriweather Sans , a sans-serif version which closely harmonizes with the weights and styles of this serif family. The Merriweather project is led by Sorkin Type, a type design foundry based in Western Massachaussets, USA.",
    fontUrl: "https://github.com/SorkinType/Merriweather",
    wikiEntry: "Romanian_language",
    wikiExtract:
      "Romanian is the official and main language of Romania and Moldova. Romanian is part of the Eastern Romance sub-branch of Romance languages, a linguistic group that evolved from several dialects of Vulgar Latin which separated from the Western Romance languages in the course of the period from the 5th to the 8th centuries. To distinguish it within the Eastern Romance languages, in comparative linguistics it is called Daco-Romanian as opposed to its closest relatives, Aromanian, Megleno-Romanian, and Istro-Romanian. It is also spoken as a minority language by stable communities in the countries surrounding Romania, and by the large Romanian diaspora. In total, it is spoken by 22 million people as a first language.",
    wikiUrl: "https://en.wikipedia.org/wiki/Romanian_language",
  },
  {
    lang: "Hebrew",
    text: "שלום עולם",
    font: "Frank Ruhl Libre",
    nativeName: "עברית",
    fontAuthor: "Yanek Iontef",
    fontDescription:
      'Frank Ruhl Libre is an open source version of the classic Hebrew typeface Frank Rühl, the most ubiquitous Hebrew typeface in print. Frank Rühl was designed in 1908 by Rafael Frank in collaboration with Auto Rühl of the C. F. Rühl foundry of Leipzig. A final version was released in 1910. Many Israeli books, newspapers and magazines use Frank Rühl as their main body text typeface. Made to accommodate the growing need for typefaces in secular Hebrew writings, the typeface was fitted to modern printing demands and designed to be readable in longform text, with and without vowel marks. Frank Rühl has Sephardi proportions (mem-height is approximately 4½ stroke widths), and is based roughly on Venetian typefaces used by printer Daniel Bomberg. Frank wrote of his design that he wishes to combine the simpleness of Antiqua with the "pleasantness" of Fraktur, leading him to "quieten" the letterforms by reducing the contrast between its thin and thick strokes. This newly designed revival by Yanek Iontef is a family of 7 weights, Light to Black (the original typeface had only one) and in November 2022, it became variable and offers a larger choice of weights.',
    fontUrl: "https://github.com/fontef/frankruhllibre",
    wikiEntry: "Hebrew_language",
    wikiExtract:
      "Hebrew is a Northwest Semitic language within the Afroasiatic language family. A regional dialect of the Canaanite languages, it was natively spoken by the Israelites and remained in regular use as a first language until after 200 CE and as the liturgical language of Judaism and Samaritanism. The language was revived as a spoken language in the 19th century, and is the only successful large-scale example of linguistic revival. It is the only Canaanite language still spoken today. It is also one of the only two Northwest Semitic languages with contemporary speakers, the other being Aramaic.",
    wikiUrl: "https://en.wikipedia.org/wiki/Hebrew_language",
  },
  {
    lang: "Arabic",
    text: "مرحبا بالعالم",
    font: "Lalezar",
    nativeName: "العربية",
    fontAuthor: "Borna Izadpanah",
    fontDescription:
      "Lalezar is an Arabic and Latin display typeface for popular culture. During the 1960s and 1970s a genre of filmmaking emerged in Iran which was commonly known as Film-Farsi. The main focus of the films produced in this period was on popular subjects such as romances, musicals and unrealistic heroic characters. The movie posters designed to represent these films were also intended to exaggerate these elements by the use of provocative imagery and a particular type of display lettering. These bold and dynamic letterforms were so popular and widely used that perhaps one can consider them the most significant component of film posters in that period. Lalezar is an attempt to revive the appealing qualities in this genre of lettering and transform them into a modern Arabic display typeface and a suitable Latin companion. Although the main inspiration comes from a style of lettering that was used to represent the Persian language, here the objective is to design a typeface that can be used for most of the languages that use the Arabic script for their written communication. The Lalezar project is led by Borna Izadpanah, a type designer based in London, UK.",
    fontUrl: "https://github.com/BornaIz/Lalezar",
    wikiEntry: "Arabic_language",
    wikiExtract:
      "Arabic is a Central Semitic language of the Afroasiatic language family spoken primarily in the Arab world. The International Organization for Standardization (ISO) assigns language codes to 32 varieties of Arabic, including its standard form of Literary Arabic, known as Modern Standard Arabic, which is derived from Classical Arabic. This distinction is primarily made by Western linguists; Arabic speakers themselves generally do not distinguish between Modern Standard Arabic and Classical Arabic, but rather refer to both as al-ʿarabiyyatu l-fuṣḥā or simply al-fuṣḥā (اَلْفُصْحَىٰ).",
    wikiUrl: "https://en.wikipedia.org/wiki/Arabic",
  },
  {
    lang: "Persian",
    text: "سلام دنیا",
    font: "Vazirmatn",
    nativeName: "فارسی",
    fontAuthor: "Saber Rastikerdar",
    fontDescription:
      "Vazirmatn is a Persian/Arabic font project that started in 2015 under the name Vazir with the idea of a new simple and legible typeface suitable for web pages and applications. Thanks to DejaVu Sans font (v2.35) published in public domain there was a free software base to start the Vazir project. Although Vazir was a completely different typeface, still the original software was common. For the Latin glyphset, Vazirmatn is combined with Roboto . The last release in June 2022, fixes some bugs, improves the design, and offers a more expanded glyphset. Check out the font's website !",
    fontUrl: "https://github.com/rastikerdar/vazirmatn",
    wikiEntry: "Persian_language",
    wikiExtract:
      "Persian, also known as Farsi, is a Western Iranian language belonging to the Iranian branch of the Indo-Iranian subdivision of the Indo-European languages. Persian is a pluricentric language predominantly spoken and used officially within Iran, Afghanistan, and Tajikistan in three mutually intelligible standard varieties, namely Iranian Persian, Afghan Persian, and Tajiki Persian. It is also spoken natively in the Tajik variety by a significant population in Uzbekistan, as well as within other regions with a Persianate history in the cultural sphere of Greater Iran. It is written officially within Iran and Afghanistan in the Persian alphabet, a derivative of the Arabic script, and within Tajikistan in the Tajik alphabet, a derivative of the Cyrillic script.",
    wikiUrl: "https://en.wikipedia.org/wiki/Persian_language",
  },
  {
    lang: "Urdu",
    text: "ہیلو ورلڈ",
    font: "Noto Nastaliq Urdu",
    nativeName: "اردو",
    fontAuthor: "Google",
    fontDescription:
      "Noto is a global font collection for writing in all modern and ancient languages. Noto Nastaliq Urdu is a cursive, modulated (“serif”) Nastaliq design for texts in the Middle Eastern Arabic script, especially in the Urdu language. It has 1,138 glyphs.",
    fontUrl: null,
    wikiEntry: "Urdu_language",
    wikiExtract:
      "Urdu is an Indo-Aryan language spoken primarily in South Asia. It is the national language and lingua franca of Pakistan. It is also an official Eighth Schedule language in India, the status and cultural heritage of which are recognised by the Constitution of India — alongside having official status in several Indian states.",
    wikiUrl: "https://en.wikipedia.org/wiki/Urdu",
  },
  {
    lang: "Hindi",
    text: "नमस्ते दुनिया",
    font: "Yatra One",
    nativeName: "हिन्दी",
    fontAuthor: "Catherine Leigh Schmidt",
    fontDescription:
      "Yatra One is a Devanagari and Latin libre font inspired by the hand-painted signage of the Mumbai local railway. This heavy weight high-contrast display face preserves the idiosyncratic character of brush-painted signage by featuring angular cuts and open knots. Notably, the Latin adopts a Devanagari brush angle. A Mumbai native, Yatra offers basic Marathi alternates. The Yatra One project is led by Catherine Leigh Schmidt, a type designer based in the USA.",
    fontUrl: "https://github.com/cathschmidt/yatra-one",
    wikiEntry: "Hindi_language",
    wikiExtract:
      "Modern Standard Hindi, commonly referred to as Hindi, is an Indo-Aryan language written in the Devanagari script. It is an official language of the government of India, and is the lingua franca for most of the northern half of India.",
    wikiUrl: "https://en.wikipedia.org/wiki/Hindi",
  },
  {
    lang: "Bengali",
    text: "ওহে বিশ্ব",
    font: "Hind Siliguri",
    nativeName: "বাংলা",
    fontAuthor: "Indian Type Foundry",
    fontDescription:
      "Hind Siliguri is a family of five Bengali fonts, which are part of the Indian Type Foundry’s larger Open Source Hind Multi-Script project. Hind Multi-Script is a type system providing nine stylistically-matching font families – one for each of the following writing systems used in Bangladesh, India, Nepal, and Sri Lanka: Bengali, Devanagari, Gujarati, Gurmukhi, Kannada, Malayalam, Tamil, Telugu, and Sinhala. In addition to Bengali, the Hind Siliguri fonts also include Latin-script characters. Developed explicitly for use in User Interface design, Hind’s letterforms have a humanist-style construction, paired with seemingly monolinear strokes. Most of these strokes have flat endings: they either terminate with a horizontal or a vertical shear, rather than on a diagonal. This helps create clear-cut counter forms between the characters. Additionally, Hind’s letterforms feature open apertures. The entire family feels very legible when used to set text. The Bengali and Latin script components are scaled in relation to each other so that the Bengali headline is more or less at the same visual height as the Latin capital letters share. The exact height of the Bengali headline increases vis à vis the capital height as the family increases in weight, just as the Latin lowercase does. Each font in the Hind Siliguri family has 820 glyphs, including many unique Bengali conjuncts. These ensure support for the languages written with the Bengali script. The Latin component’s character set is Adobe Latin 3, which enables typesetting in English and the other Western European languages. Hind Siliguri is a solid alternate when choosing typefaces for UI design, and a wise selection for electronic display embedding. Jyotish Sonowal designed Hind Siliguri for ITF, who first published the fonts in 2015. Hind Siliguri is named after Siliguri, a city in West Bengal, India. The Hind Siliguri project is led by Indian Type Foundry, a type design foundry based in Ahmedabad, India.",
    fontUrl: "https://github.com/itfoundry/hind-siliguri",
    wikiEntry: "Bengali_language",
    wikiExtract:
      "Bengali, also known by its endonym Bangla, is a classical Indo-Aryan language belonging to the Indo-Iranian branch of the Indo-European language family. It is primarily spoken by the Bengali people, native to the Bengal region as well as in Barak Valley in Assam and Tripura in South Asia. With over 242 million native speakers and another 43 million as second language speakers as of 2025, Bengali is the sixth most spoken native language and the seventh most spoken language by the total number of speakers in the world.",
    wikiUrl: "https://en.wikipedia.org/wiki/Bengali_language",
  },
  {
    lang: "Tamil",
    text: "வணக்கம் உலகம்",
    font: "Kavivanar",
    nativeName: "தமிழ்",
    fontAuthor: "Tharique Azeez",
    fontDescription:
      "Kavivanar is a unique handwriting font that supports the Tamil and Latin scripts. It is somewhat bold, and slightly slanted, a typical Tamil handwriting style where an incline is popular. The letterforms show a calligraphic pen stress that brings an aliveliness to the letters, and provides texture in body text settings. It works well with both body text and display text because of the intriguing rhythm. The slanted letterforms for Tamil are inspired from a manuscript by Kavivanar M. A. Azeez (1948-2002), a Tamil poet and educator who lived in the east coast of Sri Lanka. The Kavivanar project is led by Tharique Azeez, a type designer based in Sri Lanka.",
    fontUrl: "https://github.com/enathu/kavivanar",
    wikiEntry: "Tamil_language",
    wikiExtract:
      "Tamil is a Dravidian language spoken by the Tamil people of South Asia where they are concentrated in Tamil Nadu and Pondicherry in India and the Northern and Eastern Provinces in Sri Lanka. It is one of the longest-surviving classical languages in the world, attested since c. 300 BCE.",
    wikiUrl: "https://en.wikipedia.org/wiki/Tamil_language",
  },
  {
    lang: "Telugu",
    text: "హలో వరల్డ్",
    font: "Ramabhadra",
    nativeName: "తెలుగు",
    fontAuthor: "Purushoth Kumar Guttula",
    fontDescription:
      "Ramabhadra is a Telugu font developed for use in headlines, posters and at large sizes. The letterforms are very round and have a uniform thickness, and the terminals have a small temple shape that appear like a sans-serif design. This font includes unique Telugu conjunct letters. Ramabhadra is named after the Telugu poet from the court of the king Krishnadevaraya, and was one of the Astadiggajalu (literally eight legends) there. The Telugu is designed and developed by Purushoth Kumar Guttula in 2013 and made available by Silicon Andhra under the SIL Open Font License v1.1. The Latin is designed by Steve Matteson at Monotype, an internaional type foundry, and initially published as Arimo . The Ramabhadra project is led by Appaji Ambarisha Darbha, a type designer based in Hyderabad, India.",
    fontUrl: "https://github.com/appajid/ramabhadra",
    wikiEntry: "Telugu_language",
    wikiExtract:
      "Telugu is a Dravidian language native to the Indian states of Andhra Pradesh and Telangana, where it is also the official language. Telugu is a classical language with a recorded history of at least 2,000 years. Spoken by about 100 million people, Telugu is the most widely spoken member of the Dravidian language family, and one of the twenty-two scheduled languages of the Republic of India.",
    wikiUrl: "https://en.wikipedia.org/wiki/Telugu_language",
  },
  {
    lang: "Marathi",
    text: "नमस्कार जग",
    font: "Baloo 2",
    nativeName: "मराठी",
    fontAuthor: "Ek Type",
    fontDescription:
      "A perfect blend of pointy paws in a coat of fur, Baloo is an affable display typeface by Ek Type. Available in nine Indian scripts plus Arabic along with a Latin counterpart, the family is Unicode compliant and libre licensed. Baloo 2 is an extension of the earlier Baloo project. The new Baloo 2 includes additional glyphs, engineering improvements, and has been extended to five weights, ranging from the light footed Regular to the affable ExtraBold. The lighter weights retain Baloo’s characteristic bounce, but they do so slightly, infusing life into each word. This allows the new family to freely fraternise with texts of all sizes and temperaments — be it short bursts or copious reams, demanding headlines or whispering bylines. Carefree yet confident, sprightly yet versatile, the renewed family of Baloo promises to bring warmth to every project. The Baloo 2 project consists of ten font families with unique local names for each of the nine Indic scripts plus Arabic (Baloo Bhaijaan 2). Each family supports one Indic/Arabic script plus Latin, Latin Extended, and Vietnamese. It took a team of committed type designers to rear Baloo and raise it to be the typeface we love. The Gurmukhi is designed by Shuchita Grover; Bangla by Noopur Datye and Sulekha Rajkumar; Odia by Yesha Goshar, Manish Minz, and Shuchita Grover; Gujarati by Noopur Datye and Supriya Tembe; Kannada by Divya Kowshik and Shuchita Grover; Telugu by Maithili Shingre and Omkar Shende; Malayalam by Maithili Shingre and Unnati Kotecha; and Tamil by Aadarsh Rajan. Baloo Devanagari and Latin are collaboratively designed by Ek Type. Font engineering and type design assistance by Girish Dalvi.",
    fontUrl: "https://github.com/EkType/Baloo2",
    wikiEntry: "Marathi_language",
    wikiExtract:
      "Marathi is a classical Indo-Aryan language predominantly spoken by the Marathi people in the Indian state of Maharashtra, and is also spoken in Goa and the territory of Dadra and Nagar Haveli and Daman and Diu. A Marathi-speaking community also exists in Karachi, Pakistan.\nIt is the official language of Maharashtra, and an additional official language in the state of Goa.",
    wikiUrl: "https://en.wikipedia.org/wiki/Marathi_language",
  },
  {
    lang: "Gujarati",
    text: "નમસ્તે વિશ્વ",
    font: "Hind Vadodara",
    nativeName: "ગુજરાતી",
    fontAuthor: "Indian Type Foundry",
    fontDescription:
      "Hind Vadodara is a family of five Gujarati fonts, which are part of the Indian Type Foundry’s larger Open Source Hind Multi-Script project. Hind Multi-Script is a type system providing nine stylistically-matching font families – one for each of the following writing systems used in Bangladesh, India, Nepal, and Sri Lanka: Bengali, Devanagari, Gujarati, Gurmukhi, Kannada, Malayalam, Tamil, Telugu, and Sinhala. In addition to Gujarati, the Hind Vadodara fonts also include Latin-script characters. Developed explicitly for use in User Interface design, Hind’s letterforms have a humanist-style construction, paired with seemingly monolinear strokes. Most of these strokes have flat endings: they either terminate with a horizontal or a vertical shear, rather than on a diagonal. This helps create clear-cut counter forms between the characters. Additionally, Hind’s letterforms feature open apertures and counterforms. The entire family feels very legible when used to set text. The Gujarati and Latin script components are scaled in relation to each other so that the height of the Gujarati base characters is more or less at the same visual height that the Latin capital letters share. The exact height of the Gujarati characters increases vis à vis the capital height as the family increases in weight, just as the Latin lowercase does. Each font in the Hind Vadodara family has 851 glyphs, which include many unique Gujarati conjuncts. These ensure full support for the writing of the Gujarati language. The Latin component’s character set is Adobe Latin 3, which enables typesetting in English and the other Western European languages. Hind Vadodara is a solid alternate when choosing typefaces for UI design, and a wise selection for electronic display embedding. Hitesh Malaviya designed Hind Vadodara for ITF, who first published the fonts in 2015. Hind Vadodara is named after Vadodara, a city in Gujarat, India. The Hind Vadodara project is led by Indian Type Foundry, a type design foundry based in Ahmedabad, India.",
    fontUrl: "https://github.com/itfoundry/hind-vadodara",
    wikiEntry: "Gujarati_language",
    wikiExtract:
      "Gujarati is an Indo-Aryan language native to the Indian state of Gujarat and spoken predominantly by the Gujarati people. Gujarati is descended from Old Gujarati. In India, it is one of the 22 scheduled languages of the Union. It is also the official language in the state of Gujarat, as well as an official language in the union territory of Dadra and Nagar Haveli and Daman and Diu. As of 2011, Gujarati is the 6th most widely spoken language in India by number of native speakers, spoken by 55.5 million speakers which amounts to about 4.5% of the total Indian population. It is the 26th most widely spoken language in the world by number of native speakers as of 2007.",
    wikiUrl: "https://en.wikipedia.org/wiki/Gujarati_language",
  },
  {
    lang: "Punjabi",
    text: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ ਦੁਨਿਆ",
    font: "Baloo Paaji 2",
    nativeName: "ਪੰਜਾਬੀ",
    fontAuthor: "Ek Type",
    fontDescription:
      "A perfect blend of pointy paws in a coat of fur, Baloo is an affable display typeface by Ek Type. Available in nine Indian scripts plus Arabic along with a Latin counterpart, the family is Unicode compliant and libre licensed. Baloo 2 is an extension of the earlier Baloo project. The new Baloo 2 includes additional glyphs, engineering improvements, and has been extended to five weights, ranging from the light footed Regular to the affable ExtraBold. The lighter weights retain Baloo’s characteristic bounce, but they do so slightly, infusing life into each word. This allows the new family to freely fraternise with texts of all sizes and temperaments — be it short bursts or copious reams, demanding headlines or whispering bylines. Carefree yet confident, sprightly yet versatile, the renewed family of Baloo promises to bring warmth to every project. The Baloo 2 project consists of ten font families with unique local names for each of the nine Indic scripts plus Arabic (Baloo Bhaijaan 2). Each family supports one Indic/Arabic script plus Latin, Latin Extended, and Vietnamese. It took a team of committed type designers to rear Baloo and raise it to be the typeface we love. The Gurmukhi is designed by Shuchita Grover; Bangla by Noopur Datye and Sulekha Rajkumar; Odia by Yesha Goshar, Manish Minz, and Shuchita Grover; Gujarati by Noopur Datye and Supriya Tembe; Kannada by Divya Kowshik and Shuchita Grover; Telugu by Maithili Shingre and Omkar Shende; Malayalam by Maithili Shingre and Unnati Kotecha; and Tamil by Aadarsh Rajan. Baloo Devanagari and Latin are collaboratively designed by Ek Type. Font engineering and type design assistance by Girish Dalvi.",
    fontUrl: "https://github.com/EkType/Baloo2",
    wikiEntry: "Punjabi_language",
    wikiExtract:
      "Punjabi, sometimes spelled Panjabi, is an Indo-Aryan language native to the Punjab region of Pakistan and India. It is one of the most widely spoken native languages in the world, with approximately 150 million native speakers.",
    wikiUrl: "https://en.wikipedia.org/wiki/Punjabi_language",
  },
  {
    lang: "Thai",
    text: "สวัสดีชาวโลก",
    font: "Chonburi",
    nativeName: "ไทย",
    fontAuthor: "Cadson Demak",
    fontDescription:
      "Chonburi is a new Thai + Latin typeface for display usage, with an formal looped + serif design. The Chonburi project is led by Cadson Demak, a type foundry in Thailand.",
    fontUrl: "https://github.com/cadsondemak/chonburi",
    wikiEntry: "Thai_language",
    wikiExtract:
      "Thai, or Central Thai, is a Tai language of the Kra–Dai language family spoken by the Central Thai, Mon, Lao Wiang, and Phuan people in Central Thailand and the vast majority of Thai Chinese enclaves throughout the country. It is the sole official language of Thailand.",
    wikiUrl: "https://en.wikipedia.org/wiki/Thai_language",
  },
  {
    lang: "Vietnamese",
    text: "Chào Thế Giới",
    font: "Be Vietnam Pro",
    nativeName: "Tiếng Việt",
    fontAuthor: "Lâm Bảo, Tony Le, ViệtAnh Nguyễn",
    fontDescription:
      "Be Vietnam Pro is a Neo Grotesk which is well suited to tech companies and startups. We have refined Vietnamese letterforms with diacritics adaptive forms and engineered them for the best readability.",
    fontUrl: "https://github.com/bettergui/BeVietnamPro",
    wikiEntry: "Vietnamese_language",
    wikiExtract:
      "Vietnamese is an Austroasiatic language primarily spoken throughout Vietnam where it is the official language. It belongs to the Vietic subgroup of the Austroasiatic language family. Vietnamese is spoken natively by around 86 million people, and as a second language by 11 million people, several times as many as the rest of the Austroasiatic family combined. It is the native language of the Viet people and functions as the second or first language for other ethnicities in Vietnam; it is also used by the Vietnamese diaspora worldwide.",
    wikiUrl: "https://en.wikipedia.org/wiki/Vietnamese_language",
  },
  {
    lang: "Chinese",
    text: "你好，世界",
    font: "Ma Shan Zheng",
    nativeName: "中文",
    fontAuthor: "Ma ShanZheng",
    fontDescription:
      'This script is reminiscent of fonts used to display "yinglian," the short poems and blessings traditionally posted on either side of the entryway to a home or temple. MaShanZheng is heavy and majestic, vital and expansive.',
    fontUrl: "https://github.com/googlefonts/mashanzheng",
    wikiEntry: "Chinese_language",
    wikiExtract:
      "Chinese is the umbrella term for almost all Sinitic languages except Macro-Bai languages, widely recognized as a collection of language varieties, natively spoken by the Han Chinese and some ethnic minorities in Greater China, as well as by communities of the overseas Chinese. Approximately 1.39 billion people, or 17% of the global population, speak one of the varieties of Chinese as their first language.",
    wikiUrl: "https://en.wikipedia.org/wiki/Chinese_language",
  },
  {
    lang: "Japanese",
    text: "こんにちは世界",
    font: "Yuji Syuku",
    nativeName: "日本語",
    fontAuthor: "Kinuta Font Factory",
    fontDescription:
      '"Yuji" is a series of fonts digitizing handwriting by the calligrapher Yuji Kataoka. Yuji Syuku has tradition and dignity, but is also approachable. This design can be widely accepted by the general public. Fonts in the Yuji Family: Yuji Boku Yuji Mai',
    fontUrl: "https://github.com/Kinutafontfactory/Yuji",
    wikiEntry: "Japanese_language",
    wikiExtract:
      "Japanese  is the principal language of the Japonic language family spoken by the Japanese people. It has around 123 million speakers, primarily in Japan, the only country where it is the national language, and within the Japanese diaspora worldwide.",
    wikiUrl: "https://en.wikipedia.org/wiki/Japanese_language",
  },
  {
    lang: "Korean",
    text: "안녕 세상",
    font: "Gaegu",
    nativeName: "한국어",
    fontAuthor: "JIKJI SOFT",
    fontDescription: "Gaegu is a Korean and Latin font",
    fontUrl: null,
    wikiEntry: "Korean_language",
    wikiExtract:
      "Korean is a Koreanic language native to Korea, which makes up the majority of the language's 81 million speakers. It is the official language of both North Korea and South Korea. In the south, the language is known as Hangugeo, and in the north, it is known as Chosŏnŏ. Since the turn of the 21st century, Korean popular culture has spread around the world through globalization and cultural exports. Korean uses the Hangul alphabet.",
    wikiUrl: "https://en.wikipedia.org/wiki/Korean_language",
  },
  {
    lang: "Indonesian",
    text: "Halo Dunia",
    font: "Poppins",
    nativeName: "Bahasa Indonesia",
    fontAuthor: "Indian Type Foundry, Jonny Pinhorn, Ninad Kale",
    fontDescription:
      "Geometric sans serif typefaces have always been popular, and with support for both the Devanagari and Latin writing systems, Poppins is an internationalist addition to the genre. Many of the Latin glyphs (such as the ampersand) are more constructed and rationalist than is typical. The Devanagari design was particularly novel when it was first published in 2015, and was the first ever Devanagari typeface with a range of weights in this genre. Just like the Latin, the Devanagari is based on pure geometry, particularly circles. Each letterform is nearly monolinear, with optical corrections applied to stroke joints where necessary to maintain an even typographic color. The Devanagari base character height and the Latin ascender height are equal; Latin capital letters are shorter than the Devanagari characters, and the Latin x-height is set rather high. The project was developed by Indian Type Foundry (ITF). The Devanagari was initially designed by Ninad Kale, while the Latin was initially designed by Jonny Pinhorn. Following their principal phase of designing the first 5 styles, the typeface was later refined, and expanded to include multiple weights and italics, by the ITF studio team.",
    fontUrl: "https://github.com/itfoundry/poppins",
    wikiEntry: "Indonesian_language",
    wikiExtract:
      "Indonesian is the official and national language of Indonesia. It is a standardized variety of Malay, an Austronesian language that has been used as a lingua franca in the multilingual Indonesian archipelago for centuries. With over 280 million inhabitants, Indonesia ranks as the fourth-most populous nation globally. According to the 2020 census, over 97% of Indonesians are fluent in Indonesian, making it the largest language by number of speakers in Southeast Asia and one of the most widely spoken languages in the world. Indonesian vocabulary has been influenced by various native regional languages such as Javanese, Sundanese, Minangkabau, Balinese, Banjarese, and Buginese, as well as by foreign languages such as Arabic, Dutch, Hokkien, Portuguese, Sanskrit, and English.",
    wikiUrl: "https://en.wikipedia.org/wiki/Indonesian_language",
  },
  {
    lang: "Malay",
    text: "Helo Dunia",
    font: "Quicksand",
    nativeName: "Bahasa Melayu",
    fontAuthor: "Andrew Paglinawan",
    fontDescription:
      "Quicksand is a display sans serif with rounded terminals. The project was initiated by Andrew Paglinawan in 2008 using geometric shapes as a core foundation. It is designed for display purposes but kept legible enough to use in small sizes as well. In 2016, in collaboration with Andrew, it was thoroughly revised by Thomas Jockin to improve the quality. In 2019, Mirko Velimirovic converted the family into a variable font.",
    fontUrl: "https://github.com/andrew-paglinawan/QuicksandFamily",
    wikiEntry: "Malay_language",
    wikiExtract:
      "Malay is an Austronesian language native to several islands of Maritime Southeast Asia and the Malay Peninsula on mainland Asia. The language is an official language of Brunei, Malaysia, and Singapore, where the standardised forms are known as Standard Malay. Within the Malay language family, another standardised form which is known as Indonesian is the official language in Indonesia and also one of the working languages of Timor-Leste. Malay is the ethnic language of Malays in Sumatra, Borneo and surrounding islands in Indonesia, the Malay Peninsula, southeast Philippines, southern Thailand, and the Southern Province of Sri Lanka. Altogether, it is spoken as a first language by about 80 million people and as a first or second language by close to 300 million.",
    wikiUrl: "https://en.wikipedia.org/wiki/Malay_language",
  },
  {
    lang: "Filipino",
    text: "Kamusta Mundo",
    font: "Fredoka",
    nativeName: "Filipino",
    fontAuthor: "Milena Brandão, Hafontia",
    fontDescription:
      "Fredoka is a big, round, bold font that is perfect for adding a little fun to any headline or large text. The initial Latin component was designed by Milena Brandão. The later Hebrew component was designed by Ben Nathan. Fredoka is a variable font with a width and weight axes. The Fredoka project is led by Ben Nathan, a type design foundry based in Israel.",
    fontUrl: "https://github.com/hafontia/Fredoka-One",
    wikiEntry: "Filipino_language",
    wikiExtract:
      "Filipino is the national language of the Philippines, the main lingua franca, and one of the two official languages of the country, along with English. It is a de facto standardized form of the Tagalog language, as spoken and written in Metro Manila and in other urban centers of the archipelago. The 1987 Constitution mandates that Filipino be further enriched and developed by the other languages of the Philippines. This constitutional framework reflects an effort to develop the national language while recognizing the contribution of the Philippines' many regional languages.",
    wikiUrl: "https://en.wikipedia.org/wiki/Filipino_language",
  },
  {
    lang: "Swahili",
    text: "Habari Dunia",
    font: "Ubuntu",
    nativeName: "Kiswahili",
    fontAuthor: "Dalton Maag",
    fontDescription:
      "The Ubuntu Font Family are a set of matching new libre/open fonts in development during 2010-2011. The development is being funded by Canonical Ltd on behalf the wider Free Software community and the Ubuntu project. The technical font design work and implementation is being undertaken by Dalton Maag . Both the final font Truetype/OpenType files and the design files used to produce the font family are distributed under an open licence and you are expressly encouraged to experiment, modify, share and improve. The new Ubuntu Font Family was started to enable the personality of Ubuntu to be seen and felt in every menu, button and dialog. The typeface is sans-serif, uses OpenType features and is manually hinted for clarity on desktop and mobile computing screens. The scope of the Ubuntu Font Family includes all the languages used by the various Ubuntu users around the world in tune with Ubuntu's philosophy which states that every user should be able to use their software in the language of their choice. So the Ubuntu Font Family project will be extended to cover many more written languages. Ubuntu and Canonical are registered trademarks of Canonical Ltd.",
    fontUrl: null,
    wikiEntry: "Swahili_language",
    wikiExtract:
      "Swahili, also known as Kiswahili, is a Bantu language of the Atlantic–Congo language family, originally spoken by the Swahili people, who are found primarily in Tanzania, Kenya, and Mozambique. Estimates of the number of Swahili speakers, including both native and second-language speakers, generally range from 40 million to 200 million. Most native speakers reside in Tanzania and Kenya.",
    wikiUrl: "https://en.wikipedia.org/wiki/Swahili",
  },
  {
    lang: "Zulu",
    text: "Sawubona Mhlaba",
    font: "Mukta",
    nativeName: "isiZulu",
    fontAuthor: "Ek Type",
    fontDescription:
      "Mukta is a Unicode compliant, versatile, contemporary, humanist, mono-linear typeface family available in seven weights, supporting Devanagari, Gujarati, Gurumukhi, Tamil and Latin scripts. This type family is a libre licensed version of Ek's self-titled multi-script project, an ongoing effort to develop a unified type family for each Indian script. The goal is to build one harmonious family across all Indian scripts without letting the visual features of one script dominate over others. This ensures that the fonts can be used successfully for both single and multi-script purposes. Mukta was designed by Girish Dalvi and Yashodeep Gholap. Mukta Vaani was designed by Noopur Datye and Pallavi Karambelkar with support from Sarang Kulkarni and Maithili Shingre. Mukta Malar was designed by Aadarsh Rajan. Mukta Mahee was designed by Shuchita Grover and Noopur Datye. Ek would like to thank Vinay Saynekar, Santosh Kshirsagar, Shubhanand Jog, Yogesh Jahargirdar, Pradnya Naik, Snehal Patil, Omkar Shende and Dave Crossland for their suggestions and feedback during the font design process. Ek would also like to thank faculty and friends from the Industrial Design Centre, IIT Bombay, and from Sir J J Institute of Applied Art, for their support and encouragement. This project is led by Ek Type, a collective of type designers based in Mumbai focused on designing contemporary Indian typefaces.",
    fontUrl: "https://github.com/EkType/Mukta",
    wikiEntry: "Zulu_language",
    wikiExtract:
      "Zulu, also known by its endonym isiZulu, is a Southern Bantu language of the Nguni branch spoken in, and indigenous to, Southern Africa with about 13.56 million native speakers, who primarily inhabit the province of KwaZulu-Natal in South Africa. Zulu is the most widely spoken home language in South Africa, and it is understood by over 50% of its population. It became one of South Africa's 12 official languages in 1994.",
    wikiUrl: "https://en.wikipedia.org/wiki/Zulu_language",
  },
  {
    lang: "Amharic",
    text: "ሰላም ልዑል",
    font: "Noto Sans Ethiopic",
    nativeName: "አማርኛ",
    fontAuthor: "Google",
    fontDescription:
      "Noto is a global font collection for writing in all modern and ancient languages. Noto Sans Ethiopic is an unmodulated (“sans serif”) design for texts in the African Ethiopic script. It has multiple weights and widths, and 566 glyphs.",
    fontUrl: null,
    wikiEntry: "Amharic_language",
    wikiExtract:
      "Amharic is an Ethio-Semitic language, which is a subgrouping within the Semitic branch of the Afroasiatic languages. It is spoken as a first language by the Amhara people, and also serves as a lingua franca for all other metropolitan populations in Ethiopia.",
    wikiUrl: "https://en.wikipedia.org/wiki/Amharic",
  },
  {
    lang: "Georgian",
    text: "გამარჯობა მსოფლიო",
    font: "Noto Sans Georgian",
    nativeName: "ქართული",
    fontAuthor: "Google",
    fontDescription:
      "Noto is a global font collection for writing in all modern and ancient languages. Noto Sans Georgian is an unmodulated (“sans serif”) design for texts in the European Georgian script. It has multiple weights and widths, and 225 glyphs.",
    fontUrl: null,
    wikiEntry: "Georgian_language",
    wikiExtract:
      "Georgian is the most widely spoken Kartvelian language. It is the official language of Georgia and the native or primary language of 88% of its population. It also serves as the literary language or lingua franca for speakers of related languages. Its speakers amount to approximately 3.8 million. Georgian is written with its own unique Georgian scripts, alphabetical systems of unclear origin.",
    wikiUrl: "https://en.wikipedia.org/wiki/Georgian_language",
  },
  {
    lang: "Armenian",
    text: "Բարեւ աշխարհ",
    font: "Noto Sans Armenian",
    nativeName: "Հայերեն",
    fontAuthor: "Google",
    fontDescription:
      "Noto is a global font collection for writing in all modern and ancient languages. Noto Sans Armenian is an unmodulated (“sans serif”) design for texts in the European Armenian script. It has multiple weights and widths, and 107 glyphs.",
    fontUrl: null,
    wikiEntry: "Armenian_language",
    wikiExtract:
      "Armenian is the sole member of an independent branch in the Indo-European language family. It is the native language of the Armenian people and the official language of Armenia. Historically spoken in the Armenian highlands, today Armenian is also widely spoken throughout the Armenian diaspora. Armenian is written in its own writing system, the Armenian alphabet, introduced in 405 AD by Mesrop Mashtots. The estimated number of Armenian speakers worldwide is between five and seven million.",
    wikiUrl: "https://en.wikipedia.org/wiki/Armenian_language",
  },
  {
    lang: "Icelandic",
    text: "Halló Heimur",
    font: "EB Garamond",
    nativeName: "Íslenska",
    fontAuthor: "Georg Duffner, Octavio Pardo",
    fontDescription:
      "EB Garamond is intended to be an excellent, classical, Garamond. It is a community project to create a revival of Claude Garamont’s famous humanist typefaces from the mid-16th century. This digital version reproduces the original design by Claude Garamont closely: The source for the letterforms is a scan of a specimen known as the “Berner specimen,” which was composed in 1592 by Conrad Berner, the son-in-law of Christian Egenolff and his successor at the Egenolff print office. This specimen shows Garamont’s roman and Granjon’s italic types at different sizes. Hence the name of this project: Egenolff-Berner Garamond. Why another Garamond? That typeface is a key moment in the history of typography, and European type designers have been reacting to this work ever since. It is probably the most revived typeface in the world and many are excellent. In the world of free/libre culture, however, only a few Garamond-inspired types exist, and none share the scope of this project. In November 2019, the family has been updated to a variable font family. This version of the project was originally led by Octavio Pardo ( github.com/octaviopardo/EBGaramond12 ), which is forked from Georg Duffner's original project github.com/georgd/EB-Garamond . It is currently maintained with contributions from the wider community, including the Google Fonts team.",
    fontUrl: "https://github.com/octaviopardo/EBGaramond12",
    wikiEntry: "Icelandic_language",
    wikiExtract:
      "Icelandic or Icelandish is a North Germanic language from the Indo-European language family spoken by about 390,000 people, the vast majority of whom live in Iceland, where it is the national language. Since it is a West Scandinavian language, it is most closely related to Faroese, western Norwegian dialects, and the extinct language Norn. It is not mutually intelligible with the continental Scandinavian languages and is more distinct from the most widely spoken Germanic languages, English and German. The written forms of Icelandic and Faroese are very similar, but their spoken forms are not mutually intelligible.",
    wikiUrl: "https://en.wikipedia.org/wiki/Icelandic_language",
  },
  {
    lang: "Irish",
    text: "Dia duit Domhan",
    font: "Almendra",
    nativeName: "Gaeilge",
    fontAuthor: "Ana Sanfelippo",
    fontDescription:
      "Almendra is a typeface design based on calligraphy. Its style is related to the chancery and gothic hands. It is intended to be used in long texts, especially young children's literature. Almendra's black and white forms generate a nice texture in small sizes, while its many details appear when given the opportunity in huge sizes. The main challenge was to make compatible dialectic elements, especially balancing legibility and formal identity. Almendra was selected to be exhibited at the Bienal Iberoamericana de Diseo in 2010 and was part of the German editorial project Typodarium 2012. This is the Regular family, and there are sister Small Cap and Display families.",
    fontUrl: null,
    wikiEntry: "Irish_language",
    wikiExtract:
      "Irish, also known as Irish Gaelic or simply Gaelic, is a Celtic language within the Indo-European language family native to the Irish people and indigenous to the island of Ireland. It was the first language of the majority of the population until the 19th century, when English gradually became dominant, particularly in the last decades of the century.",
    wikiUrl: "https://en.wikipedia.org/wiki/Irish_language",
  },
  {
    lang: "Welsh",
    text: "Helo Byd",
    font: "Grenze",
    nativeName: "Cymraeg",
    fontAuthor: "Omnibus-Type",
    fontDescription:
      "Grenze is a large text family which features nine weights with matching italics. It draws inspiration from Roman and Blackletter typefaces. It was originally designed to be used in magazines.",
    fontUrl: "https://github.com/Omnibus-Type/Grenze",
    wikiEntry: "Welsh_language",
    wikiExtract:
      "Welsh is a Celtic language of the Brittonic subgroup that is native to the Welsh people. Welsh is spoken natively in Wales by about 18% of the population, by some in England, and in Y Wladfa. Historically, it has also been known in English as British, Cambrian, Cambric and Cymric.",
    wikiUrl: "https://en.wikipedia.org/wiki/Welsh_language",
  },
  {
    lang: "Hawaiian",
    text: "Aloha Honua",
    font: "Pacifico",
    nativeName: "ʻŌlelo Hawaiʻi",
    fontAuthor:
      "Vernon Adams, Jacques Le Bailly, Botjo Nikoltchev, Ani Petrova",
    fontDescription:
      "Aloha! Pacifico is an original and fun brush script handwriting font by Vernon Adams which was inspired by the 1950s American surf culture in 2011. It was redrawn by Jacques Le Bailly at Baron von Fonthausen in 2016. It was expanded to Cyrillic by Botjo Nikoltchev and Ani Petrova at Lettersoup in 2017. The Pacifico project was commissioned by Google from Vernon Adams , an English type designer who lived in San Clemente, Los Angeles, USA.",
    fontUrl: "https://github.com/googlefonts/Pacifico",
    wikiEntry: "Hawaiian_language",
    wikiExtract:
      "Hawaiian is a critically endangered Polynesian language of the Austronesian language family, originating in and native to the Hawaiian Islands. It is the historic native language of the Hawaiian people. The Hawaiian language, along with the English language, are the official languages of the U.S. state of Hawaiʻi. King Kamehameha III established the first Hawaiian-language constitution in 1839 and 1840.",
    wikiUrl: "https://en.wikipedia.org/wiki/Hawaiian_language",
  },
  {
    lang: "Scottish Gaelic",
    text: "Halò Shaoghail",
    font: "IM Fell English",
    nativeName: "Gàidhlig",
    fontAuthor: "Igino Marini",
    fontDescription:
      'STANLEY MORISON, in his “THE ROMAN ITALIC & BLACK LETTER bequeathed to the University of Oxford by Dr. JOHN FELL” (Oxford University Press, Oxford, 1951), began this way the description of the FELL TYPES: "The Oxford Printing house holds the oldest punches and matrices surviving in England, material not only treasured but used; types cast therefrom being employed for the composition of books and other printed matter." It’s essentially the inheritance of the will of John Fell, D.D. who died on 10 July 1686, aged 61, Bishop of Oxford and Dean of Christ Church. Since 1668 he spent his life creating a ‘learned press’ in Oxford, endowed with invaluable equipment, setting a high standard for the future of his publishing. He wrote: "The foundation of all successe must be layd in doing things well, and I am sure that will not be don with English letters" (to Jenkins, 2 Dec. 1672). So he collectected types available in the foreign market: mainly France, Holland and Germany. Fell decided to develop types in its own ‘workhouse’ too. Peter De Walpergen became his personal type-founder. Says Harry Carter in “THE FELL TYPES. What has been done in and about them” (Oxford University Press, New York, 1968): "He was born at Frankfurt am Main, descended from a Protestant refugee from Antwerp. He was engaged by the Dutch East India Company in 1671 to work as a type-founder and printer in Java. The comparative crudity of his letter design makes it seems unlikely that he had been trained to cut punches." John Fell entrusted him with the cut of the larger bodies: Great Primer Roman and Italic; Double Pica Roman and Italic; French Canon Roman and Italic; Three Lines Pica Roman. De Walpergen cut other types and letters for existing types to be harmonized with the larger bodies. Commented Morison: "The design of these large Fell Types is difficult to characterize and impossible wholly to approve. It has some affinity with the Dutch work of the second half of the seventeenth century, especially with the bigger size of type shown in the Widow Elsevier’s specimen-sheet of types attributed to Christoffel van Dyck; but De Walpergen went much further in the contrasting weight of thick and thin strokes and his design has crudities about it of which Van Dyck would not have been capable." In 1686 John Fell died. In his “will” he bequeathed the entire collection of type to the University of Oxford. Remembers Morison: "This entire collection of ‘founding Materialls of Punchions Matrices Moulds’ was ‘got together’ by John Fell ‘and others at great expense’. Fell’s instructions that they ‘be carefully kept together’ by his executors were duly observed. The Chancellor, Masters, and Scholars of the University of Oxford honourably played their part in sustaining the interests of ‘learning and printing’ and thus the collection was not dissipated but manteined entire."',
    fontUrl: null,
    wikiEntry: "Scottish_Gaelic_language",
    wikiExtract:
      "Scottish Gaelic, also known as Scots Gaelic or simply Gaelic, is a Celtic language native to the Gaels of Scotland. As a member of the Goidelic branch of Celtic, Scottish Gaelic, alongside both Irish and Manx, developed out of Old Irish. It became a distinct spoken language sometime in the 13th century in the Middle Irish period, although a common literary language was shared by the Gaels of both Ireland and Scotland until well into the 17th century. Most of modern Scotland was once Gaelic-speaking, as evidenced especially by Gaelic-language place names.",
    wikiUrl: "https://en.wikipedia.org/wiki/Scottish_Gaelic",
  },
  {
    lang: "Latin",
    text: "Salve Mundi",
    font: "Cinzel",
    nativeName: "Latina",
    fontAuthor: "Natanael Gama",
    fontDescription:
      "Cinzel is a typeface inspired in first century roman inscriptions, and based on classical proportions. However it’s not a simple revivalism, while it conveys all the ancient history of the latin alphabet it also merges a contemporary feel onto it.",
    fontUrl: "https://github.com/NDISCOVER/Cinzel",
    wikiEntry: "Latin_language",
    wikiExtract:
      "Latin is a classical language belonging to the Italic branch of the Indo-European languages. Latin was originally spoken by the Latins in Latium, the lower Tiber area around Rome, Italy. Through the expansion of the Roman Republic, it became the dominant language in the Italian Peninsula and subsequently throughout the Roman Empire. It has greatly influenced many languages, including English, having contributed many words to the English lexicon, particularly after the Christianisation of the Anglo-Saxons and the Norman Conquest. Latin roots appear frequently in the technical vocabulary used by fields such as theology, the sciences, medicine, and law.",
    wikiUrl: "https://en.wikipedia.org/wiki/Latin",
  },
  {
    lang: "Esperanto",
    text: "Saluton Mondo",
    font: "Exo 2",
    nativeName: "Esperanto",
    fontAuthor: "Natanael Gama",
    fontDescription:
      "Exo 2 is a complete redrawing of Exo , a contemporary geometric sans serif typeface that tries to convey a technological/futuristic feeling while keeping an elegant design. Exo is a very versatile font, so it has 9 weights (the maximum on the web) and each with a true italic version. Exo 2 has a more organic look that will perform much better at small text sizes and in long texts. In March 2020, the family has been updated to a variable font family.",
    fontUrl: "https://github.com/googlefonts/Exo-2.0",
    wikiEntry: "Esperanto_language",
    wikiExtract:
      "Esperanto is the world's most widely spoken constructed auxiliary language. Created by L. L. Zamenhof in 1887 as 'the International Language', it is intended to be a universal second language for international communication. Esperanto culture is grounded in the idea that people can interact on an equal footing across language barriers, without linguistic hierarchies, and with respect for linguistic and cultural diversity. He described the language in Dr. Esperanto's International Language, which he published under the pseudonym Doktoro Esperanto. Early adopters of the language liked the name Esperanto so much, they soon used it to describe the language itself.",
    wikiUrl: "https://en.wikipedia.org/wiki/Esperanto",
  },
];

export const languages: LanguageWord[] = languagesEnriched;
