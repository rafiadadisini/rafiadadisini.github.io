$(document).ready(function () {
  //hamburger
  const hamburger = document.querySelector("#hamburger");
  const menuMobile = document.querySelector(".menu-mobile");

  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("hamburger-active");
    menuMobile.classList.toggle("hidden");
  });

  //panggil json project
  $.getJSON("data/data.json", function (data) {
    let project = data.data_project;

    $.each(project, function (i, data) {
      $("#project-card").append(card);
      $("#project-card").append(modalcard);

      function card() {
        return `<!-- Card x -->
            <div
              data-modal-toggle="modal-card-${i}"
              data-modal-target="modal-card-${i}"
              class="m-3 bg-white rounded-lg shadow-lg cursor-pointer max-w-56 lg:max-w-80"
            >
              <img
                class="object-cover w-full rounded-t-lg aspect-video"
                src="${data.img_cover}"
                alt="${data.judul}"
              />

              <h2 class="mt-3 text-xl font-semibold text-center text-rafcolor">
                ${data.judul}
              </h2>
              <p
                class="px-5 pt-5 pb-2 text-xs font-light text-right text-slate-700"
              >
                ${data.kategori}
              </p>
            </div>
            <!-- Akhir Card x -->`;
      }

      function modalcard() {
        return `<!-- modal card x -->
            <div
              id="modal-card-${i}"
              tabindex="-1"
              aria-hidden="true"
              class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
              <div class="relative w-full md:w-8/12 max-h-full p-4">
                <div class="relative p-4 bg-white rounded-lg shadow-xl">
                  <div class="text-right">
                    <button
                      type="button"
                      class="inline-flex items-center justify-center w-8 h-8 text-sm text-gray-400 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 ms-auto"
                      data-modal-hide="modal-card-${i}"
                    >
                      <i class="fa-solid fa-x"></i>
                    </button>
                  </div>

                  <div class="mx-auto text-center">
                    <h2
                      class="mt-3 text-xl font-semibold text-center uppercase text-rafcolor"
                    >
                      ${data.judul}
                    </h2>
                    <p>${data.deskripsi}</p>
                    <hr />
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 p-3 mx-auto">
                  


                    <div class="col-span-full">
                      <img
                        class="object-cover w-full rounded-sm"
                        src="${data.img_1}"
                      />
                    </div>
                  
                    <div class="w-full">
                      <img
                        class="object-cover w-full rounded-sm"
                        src="${data.img_3}"
                      />
                    </div>
                  
                    <div class="w-full">
                      <img
                        class="object-cover w-full rounded-sm"
                        src="${data.img_2}"
                      />
                    </div>
                  
                    <div class="w-full">
                      <img
                        class="object-cover w-full rounded-sm"
                        src="${data.img_4}"
                      />
                    </div>
                  
                    <div class="w-full">
                      <img
                        class="object-cover w-full rounded-sm"
                        src="${data.img_5}"
                      />
                    </div>
                  
                    <div class="w-full">
                      <img
                        class="object-cover w-full rounded-sm"
                        src="${data.img_6}"
                      />
                    </div>
                  
                    <div class="w-full">
                      <img
                        class="object-cover w-full rounded-sm"
                        src="${data.img_7}"
                      />
                    </div>
                  
                    <div class="w-full">
                      <img
                        class="object-cover w-full rounded-sm"
                        src="${data.img_8}"
                      />
                    </div>
                  
                    <div class="w-full">
                      <img
                        class="object-cover w-full rounded-sm"
                        src="${data.img_9}"
                      />
                    </div>
                  
                    <div class="w-full">
                      <img
                        class="object-cover w-full rounded-sm"
                        src="${data.img_10}"
                      />
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            <!-- akhir modal card x -->`;
      }
    });
  });
});
