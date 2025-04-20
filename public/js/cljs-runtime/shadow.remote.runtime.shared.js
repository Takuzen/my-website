goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__14470){
var map__14475 = p__14470;
var map__14475__$1 = cljs.core.__destructure_map(map__14475);
var runtime = map__14475__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14475__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_14767 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_14767)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__14488 = runtime;
var G__14489 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_14767);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__14488,G__14489) : shadow.remote.runtime.shared.process.call(null,G__14488,G__14489));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__14497,res){
var map__14498 = p__14497;
var map__14498__$1 = cljs.core.__destructure_map(map__14498);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14498__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14498__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__14499 = res;
var G__14499__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14499,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__14499);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14499__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__14499__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__14506 = arguments.length;
switch (G__14506) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__14517,msg,handlers,timeout_after_ms){
var map__14519 = p__14517;
var map__14519__$1 = cljs.core.__destructure_map(map__14519);
var runtime = map__14519__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14519__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___14808 = arguments.length;
var i__5727__auto___14809 = (0);
while(true){
if((i__5727__auto___14809 < len__5726__auto___14808)){
args__5732__auto__.push((arguments[i__5727__auto___14809]));

var G__14811 = (i__5727__auto___14809 + (1));
i__5727__auto___14809 = G__14811;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__14536,ev,args){
var map__14537 = p__14536;
var map__14537__$1 = cljs.core.__destructure_map(map__14537);
var runtime = map__14537__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14537__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__14540 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14543 = null;
var count__14544 = (0);
var i__14545 = (0);
while(true){
if((i__14545 < count__14544)){
var ext = chunk__14543.cljs$core$IIndexed$_nth$arity$2(null,i__14545);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14827 = seq__14540;
var G__14828 = chunk__14543;
var G__14829 = count__14544;
var G__14830 = (i__14545 + (1));
seq__14540 = G__14827;
chunk__14543 = G__14828;
count__14544 = G__14829;
i__14545 = G__14830;
continue;
} else {
var G__14838 = seq__14540;
var G__14839 = chunk__14543;
var G__14840 = count__14544;
var G__14841 = (i__14545 + (1));
seq__14540 = G__14838;
chunk__14543 = G__14839;
count__14544 = G__14840;
i__14545 = G__14841;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14540);
if(temp__5804__auto__){
var seq__14540__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14540__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14540__$1);
var G__14850 = cljs.core.chunk_rest(seq__14540__$1);
var G__14851 = c__5525__auto__;
var G__14852 = cljs.core.count(c__5525__auto__);
var G__14853 = (0);
seq__14540 = G__14850;
chunk__14543 = G__14851;
count__14544 = G__14852;
i__14545 = G__14853;
continue;
} else {
var ext = cljs.core.first(seq__14540__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14857 = cljs.core.next(seq__14540__$1);
var G__14858 = null;
var G__14859 = (0);
var G__14860 = (0);
seq__14540 = G__14857;
chunk__14543 = G__14858;
count__14544 = G__14859;
i__14545 = G__14860;
continue;
} else {
var G__14861 = cljs.core.next(seq__14540__$1);
var G__14862 = null;
var G__14863 = (0);
var G__14864 = (0);
seq__14540 = G__14861;
chunk__14543 = G__14862;
count__14544 = G__14863;
i__14545 = G__14864;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq14528){
var G__14529 = cljs.core.first(seq14528);
var seq14528__$1 = cljs.core.next(seq14528);
var G__14530 = cljs.core.first(seq14528__$1);
var seq14528__$2 = cljs.core.next(seq14528__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14529,G__14530,seq14528__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__14596,p__14597){
var map__14598 = p__14596;
var map__14598__$1 = cljs.core.__destructure_map(map__14598);
var runtime = map__14598__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14598__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14599 = p__14597;
var map__14599__$1 = cljs.core.__destructure_map(map__14599);
var msg = map__14599__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14599__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__14600 = cljs.core.deref(state_ref);
var map__14600__$1 = cljs.core.__destructure_map(map__14600);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14600__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14600__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__14603,msg){
var map__14604 = p__14603;
var map__14604__$1 = cljs.core.__destructure_map(map__14604);
var runtime = map__14604__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14604__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__14611,key,p__14612){
var map__14613 = p__14611;
var map__14613__$1 = cljs.core.__destructure_map(map__14613);
var state = map__14613__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14613__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__14614 = p__14612;
var map__14614__$1 = cljs.core.__destructure_map(map__14614);
var spec = map__14614__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14614__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14614__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__14621,key,spec){
var map__14622 = p__14621;
var map__14622__$1 = cljs.core.__destructure_map(map__14622);
var runtime = map__14622__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14622__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5808__auto___14900 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5808__auto___14900 == null)){
} else {
var on_welcome_14901 = temp__5808__auto___14900;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_14901.cljs$core$IFn$_invoke$arity$0 ? on_welcome_14901.cljs$core$IFn$_invoke$arity$0() : on_welcome_14901.call(null));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__14625_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__14625_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__14626_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__14626_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__14627_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__14627_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__14628_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__14628_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__14629_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__14629_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__14636,key){
var map__14638 = p__14636;
var map__14638__$1 = cljs.core.__destructure_map(map__14638);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14638__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__14671,msg){
var map__14672 = p__14671;
var map__14672__$1 = cljs.core.__destructure_map(map__14672);
var runtime = map__14672__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14672__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__14690,p__14691){
var map__14693 = p__14690;
var map__14693__$1 = cljs.core.__destructure_map(map__14693);
var runtime = map__14693__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14693__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14694 = p__14691;
var map__14694__$1 = cljs.core.__destructure_map(map__14694);
var msg = map__14694__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14694__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14694__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__14708 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14710 = null;
var count__14711 = (0);
var i__14712 = (0);
while(true){
if((i__14712 < count__14711)){
var map__14729 = chunk__14710.cljs$core$IIndexed$_nth$arity$2(null,i__14712);
var map__14729__$1 = cljs.core.__destructure_map(map__14729);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14729__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__14951 = seq__14708;
var G__14952 = chunk__14710;
var G__14953 = count__14711;
var G__14954 = (i__14712 + (1));
seq__14708 = G__14951;
chunk__14710 = G__14952;
count__14711 = G__14953;
i__14712 = G__14954;
continue;
} else {
var G__14955 = seq__14708;
var G__14956 = chunk__14710;
var G__14957 = count__14711;
var G__14958 = (i__14712 + (1));
seq__14708 = G__14955;
chunk__14710 = G__14956;
count__14711 = G__14957;
i__14712 = G__14958;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14708);
if(temp__5804__auto__){
var seq__14708__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14708__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14708__$1);
var G__14959 = cljs.core.chunk_rest(seq__14708__$1);
var G__14960 = c__5525__auto__;
var G__14961 = cljs.core.count(c__5525__auto__);
var G__14962 = (0);
seq__14708 = G__14959;
chunk__14710 = G__14960;
count__14711 = G__14961;
i__14712 = G__14962;
continue;
} else {
var map__14730 = cljs.core.first(seq__14708__$1);
var map__14730__$1 = cljs.core.__destructure_map(map__14730);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14730__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__14964 = cljs.core.next(seq__14708__$1);
var G__14965 = null;
var G__14966 = (0);
var G__14967 = (0);
seq__14708 = G__14964;
chunk__14710 = G__14965;
count__14711 = G__14966;
i__14712 = G__14967;
continue;
} else {
var G__14969 = cljs.core.next(seq__14708__$1);
var G__14970 = null;
var G__14971 = (0);
var G__14972 = (0);
seq__14708 = G__14969;
chunk__14710 = G__14970;
count__14711 = G__14971;
i__14712 = G__14972;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
