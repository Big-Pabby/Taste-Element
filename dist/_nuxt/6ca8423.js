(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1285:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n(87),n(43),n(168),n(169),n(1288);var r=n(170),c=Object(r.c)("menu's",{state:function(){return{menus:[{id:1,title:"Meat Balls",image:"meatballs.webp",category:"Meat",quantity:1},{id:2,title:"Mississippi Mud Pie",image:"mississippi-mud-pie.webp",category:"Pastery",quantity:1},{id:3,title:"Strawberry Rhubarb Pie",image:"strawberry-rhubarb-pie.webp",category:"Pastery",quantity:1},{id:4,title:"Lobster Roll",image:"lobster-roll.webp",category:"Pastery",quantity:1},{id:5,title:"Mini Corn Dogs",image:"mini-corn-dogs.webp",category:"Pastery",quantity:1},{id:6,title:"Nashville Hot Chicken",image:"nashville-hot-chicken.webp",category:"Meat",quantity:1},{id:7,title:"Roasted Pheasant",image:"roasted-pheasant.webp",category:"Meat",quantity:1},{id:8,title:"Deep Dish Pizza Chicago",image:"deep-dish-pizza-chicago.webp",category:"Pizza",quantity:1},{id:9,title:"Elk Burger",image:"elk-burger.webp",category:"Burger",quantity:1},{id:10,title:"Cornmeal Johnnycakes",image:"cornmeal-johnnycakes.webp",category:"Pastery",quantity:1}],searchMenu:[],category:"",searchField:"",singleMenu:{},cart:[]}},getters:{Menus:function(e){return e.menus.filter((function(t){return""===e.category?t:t.category===e.category}))},getCart:function(e){return e.cart},searchedMenu:function(e){return e.searchMenu},fetchSingleMenu:function(e){return e.singleMenu}},actions:{onSearchChange:function(e){var t=this;if(this.searchField=e,""===this.searchField)return this.searchMenu=[];this.searchMenu=this.menus.filter((function(menu){return menu.title.toLowerCase().includes(t.searchField.toLowerCase())}))},clearSearchMenu:function(){this.searchMenu=[],this.searchField=""},addToCart:function(e){var t=this.cart.find((function(t){return t.id===e.id}));t?t.quantity+=1:this.cart.push(e)},getSingleMenu:function(e){this.singleMenu=this.menus.filter((function(menu){return menu.id===e}))},meatCategory:function(){this.category="Meat"},pizzaCategory:function(){this.category="Pizza"},burgerCategory:function(){this.category="Burger"},increment:function(e){e.quantity>=1&&(this.cart.quantity=e.quantity++)},decrement:function(e){e.quantity>1&&(this.cart.quantity=e.quantity--)}}})},1288:function(e,t,n){"use strict";var r=n(11),c=n(133).find,o=n(336),d="find",l=!0;d in[]&&Array(1).find((function(){l=!1})),r({target:"Array",proto:!0,forced:l},{find:function(e){return c(this,e,arguments.length>1?arguments[1]:void 0)}}),o(d)},1293:function(e,t,n){var map={"./alabama-fried-green-tomato.webp":1301,"./apple-cider-donuts.webp":1302,"./beef-brisket.webp":1303,"./cornmeal-johnnycakes.webp":1304,"./deep-dish-pizza-chicago.webp":1305,"./elk-burger.webp":1306,"./enchilada.webp":1307,"./finger-steaks.webp":1308,"./fried-ravioli-bread-crumbs.webp":1309,"./hot-wings.webp":1310,"./key-lime-pie-slice.webp":1311,"./lobster-roll.webp":1312,"./meatballs.webp":1313,"./mini-corn-dogs.webp":1314,"./mississippi-mud-pie.webp":1315,"./nashville-hot-chicken.webp":1316,"./pasties-dish.webp":1317,"./roasted-pheasant.webp":1318,"./slow-smoked-brisket-burnt-ends-barbecue-with-sides.webp":1319,"./strawberry-rhubarb-pie.webp":1320};function r(e){var t=c(e);return n(t)}function c(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=c,e.exports=r,r.id=1293},1301:function(e,t,n){e.exports=n.p+"img/alabama-fried-green-tomato.6263186.webp"},1302:function(e,t,n){e.exports=n.p+"img/apple-cider-donuts.00c04f7.webp"},1303:function(e,t,n){e.exports=n.p+"img/beef-brisket.d4e3deb.webp"},1304:function(e,t,n){e.exports=n.p+"img/cornmeal-johnnycakes.0b73587.webp"},1305:function(e,t,n){e.exports=n.p+"img/deep-dish-pizza-chicago.3b4caa0.webp"},1306:function(e,t,n){e.exports=n.p+"img/elk-burger.2ce317a.webp"},1307:function(e,t,n){e.exports=n.p+"img/enchilada.2fb7056.webp"},1308:function(e,t,n){e.exports=n.p+"img/finger-steaks.b292b74.webp"},1309:function(e,t,n){e.exports=n.p+"img/fried-ravioli-bread-crumbs.115d560.webp"},1310:function(e,t,n){e.exports=n.p+"img/hot-wings.06e4fb0.webp"},1311:function(e,t,n){e.exports=n.p+"img/key-lime-pie-slice.90581a6.webp"},1312:function(e,t,n){e.exports=n.p+"img/lobster-roll.abc27ba.webp"},1313:function(e,t,n){e.exports=n.p+"img/meatballs.7b9da90.webp"},1314:function(e,t,n){e.exports=n.p+"img/mini-corn-dogs.667d6cc.webp"},1315:function(e,t,n){e.exports=n.p+"img/mississippi-mud-pie.83c661d.webp"},1316:function(e,t,n){e.exports=n.p+"img/nashville-hot-chicken.b78dd55.webp"},1317:function(e,t,n){e.exports=n.p+"img/pasties-dish.6369e4b.webp"},1318:function(e,t,n){e.exports=n.p+"img/roasted-pheasant.ab421c1.webp"},1319:function(e,t,n){e.exports=n.p+"img/slow-smoked-brisket-burnt-ends-barbecue-with-sides.537e2e0.webp"},1320:function(e,t,n){e.exports=n.p+"img/strawberry-rhubarb-pie.873a2a6.webp"},1328:function(e,t,n){var content=n(1347);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(167).default)("74a80548",content,!0,{sourceMap:!1})},1346:function(e,t,n){"use strict";n(1328)},1347:function(e,t,n){var r=n(166)(!1);r.push([e.i,".cart[data-v-e241ebca]{background:#f4f4f4;padding:20px 0;min-height:100vh}.menu[data-v-e241ebca]{background:#fff;max-width:600px;padding:15px;margin:10px auto;border-radius:10px;display:flex;align-items:center;justify-content:space-between}.menu-content[data-v-e241ebca]{width:50%}.menu-image img[data-v-e241ebca]{width:150px;height:150px;border-radius:50%}h2[data-v-e241ebca]{font-size:18px}.content-row[data-v-e241ebca]{justify-content:space-between;font-weight:700}.content-row[data-v-e241ebca],.quantity[data-v-e241ebca]{display:flex;align-items:center}.quantity[data-v-e241ebca]{justify-content:center;text-align:center;background:var(--color-bg-primary);padding:2px 20px;border-radius:20px}.quantity p[data-v-e241ebca]{margin:0 15px 2px}.quantity h3[data-v-e241ebca]{cursor:pointer;font-size:20px}@media screen and (max-width:500px){.menu-image img[data-v-e241ebca]{width:100px;height:100px}.menu-content[data-v-e241ebca]{width:60%}}",""]),e.exports=r},1374:function(e,t,n){"use strict";n.r(t);n(134);var r=n(1285),c={data:function(){return{menuStore:Object(r.a)(),loading:!1,cartItems:null}},mounted:function(){var e=this;this.loading=!0,setTimeout((function(){e.loading=!1,e.cartItems=e.menuStore.getCart,console.log(e.cartItems)}),1e3)},methods:{incrementCart:function(e){this.menuStore.increment(e)},decrementCart:function(e){this.menuStore.decrement(e)}}},o=(n(1346),n(103)),component=Object(o.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"cart"},e._l(e.cartItems,(function(menu){return r("div",{key:menu.id,staticClass:"container"},[r("div",{staticClass:"menu"},[r("div",{staticClass:"menu-image"},[r("img",{attrs:{src:n(1293)("./"+menu.image),alt:""}})]),e._v(" "),r("div",{staticClass:"menu-content"},[r("h2",[e._v(e._s(menu.title))]),e._v(" "),r("p",[e._v(e._s(menu.category))]),e._v(" "),r("div",{staticClass:"content-row"},[e._m(0,!0),e._v(" "),r("div",{staticClass:"quantity"},[r("h3",{on:{click:function(t){return e.incrementCart(menu)}}},[e._v("+")]),e._v(" "),r("p",[e._v(e._s(menu.quantity))]),e._v(" "),r("h3",{on:{click:function(t){return e.decrementCart(menu)}}},[e._v("-")])])])])])])})),0)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",[n("span",[e._v("$")]),e._v("15.00")])}],!1,null,"e241ebca",null);t.default=component.exports}}]);