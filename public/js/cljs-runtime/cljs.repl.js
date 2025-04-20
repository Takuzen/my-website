goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18923){
var map__18926 = p__18923;
var map__18926__$1 = cljs.core.__destructure_map(map__18926);
var m = map__18926__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18926__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18926__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18940_19488 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18941_19489 = null;
var count__18942_19490 = (0);
var i__18943_19491 = (0);
while(true){
if((i__18943_19491 < count__18942_19490)){
var f_19492 = chunk__18941_19489.cljs$core$IIndexed$_nth$arity$2(null,i__18943_19491);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19492], 0));


var G__19493 = seq__18940_19488;
var G__19494 = chunk__18941_19489;
var G__19495 = count__18942_19490;
var G__19496 = (i__18943_19491 + (1));
seq__18940_19488 = G__19493;
chunk__18941_19489 = G__19494;
count__18942_19490 = G__19495;
i__18943_19491 = G__19496;
continue;
} else {
var temp__5804__auto___19502 = cljs.core.seq(seq__18940_19488);
if(temp__5804__auto___19502){
var seq__18940_19503__$1 = temp__5804__auto___19502;
if(cljs.core.chunked_seq_QMARK_(seq__18940_19503__$1)){
var c__5525__auto___19504 = cljs.core.chunk_first(seq__18940_19503__$1);
var G__19505 = cljs.core.chunk_rest(seq__18940_19503__$1);
var G__19506 = c__5525__auto___19504;
var G__19507 = cljs.core.count(c__5525__auto___19504);
var G__19508 = (0);
seq__18940_19488 = G__19505;
chunk__18941_19489 = G__19506;
count__18942_19490 = G__19507;
i__18943_19491 = G__19508;
continue;
} else {
var f_19509 = cljs.core.first(seq__18940_19503__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19509], 0));


var G__19510 = cljs.core.next(seq__18940_19503__$1);
var G__19511 = null;
var G__19512 = (0);
var G__19513 = (0);
seq__18940_19488 = G__19510;
chunk__18941_19489 = G__19511;
count__18942_19490 = G__19512;
i__18943_19491 = G__19513;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19515 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19515], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19515)))?cljs.core.second(arglists_19515):arglists_19515)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19008_19518 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19009_19519 = null;
var count__19010_19520 = (0);
var i__19011_19521 = (0);
while(true){
if((i__19011_19521 < count__19010_19520)){
var vec__19063_19522 = chunk__19009_19519.cljs$core$IIndexed$_nth$arity$2(null,i__19011_19521);
var name_19523 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19063_19522,(0),null);
var map__19066_19524 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19063_19522,(1),null);
var map__19066_19525__$1 = cljs.core.__destructure_map(map__19066_19524);
var doc_19526 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19066_19525__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19527 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19066_19525__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19523], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19527], 0));

if(cljs.core.truth_(doc_19526)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19526], 0));
} else {
}


var G__19530 = seq__19008_19518;
var G__19531 = chunk__19009_19519;
var G__19532 = count__19010_19520;
var G__19533 = (i__19011_19521 + (1));
seq__19008_19518 = G__19530;
chunk__19009_19519 = G__19531;
count__19010_19520 = G__19532;
i__19011_19521 = G__19533;
continue;
} else {
var temp__5804__auto___19534 = cljs.core.seq(seq__19008_19518);
if(temp__5804__auto___19534){
var seq__19008_19535__$1 = temp__5804__auto___19534;
if(cljs.core.chunked_seq_QMARK_(seq__19008_19535__$1)){
var c__5525__auto___19536 = cljs.core.chunk_first(seq__19008_19535__$1);
var G__19537 = cljs.core.chunk_rest(seq__19008_19535__$1);
var G__19538 = c__5525__auto___19536;
var G__19539 = cljs.core.count(c__5525__auto___19536);
var G__19540 = (0);
seq__19008_19518 = G__19537;
chunk__19009_19519 = G__19538;
count__19010_19520 = G__19539;
i__19011_19521 = G__19540;
continue;
} else {
var vec__19089_19541 = cljs.core.first(seq__19008_19535__$1);
var name_19542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19089_19541,(0),null);
var map__19092_19543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19089_19541,(1),null);
var map__19092_19544__$1 = cljs.core.__destructure_map(map__19092_19543);
var doc_19545 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19092_19544__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19546 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19092_19544__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19542], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19546], 0));

if(cljs.core.truth_(doc_19545)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19545], 0));
} else {
}


var G__19547 = cljs.core.next(seq__19008_19535__$1);
var G__19548 = null;
var G__19549 = (0);
var G__19550 = (0);
seq__19008_19518 = G__19547;
chunk__19009_19519 = G__19548;
count__19010_19520 = G__19549;
i__19011_19521 = G__19550;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__19120 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19121 = null;
var count__19122 = (0);
var i__19123 = (0);
while(true){
if((i__19123 < count__19122)){
var role = chunk__19121.cljs$core$IIndexed$_nth$arity$2(null,i__19123);
var temp__5804__auto___19551__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19551__$1)){
var spec_19552 = temp__5804__auto___19551__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19552)], 0));
} else {
}


var G__19553 = seq__19120;
var G__19554 = chunk__19121;
var G__19555 = count__19122;
var G__19556 = (i__19123 + (1));
seq__19120 = G__19553;
chunk__19121 = G__19554;
count__19122 = G__19555;
i__19123 = G__19556;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__19120);
if(temp__5804__auto____$1){
var seq__19120__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__19120__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__19120__$1);
var G__19557 = cljs.core.chunk_rest(seq__19120__$1);
var G__19558 = c__5525__auto__;
var G__19559 = cljs.core.count(c__5525__auto__);
var G__19560 = (0);
seq__19120 = G__19557;
chunk__19121 = G__19558;
count__19122 = G__19559;
i__19123 = G__19560;
continue;
} else {
var role = cljs.core.first(seq__19120__$1);
var temp__5804__auto___19561__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19561__$2)){
var spec_19562 = temp__5804__auto___19561__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19562)], 0));
} else {
}


var G__19564 = cljs.core.next(seq__19120__$1);
var G__19565 = null;
var G__19566 = (0);
var G__19567 = (0);
seq__19120 = G__19564;
chunk__19121 = G__19565;
count__19122 = G__19566;
i__19123 = G__19567;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__19205 = datafied_throwable;
var map__19205__$1 = cljs.core.__destructure_map(map__19205);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19205__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19205__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19205__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19207 = cljs.core.last(via);
var map__19207__$1 = cljs.core.__destructure_map(map__19207);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19207__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19207__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19207__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19209 = data;
var map__19209__$1 = cljs.core.__destructure_map(map__19209);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19209__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19209__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19209__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19213 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__19213__$1 = cljs.core.__destructure_map(map__19213);
var top_data = map__19213__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19213__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__19240 = phase;
var G__19240__$1 = (((G__19240 instanceof cljs.core.Keyword))?G__19240.fqn:null);
switch (G__19240__$1) {
case "read-source":
var map__19244 = data;
var map__19244__$1 = cljs.core.__destructure_map(map__19244);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19244__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19244__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19256 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__19256__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19256,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19256);
var G__19256__$2 = (cljs.core.truth_((function (){var fexpr__19270 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19270.cljs$core$IFn$_invoke$arity$1 ? fexpr__19270.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19270.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19256__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19256__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19256__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19256__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19278 = top_data;
var G__19278__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19278,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19278);
var G__19278__$2 = (cljs.core.truth_((function (){var fexpr__19285 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19285.cljs$core$IFn$_invoke$arity$1 ? fexpr__19285.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19285.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19278__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19278__$1);
var G__19278__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19278__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19278__$2);
var G__19278__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19278__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19278__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19278__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19278__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19301 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19301,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19301,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19301,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19301,(3),null);
var G__19313 = top_data;
var G__19313__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19313,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19313);
var G__19313__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19313__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19313__$1);
var G__19313__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19313__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19313__$2);
var G__19313__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19313__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19313__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19313__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19313__$4;
}

break;
case "execution":
var vec__19327 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19327,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19327,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19327,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19327,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__19176_SHARP_){
var or__5002__auto__ = (p1__19176_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__19344 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19344.cljs$core$IFn$_invoke$arity$1 ? fexpr__19344.cljs$core$IFn$_invoke$arity$1(p1__19176_SHARP_) : fexpr__19344.call(null,p1__19176_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__19351 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19351__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19351,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19351);
var G__19351__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19351__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19351__$1);
var G__19351__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19351__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19351__$2);
var G__19351__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19351__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19351__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19351__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19351__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19240__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19393){
var map__19394 = p__19393;
var map__19394__$1 = cljs.core.__destructure_map(map__19394);
var triage_data = map__19394__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19394__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19394__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19394__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19394__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19394__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19394__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19394__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19394__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__19410 = phase;
var G__19410__$1 = (((G__19410 instanceof cljs.core.Keyword))?G__19410.fqn:null);
switch (G__19410__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__19415 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__19416 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19417 = loc;
var G__19418 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19431_19663 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19432_19664 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19433_19665 = true;
var _STAR_print_fn_STAR__temp_val__19434_19666 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19433_19665);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19434_19666);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19384_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19384_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19432_19664);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19431_19663);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19415,G__19416,G__19417,G__19418) : format.call(null,G__19415,G__19416,G__19417,G__19418));

break;
case "macroexpansion":
var G__19442 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__19443 = cause_type;
var G__19444 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19445 = loc;
var G__19446 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19442,G__19443,G__19444,G__19445,G__19446) : format.call(null,G__19442,G__19443,G__19444,G__19445,G__19446));

break;
case "compile-syntax-check":
var G__19447 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__19448 = cause_type;
var G__19449 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19450 = loc;
var G__19451 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19447,G__19448,G__19449,G__19450,G__19451) : format.call(null,G__19447,G__19448,G__19449,G__19450,G__19451));

break;
case "compilation":
var G__19455 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__19456 = cause_type;
var G__19457 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19458 = loc;
var G__19459 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19455,G__19456,G__19457,G__19458,G__19459) : format.call(null,G__19455,G__19456,G__19457,G__19458,G__19459));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__19460 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__19461 = symbol;
var G__19462 = loc;
var G__19463 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19464_19681 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19465_19682 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19466_19683 = true;
var _STAR_print_fn_STAR__temp_val__19467_19684 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19466_19683);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19467_19684);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19386_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19386_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19465_19682);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19464_19681);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19460,G__19461,G__19462,G__19463) : format.call(null,G__19460,G__19461,G__19462,G__19463));
} else {
var G__19473 = "Execution error%s at %s(%s).\n%s\n";
var G__19474 = cause_type;
var G__19475 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19476 = loc;
var G__19477 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19473,G__19474,G__19475,G__19476,G__19477) : format.call(null,G__19473,G__19474,G__19475,G__19476,G__19477));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19410__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
