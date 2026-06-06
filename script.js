/**
 * KUTTY KONCEPTS — Cinematic OS Experience
 * Core Engine & Animation Script
 */

const mascotImages = [
    'images/happy.png',
    'images/lecturing.png',
    'images/confident.png',
    'images/concerned.png',
    'images/confident.png',
    'images/encouraging.png',
    'images/celebrating success.png',
    'images/angry.png',
    'images/cheering.png',
    'images/confused.png',
    'images/inspired.png',
    'images/nervous.png',
    'images/practical_joke.png',
    'images/questioning.png',
    'images/shocked.png'
];

// Map of scenes from script
const scenes = [
    {
        num: 1, section: "INTRO", duration: 10,
        text: "Hey there, REC students! I'm Aadhi, your campus mascot — and today, I'm going to break down Operating Systems for you in just five minutes! Let's get started!",
        mascot: "happy", heading: "OPERATING SYSTEMS",
        html: `<h2>Explained by Aadhi</h2><h3>Rajalakshmi Engineering College</h3>`
    },
    {
        num: 2, section: "INTRO", duration: 10,
        text: "Here's our roadmap! We'll cover what an OS is, its functions, process management, memory, file systems, CPU scheduling, deadlocks, synchronization, and types of OS. Let's dive in!",
        mascot: "lecturing", heading: "Today's Agenda",
        html: `<ul style="font-size:1.1rem"><li>What is an OS?</li><li>Functions of OS</li><li>Process Management</li><li>Memory Management</li><li>File Systems</li><li>CPU Scheduling</li><li>Deadlocks</li><li>Synchronization</li><li>Types of OS</li></ul>`
    },
    {
        num: 3, section: "WHAT IS OS", duration: 10,
        text: "So, what exactly is an Operating System? It's the software that sits between YOU and the hardware. It manages everything — from your apps to the CPU and memory!",
        mascot: "lecturing", heading: "What is an OS?",
        html: `<div class="layer-diagram">
            <div class="layer-box" style="border-color:#fff">USER</div>
            <i class="fas fa-arrow-down layer-arrow"></i>
            <div class="layer-box" style="border-color:var(--cyan); color:var(--cyan)">APPLICATION</div>
            <i class="fas fa-arrow-down layer-arrow"></i>
            <div class="layer-box" style="background:rgba(139,92,246,0.3); border-color:#8b5cf6">OPERATING SYSTEM</div>
            <i class="fas fa-arrow-down layer-arrow"></i>
            <div class="layer-box" style="border-color:#666">HARDWARE</div>
        </div>`
    },
    {
        num: 4, section: "WHAT IS OS", duration: 10,
        text: "Think of the OS as a translator! When you click an app, the OS talks to the hardware to make it happen. Without it, your computer is just a pile of circuits!",
        mascot: "confident", heading: "OS as an Intermediary",
        html: `<h3 style="text-align:center; font-size:1.5rem"><i class="fas fa-language"></i> Translates requests into hardware actions</h3><p style="text-align:center; margin-top:2rem; font-size:1.2rem">User ⇄ App ⇄ <span class="highlight">OS</span> ⇄ Hardware</p>`
    },
    {
        num: 5, section: "WHAT IS OS", duration: 10,
        text: "You use an OS every day! Windows, macOS, Linux, Android — they're all operating systems. Each one manages your device differently, but the core idea is the same!",
        mascot: "happy", heading: "Examples of OS",
        html: `<div class="os-icons-row" style="margin-top:2rem">
            <div class="os-icon-item"><i class="fab fa-windows"></i><span>Windows</span></div>
            <div class="os-icon-item"><i class="fab fa-apple"></i><span>macOS</span></div>
            <div class="os-icon-item"><i class="fab fa-linux"></i><span>Linux</span></div>
            <div class="os-icon-item"><i class="fab fa-android"></i><span>Android</span></div>
        </div>`
    },
    {
        num: 6, section: "FUNCTIONS", duration: 10,
        text: "An OS does FIVE major things — it manages processes, memory, files, input-output devices, and security. Let's see each one!",
        mascot: "lecturing", heading: "Key Functions of an OS",
        html: `<div class="hub-diagram">
            <div class="hub-center">OS</div>
            <div style="display:flex; flex-direction:column; gap:0.5rem">
                <div class="hub-branch">1. Process Mgmt</div>
                <div class="hub-branch">2. Memory Mgmt</div>
                <div class="hub-branch">3. File Mgmt</div>
                <div class="hub-branch">4. I/O Mgmt</div>
                <div class="hub-branch">5. Security</div>
            </div>
        </div>`
    },
    {
        num: 7, section: "FUNCTIONS", duration: 10,
        text: "Resource allocation means the OS decides which app gets how much CPU, memory, and disk. It also handles all your input-output — keyboard, mouse, display, everything!",
        mascot: "confident", heading: "Resource Allocation",
        html: `<h3><i class="fas fa-microchip"></i> CPU, RAM, Disk → Apps</h3><br><h3><i class="fas fa-keyboard"></i> Keyboard, Mouse, Display</h3>`
    },
    {
        num: 8, section: "FUNCTIONS", duration: 10,
        text: "Security is crucial! The OS uses authentication — like passwords — access control to restrict files, and encryption to protect your data. Your OS is your digital bodyguard!",
        mascot: "confident", heading: "Security & Protection",
        html: `<div style="text-align:center; font-size:3rem; color:var(--cyan); margin-bottom:1rem"><i class="fas fa-shield-halved"></i></div>
        <ul><li>Authentication (passwords)</li><li>Access Control (permissions)</li><li>Encryption (data protection)</li></ul>`
    },
    {
        num: 9, section: "PROCESSES", duration: 10,
        text: "A program sitting on your disk is just code — it's passive. But the moment you run it, it becomes a PROCESS — an active entity with its own memory and state!",
        mascot: "lecturing", heading: "What is a Process?",
        html: `<div class="comparison" style="margin-top:2rem">
            <div class="compare-panel" style="text-align:center"><i class="fas fa-file-code" style="font-size:3rem; color:#888; margin-bottom:1rem"></i><h3>Program</h3><p style="color:#aaa">Passive (on disk)</p></div>
            <div class="compare-panel" style="text-align:center; border-color:var(--cyan)"><i class="fas fa-cog fa-spin" style="font-size:3rem; color:var(--cyan); margin-bottom:1rem"></i><h3>Process</h3><p class="highlight">Active (in RAM)</p></div>
        </div>`
    },
    {
        num: 10, section: "PROCESSES", duration: 10,
        text: "Every process goes through states: New, Ready, Running, Waiting, and Terminated. The OS moves processes between these states to keep everything running smoothly!",
        mascot: "lecturing", heading: "Process States",
        html: `<div style="display:flex; flex-wrap:wrap; justify-content:center; gap:0.5rem; margin-top:2rem">
            <span class="state-box" style="background:rgba(255,255,255,0.1)">New</span> <i class="fas fa-arrow-right layer-arrow"></i>
            <span class="state-box" style="background:rgba(0,255,255,0.2); color:var(--cyan)">Ready</span> <i class="fas fa-arrow-right layer-arrow"></i>
            <span class="state-box" style="background:rgba(139,92,246,0.3); color:#a78bfa">Running</span> <i class="fas fa-arrow-right layer-arrow"></i>
            <span class="state-box" style="background:rgba(239,68,68,0.2); color:#f87171">Waiting</span> <i class="fas fa-arrow-right layer-arrow"></i>
            <span class="state-box" style="background:rgba(100,100,100,0.3)">Terminated</span>
        </div>`
    },
    {
        num: 11, section: "PROCESSES", duration: 10,
        text: "Each process has an ID card called the PCB — Process Control Block. It stores the process ID, current state, program counter, registers, and memory info. The OS uses this to track every process!",
        mascot: "confident", heading: "Process Control Block (PCB)",
        html: `<div style="background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.2); border-radius:12px; padding:1.5rem; max-width:300px; margin:0 auto">
            <h3 style="text-align:center; margin-top:0; border-bottom:1px solid #444; padding-bottom:0.5rem">ID Card: PCB</h3>
            <ul style="font-size:0.9rem; margin-top:1rem"><li>Process ID</li><li>Process State</li><li>Program Counter</li><li>CPU Registers</li><li>Memory Info</li></ul>
        </div>`
    },
    {
        num: 12, section: "PROCESSES", duration: 10,
        text: "Context switching is when the CPU saves one process's state and loads another. It happens so fast, you think everything runs at once — but the CPU is actually juggling!",
        mascot: "inspired", heading: "Context Switching",
        html: `<div style="text-align:center; font-size:2.5rem; margin:1rem 0"><i class="fas fa-exchange-alt" style="color:var(--cyan)"></i></div>
        <p style="text-align:center; font-size:1.2rem">Save state of P1 <br>↓<br> Load state of P2</p><p style="text-align:center; margin-top:1rem" class="highlight">(Enables multitasking!)</p>`
    },
    {
        num: 13, section: "MEMORY", duration: 10,
        text: "Memory management is how the OS allocates and tracks RAM. It decides which process gets how much memory and makes sure they don't step on each other's toes!",
        mascot: "lecturing", heading: "Memory Management",
        html: `<div style="width:200px; height:150px; border:2px solid var(--cyan); border-radius:8px; margin:0 auto; display:flex; flex-direction:column; overflow:hidden">
            <div style="flex:1; background:rgba(0,255,255,0.3); display:flex; align-items:center; justify-content:center; font-weight:bold">OS Area</div>
            <div style="flex:2; border-top:1px dashed var(--cyan); display:flex; align-items:center; justify-content:center; color:#888">Free Space</div>
            <div style="flex:1; background:rgba(139,92,246,0.4); border-top:1px solid var(--cyan); display:flex; align-items:center; justify-content:center">Process 1</div>
        </div>`
    },
    {
        num: 14, section: "MEMORY", duration: 10,
        text: "Memory can be allocated in two ways — contiguous, where each process gets one continuous block, or non-contiguous, where it's split into pieces scattered across RAM!",
        mascot: "lecturing", heading: "Memory Allocation",
        html: `<div class="comparison">
            <div class="compare-panel"><h3>Contiguous</h3><div style="height:60px; background:rgba(0,255,255,0.2); border:1px solid var(--cyan); border-radius:4px; display:flex; align-items:center; justify-content:center">1 Block</div></div>
            <div class="compare-panel"><h3>Non-Contiguous</h3><div style="display:flex; gap:4px; height:60px"><div style="flex:1; background:rgba(139,92,246,0.3); border-radius:4px"></div><div style="flex:1; border:1px dashed #666; border-radius:4px"></div><div style="flex:1; background:rgba(139,92,246,0.3); border-radius:4px"></div></div></div>
        </div>`
    },
    {
        num: 15, section: "MEMORY", duration: 10,
        text: "Paging divides memory into fixed-size blocks — pages for the process and frames for RAM. A page table maps which page goes into which frame. No external fragmentation!",
        mascot: "happy", heading: "Paging",
        html: `<ul><li>Process → Pages (fixed size)</li><li>RAM → Frames (fixed size)</li><li>Page Table maps Pages to Frames</li></ul><p class="highlight" style="text-align:center; margin-top:1rem">No external fragmentation!</p>`
    },
    {
        num: 16, section: "MEMORY", duration: 10,
        text: "Virtual memory lets you run programs larger than your actual RAM! The OS swaps pages between RAM and disk, creating an illusion of unlimited memory. Clever, right?",
        mascot: "confident", heading: "Virtual Memory",
        html: `<div style="text-align:center; font-size:3rem; margin-bottom:1rem">🧠 ⇄ 💽</div>
        <ul><li>Larger than physical RAM</li><li>Uses disk as swap space</li><li>Pages swapped in/out as needed</li></ul>`
    },
    {
        num: 17, section: "FILE SYSTEM", duration: 10,
        text: "The file system organizes your data on disk! It uses a hierarchical tree structure — folders within folders — so you can store, find, and manage your files easily.",
        mascot: "lecturing", heading: "File System",
        html: `<div style="text-align:center; font-size:2rem; color:var(--cyan); margin-bottom:1rem"><i class="fas fa-folder-tree"></i></div>
        <ul><li>Organizes data on disk</li><li>Hierarchical tree structure</li><li>Directories and files</li></ul>`
    },
    {
        num: 18, section: "FILE SYSTEM", duration: 10,
        text: "The OS provides operations like create, read, write, and delete for files. Access can be sequential — reading one record after another — or direct, jumping to any position!",
        mascot: "lecturing", heading: "File Operations",
        html: `<p style="text-align:center; font-weight:bold; color:var(--cyan); letter-spacing:2px; margin-bottom:1.5rem">CREATE | READ | WRITE | DELETE</p>
        <div class="comparison">
            <div class="compare-panel"><h3>Sequential</h3><p style="font-size:0.8rem;text-align:center">Record after record</p></div>
            <div class="compare-panel"><h3>Direct (Random)</h3><p style="font-size:0.8rem;text-align:center">Jump to position</p></div>
        </div>`
    },
    {
        num: 19, section: "FILE SYSTEM", duration: 10,
        text: "Files are stored on disk using three methods — Contiguous allocation, Linked allocation with pointers, and Indexed allocation using an index block. Each has its trade-offs!",
        mascot: "confident", heading: "Disk Allocation Methods",
        html: `<ol style="font-size:1.2rem; line-height:2; width:fit-content; margin:0 auto">
            <li>Contiguous</li><li>Linked (pointers)</li><li>Indexed (index block)</li>
        </ol>`
    },
    {
        num: 20, section: "CPU SCHED", duration: 10,
        text: "CPU scheduling decides which process gets the CPU and when. Multiple processes compete for the CPU, and the scheduler picks the winner!",
        mascot: "confident", heading: "CPU Scheduling",
        html: `<div style="display:flex; align-items:center; justify-content:center; gap:1rem; margin-bottom:2rem">
            <div style="background:rgba(255,255,255,0.1); padding:0.5rem; border-radius:8px">P1, P2, P3</div>
            <i class="fas fa-arrow-right" style="color:var(--cyan)"></i>
            <div style="font-size:2rem; color:var(--cyan)"><i class="fas fa-microchip"></i> CPU</div>
        </div>
        <ul style="font-size:0.9rem"><li>Decides which process runs next</li><li>Maximizes CPU utilization</li></ul>`
    },
    {
        num: 21, section: "CPU SCHED", duration: 10,
        text: "There are several algorithms — First Come First Serve, Shortest Job First, Priority scheduling, and Round Robin, which gives each process a time slice. Round Robin is super popular!",
        mascot: "lecturing", heading: "Scheduling Algorithms",
        html: `<table class="algo-table">
            <tr><th>FCFS</th><td>First in, first served</td></tr>
            <tr><th>SJF</th><td>Shortest job first</td></tr>
            <tr><th>Priority</th><td>Highest priority first</td></tr>
            <tr class="highlight-row"><th>Round Robin</th><td>Time slice for each (★)</td></tr>
        </table>`
    },
    {
        num: 22, section: "CPU SCHED", duration: 10,
        text: "In preemptive scheduling, the OS can interrupt a running process for a higher-priority one. In non-preemptive, the process runs until it finishes or voluntarily gives up the CPU!",
        mascot: "lecturing", heading: "Preemptive vs Non-Preemptive",
        html: `<div class="comparison">
            <div class="compare-panel" style="border-color:#f87171"><h3>Preemptive</h3><p style="font-size:0.8rem;text-align:center">OS can interrupt processes</p></div>
            <div class="compare-panel" style="border-color:#4ade80"><h3>Non-Preemptive</h3><p style="font-size:0.8rem;text-align:center">Process runs to completion</p></div>
        </div>`
    },
    {
        num: 23, section: "DEADLOCK", duration: 10,
        text: "Deadlock is a nightmare scenario! Two or more processes are stuck, each waiting for a resource the other holds. Nobody can move — it's a total traffic jam!",
        mascot: "shocked", heading: "What is a Deadlock?",
        html: `<div class="deadlock-visual">
            <div class="process-circle" style="background:rgba(239,68,68,0.2); border:2px solid #f87171">P1</div>
            <i class="fas fa-sync fa-spin" style="font-size:2rem; color:#f87171"></i>
            <div class="process-circle" style="background:rgba(239,68,68,0.2); border:2px solid #f87171">P2</div>
        </div>
        <p class="highlight" style="text-align:center; color:#f87171">No progress possible!</p>`
    },
    {
        num: 24, section: "DEADLOCK", duration: 10,
        text: "Deadlock needs ALL four conditions: Mutual Exclusion — only one can use a resource, Hold and Wait, No Preemption, and Circular Wait. Break any one, and deadlock is avoided!",
        mascot: "confident", heading: "4 Conditions for Deadlock",
        html: `<p style="text-align:center; font-size:0.8rem; color:#aaa; margin-bottom:1rem">(ALL must hold)</p>
        <ol style="margin-left:2rem; font-weight:bold; color:#f87171">
            <li>Mutual Exclusion</li><li>Hold & Wait</li><li>No Preemption</li><li>Circular Wait</li>
        </ol>`
    },
    {
        num: 25, section: "DEADLOCK", duration: 10,
        text: "We handle deadlocks in three ways — Prevention by breaking conditions, Avoidance using the Banker's Algorithm, or Detection and Recovery after it happens!",
        mascot: "confident", heading: "Handling Deadlocks",
        html: `<ul>
            <li><i class="fas fa-shield-halved" style="color:var(--cyan);width:20px"></i> Prevention</li>
            <li><i class="fas fa-university" style="color:var(--cyan);width:20px"></i> Avoidance (Banker's)</li>
            <li><i class="fas fa-search" style="color:var(--cyan);width:20px"></i> Detection & Recovery</li>
        </ul>`
    },
    {
        num: 26, section: "SYNCHRONIZATION", duration: 10,
        text: "When multiple processes access shared data, chaos can happen! Synchronization ensures only one process enters the critical section at a time — preventing race conditions!",
        mascot: "angry", heading: "Process Synchronization",
        html: `<div style="background:rgba(239,68,68,0.1); border:2px dashed #f87171; padding:1rem; text-align:center; border-radius:8px; margin-bottom:1rem; color:#f87171; font-weight:bold">Critical Section</div>
        <ul><li>Protects shared resources</li><li>Only one process at a time</li><li>Prevents race conditions</li></ul>`
    },
    {
        num: 27, section: "SYNCHRONIZATION", duration: 10,
        text: "The key tools are — Mutex, a simple lock for one process, Semaphores with a counter for multiple resources, and Monitors that combine locking with condition variables!",
        mascot: "lecturing", heading: "Synchronization Tools",
        html: `<div style="display:flex; flex-direction:column; gap:1rem; margin-top:1rem">
            <div><strong><i class="fas fa-lock" style="color:var(--cyan)"></i> Mutex</strong> <br><span style="font-size:0.8rem;color:#aaa">Binary lock (0 or 1)</span></div>
            <div><strong><i class="fas fa-traffic-light" style="color:var(--cyan)"></i> Semaphore</strong> <br><span style="font-size:0.8rem;color:#aaa">Counter-based signaling</span></div>
            <div><strong><i class="fas fa-box" style="color:var(--cyan)"></i> Monitor</strong> <br><span style="font-size:0.8rem;color:#aaa">High-level construct</span></div>
        </div>`
    },
    {
        num: 28, section: "TYPES OF OS", duration: 10,
        text: "There are several types of OS! Batch OS processes jobs in groups, Time-Sharing lets multiple users share the CPU, Real-Time OS handles time-critical tasks, and Distributed OS spans multiple machines!",
        mascot: "happy", heading: "Types of OS",
        html: `<div class="quadrant-grid">
            <div class="quadrant"><i class="fas fa-layer-group"></i><span>Batch</span></div>
            <div class="quadrant"><i class="fas fa-clock"></i><span>Time-Sharing</span></div>
            <div class="quadrant"><i class="fas fa-tachometer-alt"></i><span>Real-Time</span></div>
            <div class="quadrant"><i class="fas fa-network-wired"></i><span>Distributed</span></div>
        </div>`
    },
    {
        num: 29, section: "TYPES OF OS", duration: 10,
        text: "In the real world — desktops run Windows, macOS, or Linux; phones run Android or iOS; embedded devices use RTOS; and cloud infrastructure uses distributed systems. OS is everywhere!",
        mascot: "confident", heading: "Modern OS in Action",
        html: `<table class="algo-table">
            <tr><th>Desktop</th><td>Windows, macOS, Linux</td></tr>
            <tr><th>Mobile</th><td>Android, iOS</td></tr>
            <tr><th>Embedded</th><td>RTOS</td></tr>
            <tr><th>Cloud</th><td>Distributed OS</td></tr>
        </table>`
    },
    {
        num: 30, section: "CONCLUSION", duration: 10,
        text: "And that's Operating Systems in five minutes! We covered the OS, its functions, processes, memory, file systems, scheduling, deadlocks, synchronization, and OS types. You've got this, REC! Aadhi believes in you — go ace that exam! 💪",
        mascot: "celebrating success", heading: "That's a Wrap! 🎉",
        html: `<div style="text-align:center; font-size:4rem; margin-top:2rem; animation:pulseGlow 2s infinite">💯</div>`
    }
];

// Wait for DOM
document.addEventListener("DOMContentLoaded", () => {
    
    // --- Preloading ---
    const preloaderBarFill = document.getElementById('preloaderBarFill');
    const imagePreloader = document.getElementById('imagePreloader');
    let loadedImages = 0;

    mascotImages.forEach(src => {
        const img = new Image();
        const advanceLoader = () => {
            loadedImages++;
            preloaderBarFill.style.width = ((loadedImages / mascotImages.length) * 100) + '%';
            if (loadedImages === mascotImages.length) {
                setTimeout(() => {
                    document.getElementById('preloader').style.display = 'none';
                }, 500);
            }
        };
        img.onload = advanceLoader;
        img.onerror = () => {
            console.error('Failed to load image: ' + src);
            advanceLoader();
        };
        img.src = src;
        imagePreloader.appendChild(img);
    });

    // --- State & DOM ---
    let mainTimeline;
    let synth = window.speechSynthesis;
    let utterance = null;
    let isPaused = false;
    let isMuted = false;
    
    const startBtn = document.getElementById('startBtn');
    const startScreen = document.getElementById('startScreen');
    const cinema = document.getElementById('cinema');
    const finaleScreen = document.getElementById('finaleScreen');
    const replayBtn = document.getElementById('replayBtn');
    
    const aadhiImg = document.getElementById('aadhiImg');
    const holoContent = document.getElementById('holoContent');
    const hologram = document.getElementById('hologram');
    const sceneHeading = document.getElementById('sceneHeading');
    const subtitleText = document.getElementById('subtitleText');
    const progressBar = document.getElementById('progressBar');
    const progressTime = document.getElementById('progressTime');
    const sceneNum = document.getElementById('sceneNum');
    
    const pauseBtn = document.getElementById('pauseBtn');
    const pauseIcon = document.getElementById('pauseIcon');
    const prevSceneBtn = document.getElementById('prevSceneBtn');
    const nextSceneBtn = document.getElementById('nextSceneBtn');
    const muteBtn = document.getElementById('muteBtn');
    const muteIcon = document.getElementById('muteIcon');
    const cameraContainer = document.getElementById('cameraContainer');
    const crGradient1 = document.querySelector('.cr-gradient-1');
    const crGradient2 = document.querySelector('.cr-gradient-2');

    // Matrix Rain Effect Setup
    const canvas = document.getElementById('matrixCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const chars = '01'.split('');
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = [];
    for(let x = 0; x < columns; x++) drops[x] = 1;
    
    function drawMatrix() {
        ctx.fillStyle = 'rgba(10, 14, 26, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#0F0';
        ctx.font = fontSize + 'px monospace';
        for(let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            if(drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
            drops[i]++;
        }
        requestAnimationFrame(drawMatrix);
    }
    drawMatrix();

    // Start Simulation
    startBtn.addEventListener('click', () => {
        // Initialize Speech Audio Context (Required on interaction)
        if (synth.getVoices().length === 0) {
            console.log("Waiting for voices...");
        }
        startScreen.style.display = 'none';
        cinema.style.display = 'block';
        
        buildTimeline();
        mainTimeline.play();
    });

    replayBtn.addEventListener('click', () => {
        finaleScreen.style.display = 'none';
        cinema.style.display = 'block';
        if(synth) synth.cancel();
        mainTimeline.restart();
    });

    // --- Core Animation Engine ---
    function buildTimeline() {
        if(mainTimeline) mainTimeline.kill();
        
        mainTimeline = gsap.timeline({
            onUpdate: updateProgress,
            onComplete: showFinale
        });

        // Loop through all scenes to build timeline
        scenes.forEach((scene, index) => {
            const startTime = index * 10; // 10 seconds per scene
            
            // 1. Play Narration & Subtitles
            mainTimeline.call(() => {
                playNarration(scene.text);
                subtitleText.textContent = scene.text;
                sceneNum.textContent = String(scene.num).padStart(2, '0');
                aadhiImg.src = 'images/' + scene.mascot + '.png';
                holoContent.innerHTML = scene.html;
                sceneHeading.textContent = scene.heading;
                
                // Color themes based on section
                applyTheme(scene.section);

                // Entrance animations
                gsap.fromTo(hologram, { opacity:0, scale:0.8, y:50 }, { opacity:1, scale:1, y:0, duration:1, ease:"back.out(1.7)" });
                gsap.fromTo(sceneHeading, { opacity:0, y:-30 }, { opacity:1, y:0, duration:1, ease:"power2.out", delay:0.2 });
                gsap.fromTo(aadhiImg, { y:20 }, { y:0, duration:0.5, ease:"bounce.out" });
                
            }, null, startTime);

            // 2. Continuous scene animations (Zooming/Panning Camera)
            const isZoomIn = index % 2 === 0;
            mainTimeline.fromTo(cameraContainer, 
                { scale: isZoomIn ? 1 : 1.15, x: isZoomIn ? 0 : (index%3===0?-20:20) }, 
                { scale: isZoomIn ? 1.15 : 1, x: isZoomIn ? (index%3===0?-20:20) : 0, duration: 10, ease: "none" }, 
                startTime
            );

            // 3. Exit animations before next scene
            if (index < scenes.length - 1) {
                mainTimeline.to(hologram, { opacity:0, scale:0.9, y:-20, duration:0.5, ease:"power2.in" }, startTime + 9.5);
                mainTimeline.to(sceneHeading, { opacity:0, y:20, duration:0.5, ease:"power2.in" }, startTime + 9.5);
            }
            
            // Special Background Effects triggers
            if(scene.section === "WHAT IS OS") {
                mainTimeline.to(canvas, { opacity: 0.15, duration: 2 }, startTime);
            } else if (scene.section === "FILE SYSTEM") {
                mainTimeline.to(canvas, { opacity: 0.3, duration: 2 }, startTime);
            } else {
                mainTimeline.to(canvas, { opacity: 0, duration: 2 }, startTime);
            }
        });
    }

    function applyTheme(section) {
        let col1, col2;
        switch(section) {
            case "INTRO": col1 = 'rgba(139, 92, 246, 0.2)'; col2 = 'rgba(0, 255, 255, 0.1)'; break;
            case "WHAT IS OS": col1 = 'rgba(99, 102, 241, 0.2)'; col2 = 'rgba(139, 92, 246, 0.1)'; break;
            case "FUNCTIONS": col1 = 'rgba(59, 130, 246, 0.2)'; col2 = 'rgba(99, 102, 241, 0.1)'; break;
            case "PROCESSES": col1 = 'rgba(14, 165, 233, 0.2)'; col2 = 'rgba(59, 130, 246, 0.1)'; break;
            case "MEMORY": col1 = 'rgba(20, 184, 166, 0.2)'; col2 = 'rgba(14, 165, 233, 0.1)'; break;
            case "FILE SYSTEM": col1 = 'rgba(34, 197, 94, 0.2)'; col2 = 'rgba(20, 184, 166, 0.1)'; break;
            case "CPU SCHED": col1 = 'rgba(234, 179, 8, 0.2)'; col2 = 'rgba(239, 68, 68, 0.1)'; break;
            case "DEADLOCK": col1 = 'rgba(249, 115, 22, 0.2)'; col2 = 'rgba(239, 68, 68, 0.1)'; break;
            case "SYNCHRONIZATION": col1 = 'rgba(239, 68, 68, 0.2)'; col2 = 'rgba(249, 115, 22, 0.1)'; break;
            case "TYPES OF OS": col1 = 'rgba(236, 72, 153, 0.2)'; col2 = 'rgba(139, 92, 246, 0.1)'; break;
            case "CONCLUSION": col1 = 'rgba(168, 85, 247, 0.2)'; col2 = 'rgba(236, 72, 153, 0.1)'; break;
            default: col1 = 'rgba(0, 255, 255, 0.1)'; col2 = 'rgba(0, 0, 255, 0.1)';
        }
        gsap.to(crGradient1, { background: `radial-gradient(circle, ${col1}, transparent 70%)`, duration: 2 });
        gsap.to(crGradient2, { background: `radial-gradient(circle, ${col2}, transparent 70%)`, duration: 2 });
    }

    function playNarration(text) {
        if (!synth || isMuted) return;
        synth.cancel(); // Stop current speech
        
        utterance = new SpeechSynthesisUtterance(text);
        
        // Find a natural sounding English voice
        const voices = synth.getVoices();
        const preferredVoice = voices.find(v => v.name.includes('Google UK English Male')) ||
                               voices.find(v => v.name.includes('Google US English')) ||
                               voices.find(v => v.name.includes('Microsoft') && v.lang.includes('en')) ||
                               voices.find(v => v.name.includes('Samantha') || v.name.includes('Daniel') || v.name.includes('Alex')) ||
                               voices.find(v => v.lang.startsWith('en') && !v.localService) || // Prefer cloud voices if available
                               voices.find(v => v.lang === 'en-GB' || v.lang === 'en-US') || 
                               voices[0];
                               
        if (preferredVoice) utterance.voice = preferredVoice;
        
        utterance.rate = 0.85; // Slower speed to prevent staggering
        utterance.pitch = 1.0; // Normal pitch to prevent distortion
        
        synth.speak(utterance);
    }

    function updateProgress() {
        const progress = mainTimeline.progress();
        progressBar.style.width = `${progress * 100}%`;
        
        const totalSeconds = Math.floor(progress * scenes.length * 10);
        const m = Math.floor(totalSeconds / 60);
        const s = String(totalSeconds % 60).padStart(2, '0');
        progressTime.textContent = `${m}:${s} / 5:00`;
    }

    function showFinale() {
        cinema.style.display = 'none';
        finaleScreen.style.display = 'flex';
        gsap.fromTo('.finale-content', { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 1, ease: "elastic.out(1, 0.5)" });
    }

    // Controls
    pauseBtn.addEventListener('click', () => {
        isPaused = !isPaused;
        if(isPaused) {
            mainTimeline.pause();
            if(synth) synth.pause();
            pauseIcon.classList.replace('fa-pause', 'fa-play');
        } else {
            mainTimeline.play();
            if(synth) synth.resume();
            pauseIcon.classList.replace('fa-play', 'fa-pause');
        }
    });

    prevSceneBtn.addEventListener('click', () => {
        if (!mainTimeline) return;
        let currentSceneIndex = Math.floor(mainTimeline.time() / 10);
        if (currentSceneIndex > 0) {
            if (synth) synth.cancel();
            mainTimeline.seek((currentSceneIndex - 1) * 10);
            if (!isPaused) mainTimeline.play();
        }
    });

    nextSceneBtn.addEventListener('click', () => {
        if (!mainTimeline) return;
        let currentSceneIndex = Math.floor(mainTimeline.time() / 10);
        if (currentSceneIndex < scenes.length - 1) {
            if (synth) synth.cancel();
            mainTimeline.seek((currentSceneIndex + 1) * 10);
            if (!isPaused) mainTimeline.play();
        }
    });

    muteBtn.addEventListener('click', () => {
        isMuted = !isMuted;
        if(isMuted) {
            if(synth) synth.cancel();
            muteIcon.classList.replace('fa-volume-high', 'fa-volume-xmark');
        } else {
            // Replay current text if unmuted
            const currentSceneIndex = Math.floor(mainTimeline.time() / 10);
            if(scenes[currentSceneIndex]) {
                playNarration(scenes[currentSceneIndex].text);
            }
            muteIcon.classList.replace('fa-volume-xmark', 'fa-volume-high');
        }
    });

});
