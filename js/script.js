
// ==========================================
// AI LEARNING - SCRIPT UTAMA
// ==========================================

// NAVIGASI HALAMAN
function showPage(pageId) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.querySelectorAll(".nav-link").forEach(link => {
        link.classList.remove("active");
    });

    const selectedPage = document.getElementById(pageId);

    if (selectedPage) {
        selectedPage.classList.add("active");
    }

    const selectedLink = document.querySelector(
        `.nav-link[data-page="${pageId}"]`
    );

    if (selectedLink) {
        selectedLink.classList.add("active");
    }

    document.getElementById("navigation").classList.remove("open");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    if (pageId !== "kuis") {
        stopSpeech();
    }
}

// EVENT NAVIGASI
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        showPage(this.dataset.page);
    });
});

// MENU MOBILE
document.getElementById("menuToggle").addEventListener("click", function() {
    document.getElementById("navigation").classList.toggle("open");
});


// ==========================================
// AUDIO NARASI MENGGUNAKAN TEXT TO SPEECH
// ==========================================

function speakText(text) {
    if (!("speechSynthesis" in window)) {
        alert("Browser ini belum mendukung fitur audio narasi.");
        return;
    }

    stopSpeech();

    const utterance = new SpeechSynthesisUtterance(text);

    utterance.lang = "id-ID";
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.volume = 1;

    window.speechSynthesis.speak(utterance);
}

function stopSpeech() {
    if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
    }
}


// ==========================================
// INTERAKSI TAHAPAN CARA KERJA AI
// ==========================================

const processData = [
    {
        title: "Input Data",
        description:
            "AI menerima masukan berupa teks, gambar, suara, atau data lainnya sebagai bahan untuk diproses."
    },
    {
        title: "Pemrosesan Data",
        description:
            "Data yang diterima dianalisis menggunakan metode dan model yang telah dirancang oleh pengembang sistem."
    },
    {
        title: "Pembelajaran",
        description:
            "Pada sistem AI yang menggunakan pembelajaran mesin, model mempelajari pola dari data untuk menghasilkan prediksi atau pengenalan."
    },
    {
        title: "Output",
        description:
            "Sistem menghasilkan keluaran berdasarkan proses sebelumnya, misalnya berupa prediksi, rekomendasi, jawaban, atau hasil pengenalan."
    }
];

function selectProcess(index) {
    document.querySelectorAll(".process-card").forEach((card, i) => {
        card.classList.toggle("selected", i === index);
    });

    const detail = document.getElementById("processDetail");
    const data = processData[index];

    detail.innerHTML = `
        <span class="eyebrow">TAHAP 0${index + 1}</span>
        <h2>${data.title}</h2>
        <p>${data.description}</p>
    `;
}


// ==========================================
// DATA KUIS - 10 SOAL
// ==========================================

const questions = [
    {
        question: "Apa kepanjangan dari AI?",
        answers: [
            "Automatic Information",
            "Artificial Intelligence",
            "Advanced Internet",
            "Application Interface"
        ],
        correct: 1,
        explanation:
            "Benar! AI merupakan singkatan dari Artificial Intelligence atau kecerdasan buatan."
    },
    {
        question: "Apa tujuan utama pengembangan Artificial Intelligence?",
        answers: [
            "Menggantikan seluruh perangkat komputer",
            "Membuat internet menjadi lebih cepat",
            "Mengembangkan sistem yang mampu melakukan tugas yang membutuhkan kecerdasan",
            "Menghapus kebutuhan terhadap data"
        ],
        correct: 2,
        explanation:
            "AI dikembangkan agar sistem komputer dapat melakukan tugas yang biasanya membutuhkan kemampuan kecerdasan manusia."
    },
    {
        question: "Siapa tokoh yang memperkenalkan gagasan pengujian kemampuan mesin untuk menunjukkan perilaku cerdas?",
        answers: [
            "Alan Turing",
            "Bill Gates",
            "Steve Jobs",
            "Mark Zuckerberg"
        ],
        correct: 0,
        explanation:
            "Alan Turing memperkenalkan gagasan pengujian kemampuan mesin yang dikenal sebagai Turing Test."
    },
    {
        question: "Manakah contoh penerapan AI dalam bidang pendidikan?",
        answers: [
            "Kalkulator biasa",
            "Papan tulis",
            "Meja belajar",
            "Sistem pembelajaran adaptif"
        ],
        correct: 3,
        explanation:
            "Sistem pembelajaran adaptif menggunakan AI untuk membantu menyesuaikan materi dengan kebutuhan belajar pengguna."
    },
    {
        question: "Apa yang dimaksud dengan input dalam proses kerja AI?",
        answers: [
            "Hasil akhir yang diberikan sistem",
            "Data atau informasi yang dimasukkan ke sistem",
            "Tampilan halaman website",
            "Proses mencetak dokumen"
        ],
        correct: 1,
        explanation:
            "Input merupakan data awal yang diterima sistem AI untuk diproses."
    },
    {
        question: "Tahap apa yang dilakukan ketika AI menganalisis data yang diterima?",
        answers: [
            "Output",
            "Publikasi",
            "Pemrosesan",
            "Penyimpanan manual"
        ],
        correct: 2,
        explanation:
            "Pemrosesan merupakan tahap ketika sistem menganalisis data menggunakan metode atau model tertentu."
    },
    {
        question: "Berikut ini yang merupakan contoh penerapan AI dalam transportasi adalah...",
        answers: [
            "Rekomendasi rute berdasarkan kondisi lalu lintas",
            "Kursi penumpang biasa",
            "Papan nama jalan",
            "Lampu kendaraan manual"
        ],
        correct: 0,
        explanation:
            "AI dapat membantu memperkirakan kondisi lalu lintas dan memberikan rekomendasi rute perjalanan."
    },
    {
        question: "Salah satu manfaat penggunaan AI adalah...",
        answers: [
            "Menghilangkan seluruh risiko pekerjaan",
            "Menjamin semua informasi selalu benar",
            "Menghapus kebutuhan pengawasan manusia",
            "Membantu meningkatkan efisiensi pekerjaan"
        ],
        correct: 3,
        explanation:
            "AI dapat membantu meningkatkan efisiensi melalui pengolahan informasi dan otomatisasi tugas."
    },
    {
        question: "Apa salah satu tantangan dalam penggunaan AI?",
        answers: [
            "Warna tampilan perangkat",
            "Privasi data dan bias algoritma",
            "Ukuran meja komputer",
            "Jenis kabel jaringan"
        ],
        correct: 1,
        explanation:
            "Privasi data dan bias algoritma merupakan tantangan penting yang harus diperhatikan dalam penggunaan AI."
    },
    {
        question: "Bagaimana cara menggunakan AI secara bertanggung jawab?",
        answers: [
            "Mempercayai semua jawaban AI tanpa pemeriksaan",
            "Memasukkan semua data pribadi ke AI",
            "Memeriksa informasi dan menjaga privasi data",
            "Menggunakan AI untuk semua keputusan tanpa pertimbangan"
        ],
        correct: 2,
        explanation:
            "Pengguna perlu memeriksa informasi yang dihasilkan AI, menjaga data pribadi, dan memahami keterbatasan teknologi."
    }
];


// ==========================================
// LOGIKA KUIS
// ==========================================

let currentQuestion = 0;
let score = 0;
let selectedAnswer = false;

const questionText = document.getElementById("questionText");
const answerList = document.getElementById("answerList");
const questionCounter = document.getElementById("questionCounter");
const progressBar = document.getElementById("progressBar");
const feedback = document.getElementById("feedback");
const nextButton = document.getElementById("nextQuestion");
const answeredText = document.getElementById("answeredText");

function loadQuestion() {
    selectedAnswer = false;

    const question = questions[currentQuestion];

    questionCounter.textContent =
        `Soal ${currentQuestion + 1} dari ${questions.length}`;

    questionText.textContent = question.question;

    progressBar.style.width =
        `${((currentQuestion + 1) / questions.length) * 100}%`;

    answerList.innerHTML = "";
    feedback.textContent = "";
    feedback.className = "feedback";

    answeredText.textContent = "Pilih satu jawaban yang benar.";

    nextButton.disabled = true;

    question.answers.forEach((answer, index) => {
        const button = document.createElement("button");

        button.className = "answer-option";
        button.textContent =
            `${String.fromCharCode(65 + index)}. ${answer}`;

        button.addEventListener("click", () => {
            checkAnswer(index, button);
        });

        answerList.appendChild(button);
    });

    nextButton.textContent =
        currentQuestion === questions.length - 1
            ? "Lihat Hasil →"
            : "Selanjutnya →";
}

function checkAnswer(selectedIndex, selectedButton) {
    if (selectedAnswer) return;

    selectedAnswer = true;

    const question = questions[currentQuestion];
    const buttons = answerList.querySelectorAll(".answer-option");

    buttons.forEach(button => {
        button.disabled = true;
    });

    const isCorrect = selectedIndex === question.correct;

    if (isCorrect) {
        score += 10;

        selectedButton.classList.add("correct");

        feedback.textContent =
            "✓ Jawaban benar! " + question.explanation;

        feedback.classList.add("good");
    } else {
        selectedButton.classList.add("wrong");

        buttons[question.correct].classList.add("correct");

        feedback.textContent =
            "✕ Jawaban belum tepat. " + question.explanation;

        feedback.classList.add("bad");
    }

    answeredText.textContent =
        isCorrect ? "Jawaban kamu benar." : "Pelajari kembali penjelasannya.";

    nextButton.disabled = false;
}

nextButton.addEventListener("click", function() {
    if (!selectedAnswer) return;

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        showResult();
    }
});


// ==========================================
// HASIL KUIS
// ==========================================

function showResult() {
    document.getElementById("quizCard").classList.add("hidden");
    document.getElementById("resultCard").classList.remove("hidden");

    document.getElementById("finalScore").textContent = score;

    let message = "";

    if (score >= 90) {
        message = "Luar biasa! Kamu memiliki pemahaman yang sangat baik mengenai Artificial Intelligence.";
    } else if (score >= 70) {
        message = "Bagus! Kamu sudah memahami sebagian besar materi pengenalan AI.";
    } else if (score >= 50) {
        message = "Cukup baik! Pelajari kembali beberapa materi agar pemahamanmu semakin meningkat.";
    } else {
        message = "Jangan menyerah! Pelajari kembali materi dan coba kerjakan kuis sekali lagi.";
    }

    document.getElementById("resultMessage").textContent = message;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    selectedAnswer = false;

    document.getElementById("quizCard").classList.remove("hidden");
    document.getElementById("resultCard").classList.add("hidden");

    loadQuestion();
}


// ==========================================
// INISIALISASI WEBSITE
// ==========================================

loadQuestion();

console.log("AI Learning berhasil dimuat.");
