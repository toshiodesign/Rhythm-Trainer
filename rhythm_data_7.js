(function() {
    if (!window.ALL_PATTERNS) window.ALL_PATTERNS = [];

    // --- Part 7: 複合拍基礎 (Compound Meter Basics: 6/8, 9/8, 12/8) ---
    // 在此模式下，1拍 = 附點四分音符 (Dotted Quarter)
    
    const patterns = [
        {
            id: 'comp_dotted_q',
            type: 'compound',
            name: '附點四分音符 (Dotted Quarter)',
            events: [0], // 佔滿整拍
            // 暫時使用 SVG 文字渲染，請替換為您的 dotted-quarter.svg
            svg: `<svg viewBox="0 0 200 130"><text x="50%" y="70%" dominant-baseline="middle" text-anchor="middle" font-size="80" fill="currentColor">♩.</text></svg>`
        },
        {
            id: 'comp_dotted_r',
            type: 'compound',
            name: '附點休止符 (Dotted Rest)',
            events: [], // 整拍休止
            // 暫時使用 SVG 文字渲染，請替換為您的 dotted-rest.svg
            svg: `<svg viewBox="0 0 200 130"><text x="50%" y="70%" dominant-baseline="middle" text-anchor="middle" font-size="80" fill="currentColor">𝄽.</text></svg>`
        },
        {
            id: 'comp_3_8ths',
            type: 'compound',
            name: '三個八分音符 (Three 8ths)',
            events: [0, 0.333, 0.666], // 複合拍的三等分
            // 這是 6/8 拍的標準節奏，外觀像三連音但沒有 '3' 的標記
            svg: `<svg viewBox="0 0 200 130"><path d="m64.76,29.67v59.2c0,2.03-.67,3.92-2.02,5.66-1.35,1.75-3.08,3.15-5.2,4.21s-4.37,1.59-6.73,1.59c-2.17,0-3.92-.55-5.24-1.66-1.32-1.11-1.98-2.61-1.98-4.5,0-1.46.43-2.88,1.27-4.25.85-1.37,1.97-2.61,3.36-3.72,1.39-1.11,2.91-1.98,4.57-2.62,1.65-.64,3.28-.96,4.89-.96,2.03,0,3.78.59,5.24,1.77V29.67h1.84Z"/><rect x="62.92" y="29.67" width="56.64" height="5.53"/><path d="m147.87,29.67v59.2c0,2.03-.67,3.92-2.02,5.66-1.35,1.75-3.08,3.15-5.2,4.21s-4.37,1.59-6.73,1.59c-2.17,0-3.92-.55-5.24-1.66-1.32-1.11-1.98-2.61-1.98-4.5,0-1.46.43-2.88,1.27-4.25.85-1.37,1.97-2.61,3.36-3.72,1.39-1.11,2.91-1.98,4.57-2.62,1.65-.64,3.28-.96,4.89-.96,2.03,0,3.78.59,5.24,1.77V29.67h1.84Z"/><rect x="119.56" y="29.67" width="28.32" height="5.53"/><path d="m106.32,29.67v59.2c0,2.03-.67,3.92-2.02,5.66-1.35,1.75-3.08,3.15-5.2,4.21-2.13,1.06-4.37,1.59-6.73,1.59-2.17,0-3.92-.55-5.24-1.66-1.32-1.11-1.98-2.61-1.98-4.5,0-1.46.43-2.88,1.27-4.25.85-1.37,1.97-2.61,3.36-3.72,1.39-1.11,2.91-1.98,4.57-2.62,1.65-.64,3.28-.96,4.89-.96,2.03,0,3.78.59,5.24,1.77V29.67h1.84Z"/></svg>`
        },
        {
            id: 'comp_q_8',
            type: 'compound',
            name: '四分+八分 (Quarter + 8th)',
            events: [0, 0.666], // 2:1 的長短比例
            svg: `<svg viewBox="0 0 200 130"><text x="50%" y="70%" dominant-baseline="middle" text-anchor="middle" font-size="60" fill="currentColor">♩ ♪</text></svg>`
        },
        {
            id: 'comp_8_q',
            type: 'compound',
            name: '八分+四分 (8th + Quarter)',
            events: [0, 0.333], // 1:2 的短長比例
            svg: `<svg viewBox="0 0 200 130"><text x="50%" y="70%" dominant-baseline="middle" text-anchor="middle" font-size="60" fill="currentColor">♪ ♩</text></svg>`
        }
    ];

    window.ALL_PATTERNS.push(...patterns);
})();