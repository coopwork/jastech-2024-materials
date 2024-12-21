
const fileInput = document.querySelector('#fileDropZoneInput');
const fileUploadArea = document.querySelector('#fileDropZone');
const fileUploadLabelName = document.querySelector('#fileDropZoneFileName');

let file = null;

fileInput.addEventListener('input', (e) => {
  file = e.target.files[0];
  fileUploadLabelName.textContent = file.name
  console.log(file);

})

createDragDrop({
  dropZone: fileUploadArea,
  fileInput: fileInput,
  fileName: fileUploadLabelName,
})

function createDragDrop({
  dropZone,
  fileInput,
  fileName,
}) {

  if (dropZone && fileInput && fileName) {

    ['dragover', 'dragenter'].forEach(eventName => {
      dropZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropZone.classList.add('drop-hover')
      }, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
      dropZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropZone.classList.remove('drop-hover')
      }, false);
    });

    dropZone.addEventListener('drop', (e) => {
      const files = e.dataTransfer.files;
      fileChecker(files)
      if (files.length > 0) {
        fileInput.files = files;
        dropZone.classList.add('droped')
      } else {
        dropZone.classList.remove('droped')
      }
    }, false);

    dropZone.addEventListener('click', () => {
      fileInput.click()
    })

    fileInput.addEventListener('input', (e) => {
      const files = e.target.files;
      fileChecker(files)
    });

    function fileChecker(files) {
      if (files.length > 0) {
        dropZone.classList.add('droped')
      } else {
        dropZone.classList.remove('droped')
      }
      fileName.textContent = files[0]?.name || 'Ошибка! Файл отсутствует!'
    }
  } else {
    throw new Error(`Ошибка! Неверно указаны селекторы`)
  }
}