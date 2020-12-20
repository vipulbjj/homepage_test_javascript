(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([[0], {
    13: function(e, t) {
        e.exports = jQuery
    },
    15: function(e, t, a) {
        e.exports = a(35)
    },
    20: function(e, t, a) {},
    23: function(e, t, a) {},
    35: function(e, t, a) {
        "use strict";
        a.r(t);
        var n = a(0)
          , l = a.n(n)
          , r = a(8)
          , i = a.n(r)
          , o = (a(20),
        a(1))
          , c = a(2)
          , s = a(4)
          , m = a(3)
          , u = a(5)
          , d = a(9)
          , h = a(13)
          , p = a.n(h)
          , f = (a(23),
        a(14))
          , E = a.n(f)
          , b = function(e) {
            function t() {
                return Object(o.a)(this, t),
                Object(s.a)(this, Object(m.a)(t).apply(this, arguments))
            }
            return Object(u.a)(t, e),
            Object(c.a)(t, [{
                key: "render",
                value: function() {
                    if (this.props.data)
                        this.props.data.name,
                        this.props.data.occupation,
                        this.props.data.description,
                        this.props.data.address.city,
                        this.props.data.social.map((function(e) {
                            return l.a.createElement("li", {
                                key: e.name
                            }, l.a.createElement("a", {
                                href: e.url
                            }, l.a.createElement("i", {
                                className: e.className
                            })))
                        }
                        ));
                    return l.a.createElement("header", {
                        id: "home"
                    }, l.a.createElement("nav", {
                        id: "nav-wrap"
                    }, l.a.createElement("a", {
                        className: "mobile-btn",
                        href: "#nav-wrap",
                        title: "Show navigation"
                    }, "Show navigation"), l.a.createElement("a", {
                        className: "mobile-btn",
                        href: "#home",
                        title: "Hide navigation"
                    }, "Hide navigation"), l.a.createElement("ul", {
                        id: "nav",
                        className: "nav"
                    }, l.a.createElement("li", {
                        className: "current"
                    }, l.a.createElement("a", {
                        className: "smoothscroll",
                        href: "#home",
                        color: "#fff"
                    }, "Home")), l.a.createElement("li", null, l.a.createElement("a", {
                        className: "smoothscroll",
                        href: "#about"
                    }, "About")), l.a.createElement("li", null, l.a.createElement("a", {
                        className: "smoothscroll",
                        href: "files/upload_CV.pdf"
                    }, "Resume")), l.a.createElement("li", null, l.a.createElement("a", {
                        className: "smoothscroll",
                        href: "#purtfolio"
                    }, "Timeline")), l.a.createElement("li", null, l.a.createElement("a", {
                        className: "smoothscroll",
                        href: "#testimonials"
                    }, "Blog")), l.a.createElement("li", null, l.a.createElement("a", {
                        className: "smoothscroll",
                        href: "#contact"
                    }, "Contact")))), l.a.createElement("div", {
                        className: "left-bar"
                    }, l.a.createElement("ul", {
                        className: "drop-down-home"
                    }, l.a.createElement("li", null))), l.a.createElement("div", {
                        className: "row banner"
                    }, l.a.createElement("div", {
                        className: "banner-text"
                    }, l.a.createElement("h1", {
                        className: "responsive-headline"
                    }, "Anirudh Anil Ojha."), l.a.createElement("h3", null, l.a.createElement(E.a, {
                        strings: ["Happiness is not enough for me. I demand euphoria!", "Better remain silent and be thought stupid than speak and remove all doubt.", "Wubba lubba dub dub!", "Bears. Beets. Battlestar Galactica.", "Sometimes I'll start a sentence and I don't even know where it's"],
                        typeSpeed: 30,
                        shuffle: !0,
                        loop: !0
                    })), l.a.createElement("hr", null))), l.a.createElement("p", {
                        className: "scrolldown"
                    }, l.a.createElement("a", {
                        className: "smoothscroll",
                        href: "#about"
                    }, l.a.createElement("i", {
                        className: "icon-down-circle"
                    }))))
                }
            }]),
            t
        }(n.Component)
          , g = function(e) {
            function t() {
                return Object(o.a)(this, t),
                Object(s.a)(this, Object(m.a)(t).apply(this, arguments))
            }
            return Object(u.a)(t, e),
            Object(c.a)(t, [{
                key: "render",
                value: function() {
                    if (this.props.data)
                        var e = this.props.data.social.map((function(e) {
                            return l.a.createElement("li", {
                                key: e.name
                            }, l.a.createElement("a", {
                                href: e.url
                            }, l.a.createElement("i", {
                                className: e.className
                            })))
                        }
                        ));
                    return l.a.createElement("footer", null, l.a.createElement("div", {
                        className: "row"
                    }, l.a.createElement("div", {
                        className: "twelve columns"
                    }, l.a.createElement("ul", {
                        className: "social-links"
                    }, e), l.a.createElement("ul", {
                        className: "copyright"
                    }, l.a.createElement("li", null, "\xa9 Copyright 2019 Anirudh Anil Ojha"), l.a.createElement("li", null, "Design by ", l.a.createElement("a", {
                        title: "Styleshout",
                        href: "http://www.styleshout.com/"
                    }, "Styleshout")))), l.a.createElement("div", {
                        id: "go-top"
                    }, l.a.createElement("a", {
                        className: "smoothscroll",
                        title: "Back to Top",
                        href: "#home"
                    }, l.a.createElement("i", {
                        className: "icon-up-open"
                    })))))
                }
            }]),
            t
        }(n.Component)
          , y = function(e) {
            function t() {
                return Object(o.a)(this, t),
                Object(s.a)(this, Object(m.a)(t).apply(this, arguments))
            }
            return Object(u.a)(t, e),
            Object(c.a)(t, [{
                key: "render",
                value: function() {
                    if (this.props.data)
                        this.props.data.name,
                        this.props.data.image,
                        this.props.data.bio,
                        this.props.data.address.street,
                        this.props.data.address.city,
                        this.props.data.address.state,
                        this.props.data.address.zip,
                        this.props.data.phone,
                        this.props.data.email,
                        this.props.data.resumedownload;
                    return l.a.createElement("section", {
                        id: "about"
                    }, l.a.createElement("div", {
                        className: "row"
                    }, l.a.createElement("div", {
                        className: "three columns"
                    }, l.a.createElement("img", {
                        className: "profile-pic",
                        src: "images/profilepic.jpg",
                        alt: "Anirudh's Profile Pic"
                    })), l.a.createElement("div", {
                        className: "nine columns main-col"
                    }, l.a.createElement("h2", {
                        style: {
                            display: "flex",
                            justifyContent: "center"
                        }
                    }, "About Me"), l.a.createElement("p", null, "Welcome to my humble website and thank you for your interest. I'm a 20-y/o biding my time in Kanpur before I come out and dominate the world :)", l.a.createElement("br", null), "I have a deep appreciation for everything beautiful humans did and can create, with a special eye for literature, poetry, puns and stick figures. Do let me know if there is something cool you would like to share with me.", l.a.createElement("br", null), "I am that sporty kid who can't wait till it's 5 PM and time to go out and play. I love lawn tennis (Federer >>> everyone else), but would play just about everything except carrom which I maintain is an abomination of a game. Also, my knowledge of absolutely useless cricketing trivia is unbeatable and it'll take the rest of my life to forget it.", l.a.createElement("br", null), "I am enthusiastic about technology and am exploring machine learning and its applications in vision and language tasks. In my fun time I like to debate, watch ", l.a.createElement("a", {
                        style: {
                            color: "green"
                        },
                        href: "https://www.youtube.com/user/LastWeekTonight"
                    }, "John Oliver"), " or ", l.a.createElement("a", {
                        style: {
                            color: "green"
                        },
                        href: "https://www.youtube.com/user/vlogbrothers"
                    }, "vlogbrothers"), ", scroll through ", l.a.createElement("a", {
                        style: {
                            color: "green"
                        },
                        href: "http://explosm.net/"
                    }, "Cyanide and Happiness"), " or ", l.a.createElement("a", {
                        style: {
                            color: "green"
                        },
                        href: "https://xkcd.com/"
                    }, "xkcd"), " archives and contemplate ", l.a.createElement("a", {
                        style: {
                            color: "green"
                        },
                        href: "https://i.redd.it/q1p3vc7215341.jpg"
                    }, "existential nihilism"), " :)) You can find me using the contacts below, although I'm likelier to be sleeping around somewhere in the CSE department (check KD ground floor lab and RM 4th floor in that order)."), l.a.createElement("div", {
                        className: "row"
                    }, l.a.createElement("div", {
                        className: "columns contact-details"
                    }, l.a.createElement("h2", null, "Contact Details"), l.a.createElement("p", {
                        className: "address"
                    }, l.a.createElement("span", null, "Anirudh Anil Ojha"), l.a.createElement("br", null), l.a.createElement("span", null, "Room 250, Sexy Sexy Hall-3", l.a.createElement("br", null), "IIT Kanpur"), l.a.createElement("br", null), l.a.createElement("span", null, "+91-9xxxxxxxxx"), l.a.createElement("br", null), l.a.createElement("span", null, "a a o j h a @ i i t k . a c . i n"))), l.a.createElement("div", {
                        className: "columns download"
                    }, l.a.createElement("p", null, l.a.createElement("a", {
                        href: "files/upload_CV.pdf",
                        className: "button"
                    }, l.a.createElement("i", {
                        className: "fa fa-download"
                    }), "Resume")))))))
                }
            }]),
            t
        }(n.Component)
          , v = function(e) {
            function t() {
                return Object(o.a)(this, t),
                Object(s.a)(this, Object(m.a)(t).apply(this, arguments))
            }
            return Object(u.a)(t, e),
            Object(c.a)(t, [{
                key: "render",
                value: function() {
                    if (this.props.data)
                        this.props.data.testimonials.map((function(e) {
                            return l.a.createElement("p", null)
                        }
                        ));
                    return l.a.createElement("section", {
                        id: "testimonials"
                    }, l.a.createElement("div", {
                        className: "bg-image"
                    }), l.a.createElement("div", {
                        className: "text-container"
                    }, l.a.createElement("div", {
                        className: "row"
                    }, l.a.createElement("div", {
                        className: "two columns header-col"
                    }, l.a.createElement("h1", null, l.a.createElement("span", null, "Blog (coming soon :P)"))), l.a.createElement("div", {
                        className: "ten columns flex-container"
                    }, l.a.createElement("ul", {
                        className: "slides"
                    }, l.a.createElement("li", null, l.a.createElement("blockquote", null, l.a.createElement("p", null, "..it's hard to stay mad, when there's so much beauty in the world. Sometimes I feel like I'm seeing it all at once, and it's too much, my heart fills up like a balloon that's about to burst... And then I remember to relax, and stop trying to hold on to it, and then it flows through me like rain and I can't feel anything but gratitude for every single moment of my stupid little life... You have no idea what I'm talking about, I'm sure. But don't worry... you will someday."), l.a.createElement("cite", null, "American Beauty")), l.a.createElement("blockquote", null, l.a.createElement("p", null, "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me."), l.a.createElement("cite", null, "Micheal Scott"))))))))
                }
            }]),
            t
        }(n.Component)
          , w = a(6)
          , N = (a(34),
        function(e) {
            function t() {
                return Object(o.a)(this, t),
                Object(s.a)(this, Object(m.a)(t).apply(this, arguments))
            }
            return Object(u.a)(t, e),
            Object(c.a)(t, [{
                key: "render",
                value: function() {
                    if (this.props.data)
                        this.props.data.projects.map((function(e) {
                            var t = "images/portfolio/" + e.image;
                            return l.a.createElement("div", {
                                key: e.title,
                                className: "columns portfolio-item"
                            }, l.a.createElement("div", {
                                className: "item-wrap"
                            }, l.a.createElement("a", {
                                href: e.url,
                                title: e.title
                            }, l.a.createElement("img", {
                                alt: e.title,
                                src: t
                            }), l.a.createElement("div", {
                                className: "overlay"
                            }, l.a.createElement("div", {
                                className: "portfolio-item-meta"
                            }, l.a.createElement("h5", null, e.title), l.a.createElement("p", null, e.category))), l.a.createElement("div", {
                                className: "link-icon"
                            }, l.a.createElement("i", {
                                className: "fa fa-link"
                            })))))
                        }
                        ));
                    return l.a.createElement("section", {
                        id: "purtfolio"
                    }, l.a.createElement(w.VerticalTimeline, null, l.a.createElement(w.VerticalTimelineElement, {
                        className: "vertical-timeline-element--work",
                        contentStyle: {
                            background: "rgb(33, 150, 243)",
                            color: "#fff"
                        },
                        contentArrowStyle: {
                            borderRight: "7px solid  rgb(33, 150, 243)"
                        },
                        date: "Nov '19 - present",
                        iconStyle: {
                            background: "rgb(33, 150, 243)",
                            color: "#fff"
                        }
                    }, l.a.createElement("h3", {
                        className: "vertical-timeline-element-title"
                    }, "Deputy Contingent Leader"), l.a.createElement("h4", {
                        className: "vertical-timeline-element-subtitle"
                    }, "Cultural Meet 4.0, IIT Bombay"), l.a.createElement("p", null, "Managing finances, preparation and logistics related to the Inter-IIT Cultural Meet 4.0 to be held in IIT Bombay.")), l.a.createElement(w.VerticalTimelineElement, {
                        className: "vertical-timeline-element--work",
                        contentStyle: {
                            background: "rgb(33, 150, 243)",
                            color: "#fff"
                        },
                        contentArrowStyle: {
                            borderRight: "7px solid  rgb(33, 150, 243)"
                        },
                        date: "Sept-Oct '19",
                        iconStyle: {
                            background: "rgb(33, 150, 243)",
                            color: "#fff"
                        }
                    }, l.a.createElement("h3", {
                        className: "vertical-timeline-element-title"
                    }, "Contingent Leader"), l.a.createElement("h4", {
                        className: "vertical-timeline-element-subtitle"
                    }, "Rendezvous '19, IIT Delhi"), l.a.createElement("p", null, "Managing finances, preparation and logistics for the clubs which participated in Rendezvous '19, the annual cultural festival of IIT Delhi.")), l.a.createElement(w.VerticalTimelineElement, {
                        className: "vertical-timeline-element--work",
                        contentStyle: {
                            background: "rgb(33, 150, 243)",
                            color: "#fff"
                        },
                        contentArrowStyle: {
                            borderRight: "7px solid  rgb(33, 150, 243)"
                        },
                        date: "Apr-Oct '19",
                        iconStyle: {
                            background: "rgb(33, 150, 243)",
                            color: "#fff"
                        }
                    }, l.a.createElement("h3", {
                        className: "vertical-timeline-element-title"
                    }, "Manager, Media and Publicity"), l.a.createElement("h4", {
                        className: "vertical-timeline-element-subtitle"
                    }, "Antaragni '19"), l.a.createElement("p", null, "Managed the media coverage of Antaragni '19.")), l.a.createElement(w.VerticalTimelineElement, {
                        className: "vertical-timeline-element--work",
                        contentStyle: {
                            background: "rgb(33, 150, 243)",
                            color: "#fff"
                        },
                        contentArrowStyle: {
                            borderRight: "7px solid  rgb(33, 150, 243)"
                        },
                        date: "May-July '19",
                        iconStyle: {
                            background: "rgb(33, 150, 243)",
                            color: "#fff"
                        }
                    }, l.a.createElement("h3", {
                        className: "vertical-timeline-element-title"
                    }, "Research Fellow"), l.a.createElement("h4", {
                        className: "vertical-timeline-element-subtitle"
                    }, "Max Planck Institute for Software Systems, Kaiserslautern, Germany"), l.a.createElement("p", null, "Worked under Prof. Paul Francis on his project on data anonymisation algorithms that preserve analytic utility.")), l.a.createElement(w.VerticalTimelineElement, {
                        className: "vertical-timeline-element--education",
                        contentStyle: {
                            background: "rgb(33, 150, 243)",
                            color: "#fff"
                        },
                        contentArrowStyle: {
                            borderRight: "7px solid  rgb(33, 150, 243)"
                        },
                        date: "Apr '19 - present",
                        iconStyle: {
                            background: "rgb(233, 30, 99)",
                            color: "#fff"
                        }
                    }, l.a.createElement("h3", {
                        className: "vertical-timeline-element-title"
                    }, "Coordinator"), l.a.createElement("h4", {
                        className: "vertical-timeline-element-subtitle"
                    }, "English Literary Society"), l.a.createElement("p", null, "Planning and conducting activities related to English literature for the campus community.")), l.a.createElement(w.VerticalTimelineElement, {
                        className: "vertical-timeline-element--education",
                        contentStyle: {
                            background: "rgb(33, 150, 243)",
                            color: "#fff"
                        },
                        contentArrowStyle: {
                            borderRight: "7px solid  rgb(33, 150, 243)"
                        },
                        date: "Apr-Oct '18",
                        iconStyle: {
                            background: "rgb(233, 30, 99)",
                            color: "#fff"
                        }
                    }, l.a.createElement("h3", {
                        className: "vertical-timeline-element-title"
                    }, "Manager, English Literary Events"), l.a.createElement("h4", {
                        className: "vertical-timeline-element-subtitle"
                    }, "Antaragni '18"), l.a.createElement("p", null, "Conducted english literary competitions in Antaragni '18.")), l.a.createElement(w.VerticalTimelineElement, {
                        className: "vertical-timeline-element--education",
                        contentStyle: {
                            background: "rgb(33, 150, 243)",
                            color: "#fff"
                        },
                        contentArrowStyle: {
                            borderRight: "7px solid  rgb(33, 150, 243)"
                        },
                        date: "Jan-May '18",
                        iconStyle: {
                            background: "rgb(233, 30, 99)",
                            color: "#fff"
                        }
                    }, l.a.createElement("h3", {
                        className: "vertical-timeline-element-title"
                    }, "Campus Winner"), l.a.createElement("h4", {
                        className: "vertical-timeline-element-subtitle"
                    }, "Microsoft code.fun.do '17"), l.a.createElement("p", null, "Created a web application to predict changing international bilateral relations using sentiment analysis of news.")), l.a.createElement(w.VerticalTimelineElement, {
                        iconStyle: {
                            background: "rgb(16, 204, 82)",
                            color: "#fff"
                        }
                    })))
                }
            }]),
            t
        }(n.Component))
          , k = function(e) {
            function t(e) {
                var a;
                return Object(o.a)(this, t),
                (a = Object(s.a)(this, Object(m.a)(t).call(this, e))).state = {
                    foo: "bar",
                    resumeData: {}
                },
                d.a.initialize("UA-110570651-1"),
                d.a.pageview(window.location.pathname),
                a
            }
            return Object(u.a)(t, e),
            Object(c.a)(t, [{
                key: "getResumeData",
                value: function() {
                    p.a.ajax({
                        url: "resumeData.json",
                        dataType: "json",
                        cache: !1,
                        success: function(e) {
                            this.setState({
                                resumeData: e
                            })
                        }
                        .bind(this),
                        error: function(e, t, a) {
                            console.log(a),
                            alert(a)
                        }
                    })
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    this.getResumeData()
                }
            }, {
                key: "render",
                value: function() {
                    return l.a.createElement("div", {
                        className: "App"
                    }, l.a.createElement(b, {
                        data: this.state.resumeData.main
                    }), l.a.createElement(y, {
                        data: this.state.resumeData.main
                    }), l.a.createElement(N, {
                        data: this.state.resumeData.portfolio
                    }), l.a.createElement(v, {
                        data: this.state.resumeData.testimonials
                    }), l.a.createElement(g, {
                        data: this.state.resumeData.main
                    }))
                }
            }]),
            t
        }(n.Component)
          , j = Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
        function O(e) {
            navigator.serviceWorker.register(e).then((function(e) {
                e.onupdatefound = function() {
                    var t = e.installing;
                    t.onstatechange = function() {
                        "installed" === t.state && (navigator.serviceWorker.controller ? console.log("New content is available; please refresh.") : console.log("Content is cached for offline use."))
                    }
                }
            }
            )).catch((function(e) {
                console.error("Error during service worker registration:", e)
            }
            ))
        }
        i.a.render(l.a.createElement(k, null), document.getElementById("root")),
        function() {
            if ("serviceWorker"in navigator) {
                if (new URL("/vipulbjj.github.io",window.location).origin !== window.location.origin)
                    return;
                window.addEventListener("load", (function() {
                    var e = "".concat("/vipulbjj.github.io", "/service-worker.js");
                    j ? function(e) {
                        fetch(e).then((function(t) {
                            404 === t.status || -1 === t.headers.get("content-type").indexOf("javascript") ? navigator.serviceWorker.ready.then((function(e) {
                                e.unregister().then((function() {
                                    window.location.reload()
                                }
                                ))
                            }
                            )) : O(e)
                        }
                        )).catch((function() {
                            console.log("No internet connection found. App is running in offline mode.")
                        }
                        ))
                    }(e) : O(e)
                }
                ))
            }
        }()
    }
}, [[15, 1, 2]]]);
//# sourceMappingURL=main.63f3a708.chunk.js.map
