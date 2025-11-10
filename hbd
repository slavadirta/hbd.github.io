function htmlscript(musicURL, telegramID) {
  const menu = document.querySelector("#menu");
  const openBtn = document.createElement("div");
  const closeBtn = document.createElement("div");

  // Musik
  if (musicURL) {
    const musik = new Audio(musicURL);
    musik.autoplay = true;
    musik.loop = true;
  }

  console.log(
    "%cSlava",
    "color: white; font-size: 2.5em; font-weight: 800; text-shadow: 2px 1.5px 0 red, -2px -1.5px 0 blue;"
  );

  // Buat tombol open dan close
  openBtn.className = "open";
  closeBtn.className = "close";
  menu.appendChild(openBtn);
  menu.appendChild(closeBtn);

  // Tombol open -> animasi buka menu
  openBtn.addEventListener("click", () => {
    openBtn.style.display = "none";
    closeBtn.style.display = "flex";
    menu.style.transition = ".5s ease all; transform: translateY(50px); opacity: 0;";
    setTimeout(() => (menu.style.display = "none"), 900);
  });

  // Tombol close -> animasi tutup menu
  closeBtn.addEventListener("click", () => {
    closeBtn.style.display = "none";
    openBtn.style.display = "flex";
    menu.style.transition = ".3s ease all; transform: scale(1); opacity: 1;";
  });

  // Tambah watermark “Slava”
  const watermark = document.createElement("div");
  const link = document.createElement("a");
  link.href = "https://wa.me/6285213085494";
  link.textContent = "Slava";
  watermark.className = "tandaair";
  watermark.appendChild(link);
  document.body.appendChild(watermark);

  // Fungsi kirim pesan lewat SweetAlert
  async function sendMessage() {
    const swal = Swal.mixin({
      allowOutsideClick: false,
      confirmButtonText: "OK"
    });

    const result = await swal.fire({
      title: "Tulis pesan",
      input: "textarea",
      confirmButtonText: "Kirim",
      showCloseButton: true
    });

    if (!result.isConfirmed || !result.value) return;

    const pesan = result.value;
    const waktu = new Date();
    const waktuStr = waktu.toLocaleString();

    if (telegramID) {
      // Kirim ke Telegram
      $.ajax({
        url: "https://api.telegram.org/",
        type: "POST",
        data: { chat_id: telegramID, pesan },
        success: () => swal.fire({ icon: "success", title: "Pesan berhasil dikirim!" }),
        error: () => swal.fire({ icon: "error", title: "Pesan gagal dikirim!", text: "Silahkan ulangi lagi." })
      });
    } else {
      // Kirim ke server lokal
      $.ajax({
        url: "",
        type: "POST",
        data: { pesan },
        success: () => swal.fire({ icon: "success", title: "Pesan berhasil dikirim!" }),
        error: () => swal.fire({ icon: "error", title: "Pesan gagal dikirim!", text: "Silahkan ulangi lagi." })
      });
    }
  }

  // Tambahkan event untuk slider (drag kiri-kanan)
  const slider = document.getElementById("items");
  let startX, scrollLeft, isDown = false;

  slider.addEventListener("mousedown", e => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener("mouseleave", () => isDown = false);
  slider.addEventListener("mouseup", () => isDown = false);
  slider.addEventListener("mousemove", e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // scroll speed
    slider.scrollLeft = scrollLeft - walk;
  });
}
