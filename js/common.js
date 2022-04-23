!(function () {
    var nav = {
        "": {
            id: 1,
            name: "首页",
            href: "./"
        },
        "product": {
            id: 2,
            name: "产品展示",
            href: "./product.html"
        },
        "news": {
            id: 3,
            name: "新闻资讯",
            href: "./news.html"
        },
        "contact": {
            id: 4,
            name: "人才招聘",
            href: "./contact.html"
        }
    };

    var header = "陕西天效环境建设有限公司";
    var footer = "陕西天效环境建设有限公司 Copyright © 2022 版权所有 陕ICP备2022004101号";

    function createNav () {
        var urlName = window.location.pathname.replace(".html", "").replace("/", "");
        var html = '';
        for (var k in nav) {
            var item = nav[k];
            if (urlName === k) {
                html += '<li><a class="nav-a" style="border-bottom: 2px solid #00BFFF;font-weight: bolder;" data-id="' + item.id + '" href="' + item.href + '">' + item.name + '</a></li>';
            } else {
                html += '<li><a class="nav-a" data-id="' + item.id + '" href="' + item.href + '">' + item.name + '</a></li>'; 
            }
        }
        document.getElementById("header").innerText = header;
        document.getElementById("footer").innerText = footer;
        document.getElementById("nav").innerHTML = html;
    }

    window.SXTSHJ = {
        createNav: createNav
    }
})();

window.SXTSHJ.createNav();
