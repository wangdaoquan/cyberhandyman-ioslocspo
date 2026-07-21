export function getLandingHtml() {
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>iOS Location Spoofer · 虚拟定位</title>
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="theme-color" content="#0b0f17">
<link rel="apple-touch-icon" href="/icon-180.png">
<link rel="icon" href="/icon.svg" type="image/svg+xml">
<style>
:root {
  --bg: #0b0f17;
  --card: rgba(22, 28, 38, 0.75);
  --card-border: rgba(255, 255, 255, 0.08);
  --card2: rgba(15, 20, 29, 0.6);
  --line: #1e2638;
  --cyan: #06b6d4;
  --cyan-glow: rgba(6, 182, 212, 0.25);
  --green: #10b981;
  --green-glow: rgba(16, 185, 129, 0.25);
  --txt: #f3f4f6;
  --txt-sub: #9ca3af;
  --muted: #6b7280;
  --mono: #38bdf8;
  --radius-lg: 16px;
  --radius-md: 12px;
  --radius-sm: 8px;
}

* { margin:0; padding:0; box-sizing:border-box; -webkit-tap-highlight-color:transparent; }

body {
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui, sans-serif;
  color: var(--txt);
  line-height: 1.6;
  background: 
    radial-gradient(1000px 500px at 50% -100px, rgba(16, 185, 129, 0.12), transparent 70%),
    radial-gradient(800px 400px at 90% 20%, rgba(6, 182, 212, 0.08), transparent 60%),
    var(--bg);
  background-attachment: fixed;
  min-height: 100vh;
}

.wrap { 
  max-width: 580px; 
  margin: 0 auto; 
  padding: 32px 20px calc(48px + env(safe-area-inset-bottom)); 
}

/* --- Header / Branding --- */
header { 
  text-align: center; 
  padding: 12px 0 24px; 
}

header .logowrap { 
  position: relative; 
  width: 80px; 
  margin: 0 auto 18px; 
}

header .logo { 
  width: 80px; 
  height: 80px; 
  border-radius: 22px; 
  display: block; 
  box-shadow: 0 0 0 1px var(--card-border), 0 12px 32px var(--green-glow); 
  transition: transform 0.3s ease;
}

header .logo:hover {
  transform: translateY(-2px);
}

h1 { 
  font-size: 24px; 
  font-weight: 800; 
  letter-spacing: -0.3px; 
  background: linear-gradient(135deg, #ffffff 0%, #a5f3fc 50%, #6ee7b7 100%); 
  -webkit-background-clip: text; 
  background-clip: text; 
  -webkit-text-fill-color: transparent; 
}

/* --- CTAs --- */
.ctas { 
  display: flex; 
  gap: 12px; 
  margin: 20px 0 8px; 
}

.enter { 
  flex: 1; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  gap: 8px; 
  padding: 16px 20px; 
  border: none; 
  border-radius: var(--radius-lg); 
  font-size: 16.5px; 
  font-weight: 700; 
  cursor: pointer; 
  text-decoration: none; 
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1); 
}

.enter.go { 
  background: linear-gradient(135deg, #10b981, #059669); 
  color: #ffffff; 
  box-shadow: 0 8px 24px var(--green-glow); 
}

.enter.go:hover {
  transform: translateY(-1px);
  box-shadow: 0 12px 28px rgba(16, 185, 129, 0.35);
}

.enter.go:active { 
  transform: scale(0.98); 
}

.divider { 
  height: 1px; 
  background: linear-gradient(90deg, transparent, var(--line), transparent); 
  margin: 28px 0; 
}

/* --- Section Heads --- */
h2 { 
  font-size: 18px; 
  font-weight: 700; 
  margin-bottom: 6px; 
  display: flex; 
  align-items: center; 
  gap: 10px; 
  color: #ffffff;
}

h2::before { 
  content: ""; 
  width: 4px; 
  height: 18px; 
  border-radius: 4px; 
  background: linear-gradient(180deg, var(--cyan), var(--green)); 
}

.sub { 
  font-size: 13.5px; 
  color: var(--txt-sub); 
  margin: 0 0 16px 14px; 
}

.note { 
  background: var(--card); 
  backdrop-filter: blur(12px);
  border: 1px solid var(--card-border); 
  border-left: 4px solid var(--cyan); 
  border-radius: var(--radius-md); 
  padding: 14px 16px; 
  font-size: 13px; 
  color: #d1d5db; 
  margin-bottom: 20px; 
  line-height: 1.65;
  box-shadow: 0 4px 16px rgba(0,0,0,0.2);
}

.note b { 
  color: #ffffff; 
  font-weight: 600;
}

/* --- Platform Cards --- */
.plat { 
  background: var(--card); 
  backdrop-filter: blur(12px);
  border: 1px solid var(--card-border); 
  border-radius: var(--radius-lg); 
  padding: 14px; 
  margin-bottom: 14px; 
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  transition: border-color 0.2s, transform 0.2s;
}

.plat:hover {
  border-color: rgba(255, 255, 255, 0.15);
}

.plat .big { 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  gap: 8px; 
  width: 100%; 
  padding: 12px 16px; 
  border: none; 
  border-radius: var(--radius-md); 
  background: linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(16, 185, 129, 0.15)); 
  border: 1px solid rgba(6, 182, 212, 0.3);
  color: #a5f3fc; 
  font-size: 15px; 
  font-weight: 700; 
  cursor: pointer; 
  text-align: center; 
  text-decoration: none; 
  transition: all 0.2s ease; 
}

.plat .big:hover { 
  background: linear-gradient(135deg, rgba(6, 182, 212, 0.25), rgba(16, 185, 129, 0.25)); 
  border-color: rgba(6, 182, 212, 0.5);
  color: #ffffff;
}

.plat .big:active { 
  transform: scale(0.98); 
}

.plat .line { 
  display: flex; 
  align-items: center; 
  gap: 8px; 
  margin-top: 10px; 
}

.plat .url { 
  flex: 1; 
  min-width: 0; 
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; 
  font-size: 11.5px; 
  color: var(--txt-sub); 
  background: var(--card2); 
  border: 1px solid var(--card-border); 
  border-radius: var(--radius-sm); 
  padding: 8px 12px; 
  overflow: hidden; 
  text-overflow: ellipsis; 
  white-space: nowrap; 
}

.plat .copy { 
  flex: none; 
  padding: 8px 16px; 
  border: 1px solid var(--card-border); 
  border-radius: var(--radius-sm); 
  background: rgba(255, 255, 255, 0.05); 
  color: var(--txt); 
  font-size: 12.5px; 
  font-weight: 600; 
  cursor: pointer; 
  transition: all 0.2s ease; 
}

.plat .copy:hover { 
  background: rgba(255, 255, 255, 0.1); 
}

.plat .copy:active { 
  transform: scale(0.95);
}

.plat .copy.ok { 
  background: var(--green); 
  border-color: var(--green); 
  color: #ffffff; 
}

.plat .pnote { 
  font-size: 12px; 
  color: var(--txt-sub); 
  margin-top: 10px; 
  line-height: 1.6; 
  padding: 8px 10px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: var(--radius-sm);
}

/* --- Info Boxes --- */
.mitm { 
  background: var(--card); 
  backdrop-filter: blur(12px);
  border: 1px solid var(--card-border); 
  border-radius: var(--radius-lg); 
  padding: 16px; 
  font-size: 13px; 
  color: #d1d5db; 
  margin-top: 16px; 
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.mitm b { 
  color: #ffffff; 
  display: inline-block;
  margin-bottom: 6px;
}

.mitm code { 
  display: block; 
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; 
  font-size: 11.5px; 
  color: var(--mono); 
  word-break: break-all; 
  line-height: 1.8; 
  background: rgba(0, 0, 0, 0.3);
  padding: 8px 12px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--card-border);
  margin-top: 6px;
}

.mitm .hosts { 
  margin-top: 8px; 
}

.mitm .hosts code { 
  line-height: 1.8; 
}

/* --- Toast --- */
.toast { 
  position: fixed; 
  left: 50%; 
  bottom: 40px; 
  transform: translateX(-50%) translateY(20px); 
  background: rgba(18, 24, 38, 0.9); 
  backdrop-filter: blur(16px);
  color: #ffffff; 
  padding: 12px 24px; 
  border-radius: 30px; 
  font-size: 14px; 
  font-weight: 500;
  opacity: 0; 
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1); 
  pointer-events: none; 
  z-index: 99; 
  border: 1px solid var(--card-border); 
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.toast.show { 
  opacity: 1; 
  transform: translateX(-50%) translateY(0); 
}

footer { 
  text-align: center; 
  font-size: 12px; 
  color: var(--muted); 
  margin-top: 32px; 
  line-height: 2; 
}

footer b { 
  color: var(--txt-sub); 
  font-weight: 500;
}
</style>
</head>
<body>
<div class="wrap">

  <header>
    <div class="logowrap"><img class="logo" src="/icon.svg" alt="App Icon"></div>
    <h1>iOS Location Spoofer · 虚拟定位</h1>
  </header>

  <div class="ctas">
    <a class="enter go" href="/picker">点击选择地点</a>
  </div>

  <div class="divider"></div>

  <h2>安装模块</h2>
  <p class="sub">选你的代理客户端，点「一键导入」直接装；或「复制」手动添加。</p>
  <div class="note">📍 生效前提：<br>① 代理 App 已连接（开关/引擎打开、<b>非「直连」模式</b>）；② 开启 HTTPS 解密(MITM) 并信任证书；③ 装好对应客户端的模块。之后打开选点页选位置、点「储存到设备」即可生效。iOS 26+ 切换后可能需重启一次设备清缓存。</div>

  <div id="plats"></div>

  <div class="mitm">
    <b>Quantumult X 资源解析器 URL（QX 一键导入 / 重写引用需先配好）：</b><br>
    <code>https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/Scripts/resource-parser.js</code>
    <br>
    <b>添加方式 —— 把下面这段填进 QX 配置：</b>
    <code>[general]<br>#复制下面这些内容（另起一行）<br>resource_parser_url=https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/Scripts/resource-parser.js</code>
  </div>
  
  <div class="mitm">
    <b>MITM 主机名（如全部配置成功仍不生效，在 MITM / HTTPS 解密中手动加入下面四个域名）：</b>
    <div class="hosts"><code>gs-loc.apple.com<br>gs-loc-cn.apple.com<br>bluedot.is.autonavi.com<br>bluedot.is.autonavi.com.gds.alibabadns.com</code></div>
  </div>

  <footer>
    坐标只存在你<b>当前设备</b>上，服务端不留存记录。<br>
    GNU AGPL-3.0 · 仅供学习研究
  </footer>
</div>

<div class="toast" id="toast"></div>

<script>
var origin = location.origin;
function u(file){ return origin + '/' + file; }
var qxExtra = ', tag=iOS Location Spoofer, update-interval=172800, opt-parser=true, enabled=true';
var PLATS = [
  { name:'Surge', file:'ios-location-spoofer.sgmodule', scheme:function(x){ return 'surge:///install-module?url=' + encodeURIComponent(x); } },
  { name:'Shadowrocket', file:'ios-location-spoofer.sgmodule', scheme:function(x){ return 'shadowrocket://install?module=' + encodeURIComponent(x); } },
  { name:'Egern', file:'ios-location-spoofer.sgmodule', scheme:function(x){ return 'egern:///install-module?url=' + encodeURIComponent(x); } },
  { name:'Loon', file:'ios-location-spoofer.lnplugin', scheme:function(x){ return 'loon://import?plugin=' + encodeURIComponent(x); } },
  { name:'Stash', file:'ios-location-spoofer.stoverride', scheme:function(x){ return 'stash://install-override?url=' + encodeURIComponent(x); } },
  { name:'Quantumult X', file:'ios-location-spoofer.snippet',
    scheme:function(x){ return 'quantumult-x:///add-resource?remote-resource=' + encodeURIComponent(JSON.stringify({ rewrite_remote:[x + qxExtra] })); },
    note:'QX 没有模块面板：一键导入=添加「重写」资源(需已配资源解析器)；MITM 主机名要手动加进 设置→MITM。' }
];

function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;'); }
function toast(m){ var t=document.getElementById('toast'); t.textContent=m; t.classList.add('show'); setTimeout(function(){ t.classList.remove('show'); }, 1800); }
function copyText(s){
  if (navigator.clipboard && navigator.clipboard.writeText) return navigator.clipboard.writeText(s);
  return new Promise(function(res,rej){ try{ var ta=document.createElement('textarea'); ta.value=s; ta.style.position='fixed'; ta.style.opacity='0'; document.body.appendChild(ta); ta.select(); var ok=document.execCommand('copy'); document.body.removeChild(ta); ok?res():rej(); }catch(e){ rej(e); } });
}
function doCopy(s, btn){ copyText(s).then(function(){ toast('已复制模块链接'); var o=btn.textContent; btn.classList.add('ok'); btn.textContent='✓'; setTimeout(function(){ btn.textContent=o; btn.classList.remove('ok'); }, 1200); }).catch(function(){ toast('复制失败，请手动选择'); }); }

var html = '';
for (var i=0; i<PLATS.length; i++){
  var p = PLATS[i];
  var url = u(p.file);
  html += '<div class="plat">' +
    '<a class="big" href="' + esc(p.scheme(url)) + '">一键导入 ' + esc(p.name) + '</a>' +
    '<div class="line"><span class="url">' + esc(url) + '</span>' +
    '<button class="copy" data-url="' + esc(url) + '">复制</button></div>' +
    (p.note ? '<div class="pnote">' + esc(p.note) + '</div>' : '') +
    '</div>';
}
document.getElementById('plats').innerHTML = html;
var btns = document.querySelectorAll('.copy');
for (var j=0; j<btns.length; j++){ (function(b){ b.addEventListener('click', function(){ doCopy(b.getAttribute('data-url'), b); }); })(btns[j]); }
<\/script>
</body>
</html>`;
}