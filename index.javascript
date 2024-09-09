document.addEventListener("DOMContentLoaded", () => {
  // Get the language toggle element and dropdown
  const languageToggle = document.getElementById("language-toggle");
  const languageDropdown = document.getElementById("language-dropdown");

  // Function to change the language
  function changeLanguage(language) {
    const elements = {
      title: {
        English: "Welcome to the Sustainable Fertilizer Usage Optimizer",
        Hindi: "सस्टेनेबल फ़र्टिलाइज़र उपयोग ऑप्टिमाइज़र में आपका स्वागत है",
        Punjabi: "ਸਥਾਈ ਖਾਦ ਦੀ ਵਰਤੋਂ ਨੂੰ ਅਪਟਿਮਾਈਜ਼ਰ ਵਿੱਚ ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ",
        Haryanvi: "सस्टेनेबल खाद उपयोग ऑप्टिमाइज़र में तेरा स्वागत सै",
        Marathi: "सस्टेनेबल खत वापर ऑप्टिमायझरमध्ये आपले स्वागत आहे",
        Telugu: "సస్టైనబుల్ ఎరువుల వాడకం ఆప్టిమైజర్‌కు స్వాగతం",
        Tamil: "நிலைத்த எருவுப் பயன்படுத்தும் ஆப்டிமைசருக்கு வரவேற்கிறோம்",
        Kannada: "ಸ್ಥಿರ ರಸಗೊಬ್ಬರ ಬಳಕೆ ಆಪ್ಟಿಮೈಸರ್ನಲ್ಲಿ ನಿಮಗೆ ಸ್ವಾಗತ",
        Gujarati: "સસ્ટેનેબલ ખાતર ઉપયોગ ઓપ્ટિમાઇઝરમાં આપનું સ્વાગત છે",
        Rajasthani: "सस्टेनेबल खाद उपयोग ऑप्टिमाइज़र मं तौ स्वागत है",
      },
      subtitle: {
        English: "Optimize your yield with sustainable fertilizer practices.",
        Hindi: "स्थायी खाद प्रथाओं के साथ अपनी उपज को अनुकूलित करें।",
        Punjabi: "ਸਥਾਈ ਖਾਦ ਅਭਿਆਸਾਂ ਨਾਲ ਆਪਣੇ ਫਲ ਨੂੰ ਸੁਧਾਰੋ।",
        Haryanvi: "सस्टेनेबल खाद प्रथाओं के साथ आपणी फसल बधाओ।",
        Marathi: "टिकाऊ खत पद्धतींसह आपल्या उत्पादनाचा अनुकूलन करा.",
        Telugu: "సస్టైనబుల్ ఎరువుల ఆచరణతో మీ దిగుబడిని మెరుగుపరచండి.",
        Tamil: "நிலைத்த எருவுப் நடைமுறைகளுடன் உங்கள் விளைச்சலை அதிகரிக்கவும்.",
        Kannada: "ಸ್ಥಿರ ರಸಗೊಬ್ಬರ ಅಭ್ಯಾಸಗಳೊಂದಿಗೆ ನಿಮ್ಮ ಬೆಳೆಯನ್ನು ಸುಧಾರಿಸಿ.",
        Gujarati: "સસ્ટેનેબલ ખાતર પદ્ધતિઓ સાથે તમારું ઉત્પાદન સુધારો.",
        Rajasthani: "सस्टेनेबल खाद प्रथाओं रा साथ आपरो उपज बधाओ।",
      },
      "welcome-title": {
        English: "Welcome",
        Hindi: "स्वागत है",
        Punjabi: "ਸਵਾਗਤ ਹੈ",
        Haryanvi: "स्वागत सै",
        Marathi: "स्वागत आहे",
        Telugu: "స్వాగతం",
        Tamil: "வரவேற்கிறோம்",
        Kannada: "ಸ್ವಾಗತ",
        Gujarati: "સ્વાગત છે",
        Rajasthani: "स्वागत है",
      },
      "welcome-message": {
        English: "Hello, Welcome to a greener future!",
        Hindi: "नमस्ते, एक हरे भविष्य में आपका स्वागत है!",
        Punjabi: "ਹੈਲੋ, ਇੱਕ ਹਰੇ ਭਵਿੱਖ ਵਿੱਚ ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ!",
        Haryanvi: "राम राम, एक हरियाले भविष्य में तेरा स्वागत सै!",
        Marathi: "नमस्कार, हरित भविष्यात आपले स्वागत आहे!",
        Telugu: "హలో, ఆకుపచ్చ భవిష్యత్తులో స్వాగతం!",
        Tamil: "வணக்கம், பசுமையான எதிர்காலத்திற்கு வரவேற்கிறோம்!",
        Kannada: "ಹಲೋ, ಹಸಿರು ಭವಿಷ್ಯಕ್ಕೆ ಸ್ವಾಗತ!",
        Gujarati: "હેલો, એક લીલા ભવિષ્યમાં આપનું સ્વાગત છે!",
        Rajasthani: "राम राम, एक हरियालो भविष्य मं तौ स्वागत है!",
      },
      description: {
        English:
          "Our tool helps farmers maximize crop yield while minimizing environmental impact. By analyzing soil, crop type, and weather conditions, we provide tailored fertilizer recommendations that promote sustainable practices.",
        Hindi:
          "हमारा उपकरण किसानों को फसल उत्पादन को अधिकतम करने में मदद करता है जबकि पर्यावरणीय प्रभाव को कम करता है। मिट्टी, फसल के प्रकार और मौसम की स्थिति का विश्लेषण करके, हम स्थायी प्रथाओं को बढ़ावा देने वाली उर्वरक सिफारिशें प्रदान करते हैं।",
        Punjabi:
          "ਸਾਡਾ ਟੂਲ ਕਿਸਾਨਾਂ ਨੂੰ ਫਸਲ ਦੀ ਪੈਦਾਵਾਰ ਨੂੰ ਵਧੇਰੇ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ ਜਦੋਂ ਕਿ ਵਾਤਾਵਰਣ ਦੇ ਪ੍ਰਭਾਵ ਨੂੰ ਘੱਟ ਕਰਦਾ ਹੈ। ਮਿੱਟੀ, ਫਸਲ ਦੇ ਕਿਸਮ ਅਤੇ ਮੌਸਮ ਦੀਆਂ ਸਥਿਤੀਆਂ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰਕੇ, ਅਸੀਂ ਸਥਾਈ ਅਭਿਆਸਾਂ ਨੂੰ ਪ੍ਰੋਤਸਾਹਿਤ ਕਰਨ ਵਾਲੀਆਂ ਖਾਦ ਦੀਆਂ ਸਿਫਾਰਸ਼ਾਂ ਪ੍ਰਦਾਨ ਕਰਦੇ ਹਾਂ।",
        Haryanvi:
          "हमारा औजार किसान ने फसल उत्पादन ने अधिकतम करने में मद्दगार है जबकि पर्यावरण पर प्रभाव नै न्यूनतम रखे। माटी, फसल के प्रकार और मौसम की स्थिति का विश्लेषण करके, हम स्थिर प्रथाओं ने बढ़ावा देने वाली खाद सिफारिश प्रदान करें सै।",
        Marathi:
          "आमचे साधन शेतकऱ्यांना पीक उत्पादन जास्तीत जास्त करण्यास मदत करते तर पर्यावरणावर होणारा परिणाम कमी करते. माती, पीक प्रकार आणि हवामानाच्या परिस्थितीचे विश्लेषण करून, आम्ही टिकाऊ पद्धतींचे प्रोत्साहन देणारी खताची शिफारस करतो.",
        Telugu:
          "మా సాధనం రైతులు పంట దిగుబడిని గరిష్టం చేయడంలో సహాయపడుతుంది మరియు పర్యావరణ ప్రభావాన్ని తగ్గిస్తుంది. మట్టి, పంట రకం మరియు వాతావరణ పరిస్థితులను విశ్లేషించడం ద్వారా, మేము సస్టైనబుల్ ఆచరణలను ప్రోత్సహించే ఎరువు సిఫారసులను అందిస్తాము.",
        Tamil:
          "எங்கள் கருவி விவசாயிகளுக்கு பயிர் விளைச்சலை அதிகரிக்க உதவுகிறது மற்றும் சுற்றுச்சூழலின் பாதிப்பை குறைக்கிறது. மண், பயிர் வகை மற்றும் வானிலை நிலைமைகளை பகுப்பாய்வு செய்து, நாங்கள் நிலைத்த நடைமுறைகளை ஊக்குவிக்கும் எருவுப் பரிந்துரைகளை வழங்குகிறோம்.",
        Kannada:
          "ನಮ್ಮ ಸಾಧನವು ರೈತರಿಗೆ ಬೆಳೆ ಉತ್ಪಾದನೆಯನ್ನು ಗರಿಷ್ಠಗೊಳಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ ಮತ್ತು ಪರಿಸರದ ಪರಿಣಾಮವನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ. ಮಣ್ಣು, ಬೆಳೆ ಪ್ರಕಾರ ಮತ್ತು ಹವಾಮಾನದ ಪರಿಸ್ಥಿತಿಗಳನ್ನು ವಿಶ್ಲೇಷಿಸುವ ಮೂಲಕ, ನಾವು ಸ್ಥಿರ ಅಭ್ಯಾಸಗಳನ್ನು ಉತ್ತೇಜಿಸುವ ರಸಗೊಬ್ಬರ ಶಿಫಾರಸುಗಳನ್ನು ಒದಗಿಸುತ್ತೇವೆ.",
        Gujarati:
          "અમારું સાધન ખેડૂતોને પાકના ઉત્પાદનને મહત્તમ બનાવા મદદ કરે છે જ્યારે પર્યાવરણ પરનો પ્રભાવ ઓછો કરે છે. માટી, પાકના પ્રકાર અને હવામાનની પરિસ્થિતિઓનું વિશ્લેષણ કરીને, અમે ટકાઉ પદ્ધતિઓને પ્રોત્સાહન આપતી ખાતરની ભલામણો પ્રદાન કરીએ છીએ.",
        Rajasthani:
          "हमारौ टूल किसानां नै फसल उत्पादन ने अधिकतम करने में मदद करै सै अर पर्यावरण प्रभाव नै न्यूनतम करै सै। माटी, फसल प्रकार और मौसम की स्थिति कण विश्लेषण करके, हम सस्टेनेबल प्रथाओं नै बढ़ावा देणारी खाद सिफारिशां प्रदान करै सै।",
      },
      "flashcards-title": {
        English: "Flashcards",
        Hindi: "फ्लैशकार्ड्स",
        Punjabi: "ਫਲੈਸ਼ਕਾਰਡ",
        Haryanvi: "फ्लैशकार्ड",
        Marathi: "फ्लॅशकार्ड्स",
        Telugu: "ఫ్లాష్‌కార్డులు",
        Tamil: "பளிச் அட்டைகள்",
        Kannada: "ಫ್ಲ್ಯಾಶ್‌ಕಾರ್ಡ್‌ಗಳು",
        Gujarati: "ફ્લૅશકાર્ડ્સ",
        Rajasthani: "फ्लैशकार्ड",
      },
    };

    // Update text based on selected language
    for (const id in elements) {
      if (elements.hasOwnProperty(id)) {
        const element = document.getElementById(id);
        if (element) {
          element.textContent = elements[id][language];
        }
      }
    }

    // Update the language toggle text
    languageToggle.textContent = `Language: ${language}`;
  }

  // Toggle the visibility of the language dropdown menu
  languageToggle.addEventListener("click", (event) => {
    event.preventDefault();
    if (
      languageDropdown.style.display === "none" ||
      languageDropdown.style.display === ""
    ) {
      languageDropdown.style.display = "block";
    } else {
      languageDropdown.style.display = "none";
    }
  });

  // Hide dropdown if clicked outside
  document.addEventListener("click", (event) => {
    if (
      !languageToggle.contains(event.target) &&
      !languageDropdown.contains(event.target)
    ) {
      languageDropdown.style.display = "none";
    }
  });

  // Set up event listeners for language options
  languageDropdown.querySelectorAll("li").forEach((item) => {
    item.addEventListener("click", () => {
      const language = item.getAttribute("data-language");
      changeLanguage(language);
    });
  });
});
