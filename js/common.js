
//////////////animals drop down menu//////////////

const openMenu = document.querySelector(".animals_menu");
const subMenu = document.querySelector(".animals_menu .sub_menu");


openMenu.addEventListener("mouseover", () => {
    subMenu.classList.add("active");
});
openMenu.addEventListener("mouseout", () => {
    subMenu.classList.remove("active");
});


//////////////mypage icon hover//////////////

const mypage_box = document.querySelectorAll(".mypage > ul > li > a");

for(i=0; i<mypage_box.length; i++){
    let mypage_icon = mypage_box[i];
    let mypage_name = mypage_box[i].className.replace("mypage_", "");
    mypage_icon.style.backgroundImage = "url(./img/icon_img/"+mypage_name+"_white.png)";
    
    mypage_icon.addEventListener("mouseover", () => {
        mypage_icon.style.backgroundImage = "url(./img/icon_img/"+mypage_name+"_yellow.png)";
    });
    mypage_icon.addEventListener("mouseout", () => {
        mypage_icon.style.backgroundImage = "url(./img/icon_img/"+mypage_name+"_white.png)";
    });

}


//////////////sns icon hover//////////////

const sns_box = document.querySelectorAll(".sns > ul > li > a");

for(i=0; i<sns_box.length; i++){
    let sns_icon = sns_box[i];
    let sns_name = sns_box[i].className;
    sns_icon.style.backgroundImage = "url(./img/sns/"+sns_name+"_g8.png)";

    sns_icon.addEventListener("mouseover", () => {
        sns_icon.style.backgroundImage = "url(./img/sns/"+sns_name+"_y.png)";
    });
    sns_icon.addEventListener("mouseout", () => {
        sns_icon.style.backgroundImage = "url(./img/sns/"+sns_name+"_g8.png)";
    });
}