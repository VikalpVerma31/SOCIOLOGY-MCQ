const questions = [
    {
        question:"समाजशास्त्रियों के अनुसार लैंगिक विषमता का सम्बन्ध किससे है ?",
        answers: [
            { text: "राजनीतिक मूल्यों से", correct: false},
            { text: "सामाजिक मूल्यों से", correct: true},
            { text: "आर्थिकी", correct: false},
            { text: "जनसंख्या", correct: false},
        ] 
    },
    {
        question:"भारत में अल्पसंख्यक समुदाय के निर्धारण का आधार क्या है ?",
        answers: [
            { text: "राष्ट्रीयता", correct: false},
            { text: "धर्म", correct: true},
            { text: "प्रजाति", correct: false},
            { text: "भाषा", correct: false},
        ] 
    },
    {
        question:"निम्न में से कौन जाति व्यवस्था का दोष है ?",
        answers: [
            { text: "अस्पृश्यता की समस्या", correct: false},
            { text: "जातिगत संघर्ष", correct: false},
            { text: "सामाजिक शोषण", correct: false},
            { text: "उपर्युक्त सभी", correct: true},
        ] 
    },
    {
        question:"‘द मिथ ऑफ द वेलफेयर स्टेट’ नामक पुस्तक के लेखक हैं",
        answers: [
            { text: "एच० डी० लास्की", correct: true},
            { text: "कार्ल मार्क्स", correct: false},
            { text: "ए० आर० देसाई", correct: false},
            { text: "डी० पी० मुखर्जी", correct: false},
        ] 
    },
    {
        question:"पितृसत्ता में परंपरा और व्यवहार के नियमों द्वारा",
        answers: [
            { text: "स्त्रियों की शक्ति अधिक होती है", correct: false},
            { text: "पुरुषों की शक्ति अधिक होती है", correct: true},
            { text: "स्त्री और पुरुष की शक्ति समान होती", correct: false},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },
    {
        question:"किसने कहा है ? “पितृसत्ता पुरुषों की सत्ता का संस्थाकरण है।",
        answers: [
            { text: "जी० लर्नर", correct: true},
            { text: "वेस्टर मार्क", correct: false},
            { text: "पणिकर", correct: false},
            { text: "लुण्डबर्ग", correct: false},
        ] 
    },
    {
        question:"निम्न में से कौन जातिवाद के निवारण का उपाय है ?",
        answers: [
            { text: "जातीय संगठनों पर प्रतिबंध", correct: false},
            { text: "अंतर्जातीय विवाह", correct: false},
            { text: "सामाजिक शिक्षा", correct: false},
            { text: "उपर्युक्त सभी", correct: true},
        ] 
    },
    {
        question:"भारतीय समाज की सामाजिक बुराइयों के विरुद्ध किसने प्रयत्न किया  ?",
        answers: [
            { text: "ज्योतिबा फूले", correct: true},
            { text: "स्वामी दयानन्द", correct: false},
            { text: "स्वामी रामानन्द", correct: false},
            { text: "रामकृष्ण मालवीय", correct: false},
        ] 
    },
    {
        question:"सामाजिक अध्ययन में प्रयोग होता है ?",
        answers: [
            { text: "प्रश्नावली", correct: false},
            { text: "साक्षात्कार", correct: false},
            { text: "अनुसूची", correct: false},
            { text: "तीनों का", correct: true},
        ] 
    },
    {
        question:"समेकित ग्रामीण विकास कार्यक्रम कब प्रारंभ हुआ ?",
        answers: [
            { text: "1960-61", correct: true},
            { text: "1965-66", correct: false},
            { text: "1977-78", correct: false},
            { text: "1991-92", correct: false},
        ] 
    },
    {
        question:"किसने कहा “नगरीयता एक जीवन पद्धति",
        answers: [
            { text: "रौस", correct: false},
            { text: "बर्गल", correct: false},
            { text: "विर्थ", correct: false},
            { text: "कारपेन्टर", correct: true},
        ] 
    },
    {
        question:"कब सती प्रथा निषेध अधिनियम पारित हुआ ?",
        answers: [
            { text: "सन् 1825 ई०", correct: false},
            { text: "सन् 1859 ई०", correct: false},
            { text: "सन् 1832 ई०", correct: false},
            { text: "सन् 1835 ई०", correct: true},
        ] 
    },
    {
        question:"आर्य समाज की स्थापना कब हुई ?",
        answers: [
            { text: "1875", correct: true},
            { text: "1879", correct: false},
            { text: "1882", correct: false},
            { text: "1884", correct: false},
        ] 
    },
    {
        question:"स्त्रियों व कन्याओं का अनैतिक व्यापार अधिनियम कब पारित हुआ ?",
        answers: [
            { text: "सन् 1952", correct: false},
            { text: "सन् 1954", correct: false},
            { text: "सन् 1956", correct: true},
            { text: "सन् 1960", correct: false},
        ] 
    },
    {
        question:" गाँव से लोगों का शहर की ओर आना और शहरी मूल्यों को अपनाने को क्या कहते हैं ?",
        answers: [
            { text: "औद्योगिकीकरण", correct: false},
            { text: "नगरीकरण", correct: true},
            { text: "संस्कृतीकरण", correct: false},
            { text: "पश्चिमीकरण", correct: false},
        ] 
    },
    {
        question:"किसने कहा कि, “केवल उत्पादन में होने वाली वृद्धि और प्रति व्यक्ति आय में वृद्धि होना आधुनिकीकरण नहीं है ?",
        answers: [
            { text: "एम० एन० श्रीनिवास", correct: false},
            { text: "एस० सी० दुबे", correct: true},
            { text: "डॉ० योगेन्द्र सिंह", correct: false},
            { text: "डॉ० पी० सिंहा", correct: false},
        ] 
    },
    {
        question:"‘सोशल चेंज इन मॉडर्न इंडिया’ नामक के लेखक कौन हैं ?",
        answers: [
            { text: "श्रीनिवास", correct: true},
            { text: "घुरिये", correct: false},
            { text: "कॉम्ट", correct: false},
            { text: "योगेन्द्र सिंह", correct: false},
        ] 
    },
    {
        question:"ब्राह्मणीकरण की अवधारणा किनके द्वारा दी गई है ?",
        answers: [
            { text: "श्रीनिवास", correct: true},
            { text: "हेतुकर झा", correct: false},
            { text: "सच्चिदानंद", correct: false},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },
    {
        question:"धर्म-निरपेक्षीकरण की प्रक्रिया किस विचार को अधिक प्रभावित करता है ?",
        answers: [
            { text: "पवित्रता", correct: false},
            { text: "अपवित्रता", correct: false},
            { text: "पवित्रता व अपवित्रता", correct: false},
            { text: "इनमें से कोई नहीं", correct: true},
        ] 
    },
    {
        question:"ग्रामीण से नगरीय क्षेत्र में रूपांतरित होने वाला पहला देश कौन है ?",
        answers: [
            { text: "ब्रिटेन", correct: true},
            { text: "अमेरिका", correct: false},
            { text: " फ्रांस", correct: false},
            { text: "कनाडा", correct: false},
        ] 
    },
    {
        question:" “मॉडनाइजेशन ऑफ इंडियन ट्रेडिशन” नामक पुस्तक किसने लिखी है ?",
        answers: [
            { text: "एम० एस० राव", correct: false},
            { text: "रवीन्द्रनाथ मुखर्जी", correct: false},
            { text: "योगेन्द्र सिंह", correct: true},
            { text: "एम० एन० श्रीनिवास", correct: false},
        ] 
    },
    {
        question:"“अर्बनाइजेशन ऐन्ड सोशल चेन्ज” नामक पुस्तक किसने लिखी है ?",
        answers: [
            { text: "बर्गेल", correct: false},
            { text: "एम० एस० राव", correct: true},
            { text: "एन्डसन", correct: false},
            { text: "सोरोकन", correct: false},
        ] 
    },
    {
        question:"दहेज निरोधक अधिनियम कब पारित किया गया ?",
        answers: [
            { text: "1960", correct: false},
            { text: "1961", correct: true},
            { text: "1970", correct: false},
            { text: "1962", correct: false},
        ] 
    },
    {
        question:"आर्य समाज के संस्थापक कौन थे ?",
        answers: [
            { text: "राजाराम मोहन राय", correct: false},
            { text: "गोविन्द राणाडे", correct: false},
            { text: "दयानन्द सरस्वती", correct: true},
            { text: "नारायण जोशी", correct: false},
        ] 
    },
    {
        question:"भारत में किसने सर्वप्रथम सतीप्रथा के विरुद्ध आवाज उठाई थी ?",
        answers: [
            { text: "ईश्वरचन्द्र विद्यासागर", correct: false},
            { text: "महात्मा गाँधी", correct: false},
            { text: "राजाराम मोहन राय", correct: true},
            { text: "ऐनी बेसेन्ट", correct: false},
        ] 
    },
    {
        question:"बाल विवाह निरोधक अधिनियम किस साल लागू हुआ ?",
        answers: [
            { text: "1929", correct: true},
            { text: "1939", correct: false},
            { text: "1910", correct: false},
            { text: "1925", correct: false},
        ] 
    },
    {
        question:"किसने कहा “ग्रामीण क्षेत्रों का नगरीय क्षेत्रों में बदलने की प्रक्रिया को हम नगरीकरण कहेंगे” ?",
        answers: [
            { text: "श्रीनिवास", correct: false},
            { text: "बर्गल ]", correct: true},
            { text: "फेयरचाइल्ड", correct: false},
            { text: "थॉमसन", correct: false},
        ] 
    },
    {
        question:"“नगरीयता जीवन का एक तरीका है जबकि नगरीकरण एक प्रक्रिया है।” किसने कहा है ?",
        answers: [
            { text: "गाल्पिन", correct: false},
            { text: "वर्थ", correct: true},
            { text: "वर्गेस", correct: false},
            { text: "होमर हियोट", correct: false},
        ] 
    },
    {
        question:"आधुनिकीकरण को समाज की संरचना में परिवर्तन लाने वाली एक महत्त्वपूर्ण प्रक्रिया के रूप में किसने स्पष्ट किया है ?",
        answers: [
            { text: "जार्ज साइमन", correct: false},
            { text: "एम० एन० श्रीनिवास", correct: false},
            { text: "डेनियल लर्नर", correct: true},
            { text: "डा० योगेन्द्र सिंह", correct: false},
        ] 
    },
    {
        question:"औद्योगिक समाज में परिवार किस प्रकार की इकाई है?",
        answers: [
            { text: "आर्थिक", correct: false},
            { text: "उपयोग", correct: true},
            { text: "उत्पादन", correct: false},
            { text: "लाभ", correct: false},
        ] 
    },
    {
        question:"वास्तव में संस्कृतीकरण किस अवधारणाओं को स्पष्ट करता है ?",
        answers: [
            { text: "ब्राह्मणीकरण", correct: false},
            { text: "पर संस्कृतीकरण", correct: false},
            { text: "अग्रिम समाजीकरण एवं अनुकरण", correct: false},
            { text: "उपर्युक्त सभी", correct: true},
        ] 
    },
    {
        question:"पश्चिमीकरण के कारण समाज में किस वर्ग का उदय हुआ ?",
        answers: [
            { text: "उच्च वर्ग", correct: true},
            { text: "निम्न वर्ग", correct: false},
            { text: "मध्य एवं व्यापारी वर्ग", correct: false},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },
    {
        question:"विद्वान ने किसकी गतिशीलता व्यक्त करने के लिए संस्कृतिकरण का उपयोग किया ?",
        answers: [
            { text: "वर्ग की गतिशीलता", correct: false},
            { text: "जाति की गतिशीलता", correct: false},
            { text: " जाति व वर्ग दोनों की गतिशीलता", correct: true},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },
    {
        question:"निम्नलिखित में से कौन-सी- एक दशा औद्योगिक समाज की विशेषता नहीं है ?",
        answers: [
            { text: "हस्तशिल्प का विकास", correct: true},
            { text: "बड़ी मात्रा में उत्पादन", correct: false},
            { text: "व्यक्तिगत लाभ की प्रवृत्ति", correct: false},
            { text: "नयी प्रौद्योगिकी का उपयोग", correct: false},
        ] 
    },
    {
        question:"निम्नलिखित में से किस एक लेखक ने भारत में सामाजिक परिवर्तन की प्रक्रियाओं का विस्तृत वर्णन प्रस्तुत किया ?",
        answers: [
            { text: "पी० एच० प्रभु", correct: false},
            { text: " के० एम० कापड़िया", correct: false},
            { text: "इरावती कर्वे", correct: false},
            { text: "एम० एन० श्रीनिवास", correct: true},
        ] 
    },
    {
        question:"एम० एन० श्रीनिवास ने अपनी पुस्तक ‘Social change in Modern India’ में निम्नलिखित में से कौन-सा मत प्रस्तुत किया है ?",
        answers: [
            { text: "जाति पूर्णतः बंद व्यवस्था है", correct: false},
            { text: "जाति पूर्णतः खुली व्यवस्था है", correct: false},
            { text: "जाति व्यवस्था में गतिशीलता का अवसर निहित है", correct: true},
            { text: "जाति वेग की तरह होती है", correct: false},
        ] 
    },
    {
        question:"दहेज उन्मूलन संशोधन अधिनियम कब पारित हुआ ?",
        answers: [
            { text: "1975", correct: false},
            { text: "1984", correct: false},
            { text: "1990", correct: false},
            { text: "1961", correct: true},
        ] 
    },
    {
        question:"शारदा एक्ट किस वर्ष पारित किया गया ?",
        answers: [
            { text: "1928", correct: false},
            { text: "1929", correct: true},
            { text: "1930", correct: false},
            { text: "1931", correct: false},
        ] 
    },
    {
        question:"निम्नलिखित में कौन-सा कारण भारतीय नारियों की स्थिति में सुधार के लिए उत्तरदायी है ?",
        answers: [
            { text: "संवैधानिक सुविधाएँ", correct: false},
            { text: "शिक्षा का प्रसार", correct: false},
            { text: "अन्तर्जातीय विवाह", correct: false},
            { text: "उपर्युक्त सभी", correct: true},
        ] 
    },
    {
        question:"भारतीय समाज में स्त्रियों की दयनीय स्थिति पर किसने सर्वप्रमुख कार्य किया हैं ?",
        answers: [
            { text: "राजा राममोहन राय", correct: false},
            { text: "स्वामी दयानन्द सरस्वती", correct: false},
            { text: "ईश्वरचन्द्र विद्यासागर ", correct: false},
            { text: "उपर्युक्त सभी", correct: true},
        ] 
    },
    {
        question:"किस वर्ष स्त्रियों को अपने पति से भरण-पोषण की राशि प्राप्त करने का अधिकार दिया गया ?",
        answers: [
            { text: "1936 ई०", correct: false},
            { text: "1946 ई०", correct: true},
            { text: "1856 ई०", correct: false},
            { text: "1966 ई०", correct: false},
        ] 
    },
    {
        question:"आर्थिक शोषण के विरुद्ध स्त्रियों की दशा सुधारने के लिए समान वेतन अधिनियम’ कब पारित हुआ ?",
        answers: [
            { text: "सन् 1974", correct: false},
            { text: "सन् 1976", correct: true},
            { text: "सन् 1978", correct: false},
            { text: "सन् 1980", correct: false},
        ] 
    },
    {
        question:"ब्रह्म समाज की स्थापना किसने की ?",
        answers: [
            { text: "बाल गंगाधर तिलक", correct: false},
            { text: "राजा राममोहन राय", correct: true},
            { text: "महात्मा गाँधी", correct: false},
            { text: "ईश्वरचंद्र विद्यासागर", correct: false},
        ] 
    },
    {
        question:"सामाजिक परिवर्तन का तात्पर्य है –",
        answers: [
            { text: "सामाजिक संबंधों में परिवर्तन", correct: true},
            { text: "सामाजिक समूहों में परिवर्तन", correct: false},
            { text: "सामाजिक अन्तः क्रियाओं में परिवर्तन", correct: false},
            { text: "उपरोक्त सभी", correct: false},
        ] 
    },
    {
        question:"भारत में किस वर्ष समेकित बाल विकास सेवा कार्यक्रम प्रारंभ किया गया ?",
        answers: [
            { text: "1975", correct: true},
            { text: "1974", correct: false},
            { text: "2011", correct: false},
            { text: "1985", correct: false},
        ] 
    },
    {
        question:"“आधुनिक भारत में सामाजिक परिवर्तन’ नामक पुस्तक के लेखक कौन हैं ?",
        answers: [
            { text: "एम० एन० श्रीनिवास", correct: true},
            { text: "आर० के० मुखर्जी", correct: false},
            { text: "डी० पी० मुखर्जी", correct: false},
            { text: "एस० सी० दूबे नर", correct: false},
        ] 
    },
    {
        question:"श्रीनिवास ने पश्चिमीकरण की प्रक्रिया के मॉडल के रूप में से निम्न में से किसे आधार माना ?",
        answers: [
            { text: "नयी प्रौद्योगिकी", correct: false},
            { text: "आधुनिकीकरण", correct: false},
            { text: " शिक्षण संस्थायें", correct: false},
            { text: "150 वर्ष के ब्रिटिश शासन", correct: true},
        ] 
    },
    {
        question:"भारत में संस्कृततिकरण को प्रोत्साहित करने वाली दशायें कौन सी है ?",
        answers: [
            { text: "संस्कृति की शिक्षा", correct: false},
            { text: "महिला आन्दोलन", correct: false},
            { text: "औद्योगीकरण व नगरीकरण", correct: true},
            { text: "जनजातीय आन्दोलन", correct: false},
        ] 
    },
    {
        question:"किसने कहा कि नगरीकरण ही आधुनिकीकरण का प्रथम चरण है ?",
        answers: [
            { text: "मैकाईवर", correct: false},
            { text: "लर्नर", correct: false},
            { text: "श्रीनिवास", correct: true},
            { text: "बर्गल", correct: false},
        ] 
    },
    {
        question:"निम्न में से कौन धर्म का प्रकार्य नहीं है ?",
        answers: [
            { text: "सामाजिक संगठन में बाधक", correct: true},
            { text: "सामाजिक नियंत्रण का साधन", correct: false},
            { text: "सामाजिक संगठन में सहायक", correct: false},
            { text: "सर्व कल्याण में सहायक", correct: false},
        ] 
    },







    
 
   
];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
} 

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "start quiz again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz(); 