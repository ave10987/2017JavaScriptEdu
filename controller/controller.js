class Controller {
    constructor() {
        this.registerEvent();
    }
    registerEvent () {
        dispatcher.register({
            "CLICK_BUTTON": () => { store.getData(); },
            "CLICK_LIKE": (target) => {

                const className = target.className;

                if(! Object.keys(store.getStaticData()).includes(className)) return;

                const currentText = target.previousElementSibling.textContent;

                //change data
                store.toggleLikedSet(className, currentText);

                //change current view
                view.toggleLikeView(target, className);

                //change list view
                view.renderMyLikeView();
            }
        });
    }
    sendReq (method, url) {
        const oReq = new XMLHttpRequest();
        oReq.open(method, url);
        oReq.send();
        return oReq;
    }
}