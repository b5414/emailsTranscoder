

const et = {
	clear: (txt, arr, del)=>{
		arr.push('\t', '\n', ',');
		arr.splice(arr.indexOf(del), 1);
		while(arr.length > 0){
			txt = txt.split(arr.pop()).join('');
		}
		try{txt = txt.trim();}catch(e){}
		return txt;
	},
	encode: (emails, delimiter='\n', deleteArr=[])=>{
		const sendMe = {};
		emails = et.clear(emails, deleteArr, delimiter);
		for(let one of (emails.split(delimiter))){
			one = one.split('@');
			if(!one[1] || !one[0])continue;
			if(!sendMe[one[1]])sendMe[one[1]] = [];
			if(one[0] !== '')sendMe[one[1]].push(one[0]);
		}
		return JSON.stringify(sendMe);
	},
	decode: (strCoded)=>{
		const decoded = [];
		const coded = JSON.parse(strCoded);
		for(const domain in coded){
			for(const line of coded[domain]){
				decoded.push(`${line}@${domain}`);
			}
		}
		return decoded;
	}
};


(async()=>{
	const emailsFromInput = 'ivanCompany@icic.ru\nsteve@gmail.com\n  \nspace\n@\n@55\n54@\n@53@\n52@false\n51@undefined\nnorth@gmail.com\ndanil@gmail.com\nrefao@noreply.com\nivanCompany@gmail.com\nanya@icic.ru';
	const emailsCoded = et.encode(emailsFromInput);
	const emailsDecoded = et.decode(emailsCoded);
	console.log(0, emailsFromInput.split('\n'));
	console.log(1, emailsCoded);
	console.log(2, emailsDecoded);
})();

