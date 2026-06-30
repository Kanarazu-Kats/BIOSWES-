/* ===========================
   BIOSWES SCRIPT
=========================== */

/* SEARCH FILM */

const search = document.getElementById("search");

if (search) {

    search.addEventListener("keyup", function () {

        const keyword = search.value.toLowerCase();

        const cards = document.querySelectorAll(".movie-card");

        cards.forEach(card => {

            const title = card.querySelector("h3").innerText.toLowerCase();

            if (title.includes(keyword)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}


/* ===========================
   FAVORITE
=========================== */

const cards = document.querySelectorAll(".movie-card");

cards.forEach(card => {

    const title = card.querySelector("h3").innerText;

    const fav = document.createElement("span");

    fav.innerHTML = "🤍";

    fav.className = "favorite";

    card.appendChild(fav);

    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (favorites.includes(title)) {

        fav.innerHTML = "❤️";

    }

    fav.onclick = function () {

        let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

        if (favorites.includes(title)) {

            favorites = favorites.filter(item => item !== title);

            fav.innerHTML = "🤍";

        } else {

            favorites.push(title);

            fav.innerHTML = "❤️";

        }

        localStorage.setItem("favorites", JSON.stringify(favorites));

    }

});


/* ===========================
   KIRIM DATA FILM
=========================== */

function pilihFilm(judul, gambar, genre, durasi, rating, sinopsis) {

    const film = {

        judul: judul,
        gambar: gambar,
        genre: genre,
        durasi: durasi,
        rating: rating,
        sinopsis: sinopsis

    };

    localStorage.setItem("film", JSON.stringify(film));

}


/* ===========================
   DETAIL FILM
=========================== */

document.addEventListener("DOMContentLoaded", function () {

    const poster = document.getElementById("poster");

    if (!poster) return;

    const film = JSON.parse(localStorage.getItem("film"));

    if (!film) {

        document.querySelector(".detail").innerHTML = `
            <h2>Film tidak ditemukan.</h2>
            <br>
            <a href="../index.html">
                <button>Kembali</button>
            </a>
        `;

        return;

    }

    poster.src = "../" + film.gambar;

    document.getElementById("judul").innerHTML = film.judul;

    document.getElementById("genre").innerHTML =
        "<b>Genre :</b> " + film.genre;

    document.getElementById("durasi").innerHTML =
        "<b>Durasi :</b> " + film.durasi;

    document.getElementById("rating").innerHTML =
        "<b>Rating :</b> ⭐ " + film.rating;

    document.getElementById("sinopsis").innerHTML =
        film.sinopsis;

});


/* ===========================
   ANIMASI
=========================== */

window.onload = function () {

    document.body.style.opacity = "1";

};

function kembaliHome(){

alert("🎉 Terima kasih telah memesan tiket di BIOSWES.\nSelamat Menonton!");

localStorage.removeItem("film");
localStorage.removeItem("jadwal");
localStorage.removeItem("kursi");
localStorage.removeItem("metode");
localStorage.removeItem("total");

window.location="../index.html";

}