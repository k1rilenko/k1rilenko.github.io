  var link = document.querySelector(".btn-write-us");
            var popup = document.querySelector(".modal-write-us");
            var close = document.querySelector(".modal-form-close");
            var linkmap = document.querySelector(".map-image");
            var closemap = document.querySelector(".modal-map-close");
            var popupmap =document.querySelector(".modal-map");
            link.addEventListener("click", function (evt) {
            evt.preventDefault();
            popup.classList.add("modal-content-show");
            });
          
            close.addEventListener("click", function (evt) {
            evt.preventDefault();
            popup.classList.remove("modal-content-show");
            });
            
            linkmap.addEventListener("click", function (evt) {
               evt.preventDefault();
               popupmap.classList.add("modal-map-show"); 
            })
            
            closemap.addEventListener("click", function (evt) {
            evt.preventDefault();
            popupmap.classList.remove("modal-map-show");
            });