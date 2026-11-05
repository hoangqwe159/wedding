/* =====================================================================
   Wedding invitation — behaviour
   ===================================================================== */
(function () {
  "use strict";

  var C = window.WEDDING;
  var TZ = "Asia/Ho_Chi_Minh";

  /* ------------------------------------------------------------------
     Strings
     ------------------------------------------------------------------ */
  var STR = {
    vi: {
      docTitle: "Thiệp cưới",
      introKicker: "Thiệp mời cưới",
      saveTheDate: "Save the date",
      toLabel: "Thân gửi",
      openBtn: "Mở thiệp",
      soundHint: "Bật âm thanh để trải nghiệm trọn vẹn ♪",
      heroKicker: "Lễ thành hôn",
      heroKickerB: "Lễ vu quy",
      scroll: "Cuộn xuống",
      inviteLabel: "Trân trọng kính mời",
      inviteText: "Tới dự bữa cơm thân mật mừng lễ thành hôn cùng gia đình chúng tôi",
      inviteTextB: "Tới dự bữa cơm thân mật mừng lễ vu quy cùng gia đình chúng tôi",
      groomSide: "Nhà trai",
      brideSide: "Nhà gái",
      mr: "Ông",
      mrs: "Bà",
      eventsKicker: "Thời gian & địa điểm",
      eventsTitle: "Tiệc mừng",
      at: "Vào lúc",
      map: "Chỉ đường",
      cal: "Lưu lịch",
      tba: "Thông tin sẽ được cập nhật sớm",
      dateTitle: "Ngày chung đôi",
      units: ["Ngày", "Giờ", "Phút", "Giây"],
      today: "Hôm nay là ngày vui!",
      past: "Cảm ơn vì đã cùng chung vui",
      welcome: "Rất hân hạnh được đón tiếp!",
      weekShort: ["T2", "T3", "T4", "T5", "T6", "T7", "CN"],
      galleryTitle: "Khoảnh khắc",
      rsvpTitle: "Xác nhận tham dự",
      rsvpLead: "Sự hiện diện của bạn là niềm vinh hạnh của chúng tôi",
      fName: "Họ tên",
      fAttend: "Bạn sẽ đến chung vui chứ?",
      yes: "Chắc chắn rồi!",
      no: "Rất tiếc, không thể",
      fEvent: "Tham dự tiệc tại",
      fGuests: "Số người tham dự",
      fWish: "Lời chúc",
      fWishPh: "Gửi đôi lời chúc tới cô dâu & chú rể…",
      send: "Gửi xác nhận",
      sending: "Đang gửi…",
      rsvpThanks: "Cảm ơn bạn! Chúng tôi đã nhận được phản hồi.",
      rsvpAgain: "Gửi lại",
      rsvpErr: "Gửi chưa thành công, vui lòng thử lại.",
      needName: "Vui lòng nhập họ tên",
      needAttend: "Vui lòng chọn bạn có tham dự hay không",
      giftTitle: "Hộp mừng cưới",
      giftLead: "Cảm ơn tình cảm và lời chúc phúc của bạn dành cho chúng tôi",
      copy: "Sao chép",
      copied: "Đã sao chép số tài khoản",
      thanksTitle: "Lời cảm ơn",
      thanksText: "Sự hiện diện và những lời chúc phúc tốt đẹp của Quý vị sẽ là món quà vô cùng quý giá và ý nghĩa đối với hai gia đình chúng tôi trong ngày trọng đại này!",
      groom: "Chú rể",
      bride: "Cô dâu",
      withFamily: "Cùng gia đình",
      footer: "Hẹn gặp bạn trong ngày vui",
      weekdays: ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"],
    },
    en: {
      docTitle: "Wedding Invitation",
      introKicker: "Wedding Invitation",
      saveTheDate: "Save the date",
      toLabel: "Dear",
      openBtn: "Open",
      soundHint: "Turn your sound on for the full experience ♪",
      heroKicker: "We're getting married",
      scroll: "Scroll",
      inviteLabel: "We joyfully invite",
      inviteText: "to celebrate the wedding of our children with our families",
      groomSide: "Groom's family",
      brideSide: "Bride's family",
      mr: "Mr.",
      mrs: "Mrs.",
      eventsKicker: "When & where",
      eventsTitle: "Celebrations",
      at: "At",
      map: "Directions",
      cal: "Add to calendar",
      tba: "Details coming soon",
      dateTitle: "Our Big Day",
      units: ["Days", "Hours", "Mins", "Secs"],
      today: "Today is the day!",
      past: "Thank you for celebrating with us",
      welcome: "We can't wait to celebrate with you!",
      weekShort: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
      galleryTitle: "Our Moments",
      rsvpTitle: "Kindly Reply",
      rsvpLead: "Your presence would be our greatest honour",
      fName: "Your name",
      fAttend: "Will you attend?",
      yes: "Joyfully accept",
      no: "Regretfully decline",
      fEvent: "Attending in",
      fGuests: "Number of guests",
      fWish: "Your wishes",
      fWishPh: "Leave a few words for the couple…",
      send: "Send reply",
      sending: "Sending…",
      rsvpThanks: "Thank you! We've received your reply.",
      rsvpAgain: "Send again",
      rsvpErr: "Something went wrong, please try again.",
      needName: "Please enter your name",
      needAttend: "Please let us know if you can attend",
      giftTitle: "Wedding Gift",
      giftLead: "Thank you for your love and blessings",
      copy: "Copy",
      copied: "Account number copied",
      thanksTitle: "Thank You",
      thanksText: "Your presence and warm wishes are the most precious and meaningful gift to our two families on this special day!",
      groom: "Groom",
      bride: "Bride",
      withFamily: "& our families",
      footer: "See you on our big day",
      weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    },
  };

  /* ------------------------------------------------------------------
     URL params & state
     ------------------------------------------------------------------ */
  var params = new URLSearchParams(location.search);
  var guestParam = (params.get("to") || params.get("guest") || "").trim().slice(0, 80);
  var eventParam = (params.get("e") || "").trim().toLowerCase();
  /* ?s=b → bride's family invitation: bride & her parents are listed first */
  var brideFirst = (params.get("s") || "").toLowerCase() === "b";

  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }

  var lang = (params.get("lang") || store("wedding-lang") || "vi").toLowerCase();
  if (!STR[lang]) lang = "vi";

  var opened = false;
  var reduceMotion = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

  function t(k) { return (brideFirst && STR[lang][k + "B"]) || STR[lang][k]; }
  /* Couple names / roles in display order for this link */
  var N1 = brideFirst ? C.couple.bride : C.couple.groom;
  var N2 = brideFirst ? C.couple.groom : C.couple.bride;
  var R1 = brideFirst ? "bride" : "groom";
  var R2 = brideFirst ? "groom" : "bride";
  var MONO = brideFirst ? [C.couple.monogram[1], C.couple.monogram[0]] : C.couple.monogram;
  function L(v) { return v && typeof v === "object" ? (v[lang] || v.vi || "") : (v || ""); }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }

  /* Events visible for this link */
  var events = C.events.filter(function (ev) { return ev.id === eventParam; });
  if (!events.length) events = C.events.slice();
  var mainEvent = events.filter(function (ev) { return !ev.tba; })[0] || events[0];

  function guestName() { return guestParam || L(C.defaultGuest); }

  /* ------------------------------------------------------------------
     Dates (always in Vietnam time, whatever the viewer's timezone)
     ------------------------------------------------------------------ */
  function vnParts(iso) {
    var d = new Date(iso);
    var f = new Intl.DateTimeFormat("en-US", {
      timeZone: TZ, year: "numeric", month: "numeric", day: "numeric",
      hour: "2-digit", minute: "2-digit", hourCycle: "h23", weekday: "short",
    });
    var o = {};
    f.formatToParts(d).forEach(function (p) { o[p.type] = p.value; });
    var wd = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(o.weekday);
    return { y: +o.year, m: +o.month, d: +o.day, hh: o.hour, mm: o.minute, wd: wd };
  }
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  function dotDate(iso) { var p = vnParts(iso); return pad(p.d) + "." + pad(p.m) + "." + p.y; }
  function longDate(iso) {
    var p = vnParts(iso);
    if (lang === "vi") return "Ngày " + pad(p.d) + " tháng " + pad(p.m) + " năm " + p.y;
    return STR.en.months[p.m - 1] + " " + p.d + ", " + p.y;
  }
  function weekday(iso) { return t("weekdays")[vnParts(iso).wd]; }
  function hhmm(iso) { var p = vnParts(iso); return p.hh + ":" + p.mm; }
  function gcalStamp(iso) { return new Date(iso).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, ""); }

  /* ------------------------------------------------------------------
     SVG builders
     ------------------------------------------------------------------ */
  function f1(n) { return Math.round(n * 10) / 10; }

  // Hand-drawn style leaf branch, like the printed card.
  function branchSVG(cls) {
    var P = [[6, 112], [70, 110], [150, 82], [230, 22]];
    function bez(tt, i) {
      var u = 1 - tt;
      return u * u * u * P[0][i] + 3 * u * u * tt * P[1][i] + 3 * u * tt * tt * P[2][i] + tt * tt * tt * P[3][i];
    }
    function der(tt, i) {
      var u = 1 - tt;
      return 3 * u * u * (P[1][i] - P[0][i]) + 6 * u * tt * (P[2][i] - P[1][i]) + 3 * tt * tt * (P[3][i] - P[2][i]);
    }
    function leaf(bx, by, a, len, idx) {
      var ux = Math.cos(a), uy = Math.sin(a), nx = -uy, ny = ux, w = len * 0.3;
      var tx = bx + ux * len, ty = by + uy * len;
      var d = "M" + f1(bx) + " " + f1(by) +
        " C" + f1(bx + ux * len * .25 + nx * w) + " " + f1(by + uy * len * .25 + ny * w) + " " +
        f1(bx + ux * len * .7 + nx * w) + " " + f1(by + uy * len * .7 + ny * w) + " " + f1(tx) + " " + f1(ty) +
        " C" + f1(bx + ux * len * .7 - nx * w) + " " + f1(by + uy * len * .7 - ny * w) + " " +
        f1(bx + ux * len * .25 - nx * w) + " " + f1(by + uy * len * .25 - ny * w) + " " + f1(bx) + " " + f1(by);
      var rib = "M" + f1(bx) + " " + f1(by) + " L" + f1(bx + ux * len * .8) + " " + f1(by + uy * len * .8);
      return '<path pathLength="1" style="--i:' + idx + '" d="' + d + '"/><path pathLength="1" style="--i:' + (idx + 2) + '" d="' + rib + '"/>';
    }
    var out = '<path pathLength="1" style="--i:0" d="M' + P[0].join(" ") + " C" + P[1].join(" ") + " " + P[2].join(" ") + " " + P[3].join(" ") + '"/>';
    var n = 12;
    for (var i = 0; i < n; i++) {
      var tt = 0.08 + i * (0.86 / n);
      var bx = bez(tt, 0), by = bez(tt, 1);
      var ang = Math.atan2(der(tt, 1), der(tt, 0));
      var side = i % 2 ? 1 : -1;
      out += leaf(bx, by, ang + side * 0.8, 36 * (1 - tt * 0.45), i + 1);
    }
    out += leaf(P[3][0], P[3][1], Math.atan2(P[3][1] - P[2][1], P[3][0] - P[2][0]), 22, n + 1);
    return '<svg class="branch ' + cls + '" viewBox="-10 -10 260 150" aria-hidden="true">' + out + "</svg>";
  }

  // Royal crest: crown + double ring + laurel + monogram
  var crestCount = 0;
  function crestSVG() {
    var id = "cg" + (++crestCount);
    var m = MONO;
    var leaves = "";
    for (var s = -1; s <= 1; s += 2) {
      for (var k = 0; k < 8; k++) {
        var a = (s < 0 ? 200 - k * 14.5 : -20 + k * 14.5) * Math.PI / 180; // lower half arc
        var cx = 100 + Math.cos(a) * 84, cy = 140 + Math.sin(a) * 84;
        var rot = (a * 180 / Math.PI) + (s < 0 ? -55 : 55);
        leaves += '<ellipse cx="' + f1(cx) + '" cy="' + f1(cy) + '" rx="7.5" ry="3" transform="rotate(' + f1(rot) + " " + f1(cx) + " " + f1(cy) + ')" />';
      }
    }
    return '<svg viewBox="0 0 200 236" aria-hidden="true">' +
      '<defs><linearGradient id="' + id + '" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0" stop-color="#9C7424"/><stop offset=".45" stop-color="#F0D78A"/><stop offset=".7" stop-color="#C9A227"/><stop offset="1" stop-color="#8C6A1D"/></linearGradient></defs>' +
      '<g transform="translate(58 4) scale(.84)" fill="url(#' + id + ')" stroke="#9A7432" stroke-width="1" stroke-linejoin="round">' +
      '<path d="M10 54 L2 16 L28 36 L50 4 L72 36 L98 16 L90 54 Z" fill-opacity=".9"/>' +
      '<rect x="9" y="54" width="82" height="9" rx="2"/>' +
      '<circle cx="2" cy="14" r="4.5"/><circle cx="50" cy="3" r="5"/><circle cx="98" cy="14" r="4.5"/>' +
      '<circle cx="30" cy="58.5" r="2" fill="#fff" stroke="none"/><circle cx="50" cy="58.5" r="2.4" fill="#fff" stroke="none"/><circle cx="70" cy="58.5" r="2" fill="#fff" stroke="none"/>' +
      "</g>" +
      '<circle cx="100" cy="140" r="72" fill="none" stroke="url(#' + id + ')" stroke-width="1.6"/>' +
      '<circle cx="100" cy="140" r="66" fill="none" stroke="#C9A227" stroke-opacity=".45" stroke-width=".8"/>' +
      '<g fill="url(#' + id + ')">' + leaves + "</g>" +
      '<text x="64" y="156" text-anchor="middle" font-size="46" fill="url(#' + id + ')">' + esc(m[0]) + "</text>" +
      '<text x="101" y="150" text-anchor="middle" font-size="20" fill="#B8912C">&amp;</text>' +
      '<text x="140" y="156" text-anchor="middle" font-size="46" fill="url(#' + id + ')">' + esc(m[1]) + "</text>" +
      "</svg>";
  }

  var ICON = {
    orn: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5l3.2 9.5L12 21.5 8.8 12z" fill="none" stroke="currentColor" stroke-width="1.1"/><circle cx="12" cy="12" r="1.8" fill="currentColor"/></svg>',
    pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0119 9.5C19 14.8 12 21 12 21z" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="9.5" r="2.5" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>',
    cal: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="5" width="17" height="15.5" rx="2" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M3.5 10h17M8 3v4M16 3v4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
    copy: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="8" y="8" width="12" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M16 8V5a1 1 0 00-1-1H5a1 1 0 00-1 1v10a1 1 0 001 1h3" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>',
    heart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 21.2s-7.6-4.7-10-9.4C.3 8.4 2.1 4.4 5.8 4c2.3-.3 4.2.9 6.2 3.2C14 4.9 15.9 3.7 18.2 4c3.7.4 5.5 4.4 3.8 7.8-2.4 4.7-10 9.4-10 9.4z"/></svg>',
    chevron: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    send: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 3L10 14M21 3l-7 18-4-7-7-4z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>',
  };
  function orn() { return '<div class="orn rv rv--zoom">' + ICON.orn + "</div>"; }

  /* ------------------------------------------------------------------
     Sections
     ------------------------------------------------------------------ */
  function heroHTML() {
    var hasPhoto = !!C.photos.hero;
    return '<section class="sec hero' + (hasPhoto ? "" : " hero--nophoto") + '" id="hero">' +
      branchSVG("branch--tl") + branchSVG("branch--br") +
      '<div class="hero__inner">' +
      '<div class="crest rv rv--zoom">' + crestSVG() + "</div>" +
      '<p class="hero__kicker rv" style="--d:2">' + esc(t("heroKicker")) + "</p>" +
      (hasPhoto ? '<div class="arch rv rv--zoom" style="--d:3"><div class="arch__img"><img src="' + esc(C.photos.hero) + '" alt=""></div></div>' : "") +
      '<h1 class="hero__names script">' +
      '<span class="gold-text rv rv--write" style="--d:3">' + esc(N1) + "</span>" +
      '<span class="hero__amp rv rv--fade" style="--d:8">&amp;</span>' +
      '<span class="gold-text rv rv--write" style="--d:10">' + esc(N2) + "</span></h1>" +
      '<div class="hero__date rv" style="--d:14"><b>' + vnParts(mainEvent.start).d + "</b><i></i><b>" +
      pad(vnParts(mainEvent.start).m) + "</b><i></i><b>" + vnParts(mainEvent.start).y + "</b></div>" +
      '<p class="hero__sub rv" style="--d:15">' + esc(L(mainEvent.city)) + "</p>" +
      "</div>" +
      '<div class="scroll-cue">' + esc(t("scroll")) + ICON.chevron + "</div>" +
      "</section>";
  }

  function inviteHTML() {
    var f = C.families;
    function fam(title, p, d) {
      return '<div class="family rv" style="--d:' + d + '"><h4>' + esc(title) + "</h4><p>" +
        "<small>" + esc(t("mr")) + "</small> " + esc(p.father) + "<br>" +
        "<small>" + esc(t("mrs")) + "</small> " + esc(p.mother) + "</p></div>";
    }
    return '<section class="sec invite sec--pearl" id="invite"><div class="invite__box frame">' +
      '<p class="invite__label rv">' + esc(t("inviteLabel")) + "</p>" +
      '<p class="invite__guest script rv rv--write" style="--d:2">' + esc(guestName()) + "</p>" +
      '<p class="invite__text rv" style="--d:3">' + esc(t("inviteText")) + "</p>" +
      '<p class="invite__couple script gold-text rv rv--zoom" style="--d:4">' + esc(N1) + " &amp; " + esc(N2) + "</p>" +
      orn() +
      '<div class="families">' + fam(t(R1 + "Side"), f[R1], 1) + fam(t(R2 + "Side"), f[R2], 2) + "</div>" +
      "</div></section>";
  }

  function eventCard(ev, i) {
    var mapUrl = ev.mapUrl || "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(ev.venue + ", " + ev.address);
    var title = N1 + " & " + N2 + " — " + L(ev.title);
    var gcal = "https://calendar.google.com/calendar/render?action=TEMPLATE" +
      "&text=" + encodeURIComponent(title) +
      "&dates=" + gcalStamp(ev.start) + "/" + gcalStamp(ev.end || ev.start) +
      "&location=" + encodeURIComponent(ev.venue + ", " + ev.address) +
      "&details=" + encodeURIComponent(location.href.split("#")[0]) +
      "&ctz=" + TZ;
    var badge = '<span class="event__badge">' + esc(L(ev.city)) + "</span>";
    if (ev.tba) {
      return '<article class="event event--tba frame rv" style="--d:' + i + '">' + badge +
        '<h3 class="event__title script">' + esc(L(ev.title)) + "</h3>" +
        '<p class="event__tba">' + esc(t("tba")) + "</p></article>";
    }
    return '<article class="event frame rv" style="--d:' + i + '">' + badge +
      '<h3 class="event__title script">' + esc(L(ev.title)) + "</h3>" +
      '<div class="event__time"><div class="event__time-big">' + hhmm(ev.start) + "</div>" +
      '<div class="event__time-date"><span class="event__weekday">' + esc(weekday(ev.start)) + "</span>" +
      '<span class="event__day">' + dotDate(ev.start) + "</span></div></div>" +
      '<p class="event__long">' + esc(longDate(ev.start)) + "</p>" +
      (L(ev.lunar) ? '<p class="event__lunar">(' + esc(L(ev.lunar)) + ")</p>" : "") +
      (ev.note && L(ev.note) ? '<p class="event__note">' + esc(L(ev.note)) + "</p>" : "") +
      '<p class="event__venue">' + esc(ev.venue) + "</p>" +
      '<p class="event__addr">' + esc(ev.address) + "</p>" +
      '<div class="event__actions">' +
      '<a class="btn btn--gold btn--sm" href="' + esc(mapUrl) + '" target="_blank" rel="noopener">' + ICON.pin + esc(t("map")) + "</a>" +
      '<a class="btn btn--line btn--sm" href="' + esc(gcal) + '" target="_blank" rel="noopener">' + ICON.cal + esc(t("cal")) + "</a>" +
      "</div></article>";
  }

  function eventsHTML() {
    return '<section class="sec sec--pattern" id="events">' +
      '<p class="sec__kicker rv">' + esc(t("eventsKicker")) + "</p>" +
      '<h2 class="sec__title script gold-text rv rv--write" style="--d:1">' + esc(t("eventsTitle")) + "</h2>" +
      orn() +
      '<div class="events">' + events.map(eventCard).join("") + "</div></section>";
  }

  function dateHTML() {
    var p = vnParts(mainEvent.start);
    var first = new Date(Date.UTC(p.y, p.m - 1, 1)).getUTCDay(); // 0 = Sun
    var lead = (first + 6) % 7; // Monday first
    var days = new Date(Date.UTC(p.y, p.m, 0)).getUTCDate();
    var cells = t("weekShort").map(function (w) { return '<div class="cal__h">' + w + "</div>"; }).join("");
    for (var i = 0; i < lead; i++) cells += "<div></div>";
    for (var d = 1; d <= days; d++) {
      cells += d === p.d
        ? '<div class="cal__d cal__d--hit">' + ICON.heart + "<span>" + d + "</span></div>"
        : '<div class="cal__d">' + d + "</div>";
    }
    var units = t("units");
    return '<section class="sec sec--pearl" id="date">' +
      branchSVG("branch--tr") +
      '<h2 class="sec__title script gold-text rv rv--write">' + esc(t("dateTitle")) + "</h2>" +
      '<p class="date-big rv" style="--d:2">' + dotDate(mainEvent.start) + "</p>" +
      '<div class="cal rv" style="--d:3">' + cells + "</div>" +
      '<div class="countdown rv" style="--d:4" id="countdown">' +
      units.map(function (u, k) { return '<div class="cd"><b data-cd="' + k + '">00</b><span>' + esc(u) + "</span></div>"; }).join("") +
      "</div>" +
      '<p class="countdown-done script gold-text" id="countdownDone" hidden></p>' +
      '<p class="sign-off script rv" style="--d:5">' + esc(t("welcome")) + "</p>" +
      "</section>";
  }

  function galleryHTML() {
    var g = C.photos.gallery || [];
    if (!g.length) return "";
    return '<section class="sec" id="gallery">' +
      '<h2 class="sec__title script gold-text rv rv--write">' + esc(t("galleryTitle")) + "</h2>" + orn() +
      '<div class="gallery">' + g.map(function (src, i) {
        return '<button type="button" class="rv rv--zoom" style="--d:' + (i % 3) + '" data-idx="' + i + '"><img loading="lazy" src="' + esc(src) + '" alt=""></button>';
      }).join("") + "</div></section>";
  }

  function rsvpHTML() {
    if (!C.rsvp || !C.rsvp.endpoint) return "";
    var evOpts = events.length > 1
      ? '<div class="field rv"><label for="rEvent">' + esc(t("fEvent")) + '</label><select id="rEvent" name="event">' +
        events.map(function (ev) { return '<option value="' + esc(ev.id) + '">' + esc(L(ev.city)) + "</option>"; }).join("") + "</select></div>"
      : '<input type="hidden" name="event" value="' + esc(events[0].id) + '">';
    return '<section class="sec sec--pattern" id="rsvp">' +
      '<h2 class="sec__title script gold-text rv rv--write">' + esc(t("rsvpTitle")) + "</h2>" +
      '<p class="sec__lead rv" style="--d:1">' + esc(t("rsvpLead")) + "</p>" + orn() +
      '<form class="rsvp" id="rsvpForm" novalidate>' +
      '<div class="field rv"><label for="rName">' + esc(t("fName")) + '</label><input id="rName" name="name" type="text" autocomplete="name" maxlength="80" value="' + esc(guestParam) + '"></div>' +
      '<div class="field rv"><fieldset><legend>' + esc(t("fAttend")) + '</legend><div class="choices">' +
      '<label class="choice"><input type="radio" name="attend" value="yes"><span>' + esc(t("yes")) + "</span></label>" +
      '<label class="choice"><input type="radio" name="attend" value="no"><span>' + esc(t("no")) + "</span></label>" +
      "</div></fieldset></div>" +
      evOpts +
      '<div class="field rv" id="guestsField"><label for="rGuests">' + esc(t("fGuests")) + '</label><select id="rGuests" name="guests">' +
      [1, 2, 3, 4, 5, 6].map(function (n) { return '<option value="' + n + '">' + n + "</option>"; }).join("") + "</select></div>" +
      '<div class="field rv"><label for="rMsg">' + esc(t("fWish")) + '</label><textarea id="rMsg" name="message" maxlength="600" placeholder="' + esc(t("fWishPh")) + '"></textarea></div>' +
      '<button class="btn btn--gold rv" type="submit">' + ICON.send + "<span>" + esc(t("send")) + "</span></button>" +
      (L(C.rsvp.deadline) ? '<p class="rsvp__note">' + esc(L(C.rsvp.deadline)) + "</p>" : "") +
      "</form>" +
      '<div class="rsvp-done frame" id="rsvpDone" hidden><p class="script gold-text" style="font-size:40px">' + esc(t("thanksTitle")) + "</p><p>" + esc(t("rsvpThanks")) +
      '</p><p style="margin-top:14px"><button type="button" class="btn btn--line btn--sm" id="rsvpAgain">' + esc(t("rsvpAgain")) + "</button></p></div>" +
      "</section>";
  }

  function giftHTML() {
    if (!C.gift || !C.gift.enabled) return "";
    return '<section class="sec sec--pearl" id="gift">' +
      '<h2 class="sec__title script gold-text rv rv--write">' + esc(t("giftTitle")) + "</h2>" +
      '<p class="sec__lead rv" style="--d:1">' + esc(t("giftLead")) + "</p>" + orn() +
      '<div class="gifts">' + C.gift.accounts.map(function (a, i) {
        return '<div class="gift frame rv" style="--d:' + i + '">' +
          '<p class="gift__label script">' + esc(L(a.label)) + "</p>" +
          (a.qr ? '<img loading="lazy" src="' + esc(a.qr) + '" alt="QR">' : "") +
          '<p class="gift__bank">' + esc(a.bank) + "</p>" +
          '<p class="gift__num">' + esc(a.number) + "</p>" +
          '<p class="gift__holder">' + esc(a.holder) + "</p>" +
          '<button type="button" class="btn btn--line btn--sm" data-copy="' + esc(a.number) + '">' + ICON.copy + esc(t("copy")) + "</button></div>";
      }).join("") + "</div></section>";
  }

  function thanksHTML() {
    return '<section class="sec thanks" id="thanks">' +
      branchSVG("branch--tl") + branchSVG("branch--br") +
      (C.photos.thanks ? '<div class="arch thanks__photo rv rv--zoom"><div class="arch__img"><img loading="lazy" src="' + esc(C.photos.thanks) + '" alt=""></div></div>' : "") +
      '<h2 class="sec__title script gold-text rv rv--write">' + esc(t("thanksTitle")) + "</h2>" +
      '<p class="thanks__text rv" style="--d:2">' + esc(t("thanksText")) + "</p>" +
      '<p class="thanks__sig rv" style="--d:3">' + esc(t(R1)) + " <b>" + esc(N1) + "</b> &amp; " + esc(t(R2)) + " <b>" + esc(N2) + "</b><br>" + esc(t("withFamily")) + "</p>" +
      '<div class="crest rv rv--zoom" style="--d:4;width:96px;margin-top:30px">' + crestSVG() + "</div>" +
      '<p class="footer-note rv" style="--d:5">' + esc(t("footer")) + " · " + dotDate(mainEvent.start) + "</p>" +
      "</section>";
  }

  /* ------------------------------------------------------------------
     Render
     ------------------------------------------------------------------ */
  function renderStatic() {
    document.documentElement.lang = lang;
    document.title = t("docTitle") + " · " + N1 + " & " + N2;
    $$("[data-i18n]").forEach(function (el) { el.textContent = t(el.getAttribute("data-i18n")); });
    var stacked = esc(N1) + "<br><small>&amp;</small> " + esc(N2);
    $("#introNames").innerHTML = stacked;
    $("#miniNames").innerHTML = stacked;
    $("#introDate").textContent = dotDate(mainEvent.start);
    $("#miniDate").textContent = dotDate(mainEvent.start);
    $("#envGuest").textContent = guestName();
    $("#sealMono").textContent = MONO[0] + MONO[1];
    $("#openBtn").setAttribute("aria-label", t("openBtn"));
  }

  function renderApp() {
    crestCount = 0;
    $("#app").innerHTML = heroHTML() + inviteHTML() + eventsHTML() + dateHTML() + galleryHTML() + rsvpHTML() + giftHTML() + thanksHTML();
    bindApp();
    tick();
    if (opened) startReveal(true);
  }

  /* ------------------------------------------------------------------
     Reveal on scroll
     ------------------------------------------------------------------ */
  var io;
  function startReveal(instantAboveFold) {
    var els = $$(".rv, .branch");
    if (reduceMotion || !("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("in"); });
      return;
    }
    if (io) io.disconnect();
    // Elements hidden with clip-path count as "not visible" to the observer,
    // so those are watched through their parent instead.
    var waiting = new Map();
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        (waiting.get(en.target) || []).forEach(function (el) { el.classList.add("in"); });
        waiting.delete(en.target);
        io.unobserve(en.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    els.forEach(function (el) {
      if (instantAboveFold && el.getBoundingClientRect().top < window.innerHeight) {
        el.style.transitionDelay = "0s";
        el.classList.add("in");
        return;
      }
      var target = el.classList.contains("rv--write") ? el.parentElement : el;
      if (!waiting.has(target)) { waiting.set(target, []); io.observe(target); }
      waiting.get(target).push(el);
    });
  }

  /* ------------------------------------------------------------------
     Countdown
     ------------------------------------------------------------------ */
  function tick() {
    var cd = $("#countdown");
    if (!cd) return;
    var start = new Date(mainEvent.start).getTime();
    var diff = start - Date.now();
    if (diff <= 0) {
      cd.hidden = true;
      var done = $("#countdownDone");
      done.hidden = false;
      done.textContent = diff > -12 * 3600e3 ? t("today") : t("past");
      return;
    }
    var s = Math.floor(diff / 1000);
    var vals = [Math.floor(s / 86400), Math.floor(s % 86400 / 3600), Math.floor(s % 3600 / 60), s % 60];
    vals.forEach(function (v, k) {
      var el = cd.querySelector('[data-cd="' + k + '"]');
      var txt = k === 0 ? String(v) : pad(v);
      if (el.textContent !== txt) el.textContent = txt;
    });
  }
  setInterval(tick, 1000);

  /* ------------------------------------------------------------------
     Interactions inside the page
     ------------------------------------------------------------------ */
  var toastTimer;
  function toast(msg) {
    var el = $("#toast");
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.classList.remove("show"); }, 2200);
  }

  function copyText(txt) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(txt);
    var ta = document.createElement("textarea");
    ta.value = txt; ta.setAttribute("readonly", ""); ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.appendChild(ta); ta.select();
    try { document.execCommand("copy"); } catch (e) { /* ignore */ }
    document.body.removeChild(ta);
    return Promise.resolve();
  }

  function bindApp() {
    // Gallery
    $$(".gallery button").forEach(function (b) {
      b.addEventListener("click", function () { openLightbox(+b.getAttribute("data-idx")); });
    });
    // Copy account
    $$("[data-copy]").forEach(function (b) {
      b.addEventListener("click", function () {
        copyText(b.getAttribute("data-copy")).then(function () { toast(t("copied")); });
      });
    });
    // RSVP
    var form = $("#rsvpForm");
    if (form) {
      form.addEventListener("change", function () {
        var a = form.querySelector('input[name="attend"]:checked');
        $("#guestsField").hidden = !!(a && a.value === "no");
      });
      form.addEventListener("submit", submitRSVP);
      $("#rsvpAgain").addEventListener("click", function () {
        $("#rsvpDone").hidden = true; form.hidden = false;
      });
    }
  }

  function submitRSVP(e) {
    e.preventDefault();
    var form = e.currentTarget;
    var name = form.name.value.trim();
    var attend = form.querySelector('input[name="attend"]:checked');
    if (!name) { toast(t("needName")); form.name.focus(); return; }
    if (!attend) { toast(t("needAttend")); return; }
    var btn = form.querySelector('button[type="submit"]');
    var label = btn.querySelector("span");
    btn.disabled = true; label.textContent = t("sending");
    var body = new URLSearchParams({
      name: name,
      attend: attend.value,
      event: form.event.value,
      guests: attend.value === "yes" ? form.guests.value : "0",
      message: form.message.value.trim(),
      invited: guestParam,
      lang: lang,
    });
    // Apps Script doesn't send CORS headers; "no-cors" still delivers the data.
    fetch(C.rsvp.endpoint, { method: "POST", mode: "no-cors", body: body })
      .then(function () {
        form.hidden = true;
        $("#rsvpDone").hidden = false;
        store("wedding-rsvp", "1");
      })
      .catch(function () { toast(t("rsvpErr")); })
      .then(function () { btn.disabled = false; label.textContent = t("send"); });
  }

  /* Lightbox */
  var lbIdx = 0;
  function openLightbox(i) {
    var g = C.photos.gallery;
    lbIdx = (i + g.length) % g.length;
    var lb = $("#lightbox");
    lb.querySelector("img").src = g[lbIdx];
    lb.hidden = false;
  }
  (function () {
    var lb = $("#lightbox"), sx = 0;
    lb.querySelector(".lightbox__close").addEventListener("click", function () { lb.hidden = true; });
    lb.querySelector(".lightbox__nav--prev").addEventListener("click", function (e) { e.stopPropagation(); openLightbox(lbIdx - 1); });
    lb.querySelector(".lightbox__nav--next").addEventListener("click", function (e) { e.stopPropagation(); openLightbox(lbIdx + 1); });
    lb.addEventListener("click", function (e) { if (e.target === lb) lb.hidden = true; });
    lb.addEventListener("touchstart", function (e) { sx = e.touches[0].clientX; }, { passive: true });
    lb.addEventListener("touchend", function (e) {
      var dx = e.changedTouches[0].clientX - sx;
      if (Math.abs(dx) > 50) openLightbox(lbIdx + (dx < 0 ? 1 : -1));
    });
  })();

  /* ------------------------------------------------------------------
     Music
     ------------------------------------------------------------------ */
  var audio = $("#bgm");
  var musicBtn = $("#musicBtn");
  var userPaused = false, pausedByHide = false;
  audio.src = C.music;

  function setPlayingUI() { musicBtn.classList.toggle("is-playing", !audio.paused); }
  audio.addEventListener("play", setPlayingUI);
  audio.addEventListener("pause", setPlayingUI);

  function fadeIn() {
    var target = 0.8, startT = performance.now();
    try { audio.volume = 0; } catch (e) { /* iOS: volume is read-only */ }
    (function step(now) {
      var k = Math.min(1, (now - startT) / 2500);
      try { audio.volume = target * k; } catch (e) { return; }
      if (k < 1) requestAnimationFrame(step);
    })(startT);
  }

  function playMusic() {
    var p = audio.play();
    if (p && p.then) p.then(fadeIn).catch(function () { setPlayingUI(); });
    else fadeIn();
  }

  musicBtn.addEventListener("click", function () {
    if (audio.paused) { userPaused = false; playMusic(); }
    else { userPaused = true; audio.pause(); }
  });

  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      if (!audio.paused) { pausedByHide = true; audio.pause(); }
    } else if (pausedByHide && !userPaused && opened) {
      pausedByHide = false; audio.play().catch(function () {});
    }
  });

  /* ------------------------------------------------------------------
     Open the envelope
     ------------------------------------------------------------------ */
  function openInvitation(withMusic) {
    if (opened) return;
    opened = true;
    if (withMusic !== false) playMusic(); // must run inside the tap for iOS
    var intro = $("#intro");
    var fast = reduceMotion ? 0.15 : 1;
    intro.classList.add("is-opening");
    setTimeout(function () { intro.classList.add("is-flapped"); }, 800 * fast);
    setTimeout(function () { intro.classList.add("is-letter"); }, 1200 * fast);
    setTimeout(function () { burst(); }, 1500 * fast);
    setTimeout(function () {
      window.scrollTo(0, 0);
      document.body.classList.remove("is-locked");
      intro.classList.add("is-done");
      musicBtn.hidden = false;
      startPetals();
      startReveal(false);
    }, 2700 * fast);
    setTimeout(function () { intro.hidden = true; }, 4300 * fast);
  }

  $("#openBtn").addEventListener("click", function () { openInvitation(true); });
  $("#seal").addEventListener("click", function () { openInvitation(true); });

  /* Language */
  $("#langToggle").addEventListener("click", function () {
    lang = lang === "vi" ? "en" : "vi";
    store("wedding-lang", lang);
    renderStatic();
    renderApp();
  });

  /* ------------------------------------------------------------------
     Gold dust (canvas)
     ------------------------------------------------------------------ */
  var cv = $("#dust"), ctx = cv.getContext("2d"), W = 0, H = 0, DPR = 1;
  var motes = [], sparks = [], rafId = 0;
  function resize() {
    DPR = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth; H = window.innerHeight;
    cv.width = W * DPR; cv.height = H * DPR;
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  }
  function mote() {
    return { x: Math.random() * W, y: Math.random() * H, r: 0.6 + Math.random() * 1.8, vy: -(0.08 + Math.random() * 0.25),
      vx: (Math.random() - 0.5) * 0.15, ph: Math.random() * 6.28, sp: 0.01 + Math.random() * 0.03 };
  }
  function burst() {
    var env = $("#envelope").getBoundingClientRect();
    var cx = env.left + env.width / 2, cy = env.top + env.height * 0.3;
    for (var i = 0; i < 90; i++) {
      var a = Math.random() * Math.PI * 2, v = 1.5 + Math.random() * 5;
      sparks.push({ x: cx, y: cy, vx: Math.cos(a) * v, vy: Math.sin(a) * v - 2.5, r: 1 + Math.random() * 2.6, life: 1, decay: 0.008 + Math.random() * 0.012 });
    }
  }
  function frame() {
    ctx.clearRect(0, 0, W, H);
    for (var i = 0; i < motes.length; i++) {
      var m = motes[i];
      m.x += m.vx; m.y += m.vy; m.ph += m.sp;
      if (m.y < -10) { m.y = H + 10; m.x = Math.random() * W; }
      var a = 0.25 + 0.45 * (0.5 + 0.5 * Math.sin(m.ph));
      ctx.beginPath(); ctx.fillStyle = "rgba(212,175,55," + a.toFixed(3) + ")";
      ctx.arc(m.x, m.y, m.r, 0, 6.283); ctx.fill();
    }
    for (var j = sparks.length - 1; j >= 0; j--) {
      var s = sparks[j];
      s.x += s.vx; s.y += s.vy; s.vy += 0.07; s.vx *= 0.99; s.life -= s.decay;
      if (s.life <= 0) { sparks.splice(j, 1); continue; }
      ctx.beginPath();
      ctx.fillStyle = (j % 3 ? "rgba(214,178,66," : "rgba(255,244,205,") + s.life.toFixed(3) + ")";
      ctx.arc(s.x, s.y, s.r, 0, 6.283); ctx.fill();
    }
    rafId = requestAnimationFrame(frame);
  }
  function startDust() {
    if (reduceMotion) return;
    resize();
    var n = Math.round(Math.min(45, (W * H) / 14000));
    for (var i = 0; i < n; i++) motes.push(mote());
    rafId = requestAnimationFrame(frame);
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) cancelAnimationFrame(rafId);
      else rafId = requestAnimationFrame(frame);
    });
  }

  /* Petals (white & butter yellow, like the flowers in the theme) */
  function startPetals() {
    if (reduceMotion) return;
    var box = $("#petals"), colors = ["#FFFFFF", "#FFF6D6", "#F7E6A2", "#FBEFC4"];
    var html = "";
    for (var i = 0; i < 9; i++) {
      html += '<span class="petal" style="left:' + (Math.random() * 100).toFixed(1) + "%;--s:" + (9 + Math.random() * 9).toFixed(0) +
        "px;--c:" + colors[i % colors.length] + ";--t:" + (11 + Math.random() * 9).toFixed(1) + "s;--delay:" + (Math.random() * 10).toFixed(1) +
        "s;--x:" + ((Math.random() - 0.5) * 160).toFixed(0) + 'px"></span>';
    }
    box.innerHTML = html;
  }

  /* ------------------------------------------------------------------
     Boot
     ------------------------------------------------------------------ */
  renderStatic();
  renderApp();
  startDust();

  // Developer shortcut: ?skip=1 opens straight away (no music) — handy for previews.
  if (params.get("skip") === "1") openInvitation(false);
})();
