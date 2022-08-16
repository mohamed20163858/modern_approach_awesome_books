const singlePage = () => {
    const navMenus = document.querySelectorAll('header nav ul li a');
    navMenus[1].style.color = 'blue';
    for (let i = 0; i < navMenus.length; i += 1) {
        navMenus[i].addEventListener('click', () => {
          for (let j = 0; j < navMenus.length; j += 1) {
            const ele = document.querySelector(`#${navMenus[j].href.split('#')[1]}`);
            if (navMenus[j] === navMenus[i]) {
              ele.classList.remove('hidden');
              navMenus[j].style.color = 'blue';
            } else {
              ele.classList.add('hidden');
              navMenus[j].style.color = 'black';
            }
          }
        });
      }
      
}
export {singlePage};