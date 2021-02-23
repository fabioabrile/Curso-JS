const elementos = [
    {tag: 'p', texto: 'Qualquer terxto'},
    {tag: 'div', texto: 'Qualquer terxto'},
    {tag: 'section', texto: 'Qualquer terxto'},
    {tag: 'footer', texto: 'Qualquer terxto'},
]
const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    console.log(elementos[i]);
}