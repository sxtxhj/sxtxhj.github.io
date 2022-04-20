!(function () {
    var nav = {
        "index": {
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
            name: "联系我们",
            href: "./contact.html"
        }
    };

    function createNav () {
        var html = '';
        for (var k in nav) {
            var item = nav[k];
            html += '<li><a class="nav-a" data-id="' + item.id + '" href="' + item.href + '">' + item.name + '</a></li>';
        }
        document.getElementById("nav").innerHTML = html;
    }


    window.SXTSHJ = {
        createNav: createNav
    }
})();

window.SXTSHJ.createNav();
