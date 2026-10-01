// ============ TAFSIRI (Kiingereza na Kiswahili) ============
const translations = {
    en: {
        nav_about: "About",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_contact: "Let's talk",
        hero_eyebrow: "Website & Digital Products",
        hero_title: "Websites & <span>Digital Products</span>",
        hero_desc: "Hello! My name is Yousuf Abdullah, I create websites and digital designs such as logos, posters and flyers.",
        btn_work: "View my work",
        btn_contact: "Contact me",
        btn_contact: "Contact me",
        about_eyebrow: "About me",
        about_title: "Who am I?",
        about_text: "I'm Yousuf Abdullah, a student and creative designer. I build modern websites and design logos, posters and flyers that help people and businesses stand out.",
        stat_projects: "Projects",
        stat_services: "Services",
        stat_passion: "Passion",
        skills_eyebrow: "What I do",
        skills_title: "My Skills",
        skill1_title: "Web Design",
        skill1_desc: "Modern, fast and mobile-friendly websites.",
        skill2_title: "Logo Design",
        skill2_desc: "Memorable logos that represent your brand.",
        skill3_title: "Posters & Flyers",
        skill3_desc: "Eye-catching designs for events and promotions."
    },
    
    sw: {
        nav_about: "Kuhusu",
        nav_skills: "Ujuzi",
        nav_projects: "Kazi zangu",
        nav_contact: "Wasiliana nami",
        hero_eyebrow: "Tovuti na Bidhaa za Kidijitali",
        hero_title: "Tovuti na <span>Bidhaa za Kidijitali</span>",
        hero_desc: "Habari! Jina langu ni Yousuf Abdullah, Ninatengeneza tovuti na ubunifu wa kidijitali kama logo, posters na flyers.",
        btn_work: "Tazama kazi zangu",
        btn_contact: "Wasiliana nami",
        btn_contact: "Wasiliana nami",
        about_eyebrow: "Kuhusu mimi",
        about_title: "Mimi ni nani?",
        about_text: "Mimi ni Yousuf Abdullah, mwanafunzi na mbunifu. Natengeneza tovuti za kisasa na kubuni logo, posters na flyers zinazosaidia watu na biashara kujitokeza.",
        stat_projects: "Miradi",
        stat_services: "Huduma",
        stat_passion: "Moyo wa kazi",
        skills_eyebrow: "Ninachofanya",
        skills_title: "Ujuzi wangu",
        skill1_title: "Ubunifu wa Tovuti",
        skill1_desc: "Tovuti za kisasa, za haraka na zinazofaa simu.",
        skill2_title: "Ubunifu wa Logo",
        skill2_desc: "Logo za kukumbukwa zinazowakilisha chapa yako.",
        skill3_title: "Posters na Flyers",
        skill3_desc: "Ubunifu unaovutia kwa matukio na matangazo.",
    }
};

const langBtn = document.getElementById("langBtn");

function setLanguage(lang) {
    // Badilisha kila maandishi yenye data-i18n
    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.dataset.i18n;
        el.innerHTML = translations[lang][key];
    });

    // Badilisha lugha ya ukurasa
    document.documentElement.lang = lang;

    // Kitufe kinaonyesha lugha unayoweza kubadilishia
    langBtn.textContent = lang === "en" ? "SW" : "EN";

    // Kumbuka chaguo la mtumiaji
    localStorage.setItem("lang", lang);
}

// Bonyeza kitufe = badilisha lugha
langBtn.addEventListener("click", () => {
    const current = document.documentElement.lang;
    setLanguage(current === "en" ? "sw" : "en");
});

// Ukurasa unapofunguka: tumia lugha iliyohifadhiwa, vinginevyo Kiingereza
setLanguage(localStorage.getItem("lang") || "en");