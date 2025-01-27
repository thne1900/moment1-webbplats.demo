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
- Skapade en ny fil (.gitignore) för de filer som inte ska versionshanteras och placerade node_modules och package-lock.json filerna där. 
- I "package.json"-filen lades inställningar kring "source" in. Även kommandon "start" och "build" till för att kunna nå den kommande webbplatsen och även att kunna bygga ihop den och dess ihoppackade filer inför publicering.
- Katalog "src" skapades då det är den parcel utgår ifrån.
- Skapade de filer/mappar som webbplatsen ska komma att innehålla (html, css, js, images) i src- katalogen. 
- Skrev in lite grundkoder i html och css-filen för att kunna testköra kommandon: "npm start" och "npm build".
- Kunde därefter ta upp webbplatsen med den skapande URL:en vid körning av "npm start". 
- En katalog tillkom (dist) vid körning av kommandot "npm build", för den publiceringsklara webbplatsen.

### Arbetsprocess: 
- Efter att projektets grund var skapad, med filer, kataloger och inställningar skapades ett repo till GitHub, versionshantering, med samma namn.
- Därefer skapades ett inlogg på Netlify, där mitt repo från GitHub skulle synkas med Netlify för att kunna publiceera webbplatsen. 
- Vid hämtningen från Github av repot på Netlify , dök ett felmeddelande upp som sa att det inte gick att "bygga" webbplatsen.
-Försökte då finna vad felet kunde vara, kontrollerade därför alla inställningar och koder med dess syntaxer.
- Det visade sig att "devDependencies":{"parcel": "^2.13.3"} saknades i package.json filen.
- Därför kördes installationen kring parcel på nytt och då kom det upp. Därefter gick det att bygga webbplatsen från Netlify. 
- När allt verkade fungera, börjades webbplatsen dokument utformas, med vad som skulle finnas med på sidorna med bla texter och bilder. 
- Jag testade även att skapa en ny "branch"-Dev för att utforma mina dokument och testa innan det blev publicerat. Men misstänker att det blev någon miss när sammankopplingen till huvudgrenen skulle göras så det uppkom även här felmeddelande. Så därför valde jag att ta bort denna för att göra om på nytt. 
- Körde därefter några ändringar med bilder och tillägg i main-brachen för att se så att det blev rätt med synkningen till både Github och Netlify.
- Vid arbetet med bilderna, uppkom felmeddelande om att "Sharp" eventullt skulle användas, så därför testades detta att installera.
- Därefter skapades en ny "branch"-Dev1. I denna utformades documenten ytterligare.
- Utformade html-documenten mer kring responsiviteten och lade till en hamburger-meny vid mindre skärmstorlek. Använde js-kod för det som placerades i den separata js-filen. 
- Fortsatt arbete i branch-Dev1, med att strukturerar en del på bildfilerna.
- Började skriva mer kring arbetsprocessen, som en undersidan på webbplatsen ska bestå av. 
- När de mesta av innehållet på respektive sidor kändes klara, skickades "dev1" till "main". Denna gången fungerade det utan att felmeddelande dök upp. 
- Körde också kommando för att de publiceringaklara filerna skulle vara nåbara.
- Kunde därefter publicera webbplatsen via Netlify och där användes även testverktygen Lighthouse och Wave för att kontrollera eventuella fel/brister. 

