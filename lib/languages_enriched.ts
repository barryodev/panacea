import type { LanguageWord } from "./languages";

export interface EnrichedLanguageWord extends LanguageWord {
  fontAuthor: string | null;
  fontDescription: string | null;
  wikiEntry: string | null;
}

export const languagesEnriched: EnrichedLanguageWord[] = [
  {
    "lang": "English",
    "text": "Hello World",
    "font": "Permanent Marker",
    "fontAuthor": "Font Diner",
    "fontDescription": "Permanent Marker represents the look and feel of a favorite writing instrument.",
    "wikiEntry": "English_language"
  },
  {
    "lang": "German",
    "text": "Hallo Welt",
    "font": "UnifrakturMaguntia",
    "fontAuthor": "j. \\'mach\\' wust",
    "fontDescription": "UnifrakturMaguntia is based on Peter Wiegel’s font Berthold Mainzer Fraktur which is in turn based on a 1901 typeface by Carl Albert Fahrenwaldt. While the glyph design of Peter Wiegel’s font has hardly been changed at all, UnifrakturMaguntia uses smart font technologies for displaying the font’s ligatures (OpenType, Apple Advanced Typography and SIL Graphite). An experimental feature is the distinction of good blackletter typography between required ligatures ‹ch, ck, ſt, tz› that must be kept when letterspacing is increased, and regular ligatures (for instance, ‹fi, fl›) that are broken up when letterspacing is increased. UnifrakturMaguntia is optimized for @font-face linking on the internet by combining standards compliance with a permissive license. UnifrakturMaguntia has first been published in 2010 at UnifrakturMaguntia . It has been edited with FontForge, the libre outline font editor. OpenType features have been added with FontForge directly. AAT features have been added with ftxenhancer of the Apple Font Tools. Graphite has been added with the Graphite Compiler. For more information about AAT and Graphite, you may want to check out the Free Tengwar Font Project: Adding Graphite and AAT to a font .",
    "wikiEntry": "German_language"
  },
  {
    "lang": "French",
    "text": "Bonjour le monde",
    "font": "Playfair Display",
    "fontAuthor": "Claus Eggers Sørensen",
    "fontDescription": "Playfair is a transitional design. In the European Enlightenment in the late 18th century, broad nib quills were replaced by pointed steel pens as the popular writing tool of the day. Together with developments in printing technology, ink, and paper making, it became fashionable to print letterforms of high contrast and delicate hairlines that were increasingly detached from the written letterforms. This design lends itself to this period, and while it is not a revival of any particular design, it takes influence from the designs of John Baskerville and from ‘Scotch Roman’ designs. This typeface was initially published in 2011, and had a major update in 2017. Being a Display (large size) design in the transitional genre, functionally and stylistically it can accompany Georgia or Gelasio for body text. It was succeeded in 2023 by the complete Playfair design, which as a variable font includes body text designs in the optical size axis. This is the main family, with a sibling Playfair Display SC small caps family. The main family downloaded font files include a full set of small caps, common ligatures, and discretionary ligatures. The Playfair project is led by Claus Eggers Sørensen, a type designer based in Amsterdam, Netherlands. To contribute, see github.com/clauseggers/Playfair-Display",
    "wikiEntry": "French_language"
  },
  {
    "lang": "Spanish",
    "text": "Hola Mundo",
    "font": "Alfa Slab One",
    "fontAuthor": "JM Solé",
    "fontDescription": "Alfa Slab One is a contemporary take on the Six-lines Pica Egyptian created by Robert Thorne for the Thorowgood Foundry in 1921. Although initially based on that model, Alfa Slab One was designed with an extreme stem weight, big serifs, more stem contrast and gradual terminals with a single serif. All this attributes give Alfa Slab One a contemporary look with extreme black density.",
    "wikiEntry": "Spanish_language"
  },
  {
    "lang": "Italian",
    "text": "Ciao Mondo",
    "font": "Italiana",
    "fontAuthor": "Santiago Orozco",
    "fontDescription": "Italiana was designed for use in the headlines of newspapers and magazines. Italiana is inspired by the calligraphy of the Italian masters. It is suitable for design solutions that require elegance and sophistication. It was conceived with modern proportions that make it great for economical typesetting both on paper and on screen. The Italiana family is in progress and is being regularly improved. If you have a request, wish to contribute improvements or even fund specific features, simply contact Santiago Orozco . You can follow Santiago on Twitter, @Typemade .",
    "wikiEntry": "Italian_language"
  },
  {
    "lang": "Portuguese",
    "text": "Olá Mundo",
    "font": "Bilbo",
    "fontAuthor": "Robert Leuschke",
    "fontDescription": "Bilbo is a very legible calligraphic style that has a masculine feel. It can be used for more than just display. Use Bilbo in body copy that requires added warmth to a message. Bilbo comes with Latin Character sets including Western, Central, and Vietnamese language support. To contribute, see github.com/googlefonts/bilbo .",
    "wikiEntry": "Portuguese_language"
  },
  {
    "lang": "Dutch",
    "text": "Hallo Wereld",
    "font": "Josefin Sans",
    "fontAuthor": "Santiago Orozco",
    "fontDescription": "The idea of this typeface is to be geometric, elegant, with a vintage feeling, for use at larger sizes. It is inspired by geometric sans serif designs from the 1920s. The x-height is half way from baseline to cap height, an unusual proportion. There is a sister family, Josefin Slab In December 2019, it was updated with a Variable Font \"Weight\" axis. To contribute, see github.com/googlefonts/josefinsans .",
    "wikiEntry": "Dutch_language"
  },
  {
    "lang": "Russian",
    "text": "Привет, мир",
    "font": "Marck Script",
    "fontAuthor": "Denis Masharov",
    "fontDescription": "Marck Script is based on freehand lettering with felt-tip pen by Marck Fogel. The main advantage over other similar fonts is the lack of connections between characters, that allows wide variety of spacing between letters. It can be used for logotypes, headlines and for short pieces of text, wherever you want to create an informal, confident relationship - it is readable, comfortable and welcoming.",
    "wikiEntry": "Russian_language"
  },
  {
    "lang": "Ukrainian",
    "text": "Привіт, світ",
    "font": "Comfortaa",
    "fontAuthor": "Johan Aakerlund",
    "fontDescription": "Comfortaa is a rounded geometric sans-serif type design intended for large sizes. It is absolutely free, both for personal and commercial use. If you like it please visit my DeviantArt page and fav it (but obviously only if you like it.) You are also more than welcome to comment about anything you want (I'm open to critique). I obviously would love to see how my font is being used, so feel free to comment with a link to your work, or send me a message. I hope you will enjoy using my font!",
    "wikiEntry": "Ukrainian_language"
  },
  {
    "lang": "Polish",
    "text": "Witaj Świecie",
    "font": "Lobster",
    "fontAuthor": "Impallari Type",
    "fontDescription": "The Lobster font took a different approach. The new OpenType format gives us the possibility to have multiple versions of each letter, and that's exactly what we are doing: Instead of compromising the design of our letters to force connections, we do what lettering artist do. We draw many versions of each letter and a lot of different letter-pairs (aka \"ligatures\") so we always use the best possible variation of each letter depending of the context of the letter inside each word. All this happens automatically in any browser that supports ligatures.",
    "wikiEntry": "Polish_language"
  },
  {
    "lang": "Czech",
    "text": "Ahoj světe",
    "font": "Kalam",
    "fontAuthor": "Indian Type Foundry",
    "fontDescription": "Kalam is a handwriting-style typeface supporting the Devanagari and Latin scripts. This is an Open Source font family first published by the Indian Type Foundry in 2014. Even though Kalam's letterforms derive from handwriting, the fonts have each been optimised for text on screen. All in all, the typeface is a design that feels very personal. Like many informal handwriting-style fonts, it appears rather fresh and new when seen on screen or printed on the page. Kalam's letterforms feature a very steep slant from the top right to the bottom left. They are similar to letters used in everyday handwriting, and look like they might have been written with either a thin felt-tip pen, or a ball-point pen. In the Devanagari letterforms, the knotted-terminals are open, but some other counter forms are closed. Features like these strengthen the feeling that text set in this typeface has been written very quickly, in a rapid manner. Kalam is available in three weights: Light, Regular and Bold. Each font contains 1,025 glyphs, which includes many unique Devanagari conjuncts. These ensure full support for the major languages written with the Devanagari script. The Latin component's character set is a basic western one, which enables typesetting in English and the other Western European languages. Lipi Raval and Jonny Pinhorn developed the family for ITF; Raval designed the Devanagari component while she and Pinhorn worked together on the Latin. The Kalam project is led by Indian Type Foundry, a type design foundry based in Ahmedabad, India. To contribute, see github.com/itfoundry/kalam Updated July 2015: Updated to v2.001 with improved OpenType features.",
    "wikiEntry": "Czech_language"
  },
  {
    "lang": "Swedish",
    "text": "Hej Värld",
    "font": "Fjalla One",
    "fontAuthor": "Sorkin Type, Irina Smirnova",
    "fontDescription": "Fjalla One is a medium contrast display sans serif. Fjalla One has been carefully adjusted to the restrictions of the screen. Despite having display characteristics Fjalla One can be used in a wide range of sizes. Latest upgrade from March 2023 expands the Latin script language coverage and improves the overhall horizontal space for a better readability. To contribute, see github.com/SorkinType/FjallaOne .",
    "wikiEntry": "Swedish_language"
  },
  {
    "lang": "Norwegian",
    "text": "Hei Verden",
    "font": "Sacramento",
    "fontAuthor": "Astigmatic",
    "fontDescription": "The Sacramento typeface is a monoline, semi-connected script inspired by hand-lettering artist brochure work of the 1950's and 1960's. It stands on a thin line between formal and casual lettering styles, yet it has a commanding presence for headlines and titles. To contribute to the project contact Brian J. Bonislawsky .",
    "wikiEntry": "Norwegian_language"
  },
  {
    "lang": "Danish",
    "text": "Hej Verden",
    "font": "Cormorant",
    "fontAuthor": "Christian Thalmann",
    "fontDescription": "Cormorant is a free display type family developed by Christian Thalmann. The project currently comprises a total of 45 font files spanning 9 different visual styles (Roman, Italic, Infant, Infant Italic, Garamond, Garamond Italic, Upright Cursive, Small Caps, and Unicase) and 5 weights (Light, Regular, Medium, SemiBold, and Bold.) Cormorant was conceived, drawn, spaced, kerned, programmed, interpolated, and produced in its entirety by Christian Thalmann of Catharsis Fonts. For an illustrated presentation and description of the family, please visit its B&#275;hance page . While this project was heavily inspired by Claude Garamont's immortal legacy, Christian did not use any specific font as a starting point or direct reference for the designs. Most glyphs were drawn from scratch; when he needed guidance on a specific character, he searched for the term Garamond and skimmed through the results for a general impression. He is grateful to the creative souls on the Typophile, TypeDrawers and Typografie forums, and Github, for a wealth of knowledge about type design, and for providing a large amount of excellent feedback on Cormorant during its development. He also thanks the tireless folks at Glyphs, in particular Rainer Erich Scheichelbauer of Schriftlabor and Georg Seifert. Special thanks go to Dave Crossland and Google Fonts for making the libre release of this font family possible through generous funding of the development process. The Cormorant project is led by Christian Thalmann, a type designer based in Zurich, Switzerland. To contribute, see github.com/CatharsisFonts/Cormorant",
    "wikiEntry": "Danish_language"
  },
  {
    "lang": "Finnish",
    "text": "Hei Maailma",
    "font": "Oswald",
    "fontAuthor": "Vernon Adams, Kalapi Gajjar, Cyreal",
    "fontDescription": "Oswald is a reworking of the classic style historically represented by the 'Alternate Gothic' sans serif typefaces. The characters of Oswald were initially re-drawn and reformed to better fit the pixel grid of standard digital screens. Oswald is designed to be used freely across the internet by web browsers on desktop computers, laptops and mobile devices. - Since the initial launch in 2011, Oswald was updated continually by Vernon Adams until 2014. Vernon added Light and Bold weights, support for more Latin and Cyrillic languages, tightened the spacing and kerning and made many glyph refinements throughout the family based on hundreds of users' feedback. - In 2016 the Latin part of the family was updated by Kalapi Gajjar to complete the work started by Vernon. - In January 2019, it was updated with a variable font Weight axis. - In July 2023, the font was upgraded with a Cyrillic character set expansion, and the rendering of math symbols was improved. To contribute, see github.com/googlefonts/OswaldFont",
    "wikiEntry": "Finnish_language"
  },
  {
    "lang": "Greek",
    "text": "Γειά σου Κόσμε",
    "font": "Neuton",
    "fontAuthor": "Brian Zick",
    "fontDescription": "Neuton is a clean, dark, somewhat Dutch-inspired serif font which reminds you a little of Times. It has a large height, short extenders, and a compact width for better screen use, and economy of space. The family will comprise a regular, italic, and cursive, each in five weights and with smallcaps. Two italics &mdash; one will be called \"italic\", and the other \"cursive\" &mdash; are uncommon, but very useful. Ever tried emphasizing something already emphasized? Beyond that obvious example, there are other uses. Sometimes a text needs a different flavor or feel. While one roman can work for a variety of texts, the companion italics don't always. In more classical or personal documents, a stiff, sober, modern and down-to-earth italic will never work. And in many essays, some of the fancier italics look ridiculous. Who said a roman needs only one companion?",
    "wikiEntry": "Greek_language"
  },
  {
    "lang": "Turkish",
    "text": "Merhaba Dünya",
    "font": "Yanone Kaffeesatz",
    "fontAuthor": "Yanone, Cyreal",
    "fontDescription": "\"Yanone Kaffeesatz\" was first published in 2004 and is Yanone&rsquo;s first ever finished typeface. Its Bold is reminiscent of 1920s coffee house typography, while the rather thin fonts bridge the gap to present times. Lacking self confidence and knowledge about the type scene, Yanone decided to publish the family for free under a Creative Commons License . A decision that should turn out one of the best he ever made. It has been downloaded over 100,000 times to date, and you can witness Kaffeesatz use on German fresh-water gyms, Dubai mall promos and New Zealand McDonalds ads. And of course on coffee and foodstuff packaging and café design around the globe. In 2009 he reworked much of the typeface and it got published in FontShop&rsquo;s FontFont Library under the new name FF Kava . You can read more about it in an extensive article by Yves Peters on FontFeed . Updated in December 2013 with Cyrillic, designed by Sol Matas and Juan Pablo del Peral at HT Fonts . To contribute, see github.com/yanone/kaffeesatz .",
    "wikiEntry": "Turkish_language"
  },
  {
    "lang": "Hungarian",
    "text": "Helló Világ",
    "font": "Righteous",
    "fontAuthor": "Astigmatic",
    "fontDescription": "Righteous was initially inspired by the all capitals letterforms from the deco posters of Hungarian artist Robert Berény for Modiano. Grid based and geometric in execution, the letterforms are highly readable at a range of point sizes. Unlike that of the inspiration source, Righteous has a full lowercase to increase flexibility of use.",
    "wikiEntry": "Hungarian_language"
  },
  {
    "lang": "Romanian",
    "text": "Salut Lume",
    "font": "Merriweather",
    "fontAuthor": "Sorkin Type",
    "fontDescription": "Merriweather was designed to be a text face that is pleasant to read on screens. It features a very large x height, slightly condensed letterforms, a mild diagonal stress, sturdy serifs and open forms. There is also Merriweather Sans , a sans-serif version which closely harmonizes with the weights and styles of this serif family. The Merriweather project is led by Sorkin Type, a type design foundry based in Western Massachaussets, USA. To contribute, see github.com/SorkinType/Merriweather",
    "wikiEntry": "Romanian_language"
  },
  {
    "lang": "Hebrew",
    "text": "שלום עולם",
    "font": "Frank Ruhl Libre",
    "fontAuthor": "Yanek Iontef",
    "fontDescription": "Frank Ruhl Libre is an open source version of the classic Hebrew typeface Frank Rühl, the most ubiquitous Hebrew typeface in print. Frank Rühl was designed in 1908 by Rafael Frank in collaboration with Auto Rühl of the C. F. Rühl foundry of Leipzig. A final version was released in 1910. Many Israeli books, newspapers and magazines use Frank Rühl as their main body text typeface. Made to accommodate the growing need for typefaces in secular Hebrew writings, the typeface was fitted to modern printing demands and designed to be readable in longform text, with and without vowel marks. Frank Rühl has Sephardi proportions (mem-height is approximately 4½ stroke widths), and is based roughly on Venetian typefaces used by printer Daniel Bomberg. Frank wrote of his design that he wishes to combine the simpleness of Antiqua with the \"pleasantness\" of Fraktur, leading him to \"quieten\" the letterforms by reducing the contrast between its thin and thick strokes. This newly designed revival by Yanek Iontef is a family of 7 weights, Light to Black (the original typeface had only one) and in November 2022, it became variable and offers a larger choice of weights. To contribute, see github.com/fontef/frankruhllibre .",
    "wikiEntry": "Hebrew_language"
  },
  {
    "lang": "Arabic",
    "text": "مرحبا بالعالم",
    "font": "Lalezar",
    "fontAuthor": "Borna Izadpanah",
    "fontDescription": "Lalezar is an Arabic and Latin display typeface for popular culture. During the 1960s and 1970s a genre of filmmaking emerged in Iran which was commonly known as Film-Farsi. The main focus of the films produced in this period was on popular subjects such as romances, musicals and unrealistic heroic characters. The movie posters designed to represent these films were also intended to exaggerate these elements by the use of provocative imagery and a particular type of display lettering. These bold and dynamic letterforms were so popular and widely used that perhaps one can consider them the most significant component of film posters in that period. Lalezar is an attempt to revive the appealing qualities in this genre of lettering and transform them into a modern Arabic display typeface and a suitable Latin companion. Although the main inspiration comes from a style of lettering that was used to represent the Persian language, here the objective is to design a typeface that can be used for most of the languages that use the Arabic script for their written communication. The Lalezar project is led by Borna Izadpanah, a type designer based in London, UK. To contribute, see github.com/BornaIz/Lalezar",
    "wikiEntry": "Arabic_language"
  },
  {
    "lang": "Persian",
    "text": "سلام دنیا",
    "font": "Vazirmatn",
    "fontAuthor": "Saber Rastikerdar",
    "fontDescription": "Vazirmatn is a Persian/Arabic font project that started in 2015 under the name Vazir with the idea of a new simple and legible typeface suitable for web pages and applications. Thanks to DejaVu Sans font (v2.35) published in public domain there was a free software base to start the Vazir project. Although Vazir was a completely different typeface, still the original software was common. For the Latin glyphset, Vazirmatn is combined with Roboto . The last release in June 2022, fixes some bugs, improves the design, and offers a more expanded glyphset. Check out the font's website ! To contribute, see github.com/rastikerdar/vazirmatn .",
    "wikiEntry": "Persian_language"
  },
  {
    "lang": "Urdu",
    "text": "ہیلو ورلڈ",
    "font": "Noto Nastaliq Urdu",
    "fontAuthor": "Google",
    "fontDescription": "Noto is a global font collection for writing in all modern and ancient languages. Noto Nastaliq Urdu is a cursive, modulated (“serif”) Nastaliq design for texts in the Middle Eastern Arabic script, especially in the Urdu language. It has 1,138 glyphs.",
    "wikiEntry": "Urdu_language"
  },
  {
    "lang": "Hindi",
    "text": "नमस्ते दुनिया",
    "font": "Yatra One",
    "fontAuthor": "Catherine Leigh Schmidt",
    "fontDescription": "Yatra One is a Devanagari and Latin libre font inspired by the hand-painted signage of the Mumbai local railway. This heavy weight high-contrast display face preserves the idiosyncratic character of brush-painted signage by featuring angular cuts and open knots. Notably, the Latin adopts a Devanagari brush angle. A Mumbai native, Yatra offers basic Marathi alternates. The Yatra One project is led by Catherine Leigh Schmidt, a type designer based in the USA. To contribute, see github.com/cathschmidt/yatra-one",
    "wikiEntry": "Hindi_language"
  },
  {
    "lang": "Bengali",
    "text": "ওহে বিশ্ব",
    "font": "Hind Siliguri",
    "fontAuthor": "Indian Type Foundry",
    "fontDescription": "Hind Siliguri is a family of five Bengali fonts, which are part of the Indian Type Foundry’s larger Open Source Hind Multi-Script project. Hind Multi-Script is a type system providing nine stylistically-matching font families – one for each of the following writing systems used in Bangladesh, India, Nepal, and Sri Lanka: Bengali, Devanagari, Gujarati, Gurmukhi, Kannada, Malayalam, Tamil, Telugu, and Sinhala. In addition to Bengali, the Hind Siliguri fonts also include Latin-script characters. Developed explicitly for use in User Interface design, Hind’s letterforms have a humanist-style construction, paired with seemingly monolinear strokes. Most of these strokes have flat endings: they either terminate with a horizontal or a vertical shear, rather than on a diagonal. This helps create clear-cut counter forms between the characters. Additionally, Hind’s letterforms feature open apertures. The entire family feels very legible when used to set text. The Bengali and Latin script components are scaled in relation to each other so that the Bengali headline is more or less at the same visual height as the Latin capital letters share. The exact height of the Bengali headline increases vis à vis the capital height as the family increases in weight, just as the Latin lowercase does. Each font in the Hind Siliguri family has 820 glyphs, including many unique Bengali conjuncts. These ensure support for the languages written with the Bengali script. The Latin component’s character set is Adobe Latin 3, which enables typesetting in English and the other Western European languages. Hind Siliguri is a solid alternate when choosing typefaces for UI design, and a wise selection for electronic display embedding. Jyotish Sonowal designed Hind Siliguri for ITF, who first published the fonts in 2015. Hind Siliguri is named after Siliguri, a city in West Bengal, India. The Hind Siliguri project is led by Indian Type Foundry, a type design foundry based in Ahmedabad, India. To contribute, see github.com/itfoundry/hind-siliguri",
    "wikiEntry": "Bengali_language"
  },
  {
    "lang": "Tamil",
    "text": "வணக்கம் உலகம்",
    "font": "Kavivanar",
    "fontAuthor": "Tharique Azeez",
    "fontDescription": "Kavivanar is a unique handwriting font that supports the Tamil and Latin scripts. It is somewhat bold, and slightly slanted, a typical Tamil handwriting style where an incline is popular. The letterforms show a calligraphic pen stress that brings an aliveliness to the letters, and provides texture in body text settings. It works well with both body text and display text because of the intriguing rhythm. The slanted letterforms for Tamil are inspired from a manuscript by Kavivanar M. A. Azeez (1948-2002), a Tamil poet and educator who lived in the east coast of Sri Lanka. The Kavivanar project is led by Tharique Azeez, a type designer based in Sri Lanka. To contribute, see github.com/enathu/kavivanar",
    "wikiEntry": "Tamil_language"
  },
  {
    "lang": "Telugu",
    "text": "హలో వరల్డ్",
    "font": "Ramabhadra",
    "fontAuthor": "Purushoth Kumar Guttula",
    "fontDescription": "Ramabhadra is a Telugu font developed for use in headlines, posters and at large sizes. The letterforms are very round and have a uniform thickness, and the terminals have a small temple shape that appear like a sans-serif design. This font includes unique Telugu conjunct letters. Ramabhadra is named after the Telugu poet from the court of the king Krishnadevaraya, and was one of the Astadiggajalu (literally eight legends) there. The Telugu is designed and developed by Purushoth Kumar Guttula in 2013 and made available by Silicon Andhra under the SIL Open Font License v1.1. The Latin is designed by Steve Matteson at Monotype, an internaional type foundry, and initially published as Arimo . The Ramabhadra project is led by Appaji Ambarisha Darbha, a type designer based in Hyderabad, India. To contribute, see github.com/appajid/ramabhadra",
    "wikiEntry": "Telugu_language"
  },
  {
    "lang": "Marathi",
    "text": "नमस्कार जग",
    "font": "Baloo 2",
    "fontAuthor": "Ek Type",
    "fontDescription": "A perfect blend of pointy paws in a coat of fur, Baloo is an affable display typeface by Ek Type. Available in nine Indian scripts plus Arabic along with a Latin counterpart, the family is Unicode compliant and libre licensed. Baloo 2 is an extension of the earlier Baloo project. The new Baloo 2 includes additional glyphs, engineering improvements, and has been extended to five weights, ranging from the light footed Regular to the affable ExtraBold. The lighter weights retain Baloo’s characteristic bounce, but they do so slightly, infusing life into each word. This allows the new family to freely fraternise with texts of all sizes and temperaments — be it short bursts or copious reams, demanding headlines or whispering bylines. Carefree yet confident, sprightly yet versatile, the renewed family of Baloo promises to bring warmth to every project. The Baloo 2 project consists of ten font families with unique local names for each of the nine Indic scripts plus Arabic (Baloo Bhaijaan 2). Each family supports one Indic/Arabic script plus Latin, Latin Extended, and Vietnamese. It took a team of committed type designers to rear Baloo and raise it to be the typeface we love. The Gurmukhi is designed by Shuchita Grover; Bangla by Noopur Datye and Sulekha Rajkumar; Odia by Yesha Goshar, Manish Minz, and Shuchita Grover; Gujarati by Noopur Datye and Supriya Tembe; Kannada by Divya Kowshik and Shuchita Grover; Telugu by Maithili Shingre and Omkar Shende; Malayalam by Maithili Shingre and Unnati Kotecha; and Tamil by Aadarsh Rajan. Baloo Devanagari and Latin are collaboratively designed by Ek Type. Font engineering and type design assistance by Girish Dalvi. To contribute to the project, visit github.com/EkType/Baloo2",
    "wikiEntry": "Marathi_language"
  },
  {
    "lang": "Gujarati",
    "text": "નમસ્તે વિશ્વ",
    "font": "Hind Vadodara",
    "fontAuthor": "Indian Type Foundry",
    "fontDescription": "Hind Vadodara is a family of five Gujarati fonts, which are part of the Indian Type Foundry’s larger Open Source Hind Multi-Script project. Hind Multi-Script is a type system providing nine stylistically-matching font families – one for each of the following writing systems used in Bangladesh, India, Nepal, and Sri Lanka: Bengali, Devanagari, Gujarati, Gurmukhi, Kannada, Malayalam, Tamil, Telugu, and Sinhala. In addition to Gujarati, the Hind Vadodara fonts also include Latin-script characters. Developed explicitly for use in User Interface design, Hind’s letterforms have a humanist-style construction, paired with seemingly monolinear strokes. Most of these strokes have flat endings: they either terminate with a horizontal or a vertical shear, rather than on a diagonal. This helps create clear-cut counter forms between the characters. Additionally, Hind’s letterforms feature open apertures and counterforms. The entire family feels very legible when used to set text. The Gujarati and Latin script components are scaled in relation to each other so that the height of the Gujarati base characters is more or less at the same visual height that the Latin capital letters share. The exact height of the Gujarati characters increases vis à vis the capital height as the family increases in weight, just as the Latin lowercase does. Each font in the Hind Vadodara family has 851 glyphs, which include many unique Gujarati conjuncts. These ensure full support for the writing of the Gujarati language. The Latin component’s character set is Adobe Latin 3, which enables typesetting in English and the other Western European languages. Hind Vadodara is a solid alternate when choosing typefaces for UI design, and a wise selection for electronic display embedding. Hitesh Malaviya designed Hind Vadodara for ITF, who first published the fonts in 2015. Hind Vadodara is named after Vadodara, a city in Gujarat, India. The Hind Vadodara project is led by Indian Type Foundry, a type design foundry based in Ahmedabad, India. To contribute, see github.com/itfoundry/hind-vadodara",
    "wikiEntry": "Gujarati_language"
  },
  {
    "lang": "Punjabi",
    "text": "ਸਤ ਸ੍ਰੀ ਅਕਾਲ ਦੁਨਿਆ",
    "font": "Baloo Paaji 2",
    "fontAuthor": "Ek Type",
    "fontDescription": "A perfect blend of pointy paws in a coat of fur, Baloo is an affable display typeface by Ek Type. Available in nine Indian scripts plus Arabic along with a Latin counterpart, the family is Unicode compliant and libre licensed. Baloo 2 is an extension of the earlier Baloo project. The new Baloo 2 includes additional glyphs, engineering improvements, and has been extended to five weights, ranging from the light footed Regular to the affable ExtraBold. The lighter weights retain Baloo’s characteristic bounce, but they do so slightly, infusing life into each word. This allows the new family to freely fraternise with texts of all sizes and temperaments — be it short bursts or copious reams, demanding headlines or whispering bylines. Carefree yet confident, sprightly yet versatile, the renewed family of Baloo promises to bring warmth to every project. The Baloo 2 project consists of ten font families with unique local names for each of the nine Indic scripts plus Arabic (Baloo Bhaijaan 2). Each family supports one Indic/Arabic script plus Latin, Latin Extended, and Vietnamese. It took a team of committed type designers to rear Baloo and raise it to be the typeface we love. The Gurmukhi is designed by Shuchita Grover; Bangla by Noopur Datye and Sulekha Rajkumar; Odia by Yesha Goshar, Manish Minz, and Shuchita Grover; Gujarati by Noopur Datye and Supriya Tembe; Kannada by Divya Kowshik and Shuchita Grover; Telugu by Maithili Shingre and Omkar Shende; Malayalam by Maithili Shingre and Unnati Kotecha; and Tamil by Aadarsh Rajan. Baloo Devanagari and Latin are collaboratively designed by Ek Type. Font engineering and type design assistance by Girish Dalvi. To contribute to the project, visit github.com/EkType/Baloo2",
    "wikiEntry": "Punjabi_language"
  },
  {
    "lang": "Thai",
    "text": "สวัสดีชาวโลก",
    "font": "Chonburi",
    "fontAuthor": "Cadson Demak",
    "fontDescription": "Chonburi is a new Thai + Latin typeface for display usage, with an formal looped + serif design. The Chonburi project is led by Cadson Demak, a type foundry in Thailand. To contribute, see github.com/cadsondemak/chonburi",
    "wikiEntry": "Thai_language"
  },
  {
    "lang": "Vietnamese",
    "text": "Chào Thế Giới",
    "font": "Be Vietnam Pro",
    "fontAuthor": "Lâm Bảo, Tony Le, ViệtAnh Nguyễn",
    "fontDescription": "Be Vietnam Pro is a Neo Grotesk which is well suited to tech companies and startups. We have refined Vietnamese letterforms with diacritics adaptive forms and engineered them for the best readability. To contribute, see github.com/bettergui/BeVietnamPro .",
    "wikiEntry": "Vietnamese_language"
  },
  {
    "lang": "Chinese",
    "text": "你好，世界",
    "font": "Ma Shan Zheng",
    "fontAuthor": "Ma ShanZheng",
    "fontDescription": "This script is reminiscent of fonts used to display \"yinglian,\" the short poems and blessings traditionally posted on either side of the entryway to a home or temple. MaShanZheng is heavy and majestic, vital and expansive. To contribute, please visit github.com/googlefonts/mashanzheng .",
    "wikiEntry": "Chinese_language"
  },
  {
    "lang": "Japanese",
    "text": "こんにちは世界",
    "font": "Yuji Syuku",
    "fontAuthor": "Kinuta Font Factory",
    "fontDescription": "\"Yuji\" is a series of fonts digitizing handwriting by the calligrapher Yuji Kataoka. Yuji Syuku has tradition and dignity, but is also approachable. This design can be widely accepted by the general public. Fonts in the Yuji Family: Yuji Boku Yuji Mai To contribute to the project, visit github.com/Kinutafontfactory/Yuji",
    "wikiEntry": "Japanese_language"
  },
  {
    "lang": "Korean",
    "text": "안녕 세상",
    "font": "Gaegu",
    "fontAuthor": "JIKJI SOFT",
    "fontDescription": "Gaegu is a Korean and Latin font",
    "wikiEntry": "Korean_language"
  },
  {
    "lang": "Indonesian",
    "text": "Halo Dunia",
    "font": "Poppins",
    "fontAuthor": "Indian Type Foundry, Jonny Pinhorn, Ninad Kale",
    "fontDescription": "Geometric sans serif typefaces have always been popular, and with support for both the Devanagari and Latin writing systems, Poppins is an internationalist addition to the genre. Many of the Latin glyphs (such as the ampersand) are more constructed and rationalist than is typical. The Devanagari design was particularly novel when it was first published in 2015, and was the first ever Devanagari typeface with a range of weights in this genre. Just like the Latin, the Devanagari is based on pure geometry, particularly circles. Each letterform is nearly monolinear, with optical corrections applied to stroke joints where necessary to maintain an even typographic color. The Devanagari base character height and the Latin ascender height are equal; Latin capital letters are shorter than the Devanagari characters, and the Latin x-height is set rather high. The project was developed by Indian Type Foundry (ITF). The Devanagari was initially designed by Ninad Kale, while the Latin was initially designed by Jonny Pinhorn. Following their principal phase of designing the first 5 styles, the typeface was later refined, and expanded to include multiple weights and italics, by the ITF studio team. To contribute, see github.com/itfoundry/poppins",
    "wikiEntry": "Indonesian_language"
  },
  {
    "lang": "Malay",
    "text": "Helo Dunia",
    "font": "Quicksand",
    "fontAuthor": "Andrew Paglinawan",
    "fontDescription": "Quicksand is a display sans serif with rounded terminals. The project was initiated by Andrew Paglinawan in 2008 using geometric shapes as a core foundation. It is designed for display purposes but kept legible enough to use in small sizes as well. In 2016, in collaboration with Andrew, it was thoroughly revised by Thomas Jockin to improve the quality. In 2019, Mirko Velimirovic converted the family into a variable font. To contribute, see github.com/andrew-paglinawan/QuicksandFamily .",
    "wikiEntry": "Malay_language"
  },
  {
    "lang": "Filipino",
    "text": "Kamusta Mundo",
    "font": "Fredoka",
    "fontAuthor": "Milena Brandão, Hafontia",
    "fontDescription": "Fredoka is a big, round, bold font that is perfect for adding a little fun to any headline or large text. The initial Latin component was designed by Milena Brandão. The later Hebrew component was designed by Ben Nathan. Fredoka is a variable font with a width and weight axes. The Fredoka project is led by Ben Nathan, a type design foundry based in Israel. To contribute, see github.com/hafontia/Fredoka-One .",
    "wikiEntry": "Filipino_language"
  },
  {
    "lang": "Swahili",
    "text": "Habari Dunia",
    "font": "Ubuntu",
    "fontAuthor": "Dalton Maag",
    "fontDescription": "The Ubuntu Font Family are a set of matching new libre/open fonts in development during 2010-2011. The development is being funded by Canonical Ltd on behalf the wider Free Software community and the Ubuntu project. The technical font design work and implementation is being undertaken by Dalton Maag . Both the final font Truetype/OpenType files and the design files used to produce the font family are distributed under an open licence and you are expressly encouraged to experiment, modify, share and improve. The new Ubuntu Font Family was started to enable the personality of Ubuntu to be seen and felt in every menu, button and dialog. The typeface is sans-serif, uses OpenType features and is manually hinted for clarity on desktop and mobile computing screens. The scope of the Ubuntu Font Family includes all the languages used by the various Ubuntu users around the world in tune with Ubuntu's philosophy which states that every user should be able to use their software in the language of their choice. So the Ubuntu Font Family project will be extended to cover many more written languages. Ubuntu and Canonical are registered trademarks of Canonical Ltd.",
    "wikiEntry": "Swahili_language"
  },
  {
    "lang": "Zulu",
    "text": "Sawubona Mhlaba",
    "font": "Mukta",
    "fontAuthor": "Ek Type",
    "fontDescription": "Mukta is a Unicode compliant, versatile, contemporary, humanist, mono-linear typeface family available in seven weights, supporting Devanagari, Gujarati, Gurumukhi, Tamil and Latin scripts. This type family is a libre licensed version of Ek's self-titled multi-script project, an ongoing effort to develop a unified type family for each Indian script. The goal is to build one harmonious family across all Indian scripts without letting the visual features of one script dominate over others. This ensures that the fonts can be used successfully for both single and multi-script purposes. Mukta was designed by Girish Dalvi and Yashodeep Gholap. Mukta Vaani was designed by Noopur Datye and Pallavi Karambelkar with support from Sarang Kulkarni and Maithili Shingre. Mukta Malar was designed by Aadarsh Rajan. Mukta Mahee was designed by Shuchita Grover and Noopur Datye. Ek would like to thank Vinay Saynekar, Santosh Kshirsagar, Shubhanand Jog, Yogesh Jahargirdar, Pradnya Naik, Snehal Patil, Omkar Shende and Dave Crossland for their suggestions and feedback during the font design process. Ek would also like to thank faculty and friends from the Industrial Design Centre, IIT Bombay, and from Sir J J Institute of Applied Art, for their support and encouragement. This project is led by Ek Type, a collective of type designers based in Mumbai focused on designing contemporary Indian typefaces. To contribute, see github.com/EkType/Mukta",
    "wikiEntry": "Zulu_language"
  },
  {
    "lang": "Amharic",
    "text": "ሰላም ልዑል",
    "font": "Noto Sans Ethiopic",
    "fontAuthor": "Google",
    "fontDescription": "Noto is a global font collection for writing in all modern and ancient languages. Noto Sans Ethiopic is an unmodulated (“sans serif”) design for texts in the African Ethiopic script. It has multiple weights and widths, and 566 glyphs.",
    "wikiEntry": "Amharic_language"
  },
  {
    "lang": "Georgian",
    "text": "გამარჯობა მსოფლიო",
    "font": "Noto Sans Georgian",
    "fontAuthor": "Google",
    "fontDescription": "Noto is a global font collection for writing in all modern and ancient languages. Noto Sans Georgian is an unmodulated (“sans serif”) design for texts in the European Georgian script. It has multiple weights and widths, and 225 glyphs.",
    "wikiEntry": "Georgian_language"
  },
  {
    "lang": "Armenian",
    "text": "Բարեւ աշխարհ",
    "font": "Noto Sans Armenian",
    "fontAuthor": "Google",
    "fontDescription": "Noto is a global font collection for writing in all modern and ancient languages. Noto Sans Armenian is an unmodulated (“sans serif”) design for texts in the European Armenian script. It has multiple weights and widths, and 107 glyphs.",
    "wikiEntry": "Armenian_language"
  },
  {
    "lang": "Icelandic",
    "text": "Halló Heimur",
    "font": "EB Garamond",
    "fontAuthor": "Georg Duffner, Octavio Pardo",
    "fontDescription": "EB Garamond is intended to be an excellent, classical, Garamond. It is a community project to create a revival of Claude Garamont’s famous humanist typefaces from the mid-16th century. This digital version reproduces the original design by Claude Garamont closely: The source for the letterforms is a scan of a specimen known as the “Berner specimen,” which was composed in 1592 by Conrad Berner, the son-in-law of Christian Egenolff and his successor at the Egenolff print office. This specimen shows Garamont’s roman and Granjon’s italic types at different sizes. Hence the name of this project: Egenolff-Berner Garamond. Why another Garamond? That typeface is a key moment in the history of typography, and European type designers have been reacting to this work ever since. It is probably the most revived typeface in the world and many are excellent. In the world of free/libre culture, however, only a few Garamond-inspired types exist, and none share the scope of this project. In November 2019, the family has been updated to a variable font family. This version of the project was originally led by Octavio Pardo ( github.com/octaviopardo/EBGaramond12 ), which is forked from Georg Duffner's original project github.com/georgd/EB-Garamond . It is currently maintained with contributions from the wider community, including the Google Fonts team.",
    "wikiEntry": "Icelandic_language"
  },
  {
    "lang": "Irish",
    "text": "Dia duit Domhan",
    "font": "Almendra",
    "fontAuthor": "Ana Sanfelippo",
    "fontDescription": "Almendra is a typeface design based on calligraphy. Its style is related to the chancery and gothic hands. It is intended to be used in long texts, especially young children's literature. Almendra's black and white forms generate a nice texture in small sizes, while its many details appear when given the opportunity in huge sizes. The main challenge was to make compatible dialectic elements, especially balancing legibility and formal identity. Almendra was selected to be exhibited at the Bienal Iberoamericana de Diseo in 2010 and was part of the German editorial project Typodarium 2012. This is the Regular family, and there are sister Small Cap and Display families.",
    "wikiEntry": "Irish_language"
  },
  {
    "lang": "Welsh",
    "text": "Helo Byd",
    "font": "Grenze",
    "fontAuthor": "Omnibus-Type",
    "fontDescription": "Grenze is a large text family which features nine weights with matching italics. It draws inspiration from Roman and Blackletter typefaces. It was originally designed to be used in magazines. To contribute, see github.com/Omnibus-Type/Grenze .",
    "wikiEntry": "Welsh_language"
  },
  {
    "lang": "Hawaiian",
    "text": "Aloha Honua",
    "font": "Pacifico",
    "fontAuthor": "Vernon Adams, Jacques Le Bailly, Botjo Nikoltchev, Ani Petrova",
    "fontDescription": "Aloha! Pacifico is an original and fun brush script handwriting font by Vernon Adams which was inspired by the 1950s American surf culture in 2011. It was redrawn by Jacques Le Bailly at Baron von Fonthausen in 2016. It was expanded to Cyrillic by Botjo Nikoltchev and Ani Petrova at Lettersoup in 2017. The Pacifico project was commissioned by Google from Vernon Adams , an English type designer who lived in San Clemente, Los Angeles, USA. To contribute, see github.com/googlefonts/Pacifico Updated June 2019 to v3.000: Added extended Cyrillic support.",
    "wikiEntry": "Hawaiian_language"
  },
  {
    "lang": "Scottish Gaelic",
    "text": "Halò Shaoghail",
    "font": "IM Fell English",
    "fontAuthor": "Igino Marini",
    "fontDescription": "STANLEY MORISON, in his “THE ROMAN ITALIC & BLACK LETTER bequeathed to the University of Oxford by Dr. JOHN FELL” (Oxford University Press, Oxford, 1951), began this way the description of the FELL TYPES: \"The Oxford Printing house holds the oldest punches and matrices surviving in England, material not only treasured but used; types cast therefrom being employed for the composition of books and other printed matter.\" It’s essentially the inheritance of the will of John Fell, D.D. who died on 10 July 1686, aged 61, Bishop of Oxford and Dean of Christ Church. Since 1668 he spent his life creating a ‘learned press’ in Oxford, endowed with invaluable equipment, setting a high standard for the future of his publishing. He wrote: \"The foundation of all successe must be layd in doing things well, and I am sure that will not be don with English letters\" (to Jenkins, 2 Dec. 1672). So he collectected types available in the foreign market: mainly France, Holland and Germany. Fell decided to develop types in its own ‘workhouse’ too. Peter De Walpergen became his personal type-founder. Says Harry Carter in “THE FELL TYPES. What has been done in and about them” (Oxford University Press, New York, 1968): \"He was born at Frankfurt am Main, descended from a Protestant refugee from Antwerp. He was engaged by the Dutch East India Company in 1671 to work as a type-founder and printer in Java. The comparative crudity of his letter design makes it seems unlikely that he had been trained to cut punches.\" John Fell entrusted him with the cut of the larger bodies: Great Primer Roman and Italic; Double Pica Roman and Italic; French Canon Roman and Italic; Three Lines Pica Roman. De Walpergen cut other types and letters for existing types to be harmonized with the larger bodies. Commented Morison: \"The design of these large Fell Types is difficult to characterize and impossible wholly to approve. It has some affinity with the Dutch work of the second half of the seventeenth century, especially with the bigger size of type shown in the Widow Elsevier’s specimen-sheet of types attributed to Christoffel van Dyck; but De Walpergen went much further in the contrasting weight of thick and thin strokes and his design has crudities about it of which Van Dyck would not have been capable.\" In 1686 John Fell died. In his “will” he bequeathed the entire collection of type to the University of Oxford. Remembers Morison: \"This entire collection of ‘founding Materialls of Punchions Matrices Moulds’ was ‘got together’ by John Fell ‘and others at great expense’. Fell’s instructions that they ‘be carefully kept together’ by his executors were duly observed. The Chancellor, Masters, and Scholars of the University of Oxford honourably played their part in sustaining the interests of ‘learning and printing’ and thus the collection was not dissipated but manteined entire.\"",
    "wikiEntry": "Scottish_Gaelic_language"
  },
  {
    "lang": "Latin",
    "text": "Salve Mundi",
    "font": "Cinzel",
    "fontAuthor": "Natanael Gama",
    "fontDescription": "Cinzel is a typeface inspired in first century roman inscriptions, and based on classical proportions. However it’s not a simple revivalism, while it conveys all the ancient history of the latin alphabet it also merges a contemporary feel onto it. To contribute, see github.com/NDISCOVER/Cinzel .",
    "wikiEntry": "Latin_language"
  },
  {
    "lang": "Esperanto",
    "text": "Saluton Mondo",
    "font": "Exo 2",
    "fontAuthor": "Natanael Gama",
    "fontDescription": "Exo 2 is a complete redrawing of Exo , a contemporary geometric sans serif typeface that tries to convey a technological/futuristic feeling while keeping an elegant design. Exo is a very versatile font, so it has 9 weights (the maximum on the web) and each with a true italic version. Exo 2 has a more organic look that will perform much better at small text sizes and in long texts. In March 2020, the family has been updated to a variable font family. To contribute, see github.com/googlefonts/Exo-2.0 .",
    "wikiEntry": "Esperanto_language"
  }
];
