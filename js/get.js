const axios = require('axios');
axios.get('https://iyogera.dev/iyogera2').then(resp => { 
	console.log(resp.data); 
});