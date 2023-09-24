// import handleState from '../../hooks/handle-state';
// import useThrottle from '../../hooks/throttle';
// fade the header background in until the bottom of the intro section is reached
// fade out the header background until the top of the intro section is reached
// const configHeader = () => {
//   const [desiredOpacity, throttleLimit] = [0.9, 80];
//   const [hasBackground, setHasBackground] = handleState(false);
//   const header = document.querySelector('.header');
//   const intro = document.querySelector('.intro-container');
//   const { offsetHeight: introHeight } = intro;
//   const { offsetHeight: headerHeight } = header;
//   if (!header) return;

//   const { innerHeight } = window;
//   const fadeThreshold = Number.parseFloat(
//     (((introHeight - headerHeight) / innerHeight) * innerHeight).toFixed(2),
//   );

//   const setHeaderBackground = () => {
//     const { scrollY } = window;
//     if (scrollY > fadeThreshold) {
//       // use a flag to prevent unnecessary style changes
//       if (hasBackground()) return;
//       // eslint-disable-next-line unicorn/consistent-destructuring
//       header.style.backgroundColor = `rgba(0,0,0,${desiredOpacity})`;
//       setHasBackground(true);
//       return;
//     }
//     const opacity = +(((scrollY / fadeThreshold) * desiredOpacity).toFixed(2));
//     // eslint-disable-next-line unicorn/consistent-destructuring
//     header.style.backgroundColor = `rgba(0,0,0,${opacity})`;
//     setHasBackground(false);
//   };

//   setHeaderBackground();
//   const throttledSetHeaderBackground = useThrottle(setHeaderBackground, throttleLimit);
//   window.addEventListener('scroll', throttledSetHeaderBackground, { passive: true });
// };

const configHeaderTwo = () => {
  const header = document.querySelector('.header');
  if (!header) return;
  const introRef = document.querySelector('.intro-observer-ref');
  const headerRef = document.querySelector('.intro-observer-ref--top');
  const options = {
    root: null, // using the viewport as the root
    rootMargin: '0px', // no margins
    threshold: 1, // 100% of the target's visibility
  };

  const introObserver = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        header.classList.remove('header-has--background');
      } else {
        header.classList.add('header-has--background');
      }
    }
  }, options);

  const headerObserver = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        header.classList.remove('header-has--filter');
      } else {
        header.classList.add('header-has--filter');
      }
    }
  });

  introObserver.observe(introRef);
  headerObserver.observe(headerRef);
};

const initHeader = () => {
  configHeaderTwo();

  window.addEventListener('mouseover', (e) => {
    const { target } = e;
    if (target && target.nodeType === '1') {
      console.log(target);
    }
  });
};

export default initHeader;