// Initialize Vercel Speed Insights for vanilla HTML/JavaScript
// This creates the global queue and loads the Speed Insights script

window.si = window.si || function () { 
  (window.siq = window.siq || []).push(arguments); 
};

// Create and inject the Speed Insights script
(function() {
  const script = document.createElement('script');
  script.defer = true;
  
  // In production (deployed on Vercel), use the optimized path
  // In development, use the debug version
  const isDev = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  script.src = isDev 
    ? 'https://va.vercel-scripts.com/v1/speed-insights/script.debug.js'
    : '/_vercel/speed-insights/script.js';
  
  // Add error handling
  script.onerror = function() {
    console.log('[Vercel Speed Insights] Failed to load script. Please check if any content blockers are enabled.');
  };
  
  document.head.appendChild(script);
})();
