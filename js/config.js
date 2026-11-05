/* =====================================================================
   WEDDING CONFIG — edit this file only. No coding needed.
   Text that has { vi: "...", en: "..." } is shown in that language.
   ===================================================================== */
window.WEDDING = {
  couple: {
    groom: "Việt Hoàng",
    bride: "Tuyết Nhi",
    // Letters on the wax seal & crest
    monogram: ["H", "N"],
  },

  families: {
    groom: { father: "Đỗ Văn Oánh", mother: "Nguyễn Việt Hải" },
    bride: { father: "Nguyễn Đức Việt", mother: "Nguyễn Thị Lan" },
  },

  /* ---------------------------------------------------------------
     EVENTS — one per celebration.
     `id` is used in the link:  ?e=hn  shows only the Hà Nội event,
     ?e=hcm shows only TP.HCM, no `e` shows all events.
     Times use Vietnam time (+07:00).
     Set `tba: true` while details are not final (card shows "updating").
     `side: "bride"` → a link showing only this event lists the bride first
     (override with ?s=b for bride-first or ?s=g for groom-first).
     --------------------------------------------------------------- */
  events: [
    {
      id: "hcm",
      tba: false,
      // Hosted by the bride's family → ?e=hcm lists bride & her parents first
      side: "bride",
      city: { vi: "TP. Hồ Chí Minh", en: "Ho Chi Minh City" },
      title: { vi: "Tiệc cưới", en: "Wedding Reception" },
      start: "2026-12-05T18:00:00+07:00",
      end: "2026-12-05T21:00:00+07:00",
      lunar: {
        vi: "Tức ngày 27 tháng 10 năm Bính Ngọ",
        en: "Lunar calendar: 27th day of the 10th month, Year of Bính Ngọ",
      },
      // Optional extra line under the date
      note: { vi: "Đón khách 17:30 · Khai tiệc 19:00", en: "Guest welcome 17:30 · Dinner starts 19:00" },
      venue: "Sảnh Ruby – Tầng 1 – The Adora Center",
      address: "431 Đường Hoàng Văn Thụ, Phường Tân Sơn Nhất, TP. Hồ Chí Minh",
      // Optional: paste a Google Maps share link. Empty = search by address.
      mapUrl: "",
    },
    {
      id: "hn",
      tba: false,
      city: { vi: "Hà Nội", en: "Ha Noi" },
      title: { vi: "Tiệc cưới", en: "Wedding Reception" },
      start: "2026-12-12T11:00:00+07:00",
      end: "2026-12-12T14:00:00+07:00",
      lunar: {
        vi: "Tức ngày 04 tháng 11 năm Bính Ngọ",
        en: "Lunar calendar: 4th day of the 11th month, Year of Bính Ngọ",
      },
      venue: "Sảnh tiệc tầng 1 – Marigold – Promes Center",
      address: "122-124 Đường Xuân Thủy, Phường Cầu Giấy, TP. Hà Nội",
      mapUrl: "",
    },
  ],

  /* Background music (starts when the envelope is opened) */
  music: "assets/music/song.mp3",

  /* ---------------------------------------------------------------
     PHOTOS — put files into assets/photos/ and list them here.
     Leave empty and the photo sections are hidden automatically.
     --------------------------------------------------------------- */
  photos: {
    hero: "", // e.g. "assets/photos/hero.jpg"  (portrait works best)
    gallery: [
      // "assets/photos/01.jpg",
      // "assets/photos/02.jpg",
    ],
    thanks: "", // optional photo above the thank-you note
  },

  /* ---------------------------------------------------------------
     RSVP — paste the Google Apps Script Web App URL (see README).
     Empty = RSVP section hidden.
     --------------------------------------------------------------- */
  rsvp: {
    endpoint: "",
    deadline: { vi: "Vui lòng phản hồi trước ngày 30/11/2026", en: "Kindly reply by 30 November 2026" },
  },

  /* ---------------------------------------------------------------
     GIFT BOX (Hộp mừng cưới) — set enabled: true and fill in.
     --------------------------------------------------------------- */
  gift: {
    enabled: false,
    accounts: [
      { label: { vi: "Chú rể", en: "Groom" }, bank: "Vietcombank", number: "0000000000", holder: "DO VIET HOANG", qr: "" },
      { label: { vi: "Cô dâu", en: "Bride" }, bank: "Techcombank", number: "0000000000", holder: "NGUYEN TUYET NHI", qr: "" },
    ],
  },

  /* Default greeting when the link has no ?to= */
  defaultGuest: { vi: "Quý khách", en: "Our Beloved Guest" },
};
