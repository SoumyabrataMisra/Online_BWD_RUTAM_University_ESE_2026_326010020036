document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

    const form = document.querySelector('#enquiryForm');

    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();

            if (!form.checkValidity()) {
                e.stopPropagation();
                form.classList.add('was-validated');
                return;
            }

            document.querySelector('#formAlert').innerHTML = '<div class="alert alert-success">Thank you! Your enquiry has been recorded for this demonstration website.</div>';
            form.reset();
            form.classList.remove('was-validated');
        });
    }
});

function filterPrograms() {
    const q = document.querySelector('#programSearch').value.toLowerCase();

    document.querySelectorAll('.program-item').forEach(c => c.style.display = c.innerText.toLowerCase().includes(q) ? '' : 'none');
}
