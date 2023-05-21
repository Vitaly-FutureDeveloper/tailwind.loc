export interface ResponseInterface {
	status: number,
	data: DataResponseType,
};

type DataResponseType = {
	text: string,
};


export interface FormPageInterface {
	sendForm: {
		initilizedSendForm: boolean,
		responseText: string,
	},
};
