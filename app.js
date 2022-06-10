let Flags = document.querySelector(".flags");
let UsaImage = document.createElement("img");
let UzbImage = document.createElement("img");
let ProductImage = document.createElement("img");
let UzbButton = document.querySelectorAll("button")[0];
let UsaButton = document.querySelectorAll("button")[1];
let H2 = document.querySelector("h2");

let Input = document.querySelector("input");

Flags.appendChild(UsaImage);

Flags.appendChild(ProductImage);

Flags.appendChild(UzbImage);
UzbButton.style.display = "none";
UzbImage.src = "./photo_2022-06-08_14-41-19.jpg";
UsaImage.src = "./photo_2022-06-08_14-41-31.jpg";
H2.innerHTML = "Result : ";
let change = false;
const changeLang = () => {
  if (change === false) {
    UzbButton.style.display = "block";
    UsaButton.style.display = "none";
    result = "Natija : ";
    Input.value = "";
    UsaImage.src = "./photo_2022-06-08_14-41-19.jpg";
    UzbImage.src = "./photo_2022-06-08_14-41-31.jpg";
    change = true;
  } else {
    UzbButton.style.display = "none";
    UsaButton.style.display = "block";
    result = "Result : ";
    Input.value = "";

    UzbImage.src = "./photo_2022-06-08_14-41-19.jpg";
    UsaImage.src = "./photo_2022-06-08_14-41-31.jpg";
    change = false;
  }

};

const UsaToUzb = () => {

  let result = ""

  switch (Input.value.toLowerCase().trim()) {
    case "apple":
      result = "olma";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "tiger":
      result = "Yo'lbars";
      ProductImage.src =
        "https://img2.fonwall.ru/o/eo/tigr-tigry-morda-vzglyad-hjzg.jpg?route=mid&amp;h=750";
      break;
    case "deer":
      result = "Ohu, bug'u";
      ProductImage.src =
        "https://thumbs.dreamstime.com/b/fallow-deer-27633379.jpg";
      break;
    case "dagger":
      result = "xanjar";
      ProductImage.src =
        "https://thumbs.dreamstime.com/b/fantasy-steel-dagger-37548969.jpg";
      break;
    case "dairy":
      result = "sutchilik fermasi";
      ProductImage.src =
        "https://www.nestle.com/sites/default/files/styles/half_half_color_block_image_746_434/public/2022-02/sustainability-dairy-digitalization-slider.jpg?h=16229b22&itok=ErSW5agW";
      break;
    case "adjust":
      H2.innerHTML = "almashtirmoq";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "accommodate":
      H2.innerHTML = "turar-joy";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "abbes":
      H2.innerHTML = "rohiba";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "abbey":
      H2.innerHTML = "abbatlik";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "abbot":
      H2.innerHTML = "abbat";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "abbreviate":
      H2.innerHTML = "qisqartirmoq";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "abdicate":
      H2.innerHTML = "voz kechmoq";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "abdomen":
      H2.innerHTML = "qorin";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "addressee":
      H2.innerHTML = "oluvchi";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "adduce":
      H2.innerHTML = "ko'rsalmoq";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "adducent":
      H2.innerHTML = "musklllni";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "adduction":
      H2.innerHTML = "dalil";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "adenoids":
      H2.innerHTML = "anat";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "adept":
      H2.innerHTML = "bilimdon";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "adequacy":
      H2.innerHTML = "yelarlilik";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "adequate":
      H2.innerHTML = "yetarli";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "adequation":
      H2.innerHTML = "lenglash";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "adhere":
      H2.innerHTML = "yopishmoq";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "adherence":
      H2.innerHTML = "sadoqat";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "adherent":
      H2.innerHTML = "tarafdor";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "adherer":
      H2.innerHTML = "ishqihoz";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "adhesion":
      H2.innerHTML = "yopishish";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "adhesiveness":
      H2.innerHTML = "yopishqoqlik";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "adieu":
      H2.innerHTML = "xayrlashish";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "adipose":
      H2.innerHTML = "mol";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "adiposity":
      H2.innerHTML = "semirish";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "adit":
      H2.innerHTML = "o'tish.";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case " adjacency":
      H2.innerHTML = "qo'shnilik";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case " adjacent":
      H2.innerHTML = "yondosh";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case " adjectival":
      H2.innerHTML = "adjectival";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case " adjective":
      H2.innerHTML = "sifat";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case " adjoining":
      H2.innerHTML = "yondashish";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case " adjourn":
      H2.innerHTML = "keyinga";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case " administration":
      H2.innerHTML = "hllkllmat8";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case " administer":
      H2.innerHTML = "boshqarmoq";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case " admeasure":
      H2.innerHTML = "aniqlamoq";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case " adman":
      H2.innerHTML = "reklama";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case " adjutant":
      H2.innerHTML = "shtab";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case " adjutancy":
      H2.innerHTML = "vazifasi";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case " adjustment":
      H2.innerHTML = "tartibga";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case " adjuster":
      H2.innerHTML = "keltiradigan";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case " adjusted":
      H2.innerHTML = "chiqilgan";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case " adjustable":
      H2.innerHTML = "tartibga";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case " adjust":
      H2.innerHTML = "tartibga";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case " tartibga":
      H2.innerHTML = "adjust";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case " adjure":
      H2.innerHTML = "yalinmoq";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case " adjuration":
      H2.innerHTML = "qasam";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case " adjuration":
      H2.innerHTML = "iltijo";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case " adjunction":
      H2.innerHTML = "ilova";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case " adjunct":
      H2.innerHTML = "shimcha";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case " adjudicator":
      H2.innerHTML = "hakam";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case " adjudicate":
      H2.innerHTML = "hukm";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case " adjudgement":
      H2.innerHTML = "hllkmi";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case " adjudge":
      H2.innerHTML = "hllkm";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case " adjournment":
      H2.innerHTML = "keyinga";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case " administrative":
      H2.innerHTML = "boshqarmaga";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case " administrator":
      H2.innerHTML = "boshqaruvchi";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "fable":
      H2.innerHTML = "masal";
      ProductImage.src = "";
      break;
    case "fabric":
      H2.innerHTML = "gazlama,mato,inshoot";
      ProductImage.src = "";
      break;
    case "fabricate":
      H2.innerHTML = "ixtiro";
      ProductImage.src = "";
      break;
    case "face":
      H2.innerHTML = "yuz";
      ProductImage.src = "";
      break;
    case "facetious":
      H2.innerHTML = "hazilkash";
      ProductImage.src = "";
      break;
    case "facile":
      H2.innerHTML = "yengil";
      ProductImage.src = "";
      break;
    case "facility":
      H2.innerHTML = "yengillik";
      ProductImage.src = "";
      break;
    case "facing":
      H2.innerHTML = "bezak";
      ProductImage.src = "";
      break;
    case "fact":
      H2.innerHTML = "fakt";
      ProductImage.src = "";
      break;
    case "factitious":
      H2.innerHTML = "sun'iy";
      ProductImage.src = "";
      break;
    case "factor":
      H2.innerHTML = "faktor";
      ProductImage.src = "";
      break;
    case "faculity":
      H2.innerHTML = "qobilyat";
      ProductImage.src = "";
      break;
    case "fad":
      H2.innerHTML = "injiqlik";
      ProductImage.src = "";
      break;
    case "fag":
      H2.innerHTML = "mehnat qilmoq";
      ProductImage.src = "";
      break;
    case "faint":
      H2.innerHTML = "kuchsiz";
      ProductImage.src = "";
      break;
    case "fair":
      H2.innerHTML = "halol";
      ProductImage.src = "";
      break;
    case "fairly":
      H2.innerHTML = "odilona";
      ProductImage.src = "";
      break;
    case "fairness":
      H2.innerHTML = "adolat";
      ProductImage.src = "";
      break;
    case "fairway":
      H2.innerHTML = "kemalarning suvda yuraoladigan chuqur joyi";
      ProductImage.src = "";
      break;
    case "fairy":
      H2.innerHTML = "go'zal";
      ProductImage.src = "";
      break;
    case "faith":
      H2.innerHTML = "ishonch";
      ProductImage.src = "";
      break;
    case "fake":
      H2.innerHTML = "soxta";
      ProductImage.src = "";
      break;
    case "falcon":
      H2.innerHTML = "burgut";
      ProductImage.src = "";
      break;
    case "fallacious":
      H2.innerHTML = "xato,yolg'on";
      ProductImage.src = "";
      break;
    case "fallacy":
      H2.innerHTML = "xato,yanglishish";
      ProductImage.src = "";
      break;
    case "fallen":
      H2.innerHTML = "halok";
      ProductImage.src = "";
      break;
    case "fallow":
      H2.innerHTML = "bug'";
      ProductImage.src = "";
      break;
    case "false":
      H2.innerHTML = "xato";
      ProductImage.src = "";
      break;
    case "falsify":
      H2.innerHTML = "soxtalashtirish";
      ProductImage.src = "";
      break;
    case "fame":
      H2.innerHTML = "shon-shuxrat";
      ProductImage.src = "";
      break;
    case "familiar":
      H2.innerHTML = "oddiy";
      ProductImage.src = "";
      break;
    case "familiarity":
      H2.innerHTML = "yaqinlik, (albatta do'stona)";
      ProductImage.src = "";
      break;
    case "familiarize":
      H2.innerHTML = "tanishtirish";
      ProductImage.src = "";
      break;
    case "family":
      H2.innerHTML = "oila";
      ProductImage.src = "";
      break;
    case "famine":
      H2.innerHTML = "ochlik";
      ProductImage.src = "";
      break;
    case "famaous":
      H2.innerHTML = "mashxur";
      ProductImage.src = "";
      break;
    case "fan":
      H2.innerHTML = "yelpig'ich";
      ProductImage.src = "";
      break;
    case "eat":
      H2.innerHTML += "yemoq"
      ProductImg.src = "link"
      break;
    case "eagle":
      H2.innerHTML += "yemoq"
      ProductImg.src = "link"
      break;
    case "emergency":
      H2.innerHTML += "favqulotta h..."
      ProductImg.src = "link"
      break;
    case "earth":
      H2.innerHTML += "yer";
      ProductImg.src = "link"
      break;
    case "extra":
      H2.innerHTML += "qo'shimcha"
      ProductImg.src = "link"
      break;
    case "envelope":
      H2.innerHTML += "maktub";
      ProductImg.src = "link"
      break;
    case "east":
      H2.innerHTML += "sharq"
      ProductImg.src = "link";
      break;
    case "ewerest":
      H2.innerHTML += "evewerst";
      ProductImg.src = "link"
      break;
    case "eddy":
      H2.innerHTML += "eddy";
      ProductImg.src = "link"
      break;
    case "england":
      H2.innerHTML += "angliya";
      ProductImg.src = "link"
      break;
    case "english":
      H2.innerHTML += "inglis tili";
      ProductImg.src = "link"
      break;
    case "enthernet":
      H2.innerHTML += "internet";
      ProductImg.src = "link"
      break;
    case "egg":
      H2.innerHTML += "tuxum";
      ProductImg.src = "link"
      break;
    case "end":
      H2.innerHTML += "tugamoq";
      ProductImg.src = "link"
      break;
    case "expected":
      H2.innerHTML += "kutilayotgan";
      ProductImg.src = "link"
      break;
    case "edge":
      H2.innerHTML += "chet";
      ProductImg.src = "link"
      break;
    case "eco":
      H2.innerHTML += "toza";
      ProductImg.src = "link"
      break;
    case "enjoy":
      H2.innerHTML += "rohatlanmoq";
      ProductImg.src = "link"
      break;
    case "enmotion":
      H2.innerHTML += "enmotsiya";
      ProductImg.src = "link"
      break;
    case "eraser":
      H2.innerHTML += "o'chirg'ich";
      ProductImg.src = "link"
      break;
    case "explore":
      H2.innerHTML += "tadqiq etmoq";
      ProductImg.src = "link"
      break;
    case "electronic":
      H2.innerHTML += "qurilma";
      ProductImg.src = "link"
      break;
    case "enter":
      H2.innerHTML += "kirish";
      ProductImg.src = "link"
      break;
    case "email":
      H2.innerHTML += "eloktron pochta";
      ProductImg.src = "link"
      break;
    case "empty":
      H2.innerHTML += "bo'sh";
      ProductImg.src = "link"
      break;
    case "europe":
      H2.innerHTML += "yevropa";
      ProductImg.src = "link"
      break;
    case "evening":
      H2.innerHTML += "kechqurun";
      ProductImg.src = "link"
      break;
    case "everyone":
      H2.innerHTML += "har biri";
      ProductImg.src = "link"
      break;
    case "excuse":
      H2.innerHTML += "bahona";
      ProductImg.src = "link"
      break;
    case "expensive":
      H2.innerHTML += "qimmat";
      ProductImg.src = "link"
      break;
    case "easy":
      H2.innerHTML += "oson";
      ProductImg.src = "link"
      break;
    case "egypt":
      H2.innerHTML += "misr";
      ProductImg.src = "link"
      break;
    case "egyptian":
      H2.innerHTML += "misrlik";
      ProductImg.src = "link"
      break;
    case "eleven":
      H2.innerHTML += "o'n bir";
      ProductImg.src = "link"
      break;
    case "example":
      H2.innerHTML += "misol";
      ProductImg.src = "link"
      break;
    case "exercise":
      H2.innerHTML += "mashq";
      ProductImg.src = "link"
      break;
    case "exam":
      H2.innerHTML += "imtihon";
      ProductImg.src = "link"
      break;
    case "equal":
      H2.innerHTML += "teng, barobar";
      ProductImg.src = "link"
      break;
    case "earlier":
      H2.innerHTML += "erta, barvaqt";
      ProductImg.src = "link"
      break;
    case "exist":
      H2.innerHTML += "mavjud, bor";
      ProductImg.src = "link"
      break;
    case "enemy":
      H2.innerHTML += "dushman";
      ProductImg.src = "link"
      break;
    case "excellent":
      H2.innerHTML += "juda yahshi, a'lo";
      ProductImg.src = "link"
      break;
    case "experience":
      H2.innerHTML += "tajriba";
      ProductImg.src = "link"
      break;
    case "exchange":
      H2.innerHTML += "ayir boshlamoq";
      ProductImg.src = "link"
      break;
    case "experiment":
      H2.innerHTML += "sinov";
      ProductImg.src = "link"
      break;
    case "environment":
      H2.innerHTML += "muhit";
      ProductImg.src = "link"
      break;
    case "exhibit":
      H2.innerHTML += "namoyish qilmoq";
      ProductImg.src = "link"
      break;
    case "encourage":
      H2.innerHTML += "ruhlantirmoq";
      ProductImg.src = "link"
      break;
    case "empire":
      H2.innerHTML += "imperiya";
      ProductImg.src = "link"
      break;
    case "expect":
      H2.innerHTML += "umid qilmoq";
      ProductImg.src = "link"
      break;
    case "explain":
      H2.innerHTML += "tushintirmoq";
      ProductImg.src = "link"
      break;
    case "enormous":
      H2.innerHTML += "juda katta, ulkan";
      ProductImg.src = "link"
      break;
    case "extraordinary":
      H2.innerHTML += "g'ayritabiiy";
      ProductImg.src = "link"
      break;
    case "ever":
      H2.innerHTML += "qachon bo'lmasin";
      ProductImg.src = "link"
      break;
    case "never":
      H2.innerHTML += "hechqachon";
      ProductImg.src = "link"
      break;
    case "error":
      H2.innerHTML += "xato";
      ProductImg.src = "link"
      break;
    case "experiense":
      H2.innerHTML += "taassurot";
      ProductImg.src = "link"
      break;
    case "escape":
      H2.innerHTML += "qochib qutulmoq";
      ProductImg.src = "link"
      break;
    case "expert":
      H2.innerHTML += "ekspert, mutahasis";
      ProductImg.src = "link"
      break;
    case "emotion":
      H2.innerHTML += "emotsiya";
      ProductImg.src = "link"
      break;
    case "effect":
      H2.innerHTML += "ta'sir";

    default:
      result = "not found";
      ProductImage.src =
        "https://i.pinimg.com/originals/e4/cc/eb/e4cceb993f4a70c1c8ebf33a9b80d5bd.jpg";
      break;

  }
  H2.innerHTML = result

};

const UzbToUsa = () => {
  let result = ""

  switch (Input.value.toLowerCase().trim()) {
    case "olma":
      result = "apple";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "Ohu":
      result = "deer";
      ProductImage.src =
        "https://thumbs.dreamstime.com/b/fallow-deer-27633379.jpg";
      break;
    case "xanjar":
      result = "dagger";
      ProductImage.src =
        "https://thumbs.dreamstime.com/b/fantasy-steel-dagger-37548969.jpg";
      break;
    case "sutchilik fermasi":
      result = "dairy";
      ProductImage.src =
        "https://www.nestle.com/sites/default/files/styles/half_half_color_block_image_746_434/public/2022-02/sustainability-dairy-digitalization-slider.jpg?h=16229b22&itok=ErSW5agW";
      break;
    case "boshqaruvchi":
      result = "administrator";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "boshqarmaga":
      result = "administrative";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "keyinga":
      result = "adjournment";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "hllkm":
      result = "adjudge";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "hllkmi":
      result = "adjudgement";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "hukm":
      result = "adjudicate";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "hakam":
      result = "adjudicator";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "shimcha":
      result = "adjunct";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "ilova":
      result = "adjunction";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "iltijo":
      result = "adjuration";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "qasam":
      result = "adjuration";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "yalinmoq":
      result = "adjure";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "tartibga":
      result = "adjust";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "tartibga":
      result = "adjustable";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "chiqilgan":
      result = "adjusted";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "keltiradigan":
      result = "adjuster";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "keltiradigan":
      result = "adjusting";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "tartibga":
      result = "adjustment";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "vazifasi":
      result = "adjutancy";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "shtab":
      result = "adjutant";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "reklama":
      result = "adman";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "aniqlamoq":
      result = "admeasure";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;

    case "boshqarmoq":
      result = "administer";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case " hllkllmat":
      H2.innerHTML = "administration";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case " keyinga":
      H2.innerHTML = "adjourn";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case " yondashish":
      H2.innerHTML = "adjoining";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case " sifat":
      H2.innerHTML = "adjective";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case " sifat":
      H2.innerHTML = "adjectival";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case " yondosh":
      H2.innerHTML = "adjacent";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case " qo'shnilik":
      H2.innerHTML = "adjacency";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "o'tish.":
      H2.innerHTML = "adit";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "semirish":
      H2.innerHTML = "adiposity";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "mol":
      H2.innerHTML = "adipose";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "xayrlashish":
      H2.innerHTML = "adieu";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "yopishqoqlik":
      H2.innerHTML = "adhesiveness";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "yopishish":
      H2.innerHTML = "adhesion";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "ishqihoz":
      H2.innerHTML = "adherer";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "tarafdor":
      H2.innerHTML = "adherent";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "sadoqat":
      H2.innerHTML = "adherence";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "yopishmoq":
      H2.innerHTML = "adhere";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "lenglash":
      H2.innerHTML = "adequation";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "yetarli":
      H2.innerHTML = "adequate";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "yelarlilik":
      H2.innerHTML = "adequacy";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "bilimdon":
      H2.innerHTML = "adept";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "anat":
      H2.innerHTML = "adenoids";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "dalil":
      H2.innerHTML = "adduction";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "musklllni":
      H2.innerHTML = "adducent";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "ko'rsalmoq":
      H2.innerHTML = "adduce";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "oluvchi":
      H2.innerHTML = "addressee";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "qorin":
      H2.innerHTML = "abdomen";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "voz kechmoq":
      H2.innerHTML = "abdicate";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "qisqartirmoq":
      H2.innerHTML = "abbreviate";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "abbat":
      H2.innerHTML = "abbot";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "abbatlik":
      H2.innerHTML = "abbey";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "rohiba":
      H2.innerHTML = "abbes";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "olma":
      H2.innerHTML = "apple";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "suv ilon":
      H2.innerHTML = "adder";
      ProductImage.src =
        "https://img2.fonwall.ru/o/eo/tigr-tigry-morda-vzglyad-hjzg.jpg?route=mid&amp;h=750";
      break;
    case "Yo'lbars":
      H2.innerHTML = "tiger";
      ProductImage.src =
        "https://img2.fonwall.ru/o/eo/tigr-tigry-morda-vzglyad-hjzg.jpg?route=mid&amp;h=750";
      break;
    case "almashtirmoq":
      H2.innerHTML = "adjust";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "turar-joy":
      H2.innerHTML = "accommodate";
      ProductImage.src =
        "https://s1.1zoom.ru/b5050/761/Apples_Closeup_571244_2048x1152.jpg";
      break;
    case "masal":
      H2.innerHTML = "fable";
      ProductImage.src = "";
      break;
    case "gazlama,mato,inshoot":
      H2.innerHTML = "fabric";
      ProductImage.src = "";
      break;
    case "ixtiro":
      H2.innerHTML = "fabricate";
      ProductImage.src = "";
      break;
    case "yuz":
      H2.innerHTML = "face";
      ProductImage.src = "";
      break;
    case "hazilkash":
      H2.innerHTML = "facetious";
      ProductImage.src = "";
      break;
    case "yengil":
      H2.innerHTML = "facile";
      ProductImage.src = "";
      break;
    case "yengillik":
      H2.innerHTML = "facility";
      ProductImage.src = "";
      break;
    case "bezak":
      H2.innerHTML = "facing";
      ProductImage.src = "";
      break;
    case "fakt":
      H2.innerHTML = "fact";
      ProductImage.src = "";
      break;
    case "sun'iy":
      H2.innerHTML = "factitious";
      ProductImage.src = "";
      break;
    case "faktor":
      H2.innerHTML = "factor";
      ProductImage.src = "";
      break;
    case "qobiliyat":
      H2.innerHTML = "faculity";
      ProductImage.src = "";
      break;
    case "injiqlik":
      H2.innerHTML = "fad";
      ProductImage.src = "";
      break;
    case "mehnat qilmoq":
      H2.innerHTML = "fag";
      ProductImage.src = "";
      break;
    case "kuchsiz":
      H2.innerHTML = "faint";
      ProductImage.src = "";
      break;
    case "halol":
      H2.innerHTML = "fair";
      ProductImage.src = "";
      break;
    case "odilona":
      H2.innerHTML = "fairly";
      ProductImage.src = "";
      break;
    case "adolat":
      H2.innerHTML = "fairness";
      ProductImage.src = "";
      break;
    case "kemalarning suvda yuraoladigan chuqur joyi":
      H2.innerHTML = "fairway";
      ProductImage.src = "";
      break;
    case "go'zal":
      H2.innerHTML = "fairy";
      ProductImage.src = "";
      break;
    case "ishonch":
      H2.innerHTML = "faith";
      ProductImage.src = "";
      break;
    case "soxta":
      H2.innerHTML = "fake";
      ProductImage.src = "";
      break;
    case "burgut":
      H2.innerHTML = "falcon";
      ProductImage.src = "";
      break;
    case "xato,yolg'on":
      H2.innerHTML = "fallacious";
      ProductImage.src = "";
      break;
    case "xato,yanglishish":
      H2.innerHTML = "fallacy";
      ProductImage.src = "";
      break;
    case "halok":
      H2.innerHTML = "fallen";
      ProductImage.src = "";
      break;
    case "bug'":
      H2.innerHTML = "fallow";
      ProductImage.src = "";
      break;
    case "xato":
      H2.innerHTML = "false";
      ProductImage.src = "";
      break;
    case "soxtalashtirsh":
      H2.innerHTML = "falsify";
      ProductImage.src = "";
      break;
    case "shon-shuxrat":
      H2.innerHTML = "fame";
      ProductImage.src = "";
      break;
    case "oddiy":
      H2.innerHTML = "familiar";
      ProductImage.src = "";
      break;
    case "yaqinlik, (albatta do'stona)":
      H2.innerHTML = "familiarity";
      ProductImage.src = "";
      break;
    case "tanishtirish":
      H2.innerHTML = "familiarize";
      ProductImage.src = "";
      break;
    case "oila":
      H2.innerHTML = "family";
      ProductImage.src = "";
      break;
    case "ochlik":
      H2.innerHTML = "famine";
      ProductImage.src = "";
      break;
    case "mashxur":
      H2.innerHTML = "famaous";
      ProductImage.src = "";
      break;
    case "yelpig'ich":
      H2.innerHTML = "fan";
      ProductImage.src = "";
    case "yemoq":
      H2.innerHTML += "eat"
      ProductImg.src = "link"
      break;
    case "burgut":
      H2.innerHTML += "eagle"
      ProductImg.src = "link"
      break;
    case "favqulotta holat":
      H2.innerHTML += "emergensy"
      ProductImg.src = "link"
      break;
    case "yer":
      H2.innerHTML += "earth";
      ProductImg.src = "link"
      break;
    case "qo'shimcha":
      H2.innerHTML += "extra"
      ProductImg.src = "link"
      break;
    case "maktub":
      H2.innerHTML += "envelope";
      ProductImg.src = "link"
      break;
    case "sharq":
      H2.innerHTML += "east"
      ProductImg.src = "link";
      break;
    case "evewerst":
      H2.innerHTML += "ewerest";
      ProductImg.src = "link"
      break;
    case "eddy":
      H2.innerHTML += "Eddy";
      ProductImg.src = "link"
      break;
    case "angliya":
      H2.innerHTML += "england";
      ProductImg.src = "link"
      break;
    case "inglis tili":
      H2.innerHTML += "english";
      ProductImg.src = "link"
      break;
    case "internet":
      H2.innerHTML += "enthernet";
      ProductImg.src = "link"
      break;
    case "tuxum":
      H2.innerHTML += "egg";
      ProductImg.src = "link"
      break;
    case "tugamoq":
      H2.innerHTML += "end";
      ProductImg.src = "link"
      break;
    case "kutilayotgan":
      H2.innerHTML += "expected";
      ProductImg.src = "link"
      break;
    case "chet":
      H2.innerHTML += "edge";
      ProductImg.src = "link"
      break;
    case "toza":
      H2.innerHTML += "eco";
      ProductImg.src = "link"
      break;
    case "rohatlanmoq":
      H2.innerHTML += "enjoy";
      ProductImg.src = "link"
      break;
    case "enmotsiya":
      H2.innerHTML += "enmotion";
      ProductImg.src = "link"
      break;
    case "o'chirg'ich":
      H2.innerHTML += "eraser";
      ProductImg.src = "link"
      break;
    case "tadqiq etmoq":
      H2.innerHTML += "explore";
      ProductImg.src = "link"
      break;
    case "qurilma":
      H2.innerHTML += "electronic";
      ProductImg.src = "link"
      break;
    case "kirish":
      H2.innerHTML += "enter";
      ProductImg.src = "link"
      break;
    case "eloktron pochta":
      H2.innerHTML += "email";
      ProductImg.src = "link"
      break;
    case "bo'sh":
      H2.innerHTML += "empty";
      ProductImg.src = "link"
      break;
    case "yevropa":
      H2.innerHTML += "europe";
      ProductImg.src = "link"
      break;
    case "kechqurun":
      H2.innerHTML += "evening";
      ProductImg.src = "link"
      break;
    case "har biri":
      H2.innerHTML += "everyone";
      ProductImg.src = "link"
      break;
    case "bahona":
      H2.innerHTML += "excuse";
      ProductImg.src = "link"
      break;
    case "qimmat":
      H2.innerHTML += "expensive";
      ProductImg.src = "link"
      break;
    case "oson":
      H2.innerHTML += "easy";
      ProductImg.src = "link"
      break;
    case "misr":
      H2.innerHTML += "egypt";
      ProductImg.src = "link"
      break;
    case "misrlik":
      H2.innerHTML += "egyptian";
      ProductImg.src = "link"
      break;
    case "o'n bir":
      H2.innerHTML += "eleven";
      ProductImg.src = "link"
      break;
    case "misol":
      H2.innerHTML += "example";
      ProductImg.src = "link"
      break;
    case "mashq bajarmoq":
      H2.innerHTML += "exercise";
      ProductImg.src = "link"
      break;
    case "imtihon":
      H2.innerHTML += "exam";
      ProductImg.src = "link"
      break;
    case "teng, barobar":
      H2.innerHTML += "equal";
      ProductImg.src = "link"
      break;
    case "erta, barvaqt":
      H2.innerHTML += "earlier";
      ProductImg.src = "link"
      break;
    case "mavjud, bor":
      H2.innerHTML += "exist";
      ProductImg.src = "link"
      break;
    case "dushman":
      H2.innerHTML += "enemy";
      ProductImg.src = "link"
      break;
    case "juda yahshi, a'lo":
      H2.innerHTML += "excellent";
      ProductImg.src = "link"
      break;
    case "tajriba":
      H2.innerHTML += "experience";
      ProductImg.src = "link"
      break;
    case "ayir boshlamoq":
      H2.innerHTML += "exchange";
      ProductImg.src = "link"
      break;
    case "sinov":
      H2.innerHTML += "experiment";
      ProductImg.src = "link"
      break;
    case "muhit":
      H2.innerHTML += "environment";
      ProductImg.src = "link"
      break;
    case "namoyish qilmoq":
      H2.innerHTML += "exhibit";
      ProductImg.src = "link"
      break;
    case "ruhlantirmoq":
      H2.innerHTML += "encourage";
      ProductImg.src = "link"
      break;
    case "imperiya":
      H2.innerHTML += "empire";
      ProductImg.src = "link"
      break;
    case "umid qilmoq":
      H2.innerHTML += "expect";
      ProductImg.src = "link"
      break;
    case "tushintirmoq": H2.innerHTML += "explain";
      ProductImg.src = "link"
      break;
    case "juda katta":
      H2.innerHTML += "enormous";
      ProductImg.src = "link"
      break;
    case "g'ayritabiiy":
      H2.innerHTML += "extraordinary";
      ProductImg.src = "link"
      break;
    case "qachon bo'lmasin":
      H2.innerHTML += "ever";
      ProductImg.src = "link"
      break;
    case "hechqachon":
      H2.innerHTML += "never";
      ProductImg.src = "link"
      break;
    case "xato":
      H2.innerHTML += "error";
      ProductImg.src = "link"
      break;
    case "taassurot":
      H2.innerHTML += "experiense";
      ProductImg.src = "link"
      break;
    case "qochib qutulmoq":
      H2.innerHTML += "escape";
      ProductImg.src = "link"
      break;
    case "ekspert":
      H2.innerHTML += "expert";
      ProductImg.src = "link"
      break;
    case "emotsiya":
      H2.innerHTML += "emotion";
      ProductImg.src = "link"
      break;
    case "ta'sir":
      H2.innerHTML += "effect";
      ProductImg.src = "link"
      break;
    case "juda muhim":
      H2.innerHTML += "essential";
      ProductImg.src = "link"
      break;
    case "ikkisidan biri":
      H2.innerHTML += "either";
      ProductImg.src = "link"
      break;
    case "hayajonga solmoq":
      H2.innerHTML += "excite";
      ProductImg.src = "link"
      break;
    case "keskin":
      H2.innerHTML += "extreme";
      ProductImg.src = "link"
      break;
    case "boshqa":
      H2.innerHTML += "else";
      ProductImg.src = "link"
      break;
    case "aniq":
      H2.innerHTML += "exact";
      ProductImg.src = "link"
      break;
    case "hursand qilmoq":
      H2.innerHTML += "entertain";
      ProductImg.src = "link"
      break;
    case "harakat":
      H2.innerHTML += "effort";
      ProductImg.src = "link"
      break;
    case "pul ishlab olmoq":
      H2.innerHTML += "earn";
      ProductImg.src = "link"
      break;
    case "tadbir":
      H2.innerHTML += "event";
      ProductImg.src = "link"
      break;
    case "zil-zila":
      H2.innerHTML += "earthquake";
      ProductImg.src = "link"
      break;
    case "samarali":
      H2.innerHTML += "effctive";
      ProductImg.src = "link"
      break;
    case "tekshiirib ko'rmoq":
      H2.innerHTML += "examine";
      ProductImg.src = "link"
      break;
    case "sakkiz":
      H2.innerHTML += "eight";
      ProductImg.src = "link"
      break;
    case "qosh":
      H2.innerHTML += "eyebrow";
      ProductImg.src = "link"
      break;
    case "quloq":
      H2.innerHTML += "ear";
      ProductImg.src = "link"
      break;
    case "eshitmoq":
      H2.innerHTML += "hear";
      ProductImg.src = "link"
      break;
    case "tirsak":
      H2.innerHTML += "elbow";
      ProductImg.src = "link"
      break;
    default:
      result = "hech nima topilmadi!!!";
      ProductImage.src =
        "https://cdn.crello.com/api/media/medium/202592428/stock-photo-cropped-image-man-holding-empty";
      break;
  }
  H2.innerHTML = result
};

