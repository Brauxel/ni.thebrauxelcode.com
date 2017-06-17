/* 
  We import our the tiles and title images here
*/

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../images/tiles', false, /\.(png|jpe?g|svg)$/));

alert(images.toSource());
