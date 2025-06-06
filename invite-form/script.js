const fileInput = document.getElementById('file-input');
const fileButton = document.getElementById('file-button');
const fileName = document.querySelector('.file-name');

const toggle = document.getElementById('toggle');
const toggleLabel = document.getElementById('toggle-label');

toggle.addEventListener('change', () => {
  if (toggle.checked) {
    toggleLabel.textContent = 'Claro';
  } else {
    toggleLabel.textContent = 'Escuro';
  }
});

fileButton.addEventListener('click', () => {
  fileInput.click();
});

fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];
  if (file) {
    fileName.textContent = file.name;
    fileName.style.color = 'var(--text-body)';
  } else {
    fileName.textContent = 'Nenhum arquivo selecionado';
  }
});