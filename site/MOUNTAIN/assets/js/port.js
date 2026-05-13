const horizontal = document.querySelector("#port");
const horSection = gsap.utils.toArray(".port_item");

gsap.to(horSection, {
  xPercent: -120 * (horSection.length - 1),
  ease: "none",

  scrollTrigger: {
    trigger: horizontal,
    start: "top 56px",
    end: "+=3000",

    pin: true,
    scrub: 1,

    invalidateOnRefresh: true, //refresh될때마다 다시 계산
    anticipatePin: 1, //pin 시작할때 화면 튀는 현상 줄여주는 옵션
  },
});
