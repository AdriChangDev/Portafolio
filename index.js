$(document).ready(function() {
    const filterContainer = $(".gallery__categories");
    const galleryItems = $(".project__card");

    filterContainer.on("click", ".filter-item", function() {
      const $target = $(this);
      if (!$target.hasClass("active")) {
        filterContainer.find(".active").removeClass("active");
        $target.addClass("active");
        const filterValue = $target.data("filter");
        galleryItems.each(function() {
          const $item = $(this);
          if ($item.hasClass(filterValue) || filterValue === "all") {
            $item.removeClass("hide").addClass("show");
          } else {
            $item.removeClass("show").addClass("hide");
          }
        });
      }
    });

    function scrollToSection(sectionId) {
      $("#" + sectionId)[0].scrollIntoView({ behavior: "smooth" });
    }
});