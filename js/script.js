document.addEventListener('DOMContentLoaded', () => {
    // Meminta nama pengguna menggunakan prompt()
    let userName = prompt("Selamat Datang!\nMasukkan nama Anda untuk memulai:");

    // Memastikan pengguna tidak mengosongkan nama atau membatalkan prompt
    if (userName === null || userName.trim() === "") {
        userName = "Pengguna"; // Atur nama default jika kosong atau dibatalkan
    }

    // Mencari elemen untuk menampilkan pesan sambutan
    const welcomeUserElement = document.getElementById('welcomeUser');

    // Mengubah teks sambutan dengan nama pengguna
    welcomeUserElement.textContent = `Halo, ${userName}!`;

    // Opsional: Simpan nama di localStorage jika ingin digunakan kembali
    localStorage.setItem('user_name', userName);

    // --- Kode Baru untuk Pop-up Submit ---
    // Mencari tombol submit
    const submitButton = document.getElementById('submitButton');

    // Menambahkan event listener saat tombol diklik
    submitButton.addEventListener('click', () => {
        // Menampilkan pop-up "Submit Success"
        alert("Submit Success!");
    });
});