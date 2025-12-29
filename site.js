
(function(){
  const links = document.querySelectorAll('a[data-scroll]');
  links.forEach(a=>{
    a.addEventListener('click', (e)=>{
      e.preventDefault();
      const id = a.getAttribute('href');
      const el = document.querySelector(id);
      if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });

  const jobBtn = document.getElementById('applyBtn');
  const jobSelect = document.getElementById('position');
  if(jobBtn && jobSelect){
    jobBtn.addEventListener('click', ()=>{
      jobSelect.value = 'Administrative Assistant';
      document.getElementById('apply').scrollIntoView({behavior:'smooth'});
      document.getElementById('fullName').focus();
    });
  }
})();
