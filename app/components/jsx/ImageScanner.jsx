/* 
  We import our images here
*/

export default function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  
  return images;
}