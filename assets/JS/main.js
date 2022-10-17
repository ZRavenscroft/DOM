// var img = document.getElementById("main-pic")
// function changeIMG(img){
//    img.setAttribute('src', img);
// }

// function changeIMG() {
//     let img = document.querySelector("img");
//     let image = img.getAttribute("src");
//     document.querySelector("a").setAttribute("img", "image")
// }

var i = 0;
var image = document.getElementById("main-pic");

var imgs = new Array(`https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/few_off/Centenario/gallery/Lamborghini-Centenario-01_M.jpg`, `https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/few_off/Centenario/gallery/Lamborghini-Centenario-01_M.jpg`, `https://www.alainclass.com/wp-content/uploads/2019/07/5-VENENO.jpg`, `https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_675,q_auto:eco,w_1200/cms/uploads/jmTab8VbRQOJhARIbXtu`, `https://images.drive.com.au/driveau/image/upload/c_fill,h_2508,w_4459/q_auto:eco/f_auto/v1/cms/uploads/7TeMngkgQDiUTJDdknRf`);
function changeIMG() {
    i++;
    image.src = imgs[i];
}


const users = [
    { name: 'Miyagi', age: 30 },
    { name: 'AndyPanda', age: 28 },
    { name: 'TheWeeknd', age: 32 },
  ];
  
  const result = [];
  for (const user of users) {
    result.push(user.name);
  }
  
  console.log(result);

//   const result = [];
// for (const { age } of users) {
//   result.push(age);
// }

// console.log(result);