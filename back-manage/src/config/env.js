
let baseUrl = ''; 
let routerMode = 'hash';
let baseImgPath;

if (process.env.NODE_ENV == 'development') {
	baseUrl = '';
    baseImgPath = '/img/';
}else{
	baseUrl = '';
    baseImgPath = '/img/';
}

export {
	baseUrl,
	routerMode,
	baseImgPath
}