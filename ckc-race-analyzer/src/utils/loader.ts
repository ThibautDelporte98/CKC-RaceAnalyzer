export const showLoader = () => {
    const existing = document.getElementById('global-loader');
    if (existing) return; // prevent duplicates
  
    const loader = document.createElement('div');
    loader.id = 'global-loader';
    loader.innerHTML = `
      <div class="loader-overlay">
        <div class="spinner"></div>
      </div>
    `;
    document.body.appendChild(loader);
  };
  
  
  export const hideLoader = () => {
    const loader = document.getElementById('global-loader');
    if (loader) {
      document.body.removeChild(loader);
    }
  };
  