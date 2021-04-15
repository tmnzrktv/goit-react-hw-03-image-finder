(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__VPBD0",ImageGalleryItem__image:"ImageGalleryItem_ImageGalleryItem__image__1yl5K","ImageGalleryItem-image":"ImageGalleryItem_ImageGalleryItem-image__1r1OU"}},11:function(e,t,a){e.exports={Button:"Button_Button__HOrbw",Button__container:"Button_Button__container__Hz27K"}},12:function(e,t,a){e.exports={Overlay:"Modal_Overlay__33Ypd",Modal:"Modal_Modal__3ihEg"}},23:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__1hnjP"}},26:function(e,t,a){e.exports={Loader__container:"Loader_Loader__container__3aiE5"}},27:function(e,t,a){e.exports={App:"App_App__16ZpL"}},71:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(22),o=a.n(c),i=a(13),l=a(4),s=a(5),u=a(7),h=a(6),m=a(8),g=a.n(m),d=a(0),_=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleChange=function(t){e.setState({query:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query),e.setState({query:""})},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(d.jsx)("header",{className:g.a.Searchbar,children:Object(d.jsxs)("form",{className:g.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(d.jsx)("button",{type:"submit",className:g.a.SearchForm__button,children:Object(d.jsx)("span",{className:g.a.SearchForm__button__label,children:"Search"})}),Object(d.jsx)("input",{className:g.a.SearchForm__input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.query,onChange:this.handleChange})]})})}}]),a}(n.Component),p=a(10),b=a.n(p),j=function(e){var t=e.tags,a=e.src,n=e.largeImageURL,r=e.handleClickImage;return Object(d.jsx)("li",{className:b.a.ImageGalleryItem,children:Object(d.jsx)("img",{src:a,alt:t,className:b.a.ImageGalleryItem__image,onClick:function(){return r(n)}})})},f=a(23),y=a.n(f),I=function(e){var t=e.pictures,a=e.handleClickImage;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("ul",{className:y.a.ImageGallery,children:t.map((function(e){return Object(d.jsx)(j,{tags:e.tags,src:e.webformatURL,largeImageURL:e.largeImageURL,handleClickImage:a},e.id)}))})})},O=a(11),S=a.n(O),v=function(e){var t=e.title,a=e.onClick;return Object(d.jsx)("div",{className:S.a.Button__container,children:Object(d.jsx)("button",{type:"button",onClick:a,className:S.a.Button,children:t})})},x=a(24),k=a.n(x),w=function(e){var t=e.searchQuery,a=e.currentPage,n=e.perPage,r=void 0===n?8:n;return k.a.get("https://pixabay.com/api/?key=20317342-a65a0e490607ec4c6c667e05c&q=".concat(t,"&per_page=").concat(r,"&page=").concat(a)).then((function(e){return e.data.hits}))},C=a(25),F=a.n(C),G=a(26),L=a.n(G),M=function(){return Object(d.jsx)("div",{className:L.a.Loader__container,children:Object(d.jsx)(F.a,{type:"Puff",color:"#00BFFF",height:400,width:200})})},N=a(12),B=a.n(N),P=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){return Object(d.jsx)("div",{className:B.a.Overlay,onClick:this.handleBackdropClick,children:Object(d.jsx)("div",{className:B.a.Modal,children:Object(d.jsx)("img",{src:this.props.largeImg,alt:"",width:"800"})})})}}]),a}(n.Component),E=(a(71),a(72),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={pictures:[],currentPage:1,searchQuery:"",isLoading:!1,showModal:!1,largeImg:""},e.onChangeQuery=function(t){e.setState({searchQuery:t,currentPage:1,pictures:[]})},e.fetchImages=function(){var t=e.state,a=t.currentPage,n=t.searchQuery;e.setState({isLoading:!0}),w({searchQuery:n,currentPage:a}).then((function(t){e.setState((function(e){return{pictures:[].concat(Object(i.a)(e.pictures),Object(i.a)(t)),currentPage:e.currentPage+1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({isLoading:!1})}))},e.toggleModal=function(t){e.setState((function(e){return{showModal:!e.showModal}}))},e.handleImageClick=function(t){e.setState({largeImg:t}),e.toggleModal()},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.fetchImages(),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.pictures,a=e.isLoading,n=e.showModal,r=e.largeImg;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(_,{onSubmit:this.onChangeQuery}),n&&Object(d.jsx)(P,{onClose:this.toggleModal,largeImg:r}),Object(d.jsx)(I,{pictures:t,handleClickImage:this.handleImageClick}),a&&Object(d.jsx)(M,{}),t.length>0&&Object(d.jsx)(v,{title:"Load more",onClick:this.fetchImages})]})}}]),a}(n.Component)),Q=a(27),D=a.n(Q);o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(E,{className:D.a.App})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__3YYEG",SearchForm:"Searchbar_SearchForm__1hX1-",SearchForm__button:"Searchbar_SearchForm__button__1n9Wo","SearchForm-button":"Searchbar_SearchForm-button__20dn1",SearchForm__button__label:"Searchbar_SearchForm__button__label__3Y0Vd",SearchForm__input:"Searchbar_SearchForm__input__2EpS7"}}},[[73,1,2]]]);
//# sourceMappingURL=main.3dd36765.chunk.js.map