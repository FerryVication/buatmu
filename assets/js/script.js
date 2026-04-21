/* ============================================
   Pesan Buatmu — main.js
   by Feri Pratama
   ============================================ */


let ftom = 0;
let audio, bgm;
let pesanwhatsapp = "";
let pesanFeri = "";
let katangetik = "";
let katangetik2 = "";
let aa = 0;
let ai = 0;
let msgData = null;

const swals = Swal.mixin({
    allowOutsideClick: false,
    cancelButtonColor: "#FF0040",
    imageWidth: 100,
    imageHeight: 100
});

const swalst = Swal.mixin({
    allowOutsideClick: false,
    showConfirmButton: false,
    timer: 2500,
    timerProgressBar: true,
    imageWidth: 120,
    imageHeight: 120
});

function saljuMolaih() {
    const canvas = document.getElementById("snow-canvas");
    canvas.classList.add("active");

    const ctx = canvas.getContext("2d");
    let W = canvas.width  = window.innerWidth;
    let H = canvas.height = window.innerHeight;

    const SNOWFLAKE_COUNT = 120;
    const flakes = [];

    for (let i = 0; i < SNOWFLAKE_COUNT; i++) {
        flakes.push({
            x:      Math.random() * W,
            y:      Math.random() * H,
            r:      Math.random() * 4 + 1,         // radius 1–5
            speed:  Math.random() * 1.5 + 0.5,     // fall speed
            drift:  (Math.random() - 0.5) * 0.6,   // horizontal drift
            opacity: Math.random() * 0.6 + 0.3,
            angle:  Math.random() * Math.PI * 2,
            spin:   (Math.random() - 0.5) * 0.05
        });
    }

    window.addEventListener("resize", () => {
        W = canvas.width  = window.innerWidth;
        H = canvas.height = window.innerHeight;
    });

    function drawFlake(f) {
        ctx.save();
        ctx.translate(f.x, f.y);
        ctx.rotate(f.angle);
        ctx.globalAlpha = f.opacity;

        // warna saju kan putih, iyakan?
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = f.r * 0.4;
        ctx.lineCap  = "round";

        for (let arm = 0; arm < 6; arm++) {
            ctx.save();
            ctx.rotate((arm * Math.PI) / 3);
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(0, -f.r * 3);
            // cabang salju nya
            ctx.moveTo(0, -f.r * 1.5);
            ctx.lineTo(f.r * 0.8, -f.r * 2.3);
            ctx.moveTo(0, -f.r * 1.5);
            ctx.lineTo(-f.r * 0.8, -f.r * 2.3);
            ctx.stroke();
            ctx.restore();
        }

        // Center dot
        ctx.beginPath();
        ctx.arc(0, 0, f.r * 0.4, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();

        ctx.restore();
    }

    function animate() {
        ctx.clearRect(0, 0, W, H);

        for (const f of flakes) {
            drawFlake(f);

            f.y     += f.speed;
            f.x     += f.drift;
            f.angle += f.spin;

            if (f.y > H + 20) {
                f.y = -10;
                f.x = Math.random() * W;
            }
            if (f.x > W + 20) f.x = -10;
            if (f.x < -20)    f.x = W + 10;
        }

        requestAnimationFrame(animate);
    }

    animate();
}

function showDiv() {
    Content.style.cssText = "opacity:1;margin-top:15vh;";
    ket.style.cssText      = "margin-top:30px";
}

function memulai() {
    suratin.style.cssText = "transition:all 1s ease;transform:scale(.1);opacity:0";
    ket.style.cssText     = "transition:all 1s ease;transform:scale(.1);opacity:0";

    saljuMolaih();

    setTimeout(pesan, 300);
}

function kpemb() {
    suratin.style.cssText    = "display:none";
    ket.style.cssText        = "display:none";
    fotoakhir.style.cssText  = "display:inline-flex;transform:scale(1);";
    Content.style.cssText    = "opacity:1;margin-top:2vh;";
    bq.style.cssText         = "opacity:1;visibility:visible;margin-top:5px";
    setTimeout(ngetik, 500);
}

function tombol() {
    ftom = 1;
    const tombolEl = document.getElementById("Tombol");
    tombolEl.innerHTML = `
        <button id="btn-iya"  onclick="pesane()">love you more ♥️</button>
        <button id="btn-ngga" onmouseenter="lari()" ontouchstart="lari()">ngga ah 🙈</button>
    `;
    tombolEl.style.cssText = "margin-top:15px;opacity:1;transform:scale(1);";
}

function lari() {
    const btn    = document.getElementById("btn-ngga");
    const btnIya = document.getElementById("btn-iya");
    if (!btn) return;

    if (btnIya) {
        btnIya.style.pointerEvents = "none";
        setTimeout(() => { btnIya.style.pointerEvents = "auto"; }, 600);
    }

    btn.style.position = "fixed";

    const arah   = ["atas", "bawah", "kiri", "kanan", "segitiga", "kotak"]; // awokawok kode cit gta
    const pilih  = arah[Math.floor(Math.random() * arah.length)];
    const geser  = 100;
    const margin = 16;

    const viewW = window.innerWidth;
    const viewH = document.documentElement.clientHeight;
    const btnW  = btn.offsetWidth  || 130;
    const btnH  = btn.offsetHeight || 44;

    let x = btn.offsetLeft;
    let y = btn.offsetTop;

    if (pilih === "atas")   y -= geser;
    if (pilih === "bawah")  y += geser;
    if (pilih === "kiri")   x -= geser;
    if (pilih === "kanan")  x += geser;

    // Clamp dalam layar
    x = Math.max(margin, Math.min(x, viewW - btnW - margin));
    y = Math.max(margin, Math.min(y, viewH - btnH - margin));

    btn.style.left = x + "px";
    btn.style.top  = y + "px";
}

function fakhiran() {
    document.getElementById("akhiran").style.display = "inline-flex";
}


function ngetik() {
    if (aa < katangetik.length) {
        kalimat.innerHTML += katangetik.charAt(aa);
        aa++;
        setTimeout(ngetik, 80);
    }
    if (aa === katangetik.length) {
        kalimatc.style.cssText = "margin-top:30px;margin-bottom:10px";
        setTimeout(ngetik2, 500);
    }
}

function ngetik2() {
    if (ai < katangetik2.length) {
        kalimatc.innerHTML += katangetik2.charAt(ai);
        ai++;
        setTimeout(ngetik2, 150);
    }
    if (ai === katangetik2.length) {
        setTimeout(tombol, 300);
    }
}

function setel()  { audio.play(); }
function setel2() { bgm.play(); }

function sjawab() {
    if (ftom === 1) {
        Tombol.style.display = "none";
        pesane();
    }
}


async function pesane() {
    await swals.fire({
        title:    msgData.swal_confirm.title,
        imageUrl: msgData.swal_confirm.imageUrl
    });
    window.location = `https://wa.me/${msgData.whatsapp.number}?text=${msgData.whatsapp.pesanwhatsapp}`;
}

async function pesan() {
    audio.play();

    // edit pesan nya di message.json
    for (const popup of msgData.popups) {
        await swalst.fire({
            title:    popup.title,
            imageUrl: popup.imageUrl
        });
    }

    // sama
    katangetik  = msgData.typing.line1;
    katangetik2 = msgData.typing.line2;
    pesanwhatsapp = msgData.whatsapp.pesanwhatsapp;
    pesanFeri     = msgData.whatsapp.pesanFeri;

    setTimeout(kpemb, 300);
}


async function ngawiti() {
    // Load messages from JSON
    try {
        const res = await fetch("/assets/message/message.json");
        msgData   = await res.json();
    } catch (e) {
        console.error("Gagal load message.json:", e);
    }

    audio = new Audio("/assets/audio/mamah.mp3");
    setTimeout(showDiv, 100);
}

ngawiti();
