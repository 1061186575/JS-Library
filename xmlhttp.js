/**
 * @param url
 * @param data
 * @param type
 * @returns {Promise<*>}
 */

async function xmlhttp(url = '', data = {}, type = 'GET')  {
	type = type.toUpperCase();

	if (type === 'GET') {
		let dataStr = '';
		Object.keys(data).forEach(key => {
			dataStr += key + '=' + data[key] + '&';
		});

		if (dataStr !== '') {
			dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
			url = url + '?' + dataStr;
		}
	}

	return new Promise((resolve, reject) => {
		let xmlhttp;
		if (window.XMLHttpRequest) {
			xmlhttp = new XMLHttpRequest();
		} else {
			xmlhttp = new ActiveXObject();
		}

		let sendData = '';
		if (type === 'POST') {
			sendData = JSON.stringify(data);
		}

		xmlhttp.open(type, url, true);
		xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xmlhttp.send(sendData);

		xmlhttp.onreadystatechange = () => {
			if (xmlhttp.readyState === 4) {
				if (xmlhttp.status === 200) {
					resolve(xmlhttp.response)
				} else {
					reject(xmlhttp)
				}
			}
		}
	})

};
