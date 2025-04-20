goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___21258 = arguments.length;
var i__5727__auto___21259 = (0);
while(true){
if((i__5727__auto___21259 < len__5726__auto___21258)){
args__5732__auto__.push((arguments[i__5727__auto___21259]));

var G__21260 = (i__5727__auto___21259 + (1));
i__5727__auto___21259 = G__21260;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq20761){
var G__20762 = cljs.core.first(seq20761);
var seq20761__$1 = cljs.core.next(seq20761);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20762,seq20761__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__20768 = cljs.core.seq(sources);
var chunk__20769 = null;
var count__20770 = (0);
var i__20771 = (0);
while(true){
if((i__20771 < count__20770)){
var map__20779 = chunk__20769.cljs$core$IIndexed$_nth$arity$2(null,i__20771);
var map__20779__$1 = cljs.core.__destructure_map(map__20779);
var src = map__20779__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20779__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20779__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20779__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20779__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20780){var e_21261 = e20780;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21261);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21261.message)].join('')));
}

var G__21262 = seq__20768;
var G__21263 = chunk__20769;
var G__21264 = count__20770;
var G__21265 = (i__20771 + (1));
seq__20768 = G__21262;
chunk__20769 = G__21263;
count__20770 = G__21264;
i__20771 = G__21265;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20768);
if(temp__5804__auto__){
var seq__20768__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20768__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20768__$1);
var G__21266 = cljs.core.chunk_rest(seq__20768__$1);
var G__21267 = c__5525__auto__;
var G__21268 = cljs.core.count(c__5525__auto__);
var G__21269 = (0);
seq__20768 = G__21266;
chunk__20769 = G__21267;
count__20770 = G__21268;
i__20771 = G__21269;
continue;
} else {
var map__20781 = cljs.core.first(seq__20768__$1);
var map__20781__$1 = cljs.core.__destructure_map(map__20781);
var src = map__20781__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20781__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20781__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20781__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20781__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20782){var e_21270 = e20782;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21270);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21270.message)].join('')));
}

var G__21271 = cljs.core.next(seq__20768__$1);
var G__21272 = null;
var G__21273 = (0);
var G__21274 = (0);
seq__20768 = G__21271;
chunk__20769 = G__21272;
count__20770 = G__21273;
i__20771 = G__21274;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__20783 = cljs.core.seq(js_requires);
var chunk__20784 = null;
var count__20785 = (0);
var i__20786 = (0);
while(true){
if((i__20786 < count__20785)){
var js_ns = chunk__20784.cljs$core$IIndexed$_nth$arity$2(null,i__20786);
var require_str_21275 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21275);


var G__21276 = seq__20783;
var G__21277 = chunk__20784;
var G__21278 = count__20785;
var G__21279 = (i__20786 + (1));
seq__20783 = G__21276;
chunk__20784 = G__21277;
count__20785 = G__21278;
i__20786 = G__21279;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20783);
if(temp__5804__auto__){
var seq__20783__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20783__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20783__$1);
var G__21280 = cljs.core.chunk_rest(seq__20783__$1);
var G__21281 = c__5525__auto__;
var G__21282 = cljs.core.count(c__5525__auto__);
var G__21283 = (0);
seq__20783 = G__21280;
chunk__20784 = G__21281;
count__20785 = G__21282;
i__20786 = G__21283;
continue;
} else {
var js_ns = cljs.core.first(seq__20783__$1);
var require_str_21284 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21284);


var G__21285 = cljs.core.next(seq__20783__$1);
var G__21286 = null;
var G__21287 = (0);
var G__21288 = (0);
seq__20783 = G__21285;
chunk__20784 = G__21286;
count__20785 = G__21287;
i__20786 = G__21288;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__20789){
var map__20791 = p__20789;
var map__20791__$1 = cljs.core.__destructure_map(map__20791);
var msg = map__20791__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20791__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20791__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20792(s__20793){
return (new cljs.core.LazySeq(null,(function (){
var s__20793__$1 = s__20793;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__20793__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__20798 = cljs.core.first(xs__6360__auto__);
var map__20798__$1 = cljs.core.__destructure_map(map__20798);
var src = map__20798__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20798__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20798__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__20793__$1,map__20798,map__20798__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20791,map__20791__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20792_$_iter__20794(s__20795){
return (new cljs.core.LazySeq(null,((function (s__20793__$1,map__20798,map__20798__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20791,map__20791__$1,msg,info,reload_info){
return (function (){
var s__20795__$1 = s__20795;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__20795__$1);
if(temp__5804__auto____$1){
var s__20795__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20795__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__20795__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__20797 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__20796 = (0);
while(true){
if((i__20796 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__20796);
cljs.core.chunk_append(b__20797,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21289 = (i__20796 + (1));
i__20796 = G__21289;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20797),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20792_$_iter__20794(cljs.core.chunk_rest(s__20795__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20797),null);
}
} else {
var warning = cljs.core.first(s__20795__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20792_$_iter__20794(cljs.core.rest(s__20795__$2)));
}
} else {
return null;
}
break;
}
});})(s__20793__$1,map__20798,map__20798__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20791,map__20791__$1,msg,info,reload_info))
,null,null));
});})(s__20793__$1,map__20798,map__20798__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20791,map__20791__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20792(cljs.core.rest(s__20793__$1)));
} else {
var G__21290 = cljs.core.rest(s__20793__$1);
s__20793__$1 = G__21290;
continue;
}
} else {
var G__21291 = cljs.core.rest(s__20793__$1);
s__20793__$1 = G__21291;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__20805_21292 = cljs.core.seq(warnings);
var chunk__20806_21293 = null;
var count__20807_21294 = (0);
var i__20808_21295 = (0);
while(true){
if((i__20808_21295 < count__20807_21294)){
var map__20823_21296 = chunk__20806_21293.cljs$core$IIndexed$_nth$arity$2(null,i__20808_21295);
var map__20823_21297__$1 = cljs.core.__destructure_map(map__20823_21296);
var w_21298 = map__20823_21297__$1;
var msg_21299__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20823_21297__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21300 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20823_21297__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21301 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20823_21297__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21302 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20823_21297__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21302)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21300),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21301),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21299__$1)].join(''));


var G__21303 = seq__20805_21292;
var G__21304 = chunk__20806_21293;
var G__21305 = count__20807_21294;
var G__21306 = (i__20808_21295 + (1));
seq__20805_21292 = G__21303;
chunk__20806_21293 = G__21304;
count__20807_21294 = G__21305;
i__20808_21295 = G__21306;
continue;
} else {
var temp__5804__auto___21307 = cljs.core.seq(seq__20805_21292);
if(temp__5804__auto___21307){
var seq__20805_21308__$1 = temp__5804__auto___21307;
if(cljs.core.chunked_seq_QMARK_(seq__20805_21308__$1)){
var c__5525__auto___21309 = cljs.core.chunk_first(seq__20805_21308__$1);
var G__21310 = cljs.core.chunk_rest(seq__20805_21308__$1);
var G__21311 = c__5525__auto___21309;
var G__21312 = cljs.core.count(c__5525__auto___21309);
var G__21313 = (0);
seq__20805_21292 = G__21310;
chunk__20806_21293 = G__21311;
count__20807_21294 = G__21312;
i__20808_21295 = G__21313;
continue;
} else {
var map__20825_21314 = cljs.core.first(seq__20805_21308__$1);
var map__20825_21315__$1 = cljs.core.__destructure_map(map__20825_21314);
var w_21316 = map__20825_21315__$1;
var msg_21317__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20825_21315__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21318 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20825_21315__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21319 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20825_21315__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21320 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20825_21315__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21320)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21318),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21319),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21317__$1)].join(''));


var G__21321 = cljs.core.next(seq__20805_21308__$1);
var G__21322 = null;
var G__21323 = (0);
var G__21324 = (0);
seq__20805_21292 = G__21321;
chunk__20806_21293 = G__21322;
count__20807_21294 = G__21323;
i__20808_21295 = G__21324;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__20787_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__20787_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__20849 = node_uri;
G__20849.setQuery(null);

G__20849.setPath(new$);

return G__20849;
})());
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__20873){
var map__20874 = p__20873;
var map__20874__$1 = cljs.core.__destructure_map(map__20874);
var msg = map__20874__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20874__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20874__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__20878 = cljs.core.seq(updates);
var chunk__20880 = null;
var count__20881 = (0);
var i__20882 = (0);
while(true){
if((i__20882 < count__20881)){
var path = chunk__20880.cljs$core$IIndexed$_nth$arity$2(null,i__20882);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21128_21325 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21132_21326 = null;
var count__21133_21327 = (0);
var i__21134_21328 = (0);
while(true){
if((i__21134_21328 < count__21133_21327)){
var node_21329 = chunk__21132_21326.cljs$core$IIndexed$_nth$arity$2(null,i__21134_21328);
if(cljs.core.not(node_21329.shadow$old)){
var path_match_21330 = shadow.cljs.devtools.client.browser.match_paths(node_21329.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21330)){
var new_link_21331 = (function (){var G__21160 = node_21329.cloneNode(true);
G__21160.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21330),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21160;
})();
(node_21329.shadow$old = true);

(new_link_21331.onload = ((function (seq__21128_21325,chunk__21132_21326,count__21133_21327,i__21134_21328,seq__20878,chunk__20880,count__20881,i__20882,new_link_21331,path_match_21330,node_21329,path,map__20874,map__20874__$1,msg,updates,reload_info){
return (function (e){
var seq__21161_21332 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21163_21333 = null;
var count__21164_21334 = (0);
var i__21165_21335 = (0);
while(true){
if((i__21165_21335 < count__21164_21334)){
var map__21169_21336 = chunk__21163_21333.cljs$core$IIndexed$_nth$arity$2(null,i__21165_21335);
var map__21169_21337__$1 = cljs.core.__destructure_map(map__21169_21336);
var task_21338 = map__21169_21337__$1;
var fn_str_21339 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21169_21337__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21340 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21169_21337__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21341 = goog.getObjectByName(fn_str_21339,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21340)].join(''));

(fn_obj_21341.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21341.cljs$core$IFn$_invoke$arity$2(path,new_link_21331) : fn_obj_21341.call(null,path,new_link_21331));


var G__21342 = seq__21161_21332;
var G__21343 = chunk__21163_21333;
var G__21344 = count__21164_21334;
var G__21345 = (i__21165_21335 + (1));
seq__21161_21332 = G__21342;
chunk__21163_21333 = G__21343;
count__21164_21334 = G__21344;
i__21165_21335 = G__21345;
continue;
} else {
var temp__5804__auto___21346 = cljs.core.seq(seq__21161_21332);
if(temp__5804__auto___21346){
var seq__21161_21347__$1 = temp__5804__auto___21346;
if(cljs.core.chunked_seq_QMARK_(seq__21161_21347__$1)){
var c__5525__auto___21348 = cljs.core.chunk_first(seq__21161_21347__$1);
var G__21349 = cljs.core.chunk_rest(seq__21161_21347__$1);
var G__21350 = c__5525__auto___21348;
var G__21351 = cljs.core.count(c__5525__auto___21348);
var G__21352 = (0);
seq__21161_21332 = G__21349;
chunk__21163_21333 = G__21350;
count__21164_21334 = G__21351;
i__21165_21335 = G__21352;
continue;
} else {
var map__21170_21353 = cljs.core.first(seq__21161_21347__$1);
var map__21170_21354__$1 = cljs.core.__destructure_map(map__21170_21353);
var task_21355 = map__21170_21354__$1;
var fn_str_21356 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21170_21354__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21357 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21170_21354__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21358 = goog.getObjectByName(fn_str_21356,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21357)].join(''));

(fn_obj_21358.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21358.cljs$core$IFn$_invoke$arity$2(path,new_link_21331) : fn_obj_21358.call(null,path,new_link_21331));


var G__21359 = cljs.core.next(seq__21161_21347__$1);
var G__21360 = null;
var G__21361 = (0);
var G__21362 = (0);
seq__21161_21332 = G__21359;
chunk__21163_21333 = G__21360;
count__21164_21334 = G__21361;
i__21165_21335 = G__21362;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21329);
});})(seq__21128_21325,chunk__21132_21326,count__21133_21327,i__21134_21328,seq__20878,chunk__20880,count__20881,i__20882,new_link_21331,path_match_21330,node_21329,path,map__20874,map__20874__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21330], 0));

goog.dom.insertSiblingAfter(new_link_21331,node_21329);


var G__21363 = seq__21128_21325;
var G__21364 = chunk__21132_21326;
var G__21365 = count__21133_21327;
var G__21366 = (i__21134_21328 + (1));
seq__21128_21325 = G__21363;
chunk__21132_21326 = G__21364;
count__21133_21327 = G__21365;
i__21134_21328 = G__21366;
continue;
} else {
var G__21367 = seq__21128_21325;
var G__21368 = chunk__21132_21326;
var G__21369 = count__21133_21327;
var G__21370 = (i__21134_21328 + (1));
seq__21128_21325 = G__21367;
chunk__21132_21326 = G__21368;
count__21133_21327 = G__21369;
i__21134_21328 = G__21370;
continue;
}
} else {
var G__21371 = seq__21128_21325;
var G__21372 = chunk__21132_21326;
var G__21373 = count__21133_21327;
var G__21374 = (i__21134_21328 + (1));
seq__21128_21325 = G__21371;
chunk__21132_21326 = G__21372;
count__21133_21327 = G__21373;
i__21134_21328 = G__21374;
continue;
}
} else {
var temp__5804__auto___21375 = cljs.core.seq(seq__21128_21325);
if(temp__5804__auto___21375){
var seq__21128_21376__$1 = temp__5804__auto___21375;
if(cljs.core.chunked_seq_QMARK_(seq__21128_21376__$1)){
var c__5525__auto___21377 = cljs.core.chunk_first(seq__21128_21376__$1);
var G__21378 = cljs.core.chunk_rest(seq__21128_21376__$1);
var G__21379 = c__5525__auto___21377;
var G__21380 = cljs.core.count(c__5525__auto___21377);
var G__21381 = (0);
seq__21128_21325 = G__21378;
chunk__21132_21326 = G__21379;
count__21133_21327 = G__21380;
i__21134_21328 = G__21381;
continue;
} else {
var node_21382 = cljs.core.first(seq__21128_21376__$1);
if(cljs.core.not(node_21382.shadow$old)){
var path_match_21383 = shadow.cljs.devtools.client.browser.match_paths(node_21382.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21383)){
var new_link_21384 = (function (){var G__21171 = node_21382.cloneNode(true);
G__21171.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21383),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21171;
})();
(node_21382.shadow$old = true);

(new_link_21384.onload = ((function (seq__21128_21325,chunk__21132_21326,count__21133_21327,i__21134_21328,seq__20878,chunk__20880,count__20881,i__20882,new_link_21384,path_match_21383,node_21382,seq__21128_21376__$1,temp__5804__auto___21375,path,map__20874,map__20874__$1,msg,updates,reload_info){
return (function (e){
var seq__21172_21385 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21174_21386 = null;
var count__21175_21387 = (0);
var i__21176_21388 = (0);
while(true){
if((i__21176_21388 < count__21175_21387)){
var map__21180_21389 = chunk__21174_21386.cljs$core$IIndexed$_nth$arity$2(null,i__21176_21388);
var map__21180_21390__$1 = cljs.core.__destructure_map(map__21180_21389);
var task_21391 = map__21180_21390__$1;
var fn_str_21392 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21180_21390__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21393 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21180_21390__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21394 = goog.getObjectByName(fn_str_21392,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21393)].join(''));

(fn_obj_21394.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21394.cljs$core$IFn$_invoke$arity$2(path,new_link_21384) : fn_obj_21394.call(null,path,new_link_21384));


var G__21395 = seq__21172_21385;
var G__21396 = chunk__21174_21386;
var G__21397 = count__21175_21387;
var G__21398 = (i__21176_21388 + (1));
seq__21172_21385 = G__21395;
chunk__21174_21386 = G__21396;
count__21175_21387 = G__21397;
i__21176_21388 = G__21398;
continue;
} else {
var temp__5804__auto___21399__$1 = cljs.core.seq(seq__21172_21385);
if(temp__5804__auto___21399__$1){
var seq__21172_21400__$1 = temp__5804__auto___21399__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21172_21400__$1)){
var c__5525__auto___21401 = cljs.core.chunk_first(seq__21172_21400__$1);
var G__21402 = cljs.core.chunk_rest(seq__21172_21400__$1);
var G__21403 = c__5525__auto___21401;
var G__21404 = cljs.core.count(c__5525__auto___21401);
var G__21405 = (0);
seq__21172_21385 = G__21402;
chunk__21174_21386 = G__21403;
count__21175_21387 = G__21404;
i__21176_21388 = G__21405;
continue;
} else {
var map__21181_21406 = cljs.core.first(seq__21172_21400__$1);
var map__21181_21407__$1 = cljs.core.__destructure_map(map__21181_21406);
var task_21408 = map__21181_21407__$1;
var fn_str_21409 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21181_21407__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21410 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21181_21407__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21411 = goog.getObjectByName(fn_str_21409,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21410)].join(''));

(fn_obj_21411.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21411.cljs$core$IFn$_invoke$arity$2(path,new_link_21384) : fn_obj_21411.call(null,path,new_link_21384));


var G__21412 = cljs.core.next(seq__21172_21400__$1);
var G__21413 = null;
var G__21414 = (0);
var G__21415 = (0);
seq__21172_21385 = G__21412;
chunk__21174_21386 = G__21413;
count__21175_21387 = G__21414;
i__21176_21388 = G__21415;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21382);
});})(seq__21128_21325,chunk__21132_21326,count__21133_21327,i__21134_21328,seq__20878,chunk__20880,count__20881,i__20882,new_link_21384,path_match_21383,node_21382,seq__21128_21376__$1,temp__5804__auto___21375,path,map__20874,map__20874__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21383], 0));

goog.dom.insertSiblingAfter(new_link_21384,node_21382);


var G__21416 = cljs.core.next(seq__21128_21376__$1);
var G__21417 = null;
var G__21418 = (0);
var G__21419 = (0);
seq__21128_21325 = G__21416;
chunk__21132_21326 = G__21417;
count__21133_21327 = G__21418;
i__21134_21328 = G__21419;
continue;
} else {
var G__21420 = cljs.core.next(seq__21128_21376__$1);
var G__21421 = null;
var G__21422 = (0);
var G__21423 = (0);
seq__21128_21325 = G__21420;
chunk__21132_21326 = G__21421;
count__21133_21327 = G__21422;
i__21134_21328 = G__21423;
continue;
}
} else {
var G__21424 = cljs.core.next(seq__21128_21376__$1);
var G__21425 = null;
var G__21426 = (0);
var G__21427 = (0);
seq__21128_21325 = G__21424;
chunk__21132_21326 = G__21425;
count__21133_21327 = G__21426;
i__21134_21328 = G__21427;
continue;
}
}
} else {
}
}
break;
}


var G__21428 = seq__20878;
var G__21429 = chunk__20880;
var G__21430 = count__20881;
var G__21431 = (i__20882 + (1));
seq__20878 = G__21428;
chunk__20880 = G__21429;
count__20881 = G__21430;
i__20882 = G__21431;
continue;
} else {
var G__21432 = seq__20878;
var G__21433 = chunk__20880;
var G__21434 = count__20881;
var G__21435 = (i__20882 + (1));
seq__20878 = G__21432;
chunk__20880 = G__21433;
count__20881 = G__21434;
i__20882 = G__21435;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20878);
if(temp__5804__auto__){
var seq__20878__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20878__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20878__$1);
var G__21436 = cljs.core.chunk_rest(seq__20878__$1);
var G__21437 = c__5525__auto__;
var G__21438 = cljs.core.count(c__5525__auto__);
var G__21439 = (0);
seq__20878 = G__21436;
chunk__20880 = G__21437;
count__20881 = G__21438;
i__20882 = G__21439;
continue;
} else {
var path = cljs.core.first(seq__20878__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21182_21440 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21186_21441 = null;
var count__21187_21442 = (0);
var i__21188_21443 = (0);
while(true){
if((i__21188_21443 < count__21187_21442)){
var node_21444 = chunk__21186_21441.cljs$core$IIndexed$_nth$arity$2(null,i__21188_21443);
if(cljs.core.not(node_21444.shadow$old)){
var path_match_21445 = shadow.cljs.devtools.client.browser.match_paths(node_21444.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21445)){
var new_link_21446 = (function (){var G__21214 = node_21444.cloneNode(true);
G__21214.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21445),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21214;
})();
(node_21444.shadow$old = true);

(new_link_21446.onload = ((function (seq__21182_21440,chunk__21186_21441,count__21187_21442,i__21188_21443,seq__20878,chunk__20880,count__20881,i__20882,new_link_21446,path_match_21445,node_21444,path,seq__20878__$1,temp__5804__auto__,map__20874,map__20874__$1,msg,updates,reload_info){
return (function (e){
var seq__21215_21447 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21217_21448 = null;
var count__21218_21449 = (0);
var i__21219_21450 = (0);
while(true){
if((i__21219_21450 < count__21218_21449)){
var map__21223_21451 = chunk__21217_21448.cljs$core$IIndexed$_nth$arity$2(null,i__21219_21450);
var map__21223_21452__$1 = cljs.core.__destructure_map(map__21223_21451);
var task_21453 = map__21223_21452__$1;
var fn_str_21454 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21223_21452__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21455 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21223_21452__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21456 = goog.getObjectByName(fn_str_21454,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21455)].join(''));

(fn_obj_21456.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21456.cljs$core$IFn$_invoke$arity$2(path,new_link_21446) : fn_obj_21456.call(null,path,new_link_21446));


var G__21457 = seq__21215_21447;
var G__21458 = chunk__21217_21448;
var G__21459 = count__21218_21449;
var G__21460 = (i__21219_21450 + (1));
seq__21215_21447 = G__21457;
chunk__21217_21448 = G__21458;
count__21218_21449 = G__21459;
i__21219_21450 = G__21460;
continue;
} else {
var temp__5804__auto___21461__$1 = cljs.core.seq(seq__21215_21447);
if(temp__5804__auto___21461__$1){
var seq__21215_21462__$1 = temp__5804__auto___21461__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21215_21462__$1)){
var c__5525__auto___21463 = cljs.core.chunk_first(seq__21215_21462__$1);
var G__21464 = cljs.core.chunk_rest(seq__21215_21462__$1);
var G__21465 = c__5525__auto___21463;
var G__21466 = cljs.core.count(c__5525__auto___21463);
var G__21467 = (0);
seq__21215_21447 = G__21464;
chunk__21217_21448 = G__21465;
count__21218_21449 = G__21466;
i__21219_21450 = G__21467;
continue;
} else {
var map__21224_21468 = cljs.core.first(seq__21215_21462__$1);
var map__21224_21469__$1 = cljs.core.__destructure_map(map__21224_21468);
var task_21470 = map__21224_21469__$1;
var fn_str_21471 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21224_21469__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21472 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21224_21469__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21473 = goog.getObjectByName(fn_str_21471,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21472)].join(''));

(fn_obj_21473.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21473.cljs$core$IFn$_invoke$arity$2(path,new_link_21446) : fn_obj_21473.call(null,path,new_link_21446));


var G__21474 = cljs.core.next(seq__21215_21462__$1);
var G__21475 = null;
var G__21476 = (0);
var G__21477 = (0);
seq__21215_21447 = G__21474;
chunk__21217_21448 = G__21475;
count__21218_21449 = G__21476;
i__21219_21450 = G__21477;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21444);
});})(seq__21182_21440,chunk__21186_21441,count__21187_21442,i__21188_21443,seq__20878,chunk__20880,count__20881,i__20882,new_link_21446,path_match_21445,node_21444,path,seq__20878__$1,temp__5804__auto__,map__20874,map__20874__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21445], 0));

goog.dom.insertSiblingAfter(new_link_21446,node_21444);


var G__21478 = seq__21182_21440;
var G__21479 = chunk__21186_21441;
var G__21480 = count__21187_21442;
var G__21481 = (i__21188_21443 + (1));
seq__21182_21440 = G__21478;
chunk__21186_21441 = G__21479;
count__21187_21442 = G__21480;
i__21188_21443 = G__21481;
continue;
} else {
var G__21482 = seq__21182_21440;
var G__21483 = chunk__21186_21441;
var G__21484 = count__21187_21442;
var G__21485 = (i__21188_21443 + (1));
seq__21182_21440 = G__21482;
chunk__21186_21441 = G__21483;
count__21187_21442 = G__21484;
i__21188_21443 = G__21485;
continue;
}
} else {
var G__21486 = seq__21182_21440;
var G__21487 = chunk__21186_21441;
var G__21488 = count__21187_21442;
var G__21489 = (i__21188_21443 + (1));
seq__21182_21440 = G__21486;
chunk__21186_21441 = G__21487;
count__21187_21442 = G__21488;
i__21188_21443 = G__21489;
continue;
}
} else {
var temp__5804__auto___21490__$1 = cljs.core.seq(seq__21182_21440);
if(temp__5804__auto___21490__$1){
var seq__21182_21491__$1 = temp__5804__auto___21490__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21182_21491__$1)){
var c__5525__auto___21492 = cljs.core.chunk_first(seq__21182_21491__$1);
var G__21493 = cljs.core.chunk_rest(seq__21182_21491__$1);
var G__21494 = c__5525__auto___21492;
var G__21495 = cljs.core.count(c__5525__auto___21492);
var G__21496 = (0);
seq__21182_21440 = G__21493;
chunk__21186_21441 = G__21494;
count__21187_21442 = G__21495;
i__21188_21443 = G__21496;
continue;
} else {
var node_21497 = cljs.core.first(seq__21182_21491__$1);
if(cljs.core.not(node_21497.shadow$old)){
var path_match_21498 = shadow.cljs.devtools.client.browser.match_paths(node_21497.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21498)){
var new_link_21499 = (function (){var G__21225 = node_21497.cloneNode(true);
G__21225.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21498),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21225;
})();
(node_21497.shadow$old = true);

(new_link_21499.onload = ((function (seq__21182_21440,chunk__21186_21441,count__21187_21442,i__21188_21443,seq__20878,chunk__20880,count__20881,i__20882,new_link_21499,path_match_21498,node_21497,seq__21182_21491__$1,temp__5804__auto___21490__$1,path,seq__20878__$1,temp__5804__auto__,map__20874,map__20874__$1,msg,updates,reload_info){
return (function (e){
var seq__21226_21500 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21228_21501 = null;
var count__21229_21502 = (0);
var i__21230_21503 = (0);
while(true){
if((i__21230_21503 < count__21229_21502)){
var map__21234_21504 = chunk__21228_21501.cljs$core$IIndexed$_nth$arity$2(null,i__21230_21503);
var map__21234_21505__$1 = cljs.core.__destructure_map(map__21234_21504);
var task_21506 = map__21234_21505__$1;
var fn_str_21507 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21234_21505__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21508 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21234_21505__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21509 = goog.getObjectByName(fn_str_21507,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21508)].join(''));

(fn_obj_21509.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21509.cljs$core$IFn$_invoke$arity$2(path,new_link_21499) : fn_obj_21509.call(null,path,new_link_21499));


var G__21510 = seq__21226_21500;
var G__21511 = chunk__21228_21501;
var G__21512 = count__21229_21502;
var G__21513 = (i__21230_21503 + (1));
seq__21226_21500 = G__21510;
chunk__21228_21501 = G__21511;
count__21229_21502 = G__21512;
i__21230_21503 = G__21513;
continue;
} else {
var temp__5804__auto___21514__$2 = cljs.core.seq(seq__21226_21500);
if(temp__5804__auto___21514__$2){
var seq__21226_21515__$1 = temp__5804__auto___21514__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21226_21515__$1)){
var c__5525__auto___21516 = cljs.core.chunk_first(seq__21226_21515__$1);
var G__21517 = cljs.core.chunk_rest(seq__21226_21515__$1);
var G__21518 = c__5525__auto___21516;
var G__21519 = cljs.core.count(c__5525__auto___21516);
var G__21520 = (0);
seq__21226_21500 = G__21517;
chunk__21228_21501 = G__21518;
count__21229_21502 = G__21519;
i__21230_21503 = G__21520;
continue;
} else {
var map__21235_21521 = cljs.core.first(seq__21226_21515__$1);
var map__21235_21522__$1 = cljs.core.__destructure_map(map__21235_21521);
var task_21523 = map__21235_21522__$1;
var fn_str_21524 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21235_21522__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21525 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21235_21522__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21526 = goog.getObjectByName(fn_str_21524,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21525)].join(''));

(fn_obj_21526.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21526.cljs$core$IFn$_invoke$arity$2(path,new_link_21499) : fn_obj_21526.call(null,path,new_link_21499));


var G__21527 = cljs.core.next(seq__21226_21515__$1);
var G__21528 = null;
var G__21529 = (0);
var G__21530 = (0);
seq__21226_21500 = G__21527;
chunk__21228_21501 = G__21528;
count__21229_21502 = G__21529;
i__21230_21503 = G__21530;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21497);
});})(seq__21182_21440,chunk__21186_21441,count__21187_21442,i__21188_21443,seq__20878,chunk__20880,count__20881,i__20882,new_link_21499,path_match_21498,node_21497,seq__21182_21491__$1,temp__5804__auto___21490__$1,path,seq__20878__$1,temp__5804__auto__,map__20874,map__20874__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21498], 0));

goog.dom.insertSiblingAfter(new_link_21499,node_21497);


var G__21531 = cljs.core.next(seq__21182_21491__$1);
var G__21532 = null;
var G__21533 = (0);
var G__21534 = (0);
seq__21182_21440 = G__21531;
chunk__21186_21441 = G__21532;
count__21187_21442 = G__21533;
i__21188_21443 = G__21534;
continue;
} else {
var G__21535 = cljs.core.next(seq__21182_21491__$1);
var G__21536 = null;
var G__21537 = (0);
var G__21538 = (0);
seq__21182_21440 = G__21535;
chunk__21186_21441 = G__21536;
count__21187_21442 = G__21537;
i__21188_21443 = G__21538;
continue;
}
} else {
var G__21539 = cljs.core.next(seq__21182_21491__$1);
var G__21540 = null;
var G__21541 = (0);
var G__21542 = (0);
seq__21182_21440 = G__21539;
chunk__21186_21441 = G__21540;
count__21187_21442 = G__21541;
i__21188_21443 = G__21542;
continue;
}
}
} else {
}
}
break;
}


var G__21543 = cljs.core.next(seq__20878__$1);
var G__21544 = null;
var G__21545 = (0);
var G__21546 = (0);
seq__20878 = G__21543;
chunk__20880 = G__21544;
count__20881 = G__21545;
i__20882 = G__21546;
continue;
} else {
var G__21547 = cljs.core.next(seq__20878__$1);
var G__21548 = null;
var G__21549 = (0);
var G__21550 = (0);
seq__20878 = G__21547;
chunk__20880 = G__21548;
count__20881 = G__21549;
i__20882 = G__21550;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__21237 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21237) : success.call(null,G__21237));
}catch (e21236){var e = e21236;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__21238,success,fail){
var map__21239 = p__21238;
var map__21239__$1 = cljs.core.__destructure_map(map__21239);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21239__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__21241 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21241) : success.call(null,G__21241));
}catch (e21240){var e = e21240;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21242,done,error){
var map__21243 = p__21242;
var map__21243__$1 = cljs.core.__destructure_map(map__21243);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21243__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21244,done,error){
var map__21245 = p__21244;
var map__21245__$1 = cljs.core.__destructure_map(map__21245);
var msg = map__21245__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21245__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21245__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21245__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21246){
var map__21247 = p__21246;
var map__21247__$1 = cljs.core.__destructure_map(map__21247);
var src = map__21247__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21247__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21248 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21248) : done.call(null,G__21248));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21249){
var map__21250 = p__21249;
var map__21250__$1 = cljs.core.__destructure_map(map__21250);
var msg__$1 = map__21250__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21250__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e21251){var ex = e21251;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21252){
var map__21253 = p__21252;
var map__21253__$1 = cljs.core.__destructure_map(map__21253);
var env = map__21253__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21253__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21254){
var map__21255 = p__21254;
var map__21255__$1 = cljs.core.__destructure_map(map__21255);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21255__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21255__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__21256){
var map__21257 = p__21256;
var map__21257__$1 = cljs.core.__destructure_map(map__21257);
var svc = map__21257__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21257__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
