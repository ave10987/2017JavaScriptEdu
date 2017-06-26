class View {
    constructor() {
        this.setEventListener();
    }
    renderMyLikeView () {
        const likedList = document.querySelector(".like-list>ul");

        likedList.innerHTML = "";
        store.getLikedSet().forEach((v) => {
            const likeItem = document.createElement("li");
            likeItem.innerHTML = v;
            likedList.appendChild(likeItem);
        });
    }
    toggleLikeView(target, nextClassName) {
        const { text:nextText, class:nextClass } = store.getStaticData()[nextClassName];

        target.innerHTML = nextText;
        target.classList.add(nextClass);
        target.classList.remove(nextClassName);
    }
    setEventListener () {
        const elStart = document.querySelector(".start");
        const elUL = document.querySelector(".blogList > ul");

        elStart.addEventListener("click", () => {
            dispatcher.emit({type: "CLICK_BUTTON"})
        });

        //event delegation.
        elUL.addEventListener("click", ({target}) => {
            dispatcher.emit({type: "CLICK_LIKE", data: [target]});
        });
    }
    setListItem (data) {
        const ul = document.querySelector(".blogList > ul");

        data.forEach( ( v ) => {
            ul.innerHTML +=  `<li> 
                                  <a href=${v.link}>${v.title}</a>
                                  <div class="like">찜하기</div>
                              </li>`;
        });
    }
}