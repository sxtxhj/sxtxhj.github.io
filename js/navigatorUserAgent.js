function navigatorUserAgent () {
    if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
        // 移动端
        document.getElementById("css-common-link").setAttribute("href", "./css/common_mobile.css");
    }
}

navigatorUserAgent();