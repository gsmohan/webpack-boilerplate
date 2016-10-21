require('./styles/main.scss');
let content = require('./components/content.js');

let containerEl = document.querySelector('#container');
	containerEl.innerHTML = content;

