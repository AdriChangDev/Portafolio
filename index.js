document.addEventListener("DOMContentLoaded", function() {

    const filterContainer = document.querySelector(".gallery__categories");
    const galleryItems = document.querySelectorAll(".project__card");

    filterContainer.addEventListener("click", function(event) {
        const target = event.target;
        if (target.classList.contains("filter-item") && !target.classList.contains("active")) {
            const activeFilter = filterContainer.querySelector(".active");
            if (activeFilter) {
                activeFilter.classList.remove("active");
            }
            target.classList.add("active");

            const filterValue = target.getAttribute("data-filter");
            galleryItems.forEach(function(item) {
                if (item.classList.contains(filterValue) || filterValue === "all") {
                    item.classList.remove("hide");
                    item.classList.add("show");
                } else {
                    item.classList.remove("show");
                    item.classList.add("hide");
                }
            });
        }
    });

    
});
function scrollToSection(sectionId) {
        document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    }