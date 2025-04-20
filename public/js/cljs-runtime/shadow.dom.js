goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_12635 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null,this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_12635(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_12637 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null,this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_12637(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__11716 = coll;
var G__11717 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__11716,G__11717) : shadow.dom.lazy_native_coll_seq.call(null,G__11716,G__11717));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__11753 = arguments.length;
switch (G__11753) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__11756 = arguments.length;
switch (G__11756) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__11759 = arguments.length;
switch (G__11759) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__11767 = arguments.length;
switch (G__11767) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__11781 = arguments.length;
switch (G__11781) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__11792 = arguments.length;
switch (G__11792) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e11796){if((e11796 instanceof Object)){
var e = e11796;
return console.log("didnt support attachEvent",el,e);
} else {
throw e11796;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__11804 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__11805 = null;
var count__11806 = (0);
var i__11807 = (0);
while(true){
if((i__11807 < count__11806)){
var el = chunk__11805.cljs$core$IIndexed$_nth$arity$2(null,i__11807);
var handler_12679__$1 = ((function (seq__11804,chunk__11805,count__11806,i__11807,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__11804,chunk__11805,count__11806,i__11807,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12679__$1);


var G__12681 = seq__11804;
var G__12682 = chunk__11805;
var G__12683 = count__11806;
var G__12684 = (i__11807 + (1));
seq__11804 = G__12681;
chunk__11805 = G__12682;
count__11806 = G__12683;
i__11807 = G__12684;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11804);
if(temp__5804__auto__){
var seq__11804__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11804__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11804__$1);
var G__12686 = cljs.core.chunk_rest(seq__11804__$1);
var G__12687 = c__5525__auto__;
var G__12688 = cljs.core.count(c__5525__auto__);
var G__12689 = (0);
seq__11804 = G__12686;
chunk__11805 = G__12687;
count__11806 = G__12688;
i__11807 = G__12689;
continue;
} else {
var el = cljs.core.first(seq__11804__$1);
var handler_12690__$1 = ((function (seq__11804,chunk__11805,count__11806,i__11807,el,seq__11804__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__11804,chunk__11805,count__11806,i__11807,el,seq__11804__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12690__$1);


var G__12691 = cljs.core.next(seq__11804__$1);
var G__12692 = null;
var G__12693 = (0);
var G__12694 = (0);
seq__11804 = G__12691;
chunk__11805 = G__12692;
count__11806 = G__12693;
i__11807 = G__12694;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__11817 = arguments.length;
switch (G__11817) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__11824 = cljs.core.seq(events);
var chunk__11825 = null;
var count__11826 = (0);
var i__11827 = (0);
while(true){
if((i__11827 < count__11826)){
var vec__11846 = chunk__11825.cljs$core$IIndexed$_nth$arity$2(null,i__11827);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11846,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11846,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12701 = seq__11824;
var G__12702 = chunk__11825;
var G__12703 = count__11826;
var G__12704 = (i__11827 + (1));
seq__11824 = G__12701;
chunk__11825 = G__12702;
count__11826 = G__12703;
i__11827 = G__12704;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11824);
if(temp__5804__auto__){
var seq__11824__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11824__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11824__$1);
var G__12705 = cljs.core.chunk_rest(seq__11824__$1);
var G__12706 = c__5525__auto__;
var G__12707 = cljs.core.count(c__5525__auto__);
var G__12708 = (0);
seq__11824 = G__12705;
chunk__11825 = G__12706;
count__11826 = G__12707;
i__11827 = G__12708;
continue;
} else {
var vec__11850 = cljs.core.first(seq__11824__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11850,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11850,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12709 = cljs.core.next(seq__11824__$1);
var G__12710 = null;
var G__12711 = (0);
var G__12712 = (0);
seq__11824 = G__12709;
chunk__11825 = G__12710;
count__11826 = G__12711;
i__11827 = G__12712;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__11853 = cljs.core.seq(styles);
var chunk__11854 = null;
var count__11855 = (0);
var i__11856 = (0);
while(true){
if((i__11856 < count__11855)){
var vec__11870 = chunk__11854.cljs$core$IIndexed$_nth$arity$2(null,i__11856);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11870,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11870,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12716 = seq__11853;
var G__12717 = chunk__11854;
var G__12718 = count__11855;
var G__12719 = (i__11856 + (1));
seq__11853 = G__12716;
chunk__11854 = G__12717;
count__11855 = G__12718;
i__11856 = G__12719;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11853);
if(temp__5804__auto__){
var seq__11853__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11853__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11853__$1);
var G__12721 = cljs.core.chunk_rest(seq__11853__$1);
var G__12722 = c__5525__auto__;
var G__12723 = cljs.core.count(c__5525__auto__);
var G__12724 = (0);
seq__11853 = G__12721;
chunk__11854 = G__12722;
count__11855 = G__12723;
i__11856 = G__12724;
continue;
} else {
var vec__11876 = cljs.core.first(seq__11853__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11876,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11876,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12725 = cljs.core.next(seq__11853__$1);
var G__12726 = null;
var G__12727 = (0);
var G__12728 = (0);
seq__11853 = G__12725;
chunk__11854 = G__12726;
count__11855 = G__12727;
i__11856 = G__12728;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__11880_12730 = key;
var G__11880_12731__$1 = (((G__11880_12730 instanceof cljs.core.Keyword))?G__11880_12730.fqn:null);
switch (G__11880_12731__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_12736 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_12736,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_12736,"aria-");
}
})())){
el.setAttribute(ks_12736,value);
} else {
(el[ks_12736] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__11890){
var map__11894 = p__11890;
var map__11894__$1 = cljs.core.__destructure_map(map__11894);
var props = map__11894__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11894__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__11896 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11896,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11896,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11896,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__11899 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__11899,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__11899;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__11903 = arguments.length;
switch (G__11903) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__11924){
var vec__11926 = p__11924;
var seq__11927 = cljs.core.seq(vec__11926);
var first__11928 = cljs.core.first(seq__11927);
var seq__11927__$1 = cljs.core.next(seq__11927);
var nn = first__11928;
var first__11928__$1 = cljs.core.first(seq__11927__$1);
var seq__11927__$2 = cljs.core.next(seq__11927__$1);
var np = first__11928__$1;
var nc = seq__11927__$2;
var node = vec__11926;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__11934 = nn;
var G__11935 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__11934,G__11935) : create_fn.call(null,G__11934,G__11935));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__11937 = nn;
var G__11938 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__11937,G__11938) : create_fn.call(null,G__11937,G__11938));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__11955 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11955,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11955,(1),null);
var seq__11962_12757 = cljs.core.seq(node_children);
var chunk__11963_12758 = null;
var count__11964_12759 = (0);
var i__11965_12760 = (0);
while(true){
if((i__11965_12760 < count__11964_12759)){
var child_struct_12762 = chunk__11963_12758.cljs$core$IIndexed$_nth$arity$2(null,i__11965_12760);
var children_12763 = shadow.dom.dom_node(child_struct_12762);
if(cljs.core.seq_QMARK_(children_12763)){
var seq__11997_12764 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12763));
var chunk__11999_12765 = null;
var count__12000_12766 = (0);
var i__12001_12767 = (0);
while(true){
if((i__12001_12767 < count__12000_12766)){
var child_12768 = chunk__11999_12765.cljs$core$IIndexed$_nth$arity$2(null,i__12001_12767);
if(cljs.core.truth_(child_12768)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12768);


var G__12769 = seq__11997_12764;
var G__12770 = chunk__11999_12765;
var G__12771 = count__12000_12766;
var G__12772 = (i__12001_12767 + (1));
seq__11997_12764 = G__12769;
chunk__11999_12765 = G__12770;
count__12000_12766 = G__12771;
i__12001_12767 = G__12772;
continue;
} else {
var G__12773 = seq__11997_12764;
var G__12774 = chunk__11999_12765;
var G__12775 = count__12000_12766;
var G__12776 = (i__12001_12767 + (1));
seq__11997_12764 = G__12773;
chunk__11999_12765 = G__12774;
count__12000_12766 = G__12775;
i__12001_12767 = G__12776;
continue;
}
} else {
var temp__5804__auto___12778 = cljs.core.seq(seq__11997_12764);
if(temp__5804__auto___12778){
var seq__11997_12780__$1 = temp__5804__auto___12778;
if(cljs.core.chunked_seq_QMARK_(seq__11997_12780__$1)){
var c__5525__auto___12781 = cljs.core.chunk_first(seq__11997_12780__$1);
var G__12782 = cljs.core.chunk_rest(seq__11997_12780__$1);
var G__12783 = c__5525__auto___12781;
var G__12784 = cljs.core.count(c__5525__auto___12781);
var G__12785 = (0);
seq__11997_12764 = G__12782;
chunk__11999_12765 = G__12783;
count__12000_12766 = G__12784;
i__12001_12767 = G__12785;
continue;
} else {
var child_12786 = cljs.core.first(seq__11997_12780__$1);
if(cljs.core.truth_(child_12786)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12786);


var G__12787 = cljs.core.next(seq__11997_12780__$1);
var G__12788 = null;
var G__12789 = (0);
var G__12790 = (0);
seq__11997_12764 = G__12787;
chunk__11999_12765 = G__12788;
count__12000_12766 = G__12789;
i__12001_12767 = G__12790;
continue;
} else {
var G__12791 = cljs.core.next(seq__11997_12780__$1);
var G__12792 = null;
var G__12793 = (0);
var G__12794 = (0);
seq__11997_12764 = G__12791;
chunk__11999_12765 = G__12792;
count__12000_12766 = G__12793;
i__12001_12767 = G__12794;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12763);
}


var G__12795 = seq__11962_12757;
var G__12796 = chunk__11963_12758;
var G__12797 = count__11964_12759;
var G__12798 = (i__11965_12760 + (1));
seq__11962_12757 = G__12795;
chunk__11963_12758 = G__12796;
count__11964_12759 = G__12797;
i__11965_12760 = G__12798;
continue;
} else {
var temp__5804__auto___12800 = cljs.core.seq(seq__11962_12757);
if(temp__5804__auto___12800){
var seq__11962_12801__$1 = temp__5804__auto___12800;
if(cljs.core.chunked_seq_QMARK_(seq__11962_12801__$1)){
var c__5525__auto___12803 = cljs.core.chunk_first(seq__11962_12801__$1);
var G__12805 = cljs.core.chunk_rest(seq__11962_12801__$1);
var G__12806 = c__5525__auto___12803;
var G__12807 = cljs.core.count(c__5525__auto___12803);
var G__12808 = (0);
seq__11962_12757 = G__12805;
chunk__11963_12758 = G__12806;
count__11964_12759 = G__12807;
i__11965_12760 = G__12808;
continue;
} else {
var child_struct_12811 = cljs.core.first(seq__11962_12801__$1);
var children_12812 = shadow.dom.dom_node(child_struct_12811);
if(cljs.core.seq_QMARK_(children_12812)){
var seq__12011_12813 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12812));
var chunk__12013_12814 = null;
var count__12014_12815 = (0);
var i__12015_12816 = (0);
while(true){
if((i__12015_12816 < count__12014_12815)){
var child_12819 = chunk__12013_12814.cljs$core$IIndexed$_nth$arity$2(null,i__12015_12816);
if(cljs.core.truth_(child_12819)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12819);


var G__12820 = seq__12011_12813;
var G__12821 = chunk__12013_12814;
var G__12822 = count__12014_12815;
var G__12823 = (i__12015_12816 + (1));
seq__12011_12813 = G__12820;
chunk__12013_12814 = G__12821;
count__12014_12815 = G__12822;
i__12015_12816 = G__12823;
continue;
} else {
var G__12824 = seq__12011_12813;
var G__12825 = chunk__12013_12814;
var G__12826 = count__12014_12815;
var G__12827 = (i__12015_12816 + (1));
seq__12011_12813 = G__12824;
chunk__12013_12814 = G__12825;
count__12014_12815 = G__12826;
i__12015_12816 = G__12827;
continue;
}
} else {
var temp__5804__auto___12830__$1 = cljs.core.seq(seq__12011_12813);
if(temp__5804__auto___12830__$1){
var seq__12011_12831__$1 = temp__5804__auto___12830__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12011_12831__$1)){
var c__5525__auto___12832 = cljs.core.chunk_first(seq__12011_12831__$1);
var G__12833 = cljs.core.chunk_rest(seq__12011_12831__$1);
var G__12834 = c__5525__auto___12832;
var G__12835 = cljs.core.count(c__5525__auto___12832);
var G__12836 = (0);
seq__12011_12813 = G__12833;
chunk__12013_12814 = G__12834;
count__12014_12815 = G__12835;
i__12015_12816 = G__12836;
continue;
} else {
var child_12837 = cljs.core.first(seq__12011_12831__$1);
if(cljs.core.truth_(child_12837)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12837);


var G__12838 = cljs.core.next(seq__12011_12831__$1);
var G__12839 = null;
var G__12840 = (0);
var G__12841 = (0);
seq__12011_12813 = G__12838;
chunk__12013_12814 = G__12839;
count__12014_12815 = G__12840;
i__12015_12816 = G__12841;
continue;
} else {
var G__12842 = cljs.core.next(seq__12011_12831__$1);
var G__12843 = null;
var G__12844 = (0);
var G__12845 = (0);
seq__12011_12813 = G__12842;
chunk__12013_12814 = G__12843;
count__12014_12815 = G__12844;
i__12015_12816 = G__12845;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12812);
}


var G__12847 = cljs.core.next(seq__11962_12801__$1);
var G__12848 = null;
var G__12849 = (0);
var G__12850 = (0);
seq__11962_12757 = G__12847;
chunk__11963_12758 = G__12848;
count__11964_12759 = G__12849;
i__11965_12760 = G__12850;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__12044 = cljs.core.seq(node);
var chunk__12045 = null;
var count__12046 = (0);
var i__12047 = (0);
while(true){
if((i__12047 < count__12046)){
var n = chunk__12045.cljs$core$IIndexed$_nth$arity$2(null,i__12047);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__12858 = seq__12044;
var G__12859 = chunk__12045;
var G__12860 = count__12046;
var G__12861 = (i__12047 + (1));
seq__12044 = G__12858;
chunk__12045 = G__12859;
count__12046 = G__12860;
i__12047 = G__12861;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12044);
if(temp__5804__auto__){
var seq__12044__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12044__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12044__$1);
var G__12865 = cljs.core.chunk_rest(seq__12044__$1);
var G__12866 = c__5525__auto__;
var G__12867 = cljs.core.count(c__5525__auto__);
var G__12868 = (0);
seq__12044 = G__12865;
chunk__12045 = G__12866;
count__12046 = G__12867;
i__12047 = G__12868;
continue;
} else {
var n = cljs.core.first(seq__12044__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__12869 = cljs.core.next(seq__12044__$1);
var G__12870 = null;
var G__12871 = (0);
var G__12872 = (0);
seq__12044 = G__12869;
chunk__12045 = G__12870;
count__12046 = G__12871;
i__12047 = G__12872;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__12057 = arguments.length;
switch (G__12057) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__12070 = arguments.length;
switch (G__12070) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__12091 = arguments.length;
switch (G__12091) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12893 = arguments.length;
var i__5727__auto___12896 = (0);
while(true){
if((i__5727__auto___12896 < len__5726__auto___12893)){
args__5732__auto__.push((arguments[i__5727__auto___12896]));

var G__12897 = (i__5727__auto___12896 + (1));
i__5727__auto___12896 = G__12897;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__12113_12898 = cljs.core.seq(nodes);
var chunk__12114_12899 = null;
var count__12115_12900 = (0);
var i__12116_12901 = (0);
while(true){
if((i__12116_12901 < count__12115_12900)){
var node_12903 = chunk__12114_12899.cljs$core$IIndexed$_nth$arity$2(null,i__12116_12901);
fragment.appendChild(shadow.dom._to_dom(node_12903));


var G__12906 = seq__12113_12898;
var G__12907 = chunk__12114_12899;
var G__12908 = count__12115_12900;
var G__12909 = (i__12116_12901 + (1));
seq__12113_12898 = G__12906;
chunk__12114_12899 = G__12907;
count__12115_12900 = G__12908;
i__12116_12901 = G__12909;
continue;
} else {
var temp__5804__auto___12910 = cljs.core.seq(seq__12113_12898);
if(temp__5804__auto___12910){
var seq__12113_12912__$1 = temp__5804__auto___12910;
if(cljs.core.chunked_seq_QMARK_(seq__12113_12912__$1)){
var c__5525__auto___12913 = cljs.core.chunk_first(seq__12113_12912__$1);
var G__12914 = cljs.core.chunk_rest(seq__12113_12912__$1);
var G__12915 = c__5525__auto___12913;
var G__12916 = cljs.core.count(c__5525__auto___12913);
var G__12917 = (0);
seq__12113_12898 = G__12914;
chunk__12114_12899 = G__12915;
count__12115_12900 = G__12916;
i__12116_12901 = G__12917;
continue;
} else {
var node_12918 = cljs.core.first(seq__12113_12912__$1);
fragment.appendChild(shadow.dom._to_dom(node_12918));


var G__12919 = cljs.core.next(seq__12113_12912__$1);
var G__12920 = null;
var G__12921 = (0);
var G__12922 = (0);
seq__12113_12898 = G__12919;
chunk__12114_12899 = G__12920;
count__12115_12900 = G__12921;
i__12116_12901 = G__12922;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq12105){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12105));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__12182_12929 = cljs.core.seq(scripts);
var chunk__12183_12930 = null;
var count__12184_12931 = (0);
var i__12185_12932 = (0);
while(true){
if((i__12185_12932 < count__12184_12931)){
var vec__12206_12936 = chunk__12183_12930.cljs$core$IIndexed$_nth$arity$2(null,i__12185_12932);
var script_tag_12937 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12206_12936,(0),null);
var script_body_12938 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12206_12936,(1),null);
eval(script_body_12938);


var G__12939 = seq__12182_12929;
var G__12940 = chunk__12183_12930;
var G__12941 = count__12184_12931;
var G__12942 = (i__12185_12932 + (1));
seq__12182_12929 = G__12939;
chunk__12183_12930 = G__12940;
count__12184_12931 = G__12941;
i__12185_12932 = G__12942;
continue;
} else {
var temp__5804__auto___12944 = cljs.core.seq(seq__12182_12929);
if(temp__5804__auto___12944){
var seq__12182_12945__$1 = temp__5804__auto___12944;
if(cljs.core.chunked_seq_QMARK_(seq__12182_12945__$1)){
var c__5525__auto___12946 = cljs.core.chunk_first(seq__12182_12945__$1);
var G__12948 = cljs.core.chunk_rest(seq__12182_12945__$1);
var G__12949 = c__5525__auto___12946;
var G__12950 = cljs.core.count(c__5525__auto___12946);
var G__12951 = (0);
seq__12182_12929 = G__12948;
chunk__12183_12930 = G__12949;
count__12184_12931 = G__12950;
i__12185_12932 = G__12951;
continue;
} else {
var vec__12214_12952 = cljs.core.first(seq__12182_12945__$1);
var script_tag_12953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12214_12952,(0),null);
var script_body_12954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12214_12952,(1),null);
eval(script_body_12954);


var G__12956 = cljs.core.next(seq__12182_12945__$1);
var G__12957 = null;
var G__12958 = (0);
var G__12959 = (0);
seq__12182_12929 = G__12956;
chunk__12183_12930 = G__12957;
count__12184_12931 = G__12958;
i__12185_12932 = G__12959;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__12224){
var vec__12225 = p__12224;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12225,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12225,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__12279 = arguments.length;
switch (G__12279) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__12319 = cljs.core.seq(style_keys);
var chunk__12320 = null;
var count__12321 = (0);
var i__12322 = (0);
while(true){
if((i__12322 < count__12321)){
var it = chunk__12320.cljs$core$IIndexed$_nth$arity$2(null,i__12322);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__12978 = seq__12319;
var G__12979 = chunk__12320;
var G__12980 = count__12321;
var G__12981 = (i__12322 + (1));
seq__12319 = G__12978;
chunk__12320 = G__12979;
count__12321 = G__12980;
i__12322 = G__12981;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12319);
if(temp__5804__auto__){
var seq__12319__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12319__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12319__$1);
var G__12982 = cljs.core.chunk_rest(seq__12319__$1);
var G__12983 = c__5525__auto__;
var G__12984 = cljs.core.count(c__5525__auto__);
var G__12985 = (0);
seq__12319 = G__12982;
chunk__12320 = G__12983;
count__12321 = G__12984;
i__12322 = G__12985;
continue;
} else {
var it = cljs.core.first(seq__12319__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__12987 = cljs.core.next(seq__12319__$1);
var G__12988 = null;
var G__12989 = (0);
var G__12990 = (0);
seq__12319 = G__12987;
chunk__12320 = G__12988;
count__12321 = G__12989;
i__12322 = G__12990;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12358,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12368 = k12358;
var G__12368__$1 = (((G__12368 instanceof cljs.core.Keyword))?G__12368.fqn:null);
switch (G__12368__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12358,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12371){
var vec__12372 = p__12371;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12372,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12372,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12357){
var self__ = this;
var G__12357__$1 = this;
return (new cljs.core.RecordIter((0),G__12357__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12359,other12360){
var self__ = this;
var this12359__$1 = this;
return (((!((other12360 == null)))) && ((((this12359__$1.constructor === other12360.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12359__$1.x,other12360.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12359__$1.y,other12360.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12359__$1.__extmap,other12360.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12358){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12393 = k12358;
var G__12393__$1 = (((G__12393 instanceof cljs.core.Keyword))?G__12393.fqn:null);
switch (G__12393__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12358);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12357){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12395 = cljs.core.keyword_identical_QMARK_;
var expr__12396 = k__5309__auto__;
if(cljs.core.truth_((pred__12395.cljs$core$IFn$_invoke$arity$2 ? pred__12395.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__12396) : pred__12395.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__12396)))){
return (new shadow.dom.Coordinate(G__12357,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12395.cljs$core$IFn$_invoke$arity$2 ? pred__12395.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__12396) : pred__12395.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__12396)))){
return (new shadow.dom.Coordinate(self__.x,G__12357,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12357),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12357){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__12357,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__12367){
var extmap__5342__auto__ = (function (){var G__12408 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12367,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__12367)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12408);
} else {
return G__12408;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__12367),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__12367),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12420,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12436 = k12420;
var G__12436__$1 = (((G__12436 instanceof cljs.core.Keyword))?G__12436.fqn:null);
switch (G__12436__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12420,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12442){
var vec__12443 = p__12442;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12443,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12443,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12419){
var self__ = this;
var G__12419__$1 = this;
return (new cljs.core.RecordIter((0),G__12419__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12421,other12422){
var self__ = this;
var this12421__$1 = this;
return (((!((other12422 == null)))) && ((((this12421__$1.constructor === other12422.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12421__$1.w,other12422.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12421__$1.h,other12422.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12421__$1.__extmap,other12422.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12420){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12459 = k12420;
var G__12459__$1 = (((G__12459 instanceof cljs.core.Keyword))?G__12459.fqn:null);
switch (G__12459__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12420);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12419){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12462 = cljs.core.keyword_identical_QMARK_;
var expr__12463 = k__5309__auto__;
if(cljs.core.truth_((pred__12462.cljs$core$IFn$_invoke$arity$2 ? pred__12462.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__12463) : pred__12462.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__12463)))){
return (new shadow.dom.Size(G__12419,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12462.cljs$core$IFn$_invoke$arity$2 ? pred__12462.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__12463) : pred__12462.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__12463)))){
return (new shadow.dom.Size(self__.w,G__12419,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12419),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12419){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__12419,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__12423){
var extmap__5342__auto__ = (function (){var G__12479 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12423,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__12423)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12479);
} else {
return G__12479;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__12423),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__12423),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__13075 = (i + (1));
var G__13076 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__13075;
ret = G__13076;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12494){
var vec__12496 = p__12494;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12496,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12496,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__12501 = arguments.length;
switch (G__12501) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__13086 = ps;
var G__13087 = (i + (1));
el__$1 = G__13086;
i = G__13087;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__12518 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12518,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12518,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12518,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__12523_13120 = cljs.core.seq(props);
var chunk__12524_13121 = null;
var count__12525_13122 = (0);
var i__12526_13123 = (0);
while(true){
if((i__12526_13123 < count__12525_13122)){
var vec__12542_13126 = chunk__12524_13121.cljs$core$IIndexed$_nth$arity$2(null,i__12526_13123);
var k_13127 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12542_13126,(0),null);
var v_13128 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12542_13126,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_13127);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_13127),v_13128);


var G__13136 = seq__12523_13120;
var G__13137 = chunk__12524_13121;
var G__13138 = count__12525_13122;
var G__13139 = (i__12526_13123 + (1));
seq__12523_13120 = G__13136;
chunk__12524_13121 = G__13137;
count__12525_13122 = G__13138;
i__12526_13123 = G__13139;
continue;
} else {
var temp__5804__auto___13141 = cljs.core.seq(seq__12523_13120);
if(temp__5804__auto___13141){
var seq__12523_13142__$1 = temp__5804__auto___13141;
if(cljs.core.chunked_seq_QMARK_(seq__12523_13142__$1)){
var c__5525__auto___13143 = cljs.core.chunk_first(seq__12523_13142__$1);
var G__13144 = cljs.core.chunk_rest(seq__12523_13142__$1);
var G__13145 = c__5525__auto___13143;
var G__13146 = cljs.core.count(c__5525__auto___13143);
var G__13147 = (0);
seq__12523_13120 = G__13144;
chunk__12524_13121 = G__13145;
count__12525_13122 = G__13146;
i__12526_13123 = G__13147;
continue;
} else {
var vec__12546_13148 = cljs.core.first(seq__12523_13142__$1);
var k_13149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12546_13148,(0),null);
var v_13150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12546_13148,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_13149);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_13149),v_13150);


var G__13153 = cljs.core.next(seq__12523_13142__$1);
var G__13154 = null;
var G__13155 = (0);
var G__13156 = (0);
seq__12523_13120 = G__13153;
chunk__12524_13121 = G__13154;
count__12525_13122 = G__13155;
i__12526_13123 = G__13156;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__12555 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12555,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12555,(1),null);
var seq__12558_13160 = cljs.core.seq(node_children);
var chunk__12560_13161 = null;
var count__12561_13162 = (0);
var i__12562_13163 = (0);
while(true){
if((i__12562_13163 < count__12561_13162)){
var child_struct_13166 = chunk__12560_13161.cljs$core$IIndexed$_nth$arity$2(null,i__12562_13163);
if((!((child_struct_13166 == null)))){
if(typeof child_struct_13166 === 'string'){
var text_13167 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_13167),child_struct_13166].join(''));
} else {
var children_13169 = shadow.dom.svg_node(child_struct_13166);
if(cljs.core.seq_QMARK_(children_13169)){
var seq__12586_13170 = cljs.core.seq(children_13169);
var chunk__12588_13171 = null;
var count__12589_13172 = (0);
var i__12590_13173 = (0);
while(true){
if((i__12590_13173 < count__12589_13172)){
var child_13174 = chunk__12588_13171.cljs$core$IIndexed$_nth$arity$2(null,i__12590_13173);
if(cljs.core.truth_(child_13174)){
node.appendChild(child_13174);


var G__13178 = seq__12586_13170;
var G__13179 = chunk__12588_13171;
var G__13180 = count__12589_13172;
var G__13181 = (i__12590_13173 + (1));
seq__12586_13170 = G__13178;
chunk__12588_13171 = G__13179;
count__12589_13172 = G__13180;
i__12590_13173 = G__13181;
continue;
} else {
var G__13182 = seq__12586_13170;
var G__13183 = chunk__12588_13171;
var G__13184 = count__12589_13172;
var G__13185 = (i__12590_13173 + (1));
seq__12586_13170 = G__13182;
chunk__12588_13171 = G__13183;
count__12589_13172 = G__13184;
i__12590_13173 = G__13185;
continue;
}
} else {
var temp__5804__auto___13186 = cljs.core.seq(seq__12586_13170);
if(temp__5804__auto___13186){
var seq__12586_13187__$1 = temp__5804__auto___13186;
if(cljs.core.chunked_seq_QMARK_(seq__12586_13187__$1)){
var c__5525__auto___13190 = cljs.core.chunk_first(seq__12586_13187__$1);
var G__13191 = cljs.core.chunk_rest(seq__12586_13187__$1);
var G__13192 = c__5525__auto___13190;
var G__13193 = cljs.core.count(c__5525__auto___13190);
var G__13194 = (0);
seq__12586_13170 = G__13191;
chunk__12588_13171 = G__13192;
count__12589_13172 = G__13193;
i__12590_13173 = G__13194;
continue;
} else {
var child_13198 = cljs.core.first(seq__12586_13187__$1);
if(cljs.core.truth_(child_13198)){
node.appendChild(child_13198);


var G__13199 = cljs.core.next(seq__12586_13187__$1);
var G__13200 = null;
var G__13201 = (0);
var G__13202 = (0);
seq__12586_13170 = G__13199;
chunk__12588_13171 = G__13200;
count__12589_13172 = G__13201;
i__12590_13173 = G__13202;
continue;
} else {
var G__13203 = cljs.core.next(seq__12586_13187__$1);
var G__13204 = null;
var G__13205 = (0);
var G__13206 = (0);
seq__12586_13170 = G__13203;
chunk__12588_13171 = G__13204;
count__12589_13172 = G__13205;
i__12590_13173 = G__13206;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_13169);
}
}


var G__13209 = seq__12558_13160;
var G__13210 = chunk__12560_13161;
var G__13211 = count__12561_13162;
var G__13212 = (i__12562_13163 + (1));
seq__12558_13160 = G__13209;
chunk__12560_13161 = G__13210;
count__12561_13162 = G__13211;
i__12562_13163 = G__13212;
continue;
} else {
var G__13213 = seq__12558_13160;
var G__13214 = chunk__12560_13161;
var G__13215 = count__12561_13162;
var G__13216 = (i__12562_13163 + (1));
seq__12558_13160 = G__13213;
chunk__12560_13161 = G__13214;
count__12561_13162 = G__13215;
i__12562_13163 = G__13216;
continue;
}
} else {
var temp__5804__auto___13217 = cljs.core.seq(seq__12558_13160);
if(temp__5804__auto___13217){
var seq__12558_13219__$1 = temp__5804__auto___13217;
if(cljs.core.chunked_seq_QMARK_(seq__12558_13219__$1)){
var c__5525__auto___13220 = cljs.core.chunk_first(seq__12558_13219__$1);
var G__13221 = cljs.core.chunk_rest(seq__12558_13219__$1);
var G__13222 = c__5525__auto___13220;
var G__13223 = cljs.core.count(c__5525__auto___13220);
var G__13224 = (0);
seq__12558_13160 = G__13221;
chunk__12560_13161 = G__13222;
count__12561_13162 = G__13223;
i__12562_13163 = G__13224;
continue;
} else {
var child_struct_13229 = cljs.core.first(seq__12558_13219__$1);
if((!((child_struct_13229 == null)))){
if(typeof child_struct_13229 === 'string'){
var text_13233 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_13233),child_struct_13229].join(''));
} else {
var children_13234 = shadow.dom.svg_node(child_struct_13229);
if(cljs.core.seq_QMARK_(children_13234)){
var seq__12601_13235 = cljs.core.seq(children_13234);
var chunk__12603_13236 = null;
var count__12604_13237 = (0);
var i__12605_13238 = (0);
while(true){
if((i__12605_13238 < count__12604_13237)){
var child_13239 = chunk__12603_13236.cljs$core$IIndexed$_nth$arity$2(null,i__12605_13238);
if(cljs.core.truth_(child_13239)){
node.appendChild(child_13239);


var G__13240 = seq__12601_13235;
var G__13241 = chunk__12603_13236;
var G__13242 = count__12604_13237;
var G__13243 = (i__12605_13238 + (1));
seq__12601_13235 = G__13240;
chunk__12603_13236 = G__13241;
count__12604_13237 = G__13242;
i__12605_13238 = G__13243;
continue;
} else {
var G__13245 = seq__12601_13235;
var G__13246 = chunk__12603_13236;
var G__13247 = count__12604_13237;
var G__13248 = (i__12605_13238 + (1));
seq__12601_13235 = G__13245;
chunk__12603_13236 = G__13246;
count__12604_13237 = G__13247;
i__12605_13238 = G__13248;
continue;
}
} else {
var temp__5804__auto___13250__$1 = cljs.core.seq(seq__12601_13235);
if(temp__5804__auto___13250__$1){
var seq__12601_13251__$1 = temp__5804__auto___13250__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12601_13251__$1)){
var c__5525__auto___13252 = cljs.core.chunk_first(seq__12601_13251__$1);
var G__13253 = cljs.core.chunk_rest(seq__12601_13251__$1);
var G__13254 = c__5525__auto___13252;
var G__13255 = cljs.core.count(c__5525__auto___13252);
var G__13256 = (0);
seq__12601_13235 = G__13253;
chunk__12603_13236 = G__13254;
count__12604_13237 = G__13255;
i__12605_13238 = G__13256;
continue;
} else {
var child_13257 = cljs.core.first(seq__12601_13251__$1);
if(cljs.core.truth_(child_13257)){
node.appendChild(child_13257);


var G__13259 = cljs.core.next(seq__12601_13251__$1);
var G__13260 = null;
var G__13261 = (0);
var G__13262 = (0);
seq__12601_13235 = G__13259;
chunk__12603_13236 = G__13260;
count__12604_13237 = G__13261;
i__12605_13238 = G__13262;
continue;
} else {
var G__13264 = cljs.core.next(seq__12601_13251__$1);
var G__13265 = null;
var G__13266 = (0);
var G__13267 = (0);
seq__12601_13235 = G__13264;
chunk__12603_13236 = G__13265;
count__12604_13237 = G__13266;
i__12605_13238 = G__13267;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_13234);
}
}


var G__13269 = cljs.core.next(seq__12558_13219__$1);
var G__13270 = null;
var G__13271 = (0);
var G__13272 = (0);
seq__12558_13160 = G__13269;
chunk__12560_13161 = G__13270;
count__12561_13162 = G__13271;
i__12562_13163 = G__13272;
continue;
} else {
var G__13273 = cljs.core.next(seq__12558_13219__$1);
var G__13274 = null;
var G__13275 = (0);
var G__13276 = (0);
seq__12558_13160 = G__13273;
chunk__12560_13161 = G__13274;
count__12561_13162 = G__13275;
i__12562_13163 = G__13276;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___13277 = arguments.length;
var i__5727__auto___13278 = (0);
while(true){
if((i__5727__auto___13278 < len__5726__auto___13277)){
args__5732__auto__.push((arguments[i__5727__auto___13278]));

var G__13279 = (i__5727__auto___13278 + (1));
i__5727__auto___13278 = G__13279;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq12622){
var G__12623 = cljs.core.first(seq12622);
var seq12622__$1 = cljs.core.next(seq12622);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12623,seq12622__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
