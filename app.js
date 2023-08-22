const htmlCode = document.getElementById('html-code');
const cssCode = document.getElementById('css-code');
const jsCode = document.getElementById('js-code');
const outputFrame = document.getElementById('output-frame').contentWindow.document;

function updateOutput() {
  const combinedCode = `
    <style>${cssCode.value}</style>
    ${htmlCode.value}
    <script>${jsCode.value}</script>
  `;

  outputFrame.open();
  outputFrame.write(combinedCode);
  outputFrame.close();
}

htmlCode.addEventListener('input', updateOutput);
cssCode.addEventListener('input', updateOutput);
jsCode.addEventListener('input', updateOutput);

// Initial update
updateOutput();
