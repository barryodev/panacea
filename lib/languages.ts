export interface LanguageWord {
  lang: string;
  text: string;
  /** Google Font family name, chosen to echo the language's script or typographic tradition. */
  font: string;
}

// 50 "Hello World" translations, each paired with a Google Font that nods to
// the language's native script or design tradition (e.g. a Fraktur-style
// face for German, a brush face for Chinese). Where no obvious cultural
// match exists, a distinct, legible display font was picked instead so
// every word still reads clearly with its own personality.
export const languages: LanguageWord[] = [
  { lang: "English", text: "Hello World", font: "Permanent Marker" },
  { lang: "German", text: "Hallo Welt", font: "UnifrakturMaguntia" },
  { lang: "French", text: "Bonjour le monde", font: "Playfair Display" },
  { lang: "Spanish", text: "Hola Mundo", font: "Alfa Slab One" },
  { lang: "Italian", text: "Ciao Mondo", font: "Italiana" },
  { lang: "Portuguese", text: "Olá Mundo", font: "Bilbo" },
  { lang: "Dutch", text: "Hallo Wereld", font: "Josefin Sans" },
  { lang: "Russian", text: "Привет, мир", font: "Marck Script" },
  { lang: "Ukrainian", text: "Привіт, світ", font: "Comfortaa" },
  { lang: "Polish", text: "Witaj Świecie", font: "Lobster" },
  { lang: "Czech", text: "Ahoj světe", font: "Kalam" },
  { lang: "Swedish", text: "Hej Värld", font: "Fjalla One" },
  { lang: "Norwegian", text: "Hei Verden", font: "Sacramento" },
  { lang: "Danish", text: "Hej Verden", font: "Cormorant" },
  { lang: "Finnish", text: "Hei Maailma", font: "Oswald" },
  { lang: "Greek", text: "Γειά σου Κόσμε", font: "Neuton" },
  { lang: "Turkish", text: "Merhaba Dünya", font: "Yanone Kaffeesatz" },
  { lang: "Hungarian", text: "Helló Világ", font: "Righteous" },
  { lang: "Romanian", text: "Salut Lume", font: "Merriweather" },
  { lang: "Hebrew", text: "שלום עולם", font: "Frank Ruhl Libre" },
  { lang: "Arabic", text: "مرحبا بالعالم", font: "Lalezar" },
  { lang: "Persian", text: "سلام دنیا", font: "Vazirmatn" },
  { lang: "Urdu", text: "ہیلو ورلڈ", font: "Noto Nastaliq Urdu" },
  { lang: "Hindi", text: "नमस्ते दुनिया", font: "Yatra One" },
  { lang: "Bengali", text: "ওহে বিশ্ব", font: "Hind Siliguri" },
  { lang: "Tamil", text: "வணக்கம் உலகம்", font: "Kavivanar" },
  { lang: "Telugu", text: "హలో వరల్డ్", font: "Ramabhadra" },
  { lang: "Marathi", text: "नमस्कार जग", font: "Baloo 2" },
  { lang: "Gujarati", text: "નમસ્તે વિશ્વ", font: "Hind Vadodara" },
  { lang: "Punjabi", text: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ ਦੁਨਿਆ", font: "Baloo Paaji 2" },
  { lang: "Thai", text: "สวัสดีชาวโลก", font: "Chonburi" },
  { lang: "Vietnamese", text: "Chào Thế Giới", font: "Be Vietnam Pro" },
  { lang: "Chinese", text: "你好，世界", font: "Ma Shan Zheng" },
  { lang: "Japanese", text: "こんにちは世界", font: "Yuji Syuku" },
  { lang: "Korean", text: "안녕 세상", font: "Gaegu" },
  { lang: "Indonesian", text: "Halo Dunia", font: "Poppins" },
  { lang: "Malay", text: "Helo Dunia", font: "Quicksand" },
  { lang: "Filipino", text: "Kamusta Mundo", font: "Fredoka" },
  { lang: "Swahili", text: "Habari Dunia", font: "Ubuntu" },
  { lang: "Zulu", text: "Sawubona Mhlaba", font: "Mukta" },
  { lang: "Amharic", text: "ሰላም ልዑል", font: "Noto Sans Ethiopic" },
  { lang: "Georgian", text: "გამარჯობა მსოფლიო", font: "Noto Sans Georgian" },
  { lang: "Armenian", text: "Բարեւ աշխարհ", font: "Noto Sans Armenian" },
  { lang: "Icelandic", text: "Halló Heimur", font: "EB Garamond" },
  { lang: "Irish", text: "Dia duit Domhan", font: "Almendra" },
  { lang: "Welsh", text: "Helo Byd", font: "Grenze" },
  { lang: "Hawaiian", text: "Aloha Honua", font: "Pacifico" },
  { lang: "Scottish Gaelic", text: "Halò Shaoghail", font: "IM Fell English" },
  { lang: "Latin", text: "Salve Mundi", font: "Cinzel" },
  { lang: "Esperanto", text: "Saluton Mondo", font: "Exo 2" },
];
