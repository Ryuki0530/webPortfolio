document.addEventListener("DOMContentLoaded", () => {
    const coplaButton = document.getElementById("copla-button");

    coplaButton.addEventListener("click", () => {
        const message = "このサイトは学内向けに公開しています。書き込み等はご遠慮ください。";
        if (confirm(message)) {
            window.open("https://copla.sakura.ne.jp/copla/body/Home/", "_blank");
        }
    });
});
