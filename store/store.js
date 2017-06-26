class Store {
    constructor() {
        this.post = [];
        this.static_data = {
            "like" : {
                "text" : "찜취소",
                "class" : "unlike"
            },
            "unlike" : {
                "text" : "찜하기",
                "class" : "like"
            }
        };
        this.likedSet = new Set();
        this.url = "https://tlhm20eugk.execute-api.ap-northeast-2.amazonaws.com/prod/lambda_get_blog_info";
    }
    getStaticData () {
        return this.static_data;
    }
    getLikedSet () {
        return this.likedSet;
    }
    toggleLikedSet ( className, str ) {
        this.likedSet[ className === "like" ? "add" : "delete" ](str);
    }
    getData () {
        const xhr = controller.sendReq("GET", this.url);
        xhr.addEventListener("load", () => {
            const parsedData = JSON.parse(xhr.responseText);
        const body = JSON.parse(parsedData.body);

        this.posts = body.map((v) => {
                const {title, link} = v;
        return {title, link};
    });

        view.setListItem(this.posts)
    });
    }
}