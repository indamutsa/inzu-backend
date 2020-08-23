(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{41:function(e,a,t){e.exports=t.p+"static/media/house.54ad755d.jpg"},47:function(e,a,t){e.exports=t(99)},98:function(e,a,t){},99:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),s=t(21),c=t.n(s),i=t(5),r=t(18),o=t(1),m=t(7),u=t(14),_=t(12),p=t(4),d=t.n(p),E=t(24),h=t.n(E),g=function(e){var a=Object(l.useState)({sale_type:"For Sale",price:"$0+",bedrooms:"0+",home_type:"House",bathrooms:"0+",sqft:"1000+",days_listed:"1 or less",has_photos:"1+",open_house:"false",keywords:""}),t=Object(o.a)(a,2),s=t[0],c=t[1],i=s.sale_type,r=s.price,m=s.bedrooms,p=s.home_type,E=s.bathrooms,g=s.sqft,f=s.days_listed,N=s.has_photos,v=s.open_house,b=s.keywords,y=Object(l.useState)(!1),O=Object(o.a)(y,2),w=O[0],j=O[1],S=function(e){return c(Object(_.a)({},s,Object(u.a)({},e.target.name,e.target.value)))};return n.a.createElement("form",{className:"listingform",onSubmit:function(a){return function(a){a.preventDefault(),d.a.defaults.headers={"Content-Type":"application/json"},j(!0),d.a.post("http://localhost:8000/api/listings/search",{sale_type:i,price:r,bedrooms:m,home_type:p,bathrooms:E,sqft:g,days_listed:f,has_photos:N,open_house:v,keywords:b}).then((function(a){j(!1),e.setListings(a.data),window.scrollTo(0,0)})).catch((function(e){j(!1),window.scrollTo(0,0)}))}(a)}},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-1-of-6"},n.a.createElement("div",{className:"listingform__section"},n.a.createElement("label",{className:"listingform__label",htmlFor:"sale_type"},"Sale or Rent"),n.a.createElement("select",{className:"listingform__select",name:"sale_type",onChange:function(e){return S(e)},value:i},n.a.createElement("option",null,"For Sale"),n.a.createElement("option",null,"For Rent"))),n.a.createElement("div",{className:"listingform__section"},n.a.createElement("label",{className:"listingform__label",htmlFor:"sqft"},"Sqft"),n.a.createElement("select",{className:"listingform__select",name:"sqft",onChange:function(e){return S(e)},value:g},n.a.createElement("option",null,"1000+"),n.a.createElement("option",null,"1200+"),n.a.createElement("option",null,"1500+"),n.a.createElement("option",null,"2000+"),n.a.createElement("option",null,"Any")))),n.a.createElement("div",{className:"col-1-of-6"},n.a.createElement("div",{className:"listingform__section"},n.a.createElement("label",{className:"listingform__label",htmlFor:"price"},"Minimum Price"),n.a.createElement("select",{className:"listingform__select",name:"price",onChange:function(e){return S(e)},value:r},n.a.createElement("option",null,"$0+"),n.a.createElement("option",null,"$200,000+"),n.a.createElement("option",null,"$400,000+"),n.a.createElement("option",null,"$600,000+"),n.a.createElement("option",null,"$800,000+"),n.a.createElement("option",null,"$1,000,000+"),n.a.createElement("option",null,"$1,200,000+"),n.a.createElement("option",null,"$1,500,000+"),n.a.createElement("option",null,"Any"))),n.a.createElement("div",{className:"listingform__section"},n.a.createElement("label",{className:"listingform__label",htmlFor:"days_listed"},"Days Listed"),n.a.createElement("select",{className:"listingform__select",name:"days_listed",onChange:function(e){return S(e)},value:f},n.a.createElement("option",null,"1 of less"),n.a.createElement("option",null,"2 of less"),n.a.createElement("option",null,"5 of less"),n.a.createElement("option",null,"10 of less"),n.a.createElement("option",null,"20 of less"),n.a.createElement("option",null,"Any")))),n.a.createElement("div",{className:"col-1-of-6"},n.a.createElement("div",{className:"listingform__section"},n.a.createElement("label",{className:"listingform__label",htmlFor:"bedrooms"},"Bedrooms"),n.a.createElement("select",{className:"listingform__select",name:"bedrooms",onChange:function(e){return S(e)},value:m},n.a.createElement("option",null,"0+"),n.a.createElement("option",null,"1+"),n.a.createElement("option",null,"2+"),n.a.createElement("option",null,"3+"),n.a.createElement("option",null,"4+"),n.a.createElement("option",null,"5+"))),n.a.createElement("div",{className:"listingform__section"},n.a.createElement("label",{className:"listingform__label",htmlFor:"has_photos"},"Has Photos"),n.a.createElement("select",{className:"listingform__select",name:"has_photos",onChange:function(e){return S(e)},value:N},n.a.createElement("option",null,"1+"),n.a.createElement("option",null,"3+"),n.a.createElement("option",null,"5+"),n.a.createElement("option",null,"10+"),n.a.createElement("option",null,"15+")))),n.a.createElement("div",{className:"col-1-of-6"},n.a.createElement("div",{className:"listingform__section"},n.a.createElement("label",{className:"listingform__label",htmlFor:"home_type"},"Home Type"),n.a.createElement("select",{className:"listingform__select",name:"home_type",onChange:function(e){return S(e)},value:p},n.a.createElement("option",null,"House"),n.a.createElement("option",null,"Condo"),n.a.createElement("option",null,"Townhouse"))),n.a.createElement("div",{className:"listingform__section"},n.a.createElement("label",{className:"listingform__label",htmlFor:"keywords"},"Keywords"),n.a.createElement("input",{className:"listingform__input",name:"keywords",type:"text",onChange:function(e){return S(e)},value:b}))),n.a.createElement("div",{className:"col-1-of-6"},n.a.createElement("div",{className:"listingform__section"},n.a.createElement("label",{className:"listingform__label",htmlFor:"bathrooms"},"Baths"),n.a.createElement("select",{className:"listingform__select",name:"bathrooms",onChange:function(e){return S(e)},value:E},n.a.createElement("option",null,"0+"),n.a.createElement("option",null,"1+"),n.a.createElement("option",null,"2+"),n.a.createElement("option",null,"3+"),n.a.createElement("option",null,"4+"))),n.a.createElement("div",{className:"listingform__altsection"},n.a.createElement("label",{className:"listingform__label",htmlFor:"open_house"},"Open Houses"),n.a.createElement("input",{className:"listingform__checkbox",name:"open_house",type:"checkbox",onChange:function(e){return S(e)},value:v}))),n.a.createElement("div",{className:"col-1-of-6"},w?n.a.createElement("div",{className:"listingform__loader"},n.a.createElement(h.a,{type:"Oval",color:"#424242",height:50,width:50})):n.a.createElement("button",{className:"listingform__button listingform__button--primary"},"Save"))))},f=function(e){return n.a.createElement("div",{className:"card"},n.a.createElement("h3",{className:"card__title"},e.title),n.a.createElement("div",{className:"card__header"},n.a.createElement("img",{className:"card__header__photo",src:e.photo_main,alt:"House"})),n.a.createElement("p",{className:"card__location"},e.address,", ",e.city,", ",e.state),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-2-of-3"},n.a.createElement("p",{className:"card__info"},"Price: $",e.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),n.a.createElement("p",{className:"card__info"},"Bedrooms: ",e.bedrooms),n.a.createElement("p",{className:"card__info"},"Bathrooms: ",e.bathrooms)),n.a.createElement("div",{className:"col-1-of-3"},n.a.createElement("p",{className:"card__saletype"},e.sale_type),n.a.createElement("p",{className:"card__hometype"},e.home_type),n.a.createElement("p",{className:"card__sqft"},"Sqft: ",e.sqft))),n.a.createElement(i.b,{className:"card__link",to:"/listings/".concat(e.slug)},"View Listing"))},N=function(e){var a=e.listings;return n.a.createElement("div",null,function(){var e=[],t=[];a.map((function(a){return e.push(n.a.createElement(f,{title:a.title,address:a.address,city:a.city,state:a.state,price:a.price,sale_type:a.sale_type,home_type:a.home_type,bedrooms:a.bedrooms,bathrooms:a.bathrooms,sqft:a.sqft,photo_main:a.photo_main,slug:a.slug}))}));for(var l=0;l<a.length;l+=3)t.push(n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-1-of-3"},e[l]),n.a.createElement("div",{className:"col-1-of-3"},e[l+1]?e[l+1]:null),n.a.createElement("div",{className:"col-1-of-3"},e[l+2]?e[l+2]:null)));return t}())},v=function(e){return n.a.createElement("div",{className:"pagination"},n.a.createElement("div",{onClick:function(){return e.previous()},className:"pagination__number"},"Previous"),function(){for(var a=[],t=e.itemsPerPage,l=1,s=function(t){var s=l,c="pagination__number",i=null;e.active===s?(c="pagination__number pagination__number--active",i=n.a.createElement("div",{key:t,className:c},l)):i=n.a.createElement("div",{key:t,onClick:function(){return e.visitPage(s)},className:c},l),a.push(i),l++},c=0;c<e.count;c+=t)s(c);return a}(),n.a.createElement("div",{onClick:function(){return e.next()},className:"pagination__number"},"Next"))},b=function(){var e=Object(l.useState)([]),a=Object(o.a)(e,2),t=a[0],s=a[1],c=Object(l.useState)(1),i=Object(o.a)(c,2),r=i[0],u=i[1],_=Object(l.useState)(3),p=Object(o.a)(_,2),d=p[0],E=(p[1],Object(l.useState)(1)),h=Object(o.a)(E,2),f=h[0],b=h[1],y=r*d,O=y-d,w=t.slice(O,y);return n.a.createElement("main",{className:"home"},n.a.createElement(m.Helmet,null,n.a.createElement("title",null,"Realest Estate - Home"),n.a.createElement("meta",{name:"description",content:"Realest Estate Home Page"})),n.a.createElement("section",{className:"home__form"},n.a.createElement(g,{setListings:s})),n.a.createElement("section",{className:"home__listings"},n.a.createElement(N,{listings:w})),n.a.createElement("section",{className:"home__pagination"},n.a.createElement("div",{className:"row"},0!==t.length?n.a.createElement(v,{itemsPerPage:d,count:t.length,visitPage:function(e){u(e),b(e)},previous:function(){1!==r&&(u(r-1),b(r-1))},next:function(){r!==Math.ceil(t.length/3)&&(u(r+1),b(r+1))},active:f,setActive:b}):null)))},y=t(11),O=t.n(y),w=t(17),j=t(41),S=t.n(j),k=function(){var e=Object(l.useState)([]),a=Object(o.a)(e,2),t=a[0],s=a[1],c=Object(l.useState)([]),i=Object(o.a)(c,2),r=i[0],u=i[1];Object(l.useEffect)((function(){d.a.defaults.headers={"Content-Type":"application/json"},function(){var e=Object(w.a)(O.a.mark((function e(){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("http://localhost:8000/api/realtors/topseller");case 3:a=e.sent,s(a.data),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()()}),[]),Object(l.useEffect)((function(){d.a.defaults.headers={"Content-Type":"application/json"},function(){var e=Object(w.a)(O.a.mark((function e(){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("http://localhost:8000/api/realtors/");case 3:a=e.sent,u(a.data),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()()}),[]);return n.a.createElement("main",{className:"about"},n.a.createElement(m.Helmet,null,n.a.createElement("title",null,"Realest Estate - About"),n.a.createElement("meta",{name:"description",content:"About us"})),n.a.createElement("header",{className:"about__header"},n.a.createElement("h1",{className:"about__heading"},"About Realest Estate")),n.a.createElement("section",{className:"about__info"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-3-of-4"},n.a.createElement("h2",{className:"about__subheading"},"We find the perfect home for you"),n.a.createElement("p",{className:"about__paragraph"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sapien a diam eleifend faucibus. Suspendisse vitae sodales leo. Proin hendrerit aliquam interdum. Maecenas tellus ante, ultrices id justo id, venenatis hendrerit orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent aliquam condimentum ligula eget ullamcorper."),n.a.createElement("div",{className:"about__display"},n.a.createElement("img",{className:"about__display__image",src:S.a,alt:""})),n.a.createElement("p",{className:"about__paragraph"},"Suspendisse gravida magna posuere purus laoreet, et elementum velit placerat. Fusce at convallis erat. Curabitur placerat eros eu interdum lacinia. Nulla facilisi. Duis pretium tristique porta. Donec vehicula est a massa interdum vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris malesuada lacus mauris, eu ultrices neque egestas eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi elementum enim vitae purus pulvinar tincidunt. Aenean id viverra leo, non vehicula odio. Vestibulum volutpat a nulla at mattis. Nam cursus semper sapien, eu consequat lacus iaculis vel.")),n.a.createElement("div",{className:"col-1-of-4"},function(){var e=[];return t.map((function(a){return e.push(n.a.createElement(l.Fragment,{key:a.id},n.a.createElement("div",{className:"about__display"},n.a.createElement("img",{className:"about__display__image",src:a.photo,alt:""})),n.a.createElement("h3",{className:"about__topseller"},"Top Seller:"),n.a.createElement("p",{className:"about__realtor"},a.name),n.a.createElement("p",{className:"about__contact"},a.phone),n.a.createElement("p",{className:"about__contact"},a.email),n.a.createElement("p",{className:"about__about"},a.description)))})),e}()))),n.a.createElement("section",{className:"about__team"},n.a.createElement("div",{className:"row"},n.a.createElement("h2",{className:"about__subheading"},"Meet out awesome team!")),function(){var e=[],a=[];r.map((function(a){return e.push(n.a.createElement(l.Fragment,{key:a.id},n.a.createElement("div",{className:"about__display"},n.a.createElement("img",{className:"about__display__image",src:a.photo,alt:""})),n.a.createElement("h3",{className:"about__realtor"},a.name),n.a.createElement("p",{className:"about__contact"},a.phone),n.a.createElement("p",{className:"about__contact"},a.email),n.a.createElement("p",{className:"about__about"},a.description)))}));for(var t=0;t<r.length;t+=3)a.push(n.a.createElement("div",{key:t,className:"row"},n.a.createElement("div",{className:"col-1-of-3"},e[t]),n.a.createElement("div",{className:"col-1-of-3"},e[t+1]?e[t+1]:null),n.a.createElement("div",{className:"col-1-of-3"},e[t+2]?e[t+2]:null)));return a}()))},x=t(8),C=t(101),A=function(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5e3;return function(l){var n=Object(C.a)();l({type:"SET_ALERT",payload:{msg:e,alertType:a,id:n}}),setTimeout((function(){return l({type:"REMOVE_ALERT",payload:n})}),t)}},L=Object(x.b)(null,{setAlert:A})((function(e){var a=e.setAlert;Object(l.useEffect)((function(){window.scrollTo(0,0)}),[]);var t=Object(l.useState)({name:"",email:"",subject:"",message:""}),s=Object(o.a)(t,2),c=s[0],i=s[1],r=c.name,p=c.email,E=c.subject,g=c.message,f=Object(l.useState)(!1),N=Object(o.a)(f,2),v=N[0],b=N[1],y=function(e){return i(Object(_.a)({},c,Object(u.a)({},e.target.name,e.target.value)))};return n.a.createElement("div",{className:"contact"},n.a.createElement(m.Helmet,null,n.a.createElement("title",null,"Realest Estate - Contact"),n.a.createElement("meta",{name:"description",content:"Contact us"})),n.a.createElement("form",{className:"contact__form",onSubmit:function(e){return function(e){e.preventDefault(),d.a.defaults.headers={"Content-Type":"application/json"},b(!0),d.a.post("http://localhost:8000/api/contacts/",{name:r,email:p,subject:E,message:g}).then((function(e){a("Message Sent","success"),b(!1),window.scrollTo(0,0)})).catch((function(e){a("Error with Sending Message","error"),b(!1),window.scrollTo(0,0)}))}(e)}},n.a.createElement("label",{className:"contact__form__label",htmlFor:"name"},"Name*"),n.a.createElement("input",{className:"contact__form__input",name:"name",type:"text",placeholder:"Full Name",onChange:function(e){return y(e)},value:r,required:!0}),n.a.createElement("label",{className:"contact__form__label",htmlFor:"email"},"Email*"),n.a.createElement("input",{className:"contact__form__input",name:"email",type:"email",placeholder:"example@gmail.com",onChange:function(e){return y(e)},value:p,required:!0}),n.a.createElement("label",{className:"contact__form__label",htmlFor:"subject"},"Subject*"),n.a.createElement("input",{className:"contact__form__input",name:"subject",type:"text",placeholder:"Buying Home",onChange:function(e){return y(e)},value:E,required:!0}),n.a.createElement("label",{className:"contact__form__label",htmlFor:"message"},"Message*"),n.a.createElement("textarea",{className:"contact__form__textarea",name:"message",cols:"30",rows:"10",placeholder:"Message",onChange:function(e){return y(e)},value:g,required:!0}),v?n.a.createElement("div",{className:"contact__form__loader"},n.a.createElement(h.a,{type:"Oval",color:"#424242",height:50,width:50})):n.a.createElement("button",{className:"contact__form__button",htmltype:"submit"},"Send")))})),q=function(){var e=Object(l.useState)([]),a=Object(o.a)(e,2),t=a[0],s=a[1],c=Object(l.useState)(0),i=Object(o.a)(c,2),r=i[0],u=i[1],_=Object(l.useState)(""),p=Object(o.a)(_,2),E=p[0],h=p[1],g=Object(l.useState)(""),N=Object(o.a)(g,2),b=N[0],y=N[1],j=Object(l.useState)(1),S=Object(o.a)(j,2),k=S[0],x=S[1];Object(l.useEffect)((function(){window.scrollTo(0,0),function(){var e=Object(w.a)(O.a.mark((function e(){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("http://localhost:8000/api/listings/?page=1");case 3:a=e.sent,s(a.data.results),u(a.data.count),h(a.data.previous),y(a.data.next),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()()}),[]);return n.a.createElement("main",{className:"listings"},n.a.createElement(m.Helmet,null,n.a.createElement("title",null,"Realest Estate - Listings"),n.a.createElement("meta",{name:"description",content:"Listings page"})),n.a.createElement("section",{className:"listings__listings"},function(){var e=[],a=[];t.map((function(a){return e.push(n.a.createElement(f,{title:a.title,address:a.address,city:a.city,state:a.state,price:a.price,sale_type:a.sale_type,home_type:a.home_type,bedrooms:a.bedrooms,bathrooms:a.bathrooms,sqft:a.sqft,photo_main:a.photo_main,slug:a.slug}))}));for(var l=0;l<t.length;l+=3)a.push(n.a.createElement("div",{key:l,className:"row"},n.a.createElement("div",{className:"col-1-of-3"},e[l]),n.a.createElement("div",{className:"col-1-of-3"},e[l+1]?e[l+1]:null),n.a.createElement("div",{className:"col-1-of-3"},e[l+2]?e[l+2]:null)));return a}()),n.a.createElement("section",{className:"listings__pagination"},n.a.createElement("div",{className:"row"},n.a.createElement(v,{itemsPerPage:3,count:r,visitPage:function(e){d.a.get("http://localhost:8000/api/listings/?page=".concat(e)).then((function(a){s(a.data.results),h(a.data.previous),y(a.data.next),x(e)})).catch((function(e){}))},previous:function(){d.a.get(E).then((function(e){s(e.data.results),h(e.data.previous),y(e.data.next),E&&x(k-1)})).catch((function(e){}))},next:function(){d.a.get(b).then((function(e){s(e.data.results),h(e.data.previous),y(e.data.next),b&&x(k+1)})).catch((function(e){}))},active:k,setActive:x}))))},F=function(e){var a=Object(l.useState)({}),t=Object(o.a)(a,2),s=t[0],c=t[1],r=Object(l.useState)({}),u=Object(o.a)(r,2),_=u[0],p=u[1],E=Object(l.useState)(0),h=Object(o.a)(E,2),g=h[0],f=h[1];Object(l.useEffect)((function(){var a=e.match.params.id,t={headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}};d.a.get("http://localhost:8000/api/listings/".concat(a),t).then((function(e){c(e.data),f(e.data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))})).catch((function(e){}))}),[e.match.params.id]),Object(l.useEffect)((function(){var e=s.realtor,a={headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}};e&&d.a.get("http://localhost:8000/api/realtors/".concat(e),a).then((function(e){p(e.data)})).catch((function(e){}))}),[s.realtor]);return n.a.createElement("div",{className:"listingdetail"},n.a.createElement(m.Helmet,null,n.a.createElement("title",null,"Realest Estate - Listing | ","".concat(s.title)),n.a.createElement("meta",{name:"description",content:"Listing detail"})),n.a.createElement("div",{className:"listingdetail__header"},n.a.createElement("h1",{className:"listingdetail__title"},s.title),n.a.createElement("p",{className:"listingdetail__location"},s.city,", ",s.state,", ",s.zipcode)),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"listingdetail__breadcrumb"},n.a.createElement(i.b,{className:"listingdetail__breadcrumb__link",to:"/"},"Home")," / ",s.title)),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-3-of-4"},n.a.createElement("div",{className:"listingdetail__display"},n.a.createElement("img",{className:"listingdetail__display__image",src:s.photo_main,alt:""}))),n.a.createElement("div",{className:"col-1-of-4"},n.a.createElement("div",{className:"listingdetail__display"},n.a.createElement("img",{className:"listingdetail__display__image",src:_.photo,alt:""})),n.a.createElement("h3",{className:"listingdetail__realtor"},_.name),n.a.createElement("p",{className:"listingdetail__contact"},_.phone),n.a.createElement("p",{className:"listingdetail__contact"},_.email),n.a.createElement("p",{className:"listingdetail__about"},_.description))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-1-of-2"},n.a.createElement("ul",{className:"listingdetail__list"},n.a.createElement("li",{className:"listingdetail__list__item"},"Home Type: ",s.home_type),n.a.createElement("li",{className:"listingdetail__list__item"},"Price: $",g),n.a.createElement("li",{className:"listingdetail__list__item"},"Bedrooms: ",s.bedrooms),n.a.createElement("li",{className:"listingdetail__list__item"},"Bathrooms: ",s.bathrooms),n.a.createElement("li",{className:"listingdetail__list__item"},"Square Feet: ",s.sqft))),n.a.createElement("div",{className:"col-1-of-2"},n.a.createElement("ul",{className:"listingdetail__list"},n.a.createElement("li",{className:"listingdetail__list__item"},"Sale Type: ",s.sale_type),n.a.createElement("li",{className:"listingdetail__list__item"},"Address: ",s.address),n.a.createElement("li",{className:"listingdetail__list__item"},"City: ",s.city),n.a.createElement("li",{className:"listingdetail__list__item"},"State: ",s.state),n.a.createElement("li",{className:"listingdetail__list__item"},"Zipcode: ",s.zipcode)))),n.a.createElement("div",{className:"row"},n.a.createElement("p",{className:"listingdetail__description"},s.description)),function(){var e=[];return e.push(n.a.createElement("div",{key:1,className:"row"},n.a.createElement("div",{className:"col-1-of-3"},s.photo_1?n.a.createElement("div",{className:"listingdetail__display"},n.a.createElement("img",{className:"listingdetail__display__image",src:s.photo_1,alt:""})):null),n.a.createElement("div",{className:"col-1-of-3"},s.photo_2?n.a.createElement("div",{className:"listingdetail__display"},n.a.createElement("img",{className:"listingdetail__display__image",src:s.photo_2,alt:""})):null),n.a.createElement("div",{className:"col-1-of-3"},s.photo_3?n.a.createElement("div",{className:"listingdetail__display"},n.a.createElement("img",{className:"listingdetail__display__image",src:s.photo_3,alt:""})):null))),e.push(n.a.createElement("div",{key:2,className:"row"},n.a.createElement("div",{className:"col-1-of-3"},s.photo_4?n.a.createElement("div",{className:"listingdetail__display"},n.a.createElement("img",{className:"listingdetail__display__image",src:s.photo_4,alt:""})):null),n.a.createElement("div",{className:"col-1-of-3"},s.photo_5?n.a.createElement("div",{className:"listingdetail__display"},n.a.createElement("img",{className:"listingdetail__display__image",src:s.photo_5,alt:""})):null),n.a.createElement("div",{className:"col-1-of-3"},s.photo_6?n.a.createElement("div",{className:"listingdetail__display"},n.a.createElement("img",{className:"listingdetail__display__image",src:s.photo_6,alt:""})):null))),e.push(n.a.createElement("div",{key:3,className:"row"},n.a.createElement("div",{className:"col-1-of-3"},s.photo_7?n.a.createElement("div",{className:"listingdetail__display"},n.a.createElement("img",{className:"listingdetail__display__image",src:s.photo_7,alt:""})):null),n.a.createElement("div",{className:"col-1-of-3"},s.photo_8?n.a.createElement("div",{className:"listingdetail__display"},n.a.createElement("img",{className:"listingdetail__display__image",src:s.photo_8,alt:""})):null),n.a.createElement("div",{className:"col-1-of-3"},s.photo_9?n.a.createElement("div",{className:"listingdetail__display"},n.a.createElement("img",{className:"listingdetail__display__image",src:s.photo_9,alt:""})):null))),e.push(n.a.createElement("div",{key:4,className:"row"},n.a.createElement("div",{className:"col-1-of-3"},s.photo_10?n.a.createElement("div",{className:"listingdetail__display"},n.a.createElement("img",{className:"listingdetail__display__image",src:s.photo_10,alt:""})):null),n.a.createElement("div",{className:"col-1-of-3"},s.photo_12?n.a.createElement("div",{className:"listingdetail__display"},n.a.createElement("img",{className:"listingdetail__display__image",src:s.photo_11,alt:""})):null),n.a.createElement("div",{className:"col-1-of-3"},s.photo_12?n.a.createElement("div",{className:"listingdetail__display"},n.a.createElement("img",{className:"listingdetail__display__image",src:s.photo_12,alt:""})):null))),e.push(n.a.createElement("div",{key:5,className:"row"},n.a.createElement("div",{className:"col-1-of-3"},s.photo_13?n.a.createElement("div",{className:"listingdetail__display"},n.a.createElement("img",{className:"listingdetail__display__image",src:s.photo_13,alt:""})):null),n.a.createElement("div",{className:"col-1-of-3"},s.photo_14?n.a.createElement("div",{className:"listingdetail__display"},n.a.createElement("img",{className:"listingdetail__display__image",src:s.photo_14,alt:""})):null),n.a.createElement("div",{className:"col-1-of-3"},s.photo_15?n.a.createElement("div",{className:"listingdetail__display"},n.a.createElement("img",{className:"listingdetail__display__image",src:s.photo_15,alt:""})):null))),e.push(n.a.createElement("div",{key:6,className:"row"},n.a.createElement("div",{className:"col-1-of-3"},s.photo_16?n.a.createElement("div",{className:"listingdetail__display"},n.a.createElement("img",{className:"listingdetail__display__image",src:s.photo_16,alt:""})):null),n.a.createElement("div",{className:"col-1-of-3"},s.photo_17?n.a.createElement("div",{className:"listingdetail__display"},n.a.createElement("img",{className:"listingdetail__display__image",src:s.photo_17,alt:""})):null),n.a.createElement("div",{className:"col-1-of-3"},s.photo_18?n.a.createElement("div",{className:"listingdetail__display"},n.a.createElement("img",{className:"listingdetail__display__image",src:s.photo_18,alt:""})):null))),e.push(n.a.createElement("div",{key:7,className:"row"},n.a.createElement("div",{className:"col-1-of-3"},s.photo_19?n.a.createElement("div",{className:"listingdetail__display"},n.a.createElement("img",{className:"listingdetail__display__image",src:s.photo_19,alt:""})):null),n.a.createElement("div",{className:"col-1-of-3"},s.photo_20?n.a.createElement("div",{className:"listingdetail__display"},n.a.createElement("img",{className:"listingdetail__display__image",src:s.photo_20,alt:""})):null),n.a.createElement("div",{className:"col-1-of-3"}))),e}())},T=function(e,a){return function(){var t=Object(w.a)(O.a.mark((function t(l){var n,s,c;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={headers:{"Content-Type":"application/json"}},s=JSON.stringify({email:e,password:a}),t.prev=2,t.next=5,d.a.post("http://localhost:8000/api/token/",s,n);case 5:c=t.sent,l({type:"LOGIN_SUCCESS",payload:c.data}),l(A("Authenticated successfully","success")),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(2),l({type:"LOGIN_FAIL"}),l(A("Error Authenticating","error"));case 14:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}()},P=Object(x.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{login:T})((function(e){var a=e.login,t=e.isAuthenticated,s=Object(l.useState)({email:"",password:""}),c=Object(o.a)(s,2),p=c[0],d=c[1],E=p.email,h=p.password,g=function(e){return d(Object(_.a)({},p,Object(u.a)({},e.target.name,e.target.value)))};return t?n.a.createElement(r.a,{to:"/"}):n.a.createElement("div",{className:"auth"},n.a.createElement(m.Helmet,null,n.a.createElement("title",null,"Realest Estate - Login"),n.a.createElement("meta",{name:"description",content:"login page"})),n.a.createElement("h1",{className:"auth__title"},"Sign In"),n.a.createElement("p",{className:"auth__lead"},"Sign into your Account"),n.a.createElement("form",{className:"auth__form",onSubmit:function(e){return function(e){e.preventDefault(),a(E,h)}(e)}},n.a.createElement("div",{className:"auth__form__group"},n.a.createElement("input",{className:"auth__form__input",type:"email",placeholder:"Email",name:"email",value:E,onChange:function(e){return g(e)},required:!0})),n.a.createElement("div",{className:"auth__form__group"},n.a.createElement("input",{className:"auth__form__input",type:"password",placeholder:"Password",name:"password",value:h,onChange:function(e){return g(e)},minLength:"6"})),n.a.createElement("button",{className:"auth__form__button"},"Login")),n.a.createElement("p",{className:"auth__authtext"},"Don't have an account? ",n.a.createElement(i.b,{className:"auth__authtext__link",to:"/signup"},"Sign Up")))})),I=Object(x.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{setAlert:A,signup:function(e){var a=e.name,t=e.email,l=e.password,n=e.password2;return function(){var e=Object(w.a)(O.a.mark((function e(s){var c,i,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={headers:{"Content-Type":"application/json"}},i=JSON.stringify({name:a,email:t,password:l,password2:n}),e.prev=2,e.next=5,d.a.post("http://localhost:8000/api/accounts/signup",i,c);case 5:r=e.sent,s({type:"SIGNUP_SUCCESS",payload:r.data}),s(T(t,l)),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),s({type:"SIGNUP_FAIL"}),s(A("Error Authenticating","error"));case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(a){return e.apply(this,arguments)}}()}})((function(e){var a=e.setAlert,t=e.signup,s=e.isAuthenticated,c=Object(l.useState)({name:"",email:"",password:"",password2:""}),p=Object(o.a)(c,2),d=p[0],E=p[1],h=d.name,g=d.email,f=d.password,N=d.password2,v=function(e){return E(Object(_.a)({},d,Object(u.a)({},e.target.name,e.target.value)))};return s?n.a.createElement(r.a,{to:"/"}):n.a.createElement("div",{className:"auth"},n.a.createElement(m.Helmet,null,n.a.createElement("title",null,"Realest Estate - Sign Up"),n.a.createElement("meta",{name:"description",content:"sign up page"})),n.a.createElement("h1",{className:"auth__title"},"Sign Up"),n.a.createElement("p",{className:"auth__lead"},"Create your Account"),n.a.createElement("form",{className:"auth__form",onSubmit:function(e){return function(e){e.preventDefault(),f!==N?a("Passwords do not match","error"):t({name:h,email:g,password:f,password2:N})}(e)}},n.a.createElement("div",{className:"auth__form__group"},n.a.createElement("input",{className:"auth__form__input",type:"name",placeholder:"Name",name:"name",value:h,onChange:function(e){return v(e)},required:!0})),n.a.createElement("div",{className:"auth__form__group"},n.a.createElement("input",{className:"auth__form__input",type:"email",placeholder:"Email",name:"email",value:g,onChange:function(e){return v(e)},required:!0})),n.a.createElement("div",{className:"auth__form__group"},n.a.createElement("input",{className:"auth__form__input",type:"password",placeholder:"Password",name:"password",value:f,onChange:function(e){return v(e)},minLength:"6"})),n.a.createElement("div",{className:"auth__form__group"},n.a.createElement("input",{className:"auth__form__input",type:"password",placeholder:"Confirm Password",name:"password2",value:N,onChange:function(e){return v(e)},minLength:"6"})),n.a.createElement("button",{className:"auth__form__button"},"Register")),n.a.createElement("p",{className:"auth__authtext"},"Already have an account? ",n.a.createElement(i.b,{className:"auth__authtext__link",to:"/login"},"Sign In")))})),R=function(){return n.a.createElement("div",{className:"notfound"},n.a.createElement("h1",{className:"notfound__heading"},"404 Not Found"),n.a.createElement("p",{className:"notfound__paragraph"},"The link you requested does not exist on our website."))},H=Object(x.b)((function(e){return{alerts:e.alert}}))((function(e){var a=e.alerts;return null!==a&&a.length>0&&a.map((function(e){return n.a.createElement("div",{key:e.id,className:"alert alert--".concat(e.alertType)},e.msg)}))})),M=Object(x.b)((function(e){return{auth:e.auth}}),{logout:function(){return function(e){e(A("logout successful.","success")),e({type:"LOGOUT"})}}})((function(e){var a=e.auth,t=a.isAuthenticated,s=a.loading,c=e.logout,r=n.a.createElement("a",{className:"navbar__top__auth__link",onClick:c,href:"#!"},"Logout"),o=n.a.createElement(l.Fragment,null,n.a.createElement(i.b,{className:"navbar__top__auth__link",to:"/login"},"Login"),n.a.createElement(i.b,{className:"navbar__top__auth__link",to:"/signup"},"Sign Up"));return n.a.createElement(l.Fragment,null,n.a.createElement("nav",{className:"navbar"},n.a.createElement("div",{className:"navbar__top"},n.a.createElement("div",{className:"navbar__top__logo"},n.a.createElement(i.b,{className:"navbar__top__logo__link",to:"/"},"Realest Estate")),n.a.createElement("div",{className:"navbar__top__auth"},!s&&n.a.createElement(l.Fragment,null,t?r:o))),n.a.createElement("div",{className:"navbar__bottom"},n.a.createElement("li",{className:"navbar__bottom__item"},n.a.createElement(i.c,{className:"navbar__bottom__item__link",exact:!0,to:"/"},"Home")),n.a.createElement("li",{className:"navbar__bottom__item"},n.a.createElement(i.c,{className:"navbar__bottom__item__link",exact:!0,to:"/listings"},"Listings")),n.a.createElement("li",{className:"navbar__bottom__item"},n.a.createElement(i.c,{className:"navbar__bottom__item__link",exact:!0,to:"/about"},"About")),n.a.createElement("li",{className:"navbar__bottom__item"},n.a.createElement(i.c,{className:"navbar__bottom__item__link",exact:!0,to:"/contact"},"Contact")))),n.a.createElement(H,null))})),U=function(e){return n.a.createElement("div",null,n.a.createElement(M,null),e.children)},B=t(43),$=Object(x.b)((function(e){return{auth:e.auth}}))((function(e){var a=e.component,t=e.auth,l=t.isAuthenticated,s=t.loading,c=Object(B.a)(e,["component","auth"]);return n.a.createElement(r.b,Object.assign({},c,{render:function(e){return l||s?n.a.createElement(a,e):n.a.createElement(r.a,{to:"/login"})}}))})),G=t(16),D=t(44),z=t(45),J=t(46),V=[],W={token:localStorage.getItem("token"),isAuthenticated:null,loading:!1},K=Object(G.combineReducers)({alert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,a=arguments.length>1?arguments[1]:void 0,t=a.type,l=a.payload;switch(t){case"SET_ALERT":return[].concat(Object(J.a)(e),[l]);case"REMOVE_ALERT":return e.filter((function(e){return e.id!==l}));default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,a=arguments.length>1?arguments[1]:void 0,t=a.type,l=a.payload;switch(t){case"LOGIN_SUCCESS":return localStorage.setItem("token",l.access),Object(_.a)({},e,{isAuthenticated:!0,loading:!1,token:l.access});case"SIGNUP_SUCCESS":return Object(_.a)({},e,{isAuthenticated:!1,loading:!0});case"SIGNUP_FAIL":case"LOGIN_FAIL":case"LOGOUT":return localStorage.removeItem("token"),Object(_.a)({},e,{token:null,isAuthenticated:!1,loading:!1});default:return e}}}),Z=[z.a],Q=Object(G.createStore)(K,{},Object(D.composeWithDevTools)(G.applyMiddleware.apply(void 0,Z))),X=(t(98),function(){return n.a.createElement(x.a,{store:Q},n.a.createElement(i.a,null,n.a.createElement(U,null,n.a.createElement(r.d,null,n.a.createElement(r.b,{exact:!0,path:"/",component:b}),n.a.createElement(r.b,{exact:!0,path:"/about",component:k}),n.a.createElement(r.b,{exact:!0,path:"/contact",component:L}),n.a.createElement(r.b,{exact:!0,path:"/listings",component:q}),n.a.createElement($,{exact:!0,path:"/listings/:id",component:F}),n.a.createElement(r.b,{exact:!0,path:"/login",component:P}),n.a.createElement(r.b,{exact:!0,path:"/signup",component:I}),n.a.createElement(r.b,{component:R})))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.c44d6ed2.chunk.js.map