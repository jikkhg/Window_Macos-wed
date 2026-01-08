document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration: The heart of the OS ---
    // Define all app behavior, content, and metadata here.
    const APPS_CONFIG = {
        'finder': {
            title: 'Finder',
            width: '700px',
            height: '450px',
            content: `
                <div class="app-container">
                    <div class="app-sidebar">
                        <div class="sidebar-title">Favorites</div>
                        <div class="sidebar-link active">🏠 AirDrop</div>
                        <div class="sidebar-link">🕒 Recent</div>
                        <div class="sidebar-link">📁 Applications</div>
                        <div class="sidebar-link">📄 Documents</div>
                        <div class="sidebar-link">📥 Downloads</div>
                        <div class="sidebar-title">Locations</div>
                        <div class="sidebar-link">💾 Macintosh HD</div>
                    </div>
                    <div class="app-content">
                        <div class="app-toolbar">
                            <span>◀</span> <span>▶</span>
                            <span style="font-weight:600;">Downloads</span>
                        </div>
                        <div class="app-grid" style="padding-top:20px;">
                            <div class="grid-item">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Hard_Drive_Icon_macOS_Big_Sur.png">
                                <span class="item-label">System.dmg</span>
                            </div>
                            <div class="grid-item">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Finder_Icon_macOS_Big_Sur.png/1024px-Finder_Icon_macOS_Big_Sur.png">
                                <span class="item-label">Secrets.txt</span>
                            </div>
                            <div class="grid-item">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Photos_app_icon.png/1024px-Photos_app_icon.png">
                                <span class="item-label">Wallpaper.jpg</span>
                            </div>
                        </div>
                    </div>
                </div>`
        },
        'vscode': {
            title: 'Visual Studio Code',
            width: '1000px',
            height: '700px',
            content: `
                <div style="width:100%; height:100%; background:#181818; overflow:hidden;">
                    <iframe 
                        src="https://stackblitz.com/edit/web-platform?embed=1&file=index.html&theme=dark" 
                        style="width:100%; height:100%; border:none;"
                        title="VS Code Editor">
                    </iframe>
                </div>`
        },
        'appstore': {
            title: 'App Store',
            width: '900px',
            height: '650px',
            content: `
                <div class="app-container">
                    <div class="app-sidebar">
                        <div class="sidebar-title">App Store</div>
                        <div class="sidebar-link active">✨ Discover</div>
                        <div class="sidebar-link">🕹️ Arcade</div>
                        <div class="sidebar-link">💼 Create</div>
                        <div class="sidebar-link">🎓 Learn</div>
                        <div class="sidebar-link">🚀 Play</div>
                        <div class="sidebar-link">🛠️ Develop</div>
                        <div class="sidebar-link">📦 Updates</div>
                    </div>
                    <div class="app-content" style="background:#1e1e1e;">
                        <div style="background: linear-gradient(135deg, #007aff, #5ac8fa); padding: 40px; border-radius: 20px; margin-bottom: 30px; position: relative; overflow: hidden;">
                            <h2 style="font-size: 32px; margin-bottom: 10px;">VS Code Pro</h2>
                            <p style="opacity: 0.9; margin-bottom: 20px;">Use the full StackBlitz power directly on Max OS 2.</p>
                            <button class="store-btn" style="background: white; color: black; padding: 10px 25px; border-radius: 30px;" onclick="window.downloadApp(this, 'vscode')">GET</button>
                            <div style="position:absolute; right: 20px; bottom: -20px; font-size: 150px; opacity: 0.2;">💻</div>
                        </div>

                        <h3 style="margin-bottom:20px; opacity: 0.8;">Essential Apps</h3>
                        <div style="display:grid; grid-template-columns: repeat(2, 1fr); gap:15px; margin-bottom:30px;">
                            <div class="store-card">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/5/52/Safari_browser_logo.svg">
                                <div style="flex:1;">
                                    <div style="font-weight:600;">Safari</div>
                                    <div style="font-size:11px; opacity:0.6;">Web Browser</div>
                                </div>
                                <button class="store-btn" onclick="window.downloadApp(this, 'safari')">GET</button>
                            </div>
                            <div class="store-card">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IMessage_logo.svg">
                                <div style="flex:1;">
                                    <div style="font-weight:600;">Messages</div>
                                    <div style="font-size:11px; opacity:0.6;">Communication</div>
                                </div>
                                <button class="store-btn" onclick="window.downloadApp(this, 'messages')">GET</button>
                            </div>
                            <div class="store-card">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Notes_%28iOS%29.svg">
                                <div style="flex:1;">
                                    <div style="font-weight:600;">Notes</div>
                                    <div style="font-size:11px; opacity:0.6;">Productivity</div>
                                </div>
                                <button class="store-btn" onclick="window.downloadApp(this, 'note')">GET</button>
                            </div>
                            <div class="store-card">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fb/FaceTime_icon.svg">
                                <div style="flex:1;">
                                    <div style="font-weight:600;">FaceTime</div>
                                    <div style="font-size:11px; opacity:0.6;">Video Calls</div>
                                </div>
                                <button class="store-btn" onclick="window.downloadApp(this, 'facetime')">GET</button>
                            </div>
                            <div class="store-card">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Mail_%28iOS%29.svg">
                                <div style="flex:1;">
                                    <div style="font-weight:600;">Mail</div>
                                    <div style="font-size:11px; opacity:0.6;">Email Client</div>
                                </div>
                                <button class="store-btn" onclick="window.downloadApp(this, 'mail')">GET</button>
                            </div>
                            <div class="store-card">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/Microsoft_Edge_logo_%282019%29.svg">
                                <div style="flex:1;">
                                    <div style="font-weight:600;">Microsoft Edge</div>
                                    <div style="font-size:11px; opacity:0.6;">Modern Browser</div>
                                </div>
                                <button class="store-btn" onclick="window.downloadApp(this, 'edge')">GET</button>
                            </div>
                             <div class="store-card">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Finder_Icon_macOS_Big_Sur.png">
                                <div style="flex:1;">
                                    <div style="font-weight:600;">Finder Pro</div>
                                    <div style="font-size:11px; opacity:0.6;">File Management</div>
                                </div>
                                <button class="store-btn" onclick="window.openWindow('finder')">OPEN</button>
                            </div>
                        </div>

                        <h3 style="margin: 30px 0 20px; opacity: 0.8;">Thai Developers Favorites 🇹🇭</h3>
                        <div class="store-card" style="margin-top:10px;">
                            <div style="width:60px; height:60px; background:var(--apple-blue); border-radius:12px; display:flex; align-items:center; justify-content:center; font-size:30px;">🐱</div>
                            <div style="flex:1;">
                                <div style="font-weight:600;">nay's Portfolio</div>
                                <div style="font-size:11px; opacity:0.6;">Learn about the developer</div>
                            </div>
                            <button class="store-btn" onclick="window.openWindow('dev')">VIEW</button>
                        </div>
                    </div>
                </div>`
        },
        'mail': {
            title: 'Mail',
            width: '800px',
            height: '500px',
            content: `
                <div class="app-container">
                    <div class="app-sidebar">
                        <div class="sidebar-title">Mailboxes</div>
                        <div class="sidebar-link active">📥 Inbox (12)</div>
                        <div class="sidebar-link">📤 Sent</div>
                        <div class="sidebar-link">🗑️ Trash</div>
                    </div>
                    <div class="app-content" style="background:#2c2c2e; padding:0;">
                        <div style="border-bottom:0.5px solid #444; padding:15px;">
                            <div style="font-weight:600;">Welcome to Max OS 2.0</div>
                            <div style="font-size:12px; opacity:0.6; margin-top:5px;">From: Apple Support</div>
                        </div>
                        <div style="padding:20px; font-size:14px; line-height:1.6;">
                            Dear User,<br><br>
                            Welcome to the future of Max OS. Version 2.0 brings incredible speed and new design choices.<br><br>
                            Best regards,<br>
                            The Max Team.
                        </div>
                    </div>
                </div>`
        },
        'messages': {
            title: 'Messages',
            width: '800px',
            height: '550px',
            content: `
                <div class="app-container">
                    <div class="app-sidebar" style="width:250px;">
                        <div class="sidebar-searchbox" style="padding:15px;">
                            <input type="text" placeholder="Search" style="width:100%; border-radius:8px; background:rgba(255,255,255,0.05); border:0.5px solid rgba(255,255,255,0.1); padding:6px; color:white;">
                        </div>
                        <div class="sidebar-link active" style="padding:15px; display:flex; gap:12px; align-items:center;">
                            <div style="width:45px; height:45px; border-radius:50%; background:linear-gradient(45deg, #ff9f0a, #ff3b30); display:flex; align-items:center; justify-content:center; font-size:20px;">🍎</div>
                            <div style="flex:1;">
                                <div style="font-weight:600; font-size:14px;">Apple Support</div>
                                <div style="font-size:12px; opacity:0.6; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">Your update is ready...</div>
                            </div>
                        </div>
                        <div class="sidebar-link" style="padding:15px; display:flex; gap:12px; align-items:center;">
                            <div style="width:45px; height:45px; border-radius:50%; background:linear-gradient(45deg, #5ac8fa, #007aff); display:flex; align-items:center; justify-content:center; font-size:20px;">👤</div>
                            <div style="flex:1;">
                                <div style="font-weight:600; font-size:14px;">nay</div>
                                <div style="font-size:12px; opacity:0.6;">Check out the new UI!</div>
                            </div>
                        </div>
                    </div>
                    <div class="app-content chat-container" style="background:#1e1e1e;">
                        <div style="flex:1; padding:20px; display:flex; flex-direction:column; gap:10px; overflow-y:auto;">
                            <div class="chat-bubble chat-received">Hey! Did you see the new update?</div>
                            <div class="chat-bubble chat-sent">Yeah, it looks amazing! Very smooth.</div>
                            <div class="chat-bubble chat-received">I love the new icons.</div>
                            <div class="chat-bubble chat-sent">Specially the dock wave effect.</div>
                        </div>
                        <div style="padding:20px; border-top:0.5px solid rgba(255,255,255,0.1);">
                            <input type="text" placeholder="iMessage" style="width:100%; border-radius:20px; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); padding:10px 20px; color:white; outline:none;">
                        </div>
                    </div>
                </div>`
        },
        'github': {
            title: 'GitHub - nay',
            width: '900px',
            height: '600px',
            content: `
                <div class="app-container" style="background:#0d1117; color:#c9d1d9;">
                    <div class="app-sidebar" style="width:240px; background:#0d1117; border-right:1px solid #30363d; padding:20px;">
                        <img src="https://i.imgflip.com/4/30zz5g.png" style="width:100%; border-radius:50%; border:1px solid #30363d; margin-bottom:15px;">
                        <div style="font-size:20px; font-weight:600; color:#f0f6fc;">nay</div>
                        <div style="font-size:14px; color:#8b949e; margin-bottom:20px;">ninekigean</div>
                        <button style="width:100%; background:#21262d; border:1px solid #30363d; color:#c9d1d9; padding:5px; border-radius:6px; font-size:12px; font-weight:500; cursor:pointer; margin-bottom:20px;">Edit profile</button>
                        <div style="font-size:12px; color:#8b949e;">
                            <div style="margin-bottom:8px;">📍 Thailand</div>
                            <div style="margin-bottom:8px;">🔗 <a href="#" style="color:#58a6ff; text-decoration:none;">github.com/nay</a></div>
                        </div>
                    </div>
                    <div class="app-content" style="background:#0d1117; padding:20px;">
                        <div style="display:flex; border-bottom:1px solid #30363d; margin-bottom:20px; gap:20px; padding-bottom:10px;">
                            <div style="border-bottom:2px solid #f78166; padding-bottom:10px; cursor:pointer;">📖 Overview</div>
                            <div style="padding-bottom:10px; opacity:0.6; cursor:pointer;">📦 Repositories <span style="background:#30363d; padding:2px 8px; border-radius:10px; font-size:11px;">12</span></div>
                            <div style="padding-bottom:10px; opacity:0.6; cursor:pointer;">🚀 Projects</div>
                        </div>
                        
                        <h4 style="margin-bottom:15px;">Popular repositories</h4>
                        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:15px; margin-bottom:30px;">
                            <div style="border:1px solid #30363d; border-radius:6px; padding:15px; background:transparent;">
                                <div style="color:#58a6ff; font-weight:600; margin-bottom:8px;">Max OS 2</div>
                                <div style="font-size:12px; color:#8b949e; margin-bottom:15px;">A high-fidelity macOS web simulation built with HTML/CSS/JS.</div>
                                <div style="display:flex; align-items:center; gap:15px; font-size:12px; color:#8b949e;">
                                    <span>🟡 JavaScript</span>
                                    <span>⭐ 1.2k</span>
                                </div>
                            </div>
                            <div style="border:1px solid #30363d; border-radius:6px; padding:15px; background:transparent;">
                                <div style="color:#58a6ff; font-weight:600; margin-bottom:8px;">Antigravity-Security</div>
                                <div style="font-size:12px; color:#8b949e; margin-bottom:15px;">Advanced security suite for agentic AI applications.</div>
                                <div style="display:flex; align-items:center; gap:15px; font-size:12px; color:#8b949e;">
                                    <span>🔵 TypeScript</span>
                                    <span>⭐ 850</span>
                                </div>
                            </div>
                        </div>

                        <h4 style="margin-bottom:15px;">457 contributions in the last year</h4>
                        <div style="border:1px solid #30363d; border-radius:6px; padding:15px; overflow-x:auto;">
                            <div style="display:grid; grid-template-columns: repeat(50, 1fr); gap:3px;">
                                <!-- Simple generated grid for demo -->
                                ${Array(250).fill(0).map(() => {
                                    const colors = ['#161b22', '#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'];
                                    const color = colors[Math.floor(Math.random() * colors.length)];
                                    return `<div style="width:10px; height:10px; background:${color}; border-radius:2px;"></div>`;
                                }).join('')}
                            </div>
                        </div>
                    </div>
                </div>`
        },
        'antigravity': {
            title: 'Antigravity Pro',
            width: '600px',
            height: '400px',
            content: `
                <div style="height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; background:linear-gradient(45deg, #007aff, #5ac8fa);">
                    <div style="font-size:60px; animation: bounce 2s infinite ease-in-out;">🛡️</div>
                    <h2 style="margin-top:20px;">Gravity Shield: ON</h2>
                    <p style="opacity:0.8;">Protecting your system from the void.</p>
                </div>`
        },
        'dev': {
            title: 'About nay',
            width: '500px',
            height: '420px',
            content: `
                <div style="padding:30px; text-align:center;">
                    <h1 style="margin-top:0; color: var(--apple-blue);">nay</h1>
                    <p style="opacity:0.6; margin-bottom:20px;">Thai Developer 🇹🇭</p>
                    <div style="text-align:left; background:rgba(255,255,255,0.05); padding:20px; border-radius:15px; border: 0.5px solid rgba(255,255,255,0.1);">
                        <div style="font-weight:600; margin-bottom:15px; font-size:16px; border-bottom: 0.5px solid rgba(255,255,255,0.1); padding-bottom:10px;">🚀 ประวัติและผลงาน (5 อัน)</div>
                        <div style="margin-bottom:10px; display:flex; align-items:center; gap:10px;">
                            <span style="font-size:20px;">💻</span>
                            <div>
                                <div style="font-weight:500;">MaxOS Web Version</div>
                                <div style="font-size:11px; opacity:0.5;">ระบบปฏิบัติการบนหน้าเว็บสุดลื่นไหล</div>
                            </div>
                        </div>
                        <div style="margin-bottom:10px; display:flex; align-items:center; gap:10px;">
                            <span style="font-size:20px;">⚡</span>
                            <div>
                                <div style="font-weight:500;">Thai E-commerce API</div>
                                <div style="font-size:11px; opacity:0.5;">ระบบจัดการร้านค้าออนไลน์สำหรับคนไทย</div>
                            </div>
                        </div>
                        <div style="margin-bottom:10px; display:flex; align-items:center; gap:10px;">
                            <span style="font-size:20px;">🛡️</span>
                            <div>
                                <div style="font-weight:500;">Antigravity Security Suite</div>
                                <div style="font-size:11px; opacity:0.5;">เครื่องมือรักษาความปลอดภัยขั้นสูง</div>
                            </div>
                        </div>
                        <div style="margin-bottom:10px; display:flex; align-items:center; gap:10px;">
                            <span style="font-size:20px;">📱</span>
                            <div>
                                <div style="font-weight:500;">Thailand Travel App</div>
                                <div style="font-size:11px; opacity:0.5;">แอปพลิเคชันนำเที่ยวทั่วไทย</div>
                            </div>
                        </div>
                        <div style="display:flex; align-items:center; gap:10px;">
                            <span style="font-size:20px;">📊</span>
                            <div>
                                <div style="font-weight:500;">Stock Tracker TH</div>
                                <div style="font-size:11px; opacity:0.5;">ระบบติดตามหุ้นไทยแบบ Real-time</div>
                            </div>
                        </div>
                    </div>
                </div>`
        },
        'safari': {
            title: 'Safari',
            width: '1000px',
            height: '650px',
            content: `
                <div style="display:flex; flex-direction:column; height:100%; background:#1e1e1e;">
                    <div style="padding:10px 15px; background:rgba(255,255,255,0.05); border-bottom:0.5px solid rgba(255,255,255,0.1); display:flex; align-items:center; gap:15px;">
                        <div style="display:flex; gap:10px; font-size:18px; opacity:0.6;"><span>◀</span><span>▶</span></div>
                        <div style="flex:1; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); border-radius:8px; padding:5px 15px; text-align:center; font-size:13px; color:rgba(255,255,255,0.6);">
                            🔍 Search or enter website name
                        </div>
                        <div style="font-size:18px; opacity:0.6;"><span>↻</span></div>
                    </div>
                    <iframe src="https://www.wikipedia.org" style="flex:1; border:none; width:100%; height:100%;"></iframe>
                </div>`
        },
        'mail': {
            title: 'Mail',
            width: '700px',
            height: '500px',
            content: `<div style="display:flex; height:100%; align-items:center; justify-content:center; color: #888; flex-direction: column;">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Mail_%28iOS%29.svg" width="80" style="opacity: 0.5; margin-bottom: 15px;">
                        <span>No New Messages</span>
                      </div>`
        },
        'messages': {
            title: 'Messages',
            content: `<div style="display:flex; height:100%; align-items:center; justify-content:center; color: #888;">No conversations selected</div>`
        },
        'facetime': {
            title: 'FaceTime',
            width: '800px',
            height: '500px',
            content: `
                <div style="background: #1c1c1e; height: 100%; display: flex; flex-direction: column; overflow: hidden; position: relative;">
                    <div style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); text-align:center;">
                         <div style="width: 120px; height: 120px; background: #333; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; font-size: 60px; box-shadow: 0 0 50px rgba(0,0,0,0.5);">👤</div>
                         <h2 style="font-weight:600; font-size:24px;">Max User</h2>
                         <p style="opacity:0.5; font-size:14px; margin-top:5px;">Connecting to Camera...</p>
                    </div>
                    <div style="position:absolute; bottom:30px; left:50%; transform:translateX(-50%); display:flex; gap:20px;">
                        <div style="width:50px; height:50px; border-radius:50%; background:rgba(255,255,255,0.1); backdrop-filter:blur(20px); display:flex; align-items:center; justify-content:center; cursor:pointer; font-size:20px;">🎙️</div>
                        <div style="width:50px; height:50px; border-radius:50%; background:#ff3b30; display:flex; align-items:center; justify-content:center; cursor:pointer; font-size:20px;">📴</div>
                        <div style="width:50px; height:50px; border-radius:50%; background:rgba(255,255,255,0.1); backdrop-filter:blur(20px); display:flex; align-items:center; justify-content:center; cursor:pointer; font-size:20px;">📹</div>
                    </div>
                </div>`
        },
        'calendar': {
            title: 'Calendar',
            width: '850px',
            height: '600px',
            content: `
                <div class="app-container">
                    <div class="app-sidebar" style="width:200px;">
                        <div class="sidebar-title">Calendars</div>
                        <div class="sidebar-link active"><span style="color:#ff3b30;">●</span> Personal</div>
                        <div class="sidebar-link"><span style="color:#007aff;">●</span> Work</div>
                        <div class="sidebar-link"><span style="color:#30d158;">●</span> Thai Holidays</div>
                    </div>
                    <div class="app-content" style="padding:0; background:#1e1e1e; display:flex; flex-direction:column;">
                        <div style="padding:15px 30px; font-size:24px; font-weight:700; display:flex; justify-content:space-between; align-items:center;">
                            <span>${new Date().toLocaleString('en-US', { month: 'long', year: 'numeric' })}</span>
                            <div style="display:flex; gap:5px;"><button class="store-btn">◀</button><button class="store-btn">Today</button><button class="store-btn">▶</button></div>
                        </div>
                        <div style="display:grid; grid-template-columns: repeat(7, 1fr); border-top:0.5px solid rgba(255,255,255,0.1); flex:1;">
                            ${['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(h => `<div style="text-align:center; padding:10px; font-size:11px; opacity:0.4; border-right:0.5px solid rgba(255,255,255,0.05);">${h}</div>`).join('')}
                            ${Array(31).fill(0).map((_, i) => {
                                const isToday = i + 1 === new Date().getDate();
                                return `<div style="padding:10px; border-top:0.5px solid rgba(255,255,255,0.05); border-right:0.5px solid rgba(255,255,255,0.05); min-height:80px; position:relative;">
                                    <span style="${isToday ? 'background:#ff3b30; color:white; width:22px; height:22px; border-radius:50%; display:flex; align-items:center; justify-content:center;' : 'opacity:0.6;'}">${i + 1}</span>
                                </div>`;
                            }).join('')}
                        </div>
                    </div>
                </div>`
        },
        'note': {
            title: 'Notes',
            width: '700px',
            height: '450px',
            content: `
                <div class="app-container">
                    <div class="app-sidebar" style="width:200px; background:rgba(255,255,255,0.03);">
                        <div class="sidebar-title">On My Max</div>
                        <div class="sidebar-link active">📝 Project Ideas</div>
                        <div class="sidebar-link">📝 Grocery List</div>
                        <div class="sidebar-link">📝 Book Notes</div>
                    </div>
                    <div class="app-content" style="padding:0; background:#1e1e1e; display:flex; flex-direction:column;">
                        <textarea id="notepad-area" placeholder="Start typing..." 
                            style="flex:1; width: 100%; background: transparent; color: white; border: none; padding: 30px; outline: none; resize: none; font-size: 16px; font-family: 'Inter', sans-serif; line-height:1.6;"></textarea>
                    </div>
                </div>`
        },
        'calc': {
            title: 'Calculator',
            width: '320px',
            height: '450px',
            content: `<div class="calculator-app" style="height: 100%; display: flex; flex-direction: column;">
                        <input type="text" id="calc-display" readonly value="0" style="width: 100%; background: transparent; border: none; font-size: 40px; color: white; text-align: right; padding: 10px; margin-bottom: 10px;">
                        <div class="calc-grid" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; flex: 1;">
                            <button onclick="window.calcClear()">AC</button>
                            <button onclick="window.calcOp('/')">÷</button>
                            <button onclick="window.calcOp('*')">×</button>
                            <button class="orange" onclick="window.calcOp('-')">−</button>
                            <button onclick="window.calcNum('7')">7</button>
                            <button onclick="window.calcNum('8')">8</button>
                            <button onclick="window.calcNum('9')">9</button>
                            <button class="orange" onclick="window.calcOp('+')">+</button>
                            <button onclick="window.calcNum('4')">4</button>
                            <button onclick="window.calcNum('5')">5</button>
                            <button onclick="window.calcNum('6')">6</button>
                            <button class="orange" onclick="window.calcEquals()">=</button>
                            <button onclick="window.calcNum('1')">1</button>
                            <button onclick="window.calcNum('2')">2</button>
                            <button onclick="window.calcNum('3')">3</button>
                            <button onclick="window.calcNum('0')">0</button>
                        </div>
                      </div>`
        },
        'music': {
            title: 'Music',
            width: '900px',
            height: '600px',
            content: `
                <div class="app-container">
                    <div class="app-sidebar" style="width:200px;">
                        <div class="sidebar-title">Apple Music</div>
                        <div class="sidebar-link active">📻 Listen Now</div>
                        <div class="sidebar-link">🧭 Browse</div>
                        <div class="sidebar-link">📡 Radio</div>
                        <div class="sidebar-title">Library</div>
                        <div class="sidebar-link">🕒 Recently Added</div>
                        <div class="sidebar-link">👨‍🎤 Artists</div>
                        <div class="sidebar-link">💿 Albums</div>
                        <div class="sidebar-link">🎵 Songs</div>
                    </div>
                    <div class="app-content" style="background:#1e1e1e; display:flex; flex-direction:column; align-items:center; justify-content:center;">
                        <img src="https://cdn.jim-nielsen.com/macos/1024/music-2025-11-13.png?rf=1024" width="120" style="margin-bottom:20px; filter:drop-shadow(0 0 20px rgba(255,45,85,0.3));">
                        <h2 style="font-weight:600;">Listen to your favorite music</h2>
                        <p style="opacity:0.5; margin-top:10px;">Select a song from your library to start listening.</p>
                        <div style="margin-top:30px; display:flex; gap:15px;">
                             <button class="store-btn" style="background:var(--apple-blue);">Join Apple Music</button>
                             <button class="store-btn">Browse Songs</button>
                        </div>
                    </div>
                </div>`
        },
        'photos': {
            title: 'Photos',
            width: '950px',
            height: '650px',
            content: `
                <div class="app-container">
                    <div class="app-sidebar" style="width:200px;">
                        <div class="sidebar-title">Photos</div>
                        <div class="sidebar-link active">🖼️ Library</div>
                        <div class="sidebar-link">🌟 Featured</div>
                        <div class="sidebar-link">👨‍👩‍👧 Shared</div>
                        <div class="sidebar-title">Albums</div>
                        <div class="sidebar-link">📁 My Albums</div>
                        <div class="sidebar-link">📍 Places</div>
                    </div>
                    <div class="app-content" style="background:#000; padding:20px;">
                        <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap:10px;">
                            ${Array(12).fill(0).map((_, i) => `<div style="aspect-ratio:1; background:url('https://picsum.photos/300/300?random=${i}') center/cover; border-radius:4px; cursor:pointer;" onclick="this.style.transform='scale(1.1)'; setTimeout(()=>this.style.transform='scale(1)', 200);"></div>`).join('')}
                        </div>
                    </div>
                </div>`
        },
        'maps': {
            title: 'Maps',
            width: '900px',
            height: '600px',
            content: `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15501.954200424683!2d100.523186!3d13.736717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sth!4v1700000000000!5m2!1sen!2sth" style="width:100%; height:100%; border:none;"></iframe>`
        },
        'terminal': {
            title: 'Terminal',
            width: '700px',
            height: '450px',
            content: `
                <div class="terminal-container" style="background:#1c1c1e; height:100%; padding:20px; font-family:'JetBrains Mono', monospace; font-size:13px; color:#32d74b;">
                    <div style="opacity:0.6; margin-bottom:10px;">Last login: ${new Date().toLocaleString()} on ttys000</div>
                    <div>max@MacOS-2 ~ % <span class="calc-cursor">_</span></div>
                </div>`
        },
        'contacts': {
            title: 'Contacts',
            width: '600px',
            height: '450px',
            content: `<div style="display:flex; height:100%; align-items:center; justify-content:center; color: #888; flex-direction: column;">
                        <img src="https://cdn.jim-nielsen.com/macos/1024/contacts-2025-11-13.png?rf=1024" width="80" style="opacity: 0.5; margin-bottom: 15px;">
                        <span>No Contacts Yet</span>
                      </div>`
        },
        'reminders': {
            title: 'Reminders',
            width: '600px',
            height: '450px',
            content: `<div style="display:flex; height:100%; align-items:center; justify-content:center; color: #888; flex-direction: column;">
                        <img src="https://cdn.jim-nielsen.com/macos/1024/reminders-2025-11-13.png?rf=1024" width="80" style="opacity: 0.5; margin-bottom: 15px;">
                        <span>No Reminders</span>
                      </div>`
        },
        'dictionary': {
            title: 'Dictionary',
            width: '600px',
            height: '450px',
            content: `<div style="display:flex; height:100%; align-items:center; justify-content:center; color: #888; flex-direction: column;">
                        <img src="https://cdn.jim-nielsen.com/macos/1024/dictionary-2025-11-13.png?rf=1024" width="80" style="opacity: 0.5; margin-bottom: 15px;">
                        <span>No words selected</span>
                      </div>`
        },
        'home': {
            title: 'Home',
            width: '800px',
            height: '550px',
            content: `<div style="display:flex; height:100%; align-items:center; justify-content:center; color: #888; flex-direction: column;">
                        <img src="https://cdn.jim-nielsen.com/macos/1024/home-2025-11-13.png?rf=1024" width="80" style="opacity: 0.5; margin-bottom: 15px;">
                        <span>No Accessories Added</span>
                      </div>`
        },
        'books': {
            title: 'Books',
            width: '850px',
            height: '600px',
            content: `<div style="display:flex; height:100%; align-items:center; justify-content:center; color: #888; flex-direction: column;">
                        <img src="https://cdn.jim-nielsen.com/macos/1024/books-2025-11-13.png?rf=1024" width="80" style="opacity: 0.5; margin-bottom: 15px;">
                        <span>No Books Found</span>
                      </div>`
        },
        'pages': {
            title: 'Pages',
            width: '900px',
            height: '650px',
            content: `<div style="display:flex; height:100%; align-items:center; justify-content:center; color: #888; flex-direction: column;">
                        <img src="https://cdn.jim-nielsen.com/macos/1024/pages-2025-11-13.png?rf=1024" width="80" style="opacity: 0.5; margin-bottom: 15px;">
                        <span>No Documents Created</span>
                      </div>`
        },
        'siri': {
            title: 'Siri',
            width: '350px',
            height: '150px',
            content: `
                <div style="height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; background:rgba(0,0,0,0.8); backdrop-filter:blur(20px);">
                    <div style="font-size:30px; animation: pulse 2s infinite;">💬</div>
                    <span style="font-size:12px; margin-top:10px; opacity:0.8;">"What can I help you with?"</span>
                </div>`
        },
        'podcasts': {
            title: 'Podcasts',
            width: '900px',
            height: '600px',
            content: `<div style="display:flex; height:100%; align-items:center; justify-content:center; color: #888; flex-direction: column;">
                        <img src="https://cdn.jim-nielsen.com/macos/1024/podcasts-2025-11-13.png?rf=1024" width="80" style="opacity: 0.5; margin-bottom: 15px;">
                        <span>No Podcasts Found</span>
                      </div>`
        },
        'activity-monitor': {
            title: 'Activity Monitor',
            width: '800px',
            height: '500px',
            content: `<div style="display:flex; height:100%; align-items:center; justify-content:center; color: #888; flex-direction: column;">
                        <img src="https://cdn.jim-nielsen.com/macos/1024/activity-monitor-2025-11-13.png?rf=1024" width="80" style="opacity: 0.5; margin-bottom: 15px;">
                        <span>CPU: 2% | Memory: 4.2GB</span>
                      </div>`
        },
        'zoom': {
            title: 'Zoom',
            width: '800px',
            height: '550px',
            content: `<div style="display:flex; height:100%; align-items:center; justify-content:center; color: #888; flex-direction: column; background:#242424;">
                        <img src="https://cdn.jim-nielsen.com/macos/1024/zoom-2025-11-13.png?rf=1024" width="100" style="margin-bottom: 20px;">
                        <button class="store-btn" style="background:#0b5fff; width:200px; margin-bottom:10px;">New Meeting</button>
                        <button class="store-btn" style="width:200px;">Join Meeting</button>
                      </div>`
        },
        'about': {
            title: 'System Settings',
            width: '750px',
            height: '500px',
            content: `
            <div class="settings-layout">
                <!-- Sidebar -->
                <div class="settings-sidebar">
                    <div class="sidebar-searchbox" style="padding-bottom:10px;">
                        <input type="text" placeholder="Search" class="sidebar-search" style="margin-bottom:0;">
                    </div>
                    <div class="sidebar-profile" onclick="window.openSettingsTab(this, 'profile')">
                        <div style="width: 38px; height: 38px; border-radius: 50%; background: #999; overflow:hidden; cursor:pointer;" onclick="event.stopPropagation(); window.triggerProfileUpload();">
                            <img id="profile-sidebar-img" src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" style="width:100%; height:100%; object-fit:cover;">
                        </div>
                        <div style="display:flex; flex-direction:column; justify-content:center;">
                            <span style="font-size:13px; font-weight:600;">Max User</span>
                            <span style="font-size:11px; opacity:0.6;">Max ID</span>
                        </div>
                    </div>
                    
                    <div style="height:10px;"></div>

                    <div class="sidebar-item" onclick="window.openSettingsTab(this, 'wifi')"><div class="sidebar-icon" style="background:#007aff;">📶</div> Wi-Fi</div>
                    <div class="sidebar-item" onclick="window.openSettingsTab(this, 'bluetooth')"><div class="sidebar-icon" style="background:#007aff;">🔵</div> Bluetooth</div>
                    <div class="sidebar-item" onclick="window.openSettingsTab(this, 'network')"><div class="sidebar-icon" style="background:#007aff;">🌐</div> Network</div>
                    
                    <div style="height:10px;"></div>

                    <div class="sidebar-item active" onclick="window.openSettingsTab(this, 'general')"><div class="sidebar-icon" style="background:#8e8e93;">⚙️</div> General</div>
                    <div class="sidebar-item" onclick="window.openSettingsTab(this, 'appearance')"><div class="sidebar-icon" style="background:#007aff;">👁️</div> Appearance</div>
                    <div class="sidebar-item" onclick="window.openSettingsTab(this, 'cc')"><div class="sidebar-icon" style="background:#5ac8fa;">🕹️</div> Control Center</div>
                    <div class="sidebar-item" onclick="window.openSettingsTab(this, 'battery')"><div class="sidebar-icon" style="background:#32d74b;">🔋</div> Battery</div>
                </div>

                <!-- Content Area -->
                <div class="settings-content-pane">
                    
                    <!-- Profile Panel -->
                    <div id="tab-profile" class="settings-panel">
                        <div class="settings-header">Max ID</div>
                        
                        <div style="display:flex; flex-direction:column; align-items:center; margin-bottom:30px; margin-top:10px;">
                            <div style="width: 80px; height: 80px; border-radius: 50%; background: #999; overflow:hidden; margin-bottom:10px; border: 4px solid rgba(255,255,255,0.1); cursor:pointer; position:relative;" onclick="window.triggerProfileUpload()">
                                <img id="profile-main-img" src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" style="width:100%; height:100%; object-fit:cover;">
                                <div style="position:absolute; bottom:0; width:100%; background:rgba(0,0,0,0.5); color:white; font-size:9px; text-align:center; padding:2px 0;">EDIT</div>
                            </div>
                            <span id="profile-display-name" style="font-size:18px; font-weight:600;">Max User</span>
                            <span id="profile-display-email" style="font-size:13px; opacity:0.6;">maxuser@maxos.com</span>
                            <input type="file" id="profile-upload-input" style="display:none;" accept="image/*" onchange="window.handleProfileUpload(this)">
                        </div>

                        <div style="font-size:11px; color:#aaa; margin-left:10px; margin-bottom:10px;">SIGN UP</div>
                        <div class="settings-group">
                            <form name="contact" onsubmit="window.updateProfile(event, this)" style="padding: 15px;">
                                <div style="margin-bottom: 15px;">
                                    <label style="display:block; font-size:12px; margin-bottom:5px; opacity:0.8;">Name</label>
                                    <input type="text" name="name" id="reg-name" placeholder="Your Name" required
                                           oninput="window.syncFakeEmail(this)"
                                           style="width:100%; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); border-radius:6px; padding:8px 12px; color:white; outline:none; font-size:13px;">
                                </div>
                                <div style="margin-bottom: 20px;">
                                    <label style="display:block; font-size:12px; margin-bottom:5px; opacity:0.8;">Fake Email (Preview)</label>
                                    <input type="email" name="email" id="reg-email" placeholder="example@maxos.com" 
                                           style="width:100%; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); border-radius:6px; padding:8px 12px; color:white; outline:none; font-size:13px;" readonly>
                                </div>
                                <button type="submit" class="btn-primary" style="width:100%; padding:10px; border-radius:8px; font-weight:500;">Sign Up</button>
                            </form>
                        </div>
                    </div>
                    
                    <!-- Wi-Fi Panel -->
                    <div id="tab-wifi" class="settings-panel">
                        <div class="settings-header">Wi-Fi</div>
                        <div class="settings-group">
                            <div class="setting-row">
                                <div class="row-left"><span style="font-weight:500;">Wi-Fi</span></div>
                                <div class="row-right">
                                    <div class="toggle-switch checked" onclick="window.toggleSettings(this)"></div>
                                </div>
                            </div>
                        </div>
                        <div style="font-size:11px; color:#aaa; margin-left:10px; margin-bottom:10px;">KNOWN NETWORKS</div>
                        <div class="settings-group">
                             <div class="setting-row clickable">
                                <div class="row-left">
                                    <span style="font-weight:500;">Max_5G_Ultra</span>
                                    <span style="font-size:10px; background:#30d158; color:black; padding:1px 4px; border-radius:3px;">Connected</span>
                                </div>
                                <div class="row-right">🔒</div>
                            </div>
                            <div class="setting-row clickable">
                                <div class="row-left"><span>Starlink_Global</span></div>
                                <div class="row-right">🔒</div>
                            </div>
                        </div>
                    </div>

                    <!-- Bluetooth Panel -->
                    <div id="tab-bluetooth" class="settings-panel">
                        <div class="settings-header">Bluetooth</div>
                        <div class="settings-group">
                            <div class="setting-row">
                                <div class="row-left"><span style="font-weight:500;">Bluetooth</span></div>
                                <div class="row-right">
                                    <div class="toggle-switch checked" onclick="window.toggleSettings(this)"></div>
                                </div>
                            </div>
                        </div>
                        <div style="font-size:11px; color:#aaa; margin-left:10px; margin-bottom:10px;">MY DEVICES</div>
                        <div class="settings-group">
                             <div class="setting-row clickable">
                                <div class="row-left"><span>AirPods Pro</span></div>
                                <div class="row-right">Not Connected</div>
                            </div>
                            <div class="setting-row clickable">
                                <div class="row-left"><span>Magic Keyboard</span></div>
                                <div class="row-right">Connected</div>
                            </div>
                             <div class="setting-row clickable">
                                <div class="row-left"><span>Magic Trackpad</span></div>
                                <div class="row-right">Connected</div>
                            </div>
                        </div>
                    </div>

                    <!-- Network Panel -->
                    <div id="tab-network" class="settings-panel">
                        <div class="settings-header">Network</div>
                         <div class="settings-group">
                            <div class="setting-row">
                                <div class="row-left"><span style="font-weight:500;">Status</span></div>
                                <div class="row-right"><span style="color:#30d158;">Connected</span></div>
                            </div>
                         </div>
                    </div>

                    <!-- General Panel (Default) -->
                    <div id="tab-general" class="settings-panel active">
                        <div class="settings-header">General</div>
                        <div class="settings-group">
                            <div class="setting-row clickable" onclick="window.openWindow('about-dialog')"> <!-- Fake inner dialog -->
                                <div class="row-left"><span style="font-weight:500;">About</span></div>
                                <div class="row-right">Max OS 2.0 <span style="font-size:12px;">›</span></div>
                            </div>
                            <div class="setting-row clickable" onclick="window.openWindow('update')">
                                <div class="row-left"><span style="font-weight:500;">Software Update</span></div>
                                <div class="row-right"><span style="background:#ff3b30; color:white; font-size:10px; padding:2px 6px; border-radius:10px; margin-right:5px;">1 Update</span> <span style="font-size:12px;">›</span></div>
                            </div>
                            <div class="setting-row clickable">
                                <div class="row-left"><span style="font-weight:500;">Storage</span></div>
                                <div class="row-right"><span style="font-size:12px;">›</span></div>
                            </div>
                        </div>
                        <div class="settings-group">
                             <div class="setting-row">
                                <div class="row-left"><span style="font-weight:500;">AirDrop</span></div>
                                <div class="row-right">Contacts Only <span style="font-size:12px;">›</span></div>
                            </div>
                             <div class="setting-row">
                                <div class="row-left"><span style="font-weight:500;">AirPlay & Handoff</span></div>
                                <div class="row-right"><span style="font-size:12px;">›</span></div>
                            </div>
                        </div>
                    </div>

                    <!-- Appearance Panel -->
                    <div id="tab-appearance" class="settings-panel">
                        <div class="settings-header">Appearance</div>
                        <div class="settings-header" style="font-size:14px; margin-bottom:10px;">Theme</div>
                        <div class="settings-group" style="padding:15px; display:flex; justify-content:space-around;">
                            <div style="text-align:center; cursor:pointer;" onclick="console.log('Light Mode')">
                                 <div style="width:60px; height:40px; background:#e5e5e5; border-radius:5px; margin-bottom:5px; border:2px solid transparent;"></div>
                                 <span style="font-size:11px;">Light</span>
                            </div>
                            <div style="text-align:center; cursor:pointer;">
                                 <div style="width:60px; height:40px; background:#333; border-radius:5px; margin-bottom:5px; border:2px solid #007aff;"></div>
                                 <span style="font-size:11px;">Dark</span>
                            </div>
                             <div style="text-align:center; cursor:pointer;">
                                 <div style="width:60px; height:40px; background:linear-gradient(to right, #e5e5e5 50%, #333 50%); border-radius:5px; margin-bottom:5px; border:2px solid transparent;"></div>
                                 <span style="font-size:11px;">Auto</span>
                            </div>
                        </div>
                         <div class="settings-header" style="font-size:14px; margin-bottom:10px;">Accent Color</div>
                         <div class="settings-group" style="padding:10px; display:flex; gap:10px; justify-content:center;">
                            <div style="width:20px; height:20px; border-radius:50%; background:#007aff; box-shadow:0 0 0 2px white;"></div>
                            <div style="width:20px; height:20px; border-radius:50%; background:#a2845e;"></div>
                            <div style="width:20px; height:20px; border-radius:50%; background:#ff3b30;"></div>
                            <div style="width:20px; height:20px; border-radius:50%; background:#ff9f0a;"></div>
                            <div style="width:20px; height:20px; border-radius:50%; background:#30d158;"></div>
                            <div style="width:20px; height:20px; border-radius:50%; background:#bf5af2;"></div>
                         </div>
                    </div>

                    <!-- Control Center Panel -->
                    <div id="tab-cc" class="settings-panel">
                        <div class="settings-header">Control Center</div>
                         <div class="settings-group">
                             <div class="setting-row">
                                <div class="row-left"><span style="font-weight:500;">Wi-Fi</span></div>
                                <div class="row-right"><div class="toggle-switch checked" onclick="window.toggleSettings(this)"></div></div>
                            </div>
                            <div class="setting-row">
                                <div class="row-left"><span style="font-weight:500;">Bluetooth</span></div>
                                <div class="row-right"><div class="toggle-switch checked" onclick="window.toggleSettings(this)"></div></div>
                            </div>
                             <div class="setting-row">
                                <div class="row-left"><span style="font-weight:500;">AirDrop</span></div>
                                <div class="row-right"><div class="toggle-switch checked" onclick="window.toggleSettings(this)"></div></div>
                            </div>
                        </div>
                    </div>

                    <!-- Battery Panel -->
                    <div id="tab-battery" class="settings-panel">
                        <div class="settings-header">Battery</div>
                         <div class="settings-group" style="padding:20px; text-align:center;">
                             <svg width="100" height="50" viewBox="0 0 100 50">
                                <rect x="0" y="0" width="90" height="50" rx="5" ry="5" fill="#333" stroke="#555" stroke-width="2"/>
                                <rect x="92" y="15" width="6" height="20" rx="2" ry="2" fill="#555"/>
                                <rect x="5" y="5" width="70" height="40" rx="3" ry="3" fill="#30d158"/>
                                <text x="45" y="30" fill="white" font-size="14" text-anchor="middle" alignment-baseline="middle" font-weight="bold">85%</text>
                             </svg>
                             <div style="margin-top:10px; font-size:12px; color:#aaa;">Last charged to 100% 2 hours ago</div>
                        </div>
                        <div class="settings-group">
                             <div class="setting-row">
                                <div class="row-left"><span style="font-weight:500;">Low Power Mode</span></div>
                                <div class="row-right"><div class="toggle-switch" onclick="window.toggleSettings(this)"></div></div>
                            </div>
                             <div class="setting-row">
                                <div class="row-left"><span style="font-weight:500;">Battery Health</span></div>
                                <div class="row-right">Normal (100%) <span style="font-size:12px;">›</span></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            `
        },
        'update': {
            title: 'Software Update',
            width: '500px',
            height: '400px',
            content: `
            <div style="padding: 30px; display: flex; flex-direction: column; height: 100%; justify-content: center; align-items: center; text-align: center;">
                <div style="font-size: 50px; margin-bottom: 20px;">⚙️</div>
                <h2 style="margin-bottom: 10px;">Max OS 2.0 <span style="font-weight: 300; opacity: 0.6;">Release</span></h2>
                <p style="font-size: 13px; color: rgba(255,255,255,0.7); max-width: 300px;">
                    This update includes over 50 new features, including Stage Manager, refined Glassmorphism, and critical security patches.
                </p>
                <div id="update-status" style="width: 100%;">
                    <button class="btn-primary" style="margin-top: 20px; padding: 10px 30px;" onclick="window.startUpdate()">Update Now</button>
                    <p style="font-size: 11px; margin-top: 10px; opacity: 0.5;">Size: 2.4 GB</p>
                </div>
                <div id="update-progress-area" style="width: 100%; display: none;">
                    <div class="progress-container"><div id="update-progress" class="progress-bar"></div></div>
                    <p id="update-text" style="font-size: 12px; margin-bottom: 10px;">Preparing update...</p>
                    <div id="update-log" class="update-log text-left"></div>
                </div>
            </div>
            `
        },
        'trash': {
            title: 'Trash',
            width: '800px',
            height: '500px',
            content: `
                <div class="app-container">
                    <div class="app-sidebar" style="width:180px; background:rgba(255,255,255,0.05); border-right:0.5px solid rgba(255,255,255,0.1);">
                        <div class="sidebar-title">Favorites</div>
                        <div class="sidebar-link">🏠 Home</div>
                        <div class="sidebar-link">📄 Documents</div>
                        <div class="sidebar-link">⬇️ Downloads</div>
                        <div style="height:20px;"></div>
                        <div class="sidebar-link active">🗑️ Trash</div>
                    </div>
                    <div class="app-content" style="background:#1e1e1e; padding:0; display:flex; flex-direction:column;">
                        <div style="padding:10px 20px; background:rgba(255,255,255,0.05); border-bottom:0.5px solid rgba(255,255,255,0.1); display:flex; justify-content:space-between; align-items:center;">
                            <span style="font-size:13px; opacity:0.6;">3 items, 1.2 GB</span>
                            <button onclick="window.emptyTrash()" style="background:#007aff; color:white; border:none; padding:5px 15px; border-radius:6px; font-size:12px; cursor:pointer;">Empty</button>
                        </div>
                        <div id="trash-items" style="padding:20px; display:grid; grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); gap:20px;">
                            <div class="trash-item" style="text-align:center; cursor:pointer;" onclick="this.style.opacity='0.5'">
                                <div style="font-size:40px;">📄</div>
                                <div style="font-size:12px; margin-top:5px; color:#fff;">very_old_file.txt</div>
                            </div>
                            <div class="trash-item" style="text-align:center; cursor:pointer;" onclick="this.style.opacity='0.5'">
                                <div style="font-size:40px;">🎬</div>
                                <div style="font-size:12px; margin-top:5px; color:#fff;">movie_trailer.mp4</div>
                            </div>
                            <div class="trash-item" style="text-align:center; cursor:pointer;" onclick="this.style.opacity='0.5'">
                                <div style="font-size:40px;">🖼️</div>
                                <div style="font-size:12px; margin-top:5px; color:#fff;">landscape_raw.jpg</div>
                            </div>
                        </div>
                        <div id="trash-empty-msg" style="display:none; flex:1; align-items:center; justify-content:center; color:rgba(255,255,255,0.3); font-size:18px;">
                            Trash is Empty
                        </div>
                    </div>
                </div>`
        },
        // Default fallback for any other app
        'default': {
            title: 'Application',
            content: `<div style="display:flex; height:100%; align-items:center; justify-content:center; color: #888;">App Loaded Successfully</div>`
        },
        'edge': {
            title: 'Microsoft Edge',
            width: '1000px',
            height: '650px',
            content: `
                <div style="display:flex; flex-direction:column; height:100%; background:#1e1e1e;">
                    <div style="padding:10px 15px; background:#2b2b2b; border-bottom:1px solid #3b3b3b; display:flex; align-items:center; gap:15px;">
                        <div style="display:flex; gap:12px; font-size:16px; opacity:0.8;"><span>⬅</span><span>➡</span><span>↻</span></div>
                        <div style="flex:1; background:#3b3b3b; border-radius:20px; padding:6px 20px; font-size:13px; color:#ccc; display:flex; align-items:center; gap:10px;">
                            <span style="opacity:0.5;">🔒</span> https://maxospnay.netlify.app/
                        </div>
                        <div style="font-size:18px; opacity:0.8;"><span>⋯</span></div>
                    </div>
                    <iframe src="https://maxospnay.netlify.app/" style="flex:1; border:none; width:100%; height:100%;"></iframe>
                </div>`
        },
    };

    // --- Trash App Logic ---
    window.emptyTrash = function() {
        const items = document.getElementById('trash-items');
        const emptyMsg = document.getElementById('trash-empty-msg');
        const dockTrash = document.getElementById('dock-trash');
        
        if (items) {
            items.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            items.style.opacity = '0';
            items.style.transform = 'scale(0.95)';
            
            setTimeout(() => {
                items.style.display = 'none';
                if (emptyMsg) {
                    emptyMsg.style.display = 'flex';
                    emptyMsg.style.opacity = '0';
                    setTimeout(() => emptyMsg.style.opacity = '1', 50);
                }
            }, 500);
        }

        // Change Dock Icon to Empty Trash
        if (dockTrash) {
            const img = dockTrash.querySelector('img');
            if (img) {
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Trash_Icon_macOS_Ventura.png/1024px-Trash_Icon_macOS_Ventura.png';
            }
            dockTrash.classList.add('bouncing');
            setTimeout(() => dockTrash.classList.remove('bouncing'), 800);
        }

        showNotification('Trash Emptied');
        
        // Update APPS_CONFIG so it stays empty if closed/reopened
        APPS_CONFIG['trash'].content = `
            <div class="app-container">
                <div class="app-sidebar" style="width:180px; background:rgba(255,255,255,0.05); border-right:0.5px solid rgba(255,255,255,0.1);">
                    <div class="sidebar-title">Favorites</div>
                    <div class="sidebar-link">🏠 Home</div>
                    <div class="sidebar-link">📄 Documents</div>
                    <div class="sidebar-link">⬇️ Downloads</div>
                    <div style="height:20px;"></div>
                    <div class="sidebar-link active">🗑️ Trash</div>
                </div>
                <div class="app-content" style="background:#1e1e1e; padding:0; display:flex; flex-direction:column; align-items:center; justify-content:center; color:rgba(255,255,255,0.3); font-size:18px;">
                    Trash is Empty
                </div>
            </div>`;
    };

    // --- App Store Logic ---
    window.downloadApp = function(btn, appId) {
        if(btn.innerText === 'OPEN') {
            window.openWindow(appId);
            return;
        }

        btn.disabled = true;
        btn.style.opacity = '0.7';
        btn.style.cursor = 'default';
        
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.floor(Math.random() * 10) + 5;
            if(progress >= 100) {
                progress = 100;
                clearInterval(interval);
                btn.innerText = 'OPEN';
                btn.disabled = false;
                btn.style.opacity = '1';
                btn.style.cursor = 'pointer';
                btn.style.background = '#30d158'; // Success green
                btn.style.color = 'white';
                showNotification(`${APPS_CONFIG[appId]?.title || appId} installed successfully.`);
            } else {
                btn.innerText = `${progress}%`;
            }
        }, 150);
    };

    // --- Update Launcher Logic ---
    window.startUpdate = function() {
        const btnArea = document.getElementById('update-status');
        const progressArea = document.getElementById('update-progress-area');
        const progressBar = document.getElementById('update-progress');
        const updateText = document.getElementById('update-text');
        const updateLog = document.getElementById('update-log');
        
        btnArea.style.display = 'none';
        progressArea.style.display = 'block';
        
        const steps = [
            { p: 10, t: 'Verifying files...', l: 'Verify: pkg.maxos.1.5_full.dmg' },
            { p: 25, t: 'Extracting package...', l: 'Unpack: /System/Library/CoreServices...' },
            { p: 40, t: 'Installing Core Components...', l: 'Install: Kernel.framework' },
            { p: 55, t: 'Updating UI Assets...', l: 'Update: Icons, Shaders, GlassEffects' },
            { p: 70, t: 'Running scripts...', l: 'Post-Install: Setting up Stage Manager' },
            { p: 85, t: 'Cleaning up...', l: 'Remove: temporary_files_1.0' },
            { p: 100, t: 'Restarting...', l: 'Done. Finalizing build 2026.1.5' }
        ];

        let currentStep = 0;
        const interval = setInterval(() => {
            if (currentStep >= steps.length) {
                clearInterval(interval);
                finishUpdate();
                return;
            }
            const s = steps[currentStep];
            progressBar.style.width = s.p + '%';
            updateText.innerText = s.t;
            updateLog.innerHTML += `<div>> ${s.l}</div>`;
            updateLog.scrollTop = updateLog.scrollHeight;
            currentStep++;
        }, 1200);
    };

    function finishUpdate() {
        const overlay = document.getElementById('restart-overlay');
        const restartBar = document.getElementById('restart-progress');
        
        // Reset state
        restartBar.style.width = '0%';
        
        // 1. Show Black Screen (Shutdown) with Fade
        overlay.style.visibility = 'visible';
        overlay.style.pointerEvents = 'all';
        overlay.style.opacity = '1';
        
        showNotification('Update Complete! Restarting...');

        // 2. Animate Boot Progress (Slightly slower for effect)
        let progress = 0;
        const bootInterval = setInterval(() => {
            progress += Math.random() * 3.5;
            if(progress >= 100) {
                progress = 100;
                clearInterval(bootInterval);
                
                // 3. Finalize OS 1.5 State
                setTimeout(() => {
                    finalizeOSRestart();
                    // Fade out overlay
                    overlay.style.opacity = '0';
                    setTimeout(() => { 
                        overlay.style.visibility = 'hidden'; 
                        overlay.style.pointerEvents = 'none';
                    }, 1000);
                }, 1000);
            }
            restartBar.style.width = progress + '%';
        }, 180);
    }

    function finalizeOSRestart() {
        // Close all windows to simulate fresh boot (Cleanly with Dock Updates)
        document.querySelectorAll('.window').forEach(w => window.closeWindow(w.id));
        
        // Update Branding
        const brand = document.querySelector('.menu-item span');
        if(brand) brand.innerText = 'Max OS 2';

        // Remove Software Update row and update Version in Config
        let settingsContent = APPS_CONFIG['about'].content;
        
        // 1. Update Version
        settingsContent = settingsContent.replace(/Max OS 2\.0/g, 'Max OS 2.1'); // If updating context
        
        // 2. Remove the entire Software Update row
        const updateRowRegex = /<div class="setting-row clickable" onclick="window\.openWindow\('update'\)">[\s\S]*?<\/div>[\s\S]*?<\/div>[\s\S]*?<\/div>/;
        settingsContent = settingsContent.replace(updateRowRegex, '');
        
        APPS_CONFIG['about'].content = settingsContent;

        showNotification('Welcome to Max OS 2.0');
    }

    // --- Clock Logic ---
    const clockElement = document.getElementById('clock');
    function updateClock() {
        const now = new Date();
        const options = { 
            weekday: 'short', 
            month: 'short', 
            day: '2-digit', 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: true 
        };
        // Format: Sun Jan 04  6:11 PM
        let dateTimeString = now.toLocaleString('en-US', options);
        // Remove the comma if it exists (some locales add it)
        dateTimeString = dateTimeString.replace(',', '');
        clockElement.innerText = dateTimeString;
    }
    setInterval(updateClock, 1000);
    updateClock();

    // --- Advanced Dock Magnification ---
    const dockContainer = document.querySelector('.dock-container');
    const dockIcons = document.querySelectorAll('.dock-icon');

    if (dockContainer) {
        dockContainer.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX;
            
            dockIcons.forEach(icon => {
                const rect = icon.getBoundingClientRect();
                const iconCenterX = rect.left + rect.width / 2;
                const distance = Math.abs(mouseX - iconCenterX);
                
                // --- Dynamic Wave Logic ---
                const maxScale = 2.4; // Matches the "Large" request
                const maxDistance = 160; // Wider influence for the 'wave'
                
                let scale = 1;
                let translateY = 0;

                if (distance < maxDistance) {
                    // Use a smooth bell curve (cosine squared) for the wave
                    const factor = Math.cos((distance / maxDistance) * (Math.PI / 2));
                    const intensity = Math.pow(factor, 2);
                    
                    scale = 1 + (maxScale - 1) * intensity;
                    translateY = intensity * -10; 
                }
                
                const size = 48 * scale;
                icon.style.width = `${size}px`;
                icon.style.height = `${size}px`;
                icon.style.transform = `translateY(${translateY}px)`;
            });
        });

        dockContainer.addEventListener('mouseleave', () => {
            dockIcons.forEach(icon => {
                icon.style.width = '48px';
                icon.style.height = '48px';
                icon.style.transform = 'translateY(0px)';
            });
        });
    }

    // --- Dynamic Calendar Icon ---
    function updateDockCalendar() {
        const now = new Date();
        const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        const monthEl = document.getElementById('dock-cal-month');
        const dayEl = document.getElementById('dock-cal-day');
        
        if (monthEl) monthEl.innerText = months[now.getMonth()];
        if (dayEl) dayEl.innerText = now.getDate();
    }
    updateDockCalendar();
    setInterval(updateDockCalendar, 60000); // Update every minute

    // --- Menu Bar Logic ---
    window.toggleMenu = function(e, menuId) {
        e.stopPropagation();
        const menu = document.getElementById(menuId);
        const isOpen = menu.classList.contains('active');
        
        // Close all other menus
        document.querySelectorAll('.menu-dropdown').forEach(m => m.classList.remove('active'));
        document.querySelectorAll('.menu-item').forEach(i => i.classList.remove('active'));

        if (!isOpen) {
            menu.classList.add('active');
            menu.parentElement.classList.add('active');
        }
    };

    // Close menus on outside click
    document.addEventListener('click', () => {
        document.querySelectorAll('.menu-dropdown').forEach(m => m.classList.remove('active'));
        document.querySelectorAll('.menu-item').forEach(i => i.classList.remove('active'));
    });

    // --- Notification System ---
    const notif = document.getElementById('notif');
    const notifText = document.getElementById('notif-text');
    function showNotification(text) {
        notifText.innerText = text;
        notif.classList.add('active');
        setTimeout(() => notif.classList.remove('active'), 3000);
    }

    // --- Settings App Logic ---
    window.openSettingsTab = function(el, tabId) {
        // 1. Sidebar Active State
        const sidebarItems = document.querySelectorAll('.sidebar-item');
        sidebarItems.forEach(item => item.classList.remove('active'));
        if(el) el.classList.add('active');

        // 2. Show Panel
        const panels = document.querySelectorAll('.settings-panel');
        panels.forEach(panel => panel.classList.remove('active'));
        
        const target = document.getElementById(`tab-${tabId}`);
        if(target) target.classList.add('active');
    };

    window.toggleSettings = function(el) {
        el.classList.toggle('checked');
    };

    window.updateProfile = function(event, form) {
        event.preventDefault();
        const newName = form.name.value;
        const fakeEmail = newName.toLowerCase().replace(/\s+/g, '.') + '@maxos.com';
        
        // 1. Update Display in Profile Tab
        const displayName = document.getElementById('profile-display-name');
        const displayEmail = document.getElementById('profile-display-email');
        if(displayName) displayName.innerText = newName;
        if(displayEmail) displayEmail.innerText = fakeEmail;
        
        // 2. Update Sidebar Profile
        const sidebarName = document.querySelector('.sidebar-profile span:first-of-type');
        const sidebarEmail = document.querySelector('.sidebar-profile span:last-of-type');
        if(sidebarName) sidebarName.innerText = newName;
        if(sidebarEmail) sidebarEmail.innerText = fakeEmail;

        // 3. Update the Template for future opens
        APPS_CONFIG['about'].content = APPS_CONFIG['about'].content
            .replace(/Max User/g, newName)
            .replace(/maxuser@apple\.com/g, fakeEmail);
            
        showNotification('Profile updated: ' + newName);
        form.reset();
    };

    window.syncFakeEmail = function(input) {
        const emailField = document.getElementById('reg-email');
        if(emailField) {
            emailField.value = input.value.toLowerCase().replace(/\s+/g, '.') + '@maxos.com';
        }
    };

    window.triggerProfileUpload = function() {
        const input = document.getElementById('profile-upload-input');
        if(input) input.click();
    };

    window.handleProfileUpload = function(input) {
        if (input.files && input.files[0]) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const imgUrl = e.target.result;
                
                // 1. Update all images in DOM
                const sidebarImg = document.getElementById('profile-sidebar-img');
                const mainImg = document.getElementById('profile-main-img');
                if(sidebarImg) sidebarImg.src = imgUrl;
                if(mainImg) mainImg.src = imgUrl;

                // 2. Update APPS_CONFIG for persistence during tab switches
                APPS_CONFIG['about'].content = APPS_CONFIG['about'].content
                    .replace(/https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/8\/89\/Portrait_Placeholder\.png/g, imgUrl);
                
                showNotification('Profile picture updated!');
            };
            reader.readAsDataURL(input.files[0]);
        }
    };

    // --- Window Manager Core ---
    // Universal Open Function
    window.openWindow = function(appId) {
        const cleanId = appId.replace('dock-', '').replace('-window', '');
        const windowId = `${cleanId}-window`;
        let win = document.getElementById(windowId);
        const iconEl = document.getElementById(`dock-${cleanId}`);

        if (!win) {
            win = createWindow(cleanId, windowId);
            win.style.display = 'flex';
            
            if (iconEl) {
                const rect = iconEl.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                
                win.style.transformOrigin = `${centerX}px ${centerY}px`;
                win.style.transform = `translate(-50%, -50%) scale(0) opacity(0)`;
                
                iconEl.classList.add('bouncing');
                setTimeout(() => iconEl.classList.remove('bouncing'), 1000);
            }

            setTimeout(() => {
                win.classList.add('open');
                win.style.transform = 'translate(-50%, -50%) scale(1)';
                win.style.opacity = '1';
            }, 50);

            bringToFront(win);
            if(iconEl) iconEl.classList.add('active');
            window.toggleLaunchpad(false);
            return;
        }

        const isMinimized = win.classList.contains('minimized');
        const isVisible = win.style.display !== 'none' && !isMinimized;
        const isTopMost = win.style.zIndex == zIndexCounter;

        if (isVisible && isTopMost) {
            minimizeWindow(windowId);
            return;
        }

        const dockIcon = document.getElementById(`dock-${cleanId}`);
        if(dockIcon && (isMinimized || win.style.display === 'none')) {
            dockIcon.classList.add('bouncing');
            setTimeout(() => dockIcon.classList.remove('bouncing'), 800);
        }

        win.style.display = 'flex';
        win.classList.remove('minimized');
        
        win.style.transform = 'translate(-50%, -50%) scale(1.05)';
        setTimeout(() => {
            win.classList.add('open');
            win.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 50);
        
        bringToFront(win);
        if(dockIcon) dockIcon.classList.add('active');
        updateDockVisibility();
        window.toggleLaunchpad(false);
    };

    window.toggleLaunchpad = function(show) {
        const lp = document.getElementById('launchpad');
        if (!lp) return;
        if (show === undefined) show = !lp.classList.contains('active');
        
        if (show) {
            lp.style.display = 'flex';
            setTimeout(() => lp.classList.add('active'), 10);
            const searchInput = lp.querySelector('.launchpad-search');
            if (searchInput) {
                searchInput.value = '';
                searchInput.focus();
                // Setup search logic
                searchInput.oninput = (e) => {
                    const query = e.target.value.toLowerCase();
                    lp.querySelectorAll('.launchpad-app').forEach(app => {
                        const name = app.querySelector('span').innerText.toLowerCase();
                        app.style.display = name.includes(query) ? 'flex' : 'none';
                    });
                };
            }
        } else {
            lp.classList.remove('active');
            setTimeout(() => {
                if (!lp.classList.contains('active')) lp.style.display = 'none';
            }, 400);
        }
    };

    window.minimizeWindow = function(windowId) {
        const win = document.getElementById(windowId);
        if(!win) return;

        const cleanId = windowId.replace('-window', '');
        const iconEl = document.getElementById(`dock-${cleanId}`);
        
        if (iconEl) {
            const rect = iconEl.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            // Re-calculate origin to "suck" into the dock
            win.style.transformOrigin = `${centerX}px ${centerY}px`;
            win.style.transform = 'translate(-50%, -50%) scale(0)';
            win.style.opacity = '0';
        } else {
            win.style.transform = 'translate(-50%, -40%) scale(0.8)';
            win.style.opacity = '0';
        }
        
        setTimeout(() => {
            win.classList.add('minimized');
            win.classList.remove('open');
            win.style.display = 'none';
            updateDockVisibility();
        }, 500);
    };

    window.closeWindow = function(windowId) {
        const win = document.getElementById(windowId);
        if(win) {
            win.classList.remove('open');
            win.style.opacity = '0';
            win.style.transform = 'translate(-50%, -50%) scale(0.9)';
            
            setTimeout(() => {
                win.remove();
                const appId = windowId.replace('-window', '');
                const dockIcon = document.getElementById(`dock-${appId}`);
                if(dockIcon) dockIcon.classList.remove('active');
                updateDockVisibility();
            }, 300);
        }
    };

    window.maximizeWindow = function(windowId) {
        const win = document.getElementById(windowId);
        if(win) {
            win.classList.toggle('maximized');
            if(win.classList.contains('maximized')) {
                win.style.transform = 'none';
            } else {
                // Restore transform if necessary
                win.style.transform = ''; 
            }
            updateDockVisibility();
        }
    };

    function updateDockVisibility() {
        const anyMaximized = document.querySelector('.window.maximized:not(.minimized)');
        if (anyMaximized && anyMaximized.style.display !== 'none') {
            document.body.classList.add('dock-hidden');
        } else {
            document.body.classList.remove('dock-hidden');
        }
    }

    let zIndexCounter = 100;
    function bringToFront(win) {
        zIndexCounter++;
        win.style.zIndex = zIndexCounter.toString();
    }

    // --- Window Template Generator ---
    function createWindow(appId, windowId) {
        // Get config or default
        const config = APPS_CONFIG[appId] || APPS_CONFIG['default'];
        const title = config.title || 'Application';
        const content = config.content;
        const width = config.width || '600px';
        const height = config.height || '400px';

        const newWin = document.createElement('div');
        newWin.id = windowId;
        newWin.className = 'window';
        newWin.style.width = width;
        newWin.style.height = height;
        // Initial Center Position
        newWin.style.top = '50%';
        newWin.style.left = '50%';
        newWin.style.transform = 'translate(-50%, -50%)';

        newWin.innerHTML = `
            <div class="window-titlebar">
                <div class="traffic-lights">
                    <div class="light close"></div>
                    <div class="light minimize"></div>
                    <div class="light maximize"></div>
                </div>
                <div class="window-title">${title}</div>
            </div>
            <div class="window-content" style="padding: 0; display: flex; flex-direction: column;">
                ${content}
            </div>
        `;

        document.querySelector('.desktop').appendChild(newWin);

        // Attach Event Listeners explicitly (Robust Fix)
        const closeBtn = newWin.querySelector('.close');
        const minBtn = newWin.querySelector('.minimize');
        const maxBtn = newWin.querySelector('.maximize');

        if(closeBtn) {
            closeBtn.addEventListener('click', (e) => {
                e.stopPropagation(); // Stop bubbling
                window.closeWindow(windowId);
            });
            // Ensure mousedown doesn't trigger drag
            closeBtn.addEventListener('mousedown', (e) => e.stopPropagation());
        }
        if(minBtn) {
            minBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                window.minimizeWindow(windowId);
            });
            minBtn.addEventListener('mousedown', (e) => e.stopPropagation());
        }
        if(maxBtn) {
            maxBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                window.maximizeWindow(windowId);
            });
            maxBtn.addEventListener('mousedown', (e) => e.stopPropagation());
        }
        
        // Add Dragging Logic
        makeDraggable(newWin);
        newWin.addEventListener('mousedown', () => bringToFront(newWin));
        
        return newWin;
    }

    // --- Draggable Logic ---
    function makeDraggable(windowEl) {
        const titlebar = windowEl.querySelector('.window-titlebar');
        if(!titlebar) return;
        
        let isDragging = false;
        let startX, startY;

        titlebar.addEventListener('mousedown', (e) => {
            if (windowEl.classList.contains('maximized')) return;
            if (e.target.closest('.traffic-lights')) return; // Ignore buttons

            isDragging = true;
            bringToFront(windowEl);
            
            // "Freeze" position to prevent jump when switching from transform to top/left
            const rect = windowEl.getBoundingClientRect();
            windowEl.style.left = rect.left + 'px';
            windowEl.style.top = rect.top + 'px';
            windowEl.style.transform = 'none';
            windowEl.style.margin = '0';
            
            startX = e.clientX;
            startY = e.clientY;

            const initialLeft = rect.left;
            const initialTop = rect.top;

            function handleMouseMove(e) {
                if (!isDragging) return;
                const dx = e.clientX - startX;
                const dy = e.clientY - startY;
                windowEl.style.left = `${initialLeft + dx}px`;
                windowEl.style.top = `${initialTop + dy}px`;
            }

            function handleMouseUp() {
                isDragging = false;
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseup', handleMouseUp);
            }

            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        });
    }

    // --- Initialization & Event Listeners ---

    // 1. Setup Dock Clicks (Automated based on HTML IDs)
    dockIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            // icon.id format is "dock-safari", "dock-finder"
            const appId = this.id.replace('dock-', '');
            
            if (appId === 'github') {
                window.open('https://github.com/jikkhg', '_blank');
                return;
            }
            
            window.openWindow(appId);
        });
    });

    // --- Calculator Logic (Global Scope for inline onclicks) ---
    let currentCalcInput = '0';
    
    window.calcNum = n => {
        if (currentCalcInput === '0') currentCalcInput = n;
        else currentCalcInput += n;
        updateCalcDisplay();
    };
    window.calcOp = op => { 
        currentCalcInput += ` ${op} `; 
        updateCalcDisplay();
    };
    window.calcClear = () => { 
        currentCalcInput = '0'; 
        updateCalcDisplay();
    };
    window.calcEquals = () => {
        try {
            const result = new Function(`return ${currentCalcInput}`)();
            currentCalcInput = result.toString();
            updateCalcDisplay();
        } catch (e) { 
            currentCalcInput = 'Error'; 
            updateCalcDisplay();
            setTimeout(() => { currentCalcInput = '0'; updateCalcDisplay(); }, 1500);
        }
    };
    
    function updateCalcDisplay() {
        // Need to query dynamically as window might be closed/reopened
        const display = document.getElementById('calc-display');
        if(display) display.value = currentCalcInput;
    }

    // --- Image Fallback System ---
    function handleImageError(img) {
        img.onerror = null;
        let fallbackIcon = '📦'; 
        const altText = img.alt ? img.alt.toLowerCase() : '';

        // Simple Mapping
        const iconMap = {
            'drive': '💾', 'hd': '💾',
            'note': '📝',
            'calc': '🧮',
            'finder': '😊',
            'setting': '⚙️',
            'safari': '🧭',
            'store': '🅰️',
            'mail': '✉️',
            'message': '💬',
            'facetime': '🎥',
            'camera': '🎥',
            'calendar': '📅',
            'reminder': '✅',
            'photo': '🖼️',
            'music': '🎵',
            'trash': '🗑️'
        };

        for (const key in iconMap) {
            if (altText.includes(key)) {
                fallbackIcon = iconMap[key];
                break;
            }
        }

        const span = document.createElement('span');
        span.style.fontSize = '32px';
        span.style.display = 'flex';
        span.style.justifyContent = 'center';
        span.style.alignItems = 'center';
        span.style.width = '100%';
        span.style.height = '100%';
        span.innerHTML = fallbackIcon;
        
        if(img.parentNode) img.parentNode.replaceChild(span, img);
    }
    
    // --- Right Click Context Menu Logic ---
    const contextMenu = document.getElementById('context-menu');
    
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        
        // Define Menu Content based on target
        let menuHTML = '';
        const target = e.target;
        
        if (target.closest('.desktop')) {
            menuHTML = `
                <div class="context-menu-item" onclick="showNotification('New Folder Created')">New Folder <span class="context-menu-shortcut">⇧⌘N</span></div>
                <div class="context-menu-item" onclick="window.openWindow('finder')">Get Info <span class="context-menu-shortcut">⌘I</span></div>
                <div class="context-menu-separator"></div>
                <div class="context-menu-item" onclick="window.location.reload()">Change Wallpaper...</div>
                <div class="context-menu-item">Use Stacks</div>
                <div class="context-menu-item">Show View Options</div>
                <div class="context-menu-separator"></div>
                <div class="context-menu-item" onclick="window.openWindow('about')">System Settings...</div>
            `;
        } else if (target.closest('.dock-icon')) {
            const appId = target.closest('.dock-icon').id.replace('dock-', '');
            const appTitle = APPS_CONFIG[appId]?.title || appId;
            menuHTML = `
                <div class="context-menu-item" style="font-weight:700;">${appTitle}</div>
                <div class="context-menu-separator"></div>
                <div class="context-menu-item">Options <span style="font-size:10px;">›</span></div>
                <div class="context-menu-item" onclick="window.openWindow('${appId}')">Show All Windows</div>
                <div class="context-menu-separator"></div>
                <div class="context-menu-item" onclick="window.closeWindow('${appId}-window')">Quit</div>
            `;
        } else {
            menuHTML = `
                <div class="context-menu-item" onclick="window.history.back()">Back</div>
                <div class="context-menu-item" onclick="window.history.forward()">Forward</div>
                <div class="context-menu-item" onclick="window.location.reload()">Reload</div>
                <div class="context-menu-separator"></div>
                <div class="context-menu-item">Save As...</div>
                <div class="context-menu-item">Print...</div>
                <div class="context-menu-separator"></div>
                <div class="context-menu-item">Inspect Element</div>
            `;
        }
        
        contextMenu.innerHTML = menuHTML;
        contextMenu.style.display = 'flex';
        
        // Position Handling (Keep inside viewport)
        let x = e.clientX;
        let y = e.clientY;
        const menuWidth = 220;
        const menuHeight = contextMenu.offsetHeight || 200;
        
        if (x + menuWidth > window.innerWidth) x -= menuWidth;
        if (y + menuHeight > window.innerHeight) y -= menuHeight;
        
        contextMenu.style.left = `${x}px`;
        contextMenu.style.top = `${y}px`;
    });
    
    // Hide menu on click outside
    document.addEventListener('click', (e) => {
        if (!contextMenu.contains(e.target)) {
            contextMenu.style.display = 'none';
        }
    });

    // --- Control Center Logic ---
    const controlCenter = document.getElementById('control-center');
    
    window.toggleControlCenter = () => {
        const isVisible = controlCenter.style.display === 'flex';
        controlCenter.style.display = isVisible ? 'none' : 'flex';
    };

    window.toggleDarkMode = () => {
        const body = document.body;
        const isDark = body.style.backgroundImage.includes('Dark');
        const darkWallpaper = 'url("https://512pixels.net/wp-content/uploads/2025/06/12-Dark-thumbnail.jpg")';
        const lightWallpaper = 'url("https://512pixels.net/wp-content/uploads/2025/06/12-Light-thumbnail.jpg")';
        
        body.style.backgroundImage = isDark ? lightWallpaper : darkWallpaper;
        
        // Update button state
        const btn = document.querySelector('.cc-card[onclick="window.toggleDarkMode()"]');
        btn.classList.toggle('active', !isDark);
    };

    window.toggleAnimations = () => {
        const body = document.body;
        const noAnim = body.classList.contains('no-animations');
        if (noAnim) {
            body.classList.remove('no-animations');
        } else {
            body.classList.add('no-animations');
        }
        
        const btn = document.querySelector('.cc-card[onclick="window.toggleAnimations()"]');
        btn.classList.toggle('active', noAnim);
    };

    window.setAccentColor = (color, el) => {
        document.documentElement.style.setProperty('--apple-blue', color);
        
        // Update active state in UI
        document.querySelectorAll('.cc-color-circle').forEach(c => c.classList.remove('active'));
        el.classList.add('active');
    };

    window.toggleNotch = () => {
        const notch = document.getElementById('notch');
        const btn = document.querySelector('.cc-notch-toggle .toggle-switch');
        
        const isVisible = notch.style.display === 'block';
        notch.style.display = isVisible ? 'none' : 'block';
        btn.classList.toggle('checked', !isVisible);
    };

    // Global click listener to close CC when clicking outside
    document.addEventListener('click', (e) => {
        const ccIcon = document.querySelector('.menu-right span[onclick="window.toggleControlCenter()"]');
        if (!controlCenter.contains(e.target) && !ccIcon.contains(e.target)) {
            controlCenter.style.display = 'none';
        }
    });

    // --- Boot Transition ---
    window.enterOS = () => {
        const bootScreen = document.getElementById('boot-screen');
        bootScreen.classList.add('fade-out');
        
        // Play subtle start sound or animation if needed
        showNotification('Max OS 2 Booted Successfully');
    };

    // Apply image fallback
    document.querySelectorAll('img').forEach(img => {
        img.onerror = () => handleImageError(img);
        if (img.complete && img.naturalWidth === 0) handleImageError(img);
    });
});
