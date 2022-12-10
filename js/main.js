// 메인 현재시간
const date = document.querySelector(".date");
const todayTime = () => {
    let now = new Date();
    let todayMonth = now.getMonth() + 1;
    let todayDate = now.getDate();
    const week = ["일", "월", "화", "수", "목", "금", "토"];
    let dayOfWeek = week[now.getDay()];
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let ampm = hours >= 12 ? "오후" : "오전";
    if (hours > 12) {
        hours = hours - 12;
    } else if (hours == 0) {
        hours = hours = 12;
    }

    return (
        todayMonth +
        "월" +
        "&nbsp" +
        todayDate +
        "일" +
        "&nbsp" +
        "(" +
        dayOfWeek +
        ")" +
        "&nbsp" +
        ampm +
        "&nbsp" +
        hours +
        ":" +
        minutes
    );
};
setInterval(function () {
    date.innerHTML = todayTime();
}, 1000);
// 상품 수량 증감
let quantityMinus = document.querySelectorAll(".winepos-ui-btn-minus");
let quantityPlus = document.querySelectorAll(".winepos-ui-btn-plus");
let quantityCount = document.querySelectorAll(".winepos-ui-concount span");
quantityPlus.forEach((item, idx) => {
    item.addEventListener("click", function () {
        quantityCount[idx].innerHTML = +quantityCount[idx].innerHTML + 1;
    });
});
quantityMinus.forEach((item, idx) => {
    item.addEventListener("click", function () {
        quantityCount[idx].innerHTML = +quantityCount[idx].innerHTML - 1;
        if (quantityCount[idx].innerHTML < 1) {
            quantityCount[idx].innerHTML = 1;
        }
    });
});
// 고객 정보 검색
const userSearch = document.querySelector(".winepos-ui-user-search");
const searchPopup = document.querySelector(".winepos-ui-pop-search");
const searchPopupClose = document.querySelector(".winepos-ui-search-close");
const searchPopupCloseBtn = document.querySelector(".search-pop-close");
userSearch.addEventListener("click", () => {
    searchPopup.classList.add("on");
});
searchPopupCloseBtn.addEventListener("click", () => {
    searchPopup.classList.remove("on");
});
searchPopupClose.addEventListener("click", () => {
    searchPopup.classList.remove("on");
});
// 검색 후 클릭시 메인 고객정보 표시
const userName = document.querySelector(".user__name");
const userPoint = document.querySelector(".user__point");
const searchCon = document.querySelectorAll(".search-con");
const userSearchInfo = document.querySelector(".winepos-ui-user-info");
const searchInfoCancel = document.querySelector(".search__info__cancel");
searchCon.forEach((item) => {
    item.addEventListener("click", () => {
        searchPopup.classList.remove("on");
        userSearch.style.display = "none";
        userSearchInfo.style.display = "flex";
        userName.textContent = item.querySelector(".user").textContent;
        userPoint.textContent = item.querySelector(".point").textContent;
    });
});
searchInfoCancel.addEventListener("click", () => {
    userSearch.style.display = "flex";
    userSearchInfo.style.display = "none";
    userName.textContent = "";
    userPoint.textContent = "";
});

// 포스 옵션 탭 활성화
let posOptionTab = document.querySelectorAll(".winepos-ui-tab");
posOptionTab.forEach((item) => {
    item.addEventListener("click", () => {
        for (ob of posOptionTab) {
            ob.classList.remove("on");
        }
        item.classList.add("on");
    });
});
// 포스 팝업 옵션 탭 활성화
let posPopOptionTab = document.querySelectorAll(".winepos-ui-pop-btns .opb");
posPopOptionTab.forEach((item) => {
    item.addEventListener("click", () => {
        for (pob of posPopOptionTab) {
            pob.classList.remove("on");
        }
        item.classList.add("on");
    });
});
// 팝업 호출
let optionPopDis = document.querySelector(".winepos-ui-option-pop-dis");
let optionPopDisClose = document.querySelector(".winepos-ui-option-pop-close");
let optionPopBtnClose = document.querySelector(".pos-pop-close");
let posDiscountSetTab = document.querySelector(".winepos-ui-tab.discountset");
posDiscountSetTab.addEventListener("click", function () {
    optionPopDis.classList.add("on");
});
optionPopDisClose.addEventListener("click", function () {
    optionPopDis.classList.remove("on");
    posOptionTab.forEach((item) => {
        item.classList.remove("on");
    });
});
optionPopBtnClose.addEventListener("click", function () {
    optionPopDis.classList.remove("on");
    posOptionTab.forEach((item) => {
        item.classList.remove("on");
    });
});

// 테스트
let numbtn = document.querySelectorAll(".winepos-ui-pop-numbox .flex span");
let numDelete = document.querySelector(".winepos-ui-pop-numbox .numbox-delete");
let totalvalue = document.querySelector(".winepos-ui-value .flex .total_value");
for (let i = 0; i < numbtn.length; i++) {
    numbtn[i].addEventListener("click", function () {
        let valueidx = totalvalue.innerHTML.indexOf("0");
        if (valueidx === 0) {
            totalvalue.innerHTML = "";
        }
        if (isNaN(this.innerHTML) === false) {
            let numberPlusValue = (totalvalue.innerHTML += this.innerHTML);
            totalvalue.innerHTML = numberPlusValue.replace(/,/g, "");
        } else {
            let numberMinusValue = (totalvalue.innerHTML =
                totalvalue.innerHTML.slice(0, -1));
            totalvalue.innerHTML = numberMinusValue.replace(/,/g, "");
        }
        let numberTotalValue = Number(totalvalue.innerHTML);
        totalvalue.innerHTML = numberTotalValue
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    });
}
//
