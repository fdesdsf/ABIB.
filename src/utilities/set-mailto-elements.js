import { mailtoHref } from '../data/constants';
/**
 * configMailto
 * @description config mailto links to open email client with subject already filled out
*/
const initMailtoElements = () => {
  const mailtoLinks = document?.querySelectorAll('.mailto-link');
  if (mailtoLinks === null) return;
  // const subject = `subject=${encodeURIComponent('Contacting you from your portfolio site')}`;
  // const email = 'ottofy@zohomail.com';
  for (const link of mailtoLinks) {
    // link.href = mailtoHref
    link.setAttribute('href', mailtoHref);
  }
  // for (const link of mailtoLinks) {
  //   link.setAttribute('href', `mailto:${email}?${subject}`);
  // }
};

export default initMailtoElements;