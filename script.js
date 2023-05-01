function onEntry(element) {
    element.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('appeared');
        }
    });
}

let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);

document.addEventListener('DOMContentLoaded', () => {
    const onScrollHeader = () => {
        const header = document.querySelector('.navbar');
        let prevScroll = window.pageYOffset,
            currentScroll;

        window.addEventListener('scroll', () => {
            currentScroll = window.pageYOffset;

            const headerHidden = () => header.classList.contains('navbar_hidden');

            if (currentScroll > prevScroll && !headerHidden() && document.body.clientWidth >= 1024) {
                header.classList.add('navbar_hidden');
            }
            if (currentScroll < prevScroll && headerHidden() && document.body.clientWidth >= 1024) {
                header.classList.remove('navbar_hidden');
            }

            prevScroll = currentScroll;
        })
    }
    onScrollHeader();
});

let navbar = document.querySelector('.navbar'),
    checkboxNavBar = document.querySelector('#checkbox-nav-bar'),
    logoNavBar = document.querySelector('#logo'),
    menuNavBar = document.querySelector('.menu'),
    linksNavBar = document.querySelector('.links'),
    languageGroup1 = document.querySelector('#language-group-1'),
    languageGroup2 = document.querySelector('#language-group-2'),
    mobilePhone = document.querySelector('#mobile-phone'),
    screenshots1 = document.querySelector('#screenshots-1'),
    screenshots2 = document.querySelector('#screenshots-2'),
    firstKasumibox = document.querySelector('#first-kasumi-box'),
    secondKasumibox = document.querySelector('#second-kasumi-box'),
    linksClone = document.querySelector('#links'),
    menuClone = document.querySelector('#menu'),
    logoClone = logoNavBar,
    mobileNavigationButtons = document.querySelector('.mobile-nav'),
    mobilePhoneCard = document.getElementById('mobile-phone-card');

let checkboxNavBarCounter = 0;

checkboxNavBar.addEventListener('click', function(){
    checkboxNavBarCounter++;
    (checkboxNavBarCounter % 2 == 1) ? setTimeout(() => logoNavBar.remove(), 200) : 
    setTimeout(() => menuNavBar.parentNode.prepend(logoNavBar), 300);
})

function windowSetting(){
    if(document.body.clientWidth >= 1024) {
        navbar.style.position = 'sticky';
        menuNavBar.replaceWith(linksClone);
        if (location.pathname.includes('about')){
            languageGroup2.style.width = `${languageGroup1.offsetWidth}px`
        } else if (location.pathname.includes('projects')){    
            secondKasumibox.style.width =  (firstKasumibox.getBoundingClientRect().top != secondKasumibox.getBoundingClientRect().top) ? `${firstKasumibox.offsetWidth}px` : 'auto';

            mobileNavigationButtons.remove();
            mobilePhone.parentNode.prepend(screenshots1);
            mobilePhone.parentNode.append(screenshots2);
        }
    } else {
        navbar.style.position = 'relative';
        linksNavBar.replaceWith(menuClone);
        if(document.body.clientWidth < 700){
            if (location.pathname.includes('about')){
                languageGroup2.style.width = `${languageGroup1.offsetWidth}px`
            } else if (location.pathname.includes('projects')){    
                secondKasumibox.style.width =  (firstKasumibox.getBoundingClientRect().top != secondKasumibox.getBoundingClientRect().top) ? `${firstKasumibox.offsetWidth}px` : 'auto';

                mobilePhoneCard.parentNode.append(mobileNavigationButtons);
                screenshots1.remove();
                screenshots2.remove();
            }
        }
    }
}
window.onload = function() {
    windowSetting();

    let bottomAppearedElements = document.querySelectorAll('.bottom-appearance-animation'),
        topAppearedElements = document.querySelectorAll('.top-appearance-animation'),
        topMobileAppearedElements = document.querySelectorAll('.top-mobile-appearance-animation'),
        leftAppearedElements = document.querySelectorAll('.left-large-appearance-animation'),
        rightAppearedElements = document.querySelectorAll('.right-large-appearance-animation');

    for (let element of bottomAppearedElements) {
        observer.observe(element);
    }
    for (let element of topAppearedElements) {
        observer.observe(element);
    }
    for (let element of topMobileAppearedElements) { 
        if(document.body.clientWidth < 1024) {
        observer.observe(element); 
        }
    }
    for (let element of rightAppearedElements) { 
        if(document.body.clientWidth >= 1024) {
            observer.observe(element);
        }
    }
    for (let element of leftAppearedElements) {
        if(document.body.clientWidth >= 1024) {
            observer.observe(element);
        }
    }
    
    if(location.pathname.includes('index') || location.pathname.split('').pop() == '/'){
        document.getElementById('telegram-button').onclick = function() {
            window.location.href = "https://t.me/perpetuumm0bi1e";
        }
    } else if (location.pathname.includes('projects')){
        
    let mobilePhoneScreenShots = ['./img/perfectPosture/main.svg',
        './img/perfectPosture/profile.svg',
        './img/perfectPosture/settings.svg',
        './img/perfectPosture/statisticsDay.svg',
        './img/perfectPosture/statisticsWeek.svg',
        './img/perfectPosture/statisticsCourse.svg'
    ];
    
    let kasumiFirstBoxImages = ['https://i.ibb.co/C5PHd54/kasumi-Encryption.jpg',
        'https://i.ibb.co/njcKYJq/kasumi-Decryption.jpg'
    ];
    let kasumiSecondBoxImages = ['https://i.ibb.co/Bnrztbz/kasumi-Algorithm.jpg',
        'https://i.ibb.co/gt20RP4/kasumiFI.jpg',
        'https://i.ibb.co/cC00qZ2/kasumiFO.jpg',
        'https://i.ibb.co/q5r8PXn/kasumiFL.jpg'
    ];
    let kasumiFirstBoxImagesSmall = ['https://i.ibb.co/rFMpjmq/kasumi-Encryption-small.jpg',
        'https://i.ibb.co/1bWVNFL/kasumi-Decryption-small.png'
    ];
    let kasumiSecondBoxImagesSmall = ['https://i.ibb.co/JQ12ybH/kasumi-Algorithm-small.jpg',
        'https://i.ibb.co/yY6qGDj/kasumi-FI-small.jpg',
        'https://i.ibb.co/r58YBVT/kasumi-FO-small.jpg',
        'https://i.ibb.co/rQYmpmj/kasumi-FL-small.jpg'
    ];
    
    let proCreditBoxImages = ['https://i.ibb.co/dfpgPhb/pro-Credit1.jpg',
        'https://i.ibb.co/2F92zFb/pro-Credit2.jpg',
        'https://i.ibb.co/XFNQZLN/pro-Credit3.jpg',
        'https://i.ibb.co/HXn2Xw0/pro-Credit4.jpg',
        'https://i.ibb.co/89Xg6TC/pro-Credit5.jpg',
        'https://i.ibb.co/LrJtPHY/pro-Credit6.jpg',
        'https://i.ibb.co/mqsNCmw/pro-Credit7.jpg',
        'https://i.ibb.co/ct33vrS/pro-Credit8.jpg'
    ];
    
    let proCreditBoxImagesSmall = ['https://i.ibb.co/khp66W5/pro-Credit1-small.jpg',
        'https://i.ibb.co/1JFZ0yM/pro-Credit2-small.jpg',
        'https://i.ibb.co/ZTyXV01/pro-Credit3-small.jpg',
        'https://i.ibb.co/M2cmp03/pro-Credit4-small.jpg',
        'https://i.ibb.co/4Ym7NBx/pro-Credit5-small.jpg',
        'https://i.ibb.co/r66XpF7/pro-Credit6-small.jpg',
        'https://i.ibb.co/6sRp0b4/pro-Credit7-small.jpg',
        'https://i.ibb.co/zQ4XZrj/pro-Credit8-small.jpg'
    ];
    
    let basketballFlightModelingBoxImages = ['https://i.ibb.co/BjfZZLs/basketball-Flight-Modeling1.jpg',
        'https://i.ibb.co/4mgg66T/basketball-Flight-Modeling2.jpg',
        'https://i.ibb.co/N1s2JRb/basketball-Flight-Modeling3.jpg',
        'https://i.ibb.co/TLvHZxT/basketball-Flight-Modeling4.jpg',
        'https://i.ibb.co/r3DVr7F/basketball-Flight-Modeling5.jpg',
        'https://i.ibb.co/0MtwPQz/basketball-Flight-Modeling6.jpg',
        'https://i.ibb.co/cy6dFs5/basketball-Flight-Modeling7.jpg',
        'https://i.ibb.co/fqNpjpV/basketball-Flight-Modeling8.jpg',
        'https://i.ibb.co/5MWJjXZ/basketball-Flight-Modeling9.jpg',
        'https://i.ibb.co/P1qvzzR/basketball-Flight-Modeling10.jpg'
    ];
    
    let basketballFlightModelingBoxImagesSmall = ['https://i.ibb.co/hVvGs7z/basketball-Flight-Modeling1-small.jpg',
        'https://i.ibb.co/1Z99hCh/basketball-Flight-Modeling2-small.jpg',
        'https://i.ibb.co/f9nk1R8/basketball-Flight-Modeling3-small.jpg',
        'https://i.ibb.co/gFfw74Z/basketball-Flight-Modeling4-small.jpg',
        'https://i.ibb.co/8NN21KM/basketball-Flight-Modeling5-small.jpg',
        'https://i.ibb.co/cQ1sMbZ/basketball-Flight-Modeling6-small.jpg',
        'https://i.ibb.co/CM6ffjK/basketball-Flight-Modeling7-small.jpg',
        'https://i.ibb.co/BfRhtvL/basketball-Flight-Modeling8-small.jpg',
        'https://i.ibb.co/qnmkQYp/basketball-Flight-Modeling9-small.jpg',
        'https://i.ibb.co/Z2cjG0w/basketball-Flight-Modeling10-small.jpg'
    ];
    
    let studentsKnowledgeControlBoxImages = ['https://i.ibb.co/7Cb90C8/students-Knowledge-Control1.jpg',
        'https://i.ibb.co/DKRBDWF/students-Knowledge-Control2.jpg',
        'https://i.ibb.co/Jy29cxR/students-Knowledge-Control3.jpg',
        'https://i.ibb.co/pRMVqd8/students-Knowledge-Control4.jpg',
        'https://i.ibb.co/mT0D3zn/students-Knowledge-Control5.jpg',
        'https://i.ibb.co/RCpZ6Y9/students-Knowledge-Control6.jpg',
        'https://i.ibb.co/rsxVv8P/students-Knowledge-Control7.jpg',
        'https://i.ibb.co/M2VwhFL/students-Knowledge-Control8.jpg',
        'https://i.ibb.co/FHW5WCJ/students-Knowledge-Control9.jpg',
        'https://i.ibb.co/gRCPdFD/students-Knowledge-Control10.jpg',
        'https://i.ibb.co/FwRRNhm/students-Knowledge-Control11.jpg',
        'https://i.ibb.co/z4rHzTD/students-Knowledge-Control12.jpg'
    ];
    
    let studentsKnowledgeControlBoxImagesSmall = ['https://i.ibb.co/WkC5YZG/students-Knowledge-Control1-small.jpg',
        'https://i.ibb.co/0Qs9t0s/students-Knowledge-Control2-small.jpg',
        'https://i.ibb.co/YXb2yWg/students-Knowledge-Control3-small.jpg',
        'https://i.ibb.co/C9741Tp/students-Knowledge-Control4-small.jpg',
        'https://i.ibb.co/72vBbhY/students-Knowledge-Control5-small.jpg',
        'https://i.ibb.co/C5td7ZT/students-Knowledge-Control6-small.jpg',
        'https://i.ibb.co/rsWHrdL/students-Knowledge-Control7-small.jpg',
        'https://i.ibb.co/8xJZbxT/students-Knowledge-Control8-small.jpg',
        'https://i.ibb.co/2kjptMg/students-Knowledge-Control9-small.jpg',
        'https://i.ibb.co/kKVZCn5/students-Knowledge-Control10-small.jpg',
        'https://i.ibb.co/2ZYrryR/students-Knowledge-Control11-small.jpg',
        'https://i.ibb.co/r0Kh2Wj/students-Knowledge-Control12-small.jpg'
    ];
    
    let worksCardFirst = document.getElementsByClassName('works-card-first'),
        firstKasumiBoxNavigationLeft = document.getElementById('first-kasumi-box-navigation-left'),
        firstKasumiBoxNavigationRight = document.getElementById('first-kasumi-box-navigation-right'),
        secondKasumiBoxNavigationLeft = document.getElementById('second-kasumi-box-navigation-left'),
        secondKasumiBoxNavigationRight = document.getElementById('second-kasumi-box-navigation-right'),
        fourthWorkEncryptionDecryption = document.getElementById('kasumi-encryption-decryption-image'),
        fourthWorkAlgorithmImages = document.getElementById('kasumi-algorithm-image'),
        proCreditBoxNavigationLeft = document.getElementById('pro-credit-box-navigation-left'),
        proCreditBoxNavigationRight = document.getElementById('pro-credit-box-navigation-right'),
        mobilePhoneNavigationLeft = document.getElementById('mobile-phone-navigation-left'),
        mobilePhoneNavigationRight = document.getElementById('mobile-phone-navigation-right'),
        proCreditImage = document.getElementById('pro-credit-image'),
        basketballFlightModelingBoxNavigationLeft = document.getElementById('basketball-flight-modeling-box-navigation-left'),
        basketballFlightModelingBoxNavigationRight = document.getElementById('basketball-flight-modeling-box-navigation-right'),
        basketballFlightModelingImage = document.getElementById('basketball-flight-modeling-image'),
        studentsKnowledgeControlBoxNavigationLeft = document.getElementById('students-knowledge-control-box-navigation-left'),
        studentsKnowledgeControlBoxNavigationRight = document.getElementById('students-knowledge-control-box-navigation-right'),
        studentsKnowledgeControlImage = document.getElementById('students-knowledge-control-image');

    let firstKasumiBoxNavigationClickCounter = 0,
        secondKasumiBoxNavigationClickCounter = 0,
        proCreditBoxNavigationClickCounter = 0,
        mobilePhoneNavigationClickCounter = 0,
        basketballFlightModelingNavigationClickCounter = 0,
        studentsKnowledgeControlClickCounter = 0;
    
    for (let i = 0; i < worksCardFirst.length; i++) {
        worksCardFirst[i].onmouseover = function() {
            mobilePhoneCard.style.backgroundImage = `url(${mobilePhoneScreenShots[i]})`;
        }
        worksCardFirst[i].onmouseleave = function() {}
    }
    document.getElementById('interactive-layout-button-1').onclick = function() {
        window.location.href = "https://www.figma.com/proto/1l01NZ1BpN7Q5N1txMbLT4/PerfectPosture?page-id=0%3A1&node-id=202-344&viewport=-269%2C450%2C0.07&scaling=scale-down&starting-point-node-id=202%3A344";
    }
    document.getElementById('git-button-1').onclick = function() {
        window.location.href = "https://github.com/perpetuumm0bi1e/StudentsKnowledgeControl";
    }
    document.getElementById('git-button-2').onclick = function() {
        window.location.href = "https://github.com/perpetuumm0bi1e/ProCredit";
    }
    document.getElementById('git-button-3').onclick = function() {
        window.location.href = "https://github.com/perpetuumm0bi1e/Kasumi";
    }
    document.getElementById('git-button-4').onclick = function() {
        window.location.href = "https://github.com/perpetuumm0bi1e/BasketballFlightModeling";
    }
    document.getElementById('visit-site-1').onclick = function() {
        window.location.href = "https://perpetuumm0bi1e.github.io/Mark/";
    }
    function boxImageChanger(clickCounter, imageBox, imagesArray, smallImagesArray) {
        imageBox.style.backgroundImage = (clickCounter < 0) ? 
        ((document.body.clientWidth >= 1024) ? 
            `url(${imagesArray[imagesArray.length - 1 + (clickCounter % imagesArray.length)]})` :  
            `url(${smallImagesArray[smallImagesArray.length - 1 + (clickCounter % smallImagesArray.length)]})`) : 
        ((document.body.clientWidth >= 1024) ? 
            `url(${imagesArray[clickCounter % smallImagesArray.length]})` : 
            `url(${smallImagesArray[clickCounter % smallImagesArray.length]})`);
    }
    try{
        mobilePhoneNavigationLeft.onclick = function() {
            mobilePhoneNavigationClickCounter--;
            boxImageChanger(mobilePhoneNavigationClickCounter, mobilePhoneCard, mobilePhoneScreenShots, mobilePhoneScreenShots);
        }
        mobilePhoneNavigationRight.onclick = function() {
            mobilePhoneNavigationClickCounter++;
            boxImageChanger(mobilePhoneNavigationClickCounter, mobilePhoneCard, mobilePhoneScreenShots, mobilePhoneScreenShots);
        }
    } catch {
        console.log('no navigations buttons;')
    }
    firstKasumiBoxNavigationLeft.onclick = function() {
        firstKasumiBoxNavigationClickCounter--;
        boxImageChanger(firstKasumiBoxNavigationClickCounter, fourthWorkEncryptionDecryption, kasumiFirstBoxImages, kasumiFirstBoxImagesSmall);
    }
    firstKasumiBoxNavigationRight.onclick = function() {
        firstKasumiBoxNavigationClickCounter++;
        boxImageChanger(firstKasumiBoxNavigationClickCounter, fourthWorkEncryptionDecryption, kasumiFirstBoxImages, kasumiFirstBoxImagesSmall);
    }
    secondKasumiBoxNavigationLeft.onclick = function() {
        secondKasumiBoxNavigationClickCounter--;
        boxImageChanger(secondKasumiBoxNavigationClickCounter, fourthWorkAlgorithmImages, kasumiSecondBoxImages, kasumiSecondBoxImagesSmall);
    }
    secondKasumiBoxNavigationRight.onclick = function() {
        secondKasumiBoxNavigationClickCounter++;
        boxImageChanger(secondKasumiBoxNavigationClickCounter, fourthWorkAlgorithmImages, kasumiSecondBoxImages, kasumiSecondBoxImagesSmall);
    }
    basketballFlightModelingBoxNavigationLeft.onclick = function() {
        basketballFlightModelingNavigationClickCounter--;
        boxImageChanger(basketballFlightModelingNavigationClickCounter, basketballFlightModelingImage, basketballFlightModelingBoxImages, basketballFlightModelingBoxImagesSmall);
    }
    basketballFlightModelingBoxNavigationRight.onclick = function() {
        basketballFlightModelingNavigationClickCounter++;
        boxImageChanger(basketballFlightModelingNavigationClickCounter, basketballFlightModelingImage, basketballFlightModelingBoxImages, basketballFlightModelingBoxImagesSmall);
    }
    studentsKnowledgeControlBoxNavigationLeft.onclick = function() {
        studentsKnowledgeControlClickCounter--;
        boxImageChanger(studentsKnowledgeControlClickCounter, studentsKnowledgeControlImage, studentsKnowledgeControlBoxImages, studentsKnowledgeControlBoxImagesSmall);
    }
    studentsKnowledgeControlBoxNavigationRight.onclick = function() {
        studentsKnowledgeControlClickCounter++;
        boxImageChanger(studentsKnowledgeControlClickCounter, studentsKnowledgeControlImage, studentsKnowledgeControlBoxImages, studentsKnowledgeControlBoxImagesSmall);
    }
    proCreditBoxNavigationLeft.onclick = function() {
        proCreditBoxNavigationClickCounter--;
        boxImageChanger(proCreditBoxNavigationClickCounter, proCreditImage, proCreditBoxImages, proCreditBoxImagesSmall);
    }
    proCreditBoxNavigationRight.onclick = function() {
        proCreditBoxNavigationClickCounter++;
        boxImageChanger(proCreditBoxNavigationClickCounter, proCreditImage, proCreditBoxImages, proCreditBoxImagesSmall);
    }
    } else if (location.pathname.includes('about')){
    } else if (location.pathname.includes('contacts')){
        document.getElementById('telegram').onclick = function() {
            window.location.href = "https://t.me/perpetuumm0bi1e";
        }
        document.getElementById('instagram').onclick = function() {
            window.location.href = "https://instagram.com/perpetuumm0bi1e";
        }
        document.getElementById('github').onclick = function() {
            window.location.href = "https://github.com/perpetuumm0bi1e";
        }
        document.getElementById('email').onclick = function() {
            window.location.href = "mailto:kat.kus@mail.ru";
        }
    }
}
window.addEventListener('resize', function(event){
    windowSetting();
 });


