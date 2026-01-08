import React, { useState, useEffect, useRef } from 'react';
import { 
  Wifi,
  Volume2,
  Battery,
  X,
  Minus,
  Maximize2,
  Power,
  Search,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  RotateCw,
  Home,
  Lock,
  Monitor,
  Bluetooth,
  Globe,
  Palette,
  LayoutGrid,
  User,
  ShieldCheck,
  Clock,
  Settings as SettingsIcon,
  Cloud,
  HardDrive,
  Info,
  Heart,
  Code,
  Coffee,
  ExternalLink
} from 'lucide-react';

// --- Custom SVG Icons ---
const DiscordIcon = () => (
  <svg viewBox="0 0 127.14 96.36" className="w-full h-full">
    <path fill="#5865F2" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.06,72.06,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.71,32.65-1.82,56.6.48,80.21h0A105.73,105.73,0,0,0,32.47,96.36,77.7,77.7,0,0,0,39.2,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a75.57,75.57,0,0,0,6.73,11.1,105.32,105.32,0,0,0,32.05-16.14h0C129.58,50.8,121,27.3,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5.07-12.67,11.41-12.67S54,46,54,53,48.83,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5.07-12.67,11.44-12.67S96.16,46,96.16,53,91,65.69,84.69,65.69Z"/>
  </svg>
);

const NetflixIcon = () => (
  <svg viewBox="0 0 128 128" className="w-full h-full">
    <path fill="#E50914" d="M101.31 128l-21.36-41.5-21.41 41.5H38.25V0h21.4v41.5L81.01 0h21.41v128h-1.11z"/>
    <path fill="#B20710" d="M38.25 0h21.4v128h-21.4z"/>
    <path fill="#B20710" d="M81.01 0h21.41v128h-21.41z"/>
  </svg>
);

const icons = {
  edge: "https://upload.wikimedia.org/wikipedia/commons/9/98/Microsoft_Edge_logo_%282019%29.svg",
  explorer: "https://img.icons8.com/?size=100&id=FxJPExPJFHZ9&format=png&color=000000",
  settings: "https://img.icons8.com/?size=100&id=s5NUIabJrb4C&format=png&color=000000",
  store: "https://img.icons8.com/?size=100&id=P0xhuRBy8MnO&format=png&color=000000",
  terminal: "https://img.icons8.com/?size=100&id=WbRVMGxHh74X&format=png&color=000000",
  thispc: "https://img.icons8.com/?size=100&id=vfLlLKzofS1u&format=png&color=000000",
  recycle: "https://img.icons8.com/?size=100&id=Xn5vYpN70eY3&format=png&color=000000",
  windows: "https://upload.wikimedia.org/wikipedia/commons/8/87/Windows_logo_-_2021.svg",
  admin: "https://img.icons8.com/?size=100&id=NqZQc8ORlO2Z&format=png&color=000000"
};

const storeApps = [
  { name: 'Discord', customIcon: <DiscordIcon />, category: 'Social', rating: 4.7 },
  { name: 'Zoom', icon: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Zoom-Logo.png', category: 'Business', rating: 4.5 },
  { name: 'Spotify', icon: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg', category: 'Music', rating: 4.8 },
  { name: 'Netflix', customIcon: <NetflixIcon />, category: 'Entertainment', rating: 4.4 },
  { name: 'Instagram', icon: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg', category: 'Social', rating: 4.6 },
  { name: 'Telegram', icon: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg', category: 'Social', rating: 4.9 },
  { name: 'WhatsApp', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg', category: 'Communication', rating: 4.7 },
  { name: 'VS Code', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg', category: 'Development', rating: 4.9 },
  { name: 'Figma', icon: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg', category: 'Design', rating: 4.8 },
  { name: 'GitHub', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg', category: 'Development', rating: 4.9 },
  { name: 'Slack', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg', category: 'Business', rating: 4.5 },
  { name: 'Canva', icon: 'https://img.icons8.com/fluent/100/canva.png', category: 'Design', rating: 4.7 }
];

const App = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isStartOpen, setIsStartOpen] = useState(false);
  const [openWindows, setOpenWindows] = useState([]);
  const [activeWindow, setActiveWindow] = useState(null);
  const [zIndex, setZIndex] = useState(10);
  const [isMobile, setIsMobile] = useState(false);

  const userData = {
    username: "Administrator",
    computerName: "WIN11-PREMIUM-PC",
    status: "Online"
  };

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Kanit:wght@200;300;400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768 || window.innerHeight < 550);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const appData = {
    intro: { id: 'intro', name: 'แนะนำตัว', isLucide: true, icon: <Info className="text-blue-500" />, content: <IntroContent /> },
    edge: { id: 'edge', name: 'Microsoft Edge', icon: icons.edge, content: <BrowserContent /> },
    explorer: { id: 'explorer', name: 'File Explorer', icon: icons.explorer, content: <ExplorerContent user={userData.username} /> },
    settings: { id: 'settings', name: 'Settings', icon: icons.settings, content: <SettingsContent user={userData} isMobile={isMobile} /> },
    terminal: { id: 'terminal', name: 'Terminal', icon: icons.terminal, content: <TerminalContent user={userData.username} /> },
    store: { id: 'store', name: 'Microsoft Store', icon: icons.store, content: <StoreContent /> },
  };

  const openApp = (id) => {
    if (!openWindows.find(win => win.id === id)) {
      const newWindow = { 
        ...appData[id], 
        isMaximized: isMobile, 
        zIndex: zIndex + 1 
      };
      setOpenWindows([...openWindows, newWindow]);
      setZIndex(zIndex + 1);
      setActiveWindow(id);
    } else {
      focusWindow(id);
    }
    setIsStartOpen(false);
  };

  const closeWindow = (id) => {
    setOpenWindows(openWindows.filter(win => win.id !== id));
    if (activeWindow === id) setActiveWindow(null);
  };

  const focusWindow = (id) => {
    setOpenWindows(openWindows.map(win => 
      win.id === id ? { ...win, zIndex: zIndex + 1 } : win
    ));
    setZIndex(zIndex + 1);
    setActiveWindow(id);
  };

  const toggleMaximize = (id) => {
    setOpenWindows(openWindows.map(win => 
      win.id === id ? { ...win, isMaximized: !win.isMaximized } : win
    ));
  };

  return (
    <div 
      className="fixed inset-0 w-full h-full bg-[#1a1a1a] bg-cover bg-center overflow-hidden flex flex-col text-gray-800"
      style={{ 
        backgroundImage: `url('https://4kwallpapers.com/images/walls/thumbs_3t/5616.jpg')`,
        fontFamily: "'Kanit', sans-serif",
        height: '100dvh'
      }}
      onClick={() => setIsStartOpen(false)}
    >
      <div className="flex-1 relative overflow-hidden">
        <div className={`p-4 grid grid-flow-col ${isMobile ? 'grid-rows-6' : 'grid-rows-[repeat(auto-fill,96px)]'} gap-4 w-fit content-start h-full`}>
          <DesktopIcon img={icons.thispc} label="This PC" onClick={() => openApp('explorer')} />
          <DesktopIcon img={icons.recycle} label="Recycle Bin" />
          <DesktopIcon img={icons.edge} label="Microsoft Edge" onClick={() => openApp('edge')} />
          <DesktopIcon img={icons.store} label="Microsoft Store" onClick={() => openApp('store')} />
        </div>

        {openWindows.map(win => (
          <Window 
            key={win.id} 
            window={win} 
            isMobile={isMobile}
            isActive={activeWindow === win.id}
            onClose={() => closeWindow(win.id)}
            onFocus={() => focusWindow(win.id)}
            onMaximize={() => toggleMaximize(win.id)}
          />
        ))}
      </div>

      {/* Taskbar */}
      <div className="h-[52px] bg-[#f8f9fa]/80 backdrop-blur-3xl border-t border-white/20 flex items-center justify-between px-2 z-[6000] shrink-0 shadow-lg">
        <div className="hidden md:flex flex-1 items-center gap-2 px-3 pl-4">
          <div className="hover:bg-white/50 px-2 py-1 rounded-md cursor-pointer flex items-center gap-2 group transition-colors">
             <img src="https://cdn-icons-png.flaticon.com/512/1163/1163661.png" className="w-6 h-6" alt="Weather" />
             <div className="flex flex-col leading-none">
                <span className="text-xs font-medium text-gray-700 uppercase">Mostly Clear</span>
                <span className="text-[10px] text-gray-500">28°C</span>
             </div>
          </div>
        </div>

        <div className={`flex items-end gap-1.5 h-full pb-1 ${isMobile ? 'w-full justify-center' : ''}`}>
          <div 
            onClick={(e) => { e.stopPropagation(); setIsStartOpen(!isStartOpen); }} 
            className="p-2 hover:bg-white/60 rounded-md transition-all active:scale-90 cursor-pointer flex items-center justify-center h-[42px] w-[42px]"
          >
            <img src={icons.windows} className="w-6 h-6 drop-shadow-sm" alt="Start" />
          </div>
          
          {Object.values(appData).map(app => {
            const isOpen = openWindows.some(win => win.id === app.id);
            return (
              <div 
                key={app.id} 
                onClick={() => openApp(app.id)} 
                className={`relative p-2 rounded-md hover:bg-white/60 transition-all cursor-pointer active:scale-90 h-[42px] w-[42px] flex items-center justify-center ${activeWindow === app.id ? 'bg-white/50 shadow-sm border border-white/20' : ''}`}
              >
                {app.isLucide ? (
                  <div className="w-6 h-6 flex items-center justify-center scale-110">{app.icon}</div>
                ) : (
                  <img src={app.icon} className={`w-6 h-6 object-contain ${isOpen ? 'scale-100' : 'scale-90 grayscale-[0.2]'}`} alt={app.name} />
                )}
                {isOpen && (
                  <div className={`absolute bottom-0.5 left-1/2 -translate-x-1/2 h-[3px] rounded-full transition-all duration-300 ${activeWindow === app.id ? 'bg-blue-500 w-4' : 'bg-gray-400 w-1.5'}`}></div>
                )}
              </div>
            );
          })}
        </div>

        <div className="hidden md:flex flex-1 justify-end items-center gap-1 pr-2">
          <div className="flex items-center gap-2 hover:bg-white/50 px-2 py-2 rounded-md cursor-pointer transition-colors">
             <span className="text-[11px] font-bold text-gray-600">ENG</span>
          </div>
          <div className="flex items-center gap-2 hover:bg-white/50 px-3 py-2 rounded-md cursor-pointer transition-colors">
            <Wifi className="w-4 h-4 text-gray-600" />
            <Volume2 className="w-4 h-4 text-gray-600" />
            <Battery className="w-4 h-4 text-gray-600" />
          </div>
          <div className="text-right px-2 hover:bg-white/50 py-1 rounded-md cursor-pointer ml-1 transition-colors">
            <div className="text-xs font-semibold text-gray-700">{currentTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
            <div className="text-[10px] text-gray-500 font-medium">{currentTime.toLocaleDateString('th-TH')}</div>
          </div>
        </div>
      </div>

      {isStartOpen && (
        <div 
          className="fixed bottom-[60px] left-1/2 -translate-x-1/2 w-[90%] md:w-[600px] bg-[#fdfdfd]/90 backdrop-blur-3xl rounded-2xl shadow-2xl border border-white/40 z-[5000] p-6"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-6">
            <span className="font-bold text-gray-700">Pinned Apps</span>
          </div>
          <div className="grid grid-cols-4 md:grid-cols-6 gap-y-6">
            {Object.values(appData).map(app => (
              <div key={app.id} onClick={() => openApp(app.id)} className="flex flex-col items-center gap-2 cursor-pointer hover:bg-white/60 p-2 rounded-xl">
                {app.isLucide ? (
                   <div className="w-10 h-10 flex items-center justify-center bg-blue-50 rounded-xl">{app.icon}</div>
                ) : (
                  <img src={app.icon} className="w-10 h-10 object-contain" alt={app.name} />
                )}
                <span className="text-[10px] text-center text-gray-700 truncate w-full">{app.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Window = ({ window, onClose, onFocus, onMaximize, isActive, isMobile }) => {
  const [pos, setPos] = useState({ x: 50, y: 30 });
  const dragging = useRef(false);

  const startDrag = (e) => {
    if (window.isMaximized || isMobile) return;
    onFocus();
    dragging.current = true;
    const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
    const startX = clientX - pos.x;
    const startY = clientY - pos.y;

    const move = (ev) => {
      if (!dragging.current) return;
      const curX = ev.type.includes('touch') ? ev.touches[0].clientX : ev.clientX;
      const curY = ev.type.includes('touch') ? ev.touches[0].clientY : ev.clientY;
      setPos({ x: curX - startX, y: curY - startY });
    };

    const stop = () => {
      dragging.current = false;
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseup', stop);
      document.removeEventListener('touchmove', move);
      document.removeEventListener('touchend', stop);
    };

    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', stop);
    document.addEventListener('touchmove', move, { passive: false });
    document.addEventListener('touchend', stop);
  };

  const winStyle = (window.isMaximized || isMobile)
    ? { top: 0, left: 0, width: '100%', height: 'calc(100% - 52px)', zIndex: window.zIndex, borderRadius: 0 }
    : { top: pos.y, left: pos.x, width: '85%', maxWidth: '1100px', height: '75%', zIndex: window.zIndex };

  return (
    <div 
      className={`fixed flex flex-col bg-white shadow-2xl transition-all duration-150 rounded-xl overflow-hidden border border-gray-200/50 ${isActive ? 'ring-1 ring-blue-500/20' : 'opacity-98'}`}
      style={winStyle}
      onClick={onFocus}
    >
      <div 
        className={`h-10 flex items-center justify-between px-3 cursor-default select-none shrink-0 ${isActive ? 'bg-[#fcfcfc]' : 'bg-[#f3f3f3]'}`}
        onMouseDown={startDrag} onTouchStart={startDrag}
      >
        <div className="flex items-center gap-2">
          {window.isLucide ? (
            <div className="w-4 h-4 flex items-center justify-center scale-75">{window.icon}</div>
          ) : (
            <img src={window.icon} className="w-4 h-4 object-contain" alt="icon" />
          )}
          <span className="text-[11px] font-semibold text-gray-500 uppercase">{window.name}</span>
        </div>
        <div className="flex h-full items-center">
          <div className="w-10 h-full flex items-center justify-center hover:bg-black/5"><Minus size={14} /></div>
          {!isMobile && <div onClick={onMaximize} className="w-10 h-full flex items-center justify-center hover:bg-black/5"><Maximize2 size={12} /></div>}
          <div onClick={(e) => { e.stopPropagation(); onClose(); }} className="w-10 h-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors"><X size={16} /></div>
        </div>
      </div>
      <div className="flex-1 overflow-hidden bg-white">{window.content}</div>
    </div>
  );
};

// --- Browser Content with Address Bar ---
const BrowserContent = () => {
  const [url, setUrl] = useState('https://www.google.com/search?igu=1');
  const [inputUrl, setInputUrl] = useState('https://www.google.com');
  const iframeRef = useRef(null);

  const handleNavigate = (e) => {
    e.preventDefault();
    let targetUrl = inputUrl.trim();
    if (!targetUrl.startsWith('http://') && !targetUrl.startsWith('https://')) {
      targetUrl = 'https://' + targetUrl;
    }
    setUrl(targetUrl);
    setInputUrl(targetUrl);
  };

  return (
    <div className="h-full bg-white flex flex-col">
      {/* Browser UI Controls */}
      <div className="bg-[#f3f3f3] p-2 border-b flex items-center gap-3">
        <div className="flex items-center gap-1.5 ml-1">
          <button className="p-1.5 hover:bg-gray-200 rounded-md transition-colors text-gray-600"><ArrowLeft size={16}/></button>
          <button className="p-1.5 hover:bg-gray-200 rounded-md transition-colors text-gray-600"><ArrowRight size={16}/></button>
          <button onClick={() => setUrl(url + '?refreshed=' + Date.now())} className="p-1.5 hover:bg-gray-200 rounded-md transition-colors text-gray-600"><RotateCw size={15}/></button>
          <button onClick={() => { setUrl('https://www.google.com/search?igu=1'); setInputUrl('https://www.google.com'); }} className="p-1.5 hover:bg-gray-200 rounded-md transition-colors text-gray-600"><Home size={16}/></button>
        </div>

        <form onSubmit={handleNavigate} className="flex-1 flex items-center bg-white border border-gray-300 rounded-full px-3 py-1 group focus-within:ring-2 focus-within:ring-blue-500/30 focus-within:border-blue-500 transition-all">
          <Lock size={12} className="text-green-600 shrink-0 mr-2" />
          <input 
            type="text" 
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            className="w-full text-xs outline-none bg-transparent text-gray-700"
            placeholder="Search or enter web address"
          />
          <button type="submit" className="opacity-0 group-focus-within:opacity-100 p-1 hover:bg-gray-100 rounded-full transition-all shrink-0">
             <ExternalLink size={14} className="text-blue-500" />
          </button>
        </form>

        <div className="flex items-center gap-2 pr-2 text-gray-500">
           <User size={16} className="p-1 hover:bg-gray-200 rounded-full cursor-pointer"/>
           <div className="w-px h-4 bg-gray-300 mx-1"></div>
           <div className="w-2 h-2 rounded-full bg-gray-300"></div>
           <div className="w-2 h-2 rounded-full bg-gray-300"></div>
           <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        </div>
      </div>

      {/* Warning for some sites */}
      <div className="bg-amber-50 px-4 py-1.5 text-[10px] text-amber-700 border-b border-amber-100 flex items-center justify-between">
         <span>Note: Some websites may block display within an iframe for security reasons.</span>
         <button className="underline font-bold" onClick={() => window.open(url, '_blank')}>Open in New Tab</button>
      </div>

      <div className="flex-1 bg-[#f9f9f9] relative">
        <iframe 
          ref={iframeRef}
          src={url} 
          className="w-full h-full border-none bg-white" 
          title="Browser"
          sandbox="allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        ></iframe>
      </div>
    </div>
  );
};

const IntroContent = () => (
  <div className="h-full bg-slate-50 overflow-y-auto p-6 md:p-12">
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center">
        <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-6 shadow-inner">
           <User size={48} className="text-blue-500" />
        </div>
        <h1 className="text-3xl font-extrabold text-gray-800 mb-1">Made by: ninekigean</h1>
        <p className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-6">Software Enthusiast</p>
        
        <div className="w-full h-px bg-gray-100 mb-8"></div>

        <div className="text-left w-full">
           <h3 className="text-lg font-bold text-gray-700 flex items-center gap-2 mb-4">
              <Heart size={18} className="text-red-500" />
              ความพยายามที่ให้ทํา
           </h3>
           <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
              <p className="bg-blue-50/50 p-4 rounded-2xl border border-blue-50">
                ในการพัฒนาโปรเจกต์นี้ ผมมีความตั้งใจที่จะสร้างประสบการณ์หน้าตา UI ของ Windows 11 ขึ้นมาใหม่ในรูปแบบเว็บแอพพลิเคชัน 
                โดยเน้นความลื่นไหล ความสวยงามของไอคอน และการใช้งานที่ตอบโจทย์ทั้งบนคอมพิวเตอร์และมือถือ
              </p>
              <p>
                ผมทุ่มเทเวลาให้กับการคัดเลือกไอคอนที่เหมาะสม การทำระบบหน้าต่างที่ลากไปมาได้ (Window Management) 
                รวมไปถึงการปรับจูนรายละเอียดเล็กๆ น้อยๆ เช่น แถบ Taskbar และหน้าเมนูตั้งค่า เพื่อให้ผู้ใช้งานรู้สึกเหมือนกำลังใช้ระบบปฏิบัติการจริงๆ
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                 <div className="p-4 bg-gray-50 rounded-2xl flex items-center gap-3">
                    <Code className="text-indigo-500" />
                    <span className="font-bold text-xs">React & Tailwind</span>
                 </div>
                 <div className="p-4 bg-gray-50 rounded-2xl flex items-center gap-3">
                    <Coffee className="text-amber-600" />
                    <span className="font-bold text-xs">Passion driven</span>
                 </div>
              </div>
           </div>
        </div>

        <div className="mt-12 w-full flex justify-between items-center text-[11px] text-gray-400 font-medium">
           <span>Version 1.0.4</span>
           <span className="font-bold text-gray-500 tracking-wider">dev thailand</span>
        </div>
      </div>
    </div>
  </div>
);

const ExplorerContent = ({ user }) => (
  <div className="flex h-full bg-white">
    <div className="w-48 bg-[#f9fafb] border-r border-gray-100 p-4 hidden md:block">
       <div className="text-[10px] font-bold text-gray-400 uppercase mb-4">Quick Access</div>
       {['Desktop', 'Downloads', 'Documents', 'Pictures'].map(item => (
         <div key={item} className="text-xs py-2 px-3 hover:bg-gray-200 rounded-lg cursor-pointer flex items-center gap-2 text-gray-600">
            <img src={icons.explorer} className="w-3.5 h-3.5" alt="" /> {item}
         </div>
       ))}
    </div>
    <div className="flex-1 p-6 overflow-y-auto">
       <h3 className="text-sm font-bold text-gray-800 mb-6">Recent Folders</h3>
       <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
         {['Projects', 'Work', 'School', 'Photos'].map(name => (
           <div key={name} className="flex flex-col items-center gap-2 p-4 hover:bg-gray-50 rounded-xl cursor-pointer">
              <img src={icons.explorer} className="w-12 h-12" alt="" />
              <span className="text-xs text-gray-600 font-medium">{name}</span>
           </div>
         ))}
       </div>
    </div>
  </div>
);

const SettingsContent = ({ user, isMobile }) => {
  const [selectedTab, setSelectedTab] = useState('System');

  const menuItems = [
    { id: 'System', name: 'System', icon: <Monitor size={18} /> },
    { id: 'Bluetooth', name: 'Bluetooth & devices', icon: <Bluetooth size={18} /> },
    { id: 'Network', name: 'Network & internet', icon: <Globe size={18} /> },
    { id: 'Personalization', name: 'Personalization', icon: <Palette size={18} /> },
    { id: 'Apps', name: 'Apps', icon: <LayoutGrid size={18} /> },
    { id: 'Accounts', name: 'Accounts', icon: <User size={18} /> },
    { id: 'Time', name: 'Time & language', icon: <Clock size={18} /> },
    { id: 'Security', name: 'Privacy & security', icon: <ShieldCheck size={18} /> },
    { id: 'WindowsUpdate', name: 'Windows Update', icon: <RotateCw size={18} /> },
  ];

  return (
    <div className="flex h-full bg-[#f8f9fa]">
      <div className={`${isMobile ? 'w-16' : 'w-72'} p-4 flex flex-col gap-1 border-r border-gray-200/60 overflow-y-auto shrink-0 bg-[#f3f3f3]/50`}>
        <div className="flex items-center gap-3 mb-8 px-2 py-4">
           <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0 shadow-sm border border-blue-200">
              <img src={icons.admin} className="w-7 h-7" alt="Admin"/>
           </div>
           {!isMobile && (
             <div className="flex flex-col leading-tight overflow-hidden">
                <span className="font-bold text-sm text-gray-800 truncate">{user.username}</span>
                <span className="text-[10px] text-gray-500 font-medium truncate">Local Account</span>
             </div>
           )}
        </div>

        {menuItems.map((item) => (
          <div 
            key={item.id} 
            onClick={() => setSelectedTab(item.id)}
            className={`flex items-center gap-4 p-2.5 rounded-lg cursor-pointer transition-all ${
              selectedTab === item.id 
                ? 'bg-white shadow-sm ring-1 ring-gray-200/50 text-blue-600' 
                : 'text-gray-600 hover:bg-gray-200/50'
            }`}
          >
            <div className={`${selectedTab === item.id ? 'text-blue-500' : 'text-gray-400'}`}>
              {item.icon}
            </div>
            {!isMobile && <span className="text-[13px] font-medium">{item.name}</span>}
            {selectedTab === item.id && !isMobile && <div className="ml-auto w-1 h-4 bg-blue-500 rounded-full"></div>}
          </div>
        ))}
      </div>

      <div className="flex-1 bg-white p-8 md:p-12 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
             <div className="flex items-center gap-6">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center shadow-inner border border-white">
                   <Monitor className="w-8 h-8 md:w-10 md:h-10 text-gray-400" />
                </div>
                <div>
                   <h2 className="text-3xl font-bold text-gray-900 tracking-tight">{user.computerName}</h2>
                   <p className="text-sm text-gray-500 mt-1">Windows 11 Home Edition</p>
                   <button className="text-[11px] font-bold text-blue-600 mt-2 hover:underline">Rename</button>
                </div>
             </div>
             
             <div className="flex items-center gap-4">
                <div className="flex flex-col items-center bg-gray-50 p-4 rounded-2xl border border-gray-100 min-w-[100px] shadow-sm">
                   <Cloud className="w-5 h-5 text-blue-400 mb-1" />
                   <span className="text-[10px] font-bold text-gray-400 uppercase">OneDrive</span>
                   <span className="text-xs font-bold text-gray-700 mt-1">Backing up</span>
                </div>
                <div className="flex flex-col items-center bg-gray-50 p-4 rounded-2xl border border-gray-100 min-w-[100px] shadow-sm">
                   <SettingsIcon className="w-5 h-5 text-blue-400 mb-1" />
                   <span className="text-[10px] font-bold text-gray-400 uppercase">Updates</span>
                   <span className="text-xs font-bold text-gray-700 mt-1">Up to date</span>
                </div>
             </div>
          </div>

          <div className="grid grid-cols-1 gap-3">
             <h4 className="text-sm font-bold text-gray-800 mb-2 mt-4 px-2">System Settings</h4>
             {[
               { icon: <Monitor className="text-blue-500" size={20}/>, title: 'Display', desc: 'Monitors, brightness, night light, display profile' },
               { icon: <Volume2 className="text-green-500" size={20}/>, title: 'Sound', desc: 'Volume levels, output devices, sound effects' },
               { icon: <ShieldCheck className="text-red-500" size={20}/>, title: 'Notifications', desc: 'Alerts from apps and system, do not disturb' },
               { icon: <Power className="text-orange-500" size={20}/>, title: 'Power & battery', desc: 'Sleep mode, battery usage, power mode' },
               { icon: <HardDrive className="text-purple-500" size={20}/>, title: 'Storage', desc: 'Storage space, cleanup recommendations' },
             ].map((opt, i) => (
               <div key={i} className="flex items-center gap-5 p-4 bg-[#f9f9fb] hover:bg-gray-100/80 rounded-2xl cursor-pointer border border-transparent hover:border-gray-200 transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform">
                     {opt.icon}
                  </div>
                  <div className="flex flex-col flex-1 min-w-0">
                     <span className="text-[13px] font-bold text-gray-800">{opt.title}</span>
                     <span className="text-[11px] text-gray-400 truncate">{opt.desc}</span>
                  </div>
                  <ChevronRight size={14} className="text-gray-300" />
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const TerminalContent = ({ user }) => (
  <div className="bg-[#0c0c0c] h-full flex flex-col font-mono text-[13px] text-gray-300 p-8">
      <div className="text-gray-500 mb-4 tracking-tighter">Microsoft Windows [Version 10.0.22631.3296]</div>
      <div className="flex items-center gap-2">
         <span className="text-green-400 font-bold">PS C:\Users\{user}&gt;</span>
         <span className="animate-pulse w-2 h-4 bg-white"></span>
      </div>
  </div>
);

const StoreContent = () => (
  <div className="p-8 md:p-12 h-full bg-white overflow-y-auto">
     <div className="flex flex-col items-center mb-16 text-center">
        <div className="p-6 bg-gradient-to-tr from-blue-50 to-white rounded-3xl mb-6 shadow-sm border border-blue-50">
           <img src={icons.store} className="w-16 h-16" alt="Store" />
        </div>
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Microsoft Store</h1>
        <p className="text-gray-400 mt-2 font-medium">Get your favorite apps and games</p>
     </div>

     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
       {storeApps.map((app) => (
         <div key={app.name} className="flex items-center gap-4 bg-[#f9f9fb] p-5 rounded-3xl border border-transparent hover:border-blue-100 hover:bg-white hover:shadow-xl transition-all cursor-pointer group">
           <div className="w-14 h-14 bg-white shadow-sm rounded-xl shrink-0 group-hover:scale-110 transition-transform flex items-center justify-center border border-gray-50 overflow-hidden p-2">
              {app.customIcon ? app.customIcon : <img src={app.icon} className="w-full h-full object-contain" alt={app.name} />}
           </div>
           <div className="flex flex-col min-w-0">
             <div className="font-bold text-sm text-gray-800 truncate">{app.name}</div>
             <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-0.5">{app.category}</div>
             <div className="text-[10px] text-yellow-500 font-bold mt-1">★ {app.rating}</div>
           </div>
         </div>
       ))}
     </div>
  </div>
);

const DesktopIcon = ({ img, label, onClick }) => (
  <div 
    className="flex flex-col items-center justify-start gap-1 p-2 w-[92px] rounded-2xl hover:bg-white/10 hover:backdrop-blur-sm cursor-pointer active:scale-95 transition-all group"
    onClick={onClick}
  >
    <img src={img} className="w-12 h-12 md:w-14 md:h-14 drop-shadow-lg group-hover:scale-110 transition-transform" alt={label} />
    <span className="text-white text-[10px] font-medium text-center leading-tight drop-shadow-md px-1 select-none" style={{textShadow: '0 1px 2px rgba(0,0,0,0.8)'}}>{label}</span>
  </div>
);

export default App;

