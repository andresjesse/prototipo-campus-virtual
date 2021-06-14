const modals = [
  "modal-content-main",
  "modal-content-blocoB",
  "modal-content-blocoD",
];

const showModal = (modalId) => {
  modals.forEach((m) => {
    $("#" + m).hide();
  });

  $("#" + modalId).show();

  $(".modal-container").addClass("active");
  $("#modal").addClass("active");
};

const hideModal = () => {
  $(".modal-container").removeClass("active");
  $("#modal").removeClass("active");
};

//--------------------------------------- Overlays

$("#overlay-blocoB")
  .mouseenter(() => {
    $("#pin-blocoB").addClass("pin-active");
  })
  .mouseleave(function () {
    $("#pin-blocoB").removeClass("pin-active");
  });

$("#overlay-blocoB").click(() => {
  showModal("modal-content-blocoB");
});

$("#overlay-blocoD")
  .mouseenter(() => {
    $("#pin-blocoD").addClass("pin-active");
  })
  .mouseleave(function () {
    $("#pin-blocoD").removeClass("pin-active");
  });

$("#overlay-blocoD").click(() => {
  showModal("modal-content-blocoD");
});

//--------------------------------------- Modals/Menu

$("#topmenu-options").click(() => {
  showModal("modal-content-main");
});

$("#modal-close").click(() => {
  hideModal();
});
