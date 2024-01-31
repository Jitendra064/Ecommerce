const filterContainer = document.querySelector(".gallery-filter"),
gallleryItem = document.querySelectorAll(".gallery-item");

filterContainer.addEventListener("click" , (event)=>{
    if(event.target.classList.contains("filter-item")){
      filterContainer.querySelector(".active").classList.remove("active");
      event.target.classList.add("active")
      const filtervalue = event.target.getAttribute("data-filter")
     gallleryItem.forEach((item)=>{
          if (item.classList.contains(filtervalue) || filtervalue == "all") {
            item.classList.remove("hide")
            item.classList.add("show")
          } else {
            item.classList.remove("show");
            item.classList.add("hide");
          }
     })
    }
})
