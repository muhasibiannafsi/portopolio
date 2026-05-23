document.addEventListener('DOMContentLoaded', () => {
    const btnTentangku = document.getElementById('btn-tentangku');
    const sectionTentangku = document.getElementById('tentangku-section');

    // Fungsi klik "Tentangku" untuk memunculkan 3 kartu
    btnTentangku.addEventListener('click', (e) => {
        e.preventDefault(); // Mencegah link pindah halaman
        
        if (sectionTentangku.classList.contains('hidden')) {
            sectionTentangku.classList.remove('hidden');
            sectionTentangku.scrollIntoView({ behavior: 'smooth' });
        } else {
            sectionTentangku.classList.add('hidden');
        }
    });

    const btnalamat = document.getElementById('btn-alamat');
    const sectionAlamat = document.getElementById('alamat-section');

    btnalamat.addEventListener('click', (e) => {
        e.preventDefault(); // Mencegah link pindah halaman
        
        if (sectionAlamat.classList.contains('hidden')) {
            sectionAlamat.classList.remove('hidden');
            sectionAlamat.scrollIntoView({ behavior: 'smooth' });
        } else {
            sectionAlamat.classList.add('hidden');
        }
    });
});