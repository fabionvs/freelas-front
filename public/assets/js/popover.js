/*! popover.js | Huro | Css Ninja 2020-2021 */
"use strict";
$(document).ready(function () {
    $('*[data-toggle="popover"]').each(function () {
        var a = $(this).attr("data-pop-mode"),
            n = $(this).attr("data-pop-title"),
            s = $(this).attr("data-pop-content"),
            i = $(this).attr("data-pop-position"),
            o = $(this).attr("data-pop-width"),
            e = $(this).attr("data-pop-avatar"),
            t = $(this).attr("data-pop-icon"),
            p = $(this).attr("data-pop-iconbg"),
            r = "",
            l = "";
        null != e && null != e
            ? (r = '\n                    <div class="h-avatar is-small">\n                        <img class="avatar" src="' + e + '" alt="">\n                    </div>\n                ')
            : null != t && null != t && (l = '\n                    <div class="h-icon is-small is-' + p + '">\n                        <i class="' + t + '"></i>\n                    </div>\n                '),
            $(this).webuiPopover({
                trigger: a,
                width: o,
                animation: "pop",
                placement: i,
                style: "default",
                content: function () {
                    return (
                        '\n                        <div class="popover-head">\n                            ' +
                        r +
                        "\n                            " +
                        l +
                        '\n                            <h4 class="dark-inverted">' +
                        n +
                        '</h4>\n                        </div>\n                        <div class="popover-body">\n                            <p>' +
                        s +
                        "</p>\n                        </div>\n                    "
                    );
                },
            });
    }),
        $("*[data-user-popover]").each(function () {
            var a = $(this),
                n = $(this).attr("data-user-popover"),
                s = feather.icons.mail.toSvg(),
                i = feather.icons.phone.toSvg(),
                o = feather.icons["more-horizontal"].toSvg();
            $.ajax({
                url: "http://localhost:3000/assets/data/user.json",
                dataType: "json",
                success: function (e) {
                    a.webuiPopover({
                        trigger: "hover",
                        placement: "auto",
                        width: 300,
                        padding: !1,
                        offsetLeft: 0,
                        offsetTop: 20,
                        animation: "pop",
                        style: "profile",
                        cache: !1,
                        content: function () {
                            if (
                                (setTimeout(function () {
                                    $(".loader-overlay").removeClass("is-active");
                                }, 500),
                                null != e[n].pic)
                            )
                                var a =
                                    '\n                                    <div class="profile-popover-block">\n\n                                        <div class="loader-overlay is-active">\n                                            <div class="loader is-loading"></div>\n                                        </div>\n\n                                        <div class="profile-popover-wrapper">\n                                            <div class="popover-avatar">\n                                                <img class="avatar" src="' +
                                    e[n].pic +
                                    '">\n                                                <img class="badge" src="' +
                                    e[n].badge +
                                    '">\n                                            </div>\n                                            <div class="popover-meta">\n                                                <span class="user-meta">\n                                                    <span class="username">' +
                                    e[n].name +
                                    '</span>\n                                                    <span class="location">' +
                                    e[n].location +
                                    '</span>\n                                                </span>\n                                                <span class="job-title">' +
                                    e[n].position +
                                    '</span>\n                                                <span class="bio">' +
                                    e[n].bio +
                                    '</span>\n                                            </div>\n                                        </div>\n                                        <div class="popover-actions">\n                                            <a class="popover-icon">\n                                                ' +
                                    i +
                                    '\n                                            </a>\n                                            <a class="popover-icon">\n                                                ' +
                                    s +
                                    '\n                                            </a>\n                                            <a class="popover-icon">\n                                                ' +
                                    o +
                                    "\n                                            </a>\n                                        </div>\n                                    </div>\n                                ";
                            else {
                                var t = new Array("is-danger", "is-info", "is-primary", "is-success", "is-warning", "is-h-purple", "is-h-blue", "is-h-green", "is-h-orange", "is-h-red", "is-h-green"),
                                    p = t.length;
                                a =
                                    '\n\n                                    <div class="profile-popover-block">\n\n                                        <div class="loader-overlay is-active">\n                                            <div class="loader is-loading"></div>\n                                        </div>\n\n                                        <div class="profile-popover-wrapper">\n                                            <div class="popover-fake-avatar ' +
                                    t[Math.floor(Math.random() * p)] +
                                    '">\n                                                <div class="fake-avatar">\n                                                    <span>' +
                                    e[n].initials +
                                    '</span>\n                                                </div>\n                                                <img class="badge" src="' +
                                    e[n].badge +
                                    '">\n                                            </div>\n                                            <div class="popover-meta">\n                                                <span class="user-meta">\n                                                    <span class="username">' +
                                    e[n].name +
                                    '</span>\n                                                    <span class="location">' +
                                    e[n].location +
                                    '</span>\n                                                </span>\n                                                <span class="job-title">' +
                                    e[n].position +
                                    '</span>\n                                                <span class="bio">' +
                                    e[n].bio +
                                    '</span>\n                                            </div>\n                                        </div>\n                                        <div class="popover-actions">\n                                            <a class="popover-icon">\n                                                ' +
                                    i +
                                    '\n                                            </a>\n                                            <a class="popover-icon">\n                                                ' +
                                    s +
                                    '\n                                            </a>\n                                            <a class="popover-icon">\n                                                ' +
                                    o +
                                    "\n                                            </a>\n                                        </div>\n\n                                    </div>\n                                ";
                            }
                            return a;
                        },
                    });
                },
            });
        });
});
