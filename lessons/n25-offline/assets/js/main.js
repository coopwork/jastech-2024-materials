
const fileInput = document.querySelector('#fileDropZoneInput');
const fileUploadArea = document.querySelector('#fileDropZone');
const fileUploadLabelName = document.querySelector('#fileDropZoneFileName');
const imagePreview = document.querySelector('.preview');


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

    dropZone.addEventListener('drop', async (e) => {
      const files = e.dataTransfer.files;
      const prevImage = await convertFileToBlobURL(files[0])

      fileChecker(files)
      if (files.length > 0) {
        fileInput.files = files;
        dropZone.classList.add('droped')
        imagePreview.setAttribute('src', prevImage)
      } else {
        dropZone.classList.remove('droped')
      }
    }, false);

    dropZone.addEventListener('click', () => {
      fileInput.click()
    })

    fileInput.addEventListener('input', async (e) => {
      const files = e.target.files;
      const prevImage = await convertFileToBlobURL(files[0])
      fileChecker(files)
      imagePreview.setAttribute('src', prevImage)
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

function convertFileToBlobURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onloadend = function () {
      const blob = new Blob([reader.result], { type: file.type });
      const blobURL = URL.createObjectURL(blob);
      resolve(blobURL);
    };

    reader.onerror = function () {
      reject("Ошибка при чтении файла");
    };
    reader.readAsArrayBuffer(file);
  });
}