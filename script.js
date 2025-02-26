const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        // Remove 'active' class from all panels
        panels.forEach(p => p.classList.remove('active'));
        
        // Add 'active' class to the clicked panel
        panel.classList.add('active');
    });
});
