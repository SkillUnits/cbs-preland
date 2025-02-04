document.addEventListener('DOMContentLoaded', () => {
    const qaPairs = document.querySelectorAll('.table-item');
  
    qaPairs.forEach((pair) => {
      const question = pair.querySelector('.question');
      const answer = pair.querySelector('.answer');
      const chevron = pair.querySelector('.chevron');
      
      question.addEventListener('click', () => {
        if (answer.classList.contains('visible')) {
          answer.classList.remove('visible');
          answer.classList.add('hiding');
          chevron.classList.remove('open');
        } else {
          answer.classList.remove('hiding');
          answer.classList.add('visible');
          chevron.classList.add('open');
        }
      });
    });
  });
  
  