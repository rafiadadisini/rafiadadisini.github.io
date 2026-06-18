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
		// Memasukkan hasil pemanggilan fungsi card dan modalcard ke DOM
		$("#project-card").append(card());
		$("#project-card").append(modalcard());

		// Fungsi untuk menghasilkan elemen card project
		function card() {
			return `<!-- Card x -->
            <div
              data-modal-toggle="modal-card-${i}"
              data-modal-target="modal-card-${i}"
              class="m-3 bg-white rounded-lg shadow-lg cursor-pointer max-w-56 lg:max-w-80 group"
            >
              <img
                class="object-cover w-full rounded-t-lg aspect-video group-hover:scale-110 group-hover:shadow-xl"
                src="${data.img_cover}"
                alt="${data.judul}"
              />

              <h2 class="mt-3 text-xl font-semibold text-center text-rafcolor mx-5">
                ${data.judul}
              </h2>
              <p
                class="bg-rafcolor  text-xs text-medium text-center text-white rounded-full p-1 mx-12 mb-5 mt-2"
              >
                ${data.kategori}
              </p>
            </div>
            <!-- Akhir Card x -->`;
		}

		// Fungsi untuk menghasilkan elemen modal detail proyek secara dinamis
		function modalcard() {
			// Menyusun elemen gambar tambahan secara dinamis guna menghindari broken image
			let extraImagesHTML = "";

			// Render Gambar Utama (img_1) sebagai elemen lebar penuh jika tersedia
			if (data.img_1 && data.img_1.trim() !== "") {
				extraImagesHTML += `
          <div class="col-span-full">
            <img class="object-cover w-full rounded-sm" src="${data.img_1}" />
          </div>
        `;
			}

			// Render Gambar Pendukung (img_2 sampai img_10) secara dinamis menggunakan perulangan jika datanya tersedia
			for (let num = 2; num <= 10; num++) {
				let imageKey = `img_${num}`;
				if (data[imageKey] && data[imageKey].trim() !== "") {
					extraImagesHTML += `
            <div class="w-full">
              <img class="object-cover w-full rounded-sm" src="${data[imageKey]}" />
            </div>
          `;
				}
			}

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

                  <!-- Grid Gambar yang Hanya Dirender Jika Eksis -->
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 p-3 mx-auto">
                    ${extraImagesHTML}
                  </div>
                </div>
              </div>
            </div>
            <!-- akhir modal card x -->`;
		}
	});

	// Re-inisialisasi interaktivitas Flowbite modal setelah seluruh elemen selesai ditambahkan ke DOM
	if (typeof initFlowbite === "function") {
		initFlowbite();
	}
});
