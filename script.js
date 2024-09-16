// script.js

document.addEventListener('DOMContentLoaded', () => {
  // Manejo de pestañas para mostrar/ocultar formularios
  const tabs = document.querySelectorAll('.tabs button');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove 'active' class from all tabs
      tabs.forEach(t => t.classList.remove('active'));
      
      // Hide all forms
      document.querySelectorAll('.form-section').forEach(section => {
        section.style.display = 'none';
      });
      
      // Show the selected form
      const formId = tab.getAttribute('onclick').split("'")[1] + '-form';
      document.getElementById(formId).style.display = 'block';
      
      // Add 'active' class to the clicked tab
      tab.classList.add('active');
    });
  });

  // Set default tab to 'Candidatos'
  document.querySelector('.tabs button').click();
});
