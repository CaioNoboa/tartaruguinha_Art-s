(this["webpackJsonpgama-challange-four-frontend"]=this["webpackJsonpgama-challange-four-frontend"]||[]).push([[0],{47:function(e,t,c){},49:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){},82:function(e,t,c){},83:function(e,t,c){},84:function(e,t,c){},85:function(e,t,c){},86:function(e,t,c){},87:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){},90:function(e,t,c){},91:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),r=c(8),i=c.n(r),n=c(7),j=c(2),d=c(3),o=[{title:"Loja",url:"/categorias",cName:"nav-links"},{title:"Projetos",url:"/",cName:"nav-links"},{title:"Hist\xf3ria",url:"/",cName:"nav-links"}],l=(c(47),c(0));function u(){return Object(l.jsxs)("div",{className:"detail-container",children:[Object(l.jsx)("div",{className:"first-detail"}),Object(l.jsx)("div",{className:"second-detail"})]})}c(49);function b(e){return Object(l.jsx)("div",{className:"container-button",children:Object(l.jsx)(n.b,{className:"button",to:e.link,children:e.text})})}var O=c.p+"static/media/logo-branco.bf5ab4d4.svg",m=c(37);c(59);function h(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),c=t[0],s=t[1];return Object(l.jsxs)("div",{className:"header-menu-container",children:[Object(l.jsx)("div",{className:"logo-container",children:Object(l.jsx)(n.c,{to:"/",children:Object(l.jsx)("img",{src:O})})}),Object(l.jsxs)("nav",{className:"NavBarItems",children:[Object(l.jsx)("div",{className:"menu-icon",onClick:function(){s(!c)},children:Object(l.jsx)("i",{className:c?"fas fa-times":"fas fa-bars"})}),Object(l.jsx)("div",{className:"links-container",children:Object(l.jsxs)("ul",{className:c?"nav-menu active":"nav-menu",children:[o.map((function(e,t){return Object(l.jsx)(m.Link,{activeClass:"active",to:e.title,spy:!0,smooth:!0,offset:0,duration:500,children:Object(l.jsx)("li",{children:Object(l.jsx)(n.c,{to:e.url,className:e.cName,href:e.url,children:e.title})},t)},t)})),Object(l.jsx)("div",{children:Object(l.jsx)(b,{text:"CONTATO",link:"/contato"})})]})})]}),Object(l.jsx)(u,{})]})}c(60);function x(){return Object(l.jsx)("div",{className:"container-intro",children:Object(l.jsxs)("div",{className:"container-text",children:[Object(l.jsxs)("div",{className:"title",children:["O PRESENTE ",Object(l.jsx)("br",{}),"ESPECIAL PARA ",Object(l.jsx)("br",{}),"QUEM VOC\xca AMA."]}),Object(l.jsx)("div",{className:"title-mobile",children:"O PRESENTE ESPECIAL PARA QUEM VOC\xca AMA."})]})})}var v=c(38),p=c.n(v).a.create({baseURL:"https://tartaruguinha-arts-api.herokuapp.com",method:"GET"}),g=c(94);c(79),c(80);function f(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),c=t[0],s=t[1];Object(a.useEffect)((function(){p.get("/produtos").then((function(e){return s(e.data.data)}))}),[]);var r=c;return Object(l.jsxs)("div",{className:"container-carousel-showcase",children:[Object(l.jsx)("div",{className:"carousel-title",children:"PRODUTOS EM DESTAQUE"}),Object(l.jsx)(g.a,{variant:"dark",children:r.map((function(e){if(1===e.featured)return Object(l.jsxs)(g.a.Item,{interval:99e3,className:"container-images",children:[Object(l.jsx)("img",{className:"d-block w-20 mx-auto",src:e.image,alt:"Produto ".concat(e.name)}),Object(l.jsx)("div",{className:"prize-tag-carousel",children:Object(l.jsx)("div",{children:e.prize.toLocaleString("pt-br",{style:"currency",currency:"BRL"})})}),Object(l.jsx)(g.a.Caption,{className:"row",children:Object(l.jsx)("div",{className:"product-title-carousel",children:e.name})})]},e.id)}))}),Object(l.jsx)("div",{children:Object(l.jsx)(b,{text:"OUTROS PRODUTOS",link:"/categorias"})})]})}c(81);function N(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),c=t[0],s=t[1];Object(a.useEffect)((function(){p.get("/produtos").then((function(e){return s(e.data.data)}))}),[]);var r=c;return Object(l.jsxs)("div",{className:"container-main-products-showcase",children:[Object(l.jsxs)("div",{className:"category-container",children:[Object(l.jsx)("div",{className:"category-title-row",children:Object(l.jsx)("div",{className:"category-title",children:"PRODUTOS EM DESTAQUE"})}),Object(l.jsx)("div",{className:"products-row",children:r.map((function(e){if(1===e.featured)return Object(l.jsxs)("div",{className:"product-card",children:[Object(l.jsx)("div",{children:Object(l.jsx)("img",{src:e.image})}),Object(l.jsx)("div",{className:"product-title",children:e.name}),Object(l.jsx)("div",{className:"prize-tag",children:Object(l.jsx)("div",{children:e.prize.toLocaleString("pt-br",{style:"currency",currency:"BRL"})})})]},e.id_product)}))})]}),Object(l.jsx)("div",{children:Object(l.jsx)(b,{text:"OUTROS PRODUTOS",link:"/categorias"})})]})}var y=c.p+"static/media/theo-history-image.f04a13c4.png";c(82);function w(){return Object(l.jsxs)("div",{className:"container-history-section",children:[Object(l.jsx)("div",{className:"card-img-historia",children:Object(l.jsx)("img",{src:y,alt:"imagem historia"})}),Object(l.jsxs)("div",{className:"card-text",children:[Object(l.jsx)("h3",{className:"card-titulo-historia",children:"HIST\xd3RIA"}),Object(l.jsxs)("p",{className:"card-texto-historia",children:["A Tartaruguinha Art\u2019s nasceu de forma espont\xe2nea, atrav\xe9s de um projeto de estudo e cuidado envolvendo tartarugas marinhas. O projeto era coordenado por uma amiga pr\xf3xima do nosso fundador Th\xe9o Costa e estava precisando de patroc\xednio. Com o intuito de ajudar o projeto, surgiu a ideia de fazer estampa para canecas, e com a ajuda de um amigo publicit\xe1rio as estampas foram criadas. A empresa nem existia ainda, mas foram vendidas algumas canecas e posteriormente algumas m\xe1scaras, tudo em prol do projeto.",Object(l.jsx)("br",{})," ",Object(l.jsx)("br",{}),"Por que o nome Tartaruguinha?",Object(l.jsx)("br",{}),"Devem pensar que \xe9 por causa do projeto, mas n\xe3o \xe9. O nome Tartaruguinha Art\u2019s nasceu do apelido da filha do nosso fundador e instrutor de mergulho Theo Costa. No processo de criar um nome para a loja, ele lembrou do apelido que deu quando a filha n\xe3o tinha nem um ano de vida. E assim nasceu a Tartaruguinha Art\u2019s!"]})]})]})}var E=c.p+"static/media/projects-image.d51567f8.png";c(83);function T(e){return Object(l.jsxs)("div",{className:"container-projects-section",children:[Object(l.jsxs)("div",{className:"card-text",children:[Object(l.jsx)("div",{children:Object(l.jsx)("h3",{className:"card-title-history one",children:"PROJETOS"})}),Object(l.jsx)("div",{className:"card-responsivo",children:Object(l.jsx)("p",{className:"card-texto-historia",children:"Por que o nome Tartaruguinha? Devem pensar que \xe9 por causa do projeto, mas n\xe3o \xe9. O nome Tartaruguinha Art\u2019s nasceu do apelido da filha do nosso fundador e instrutor de mergulho Theo Costa. No processo de criar um nome para a loja, ele lembrou do apelido que deu quando a filha n\xe3o tinha nem um ano de vida. E assim nasceu a Tartaruguinha Art\u2019s!"})})]}),Object(l.jsx)("div",{className:"card-img-projects",children:Object(l.jsx)("img",{src:E,alt:"imagem historia"})})]})}c(84);var S=c.p+"static/media/instagram-icon.21eeaf61.svg";function C(){return Object(l.jsxs)("div",{className:"container-footer",children:[Object(l.jsx)("h2",{children:"@tartaruguinhaarts"}),Object(l.jsx)("div",{children:Object(l.jsx)("a",{href:"https://www.instagram.com/tartaruguinhaarts/",target:"_blank",children:Object(l.jsx)("img",{src:S,alt:"icone instagram"})})})]})}function k(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{children:[Object(l.jsx)(x,{}),Object(l.jsx)("div",{id:"Carrossel",children:Object(l.jsx)(f,{})}),Object(l.jsx)("div",{id:"Destaques",children:Object(l.jsx)(N,{})}),Object(l.jsx)("div",{id:"Hist\xf3ria",children:Object(l.jsx)(w,{})}),Object(l.jsx)("div",{id:"Projetos",children:Object(l.jsx)(T,{})}),Object(l.jsx)("div",{id:"Contato",children:Object(l.jsx)(C,{})})]})})}c(85);var A=Object(a.createContext)();function R(e){var t=e.children,c=Object(a.useState)(0),s=Object(d.a)(c,2),r=s[0],i=s[1];return Object(l.jsx)(A.Provider,{value:{pageValue:r,selectPage:function(e){i(e)}},children:t})}function P(){return Object(a.useContext)(A)}function L(){var e=P().selectPage,t=Object(a.useState)([]),c=Object(d.a)(t,2),s=c[0],r=c[1];Object(a.useEffect)((function(){p.get("/produtos").then((function(e){return r(e.data.data)}))}),[]);var i=s;return Object(l.jsxs)("div",{className:"container-categories-showcase",children:[Object(l.jsxs)("div",{className:"category-container",children:[Object(l.jsxs)("div",{className:"category-title-row",children:[Object(l.jsx)("div",{className:"category-title",children:"Canecas"}),Object(l.jsx)("div",{children:Object(l.jsx)(n.c,{to:"/produtos",onClick:function(){return e(1)},className:"show-all",children:"Ver Tudo"})})]}),Object(l.jsx)("div",{className:"products-row",children:i.map((function(e){if(1===e.id_category)return Object(l.jsxs)("div",{className:"product-card",children:[Object(l.jsx)("div",{children:Object(l.jsx)("img",{src:e.image})}),Object(l.jsx)("div",{className:"product-title",children:e.name}),Object(l.jsx)("div",{className:"prize-tag",children:Object(l.jsx)("div",{children:e.prize.toLocaleString("pt-br",{style:"currency",currency:"BRL"})})})]},e.id_product)}))})]}),Object(l.jsxs)("div",{className:"category-container",children:[Object(l.jsxs)("div",{className:"category-title-row",children:[Object(l.jsx)("div",{className:"category-title",children:"Almofadas"}),Object(l.jsx)("div",{children:Object(l.jsx)(n.c,{to:"/produtos",onClick:function(){return e(2)},className:"show-all",children:"Ver Tudo"})})]}),Object(l.jsx)("div",{className:"products-row",children:i.map((function(e){if(2===e.id_category)return Object(l.jsxs)("div",{className:"product-card",children:[Object(l.jsx)("div",{children:Object(l.jsx)("img",{src:e.image})}),Object(l.jsx)("div",{className:"product-title",children:e.name}),Object(l.jsx)("div",{className:"prize-tag",children:Object(l.jsx)("div",{children:e.prize.toLocaleString("pt-br",{style:"currency",currency:"BRL"})})})]},e.id_product)}))})]}),Object(l.jsxs)("div",{className:"category-container",children:[Object(l.jsxs)("div",{className:"category-title-row",children:[Object(l.jsx)("div",{className:"category-title",children:"Almofadas de Pesco\xe7o"}),Object(l.jsx)("div",{children:Object(l.jsx)(n.c,{to:"/produtos",onClick:function(){return e(3)},className:"show-all",children:"Ver Tudo"})})]}),Object(l.jsx)("div",{className:"products-row",children:i.map((function(e){if(3===e.id_category)return Object(l.jsxs)("div",{className:"product-card",children:[Object(l.jsx)("div",{children:Object(l.jsx)("img",{src:e.image})}),Object(l.jsx)("div",{className:"product-title",children:e.name}),Object(l.jsx)("div",{className:"prize-tag",children:Object(l.jsx)("div",{children:e.prize.toLocaleString("pt-br",{style:"currency",currency:"BRL"})})})]},e.id_product)}))})]}),Object(l.jsxs)("div",{className:"category-container",children:[Object(l.jsxs)("div",{className:"category-title-row",children:[Object(l.jsx)("div",{className:"category-title",children:"M\xe1scaras"}),Object(l.jsx)("div",{children:Object(l.jsx)(n.c,{to:"/produtos",onClick:function(){return e(4)},className:"show-all",children:"Ver Tudo"})})]}),Object(l.jsx)("div",{className:"products-row",children:i.map((function(e){if(4===e.id_category)return Object(l.jsxs)("div",{className:"product-card",children:[Object(l.jsx)("div",{children:Object(l.jsx)("img",{src:e.image})}),Object(l.jsx)("div",{className:"product-title",children:e.name}),Object(l.jsx)("div",{className:"prize-tag",children:Object(l.jsx)("div",{children:e.prize.toLocaleString("pt-br",{style:"currency",currency:"BRL"})})})]},e.id_product)}))})]})]})}function D(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(x,{}),Object(l.jsx)("div",{id:"Loja",children:Object(l.jsx)(L,{})}),Object(l.jsx)(C,{})]})}var _=Object(a.createContext)();function z(e){var t=e.children,c=Object(a.useState)(0),s=Object(d.a)(c,2),r=s[0],i=s[1];return Object(l.jsx)(_.Provider,{value:{selectedProduct:r,handleSelectProduct:function(e){i(e),console.log(r)}},children:t})}c(86);function M(){var e=Object(a.useContext)(_).handleSelectProduct,t=Object(a.useState)([]),c=Object(d.a)(t,2),s=c[0],r=c[1],i=Object(a.useState)(""),n=Object(d.a)(i,2),j=n[0],o=n[1],u=P(),O=u.pageValue;u.selectPage;Object(a.useEffect)((function(){switch(p.get("/categorias/".concat(O)).then((function(e){return r(e.data.data)})),O){case 2:o("Almofadas");break;case 3:o("Almofadas de Pesco\xe7o");break;case 4:o("M\xe1scaras");break;default:o("Canecas")}}),[]);var m=s;return console.log(m),Object(l.jsx)("div",{className:"container-products-showcase",children:Object(l.jsxs)("div",{className:"category-container",children:[Object(l.jsx)("div",{className:"category-title-row",children:Object(l.jsx)("div",{className:"category-title",children:j})}),Object(l.jsx)("div",{className:"products-row",children:m.map((function(t){if(t.id_category===O)return Object(l.jsxs)("div",{className:"product-card",children:[Object(l.jsx)("div",{children:Object(l.jsx)("img",{src:t.image})}),Object(l.jsx)("div",{className:"product-title",children:t.name}),Object(l.jsx)("div",{className:"prize-tag",children:Object(l.jsx)("div",{children:t.prize.toLocaleString("pt-br",{style:"currency",currency:"BRL"})})}),Object(l.jsx)("div",{onClick:function(){return e(t.id_product.id_product)},children:Object(l.jsx)(b,{text:"COMPRAR",link:"/comprar"})})]},t.id_product)}))})]})})}function U(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(x,{}),Object(l.jsx)(M,{}),Object(l.jsx)(C,{})]})}c(87);function q(){return Object(l.jsxs)("div",{className:"container-contact",children:[Object(l.jsx)("div",{className:"contact-title",children:"Contato"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:"Celular: (11) 9591-94796"}),Object(l.jsx)("div",{children:"E-mail: tartaruguinhaarts@yahoo.com"}),Object(l.jsxs)("div",{className:"container-instagram",children:[Object(l.jsx)("div",{children:Object(l.jsx)("a",{href:"https://www.instagram.com/tartaruguinhaarts/",target:"_blank",children:Object(l.jsx)("img",{src:S,alt:"icone instagram"})})}),Object(l.jsx)("div",{children:"@tartaruguinhaarts"})]})]}),Object(l.jsx)("div",{children:Object(l.jsx)(b,{text:"FORMUL\xc1RIO DE CONTATO",link:"/formulario"})})]})}function B(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(x,{}),Object(l.jsx)(q,{}),Object(l.jsx)(C,{})]})}var V=c(42);c(88);function F(){return Object(l.jsxs)("div",{className:"container-form",children:[Object(l.jsx)("div",{className:"form-title",children:"Deixe seu contato no formul\xe1rio abaixo"}),Object(l.jsx)("form",{onSubmit:function(e){e.preventDefault(),V.a.sendForm("gmailMessage","template_2uvq7oh",e.target,"user_oXdSzrukqfO057tl2K6aR").then((function(e){alert("Mensagem enviada! Obrigado pelo contato!")}),(function(e){alert(e.text)})),e.target.reset()},children:Object(l.jsxs)("div",{className:"formular-container",children:[Object(l.jsxs)("div",{className:"input-container",children:[Object(l.jsx)("div",{children:"Nome:"}),Object(l.jsx)("input",{type:"text",name:"name",placeholder:"Digite seu nome"})]}),Object(l.jsxs)("div",{className:"input-container",children:[Object(l.jsx)("div",{children:"E-mail:"}),Object(l.jsx)("input",{type:"email",name:"email",placeholder:"Digite seu e-mail"})]}),Object(l.jsxs)("div",{className:"input-container",children:[Object(l.jsx)("div",{children:"Celular:"}),Object(l.jsx)("input",{type:"tel",name:"phone",placeholder:"(DDD) 9999-9999"})]}),Object(l.jsxs)("div",{className:"input-container",children:[Object(l.jsx)("div",{children:"Assunto:"}),Object(l.jsx)("input",{type:"text",name:"subject",placeholder:""})]}),Object(l.jsxs)("div",{className:"input-container",children:[Object(l.jsx)("div",{children:"Mensagem:"}),Object(l.jsx)("textarea",{name:"message"})]}),Object(l.jsx)("div",{className:"button-container",children:Object(l.jsx)("button",{className:"form-button",type:"submit",children:"Enviar"})})]})})]})}function I(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(x,{}),Object(l.jsx)(F,{}),Object(l.jsx)(C,{})]})}var H=c.p+"static/media/whatsapp-icon.5da6615d.svg";c(89);function J(){return Object(l.jsxs)("div",{className:"container-buy",children:[Object(l.jsx)("div",{className:"buy-title",children:"ENTRAR EM CONTATO COM VENDEDOR"}),Object(l.jsxs)("div",{className:"info",children:[Object(l.jsxs)("div",{className:"container-icons",children:[Object(l.jsx)("div",{className:"whatsapp-icon",children:Object(l.jsx)("a",{href:"https://api.whatsapp.com/message/T72CUWHVEJGNB1",target:"_blank",children:Object(l.jsx)("img",{src:H,alt:"icone whatsapp"})})}),Object(l.jsx)("div",{children:"(11) 9591-94796"})]}),Object(l.jsx)("div",{className:"info",children:Object(l.jsxs)("div",{className:"container-icons",children:[Object(l.jsx)("div",{className:"instagram-icon",children:Object(l.jsx)("a",{href:"https://www.instagram.com/tartaruguinhaarts/",target:"_blank",children:Object(l.jsx)("img",{src:S,alt:"icone instagram"})})}),Object(l.jsx)("div",{children:"@tartaruguinhaarts"})]})})]})]})}function Q(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(x,{}),Object(l.jsx)(J,{}),Object(l.jsx)(C,{})]})}c(90);var G=function(){return Object(l.jsx)(z,{children:Object(l.jsx)(R,{children:Object(l.jsxs)(n.a,{children:[Object(l.jsx)(h,{}),Object(l.jsxs)(j.c,{children:[Object(l.jsx)(j.a,{path:"/",element:Object(l.jsx)(k,{})}),Object(l.jsx)(j.a,{path:"/categorias",element:Object(l.jsx)(D,{})}),Object(l.jsx)(j.a,{path:"/produtos",element:Object(l.jsx)(U,{})}),Object(l.jsx)(j.a,{path:"/contato",element:Object(l.jsx)(B,{})}),Object(l.jsx)(j.a,{path:"/formulario",element:Object(l.jsx)(I,{})}),Object(l.jsx)(j.a,{path:"/comprar",element:Object(l.jsx)(Q,{})})]})]})})})};i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(G,{})}),document.getElementById("root"))}},[[91,1,2]]]);
//# sourceMappingURL=main.190ac389.chunk.js.map