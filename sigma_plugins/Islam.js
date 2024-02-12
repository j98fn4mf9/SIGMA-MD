//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   MULTI-DEVICE WHATSAPP BOT                                          //
//                                                                                                      //
//                                         v：1．0．0                                                   //
//                                                                                                      //
//              ███████╗██╗ ██████╗ ███╗   ███╗ █████╗     ███╗   ███╗██████╗                           //
//              ██╔════╝██║██╔════╝ ████╗ ████║██╔══██╗    ████╗ ████║██╔══██╗                          //
//              ███████╗██║██║  ███╗██╔████╔██║███████║    ██╔████╔██║██║  ██║                          //
//              ╚════██║██║██║   ██║██║╚██╔╝██║██╔══██║    ██║╚██╔╝██║██║  ██║                          //
//              ███████║██║╚██████╔╝██║ ╚═╝ ██║██║  ██║    ██║ ╚═╝ ██║██████╔╝                          //
//              ╚══════╝╚═╝ ╚═════╝ ╚═╝     ╚═╝╚═╝  ╚═╝    ╚═╝     ╚═╝╚═════╝                           //
//                                                                                                      //
//                                          BY:MAHER-ZUBAIR                                             //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//

const { Module_Exports, prefix } = require("../lib");
const axios = require("axios");
const translatte = require("translatte");
const fetch = require("node-fetch");

// You Can Copy All These Commands Without Any CopyRight Act
// Don't Forget To Give Star To MY Repo

Module_Exports(
  {
    kingcmd: "quran",
    infocmd:"get audio of all quran surah",
    kingclass:"islam"
  },
  async (Void, citel, text) => {
    try{
    const surahNumber = parseInt(text);

    if (isNaN(surahNumber) || surahNumber < 1 || surahNumber > 114) {
      if (!text.match(/^\d+$/)) {
        return citel.reply(`*_Provide Surah Number From 1 to 114 Ex: ${prefix}quran 1_*`);
      }
      return citel.reply(`*_Please Provide Surah Number From 1 to 114 Ex: ${prefix}quran 1_*`);
    }
    const Quran = await axios.get(`https://api.maher-zubair.tech/Al-Quran/audio/query=${surahNumber}`);
    await citel.reply(`*_Downloading Surah Number ${text} Please Wait_*`);
    const res = Quran.data;
    const link = res.url;
    let Maher_Zubair = {
        audio: {
          url: link
        },
        mimetype: 'audio/mpeg',
        contextInfo: {
          externalAdReply: {
            title: "           ♡   || ◁ㅤ❚❚ㅤ▷||ㅤ ♡",
            body: `sɪɢᴍᴀ-ᴍᴅ ʟɪsᴛᴇɴ ᴀʟ-ǫᴜʀᴀɴ`,
            thumbnailUrl: 'https://i.pinimg.com/564x/76/7d/7e/767d7e1c555d6d02857733a656efd72d.jpg',
            sourceUrl: zyt,
            mediaType: 1,
            renderLargerThumbnail: true
          }
        }
    };
    Void.sendMessage(citel.chat, Maher_Zubair, { quoted: citel });
    } catch(e){citel.reply(`_Unknown Error Occured ${e}_*`)}
  }
);
//======================================================================================================================
Module_Exports(
  {
    kingcmd: "hadith",
    kingclass: "islam",
    infocmd: "Get Hadith From Shahih Al Bukhari",
  },
  async (Void, citel, text) => {
    try{
    if (!text || typeof text !== "string") {
      return citel.reply(`*_Provide Me Hadith Number Ex: ${prefix}hadith 1_*`);
    }

    const [HadithNumber, userLanguage] = text.split('|').map(part => part.trim());
    const formatHadith = parseInt(HadithNumber);

    if (isNaN(formatHadith) || formatHadith < 1 || formatHadith > 7000) {
      return citel.reply(`*_Please Provide a Hadith Number between 1 and 7000. Ex: ${prefix}hadith 1_*`);
    }

    const hadis = `https://api.lolhuman.xyz/api/hadits/detail/Shahih_Bukhari/${formatHadith}?apikey=GataDios`;
    let res = await fetch(hadis);
    let data = await res.json();
    let arab = data.result[1].nass;

    arab = arab.replace(/[\r\n]+/g, ' ');

    let Lang;

    try {
      const translationResult = await translatte(arab, {
        from: "auto",
        to: userLanguage || "ur", 
      });
      Lang = translationResult.text;
    } catch (error) {
      return citel.reply(`*_Invalid Language._*\n*_Provide Me A Valid Language Name or Code._*\n_Vist https://api.maher-zubair.tech/bot/lang_`);
    }

    Lang = Lang.replace(/[\r\n]+/g, ' ');

    let hadith = `*_Hadith Of Shahih Bukhari_*\n
  *_Hadith Number ${formatHadith}_*\n
  *_In the name of Allah, the Entirely Merciful, the Especially Merciful._*\n
  *_بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ_*\n
*_${arab}_*\n
*_Translation In ${userLanguage || "Urdu"}_*\n
*_${Lang}_*`;
    let Maher_Zubair = {
      text:hadith,
      contextInfo: {
        externalAdReply: {
          title: snam,
          body: `ʀᴇᴀᴅ sʜᴀʜɪʜ-ᴀʟ-ʙᴜᴋʜᴀʀɪ`,
          thumbnailUrl: 'https://i.pinimg.com/564x/76/7d/7e/767d7e1c555d6d02857733a656efd72d.jpg',
          sourceUrl: zyt,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    };
    Void.sendMessage(citel.chat, Maher_Zubair, { quoted: citel });
    }catch(e){citel.reply(`_Unknown Error Occured ${e}_*`)}
  },
);
//======================================================================================================================
Module_Exports(
  {
    kingcmd: "surah",
    infocmd: "Get Quran All Surah in Arabic with selectable language",
    kingclass: "islam",
  },
  async (Void, citel, text) => {
    try {
      let parts = text.split("|").map(part => part.trim());
      let surahInput = parts[0];
      let userLanguage = parts[1] || "ur"; // Default to Urdu if no language specified

      if (!surahInput)
        return citel.reply("*_Please Specify the Surah Number or Name_*");

      let surahList = await (
        await fetch("https://quran-endpoint.vercel.app/quran")
      ).json();

      let surahData = surahList.data.find(
        (surah) =>
          surah.number === Number(surahInput) ||
          surah.asma.ar.short.toLowerCase() === surahInput.toLowerCase() ||
          surah.asma.en.short.toLowerCase() === surahInput.toLowerCase(),
      );
      if (!surahData)
        return citel.reply(
          `*_Please Provide Surah Number From 1 to 114 or Name_*`,
        );

      let res = await fetch(
        `https://quran-endpoint.vercel.app/quran/${surahData.number}`,
      );

      if (!res.ok) {
        let error = await res.json();
        return citel.reply(
          `Request failed with status ${res.status} and message ${error.message}`,
        );
      }

      let json = await res.json();
      let surahh = json.data.ayahs.map((ayah) => ayah.text.ar).join(" - ");

      try {
        translatedTafsir = await translatte(surahh, {
          from: "auto",
          to: userLanguage,
        });
      } catch (error) {
        return citel.reply(`*_Invalid Language._*\n*_Provide Me A Valid Language Name or Code._*\n_Vist https://api.maher-zubair.tech/bot/lang_`);
      }

      let quranSurah = `   
  *_Holy Book Quran Karim_*\n
                 *_Surah Details_*
*_Surah Number ➪ ${json.data.number}_*
*_Surah Name ➪ ${json.data.asma.ar.long} (${json.data.asma.en.long})_*
*_Meaning ➪ ${json.data.asma.translation.id} (${
        json.data.asma.translation.en
      })_*
*_Surah Type ➪ ${json.data.type.id} ${json.data.type.ar}_*
*_Total Verses ➪ ${json.data.ayahCount}_*

*_بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ_*
*_Meaning ➪ In the name of Allah, the Entirely Merciful, the Especially Merciful._*

*_${surahh.trim()}_*

*_Translation In ${userLanguage.toUpperCase()}_*\n
*_${translatedTafsir.text.split("😂").join("")}_*`;

      let Maher_Zubair = {
        text:quranSurah,
        contextInfo: {
          externalAdReply: {
            title: snam,
            body: `ʀᴇᴀᴅ ᴀʟ-ǫᴜʀᴀɴ`,
            thumbnailUrl: 'https://i.pinimg.com/564x/76/7d/7e/767d7e1c555d6d02857733a656efd72d.jpg',
            sourceUrl: zyt,
            mediaType: 1,
            renderLargerThumbnail: true
          }
        }
      };
      Void.sendMessage(citel.chat, Maher_Zubair, { quoted: citel });


    } catch (e) {citel.reply(`_Unknown Error Occured ${e}_*`)}

    
  },
);
//======================================================================================================================