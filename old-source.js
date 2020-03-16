

const doEncode=async(emails, del='\n')=>{
	const sendMe = {};
	emails = emails.split('\t').join('').split((del === '\n')?',':'\n').join('').trim();
	for(let one of (emails.split(del))){
		one = one.split('@');
		if(!one[1] || !one[0])continue;
		if(!sendMe[one[1]])sendMe[one[1]] = [];
		if(one[0] !== '')sendMe[one[1]].push(one[0]);
	}
	return JSON.stringify(sendMe);
};


const doDecode=async(strCoded)=>{
	const decoded = [];
	const coded = JSON.parse(strCoded);
	for(const domain in coded){
		for(const line of coded[domain]){
			decoded.push(`${line}@${domain}`);
		}
	}
	return decoded;
};


(async()=>{
	/// browser:
	const emailsFromInput = 'ivanCompany@icic.ru\nsteve@gmail.com\n  \nspace\n@\n@55\n54@\n@53@\n52@false\n51@undefined\nnorth@gmail.com\ndanil@gmail.com\nrefao@noreply.com\nivanCompany@gmail.com\nanya@icic.ru';
	const emailsCoded = await doEncode(emailsFromInput);
	// ajax here or something
	
	/// server side:
	const emailsDecoded = await doDecode(emailsCoded).catch((e)=>{return false;});
	
	console.log(0, emailsFromInput.split('\n'));
	console.log(1, emailsCoded);
	console.log(2, emailsDecoded);
})();

