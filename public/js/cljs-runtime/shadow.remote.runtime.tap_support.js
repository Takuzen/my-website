goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__20306,p__20307){
var map__20308 = p__20306;
var map__20308__$1 = cljs.core.__destructure_map(map__20308);
var svc = map__20308__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20308__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20308__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20308__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__20309 = p__20307;
var map__20309__$1 = cljs.core.__destructure_map(map__20309);
var msg = map__20309__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20309__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20309__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20309__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20309__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__20313,p__20314){
var map__20319 = p__20313;
var map__20319__$1 = cljs.core.__destructure_map(map__20319);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20319__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__20320 = p__20314;
var map__20320__$1 = cljs.core.__destructure_map(map__20320);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20320__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__20323,p__20324){
var map__20325 = p__20323;
var map__20325__$1 = cljs.core.__destructure_map(map__20325);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20325__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20325__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__20326 = p__20324;
var map__20326__$1 = cljs.core.__destructure_map(map__20326);
var msg = map__20326__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20326__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__20329,tid){
var map__20330 = p__20329;
var map__20330__$1 = cljs.core.__destructure_map(map__20330);
var svc = map__20330__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20330__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__20335 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__20336 = null;
var count__20337 = (0);
var i__20338 = (0);
while(true){
if((i__20338 < count__20337)){
var vec__20350 = chunk__20336.cljs$core$IIndexed$_nth$arity$2(null,i__20338);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20350,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20350,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__20390 = seq__20335;
var G__20391 = chunk__20336;
var G__20392 = count__20337;
var G__20393 = (i__20338 + (1));
seq__20335 = G__20390;
chunk__20336 = G__20391;
count__20337 = G__20392;
i__20338 = G__20393;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20335);
if(temp__5804__auto__){
var seq__20335__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20335__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20335__$1);
var G__20395 = cljs.core.chunk_rest(seq__20335__$1);
var G__20396 = c__5525__auto__;
var G__20397 = cljs.core.count(c__5525__auto__);
var G__20398 = (0);
seq__20335 = G__20395;
chunk__20336 = G__20396;
count__20337 = G__20397;
i__20338 = G__20398;
continue;
} else {
var vec__20357 = cljs.core.first(seq__20335__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20357,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20357,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__20400 = cljs.core.next(seq__20335__$1);
var G__20401 = null;
var G__20402 = (0);
var G__20403 = (0);
seq__20335 = G__20400;
chunk__20336 = G__20401;
count__20337 = G__20402;
i__20338 = G__20403;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__20331_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__20331_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__20332_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__20332_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__20333_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__20333_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__20334_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__20334_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__20366){
var map__20367 = p__20366;
var map__20367__$1 = cljs.core.__destructure_map(map__20367);
var svc = map__20367__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20367__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20367__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
