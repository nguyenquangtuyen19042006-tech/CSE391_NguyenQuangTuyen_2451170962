const gallery = document.getElementById("gallery");
const loading = document.getElementById("loading");

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementById("close");

let page = 1;
let isLoading = false;

// Lazy Loading Observer
const lazyObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const img = entry.target;

            img.src = img.dataset.src;

            lazyObserver.unobserve(img);
        }
    });

});

// Load ảnh
async function loadMorePhotos() {

    if (isLoading) return;

    isLoading = true;

    loading.style.display = "block";

    try {

        // Delay 2 giây để dễ chụp Loading State
        await new Promise(resolve =>
            setTimeout(resolve, 2000)
        );

        const response = await fetch(
            `https://picsum.photos/v2/list?page=${page}&limit=20`
        );

        if (!response.ok) {
            throw new Error("Không tải được ảnh");
        }

        const photos = await response.json();

        photos.forEach(photo => {

            const img =
                document.createElement("img");

            img.dataset.src =
                photo.download_url;

            gallery.appendChild(img);

            lazyObserver.observe(img);

            img.addEventListener("click", () => {

                modal.style.display = "flex";

                modalImg.src =
                    photo.download_url;
            });
        });

        page++;

    } catch (error) {

        alert(error.message);

    } finally {

        isLoading = false;

        loading.style.display = "none";
    }
}

// Infinite Scroll Observer
const observer =
new IntersectionObserver(entries => {

    if (entries[0].isIntersecting) {

        loadMorePhotos();
    }

});

observer.observe(
    document.getElementById("load-trigger")
);

// Đóng modal
closeBtn.addEventListener("click", () => {

    modal.style.display = "none";
});

modal.addEventListener("click", () => {

    modal.style.display = "none";
});

// Load lần đầu
loadMorePhotos();