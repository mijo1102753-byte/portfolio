document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const modalWrapper = document.getElementById("modalWrapper");
  const closeBtn = document.getElementById("modalClose");
  const overlay = document.querySelector(".modal_overlay");
  let modalSwiper = null;

  // [수정된 데이터 명단] 1번은 4개, 2/3번은 3개씩 구성
  const furnitureData = {
    coll_1: [
      // 1. 자개 수림 의자 (총 4개 슬라이드)
      {
        title: "기억의 결 의자",
        subtitle: "Grain of Memory Chair",
        image: "img/coll_1_img_1.png",
        short: "자개, 원목, 금속, 자연석이 결합되어 기억의 층위를 표현한 조형적 디자인 의자.",
        desc: "전통 나전 공예의 섬세한 장식과 현대적인 구조 디자인이 결합된 조형적 가구입니다. <br> 깊은 색감의 원목 프레임 위에는 자개 인레이 기법을 활용하여 꽃과 가지 문양을 섬세하게 표현했습니다. <br> 나무의 결 위로 흐르는 자개의 빛은 시간이 쌓인 기억의 흔적을 상징적으로 드러냅니다.<br> 좌판은 부드러운 곡선의 목재 구조로 제작되었으며, 하부는 유기적으로 이어지는 금속 지지대를 통해 자연석 베이스와 연결됩니다.  서로 다른 재료인 목재, 자개, 금속, 자연석이 하나의 구조 안에서 균형을 이루며 독특한 조형미를 만들어냅니다. 단순한 기능적 가구를 넘어, 공간 속에서 하나의 예술적 오브제로 존재하도록 설계되었습니다.",
        material:
          "· Wood – 원목 프레임 및 좌판<br>· Mother-of-Pearl (Najeon) – 자개 인레이 장식<br>· Metal – 곡선 구조 지지대<br>· Natural Stone – 하부 베이스",
      },
      {
        title: "자개 라운지 의자",
        subtitle: "Mother-of-Pearl Lounge Chair",
        image: "img/coll_1_img_2.png",
        short: "자개 장식과 금속 구조가 어우러진 조형적 라운지 체어.",
        desc: "자개 라운지 체어는 전통 나전 기법의 장식성과 현대적인 금속 구조가 결합된 디자인 가구입니다. <br> 등받이와 좌판에는 자개 인레이 장식이 적용되어 꽃과 식물 문양이 섬세하게 표현되어 있으며, <br> 빛의 각도에 따라 은은하게 변화하는 자개의 색감이 특징입니다. 의자의 구조는 유려하게 흐르는 금속 프레임으로 이루어져 가볍고 안정적인 형태를 만들어내며, 전통 공예와 현대적 디자인이 자연스럽게 조화를 이루도록 설계되었습니다. 자개 라운지 체어는 단순한 휴식을 위한 의자를 넘어, 공간 속에서 예술적 오브제로 기능하는 가구입니다.",
        material:
          "· Mother-of-Pearl (Najeon) – 자개 인레이 장식<br>· Metal Frame – 금속 구조 프레임<br>· Wood Panel – 자개 장식 패널",
      },
      {
        title: "초승 윤회 의자",
        subtitle: "Mother-of-Pearl Lounge Chair",
        image: "img/coll_1_img_3.png",
        short: "초승달의 곡선을 모티프로 한 조형적 라운지 체어로, 전통 자개 공예와 현대 디자인이 어우러진 아트 퍼니처.",
        desc: "초승 윤회 의자는 달의 순환과 흐름에서 영감을 받은 곡선 구조의 조형 의자입니다. <br> 부드럽게 이어지는 초승달 형태의 프레임은 공간 속에서 하나의 예술 작품처럼 존재하며, <br> 전통 나전 공예로 장식된 자개 문양이 은은한 빛을 반사하며 깊이 있는 아름다움을 더합니다. <br> 좌석은 곡선 구조 안에 자연스럽게 배치되어 안정적인 사용감을 제공하며, 내부의 원형 금속 장식 요소는 달을 상징하는 디자인 포인트로 의자의 상징성과 조형미를 강조합니다. 전통 공예와 현대적인 디자인 언어가 조화를 이루어 라운지, 갤러리, 문화 공간 등에서 독특한 분위기를 완성합니다.",
        material: "· 천연 원목 프레임<br>· 자개 인레이 (Mother-of-pearl)<br>· 금속 장식 디테일",
      },
      {
        title: "자개 수림 의자",
        subtitle: "Mother-of-Pearl Forest Chair",
        image: "img/coll_1_img_4.png",
        short:
          "숲의 흐름과 자연의 유기적인 형태에서 영감을 받은 자개 인레이 의자로, 조형적 다리 구조와 섬세한 나전 장식이 특징인 아트 퍼니처.",
        desc: "숲속에서 자라나는 나무와 흘러내리는 자연의 결을 모티프로 디자인된 조형 의자입니다. <br> 상판에는 꽃과 잎의 흐름을 표현한 자개 인레이가 섬세하게 배치되어 빛에 따라 은은하게 색이 변하며 깊이 있는 질감을 만들어냅니다.하부 구조는 여러 개의 곡선형 다리가 뿌리처럼 퍼져 내려가는 형태로 설계되어 마치 숲의 나무들이 하나의 중심에서 자라나는 듯한 유기적인 아름다움을 보여줍니다. 다리 부분에도 자개 장식이 자연스럽게 이어지며 전통 나전 공예의 정교함과 현대 조형 디자인이 조화를 이룹니다. 단순한 가구의 기능을 넘어 공간 속에서 자연의 흐름과 예술적 감각을 동시에 전달하는 오브제형 가구로, 갤러리 공간이나 라운지에서 강한 존재감을 만들어냅니다.",
        material:
          "· Wood – 천연 원목 프레임 및 상판<br>· Mother-of-Pearl (Najeon) – 자개 인레이 장식<br>· 전통 나전 공예 마감<br>· 고광택 목재 마감",
      },
    ],
    coll_2: [
      // 2. 자개 화대 (총 3개 슬라이드)
      {
        title: "자개 화대",
        subtitle: "Mother-of-Pearl Pedestal Table",
        image: "img/coll_2_img_1.png",
        short: "전통 자개 장식과 원목 구조가 어우러진 화대로, 공간에 한국적인 우아함을 더하는 장식 테이블. ",
        desc: "자개 화대는 한국 전통 가구의 미감을 현대적인 공간에서도 자연스럽게 사용할 수 있도록 재해석한 장식 테이블입니다. 단정한 사각 상판과 안정적인 네 개의 다리 구조는 전통 화대의 균형미를 그대로 담고 있으며, 목재 표면에는 섬세한 자개 인레이 장식이 더해져 은은한 빛과 함께 고급스러운 분위기를 연출합니다.상판 아래의 조각 장식과 프레임 구조는 전통 목가구의 아름다운 비례와 디테일을 보여주며, 화병이나 오브제, 조형 작품 등을 올려두는 장식용 가구로 활용하기 좋습니다. 자개 화대는 공간 속에서 단순한 가구를 넘어 전통 공예의 정서를 전달하는 오브제로 자리합니다.",
        material: "· 천연 원목 프레임<br>· 자개 인레이 (Mother-of-Pearl)<br>· 전통 목공 조각 디테일",
      },
      {
        title: "흐름의 결 테이블",
        subtitle: "Flow Grain Coffee Table",
        image: "img/coll_2_img_2.png",
        short:
          "자개의 흐름을 중심으로 자연의 결을 표현한 조형적 커피 테이블로, 전통 공예와 현대 디자인이 어우러진 아트 퍼니처.",
        desc: "자연 속에서 이어지는 강과 물결의 흐름에서 영감을 받아 디자인된 조형 테이블입니다. <br> 유기적인 형태의 상판 중앙에는 자개 인레이가 흐르듯 배치되어 빛에 따라 다양한 색을 반사하며 깊이 있는 질감을 만들어냅니다. 어두운 톤의 원목 상판은 자연스러운 결을 살려 제작되었으며, 자개의 섬세한 패턴과 대비를 이루며 조형적인 아름다움을 강조합니다. 테이블의 유려한 곡선 형태와 낮은 높이는 공간에 안정감과 여백의 미를 더해주며, 거실이나 라운지 공간에서 하나의 예술 오브제로서 존재감을 드러냅니다.",
        material: "· 천연 원목 프레임<br>· 자개 인레이 (Mother-of-Pearl)<br>· 전통 목공 조각 디테일",
      },
      {
        title: "월영 테이블",
        subtitle: "Flow Grain Coffee Table",
        image: "img/coll_2_img_3.png",
        short:
          "달빛이 물 위에 비친 모습을 모티프로 한 자개 테이블로, 전통 나전 공예와 조형적인 디자인이 어우러진 장식 테이블.",
        desc: "월영 테이블은 달빛이 고요한 물 위에 비추는 장면에서 영감을 받아 디자인된 조형 테이블입니다. <br> 원형 상판 중앙에는 꽃과 자연 문양이 자개 인레이로 섬세하게 표현되어 빛의 각도에 따라 은은하게 반짝이며 깊이 있는 아름다움을 만들어냅니다. 상판의 부드러운 곡선 테두리와 안정적인 팔각 기둥 형태의 하부 구조는 전통 목가구의 균형감 있는 비례를 담고 있으며, 전체 표면에는 나전 장식이 정교하게 배치되어 고급스러운 분위기를 완성합니다. 월영 테이블은 단순한 가구를 넘어 전통 공예의 섬세함과 현대적인 공간 감각이 결합된 작품으로, 거실이나 라운지, 갤러리 공간에서 하나의 예술 오브제로 활용될 수 있습니다.",
        material: "· 천연 원목 상판 및 프레임<br>· 자개 인레이 (Mother-of-Pearl)<br>· 전통 나전 공예 마감",
      },
    ],
    coll_3: [
      {
        title: "바람의 결 오브제",
        subtitle: "Flow Grain Coffee Table",
        image: "img/coll_3_img_1.png",
        short:
          "바람의 흐름과 자연의 결을 형상화한 조형 오브제로, 원목의 유기적인 형태와 자개 인레이가 조화를 이루는 아트 오브제.",
        desc: "보이지 않는 바람의 흐름을 형태로 표현한 조형 작품입니다. <br> 하나의 원목 덩어리에서 자연스럽게 갈라지고 이어지는 곡선 구조는 바람이 지나가며 남기는 흐름과 흔적을 상징적으로 담아냅니다. 표면에는 꽃과 가지를 모티프로 한 자개 인레이가 섬세하게 배치되어 어두운 목재 위에서 은은하게 빛나며 움직이는 빛의 변화에 따라 다양한 색감을 만들어냅니다. 자연스러운 목재 결, 깊이 있는 조형 구조, 그리고 안정적인 베이스는 전통 나전 공예와 현대 조형 디자인이 결합된 독창적인 오브제를 완성합니다. 단순한 장식품을 넘어 공간 속에서 자연의 흐름과 시간을 표현하는 예술적 오브제로, 갤러리나 라운지, 전시 공간에서 시각적 중심이 되는 작품입니다.",
        material: "· 천연 원목 구조<br>· 자개 인레이 (Mother-of-Pearl)<br>· 전통 나전 공예 마감<br>· 목재 조형 베이스",
      },
      {
        title: "겹의 문 수납 오브제",
        subtitle: "Layered Threshold Storage Object",
        image: "img/coll_3_img_2.png",
        short:
          "겹겹이 갈라진 형태 속에 수납 기능을 담은 조형 오브제로, 자개 인레이와 원목의 질감이 어우러진 아트 퍼니처.",
        desc: "하나의 덩어리에서 갈라져 나온 듯한 형태를 통해 ‘문을 지나 또 다른 공간으로 이어지는 경계’를 표현한 오브제입니다. 중앙의 갈라진 틈은 내부 수납 공간으로 이어지며, 기능성과 조형성을 동시에 담아낸 디자인이 특징입니다. 전면에는 꽃과 가지를 모티프로 한 자개 인레이가 섬세하게 배치되어 어두운 원목 위에서 은은하게 빛나며 전통 나전 공예의 아름다움을 보여줍니다. 자연스럽게 흐르는 목재의 결, 깊게 파인 구조, 그리고 안정적인 하부 받침은 마치 하나의 조각 작품처럼 공간에 강한 존재감을 만들어냅니다. 겹의문 수납 오브제는 단순한 보관 가구를 넘어 공간 속에서 시각적 중심이 되는 아트 오브제로, 갤러리, 라운지, 또는 전시 공간에서 독특한 분위기를 완성합니다.",
        material:
          "· 천연 원목 블록 구조<br>· 자개 인레이 (Mother-of-Pearl)<br>· 전통 나전 공예 마감<br>· 목재 조형 베이스 구조",
      },
      {
        title: "월광 자개장",
        subtitle: "Layered Threshold Storage Object",
        image: "img/coll_3_img_3.png",
        short:
          "겹겹이 갈라진 형태 속에 수납 기능을 담은 조형 오브제로, 자개 인레이와 원목의 질감이 어우러진 아트 퍼니처.",
        desc: "하나의 덩어리에서 갈라져 나온 듯한 형태를 통해 ‘문을 지나 또 다른 공간으로 이어지는 경계’를 표현한 오브제입니다. 중앙의 갈라진 틈은 내부 수납 공간으로 이어지며, 기능성과 조형성을 동시에 담아낸 디자인이 특징입니다. 전면에는 꽃과 가지를 모티프로 한 자개 인레이가 섬세하게 배치되어 어두운 원목 위에서 은은하게 빛나며 전통 나전 공예의 아름다움을 보여줍니다. 자연스럽게 흐르는 목재의 결, 깊게 파인 구조, 그리고 안정적인 하부 받침은 마치 하나의 조각 작품처럼 공간에 강한 존재감을 만들어냅니다. 겹의문 수납 오브제는 단순한 보관 가구를 넘어 공간 속에서 시각적 중심이 되는 아트 오브제로, 갤러리, 라운지, 또는 전시 공간에서 독특한 분위기를 완성합니다.",
        material:
          "· 천연 원목 블록 구조<br>· 자개 인레이 (Mother-of-Pearl)<br>· 전통 나전 공예 마감<br>· 목재 조형 베이스 구조",
      },
    ],
  };

  // [클릭 이벤트 로직]
  const itemButtons = document.querySelectorAll(".item_btn");

  itemButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const parentLi = this.closest("li");
      const itemId = parentLi.classList[0];
      const dataList = furnitureData[itemId];

      if (!dataList) return;

      let slideHTML = "";
      dataList.forEach((item) => {
        slideHTML += `
          <div class="swiper-slide">
            <div class="modal_slide">
              <div class="modal_title_wrap">
                <h2 class="slide_title">${item.title}</h2>
                <p class="modal_subtitle">${item.subtitle}</p>
              </div>
              <div class="modal_left">
                <img src="${item.image}" alt="">
              </div>
              <div class="modal_right">
                <div class="modal_box"><h3>Short Description</h3><p>${item.short}</p></div>
                <div class="modal_box"><h3>Product Description</h3><p>${item.desc}</p></div>
                <div class="modal_box"><h3>Materials</h3><p>${item.material}</p></div>
              </div>
            </div>
          </div>`;
      });

      modalWrapper.innerHTML = slideHTML;
      modal.classList.add("show");
      document.body.style.overflow = "hidden";

      if (modalSwiper) modalSwiper.destroy();
      modalSwiper = new Swiper(".modal_swiper", {
        observer: true,
        observeParents: true,
        touchStartPreventDefault: false,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    });
  });

  const closeModal = () => {
    modal.classList.remove("show");
    document.body.style.overflow = "auto";
  };

  closeBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);
});
