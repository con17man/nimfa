import { navigate } from 'gatsby';

/**
 * @description this method is used to create anchor tags based on the name of
 * the section which needs to be navigated at.
 * @param {string} string
 * @returns {string} the slug of the string provided
 */
function slugify(string) {
  const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
  const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
  const p = new RegExp(a.split('').join('|'), 'g')

  return string.toString().toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, '-si-') // Replace & with 'și'
    .replace(/[^\w\\-]+/g, '') // Remove all non-word characters
    .replace(/\\-\\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
};


/**
 * @description this method is used when the user navigates in the same page but
 * on different anchor tags. using <Link /> with anchor tags keeps the menu focused
 * @param {*} evt the propagated event (Mouse Event)
 */
function handleSubMenuNav(evt) {

  evt.preventDefault();
  evt.target.blur();
  navigate(evt.target.href);

};

export {
  slugify,
  handleSubMenuNav
}