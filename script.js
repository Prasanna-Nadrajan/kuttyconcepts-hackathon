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
        num: 1, section: "INTRO", duration: 20,
        text: "Welcome back! Today, we are diving deep into the most critical balancing act your OS performs: Memory Management. Imagine your RAM is just a shared, physical study desk.",
        mascot: "happy", heading: "Memory Management",
        html: `<div class="ram-desk-container"><div class="ram-desk empty"></div></div><p class="highlight" style="margin-top:2rem; text-align:center;">Your RAM is like a physical desk.</p>`
    },
    {
        num: 2, section: "CHAOS", duration: 20,
        text: "When you open programs on your computer, they need space to work. Watch what happens as multiple applications pile onto our desk all at once.",
        mascot: "concerned", heading: "The Chaotic Apps",
        html: `<div class="ram-desk-container"><div class="ram-desk messy"><div class="app-block app-blue" style="width:100px; left:10px; top:10px">App 1</div><div class="app-block app-red" style="width:150px; left:40px; top:30px">App 2</div><div class="app-block app-green" style="width:80px; left:120px; top:5px">App 3</div></div></div>`
    },
    {
        num: 3, section: "CONTIGUOUS", duration: 20,
        text: "Early systems used something called contiguous allocation. This meant giving every single app one massive, solid chunk of unbroken space on the desk.",
        mascot: "lecturing", heading: "Contiguous Allocation",
        html: `<div class="ram-desk-container"><div class="ram-desk ordered"><div class="app-bar app-blue" style="width:30%">App 1</div><div class="app-bar app-red" style="width:40%">App 2</div><div class="app-bar app-green" style="width:20%">App 3</div></div></div>`
    },
    {
        num: 4, section: "FRAGMENTATION", duration: 20,
        text: "But here is the problem. As you open and close different apps all day long, they leave behind tiny, disconnected, unusable gaps of space. We call this Fragmentation.",
        mascot: "lecturing", heading: "Fragmentation Appears",
        html: `<div class="ram-desk-container"><div class="ram-desk ordered"><div class="app-bar app-blue" style="width:30%">App 1</div><div class="app-gap" style="width:15%"></div><div class="app-bar app-red" style="width:25%">App 2</div><div class="app-gap" style="width:10%"></div><div class="app-bar app-green" style="width:20%">App 3</div></div></div><p class="highlight" style="margin-top:1rem; color:#f87171; text-align:center;">External Fragmentation: Gaps of unused space.</p>`
    },
    {
        num: 5, section: "THE ERROR", duration: 20,
        text: "Now, what happens if you try to open a massive new video editing program? Even if you have enough total free space, it won't fit because the space is broken up!",
        mascot: "confused", heading: "The Error",
        html: `<div class="ram-desk-container"><div class="ram-desk ordered"><div class="app-bar app-blue" style="width:30%">App 1</div><div class="app-gap" style="width:15%"></div><div class="app-bar app-red" style="width:25%">App 2</div><div class="app-gap" style="width:10%"></div><div class="app-bar app-green" style="width:20%">App 3</div></div></div>
        <div class="massive-app error-shake" style="margin-top:1rem">Massive Video Editor (Needs 25%)</div>`
    },
    {
        num: 6, section: "PAGING", duration: 20,
        text: "To fix this completely, the OS invented Paging! First, it slices up your physical RAM into small, perfectly equal-sized blocks known as 'Frames'.",
        mascot: "confident", heading: "The Solution: Paging",
        html: `<div class="ram-desk-container"><div class="ram-desk ordered paged"><div class="frame"></div><div class="frame"></div><div class="frame"></div><div class="frame"></div><div class="frame"></div><div class="frame"></div><div class="frame"></div><div class="frame"></div><div class="frame"></div><div class="frame"></div></div></div><p class="highlight" style="margin-top:1rem; text-align:center;">Physical RAM divided into exactly equal "Frames"</p>`
    },
    {
        num: 7, section: "PAGING", duration: 20,
        text: "Next, it takes that massive video editing app you wanted to open, and it slices the app itself into matching, equal-sized blocks called 'Pages'.",
        mascot: "confident", heading: "Slicing the App",
        html: `<div class="massive-app sliced">
            <div class="page-block">Page 1</div>
            <div class="page-block">Page 2</div>
            <div class="page-block">Page 3</div>
            <div class="page-block">Page 4</div>
        </div>`
    },
    {
        num: 8, section: "PAGING", duration: 20,
        text: "Now for the magic! Because the pieces are the same size, the OS can scatter the app's pages into any available, non-adjacent frames in RAM. It fits perfectly!",
        mascot: "celebrating success", heading: "A Perfect Fit",
        html: `<div class="ram-desk-container"><div class="ram-desk ordered paged">
            <div class="frame blue-f">A1</div><div class="frame orange-f">P1</div><div class="frame blue-f">A1</div><div class="frame orange-f">P2</div>
            <div class="frame red-f">A2</div><div class="frame red-f">A2</div><div class="frame orange-f">P3</div><div class="frame green-f">A3</div>
            <div class="frame green-f">A3</div><div class="frame orange-f">P4</div>
        </div></div><p class="highlight" style="margin-top:1rem; color:#4ade80; text-align:center;">No more external fragmentation!</p>`
    },
    {
        num: 9, section: "VIRTUAL MEMORY", duration: 20,
        text: "But wait... what if you open so many browser tabs that your RAM gets one hundred percent full? There are absolutely no frames left.",
        mascot: "concerned", heading: "100% Capacity",
        html: `<div class="ram-desk-container" style="position:relative"><div class="capacity-warning flashing">⚠️ 100% CAPACITY REACHED</div><div class="ram-desk ordered paged full-alert">
            <div class="frame blue-f">A</div><div class="frame blue-f">A</div><div class="frame orange-f">B</div><div class="frame orange-f">B</div>
            <div class="frame red-f">C</div><div class="frame red-f">C</div><div class="frame green-f">D</div><div class="frame green-f">D</div>
            <div class="frame purple-f">E</div><div class="frame purple-f">E</div>
        </div></div>`
    },
    {
        num: 10, section: "VIRTUAL MEMORY", duration: 20,
        text: "Don't panic! The OS uses Virtual Memory. It acts like a highly intelligent librarian, using a section of your Hard Drive as emergency backup RAM.",
        mascot: "lecturing", heading: "Virtual Memory",
        html: `<div class="virtual-memory-view">
            <div class="ram-disk-split">
                <div class="vm-ram"><i class="fas fa-memory"></i><br>Physical RAM<br><span style="font-size:0.7rem">(Full)</span></div>
                <div class="vm-arrow"><i class="fas fa-exchange-alt"></i></div>
                <div class="vm-hdd"><i class="fas fa-hdd"></i><br>Hard Drive<br><span style="font-size:0.7rem">(Emergency Swap Space)</span></div>
            </div>
        </div>`
    },
    {
        num: 11, section: "VIRTUAL MEMORY", duration: 20,
        text: "The OS finds pages from apps you haven't looked at in a while, and temporarily 'Swaps' them out to the Hard Drive. This frees up precious space!",
        mascot: "lecturing", heading: "Paging Out (Swap Out)",
        html: `<div class="virtual-memory-view">
            <div class="ram-disk-split">
                <div class="vm-ram"><div class="frame purple-f fade-out">E</div></div>
                <div class="vm-arrow swap-out-anim">→</div>
                <div class="vm-hdd"><div class="frame grey-f">E</div></div>
            </div>
        </div><p class="highlight" style="margin-top:1rem; text-align:center;">Old pages moved to disk.</p>`
    },
    {
        num: 12, section: "PAGE FAULT", duration: 20,
        text: "If the CPU suddenly needs to use a page that was sent away to the disk, it throws an alert called a 'Page Fault'. The CPU has to stop and wait.",
        mascot: "confident", heading: "Page Faults",
        html: `<div class="cpu-alert-view">
            <div class="cpu-icon fault-flash"><i class="fas fa-microchip"></i></div>
            <div class="fault-text">PAGE FAULT!</div>
            <p>CPU tried to access Page 'E', but it's on the Hard Drive!</p>
        </div>`
    },
    {
        num: 13, section: "PAGE FAULT", duration: 20,
        text: "The OS springs into action, fetches the missing page back from the slow Hard Drive, and swaps it back into a free space in fast RAM.",
        mascot: "confident", heading: "Paging In (Swap In)",
        html: `<div class="virtual-memory-view">
            <div class="ram-disk-split">
                <div class="vm-ram"><div class="frame purple-f">E</div></div>
                <div class="vm-arrow swap-in-anim">←</div>
                <div class="vm-hdd"><div class="frame grey-f fade-out">E</div></div>
            </div>
        </div><p class="highlight" style="margin-top:1rem; color:var(--cyan); text-align:center;">Page fetched back to RAM.</p>`
    },
    {
        num: 14, section: "THRASHING", duration: 20,
        text: "Be careful, though! Open too many heavy apps, and the OS spends all its time frantically swapping pages back and forth instead of working. This nightmare is called 'Thrashing'!",
        mascot: "confused", heading: "Thrashing",
        html: `<div class="virtual-memory-view">
            <div class="ram-disk-split thrash-anim">
                <div class="vm-ram thrash-box"></div>
                <div class="vm-arrow thrash-arrows">⇄</div>
                <div class="vm-hdd thrash-box"></div>
            </div>
        </div><div class="capacity-warning flashing" style="position:static; margin:1rem auto; width:fit-content; color:#fff; background:#f87171">CRITICAL SYSTEM HALT</div>`
    },
    {
        num: 15, section: "CONCLUSION", duration: 20,
        text: "When a system is thrashing, your entire computer grinds to a halt. So, treat your RAM well! It’s the ultimate digital Tetris master. Thanks for watching!",
        mascot: "confident", heading: "Conclusion",
        html: `<div style="text-align:center; padding-top:2rem">
            <i class="fas fa-thumbs-up" style="font-size:4rem; color:var(--cyan); margin-bottom:1rem; animation:pulseGlow 2s infinite"></i>
            <h3>You mastered Memory Management!</h3>
            <p style="color:#aaa; font-size:0.9rem; margin-top:1rem">Aadhi is proud of you.</p>
        </div>`
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
            const startTime = index * 20; // 20 seconds per scene
            
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
                { scale: isZoomIn ? 1.15 : 1, x: isZoomIn ? (index%3===0?-20:20) : 0, duration: 20, ease: "none" }, 
                startTime
            );

            // 3. Exit animations before next scene
            if (index < scenes.length - 1) {
                mainTimeline.to(hologram, { opacity:0, scale:0.9, y:-20, duration:0.5, ease:"power2.in" }, startTime + 19.5);
                mainTimeline.to(sceneHeading, { opacity:0, y:20, duration:0.5, ease:"power2.in" }, startTime + 19.5);
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
        
        const totalSeconds = Math.floor(progress * scenes.length * 20);
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
        let currentSceneIndex = Math.floor(mainTimeline.time() / 20);
        if (currentSceneIndex > 0) {
            if (synth) synth.cancel();
            mainTimeline.seek((currentSceneIndex - 1) * 20);
            if (!isPaused) mainTimeline.play();
        }
    });

    nextSceneBtn.addEventListener('click', () => {
        if (!mainTimeline) return;
        let currentSceneIndex = Math.floor(mainTimeline.time() / 20);
        if (currentSceneIndex < scenes.length - 1) {
            if (synth) synth.cancel();
            mainTimeline.seek((currentSceneIndex + 1) * 20);
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
