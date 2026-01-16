// Small UI improvements: placeholder for tracking / search
document.addEventListener('click', function(e){
  // Demo: internal link tracking placeholder
  if(e.target.tagName === 'A' && e.target.hostname === location.hostname){
    // console.log('Internal link:', e.target.href);
  }
});