# Moment 1- Automatisering & publicering
## Skapa en webbplats (demo)

### Initialt:
- Började med att skapade en katalog för projektet: "moment1-webbplats.demo".
- Öppnade upp denna katalog i VSC (Visual Studio Code).
- I terminalen skrevs ett kommando in för att öppna upp ett nytt "Node Package Manager"-projekt (npm init), där skrevs uppgifter in (author). 
- Därefter kom "package.json"-filen upp i VSC som innehöll inställningar för projektet. 
- Uppgifterna i filen kontrollerades på vad som ska finnas med, några togs bort och några lades till. 
- Från detta gjordes en installation med parcel, via terminalen (npm install parcel --save-dev).
- Packetkataloger/filer hamnade i fil-listan för projektet, som ex node_modules.
- Skapade en ny fil (.gitigonre) för de filer som inte ska versionshanteras och placerade node_modules och package-lock.json filerna där. 
- I "package.json"-filen lades inställningar kring "source" in. Även kommandon "start" och "build" till för att kunna nå den kommande webbplatsen och även att kunna bygga ihop den och dess ihoppackade filer inför publicering.
- Katalog "src" skapades då det är den parcel utgår ifrån.
- Skapade de filer/mappar som webbplatsen ska komma att innehålla (html, css, js, images) i src- katalogen. 
- Skrev in lite grundkoder i html och css-filen för att kunna testköra kommandon: "npm start" och "npm build".
- Kunde därefter ta upp webbplatsen med den skapande URL:en vid körning av "npm start". 
- En katalog tillkom (dist) vid körning av kommandot "npm build", för den publiceringsklara webbplatsen.

### Arbetsprocess: 
- Efter att projektets grund var skapad, med filer, kataloger och inställningar skapades ett repo till GitHub, versionshantering, med samma namn.
- Därefer skapades ett inlogg på Netlify, där mitt repo från GitHub kunde synkas Netlify för publicering. 
