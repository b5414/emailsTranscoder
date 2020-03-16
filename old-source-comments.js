

const doEncode=async(emails, del='\n')=>{
	const sendMe = {};
	
	// deleting \t, \n or comma
	emails = emails.split('\t').join('').split((del === '\n')?',':'\n').join('').trim();
	
	for(let one of (emails.split(del))){
		one = one.split('@');
		
		// if not domain or nick > skip
		if(!one[1] || !one[0])continue;
		
		// if not domain array > create it
		if(!sendMe[one[1]])sendMe[one[1]] = [];
		
		// if nick are not empty push to domain array
		if(one[0] !== '')sendMe[one[1]].push(one[0]);
	}
	
	// return: {"gmail.com":["emailnick_1","emailnick_2"]}
	return JSON.stringify(sendMe);
};


const doDecode=async(strCoded)=>{
	const decoded = [];
	const coded = JSON.parse(strCoded);
	
	// clear without comment, just pushing compiled email
	for(const domain in coded){
		for(const line of coded[domain]){
			decoded.push(`${line}@${domain}`);
		}
	}
	
	// return: array of emails
	return decoded;
};


(async()=>{
	/// browser:
	const emailsFromInput = 'ivanCompany@icic.ru\nsteve@gmail.com\n  \nspace\n@\n@55\n54@\n@53@\n52@false\n51@undefined\nnorth@gmail.com\ndanil@gmail.com\nrefao@noreply.com\nivanCompany@gmail.com\nanya@icic.ru';
	const emailsCoded = await doEncode(emailsFromInput);
	// ajax or some, send emailsCoded
	
	
	/// server side:
	const emailsDecoded = await doDecode(emailsCoded).catch((e)=>{return false;});
	// emails are ready now or false
	
	
	console.log(0, emailsFromInput.split('\n'));
	console.log(1, emailsCoded);
	console.log(2, emailsDecoded);
})();

