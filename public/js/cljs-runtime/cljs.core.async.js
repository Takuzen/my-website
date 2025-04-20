goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14465 = (function (f,blockable,meta14466){
this.f = f;
this.blockable = blockable;
this.meta14466 = meta14466;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14465.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14467,meta14466__$1){
var self__ = this;
var _14467__$1 = this;
return (new cljs.core.async.t_cljs$core$async14465(self__.f,self__.blockable,meta14466__$1));
}));

(cljs.core.async.t_cljs$core$async14465.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14467){
var self__ = this;
var _14467__$1 = this;
return self__.meta14466;
}));

(cljs.core.async.t_cljs$core$async14465.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14465.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14465.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14465.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14465.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14466","meta14466",-379214956,null)], null);
}));

(cljs.core.async.t_cljs$core$async14465.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14465.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14465");

(cljs.core.async.t_cljs$core$async14465.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14465");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14465.
 */
cljs.core.async.__GT_t_cljs$core$async14465 = (function cljs$core$async$__GT_t_cljs$core$async14465(f,blockable,meta14466){
return (new cljs.core.async.t_cljs$core$async14465(f,blockable,meta14466));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14460 = arguments.length;
switch (G__14460) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async14465(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__14490 = arguments.length;
switch (G__14490) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14505 = arguments.length;
switch (G__14505) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__14510 = arguments.length;
switch (G__14510) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_17715 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17715) : fn1.call(null,val_17715));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17715) : fn1.call(null,val_17715));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__14525 = arguments.length;
switch (G__14525) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___17727 = n;
var x_17728 = (0);
while(true){
if((x_17728 < n__5593__auto___17727)){
(a[x_17728] = x_17728);

var G__17729 = (x_17728 + (1));
x_17728 = G__17729;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14533 = (function (flag,meta14534){
this.flag = flag;
this.meta14534 = meta14534;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14533.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14535,meta14534__$1){
var self__ = this;
var _14535__$1 = this;
return (new cljs.core.async.t_cljs$core$async14533(self__.flag,meta14534__$1));
}));

(cljs.core.async.t_cljs$core$async14533.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14535){
var self__ = this;
var _14535__$1 = this;
return self__.meta14534;
}));

(cljs.core.async.t_cljs$core$async14533.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14533.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14533.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14533.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14533.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14534","meta14534",-340587295,null)], null);
}));

(cljs.core.async.t_cljs$core$async14533.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14533.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14533");

(cljs.core.async.t_cljs$core$async14533.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14533");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14533.
 */
cljs.core.async.__GT_t_cljs$core$async14533 = (function cljs$core$async$__GT_t_cljs$core$async14533(flag,meta14534){
return (new cljs.core.async.t_cljs$core$async14533(flag,meta14534));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async14533(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14552 = (function (flag,cb,meta14553){
this.flag = flag;
this.cb = cb;
this.meta14553 = meta14553;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14552.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14554,meta14553__$1){
var self__ = this;
var _14554__$1 = this;
return (new cljs.core.async.t_cljs$core$async14552(self__.flag,self__.cb,meta14553__$1));
}));

(cljs.core.async.t_cljs$core$async14552.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14554){
var self__ = this;
var _14554__$1 = this;
return self__.meta14553;
}));

(cljs.core.async.t_cljs$core$async14552.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14552.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14552.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14552.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14552.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14553","meta14553",-355670504,null)], null);
}));

(cljs.core.async.t_cljs$core$async14552.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14552.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14552");

(cljs.core.async.t_cljs$core$async14552.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14552");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14552.
 */
cljs.core.async.__GT_t_cljs$core$async14552 = (function cljs$core$async$__GT_t_cljs$core$async14552(flag,cb,meta14553){
return (new cljs.core.async.t_cljs$core$async14552(flag,cb,meta14553));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async14552(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14571_SHARP_){
var G__14587 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14571_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14587) : fret.call(null,G__14587));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14572_SHARP_){
var G__14588 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14572_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14588) : fret.call(null,G__14588));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17732 = (i + (1));
i = G__17732;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17734 = arguments.length;
var i__5727__auto___17735 = (0);
while(true){
if((i__5727__auto___17735 < len__5726__auto___17734)){
args__5732__auto__.push((arguments[i__5727__auto___17735]));

var G__17736 = (i__5727__auto___17735 + (1));
i__5727__auto___17735 = G__17736;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14594){
var map__14595 = p__14594;
var map__14595__$1 = cljs.core.__destructure_map(map__14595);
var opts = map__14595__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14592){
var G__14593 = cljs.core.first(seq14592);
var seq14592__$1 = cljs.core.next(seq14592);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14593,seq14592__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__14602 = arguments.length;
switch (G__14602) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14363__auto___17748 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14364__auto__ = (function (){var switch__14104__auto__ = (function (state_14705){
var state_val_14714 = (state_14705[(1)]);
if((state_val_14714 === (7))){
var inst_14687 = (state_14705[(2)]);
var state_14705__$1 = state_14705;
var statearr_14754_17750 = state_14705__$1;
(statearr_14754_17750[(2)] = inst_14687);

(statearr_14754_17750[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14714 === (1))){
var state_14705__$1 = state_14705;
var statearr_14768_17751 = state_14705__$1;
(statearr_14768_17751[(2)] = null);

(statearr_14768_17751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14714 === (4))){
var inst_14644 = (state_14705[(7)]);
var inst_14644__$1 = (state_14705[(2)]);
var inst_14661 = (inst_14644__$1 == null);
var state_14705__$1 = (function (){var statearr_14771 = state_14705;
(statearr_14771[(7)] = inst_14644__$1);

return statearr_14771;
})();
if(cljs.core.truth_(inst_14661)){
var statearr_14772_17753 = state_14705__$1;
(statearr_14772_17753[(1)] = (5));

} else {
var statearr_14773_17754 = state_14705__$1;
(statearr_14773_17754[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14714 === (13))){
var state_14705__$1 = state_14705;
var statearr_14774_17755 = state_14705__$1;
(statearr_14774_17755[(2)] = null);

(statearr_14774_17755[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14714 === (6))){
var inst_14644 = (state_14705[(7)]);
var state_14705__$1 = state_14705;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14705__$1,(11),to,inst_14644);
} else {
if((state_val_14714 === (3))){
var inst_14699 = (state_14705[(2)]);
var state_14705__$1 = state_14705;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14705__$1,inst_14699);
} else {
if((state_val_14714 === (12))){
var state_14705__$1 = state_14705;
var statearr_14786_17756 = state_14705__$1;
(statearr_14786_17756[(2)] = null);

(statearr_14786_17756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14714 === (2))){
var state_14705__$1 = state_14705;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14705__$1,(4),from);
} else {
if((state_val_14714 === (11))){
var inst_14679 = (state_14705[(2)]);
var state_14705__$1 = state_14705;
if(cljs.core.truth_(inst_14679)){
var statearr_14797_17768 = state_14705__$1;
(statearr_14797_17768[(1)] = (12));

} else {
var statearr_14799_17769 = state_14705__$1;
(statearr_14799_17769[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14714 === (9))){
var state_14705__$1 = state_14705;
var statearr_14805_17770 = state_14705__$1;
(statearr_14805_17770[(2)] = null);

(statearr_14805_17770[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14714 === (5))){
var state_14705__$1 = state_14705;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14806_17771 = state_14705__$1;
(statearr_14806_17771[(1)] = (8));

} else {
var statearr_14807_17772 = state_14705__$1;
(statearr_14807_17772[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14714 === (14))){
var inst_14685 = (state_14705[(2)]);
var state_14705__$1 = state_14705;
var statearr_14810_17773 = state_14705__$1;
(statearr_14810_17773[(2)] = inst_14685);

(statearr_14810_17773[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14714 === (10))){
var inst_14676 = (state_14705[(2)]);
var state_14705__$1 = state_14705;
var statearr_14812_17774 = state_14705__$1;
(statearr_14812_17774[(2)] = inst_14676);

(statearr_14812_17774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14714 === (8))){
var inst_14673 = cljs.core.async.close_BANG_(to);
var state_14705__$1 = state_14705;
var statearr_14813_17775 = state_14705__$1;
(statearr_14813_17775[(2)] = inst_14673);

(statearr_14813_17775[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14105__auto__ = null;
var cljs$core$async$state_machine__14105__auto____0 = (function (){
var statearr_14823 = [null,null,null,null,null,null,null,null];
(statearr_14823[(0)] = cljs$core$async$state_machine__14105__auto__);

(statearr_14823[(1)] = (1));

return statearr_14823;
});
var cljs$core$async$state_machine__14105__auto____1 = (function (state_14705){
while(true){
var ret_value__14106__auto__ = (function (){try{while(true){
var result__14108__auto__ = switch__14104__auto__(state_14705);
if(cljs.core.keyword_identical_QMARK_(result__14108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14108__auto__;
}
break;
}
}catch (e14832){var ex__14109__auto__ = e14832;
var statearr_14837_17779 = state_14705;
(statearr_14837_17779[(2)] = ex__14109__auto__);


if(cljs.core.seq((state_14705[(4)]))){
var statearr_14843_17780 = state_14705;
(statearr_14843_17780[(1)] = cljs.core.first((state_14705[(4)])));

} else {
throw ex__14109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17781 = state_14705;
state_14705 = G__17781;
continue;
} else {
return ret_value__14106__auto__;
}
break;
}
});
cljs$core$async$state_machine__14105__auto__ = function(state_14705){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14105__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14105__auto____1.call(this,state_14705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14105__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14105__auto____0;
cljs$core$async$state_machine__14105__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14105__auto____1;
return cljs$core$async$state_machine__14105__auto__;
})()
})();
var state__14365__auto__ = (function (){var statearr_14854 = f__14364__auto__();
(statearr_14854[(6)] = c__14363__auto___17748);

return statearr_14854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14365__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__14874){
var vec__14875 = p__14874;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14875,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14875,(1),null);
var job = vec__14875;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14363__auto___17786 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14364__auto__ = (function (){var switch__14104__auto__ = (function (state_14885){
var state_val_14886 = (state_14885[(1)]);
if((state_val_14886 === (1))){
var state_14885__$1 = state_14885;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14885__$1,(2),res,v);
} else {
if((state_val_14886 === (2))){
var inst_14882 = (state_14885[(2)]);
var inst_14883 = cljs.core.async.close_BANG_(res);
var state_14885__$1 = (function (){var statearr_14893 = state_14885;
(statearr_14893[(7)] = inst_14882);

return statearr_14893;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14885__$1,inst_14883);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14105__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14105__auto____0 = (function (){
var statearr_14895 = [null,null,null,null,null,null,null,null];
(statearr_14895[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14105__auto__);

(statearr_14895[(1)] = (1));

return statearr_14895;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14105__auto____1 = (function (state_14885){
while(true){
var ret_value__14106__auto__ = (function (){try{while(true){
var result__14108__auto__ = switch__14104__auto__(state_14885);
if(cljs.core.keyword_identical_QMARK_(result__14108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14108__auto__;
}
break;
}
}catch (e14896){var ex__14109__auto__ = e14896;
var statearr_14897_17797 = state_14885;
(statearr_14897_17797[(2)] = ex__14109__auto__);


if(cljs.core.seq((state_14885[(4)]))){
var statearr_14898_17801 = state_14885;
(statearr_14898_17801[(1)] = cljs.core.first((state_14885[(4)])));

} else {
throw ex__14109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17802 = state_14885;
state_14885 = G__17802;
continue;
} else {
return ret_value__14106__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14105__auto__ = function(state_14885){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14105__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14105__auto____1.call(this,state_14885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14105__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14105__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14105__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14105__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14105__auto__;
})()
})();
var state__14365__auto__ = (function (){var statearr_14902 = f__14364__auto__();
(statearr_14902[(6)] = c__14363__auto___17786);

return statearr_14902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14365__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__14903){
var vec__14904 = p__14903;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14904,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14904,(1),null);
var job = vec__14904;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___17812 = n;
var __17813 = (0);
while(true){
if((__17813 < n__5593__auto___17812)){
var G__14915_17814 = type;
var G__14915_17815__$1 = (((G__14915_17814 instanceof cljs.core.Keyword))?G__14915_17814.fqn:null);
switch (G__14915_17815__$1) {
case "compute":
var c__14363__auto___17817 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17813,c__14363__auto___17817,G__14915_17814,G__14915_17815__$1,n__5593__auto___17812,jobs,results,process__$1,async){
return (function (){
var f__14364__auto__ = (function (){var switch__14104__auto__ = ((function (__17813,c__14363__auto___17817,G__14915_17814,G__14915_17815__$1,n__5593__auto___17812,jobs,results,process__$1,async){
return (function (state_14932){
var state_val_14935 = (state_14932[(1)]);
if((state_val_14935 === (1))){
var state_14932__$1 = state_14932;
var statearr_14939_17826 = state_14932__$1;
(statearr_14939_17826[(2)] = null);

(statearr_14939_17826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14935 === (2))){
var state_14932__$1 = state_14932;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14932__$1,(4),jobs);
} else {
if((state_val_14935 === (3))){
var inst_14930 = (state_14932[(2)]);
var state_14932__$1 = state_14932;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14932__$1,inst_14930);
} else {
if((state_val_14935 === (4))){
var inst_14922 = (state_14932[(2)]);
var inst_14923 = process__$1(inst_14922);
var state_14932__$1 = state_14932;
if(cljs.core.truth_(inst_14923)){
var statearr_14944_17836 = state_14932__$1;
(statearr_14944_17836[(1)] = (5));

} else {
var statearr_14945_17837 = state_14932__$1;
(statearr_14945_17837[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14935 === (5))){
var state_14932__$1 = state_14932;
var statearr_14946_17838 = state_14932__$1;
(statearr_14946_17838[(2)] = null);

(statearr_14946_17838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14935 === (6))){
var state_14932__$1 = state_14932;
var statearr_14947_17839 = state_14932__$1;
(statearr_14947_17839[(2)] = null);

(statearr_14947_17839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14935 === (7))){
var inst_14928 = (state_14932[(2)]);
var state_14932__$1 = state_14932;
var statearr_14948_17843 = state_14932__$1;
(statearr_14948_17843[(2)] = inst_14928);

(statearr_14948_17843[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17813,c__14363__auto___17817,G__14915_17814,G__14915_17815__$1,n__5593__auto___17812,jobs,results,process__$1,async))
;
return ((function (__17813,switch__14104__auto__,c__14363__auto___17817,G__14915_17814,G__14915_17815__$1,n__5593__auto___17812,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14105__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14105__auto____0 = (function (){
var statearr_14963 = [null,null,null,null,null,null,null];
(statearr_14963[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14105__auto__);

(statearr_14963[(1)] = (1));

return statearr_14963;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14105__auto____1 = (function (state_14932){
while(true){
var ret_value__14106__auto__ = (function (){try{while(true){
var result__14108__auto__ = switch__14104__auto__(state_14932);
if(cljs.core.keyword_identical_QMARK_(result__14108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14108__auto__;
}
break;
}
}catch (e14973){var ex__14109__auto__ = e14973;
var statearr_14974_17851 = state_14932;
(statearr_14974_17851[(2)] = ex__14109__auto__);


if(cljs.core.seq((state_14932[(4)]))){
var statearr_14977_17855 = state_14932;
(statearr_14977_17855[(1)] = cljs.core.first((state_14932[(4)])));

} else {
throw ex__14109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17860 = state_14932;
state_14932 = G__17860;
continue;
} else {
return ret_value__14106__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14105__auto__ = function(state_14932){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14105__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14105__auto____1.call(this,state_14932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14105__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14105__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14105__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14105__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14105__auto__;
})()
;})(__17813,switch__14104__auto__,c__14363__auto___17817,G__14915_17814,G__14915_17815__$1,n__5593__auto___17812,jobs,results,process__$1,async))
})();
var state__14365__auto__ = (function (){var statearr_14982 = f__14364__auto__();
(statearr_14982[(6)] = c__14363__auto___17817);

return statearr_14982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14365__auto__);
});})(__17813,c__14363__auto___17817,G__14915_17814,G__14915_17815__$1,n__5593__auto___17812,jobs,results,process__$1,async))
);


break;
case "async":
var c__14363__auto___17861 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17813,c__14363__auto___17861,G__14915_17814,G__14915_17815__$1,n__5593__auto___17812,jobs,results,process__$1,async){
return (function (){
var f__14364__auto__ = (function (){var switch__14104__auto__ = ((function (__17813,c__14363__auto___17861,G__14915_17814,G__14915_17815__$1,n__5593__auto___17812,jobs,results,process__$1,async){
return (function (state_14996){
var state_val_14997 = (state_14996[(1)]);
if((state_val_14997 === (1))){
var state_14996__$1 = state_14996;
var statearr_14999_17862 = state_14996__$1;
(statearr_14999_17862[(2)] = null);

(statearr_14999_17862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14997 === (2))){
var state_14996__$1 = state_14996;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14996__$1,(4),jobs);
} else {
if((state_val_14997 === (3))){
var inst_14994 = (state_14996[(2)]);
var state_14996__$1 = state_14996;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14996__$1,inst_14994);
} else {
if((state_val_14997 === (4))){
var inst_14985 = (state_14996[(2)]);
var inst_14987 = async(inst_14985);
var state_14996__$1 = state_14996;
if(cljs.core.truth_(inst_14987)){
var statearr_15004_17865 = state_14996__$1;
(statearr_15004_17865[(1)] = (5));

} else {
var statearr_15005_17866 = state_14996__$1;
(statearr_15005_17866[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14997 === (5))){
var state_14996__$1 = state_14996;
var statearr_15008_17867 = state_14996__$1;
(statearr_15008_17867[(2)] = null);

(statearr_15008_17867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14997 === (6))){
var state_14996__$1 = state_14996;
var statearr_15010_17868 = state_14996__$1;
(statearr_15010_17868[(2)] = null);

(statearr_15010_17868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14997 === (7))){
var inst_14992 = (state_14996[(2)]);
var state_14996__$1 = state_14996;
var statearr_15011_17869 = state_14996__$1;
(statearr_15011_17869[(2)] = inst_14992);

(statearr_15011_17869[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17813,c__14363__auto___17861,G__14915_17814,G__14915_17815__$1,n__5593__auto___17812,jobs,results,process__$1,async))
;
return ((function (__17813,switch__14104__auto__,c__14363__auto___17861,G__14915_17814,G__14915_17815__$1,n__5593__auto___17812,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14105__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14105__auto____0 = (function (){
var statearr_15015 = [null,null,null,null,null,null,null];
(statearr_15015[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14105__auto__);

(statearr_15015[(1)] = (1));

return statearr_15015;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14105__auto____1 = (function (state_14996){
while(true){
var ret_value__14106__auto__ = (function (){try{while(true){
var result__14108__auto__ = switch__14104__auto__(state_14996);
if(cljs.core.keyword_identical_QMARK_(result__14108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14108__auto__;
}
break;
}
}catch (e15016){var ex__14109__auto__ = e15016;
var statearr_15017_17876 = state_14996;
(statearr_15017_17876[(2)] = ex__14109__auto__);


if(cljs.core.seq((state_14996[(4)]))){
var statearr_15019_17877 = state_14996;
(statearr_15019_17877[(1)] = cljs.core.first((state_14996[(4)])));

} else {
throw ex__14109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17878 = state_14996;
state_14996 = G__17878;
continue;
} else {
return ret_value__14106__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14105__auto__ = function(state_14996){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14105__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14105__auto____1.call(this,state_14996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14105__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14105__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14105__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14105__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14105__auto__;
})()
;})(__17813,switch__14104__auto__,c__14363__auto___17861,G__14915_17814,G__14915_17815__$1,n__5593__auto___17812,jobs,results,process__$1,async))
})();
var state__14365__auto__ = (function (){var statearr_15021 = f__14364__auto__();
(statearr_15021[(6)] = c__14363__auto___17861);

return statearr_15021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14365__auto__);
});})(__17813,c__14363__auto___17861,G__14915_17814,G__14915_17815__$1,n__5593__auto___17812,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14915_17815__$1)].join('')));

}

var G__17879 = (__17813 + (1));
__17813 = G__17879;
continue;
} else {
}
break;
}

var c__14363__auto___17880 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14364__auto__ = (function (){var switch__14104__auto__ = (function (state_15067){
var state_val_15068 = (state_15067[(1)]);
if((state_val_15068 === (7))){
var inst_15063 = (state_15067[(2)]);
var state_15067__$1 = state_15067;
var statearr_15077_17881 = state_15067__$1;
(statearr_15077_17881[(2)] = inst_15063);

(statearr_15077_17881[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15068 === (1))){
var state_15067__$1 = state_15067;
var statearr_15086_17882 = state_15067__$1;
(statearr_15086_17882[(2)] = null);

(statearr_15086_17882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15068 === (4))){
var inst_15033 = (state_15067[(7)]);
var inst_15033__$1 = (state_15067[(2)]);
var inst_15034 = (inst_15033__$1 == null);
var state_15067__$1 = (function (){var statearr_15088 = state_15067;
(statearr_15088[(7)] = inst_15033__$1);

return statearr_15088;
})();
if(cljs.core.truth_(inst_15034)){
var statearr_15089_17883 = state_15067__$1;
(statearr_15089_17883[(1)] = (5));

} else {
var statearr_15093_17884 = state_15067__$1;
(statearr_15093_17884[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15068 === (6))){
var inst_15040 = (state_15067[(8)]);
var inst_15033 = (state_15067[(7)]);
var inst_15040__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15047 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15049 = [inst_15033,inst_15040__$1];
var inst_15050 = (new cljs.core.PersistentVector(null,2,(5),inst_15047,inst_15049,null));
var state_15067__$1 = (function (){var statearr_15098 = state_15067;
(statearr_15098[(8)] = inst_15040__$1);

return statearr_15098;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15067__$1,(8),jobs,inst_15050);
} else {
if((state_val_15068 === (3))){
var inst_15065 = (state_15067[(2)]);
var state_15067__$1 = state_15067;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15067__$1,inst_15065);
} else {
if((state_val_15068 === (2))){
var state_15067__$1 = state_15067;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15067__$1,(4),from);
} else {
if((state_val_15068 === (9))){
var inst_15059 = (state_15067[(2)]);
var state_15067__$1 = (function (){var statearr_15101 = state_15067;
(statearr_15101[(9)] = inst_15059);

return statearr_15101;
})();
var statearr_15104_17885 = state_15067__$1;
(statearr_15104_17885[(2)] = null);

(statearr_15104_17885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15068 === (5))){
var inst_15038 = cljs.core.async.close_BANG_(jobs);
var state_15067__$1 = state_15067;
var statearr_15106_17886 = state_15067__$1;
(statearr_15106_17886[(2)] = inst_15038);

(statearr_15106_17886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15068 === (8))){
var inst_15040 = (state_15067[(8)]);
var inst_15052 = (state_15067[(2)]);
var state_15067__$1 = (function (){var statearr_15108 = state_15067;
(statearr_15108[(10)] = inst_15052);

return statearr_15108;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15067__$1,(9),results,inst_15040);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14105__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14105__auto____0 = (function (){
var statearr_15110 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15110[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14105__auto__);

(statearr_15110[(1)] = (1));

return statearr_15110;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14105__auto____1 = (function (state_15067){
while(true){
var ret_value__14106__auto__ = (function (){try{while(true){
var result__14108__auto__ = switch__14104__auto__(state_15067);
if(cljs.core.keyword_identical_QMARK_(result__14108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14108__auto__;
}
break;
}
}catch (e15115){var ex__14109__auto__ = e15115;
var statearr_15117_17893 = state_15067;
(statearr_15117_17893[(2)] = ex__14109__auto__);


if(cljs.core.seq((state_15067[(4)]))){
var statearr_15119_17894 = state_15067;
(statearr_15119_17894[(1)] = cljs.core.first((state_15067[(4)])));

} else {
throw ex__14109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17895 = state_15067;
state_15067 = G__17895;
continue;
} else {
return ret_value__14106__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14105__auto__ = function(state_15067){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14105__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14105__auto____1.call(this,state_15067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14105__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14105__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14105__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14105__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14105__auto__;
})()
})();
var state__14365__auto__ = (function (){var statearr_15123 = f__14364__auto__();
(statearr_15123[(6)] = c__14363__auto___17880);

return statearr_15123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14365__auto__);
}));


var c__14363__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14364__auto__ = (function (){var switch__14104__auto__ = (function (state_15166){
var state_val_15167 = (state_15166[(1)]);
if((state_val_15167 === (7))){
var inst_15162 = (state_15166[(2)]);
var state_15166__$1 = state_15166;
var statearr_15169_17896 = state_15166__$1;
(statearr_15169_17896[(2)] = inst_15162);

(statearr_15169_17896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15167 === (20))){
var state_15166__$1 = state_15166;
var statearr_15170_17897 = state_15166__$1;
(statearr_15170_17897[(2)] = null);

(statearr_15170_17897[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15167 === (1))){
var state_15166__$1 = state_15166;
var statearr_15171_17898 = state_15166__$1;
(statearr_15171_17898[(2)] = null);

(statearr_15171_17898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15167 === (4))){
var inst_15126 = (state_15166[(7)]);
var inst_15126__$1 = (state_15166[(2)]);
var inst_15128 = (inst_15126__$1 == null);
var state_15166__$1 = (function (){var statearr_15172 = state_15166;
(statearr_15172[(7)] = inst_15126__$1);

return statearr_15172;
})();
if(cljs.core.truth_(inst_15128)){
var statearr_15173_17901 = state_15166__$1;
(statearr_15173_17901[(1)] = (5));

} else {
var statearr_15175_17902 = state_15166__$1;
(statearr_15175_17902[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15167 === (15))){
var inst_15143 = (state_15166[(8)]);
var state_15166__$1 = state_15166;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15166__$1,(18),to,inst_15143);
} else {
if((state_val_15167 === (21))){
var inst_15157 = (state_15166[(2)]);
var state_15166__$1 = state_15166;
var statearr_15180_17904 = state_15166__$1;
(statearr_15180_17904[(2)] = inst_15157);

(statearr_15180_17904[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15167 === (13))){
var inst_15159 = (state_15166[(2)]);
var state_15166__$1 = (function (){var statearr_15181 = state_15166;
(statearr_15181[(9)] = inst_15159);

return statearr_15181;
})();
var statearr_15182_17905 = state_15166__$1;
(statearr_15182_17905[(2)] = null);

(statearr_15182_17905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15167 === (6))){
var inst_15126 = (state_15166[(7)]);
var state_15166__$1 = state_15166;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15166__$1,(11),inst_15126);
} else {
if((state_val_15167 === (17))){
var inst_15152 = (state_15166[(2)]);
var state_15166__$1 = state_15166;
if(cljs.core.truth_(inst_15152)){
var statearr_15187_17907 = state_15166__$1;
(statearr_15187_17907[(1)] = (19));

} else {
var statearr_15188_17909 = state_15166__$1;
(statearr_15188_17909[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15167 === (3))){
var inst_15164 = (state_15166[(2)]);
var state_15166__$1 = state_15166;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15166__$1,inst_15164);
} else {
if((state_val_15167 === (12))){
var inst_15138 = (state_15166[(10)]);
var state_15166__$1 = state_15166;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15166__$1,(14),inst_15138);
} else {
if((state_val_15167 === (2))){
var state_15166__$1 = state_15166;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15166__$1,(4),results);
} else {
if((state_val_15167 === (19))){
var state_15166__$1 = state_15166;
var statearr_15201_17923 = state_15166__$1;
(statearr_15201_17923[(2)] = null);

(statearr_15201_17923[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15167 === (11))){
var inst_15138 = (state_15166[(2)]);
var state_15166__$1 = (function (){var statearr_15205 = state_15166;
(statearr_15205[(10)] = inst_15138);

return statearr_15205;
})();
var statearr_15207_17924 = state_15166__$1;
(statearr_15207_17924[(2)] = null);

(statearr_15207_17924[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15167 === (9))){
var state_15166__$1 = state_15166;
var statearr_15216_17928 = state_15166__$1;
(statearr_15216_17928[(2)] = null);

(statearr_15216_17928[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15167 === (5))){
var state_15166__$1 = state_15166;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15217_17930 = state_15166__$1;
(statearr_15217_17930[(1)] = (8));

} else {
var statearr_15218_17931 = state_15166__$1;
(statearr_15218_17931[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15167 === (14))){
var inst_15146 = (state_15166[(11)]);
var inst_15143 = (state_15166[(8)]);
var inst_15143__$1 = (state_15166[(2)]);
var inst_15145 = (inst_15143__$1 == null);
var inst_15146__$1 = cljs.core.not(inst_15145);
var state_15166__$1 = (function (){var statearr_15226 = state_15166;
(statearr_15226[(11)] = inst_15146__$1);

(statearr_15226[(8)] = inst_15143__$1);

return statearr_15226;
})();
if(inst_15146__$1){
var statearr_15231_17933 = state_15166__$1;
(statearr_15231_17933[(1)] = (15));

} else {
var statearr_15232_17934 = state_15166__$1;
(statearr_15232_17934[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15167 === (16))){
var inst_15146 = (state_15166[(11)]);
var state_15166__$1 = state_15166;
var statearr_15237_17938 = state_15166__$1;
(statearr_15237_17938[(2)] = inst_15146);

(statearr_15237_17938[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15167 === (10))){
var inst_15135 = (state_15166[(2)]);
var state_15166__$1 = state_15166;
var statearr_15241_17940 = state_15166__$1;
(statearr_15241_17940[(2)] = inst_15135);

(statearr_15241_17940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15167 === (18))){
var inst_15149 = (state_15166[(2)]);
var state_15166__$1 = state_15166;
var statearr_15245_17941 = state_15166__$1;
(statearr_15245_17941[(2)] = inst_15149);

(statearr_15245_17941[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15167 === (8))){
var inst_15132 = cljs.core.async.close_BANG_(to);
var state_15166__$1 = state_15166;
var statearr_15249_17942 = state_15166__$1;
(statearr_15249_17942[(2)] = inst_15132);

(statearr_15249_17942[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14105__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14105__auto____0 = (function (){
var statearr_15251 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15251[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14105__auto__);

(statearr_15251[(1)] = (1));

return statearr_15251;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14105__auto____1 = (function (state_15166){
while(true){
var ret_value__14106__auto__ = (function (){try{while(true){
var result__14108__auto__ = switch__14104__auto__(state_15166);
if(cljs.core.keyword_identical_QMARK_(result__14108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14108__auto__;
}
break;
}
}catch (e15252){var ex__14109__auto__ = e15252;
var statearr_15253_17943 = state_15166;
(statearr_15253_17943[(2)] = ex__14109__auto__);


if(cljs.core.seq((state_15166[(4)]))){
var statearr_15258_17944 = state_15166;
(statearr_15258_17944[(1)] = cljs.core.first((state_15166[(4)])));

} else {
throw ex__14109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17945 = state_15166;
state_15166 = G__17945;
continue;
} else {
return ret_value__14106__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14105__auto__ = function(state_15166){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14105__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14105__auto____1.call(this,state_15166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14105__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14105__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14105__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14105__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14105__auto__;
})()
})();
var state__14365__auto__ = (function (){var statearr_15259 = f__14364__auto__();
(statearr_15259[(6)] = c__14363__auto__);

return statearr_15259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14365__auto__);
}));

return c__14363__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__15274 = arguments.length;
switch (G__15274) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__15286 = arguments.length;
switch (G__15286) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__15295 = arguments.length;
switch (G__15295) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14363__auto___17965 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14364__auto__ = (function (){var switch__14104__auto__ = (function (state_15327){
var state_val_15328 = (state_15327[(1)]);
if((state_val_15328 === (7))){
var inst_15323 = (state_15327[(2)]);
var state_15327__$1 = state_15327;
var statearr_15336_17966 = state_15327__$1;
(statearr_15336_17966[(2)] = inst_15323);

(statearr_15336_17966[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15328 === (1))){
var state_15327__$1 = state_15327;
var statearr_15337_17967 = state_15327__$1;
(statearr_15337_17967[(2)] = null);

(statearr_15337_17967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15328 === (4))){
var inst_15303 = (state_15327[(7)]);
var inst_15303__$1 = (state_15327[(2)]);
var inst_15304 = (inst_15303__$1 == null);
var state_15327__$1 = (function (){var statearr_15338 = state_15327;
(statearr_15338[(7)] = inst_15303__$1);

return statearr_15338;
})();
if(cljs.core.truth_(inst_15304)){
var statearr_15339_17968 = state_15327__$1;
(statearr_15339_17968[(1)] = (5));

} else {
var statearr_15340_17969 = state_15327__$1;
(statearr_15340_17969[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15328 === (13))){
var state_15327__$1 = state_15327;
var statearr_15342_17970 = state_15327__$1;
(statearr_15342_17970[(2)] = null);

(statearr_15342_17970[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15328 === (6))){
var inst_15303 = (state_15327[(7)]);
var inst_15310 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15303) : p.call(null,inst_15303));
var state_15327__$1 = state_15327;
if(cljs.core.truth_(inst_15310)){
var statearr_15343_17983 = state_15327__$1;
(statearr_15343_17983[(1)] = (9));

} else {
var statearr_15344_17984 = state_15327__$1;
(statearr_15344_17984[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15328 === (3))){
var inst_15325 = (state_15327[(2)]);
var state_15327__$1 = state_15327;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15327__$1,inst_15325);
} else {
if((state_val_15328 === (12))){
var state_15327__$1 = state_15327;
var statearr_15347_17986 = state_15327__$1;
(statearr_15347_17986[(2)] = null);

(statearr_15347_17986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15328 === (2))){
var state_15327__$1 = state_15327;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15327__$1,(4),ch);
} else {
if((state_val_15328 === (11))){
var inst_15303 = (state_15327[(7)]);
var inst_15314 = (state_15327[(2)]);
var state_15327__$1 = state_15327;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15327__$1,(8),inst_15314,inst_15303);
} else {
if((state_val_15328 === (9))){
var state_15327__$1 = state_15327;
var statearr_15349_17987 = state_15327__$1;
(statearr_15349_17987[(2)] = tc);

(statearr_15349_17987[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15328 === (5))){
var inst_15306 = cljs.core.async.close_BANG_(tc);
var inst_15307 = cljs.core.async.close_BANG_(fc);
var state_15327__$1 = (function (){var statearr_15351 = state_15327;
(statearr_15351[(8)] = inst_15306);

return statearr_15351;
})();
var statearr_15352_17989 = state_15327__$1;
(statearr_15352_17989[(2)] = inst_15307);

(statearr_15352_17989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15328 === (14))){
var inst_15321 = (state_15327[(2)]);
var state_15327__$1 = state_15327;
var statearr_15354_17991 = state_15327__$1;
(statearr_15354_17991[(2)] = inst_15321);

(statearr_15354_17991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15328 === (10))){
var state_15327__$1 = state_15327;
var statearr_15355_17992 = state_15327__$1;
(statearr_15355_17992[(2)] = fc);

(statearr_15355_17992[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15328 === (8))){
var inst_15316 = (state_15327[(2)]);
var state_15327__$1 = state_15327;
if(cljs.core.truth_(inst_15316)){
var statearr_15356_17993 = state_15327__$1;
(statearr_15356_17993[(1)] = (12));

} else {
var statearr_15359_17994 = state_15327__$1;
(statearr_15359_17994[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14105__auto__ = null;
var cljs$core$async$state_machine__14105__auto____0 = (function (){
var statearr_15366 = [null,null,null,null,null,null,null,null,null];
(statearr_15366[(0)] = cljs$core$async$state_machine__14105__auto__);

(statearr_15366[(1)] = (1));

return statearr_15366;
});
var cljs$core$async$state_machine__14105__auto____1 = (function (state_15327){
while(true){
var ret_value__14106__auto__ = (function (){try{while(true){
var result__14108__auto__ = switch__14104__auto__(state_15327);
if(cljs.core.keyword_identical_QMARK_(result__14108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14108__auto__;
}
break;
}
}catch (e15369){var ex__14109__auto__ = e15369;
var statearr_15371_17996 = state_15327;
(statearr_15371_17996[(2)] = ex__14109__auto__);


if(cljs.core.seq((state_15327[(4)]))){
var statearr_15372_17997 = state_15327;
(statearr_15372_17997[(1)] = cljs.core.first((state_15327[(4)])));

} else {
throw ex__14109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17999 = state_15327;
state_15327 = G__17999;
continue;
} else {
return ret_value__14106__auto__;
}
break;
}
});
cljs$core$async$state_machine__14105__auto__ = function(state_15327){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14105__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14105__auto____1.call(this,state_15327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14105__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14105__auto____0;
cljs$core$async$state_machine__14105__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14105__auto____1;
return cljs$core$async$state_machine__14105__auto__;
})()
})();
var state__14365__auto__ = (function (){var statearr_15376 = f__14364__auto__();
(statearr_15376[(6)] = c__14363__auto___17965);

return statearr_15376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14365__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14363__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14364__auto__ = (function (){var switch__14104__auto__ = (function (state_15407){
var state_val_15408 = (state_15407[(1)]);
if((state_val_15408 === (7))){
var inst_15403 = (state_15407[(2)]);
var state_15407__$1 = state_15407;
var statearr_15409_18001 = state_15407__$1;
(statearr_15409_18001[(2)] = inst_15403);

(statearr_15409_18001[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15408 === (1))){
var inst_15381 = init;
var inst_15386 = inst_15381;
var state_15407__$1 = (function (){var statearr_15410 = state_15407;
(statearr_15410[(7)] = inst_15386);

return statearr_15410;
})();
var statearr_15412_18003 = state_15407__$1;
(statearr_15412_18003[(2)] = null);

(statearr_15412_18003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15408 === (4))){
var inst_15390 = (state_15407[(8)]);
var inst_15390__$1 = (state_15407[(2)]);
var inst_15391 = (inst_15390__$1 == null);
var state_15407__$1 = (function (){var statearr_15413 = state_15407;
(statearr_15413[(8)] = inst_15390__$1);

return statearr_15413;
})();
if(cljs.core.truth_(inst_15391)){
var statearr_15417_18006 = state_15407__$1;
(statearr_15417_18006[(1)] = (5));

} else {
var statearr_15420_18007 = state_15407__$1;
(statearr_15420_18007[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15408 === (6))){
var inst_15394 = (state_15407[(9)]);
var inst_15386 = (state_15407[(7)]);
var inst_15390 = (state_15407[(8)]);
var inst_15394__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15386,inst_15390) : f.call(null,inst_15386,inst_15390));
var inst_15395 = cljs.core.reduced_QMARK_(inst_15394__$1);
var state_15407__$1 = (function (){var statearr_15424 = state_15407;
(statearr_15424[(9)] = inst_15394__$1);

return statearr_15424;
})();
if(inst_15395){
var statearr_15426_18009 = state_15407__$1;
(statearr_15426_18009[(1)] = (8));

} else {
var statearr_15427_18010 = state_15407__$1;
(statearr_15427_18010[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15408 === (3))){
var inst_15405 = (state_15407[(2)]);
var state_15407__$1 = state_15407;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15407__$1,inst_15405);
} else {
if((state_val_15408 === (2))){
var state_15407__$1 = state_15407;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15407__$1,(4),ch);
} else {
if((state_val_15408 === (9))){
var inst_15394 = (state_15407[(9)]);
var inst_15386 = inst_15394;
var state_15407__$1 = (function (){var statearr_15428 = state_15407;
(statearr_15428[(7)] = inst_15386);

return statearr_15428;
})();
var statearr_15429_18011 = state_15407__$1;
(statearr_15429_18011[(2)] = null);

(statearr_15429_18011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15408 === (5))){
var inst_15386 = (state_15407[(7)]);
var state_15407__$1 = state_15407;
var statearr_15430_18012 = state_15407__$1;
(statearr_15430_18012[(2)] = inst_15386);

(statearr_15430_18012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15408 === (10))){
var inst_15401 = (state_15407[(2)]);
var state_15407__$1 = state_15407;
var statearr_15433_18013 = state_15407__$1;
(statearr_15433_18013[(2)] = inst_15401);

(statearr_15433_18013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15408 === (8))){
var inst_15394 = (state_15407[(9)]);
var inst_15397 = cljs.core.deref(inst_15394);
var state_15407__$1 = state_15407;
var statearr_15434_18014 = state_15407__$1;
(statearr_15434_18014[(2)] = inst_15397);

(statearr_15434_18014[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__14105__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14105__auto____0 = (function (){
var statearr_15436 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15436[(0)] = cljs$core$async$reduce_$_state_machine__14105__auto__);

(statearr_15436[(1)] = (1));

return statearr_15436;
});
var cljs$core$async$reduce_$_state_machine__14105__auto____1 = (function (state_15407){
while(true){
var ret_value__14106__auto__ = (function (){try{while(true){
var result__14108__auto__ = switch__14104__auto__(state_15407);
if(cljs.core.keyword_identical_QMARK_(result__14108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14108__auto__;
}
break;
}
}catch (e15440){var ex__14109__auto__ = e15440;
var statearr_15441_18019 = state_15407;
(statearr_15441_18019[(2)] = ex__14109__auto__);


if(cljs.core.seq((state_15407[(4)]))){
var statearr_15442_18020 = state_15407;
(statearr_15442_18020[(1)] = cljs.core.first((state_15407[(4)])));

} else {
throw ex__14109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18022 = state_15407;
state_15407 = G__18022;
continue;
} else {
return ret_value__14106__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14105__auto__ = function(state_15407){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14105__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14105__auto____1.call(this,state_15407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14105__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14105__auto____0;
cljs$core$async$reduce_$_state_machine__14105__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14105__auto____1;
return cljs$core$async$reduce_$_state_machine__14105__auto__;
})()
})();
var state__14365__auto__ = (function (){var statearr_15444 = f__14364__auto__();
(statearr_15444[(6)] = c__14363__auto__);

return statearr_15444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14365__auto__);
}));

return c__14363__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__14363__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14364__auto__ = (function (){var switch__14104__auto__ = (function (state_15450){
var state_val_15451 = (state_15450[(1)]);
if((state_val_15451 === (1))){
var inst_15445 = cljs.core.async.reduce(f__$1,init,ch);
var state_15450__$1 = state_15450;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15450__$1,(2),inst_15445);
} else {
if((state_val_15451 === (2))){
var inst_15447 = (state_15450[(2)]);
var inst_15448 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15447) : f__$1.call(null,inst_15447));
var state_15450__$1 = state_15450;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15450__$1,inst_15448);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__14105__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14105__auto____0 = (function (){
var statearr_15453 = [null,null,null,null,null,null,null];
(statearr_15453[(0)] = cljs$core$async$transduce_$_state_machine__14105__auto__);

(statearr_15453[(1)] = (1));

return statearr_15453;
});
var cljs$core$async$transduce_$_state_machine__14105__auto____1 = (function (state_15450){
while(true){
var ret_value__14106__auto__ = (function (){try{while(true){
var result__14108__auto__ = switch__14104__auto__(state_15450);
if(cljs.core.keyword_identical_QMARK_(result__14108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14108__auto__;
}
break;
}
}catch (e15454){var ex__14109__auto__ = e15454;
var statearr_15455_18027 = state_15450;
(statearr_15455_18027[(2)] = ex__14109__auto__);


if(cljs.core.seq((state_15450[(4)]))){
var statearr_15456_18034 = state_15450;
(statearr_15456_18034[(1)] = cljs.core.first((state_15450[(4)])));

} else {
throw ex__14109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18036 = state_15450;
state_15450 = G__18036;
continue;
} else {
return ret_value__14106__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14105__auto__ = function(state_15450){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14105__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14105__auto____1.call(this,state_15450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__14105__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14105__auto____0;
cljs$core$async$transduce_$_state_machine__14105__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14105__auto____1;
return cljs$core$async$transduce_$_state_machine__14105__auto__;
})()
})();
var state__14365__auto__ = (function (){var statearr_15457 = f__14364__auto__();
(statearr_15457[(6)] = c__14363__auto__);

return statearr_15457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14365__auto__);
}));

return c__14363__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__15460 = arguments.length;
switch (G__15460) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14363__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14364__auto__ = (function (){var switch__14104__auto__ = (function (state_15486){
var state_val_15487 = (state_15486[(1)]);
if((state_val_15487 === (7))){
var inst_15468 = (state_15486[(2)]);
var state_15486__$1 = state_15486;
var statearr_15489_18038 = state_15486__$1;
(statearr_15489_18038[(2)] = inst_15468);

(statearr_15489_18038[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (1))){
var inst_15461 = cljs.core.seq(coll);
var inst_15462 = inst_15461;
var state_15486__$1 = (function (){var statearr_15490 = state_15486;
(statearr_15490[(7)] = inst_15462);

return statearr_15490;
})();
var statearr_15491_18039 = state_15486__$1;
(statearr_15491_18039[(2)] = null);

(statearr_15491_18039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (4))){
var inst_15462 = (state_15486[(7)]);
var inst_15466 = cljs.core.first(inst_15462);
var state_15486__$1 = state_15486;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15486__$1,(7),ch,inst_15466);
} else {
if((state_val_15487 === (13))){
var inst_15480 = (state_15486[(2)]);
var state_15486__$1 = state_15486;
var statearr_15496_18040 = state_15486__$1;
(statearr_15496_18040[(2)] = inst_15480);

(statearr_15496_18040[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (6))){
var inst_15471 = (state_15486[(2)]);
var state_15486__$1 = state_15486;
if(cljs.core.truth_(inst_15471)){
var statearr_15497_18045 = state_15486__$1;
(statearr_15497_18045[(1)] = (8));

} else {
var statearr_15498_18046 = state_15486__$1;
(statearr_15498_18046[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (3))){
var inst_15484 = (state_15486[(2)]);
var state_15486__$1 = state_15486;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15486__$1,inst_15484);
} else {
if((state_val_15487 === (12))){
var state_15486__$1 = state_15486;
var statearr_15499_18051 = state_15486__$1;
(statearr_15499_18051[(2)] = null);

(statearr_15499_18051[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (2))){
var inst_15462 = (state_15486[(7)]);
var state_15486__$1 = state_15486;
if(cljs.core.truth_(inst_15462)){
var statearr_15500_18056 = state_15486__$1;
(statearr_15500_18056[(1)] = (4));

} else {
var statearr_15501_18057 = state_15486__$1;
(statearr_15501_18057[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (11))){
var inst_15477 = cljs.core.async.close_BANG_(ch);
var state_15486__$1 = state_15486;
var statearr_15503_18058 = state_15486__$1;
(statearr_15503_18058[(2)] = inst_15477);

(statearr_15503_18058[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (9))){
var state_15486__$1 = state_15486;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15504_18063 = state_15486__$1;
(statearr_15504_18063[(1)] = (11));

} else {
var statearr_15505_18064 = state_15486__$1;
(statearr_15505_18064[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (5))){
var inst_15462 = (state_15486[(7)]);
var state_15486__$1 = state_15486;
var statearr_15506_18065 = state_15486__$1;
(statearr_15506_18065[(2)] = inst_15462);

(statearr_15506_18065[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (10))){
var inst_15482 = (state_15486[(2)]);
var state_15486__$1 = state_15486;
var statearr_15507_18066 = state_15486__$1;
(statearr_15507_18066[(2)] = inst_15482);

(statearr_15507_18066[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (8))){
var inst_15462 = (state_15486[(7)]);
var inst_15473 = cljs.core.next(inst_15462);
var inst_15462__$1 = inst_15473;
var state_15486__$1 = (function (){var statearr_15508 = state_15486;
(statearr_15508[(7)] = inst_15462__$1);

return statearr_15508;
})();
var statearr_15509_18069 = state_15486__$1;
(statearr_15509_18069[(2)] = null);

(statearr_15509_18069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14105__auto__ = null;
var cljs$core$async$state_machine__14105__auto____0 = (function (){
var statearr_15510 = [null,null,null,null,null,null,null,null];
(statearr_15510[(0)] = cljs$core$async$state_machine__14105__auto__);

(statearr_15510[(1)] = (1));

return statearr_15510;
});
var cljs$core$async$state_machine__14105__auto____1 = (function (state_15486){
while(true){
var ret_value__14106__auto__ = (function (){try{while(true){
var result__14108__auto__ = switch__14104__auto__(state_15486);
if(cljs.core.keyword_identical_QMARK_(result__14108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14108__auto__;
}
break;
}
}catch (e15512){var ex__14109__auto__ = e15512;
var statearr_15513_18082 = state_15486;
(statearr_15513_18082[(2)] = ex__14109__auto__);


if(cljs.core.seq((state_15486[(4)]))){
var statearr_15515_18083 = state_15486;
(statearr_15515_18083[(1)] = cljs.core.first((state_15486[(4)])));

} else {
throw ex__14109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18084 = state_15486;
state_15486 = G__18084;
continue;
} else {
return ret_value__14106__auto__;
}
break;
}
});
cljs$core$async$state_machine__14105__auto__ = function(state_15486){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14105__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14105__auto____1.call(this,state_15486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14105__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14105__auto____0;
cljs$core$async$state_machine__14105__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14105__auto____1;
return cljs$core$async$state_machine__14105__auto__;
})()
})();
var state__14365__auto__ = (function (){var statearr_15516 = f__14364__auto__();
(statearr_15516[(6)] = c__14363__auto__);

return statearr_15516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14365__auto__);
}));

return c__14363__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__15523 = arguments.length;
switch (G__15523) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_18089 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null,_));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_18089(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_18097 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_18097(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_18104 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_18104(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_18115 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null,m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_18115(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15552 = (function (ch,cs,meta15553){
this.ch = ch;
this.cs = cs;
this.meta15553 = meta15553;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15552.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15554,meta15553__$1){
var self__ = this;
var _15554__$1 = this;
return (new cljs.core.async.t_cljs$core$async15552(self__.ch,self__.cs,meta15553__$1));
}));

(cljs.core.async.t_cljs$core$async15552.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15554){
var self__ = this;
var _15554__$1 = this;
return self__.meta15553;
}));

(cljs.core.async.t_cljs$core$async15552.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15552.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15552.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15552.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15552.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15552.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15552.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15553","meta15553",-1411819091,null)], null);
}));

(cljs.core.async.t_cljs$core$async15552.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15552.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15552");

(cljs.core.async.t_cljs$core$async15552.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15552");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15552.
 */
cljs.core.async.__GT_t_cljs$core$async15552 = (function cljs$core$async$__GT_t_cljs$core$async15552(ch,cs,meta15553){
return (new cljs.core.async.t_cljs$core$async15552(ch,cs,meta15553));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async15552(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14363__auto___18163 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14364__auto__ = (function (){var switch__14104__auto__ = (function (state_15735){
var state_val_15737 = (state_15735[(1)]);
if((state_val_15737 === (7))){
var inst_15728 = (state_15735[(2)]);
var state_15735__$1 = state_15735;
var statearr_15746_18174 = state_15735__$1;
(statearr_15746_18174[(2)] = inst_15728);

(statearr_15746_18174[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15737 === (20))){
var inst_15613 = (state_15735[(7)]);
var inst_15627 = cljs.core.first(inst_15613);
var inst_15630 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15627,(0),null);
var inst_15631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15627,(1),null);
var state_15735__$1 = (function (){var statearr_15748 = state_15735;
(statearr_15748[(8)] = inst_15630);

return statearr_15748;
})();
if(cljs.core.truth_(inst_15631)){
var statearr_15750_18187 = state_15735__$1;
(statearr_15750_18187[(1)] = (22));

} else {
var statearr_15752_18190 = state_15735__$1;
(statearr_15752_18190[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15737 === (27))){
var inst_15668 = (state_15735[(9)]);
var inst_15676 = (state_15735[(10)]);
var inst_15670 = (state_15735[(11)]);
var inst_15579 = (state_15735[(12)]);
var inst_15676__$1 = cljs.core._nth(inst_15668,inst_15670);
var inst_15678 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15676__$1,inst_15579,done);
var state_15735__$1 = (function (){var statearr_15757 = state_15735;
(statearr_15757[(10)] = inst_15676__$1);

return statearr_15757;
})();
if(cljs.core.truth_(inst_15678)){
var statearr_15758_18195 = state_15735__$1;
(statearr_15758_18195[(1)] = (30));

} else {
var statearr_15759_18196 = state_15735__$1;
(statearr_15759_18196[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15737 === (1))){
var state_15735__$1 = state_15735;
var statearr_15760_18199 = state_15735__$1;
(statearr_15760_18199[(2)] = null);

(statearr_15760_18199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15737 === (24))){
var inst_15613 = (state_15735[(7)]);
var inst_15636 = (state_15735[(2)]);
var inst_15637 = cljs.core.next(inst_15613);
var inst_15588 = inst_15637;
var inst_15589 = null;
var inst_15590 = (0);
var inst_15591 = (0);
var state_15735__$1 = (function (){var statearr_15764 = state_15735;
(statearr_15764[(13)] = inst_15588);

(statearr_15764[(14)] = inst_15591);

(statearr_15764[(15)] = inst_15590);

(statearr_15764[(16)] = inst_15589);

(statearr_15764[(17)] = inst_15636);

return statearr_15764;
})();
var statearr_15767_18203 = state_15735__$1;
(statearr_15767_18203[(2)] = null);

(statearr_15767_18203[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15737 === (39))){
var state_15735__$1 = state_15735;
var statearr_15775_18204 = state_15735__$1;
(statearr_15775_18204[(2)] = null);

(statearr_15775_18204[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15737 === (4))){
var inst_15579 = (state_15735[(12)]);
var inst_15579__$1 = (state_15735[(2)]);
var inst_15580 = (inst_15579__$1 == null);
var state_15735__$1 = (function (){var statearr_15776 = state_15735;
(statearr_15776[(12)] = inst_15579__$1);

return statearr_15776;
})();
if(cljs.core.truth_(inst_15580)){
var statearr_15777_18208 = state_15735__$1;
(statearr_15777_18208[(1)] = (5));

} else {
var statearr_15778_18209 = state_15735__$1;
(statearr_15778_18209[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15737 === (15))){
var inst_15588 = (state_15735[(13)]);
var inst_15591 = (state_15735[(14)]);
var inst_15590 = (state_15735[(15)]);
var inst_15589 = (state_15735[(16)]);
var inst_15608 = (state_15735[(2)]);
var inst_15609 = (inst_15591 + (1));
var tmp15772 = inst_15588;
var tmp15773 = inst_15590;
var tmp15774 = inst_15589;
var inst_15588__$1 = tmp15772;
var inst_15589__$1 = tmp15774;
var inst_15590__$1 = tmp15773;
var inst_15591__$1 = inst_15609;
var state_15735__$1 = (function (){var statearr_15780 = state_15735;
(statearr_15780[(13)] = inst_15588__$1);

(statearr_15780[(14)] = inst_15591__$1);

(statearr_15780[(15)] = inst_15590__$1);

(statearr_15780[(16)] = inst_15589__$1);

(statearr_15780[(18)] = inst_15608);

return statearr_15780;
})();
var statearr_15781_18215 = state_15735__$1;
(statearr_15781_18215[(2)] = null);

(statearr_15781_18215[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15737 === (21))){
var inst_15640 = (state_15735[(2)]);
var state_15735__$1 = state_15735;
var statearr_15786_18220 = state_15735__$1;
(statearr_15786_18220[(2)] = inst_15640);

(statearr_15786_18220[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15737 === (31))){
var inst_15676 = (state_15735[(10)]);
var inst_15681 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15676);
var state_15735__$1 = state_15735;
var statearr_15788_18221 = state_15735__$1;
(statearr_15788_18221[(2)] = inst_15681);

(statearr_15788_18221[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15737 === (32))){
var inst_15668 = (state_15735[(9)]);
var inst_15667 = (state_15735[(19)]);
var inst_15670 = (state_15735[(11)]);
var inst_15669 = (state_15735[(20)]);
var inst_15683 = (state_15735[(2)]);
var inst_15684 = (inst_15670 + (1));
var tmp15783 = inst_15668;
var tmp15784 = inst_15667;
var tmp15785 = inst_15669;
var inst_15667__$1 = tmp15784;
var inst_15668__$1 = tmp15783;
var inst_15669__$1 = tmp15785;
var inst_15670__$1 = inst_15684;
var state_15735__$1 = (function (){var statearr_15789 = state_15735;
(statearr_15789[(21)] = inst_15683);

(statearr_15789[(9)] = inst_15668__$1);

(statearr_15789[(19)] = inst_15667__$1);

(statearr_15789[(11)] = inst_15670__$1);

(statearr_15789[(20)] = inst_15669__$1);

return statearr_15789;
})();
var statearr_15791_18222 = state_15735__$1;
(statearr_15791_18222[(2)] = null);

(statearr_15791_18222[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15737 === (40))){
var inst_15698 = (state_15735[(22)]);
var inst_15704 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15698);
var state_15735__$1 = state_15735;
var statearr_15793_18223 = state_15735__$1;
(statearr_15793_18223[(2)] = inst_15704);

(statearr_15793_18223[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15737 === (33))){
var inst_15688 = (state_15735[(23)]);
var inst_15690 = cljs.core.chunked_seq_QMARK_(inst_15688);
var state_15735__$1 = state_15735;
if(inst_15690){
var statearr_15795_18225 = state_15735__$1;
(statearr_15795_18225[(1)] = (36));

} else {
var statearr_15796_18226 = state_15735__$1;
(statearr_15796_18226[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15737 === (13))){
var inst_15602 = (state_15735[(24)]);
var inst_15605 = cljs.core.async.close_BANG_(inst_15602);
var state_15735__$1 = state_15735;
var statearr_15801_18228 = state_15735__$1;
(statearr_15801_18228[(2)] = inst_15605);

(statearr_15801_18228[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15737 === (22))){
var inst_15630 = (state_15735[(8)]);
var inst_15633 = cljs.core.async.close_BANG_(inst_15630);
var state_15735__$1 = state_15735;
var statearr_15803_18230 = state_15735__$1;
(statearr_15803_18230[(2)] = inst_15633);

(statearr_15803_18230[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15737 === (36))){
var inst_15688 = (state_15735[(23)]);
var inst_15692 = cljs.core.chunk_first(inst_15688);
var inst_15693 = cljs.core.chunk_rest(inst_15688);
var inst_15694 = cljs.core.count(inst_15692);
var inst_15667 = inst_15693;
var inst_15668 = inst_15692;
var inst_15669 = inst_15694;
var inst_15670 = (0);
var state_15735__$1 = (function (){var statearr_15805 = state_15735;
(statearr_15805[(9)] = inst_15668);

(statearr_15805[(19)] = inst_15667);

(statearr_15805[(11)] = inst_15670);

(statearr_15805[(20)] = inst_15669);

return statearr_15805;
})();
var statearr_15806_18231 = state_15735__$1;
(statearr_15806_18231[(2)] = null);

(statearr_15806_18231[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15737 === (41))){
var inst_15688 = (state_15735[(23)]);
var inst_15706 = (state_15735[(2)]);
var inst_15707 = cljs.core.next(inst_15688);
var inst_15667 = inst_15707;
var inst_15668 = null;
var inst_15669 = (0);
var inst_15670 = (0);
var state_15735__$1 = (function (){var statearr_15810 = state_15735;
(statearr_15810[(9)] = inst_15668);

(statearr_15810[(19)] = inst_15667);

(statearr_15810[(11)] = inst_15670);

(statearr_15810[(20)] = inst_15669);

(statearr_15810[(25)] = inst_15706);

return statearr_15810;
})();
var statearr_15813_18235 = state_15735__$1;
(statearr_15813_18235[(2)] = null);

(statearr_15813_18235[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15737 === (43))){
var state_15735__$1 = state_15735;
var statearr_15814_18237 = state_15735__$1;
(statearr_15814_18237[(2)] = null);

(statearr_15814_18237[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15737 === (29))){
var inst_15715 = (state_15735[(2)]);
var state_15735__$1 = state_15735;
var statearr_15815_18238 = state_15735__$1;
(statearr_15815_18238[(2)] = inst_15715);

(statearr_15815_18238[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15737 === (44))){
var inst_15725 = (state_15735[(2)]);
var state_15735__$1 = (function (){var statearr_15816 = state_15735;
(statearr_15816[(26)] = inst_15725);

return statearr_15816;
})();
var statearr_15817_18239 = state_15735__$1;
(statearr_15817_18239[(2)] = null);

(statearr_15817_18239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15737 === (6))){
var inst_15651 = (state_15735[(27)]);
var inst_15650 = cljs.core.deref(cs);
var inst_15651__$1 = cljs.core.keys(inst_15650);
var inst_15658 = cljs.core.count(inst_15651__$1);
var inst_15659 = cljs.core.reset_BANG_(dctr,inst_15658);
var inst_15664 = cljs.core.seq(inst_15651__$1);
var inst_15667 = inst_15664;
var inst_15668 = null;
var inst_15669 = (0);
var inst_15670 = (0);
var state_15735__$1 = (function (){var statearr_15820 = state_15735;
(statearr_15820[(28)] = inst_15659);

(statearr_15820[(9)] = inst_15668);

(statearr_15820[(27)] = inst_15651__$1);

(statearr_15820[(19)] = inst_15667);

(statearr_15820[(11)] = inst_15670);

(statearr_15820[(20)] = inst_15669);

return statearr_15820;
})();
var statearr_15821_18242 = state_15735__$1;
(statearr_15821_18242[(2)] = null);

(statearr_15821_18242[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15737 === (28))){
var inst_15667 = (state_15735[(19)]);
var inst_15688 = (state_15735[(23)]);
var inst_15688__$1 = cljs.core.seq(inst_15667);
var state_15735__$1 = (function (){var statearr_15824 = state_15735;
(statearr_15824[(23)] = inst_15688__$1);

return statearr_15824;
})();
if(inst_15688__$1){
var statearr_15825_18243 = state_15735__$1;
(statearr_15825_18243[(1)] = (33));

} else {
var statearr_15826_18244 = state_15735__$1;
(statearr_15826_18244[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15737 === (25))){
var inst_15670 = (state_15735[(11)]);
var inst_15669 = (state_15735[(20)]);
var inst_15673 = (inst_15670 < inst_15669);
var inst_15674 = inst_15673;
var state_15735__$1 = state_15735;
if(cljs.core.truth_(inst_15674)){
var statearr_15834_18245 = state_15735__$1;
(statearr_15834_18245[(1)] = (27));

} else {
var statearr_15835_18247 = state_15735__$1;
(statearr_15835_18247[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15737 === (34))){
var state_15735__$1 = state_15735;
var statearr_15837_18250 = state_15735__$1;
(statearr_15837_18250[(2)] = null);

(statearr_15837_18250[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15737 === (17))){
var state_15735__$1 = state_15735;
var statearr_15839_18252 = state_15735__$1;
(statearr_15839_18252[(2)] = null);

(statearr_15839_18252[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15737 === (3))){
var inst_15730 = (state_15735[(2)]);
var state_15735__$1 = state_15735;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15735__$1,inst_15730);
} else {
if((state_val_15737 === (12))){
var inst_15646 = (state_15735[(2)]);
var state_15735__$1 = state_15735;
var statearr_15842_18254 = state_15735__$1;
(statearr_15842_18254[(2)] = inst_15646);

(statearr_15842_18254[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15737 === (2))){
var state_15735__$1 = state_15735;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15735__$1,(4),ch);
} else {
if((state_val_15737 === (23))){
var state_15735__$1 = state_15735;
var statearr_15848_18257 = state_15735__$1;
(statearr_15848_18257[(2)] = null);

(statearr_15848_18257[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15737 === (35))){
var inst_15713 = (state_15735[(2)]);
var state_15735__$1 = state_15735;
var statearr_15853_18259 = state_15735__$1;
(statearr_15853_18259[(2)] = inst_15713);

(statearr_15853_18259[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15737 === (19))){
var inst_15613 = (state_15735[(7)]);
var inst_15618 = cljs.core.chunk_first(inst_15613);
var inst_15620 = cljs.core.chunk_rest(inst_15613);
var inst_15621 = cljs.core.count(inst_15618);
var inst_15588 = inst_15620;
var inst_15589 = inst_15618;
var inst_15590 = inst_15621;
var inst_15591 = (0);
var state_15735__$1 = (function (){var statearr_15856 = state_15735;
(statearr_15856[(13)] = inst_15588);

(statearr_15856[(14)] = inst_15591);

(statearr_15856[(15)] = inst_15590);

(statearr_15856[(16)] = inst_15589);

return statearr_15856;
})();
var statearr_15857_18267 = state_15735__$1;
(statearr_15857_18267[(2)] = null);

(statearr_15857_18267[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15737 === (11))){
var inst_15588 = (state_15735[(13)]);
var inst_15613 = (state_15735[(7)]);
var inst_15613__$1 = cljs.core.seq(inst_15588);
var state_15735__$1 = (function (){var statearr_15860 = state_15735;
(statearr_15860[(7)] = inst_15613__$1);

return statearr_15860;
})();
if(inst_15613__$1){
var statearr_15861_18271 = state_15735__$1;
(statearr_15861_18271[(1)] = (16));

} else {
var statearr_15862_18272 = state_15735__$1;
(statearr_15862_18272[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15737 === (9))){
var inst_15648 = (state_15735[(2)]);
var state_15735__$1 = state_15735;
var statearr_15864_18274 = state_15735__$1;
(statearr_15864_18274[(2)] = inst_15648);

(statearr_15864_18274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15737 === (5))){
var inst_15586 = cljs.core.deref(cs);
var inst_15587 = cljs.core.seq(inst_15586);
var inst_15588 = inst_15587;
var inst_15589 = null;
var inst_15590 = (0);
var inst_15591 = (0);
var state_15735__$1 = (function (){var statearr_15866 = state_15735;
(statearr_15866[(13)] = inst_15588);

(statearr_15866[(14)] = inst_15591);

(statearr_15866[(15)] = inst_15590);

(statearr_15866[(16)] = inst_15589);

return statearr_15866;
})();
var statearr_15867_18278 = state_15735__$1;
(statearr_15867_18278[(2)] = null);

(statearr_15867_18278[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15737 === (14))){
var state_15735__$1 = state_15735;
var statearr_15869_18280 = state_15735__$1;
(statearr_15869_18280[(2)] = null);

(statearr_15869_18280[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15737 === (45))){
var inst_15722 = (state_15735[(2)]);
var state_15735__$1 = state_15735;
var statearr_15870_18281 = state_15735__$1;
(statearr_15870_18281[(2)] = inst_15722);

(statearr_15870_18281[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15737 === (26))){
var inst_15651 = (state_15735[(27)]);
var inst_15717 = (state_15735[(2)]);
var inst_15718 = cljs.core.seq(inst_15651);
var state_15735__$1 = (function (){var statearr_15871 = state_15735;
(statearr_15871[(29)] = inst_15717);

return statearr_15871;
})();
if(inst_15718){
var statearr_15874_18284 = state_15735__$1;
(statearr_15874_18284[(1)] = (42));

} else {
var statearr_15876_18285 = state_15735__$1;
(statearr_15876_18285[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15737 === (16))){
var inst_15613 = (state_15735[(7)]);
var inst_15615 = cljs.core.chunked_seq_QMARK_(inst_15613);
var state_15735__$1 = state_15735;
if(inst_15615){
var statearr_15878_18286 = state_15735__$1;
(statearr_15878_18286[(1)] = (19));

} else {
var statearr_15879_18287 = state_15735__$1;
(statearr_15879_18287[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15737 === (38))){
var inst_15710 = (state_15735[(2)]);
var state_15735__$1 = state_15735;
var statearr_15880_18291 = state_15735__$1;
(statearr_15880_18291[(2)] = inst_15710);

(statearr_15880_18291[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15737 === (30))){
var state_15735__$1 = state_15735;
var statearr_15881_18292 = state_15735__$1;
(statearr_15881_18292[(2)] = null);

(statearr_15881_18292[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15737 === (10))){
var inst_15591 = (state_15735[(14)]);
var inst_15589 = (state_15735[(16)]);
var inst_15601 = cljs.core._nth(inst_15589,inst_15591);
var inst_15602 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15601,(0),null);
var inst_15603 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15601,(1),null);
var state_15735__$1 = (function (){var statearr_15882 = state_15735;
(statearr_15882[(24)] = inst_15602);

return statearr_15882;
})();
if(cljs.core.truth_(inst_15603)){
var statearr_15884_18293 = state_15735__$1;
(statearr_15884_18293[(1)] = (13));

} else {
var statearr_15885_18298 = state_15735__$1;
(statearr_15885_18298[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15737 === (18))){
var inst_15644 = (state_15735[(2)]);
var state_15735__$1 = state_15735;
var statearr_15886_18303 = state_15735__$1;
(statearr_15886_18303[(2)] = inst_15644);

(statearr_15886_18303[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15737 === (42))){
var state_15735__$1 = state_15735;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15735__$1,(45),dchan);
} else {
if((state_val_15737 === (37))){
var inst_15688 = (state_15735[(23)]);
var inst_15579 = (state_15735[(12)]);
var inst_15698 = (state_15735[(22)]);
var inst_15698__$1 = cljs.core.first(inst_15688);
var inst_15700 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15698__$1,inst_15579,done);
var state_15735__$1 = (function (){var statearr_15898 = state_15735;
(statearr_15898[(22)] = inst_15698__$1);

return statearr_15898;
})();
if(cljs.core.truth_(inst_15700)){
var statearr_15903_18317 = state_15735__$1;
(statearr_15903_18317[(1)] = (39));

} else {
var statearr_15904_18318 = state_15735__$1;
(statearr_15904_18318[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15737 === (8))){
var inst_15591 = (state_15735[(14)]);
var inst_15590 = (state_15735[(15)]);
var inst_15593 = (inst_15591 < inst_15590);
var inst_15594 = inst_15593;
var state_15735__$1 = state_15735;
if(cljs.core.truth_(inst_15594)){
var statearr_15905_18320 = state_15735__$1;
(statearr_15905_18320[(1)] = (10));

} else {
var statearr_15906_18321 = state_15735__$1;
(statearr_15906_18321[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__14105__auto__ = null;
var cljs$core$async$mult_$_state_machine__14105__auto____0 = (function (){
var statearr_15910 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15910[(0)] = cljs$core$async$mult_$_state_machine__14105__auto__);

(statearr_15910[(1)] = (1));

return statearr_15910;
});
var cljs$core$async$mult_$_state_machine__14105__auto____1 = (function (state_15735){
while(true){
var ret_value__14106__auto__ = (function (){try{while(true){
var result__14108__auto__ = switch__14104__auto__(state_15735);
if(cljs.core.keyword_identical_QMARK_(result__14108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14108__auto__;
}
break;
}
}catch (e15915){var ex__14109__auto__ = e15915;
var statearr_15916_18323 = state_15735;
(statearr_15916_18323[(2)] = ex__14109__auto__);


if(cljs.core.seq((state_15735[(4)]))){
var statearr_15918_18324 = state_15735;
(statearr_15918_18324[(1)] = cljs.core.first((state_15735[(4)])));

} else {
throw ex__14109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18325 = state_15735;
state_15735 = G__18325;
continue;
} else {
return ret_value__14106__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14105__auto__ = function(state_15735){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14105__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14105__auto____1.call(this,state_15735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14105__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14105__auto____0;
cljs$core$async$mult_$_state_machine__14105__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14105__auto____1;
return cljs$core$async$mult_$_state_machine__14105__auto__;
})()
})();
var state__14365__auto__ = (function (){var statearr_15921 = f__14364__auto__();
(statearr_15921[(6)] = c__14363__auto___18163);

return statearr_15921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14365__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__15927 = arguments.length;
switch (G__15927) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_18332 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_18332(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18333 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_18333(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18338 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null,m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18338(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18344 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null,m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_18344(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18356 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null,m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18356(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18361 = arguments.length;
var i__5727__auto___18362 = (0);
while(true){
if((i__5727__auto___18362 < len__5726__auto___18361)){
args__5732__auto__.push((arguments[i__5727__auto___18362]));

var G__18364 = (i__5727__auto___18362 + (1));
i__5727__auto___18362 = G__18364;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15989){
var map__15990 = p__15989;
var map__15990__$1 = cljs.core.__destructure_map(map__15990);
var opts = map__15990__$1;
var statearr_15993_18369 = state;
(statearr_15993_18369[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_15998_18374 = state;
(statearr_15998_18374[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_16000_18375 = state;
(statearr_16000_18375[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15978){
var G__15979 = cljs.core.first(seq15978);
var seq15978__$1 = cljs.core.next(seq15978);
var G__15980 = cljs.core.first(seq15978__$1);
var seq15978__$2 = cljs.core.next(seq15978__$1);
var G__15981 = cljs.core.first(seq15978__$2);
var seq15978__$3 = cljs.core.next(seq15978__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15979,G__15980,G__15981,seq15978__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16033 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16034){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16034 = meta16034;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16033.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16035,meta16034__$1){
var self__ = this;
var _16035__$1 = this;
return (new cljs.core.async.t_cljs$core$async16033(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16034__$1));
}));

(cljs.core.async.t_cljs$core$async16033.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16035){
var self__ = this;
var _16035__$1 = this;
return self__.meta16034;
}));

(cljs.core.async.t_cljs$core$async16033.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16033.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async16033.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16033.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16033.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16033.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16033.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16033.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16033.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16034","meta16034",1942563574,null)], null);
}));

(cljs.core.async.t_cljs$core$async16033.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16033.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16033");

(cljs.core.async.t_cljs$core$async16033.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16033");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16033.
 */
cljs.core.async.__GT_t_cljs$core$async16033 = (function cljs$core$async$__GT_t_cljs$core$async16033(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16034){
return (new cljs.core.async.t_cljs$core$async16033(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16034));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async16033(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__14363__auto___18405 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14364__auto__ = (function (){var switch__14104__auto__ = (function (state_16148){
var state_val_16149 = (state_16148[(1)]);
if((state_val_16149 === (7))){
var inst_16101 = (state_16148[(2)]);
var state_16148__$1 = state_16148;
if(cljs.core.truth_(inst_16101)){
var statearr_16155_18411 = state_16148__$1;
(statearr_16155_18411[(1)] = (8));

} else {
var statearr_16157_18412 = state_16148__$1;
(statearr_16157_18412[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (20))){
var inst_16091 = (state_16148[(7)]);
var state_16148__$1 = state_16148;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16148__$1,(23),out,inst_16091);
} else {
if((state_val_16149 === (1))){
var inst_16071 = calc_state();
var inst_16073 = cljs.core.__destructure_map(inst_16071);
var inst_16074 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16073,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16075 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16073,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16076 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16073,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16078 = inst_16071;
var state_16148__$1 = (function (){var statearr_16161 = state_16148;
(statearr_16161[(8)] = inst_16076);

(statearr_16161[(9)] = inst_16078);

(statearr_16161[(10)] = inst_16074);

(statearr_16161[(11)] = inst_16075);

return statearr_16161;
})();
var statearr_16164_18420 = state_16148__$1;
(statearr_16164_18420[(2)] = null);

(statearr_16164_18420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (24))){
var inst_16082 = (state_16148[(12)]);
var inst_16078 = inst_16082;
var state_16148__$1 = (function (){var statearr_16166 = state_16148;
(statearr_16166[(9)] = inst_16078);

return statearr_16166;
})();
var statearr_16167_18421 = state_16148__$1;
(statearr_16167_18421[(2)] = null);

(statearr_16167_18421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (4))){
var inst_16091 = (state_16148[(7)]);
var inst_16096 = (state_16148[(13)]);
var inst_16090 = (state_16148[(2)]);
var inst_16091__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16090,(0),null);
var inst_16092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16090,(1),null);
var inst_16096__$1 = (inst_16091__$1 == null);
var state_16148__$1 = (function (){var statearr_16169 = state_16148;
(statearr_16169[(14)] = inst_16092);

(statearr_16169[(7)] = inst_16091__$1);

(statearr_16169[(13)] = inst_16096__$1);

return statearr_16169;
})();
if(cljs.core.truth_(inst_16096__$1)){
var statearr_16173_18423 = state_16148__$1;
(statearr_16173_18423[(1)] = (5));

} else {
var statearr_16174_18424 = state_16148__$1;
(statearr_16174_18424[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (15))){
var inst_16083 = (state_16148[(15)]);
var inst_16120 = (state_16148[(16)]);
var inst_16120__$1 = cljs.core.empty_QMARK_(inst_16083);
var state_16148__$1 = (function (){var statearr_16176 = state_16148;
(statearr_16176[(16)] = inst_16120__$1);

return statearr_16176;
})();
if(inst_16120__$1){
var statearr_16180_18425 = state_16148__$1;
(statearr_16180_18425[(1)] = (17));

} else {
var statearr_16182_18426 = state_16148__$1;
(statearr_16182_18426[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (21))){
var inst_16082 = (state_16148[(12)]);
var inst_16078 = inst_16082;
var state_16148__$1 = (function (){var statearr_16185 = state_16148;
(statearr_16185[(9)] = inst_16078);

return statearr_16185;
})();
var statearr_16187_18428 = state_16148__$1;
(statearr_16187_18428[(2)] = null);

(statearr_16187_18428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (13))){
var inst_16110 = (state_16148[(2)]);
var inst_16112 = calc_state();
var inst_16078 = inst_16112;
var state_16148__$1 = (function (){var statearr_16188 = state_16148;
(statearr_16188[(17)] = inst_16110);

(statearr_16188[(9)] = inst_16078);

return statearr_16188;
})();
var statearr_16189_18432 = state_16148__$1;
(statearr_16189_18432[(2)] = null);

(statearr_16189_18432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (22))){
var inst_16140 = (state_16148[(2)]);
var state_16148__$1 = state_16148;
var statearr_16191_18440 = state_16148__$1;
(statearr_16191_18440[(2)] = inst_16140);

(statearr_16191_18440[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (6))){
var inst_16092 = (state_16148[(14)]);
var inst_16099 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16092,change);
var state_16148__$1 = state_16148;
var statearr_16196_18441 = state_16148__$1;
(statearr_16196_18441[(2)] = inst_16099);

(statearr_16196_18441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (25))){
var state_16148__$1 = state_16148;
var statearr_16198_18442 = state_16148__$1;
(statearr_16198_18442[(2)] = null);

(statearr_16198_18442[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (17))){
var inst_16092 = (state_16148[(14)]);
var inst_16084 = (state_16148[(18)]);
var inst_16122 = (inst_16084.cljs$core$IFn$_invoke$arity$1 ? inst_16084.cljs$core$IFn$_invoke$arity$1(inst_16092) : inst_16084.call(null,inst_16092));
var inst_16123 = cljs.core.not(inst_16122);
var state_16148__$1 = state_16148;
var statearr_16202_18449 = state_16148__$1;
(statearr_16202_18449[(2)] = inst_16123);

(statearr_16202_18449[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (3))){
var inst_16145 = (state_16148[(2)]);
var state_16148__$1 = state_16148;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16148__$1,inst_16145);
} else {
if((state_val_16149 === (12))){
var state_16148__$1 = state_16148;
var statearr_16206_18453 = state_16148__$1;
(statearr_16206_18453[(2)] = null);

(statearr_16206_18453[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (2))){
var inst_16078 = (state_16148[(9)]);
var inst_16082 = (state_16148[(12)]);
var inst_16082__$1 = cljs.core.__destructure_map(inst_16078);
var inst_16083 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16082__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16084 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16082__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16085 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16082__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16148__$1 = (function (){var statearr_16208 = state_16148;
(statearr_16208[(15)] = inst_16083);

(statearr_16208[(18)] = inst_16084);

(statearr_16208[(12)] = inst_16082__$1);

return statearr_16208;
})();
return cljs.core.async.ioc_alts_BANG_(state_16148__$1,(4),inst_16085);
} else {
if((state_val_16149 === (23))){
var inst_16131 = (state_16148[(2)]);
var state_16148__$1 = state_16148;
if(cljs.core.truth_(inst_16131)){
var statearr_16211_18458 = state_16148__$1;
(statearr_16211_18458[(1)] = (24));

} else {
var statearr_16212_18459 = state_16148__$1;
(statearr_16212_18459[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (19))){
var inst_16126 = (state_16148[(2)]);
var state_16148__$1 = state_16148;
var statearr_16214_18462 = state_16148__$1;
(statearr_16214_18462[(2)] = inst_16126);

(statearr_16214_18462[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (11))){
var inst_16092 = (state_16148[(14)]);
var inst_16107 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16092);
var state_16148__$1 = state_16148;
var statearr_16216_18466 = state_16148__$1;
(statearr_16216_18466[(2)] = inst_16107);

(statearr_16216_18466[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (9))){
var inst_16092 = (state_16148[(14)]);
var inst_16083 = (state_16148[(15)]);
var inst_16116 = (state_16148[(19)]);
var inst_16116__$1 = (inst_16083.cljs$core$IFn$_invoke$arity$1 ? inst_16083.cljs$core$IFn$_invoke$arity$1(inst_16092) : inst_16083.call(null,inst_16092));
var state_16148__$1 = (function (){var statearr_16220 = state_16148;
(statearr_16220[(19)] = inst_16116__$1);

return statearr_16220;
})();
if(cljs.core.truth_(inst_16116__$1)){
var statearr_16222_18470 = state_16148__$1;
(statearr_16222_18470[(1)] = (14));

} else {
var statearr_16223_18471 = state_16148__$1;
(statearr_16223_18471[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (5))){
var inst_16096 = (state_16148[(13)]);
var state_16148__$1 = state_16148;
var statearr_16224_18475 = state_16148__$1;
(statearr_16224_18475[(2)] = inst_16096);

(statearr_16224_18475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (14))){
var inst_16116 = (state_16148[(19)]);
var state_16148__$1 = state_16148;
var statearr_16228_18479 = state_16148__$1;
(statearr_16228_18479[(2)] = inst_16116);

(statearr_16228_18479[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (26))){
var inst_16136 = (state_16148[(2)]);
var state_16148__$1 = state_16148;
var statearr_16234_18487 = state_16148__$1;
(statearr_16234_18487[(2)] = inst_16136);

(statearr_16234_18487[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (16))){
var inst_16128 = (state_16148[(2)]);
var state_16148__$1 = state_16148;
if(cljs.core.truth_(inst_16128)){
var statearr_16235_18494 = state_16148__$1;
(statearr_16235_18494[(1)] = (20));

} else {
var statearr_16237_18495 = state_16148__$1;
(statearr_16237_18495[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (10))){
var inst_16143 = (state_16148[(2)]);
var state_16148__$1 = state_16148;
var statearr_16238_18506 = state_16148__$1;
(statearr_16238_18506[(2)] = inst_16143);

(statearr_16238_18506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (18))){
var inst_16120 = (state_16148[(16)]);
var state_16148__$1 = state_16148;
var statearr_16243_18519 = state_16148__$1;
(statearr_16243_18519[(2)] = inst_16120);

(statearr_16243_18519[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (8))){
var inst_16091 = (state_16148[(7)]);
var inst_16105 = (inst_16091 == null);
var state_16148__$1 = state_16148;
if(cljs.core.truth_(inst_16105)){
var statearr_16246_18524 = state_16148__$1;
(statearr_16246_18524[(1)] = (11));

} else {
var statearr_16248_18526 = state_16148__$1;
(statearr_16248_18526[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__14105__auto__ = null;
var cljs$core$async$mix_$_state_machine__14105__auto____0 = (function (){
var statearr_16255 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16255[(0)] = cljs$core$async$mix_$_state_machine__14105__auto__);

(statearr_16255[(1)] = (1));

return statearr_16255;
});
var cljs$core$async$mix_$_state_machine__14105__auto____1 = (function (state_16148){
while(true){
var ret_value__14106__auto__ = (function (){try{while(true){
var result__14108__auto__ = switch__14104__auto__(state_16148);
if(cljs.core.keyword_identical_QMARK_(result__14108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14108__auto__;
}
break;
}
}catch (e16257){var ex__14109__auto__ = e16257;
var statearr_16258_18540 = state_16148;
(statearr_16258_18540[(2)] = ex__14109__auto__);


if(cljs.core.seq((state_16148[(4)]))){
var statearr_16261_18544 = state_16148;
(statearr_16261_18544[(1)] = cljs.core.first((state_16148[(4)])));

} else {
throw ex__14109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18548 = state_16148;
state_16148 = G__18548;
continue;
} else {
return ret_value__14106__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14105__auto__ = function(state_16148){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14105__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14105__auto____1.call(this,state_16148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14105__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14105__auto____0;
cljs$core$async$mix_$_state_machine__14105__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14105__auto____1;
return cljs$core$async$mix_$_state_machine__14105__auto__;
})()
})();
var state__14365__auto__ = (function (){var statearr_16269 = f__14364__auto__();
(statearr_16269[(6)] = c__14363__auto___18405);

return statearr_16269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14365__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_18556 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_18556(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18561 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null,p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_18561(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18568 = (function() {
var G__18569 = null;
var G__18569__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null,p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__18569__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null,p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__18569 = function(p,v){
switch(arguments.length){
case 1:
return G__18569__1.call(this,p);
case 2:
return G__18569__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18569.cljs$core$IFn$_invoke$arity$1 = G__18569__1;
G__18569.cljs$core$IFn$_invoke$arity$2 = G__18569__2;
return G__18569;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16310 = arguments.length;
switch (G__16310) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18568(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18568(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16331 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16332){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16332 = meta16332;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16333,meta16332__$1){
var self__ = this;
var _16333__$1 = this;
return (new cljs.core.async.t_cljs$core$async16331(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16332__$1));
}));

(cljs.core.async.t_cljs$core$async16331.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16333){
var self__ = this;
var _16333__$1 = this;
return self__.meta16332;
}));

(cljs.core.async.t_cljs$core$async16331.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16331.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16331.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16331.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16331.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async16331.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16331.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16331.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16332","meta16332",-967611297,null)], null);
}));

(cljs.core.async.t_cljs$core$async16331.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16331.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16331");

(cljs.core.async.t_cljs$core$async16331.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16331");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16331.
 */
cljs.core.async.__GT_t_cljs$core$async16331 = (function cljs$core$async$__GT_t_cljs$core$async16331(ch,topic_fn,buf_fn,mults,ensure_mult,meta16332){
return (new cljs.core.async.t_cljs$core$async16331(ch,topic_fn,buf_fn,mults,ensure_mult,meta16332));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__16323 = arguments.length;
switch (G__16323) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16317_SHARP_){
if(cljs.core.truth_((p1__16317_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16317_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16317_SHARP_.call(null,topic)))){
return p1__16317_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16317_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async16331(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__14363__auto___18597 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14364__auto__ = (function (){var switch__14104__auto__ = (function (state_16434){
var state_val_16435 = (state_16434[(1)]);
if((state_val_16435 === (7))){
var inst_16429 = (state_16434[(2)]);
var state_16434__$1 = state_16434;
var statearr_16436_18602 = state_16434__$1;
(statearr_16436_18602[(2)] = inst_16429);

(statearr_16436_18602[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16435 === (20))){
var state_16434__$1 = state_16434;
var statearr_16437_18603 = state_16434__$1;
(statearr_16437_18603[(2)] = null);

(statearr_16437_18603[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16435 === (1))){
var state_16434__$1 = state_16434;
var statearr_16440_18604 = state_16434__$1;
(statearr_16440_18604[(2)] = null);

(statearr_16440_18604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16435 === (24))){
var inst_16409 = (state_16434[(7)]);
var inst_16421 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16409);
var state_16434__$1 = state_16434;
var statearr_16444_18605 = state_16434__$1;
(statearr_16444_18605[(2)] = inst_16421);

(statearr_16444_18605[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16435 === (4))){
var inst_16357 = (state_16434[(8)]);
var inst_16357__$1 = (state_16434[(2)]);
var inst_16358 = (inst_16357__$1 == null);
var state_16434__$1 = (function (){var statearr_16449 = state_16434;
(statearr_16449[(8)] = inst_16357__$1);

return statearr_16449;
})();
if(cljs.core.truth_(inst_16358)){
var statearr_16450_18607 = state_16434__$1;
(statearr_16450_18607[(1)] = (5));

} else {
var statearr_16451_18608 = state_16434__$1;
(statearr_16451_18608[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16435 === (15))){
var inst_16403 = (state_16434[(2)]);
var state_16434__$1 = state_16434;
var statearr_16452_18609 = state_16434__$1;
(statearr_16452_18609[(2)] = inst_16403);

(statearr_16452_18609[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16435 === (21))){
var inst_16426 = (state_16434[(2)]);
var state_16434__$1 = (function (){var statearr_16454 = state_16434;
(statearr_16454[(9)] = inst_16426);

return statearr_16454;
})();
var statearr_16455_18610 = state_16434__$1;
(statearr_16455_18610[(2)] = null);

(statearr_16455_18610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16435 === (13))){
var inst_16384 = (state_16434[(10)]);
var inst_16386 = cljs.core.chunked_seq_QMARK_(inst_16384);
var state_16434__$1 = state_16434;
if(inst_16386){
var statearr_16458_18611 = state_16434__$1;
(statearr_16458_18611[(1)] = (16));

} else {
var statearr_16459_18612 = state_16434__$1;
(statearr_16459_18612[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16435 === (22))){
var inst_16417 = (state_16434[(2)]);
var state_16434__$1 = state_16434;
if(cljs.core.truth_(inst_16417)){
var statearr_16464_18613 = state_16434__$1;
(statearr_16464_18613[(1)] = (23));

} else {
var statearr_16466_18614 = state_16434__$1;
(statearr_16466_18614[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16435 === (6))){
var inst_16409 = (state_16434[(7)]);
var inst_16357 = (state_16434[(8)]);
var inst_16411 = (state_16434[(11)]);
var inst_16409__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16357) : topic_fn.call(null,inst_16357));
var inst_16410 = cljs.core.deref(mults);
var inst_16411__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16410,inst_16409__$1);
var state_16434__$1 = (function (){var statearr_16469 = state_16434;
(statearr_16469[(7)] = inst_16409__$1);

(statearr_16469[(11)] = inst_16411__$1);

return statearr_16469;
})();
if(cljs.core.truth_(inst_16411__$1)){
var statearr_16470_18615 = state_16434__$1;
(statearr_16470_18615[(1)] = (19));

} else {
var statearr_16471_18616 = state_16434__$1;
(statearr_16471_18616[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16435 === (25))){
var inst_16423 = (state_16434[(2)]);
var state_16434__$1 = state_16434;
var statearr_16474_18617 = state_16434__$1;
(statearr_16474_18617[(2)] = inst_16423);

(statearr_16474_18617[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16435 === (17))){
var inst_16384 = (state_16434[(10)]);
var inst_16394 = cljs.core.first(inst_16384);
var inst_16395 = cljs.core.async.muxch_STAR_(inst_16394);
var inst_16396 = cljs.core.async.close_BANG_(inst_16395);
var inst_16397 = cljs.core.next(inst_16384);
var inst_16367 = inst_16397;
var inst_16368 = null;
var inst_16369 = (0);
var inst_16370 = (0);
var state_16434__$1 = (function (){var statearr_16476 = state_16434;
(statearr_16476[(12)] = inst_16396);

(statearr_16476[(13)] = inst_16369);

(statearr_16476[(14)] = inst_16368);

(statearr_16476[(15)] = inst_16370);

(statearr_16476[(16)] = inst_16367);

return statearr_16476;
})();
var statearr_16477_18618 = state_16434__$1;
(statearr_16477_18618[(2)] = null);

(statearr_16477_18618[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16435 === (3))){
var inst_16431 = (state_16434[(2)]);
var state_16434__$1 = state_16434;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16434__$1,inst_16431);
} else {
if((state_val_16435 === (12))){
var inst_16405 = (state_16434[(2)]);
var state_16434__$1 = state_16434;
var statearr_16482_18619 = state_16434__$1;
(statearr_16482_18619[(2)] = inst_16405);

(statearr_16482_18619[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16435 === (2))){
var state_16434__$1 = state_16434;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16434__$1,(4),ch);
} else {
if((state_val_16435 === (23))){
var state_16434__$1 = state_16434;
var statearr_16485_18621 = state_16434__$1;
(statearr_16485_18621[(2)] = null);

(statearr_16485_18621[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16435 === (19))){
var inst_16357 = (state_16434[(8)]);
var inst_16411 = (state_16434[(11)]);
var inst_16415 = cljs.core.async.muxch_STAR_(inst_16411);
var state_16434__$1 = state_16434;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16434__$1,(22),inst_16415,inst_16357);
} else {
if((state_val_16435 === (11))){
var inst_16367 = (state_16434[(16)]);
var inst_16384 = (state_16434[(10)]);
var inst_16384__$1 = cljs.core.seq(inst_16367);
var state_16434__$1 = (function (){var statearr_16500 = state_16434;
(statearr_16500[(10)] = inst_16384__$1);

return statearr_16500;
})();
if(inst_16384__$1){
var statearr_16501_18622 = state_16434__$1;
(statearr_16501_18622[(1)] = (13));

} else {
var statearr_16502_18623 = state_16434__$1;
(statearr_16502_18623[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16435 === (9))){
var inst_16407 = (state_16434[(2)]);
var state_16434__$1 = state_16434;
var statearr_16509_18624 = state_16434__$1;
(statearr_16509_18624[(2)] = inst_16407);

(statearr_16509_18624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16435 === (5))){
var inst_16364 = cljs.core.deref(mults);
var inst_16365 = cljs.core.vals(inst_16364);
var inst_16366 = cljs.core.seq(inst_16365);
var inst_16367 = inst_16366;
var inst_16368 = null;
var inst_16369 = (0);
var inst_16370 = (0);
var state_16434__$1 = (function (){var statearr_16523 = state_16434;
(statearr_16523[(13)] = inst_16369);

(statearr_16523[(14)] = inst_16368);

(statearr_16523[(15)] = inst_16370);

(statearr_16523[(16)] = inst_16367);

return statearr_16523;
})();
var statearr_16532_18627 = state_16434__$1;
(statearr_16532_18627[(2)] = null);

(statearr_16532_18627[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16435 === (14))){
var state_16434__$1 = state_16434;
var statearr_16543_18628 = state_16434__$1;
(statearr_16543_18628[(2)] = null);

(statearr_16543_18628[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16435 === (16))){
var inst_16384 = (state_16434[(10)]);
var inst_16388 = cljs.core.chunk_first(inst_16384);
var inst_16389 = cljs.core.chunk_rest(inst_16384);
var inst_16391 = cljs.core.count(inst_16388);
var inst_16367 = inst_16389;
var inst_16368 = inst_16388;
var inst_16369 = inst_16391;
var inst_16370 = (0);
var state_16434__$1 = (function (){var statearr_16548 = state_16434;
(statearr_16548[(13)] = inst_16369);

(statearr_16548[(14)] = inst_16368);

(statearr_16548[(15)] = inst_16370);

(statearr_16548[(16)] = inst_16367);

return statearr_16548;
})();
var statearr_16550_18629 = state_16434__$1;
(statearr_16550_18629[(2)] = null);

(statearr_16550_18629[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16435 === (10))){
var inst_16369 = (state_16434[(13)]);
var inst_16368 = (state_16434[(14)]);
var inst_16370 = (state_16434[(15)]);
var inst_16367 = (state_16434[(16)]);
var inst_16376 = cljs.core._nth(inst_16368,inst_16370);
var inst_16379 = cljs.core.async.muxch_STAR_(inst_16376);
var inst_16380 = cljs.core.async.close_BANG_(inst_16379);
var inst_16381 = (inst_16370 + (1));
var tmp16534 = inst_16369;
var tmp16535 = inst_16368;
var tmp16536 = inst_16367;
var inst_16367__$1 = tmp16536;
var inst_16368__$1 = tmp16535;
var inst_16369__$1 = tmp16534;
var inst_16370__$1 = inst_16381;
var state_16434__$1 = (function (){var statearr_16560 = state_16434;
(statearr_16560[(13)] = inst_16369__$1);

(statearr_16560[(14)] = inst_16368__$1);

(statearr_16560[(15)] = inst_16370__$1);

(statearr_16560[(16)] = inst_16367__$1);

(statearr_16560[(17)] = inst_16380);

return statearr_16560;
})();
var statearr_16562_18634 = state_16434__$1;
(statearr_16562_18634[(2)] = null);

(statearr_16562_18634[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16435 === (18))){
var inst_16400 = (state_16434[(2)]);
var state_16434__$1 = state_16434;
var statearr_16574_18639 = state_16434__$1;
(statearr_16574_18639[(2)] = inst_16400);

(statearr_16574_18639[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16435 === (8))){
var inst_16369 = (state_16434[(13)]);
var inst_16370 = (state_16434[(15)]);
var inst_16373 = (inst_16370 < inst_16369);
var inst_16374 = inst_16373;
var state_16434__$1 = state_16434;
if(cljs.core.truth_(inst_16374)){
var statearr_16580_18640 = state_16434__$1;
(statearr_16580_18640[(1)] = (10));

} else {
var statearr_16581_18641 = state_16434__$1;
(statearr_16581_18641[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14105__auto__ = null;
var cljs$core$async$state_machine__14105__auto____0 = (function (){
var statearr_16588 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16588[(0)] = cljs$core$async$state_machine__14105__auto__);

(statearr_16588[(1)] = (1));

return statearr_16588;
});
var cljs$core$async$state_machine__14105__auto____1 = (function (state_16434){
while(true){
var ret_value__14106__auto__ = (function (){try{while(true){
var result__14108__auto__ = switch__14104__auto__(state_16434);
if(cljs.core.keyword_identical_QMARK_(result__14108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14108__auto__;
}
break;
}
}catch (e16600){var ex__14109__auto__ = e16600;
var statearr_16604_18642 = state_16434;
(statearr_16604_18642[(2)] = ex__14109__auto__);


if(cljs.core.seq((state_16434[(4)]))){
var statearr_16608_18644 = state_16434;
(statearr_16608_18644[(1)] = cljs.core.first((state_16434[(4)])));

} else {
throw ex__14109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18647 = state_16434;
state_16434 = G__18647;
continue;
} else {
return ret_value__14106__auto__;
}
break;
}
});
cljs$core$async$state_machine__14105__auto__ = function(state_16434){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14105__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14105__auto____1.call(this,state_16434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14105__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14105__auto____0;
cljs$core$async$state_machine__14105__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14105__auto____1;
return cljs$core$async$state_machine__14105__auto__;
})()
})();
var state__14365__auto__ = (function (){var statearr_16624 = f__14364__auto__();
(statearr_16624[(6)] = c__14363__auto___18597);

return statearr_16624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14365__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__16631 = arguments.length;
switch (G__16631) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16641 = arguments.length;
switch (G__16641) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__16647 = arguments.length;
switch (G__16647) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__14363__auto___18660 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14364__auto__ = (function (){var switch__14104__auto__ = (function (state_16713){
var state_val_16714 = (state_16713[(1)]);
if((state_val_16714 === (7))){
var state_16713__$1 = state_16713;
var statearr_16721_18661 = state_16713__$1;
(statearr_16721_18661[(2)] = null);

(statearr_16721_18661[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16714 === (1))){
var state_16713__$1 = state_16713;
var statearr_16725_18662 = state_16713__$1;
(statearr_16725_18662[(2)] = null);

(statearr_16725_18662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16714 === (4))){
var inst_16662 = (state_16713[(7)]);
var inst_16663 = (state_16713[(8)]);
var inst_16665 = (inst_16663 < inst_16662);
var state_16713__$1 = state_16713;
if(cljs.core.truth_(inst_16665)){
var statearr_16726_18663 = state_16713__$1;
(statearr_16726_18663[(1)] = (6));

} else {
var statearr_16727_18664 = state_16713__$1;
(statearr_16727_18664[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16714 === (15))){
var inst_16699 = (state_16713[(9)]);
var inst_16704 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16699);
var state_16713__$1 = state_16713;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16713__$1,(17),out,inst_16704);
} else {
if((state_val_16714 === (13))){
var inst_16699 = (state_16713[(9)]);
var inst_16699__$1 = (state_16713[(2)]);
var inst_16700 = cljs.core.some(cljs.core.nil_QMARK_,inst_16699__$1);
var state_16713__$1 = (function (){var statearr_16729 = state_16713;
(statearr_16729[(9)] = inst_16699__$1);

return statearr_16729;
})();
if(cljs.core.truth_(inst_16700)){
var statearr_16730_18667 = state_16713__$1;
(statearr_16730_18667[(1)] = (14));

} else {
var statearr_16732_18668 = state_16713__$1;
(statearr_16732_18668[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16714 === (6))){
var state_16713__$1 = state_16713;
var statearr_16733_18669 = state_16713__$1;
(statearr_16733_18669[(2)] = null);

(statearr_16733_18669[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16714 === (17))){
var inst_16706 = (state_16713[(2)]);
var state_16713__$1 = (function (){var statearr_16736 = state_16713;
(statearr_16736[(10)] = inst_16706);

return statearr_16736;
})();
var statearr_16737_18670 = state_16713__$1;
(statearr_16737_18670[(2)] = null);

(statearr_16737_18670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16714 === (3))){
var inst_16711 = (state_16713[(2)]);
var state_16713__$1 = state_16713;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16713__$1,inst_16711);
} else {
if((state_val_16714 === (12))){
var _ = (function (){var statearr_16740 = state_16713;
(statearr_16740[(4)] = cljs.core.rest((state_16713[(4)])));

return statearr_16740;
})();
var state_16713__$1 = state_16713;
var ex16735 = (state_16713__$1[(2)]);
var statearr_16743_18675 = state_16713__$1;
(statearr_16743_18675[(5)] = ex16735);


if((ex16735 instanceof Object)){
var statearr_16744_18679 = state_16713__$1;
(statearr_16744_18679[(1)] = (11));

(statearr_16744_18679[(5)] = null);

} else {
throw ex16735;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16714 === (2))){
var inst_16660 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16662 = cnt;
var inst_16663 = (0);
var state_16713__$1 = (function (){var statearr_16746 = state_16713;
(statearr_16746[(11)] = inst_16660);

(statearr_16746[(7)] = inst_16662);

(statearr_16746[(8)] = inst_16663);

return statearr_16746;
})();
var statearr_16747_18681 = state_16713__$1;
(statearr_16747_18681[(2)] = null);

(statearr_16747_18681[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16714 === (11))){
var inst_16673 = (state_16713[(2)]);
var inst_16674 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16713__$1 = (function (){var statearr_16748 = state_16713;
(statearr_16748[(12)] = inst_16673);

return statearr_16748;
})();
var statearr_16750_18682 = state_16713__$1;
(statearr_16750_18682[(2)] = inst_16674);

(statearr_16750_18682[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16714 === (9))){
var inst_16663 = (state_16713[(8)]);
var _ = (function (){var statearr_16752 = state_16713;
(statearr_16752[(4)] = cljs.core.cons((12),(state_16713[(4)])));

return statearr_16752;
})();
var inst_16683 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16663) : chs__$1.call(null,inst_16663));
var inst_16684 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16663) : done.call(null,inst_16663));
var inst_16685 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16683,inst_16684);
var ___$1 = (function (){var statearr_16753 = state_16713;
(statearr_16753[(4)] = cljs.core.rest((state_16713[(4)])));

return statearr_16753;
})();
var state_16713__$1 = state_16713;
var statearr_16754_18684 = state_16713__$1;
(statearr_16754_18684[(2)] = inst_16685);

(statearr_16754_18684[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16714 === (5))){
var inst_16697 = (state_16713[(2)]);
var state_16713__$1 = (function (){var statearr_16761 = state_16713;
(statearr_16761[(13)] = inst_16697);

return statearr_16761;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16713__$1,(13),dchan);
} else {
if((state_val_16714 === (14))){
var inst_16702 = cljs.core.async.close_BANG_(out);
var state_16713__$1 = state_16713;
var statearr_16763_18685 = state_16713__$1;
(statearr_16763_18685[(2)] = inst_16702);

(statearr_16763_18685[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16714 === (16))){
var inst_16709 = (state_16713[(2)]);
var state_16713__$1 = state_16713;
var statearr_16767_18686 = state_16713__$1;
(statearr_16767_18686[(2)] = inst_16709);

(statearr_16767_18686[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16714 === (10))){
var inst_16663 = (state_16713[(8)]);
var inst_16688 = (state_16713[(2)]);
var inst_16691 = (inst_16663 + (1));
var inst_16663__$1 = inst_16691;
var state_16713__$1 = (function (){var statearr_16770 = state_16713;
(statearr_16770[(14)] = inst_16688);

(statearr_16770[(8)] = inst_16663__$1);

return statearr_16770;
})();
var statearr_16771_18693 = state_16713__$1;
(statearr_16771_18693[(2)] = null);

(statearr_16771_18693[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16714 === (8))){
var inst_16695 = (state_16713[(2)]);
var state_16713__$1 = state_16713;
var statearr_16772_18694 = state_16713__$1;
(statearr_16772_18694[(2)] = inst_16695);

(statearr_16772_18694[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14105__auto__ = null;
var cljs$core$async$state_machine__14105__auto____0 = (function (){
var statearr_16775 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16775[(0)] = cljs$core$async$state_machine__14105__auto__);

(statearr_16775[(1)] = (1));

return statearr_16775;
});
var cljs$core$async$state_machine__14105__auto____1 = (function (state_16713){
while(true){
var ret_value__14106__auto__ = (function (){try{while(true){
var result__14108__auto__ = switch__14104__auto__(state_16713);
if(cljs.core.keyword_identical_QMARK_(result__14108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14108__auto__;
}
break;
}
}catch (e16776){var ex__14109__auto__ = e16776;
var statearr_16777_18695 = state_16713;
(statearr_16777_18695[(2)] = ex__14109__auto__);


if(cljs.core.seq((state_16713[(4)]))){
var statearr_16783_18696 = state_16713;
(statearr_16783_18696[(1)] = cljs.core.first((state_16713[(4)])));

} else {
throw ex__14109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18697 = state_16713;
state_16713 = G__18697;
continue;
} else {
return ret_value__14106__auto__;
}
break;
}
});
cljs$core$async$state_machine__14105__auto__ = function(state_16713){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14105__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14105__auto____1.call(this,state_16713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14105__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14105__auto____0;
cljs$core$async$state_machine__14105__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14105__auto____1;
return cljs$core$async$state_machine__14105__auto__;
})()
})();
var state__14365__auto__ = (function (){var statearr_16787 = f__14364__auto__();
(statearr_16787[(6)] = c__14363__auto___18660);

return statearr_16787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14365__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__16819 = arguments.length;
switch (G__16819) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14363__auto___18699 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14364__auto__ = (function (){var switch__14104__auto__ = (function (state_16861){
var state_val_16863 = (state_16861[(1)]);
if((state_val_16863 === (7))){
var inst_16835 = (state_16861[(7)]);
var inst_16836 = (state_16861[(8)]);
var inst_16835__$1 = (state_16861[(2)]);
var inst_16836__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16835__$1,(0),null);
var inst_16837 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16835__$1,(1),null);
var inst_16838 = (inst_16836__$1 == null);
var state_16861__$1 = (function (){var statearr_16871 = state_16861;
(statearr_16871[(7)] = inst_16835__$1);

(statearr_16871[(8)] = inst_16836__$1);

(statearr_16871[(9)] = inst_16837);

return statearr_16871;
})();
if(cljs.core.truth_(inst_16838)){
var statearr_16872_18704 = state_16861__$1;
(statearr_16872_18704[(1)] = (8));

} else {
var statearr_16878_18705 = state_16861__$1;
(statearr_16878_18705[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16863 === (1))){
var inst_16825 = cljs.core.vec(chs);
var inst_16826 = inst_16825;
var state_16861__$1 = (function (){var statearr_16879 = state_16861;
(statearr_16879[(10)] = inst_16826);

return statearr_16879;
})();
var statearr_16880_18706 = state_16861__$1;
(statearr_16880_18706[(2)] = null);

(statearr_16880_18706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16863 === (4))){
var inst_16826 = (state_16861[(10)]);
var state_16861__$1 = state_16861;
return cljs.core.async.ioc_alts_BANG_(state_16861__$1,(7),inst_16826);
} else {
if((state_val_16863 === (6))){
var inst_16854 = (state_16861[(2)]);
var state_16861__$1 = state_16861;
var statearr_16881_18711 = state_16861__$1;
(statearr_16881_18711[(2)] = inst_16854);

(statearr_16881_18711[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16863 === (3))){
var inst_16856 = (state_16861[(2)]);
var state_16861__$1 = state_16861;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16861__$1,inst_16856);
} else {
if((state_val_16863 === (2))){
var inst_16826 = (state_16861[(10)]);
var inst_16828 = cljs.core.count(inst_16826);
var inst_16829 = (inst_16828 > (0));
var state_16861__$1 = state_16861;
if(cljs.core.truth_(inst_16829)){
var statearr_16883_18716 = state_16861__$1;
(statearr_16883_18716[(1)] = (4));

} else {
var statearr_16884_18717 = state_16861__$1;
(statearr_16884_18717[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16863 === (11))){
var inst_16826 = (state_16861[(10)]);
var inst_16847 = (state_16861[(2)]);
var tmp16882 = inst_16826;
var inst_16826__$1 = tmp16882;
var state_16861__$1 = (function (){var statearr_16888 = state_16861;
(statearr_16888[(11)] = inst_16847);

(statearr_16888[(10)] = inst_16826__$1);

return statearr_16888;
})();
var statearr_16889_18721 = state_16861__$1;
(statearr_16889_18721[(2)] = null);

(statearr_16889_18721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16863 === (9))){
var inst_16836 = (state_16861[(8)]);
var state_16861__$1 = state_16861;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16861__$1,(11),out,inst_16836);
} else {
if((state_val_16863 === (5))){
var inst_16852 = cljs.core.async.close_BANG_(out);
var state_16861__$1 = state_16861;
var statearr_16893_18722 = state_16861__$1;
(statearr_16893_18722[(2)] = inst_16852);

(statearr_16893_18722[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16863 === (10))){
var inst_16850 = (state_16861[(2)]);
var state_16861__$1 = state_16861;
var statearr_16894_18723 = state_16861__$1;
(statearr_16894_18723[(2)] = inst_16850);

(statearr_16894_18723[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16863 === (8))){
var inst_16835 = (state_16861[(7)]);
var inst_16826 = (state_16861[(10)]);
var inst_16836 = (state_16861[(8)]);
var inst_16837 = (state_16861[(9)]);
var inst_16841 = (function (){var cs = inst_16826;
var vec__16831 = inst_16835;
var v = inst_16836;
var c = inst_16837;
return (function (p1__16793_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16793_SHARP_);
});
})();
var inst_16842 = cljs.core.filterv(inst_16841,inst_16826);
var inst_16826__$1 = inst_16842;
var state_16861__$1 = (function (){var statearr_16895 = state_16861;
(statearr_16895[(10)] = inst_16826__$1);

return statearr_16895;
})();
var statearr_16896_18729 = state_16861__$1;
(statearr_16896_18729[(2)] = null);

(statearr_16896_18729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14105__auto__ = null;
var cljs$core$async$state_machine__14105__auto____0 = (function (){
var statearr_16898 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16898[(0)] = cljs$core$async$state_machine__14105__auto__);

(statearr_16898[(1)] = (1));

return statearr_16898;
});
var cljs$core$async$state_machine__14105__auto____1 = (function (state_16861){
while(true){
var ret_value__14106__auto__ = (function (){try{while(true){
var result__14108__auto__ = switch__14104__auto__(state_16861);
if(cljs.core.keyword_identical_QMARK_(result__14108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14108__auto__;
}
break;
}
}catch (e16899){var ex__14109__auto__ = e16899;
var statearr_16900_18730 = state_16861;
(statearr_16900_18730[(2)] = ex__14109__auto__);


if(cljs.core.seq((state_16861[(4)]))){
var statearr_16901_18731 = state_16861;
(statearr_16901_18731[(1)] = cljs.core.first((state_16861[(4)])));

} else {
throw ex__14109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18732 = state_16861;
state_16861 = G__18732;
continue;
} else {
return ret_value__14106__auto__;
}
break;
}
});
cljs$core$async$state_machine__14105__auto__ = function(state_16861){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14105__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14105__auto____1.call(this,state_16861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14105__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14105__auto____0;
cljs$core$async$state_machine__14105__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14105__auto____1;
return cljs$core$async$state_machine__14105__auto__;
})()
})();
var state__14365__auto__ = (function (){var statearr_16902 = f__14364__auto__();
(statearr_16902[(6)] = c__14363__auto___18699);

return statearr_16902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14365__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__16922 = arguments.length;
switch (G__16922) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14363__auto___18740 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14364__auto__ = (function (){var switch__14104__auto__ = (function (state_16960){
var state_val_16961 = (state_16960[(1)]);
if((state_val_16961 === (7))){
var inst_16935 = (state_16960[(7)]);
var inst_16935__$1 = (state_16960[(2)]);
var inst_16936 = (inst_16935__$1 == null);
var inst_16937 = cljs.core.not(inst_16936);
var state_16960__$1 = (function (){var statearr_16967 = state_16960;
(statearr_16967[(7)] = inst_16935__$1);

return statearr_16967;
})();
if(inst_16937){
var statearr_16968_18747 = state_16960__$1;
(statearr_16968_18747[(1)] = (8));

} else {
var statearr_16969_18748 = state_16960__$1;
(statearr_16969_18748[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16961 === (1))){
var inst_16930 = (0);
var state_16960__$1 = (function (){var statearr_16970 = state_16960;
(statearr_16970[(8)] = inst_16930);

return statearr_16970;
})();
var statearr_16971_18750 = state_16960__$1;
(statearr_16971_18750[(2)] = null);

(statearr_16971_18750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16961 === (4))){
var state_16960__$1 = state_16960;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16960__$1,(7),ch);
} else {
if((state_val_16961 === (6))){
var inst_16951 = (state_16960[(2)]);
var state_16960__$1 = state_16960;
var statearr_16972_18757 = state_16960__$1;
(statearr_16972_18757[(2)] = inst_16951);

(statearr_16972_18757[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16961 === (3))){
var inst_16954 = (state_16960[(2)]);
var inst_16957 = cljs.core.async.close_BANG_(out);
var state_16960__$1 = (function (){var statearr_16973 = state_16960;
(statearr_16973[(9)] = inst_16954);

return statearr_16973;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16960__$1,inst_16957);
} else {
if((state_val_16961 === (2))){
var inst_16930 = (state_16960[(8)]);
var inst_16932 = (inst_16930 < n);
var state_16960__$1 = state_16960;
if(cljs.core.truth_(inst_16932)){
var statearr_16974_18761 = state_16960__$1;
(statearr_16974_18761[(1)] = (4));

} else {
var statearr_16975_18762 = state_16960__$1;
(statearr_16975_18762[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16961 === (11))){
var inst_16930 = (state_16960[(8)]);
var inst_16940 = (state_16960[(2)]);
var inst_16941 = (inst_16930 + (1));
var inst_16930__$1 = inst_16941;
var state_16960__$1 = (function (){var statearr_16976 = state_16960;
(statearr_16976[(8)] = inst_16930__$1);

(statearr_16976[(10)] = inst_16940);

return statearr_16976;
})();
var statearr_16977_18764 = state_16960__$1;
(statearr_16977_18764[(2)] = null);

(statearr_16977_18764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16961 === (9))){
var state_16960__$1 = state_16960;
var statearr_16982_18765 = state_16960__$1;
(statearr_16982_18765[(2)] = null);

(statearr_16982_18765[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16961 === (5))){
var state_16960__$1 = state_16960;
var statearr_16986_18766 = state_16960__$1;
(statearr_16986_18766[(2)] = null);

(statearr_16986_18766[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16961 === (10))){
var inst_16945 = (state_16960[(2)]);
var state_16960__$1 = state_16960;
var statearr_16987_18779 = state_16960__$1;
(statearr_16987_18779[(2)] = inst_16945);

(statearr_16987_18779[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16961 === (8))){
var inst_16935 = (state_16960[(7)]);
var state_16960__$1 = state_16960;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16960__$1,(11),out,inst_16935);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14105__auto__ = null;
var cljs$core$async$state_machine__14105__auto____0 = (function (){
var statearr_16991 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16991[(0)] = cljs$core$async$state_machine__14105__auto__);

(statearr_16991[(1)] = (1));

return statearr_16991;
});
var cljs$core$async$state_machine__14105__auto____1 = (function (state_16960){
while(true){
var ret_value__14106__auto__ = (function (){try{while(true){
var result__14108__auto__ = switch__14104__auto__(state_16960);
if(cljs.core.keyword_identical_QMARK_(result__14108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14108__auto__;
}
break;
}
}catch (e16992){var ex__14109__auto__ = e16992;
var statearr_16993_18784 = state_16960;
(statearr_16993_18784[(2)] = ex__14109__auto__);


if(cljs.core.seq((state_16960[(4)]))){
var statearr_16995_18789 = state_16960;
(statearr_16995_18789[(1)] = cljs.core.first((state_16960[(4)])));

} else {
throw ex__14109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18791 = state_16960;
state_16960 = G__18791;
continue;
} else {
return ret_value__14106__auto__;
}
break;
}
});
cljs$core$async$state_machine__14105__auto__ = function(state_16960){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14105__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14105__auto____1.call(this,state_16960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14105__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14105__auto____0;
cljs$core$async$state_machine__14105__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14105__auto____1;
return cljs$core$async$state_machine__14105__auto__;
})()
})();
var state__14365__auto__ = (function (){var statearr_16999 = f__14364__auto__();
(statearr_16999[(6)] = c__14363__auto___18740);

return statearr_16999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14365__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17009 = (function (f,ch,meta17006,_,fn1,meta17010){
this.f = f;
this.ch = ch;
this.meta17006 = meta17006;
this._ = _;
this.fn1 = fn1;
this.meta17010 = meta17010;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17009.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17011,meta17010__$1){
var self__ = this;
var _17011__$1 = this;
return (new cljs.core.async.t_cljs$core$async17009(self__.f,self__.ch,self__.meta17006,self__._,self__.fn1,meta17010__$1));
}));

(cljs.core.async.t_cljs$core$async17009.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17011){
var self__ = this;
var _17011__$1 = this;
return self__.meta17010;
}));

(cljs.core.async.t_cljs$core$async17009.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17009.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async17009.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17009.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__17000_SHARP_){
var G__17014 = (((p1__17000_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17000_SHARP_) : self__.f.call(null,p1__17000_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17014) : f1.call(null,G__17014));
});
}));

(cljs.core.async.t_cljs$core$async17009.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17006","meta17006",-1400682173,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17005","cljs.core.async/t_cljs$core$async17005",-1480651911,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17010","meta17010",169498847,null)], null);
}));

(cljs.core.async.t_cljs$core$async17009.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17009.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17009");

(cljs.core.async.t_cljs$core$async17009.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17009");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17009.
 */
cljs.core.async.__GT_t_cljs$core$async17009 = (function cljs$core$async$__GT_t_cljs$core$async17009(f,ch,meta17006,_,fn1,meta17010){
return (new cljs.core.async.t_cljs$core$async17009(f,ch,meta17006,_,fn1,meta17010));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17005 = (function (f,ch,meta17006){
this.f = f;
this.ch = ch;
this.meta17006 = meta17006;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17005.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17007,meta17006__$1){
var self__ = this;
var _17007__$1 = this;
return (new cljs.core.async.t_cljs$core$async17005(self__.f,self__.ch,meta17006__$1));
}));

(cljs.core.async.t_cljs$core$async17005.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17007){
var self__ = this;
var _17007__$1 = this;
return self__.meta17006;
}));

(cljs.core.async.t_cljs$core$async17005.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17005.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17005.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17005.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17005.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async17009(self__.f,self__.ch,self__.meta17006,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17022 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17022) : self__.f.call(null,G__17022));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async17005.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17005.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async17005.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17006","meta17006",-1400682173,null)], null);
}));

(cljs.core.async.t_cljs$core$async17005.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17005.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17005");

(cljs.core.async.t_cljs$core$async17005.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17005");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17005.
 */
cljs.core.async.__GT_t_cljs$core$async17005 = (function cljs$core$async$__GT_t_cljs$core$async17005(f,ch,meta17006){
return (new cljs.core.async.t_cljs$core$async17005(f,ch,meta17006));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17005(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17026 = (function (f,ch,meta17027){
this.f = f;
this.ch = ch;
this.meta17027 = meta17027;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17026.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17028,meta17027__$1){
var self__ = this;
var _17028__$1 = this;
return (new cljs.core.async.t_cljs$core$async17026(self__.f,self__.ch,meta17027__$1));
}));

(cljs.core.async.t_cljs$core$async17026.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17028){
var self__ = this;
var _17028__$1 = this;
return self__.meta17027;
}));

(cljs.core.async.t_cljs$core$async17026.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17026.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17026.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17026.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17026.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17026.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async17026.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17027","meta17027",23342952,null)], null);
}));

(cljs.core.async.t_cljs$core$async17026.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17026.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17026");

(cljs.core.async.t_cljs$core$async17026.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17026");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17026.
 */
cljs.core.async.__GT_t_cljs$core$async17026 = (function cljs$core$async$__GT_t_cljs$core$async17026(f,ch,meta17027){
return (new cljs.core.async.t_cljs$core$async17026(f,ch,meta17027));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17026(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17048 = (function (p,ch,meta17049){
this.p = p;
this.ch = ch;
this.meta17049 = meta17049;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17048.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17050,meta17049__$1){
var self__ = this;
var _17050__$1 = this;
return (new cljs.core.async.t_cljs$core$async17048(self__.p,self__.ch,meta17049__$1));
}));

(cljs.core.async.t_cljs$core$async17048.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17050){
var self__ = this;
var _17050__$1 = this;
return self__.meta17049;
}));

(cljs.core.async.t_cljs$core$async17048.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17048.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17048.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17048.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17048.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17048.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17048.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async17048.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17049","meta17049",602690547,null)], null);
}));

(cljs.core.async.t_cljs$core$async17048.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17048.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17048");

(cljs.core.async.t_cljs$core$async17048.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17048");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17048.
 */
cljs.core.async.__GT_t_cljs$core$async17048 = (function cljs$core$async$__GT_t_cljs$core$async17048(p,ch,meta17049){
return (new cljs.core.async.t_cljs$core$async17048(p,ch,meta17049));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async17048(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__17060 = arguments.length;
switch (G__17060) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14363__auto___18820 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14364__auto__ = (function (){var switch__14104__auto__ = (function (state_17087){
var state_val_17088 = (state_17087[(1)]);
if((state_val_17088 === (7))){
var inst_17083 = (state_17087[(2)]);
var state_17087__$1 = state_17087;
var statearr_17089_18821 = state_17087__$1;
(statearr_17089_18821[(2)] = inst_17083);

(statearr_17089_18821[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17088 === (1))){
var state_17087__$1 = state_17087;
var statearr_17090_18822 = state_17087__$1;
(statearr_17090_18822[(2)] = null);

(statearr_17090_18822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17088 === (4))){
var inst_17067 = (state_17087[(7)]);
var inst_17067__$1 = (state_17087[(2)]);
var inst_17070 = (inst_17067__$1 == null);
var state_17087__$1 = (function (){var statearr_17091 = state_17087;
(statearr_17091[(7)] = inst_17067__$1);

return statearr_17091;
})();
if(cljs.core.truth_(inst_17070)){
var statearr_17092_18824 = state_17087__$1;
(statearr_17092_18824[(1)] = (5));

} else {
var statearr_17093_18825 = state_17087__$1;
(statearr_17093_18825[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17088 === (6))){
var inst_17067 = (state_17087[(7)]);
var inst_17074 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17067) : p.call(null,inst_17067));
var state_17087__$1 = state_17087;
if(cljs.core.truth_(inst_17074)){
var statearr_17095_18826 = state_17087__$1;
(statearr_17095_18826[(1)] = (8));

} else {
var statearr_17096_18827 = state_17087__$1;
(statearr_17096_18827[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17088 === (3))){
var inst_17085 = (state_17087[(2)]);
var state_17087__$1 = state_17087;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17087__$1,inst_17085);
} else {
if((state_val_17088 === (2))){
var state_17087__$1 = state_17087;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17087__$1,(4),ch);
} else {
if((state_val_17088 === (11))){
var inst_17077 = (state_17087[(2)]);
var state_17087__$1 = state_17087;
var statearr_17098_18829 = state_17087__$1;
(statearr_17098_18829[(2)] = inst_17077);

(statearr_17098_18829[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17088 === (9))){
var state_17087__$1 = state_17087;
var statearr_17100_18836 = state_17087__$1;
(statearr_17100_18836[(2)] = null);

(statearr_17100_18836[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17088 === (5))){
var inst_17072 = cljs.core.async.close_BANG_(out);
var state_17087__$1 = state_17087;
var statearr_17102_18837 = state_17087__$1;
(statearr_17102_18837[(2)] = inst_17072);

(statearr_17102_18837[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17088 === (10))){
var inst_17080 = (state_17087[(2)]);
var state_17087__$1 = (function (){var statearr_17106 = state_17087;
(statearr_17106[(8)] = inst_17080);

return statearr_17106;
})();
var statearr_17107_18841 = state_17087__$1;
(statearr_17107_18841[(2)] = null);

(statearr_17107_18841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17088 === (8))){
var inst_17067 = (state_17087[(7)]);
var state_17087__$1 = state_17087;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17087__$1,(11),out,inst_17067);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14105__auto__ = null;
var cljs$core$async$state_machine__14105__auto____0 = (function (){
var statearr_17118 = [null,null,null,null,null,null,null,null,null];
(statearr_17118[(0)] = cljs$core$async$state_machine__14105__auto__);

(statearr_17118[(1)] = (1));

return statearr_17118;
});
var cljs$core$async$state_machine__14105__auto____1 = (function (state_17087){
while(true){
var ret_value__14106__auto__ = (function (){try{while(true){
var result__14108__auto__ = switch__14104__auto__(state_17087);
if(cljs.core.keyword_identical_QMARK_(result__14108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14108__auto__;
}
break;
}
}catch (e17119){var ex__14109__auto__ = e17119;
var statearr_17120_18844 = state_17087;
(statearr_17120_18844[(2)] = ex__14109__auto__);


if(cljs.core.seq((state_17087[(4)]))){
var statearr_17121_18845 = state_17087;
(statearr_17121_18845[(1)] = cljs.core.first((state_17087[(4)])));

} else {
throw ex__14109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18853 = state_17087;
state_17087 = G__18853;
continue;
} else {
return ret_value__14106__auto__;
}
break;
}
});
cljs$core$async$state_machine__14105__auto__ = function(state_17087){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14105__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14105__auto____1.call(this,state_17087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14105__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14105__auto____0;
cljs$core$async$state_machine__14105__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14105__auto____1;
return cljs$core$async$state_machine__14105__auto__;
})()
})();
var state__14365__auto__ = (function (){var statearr_17125 = f__14364__auto__();
(statearr_17125[(6)] = c__14363__auto___18820);

return statearr_17125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14365__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17127 = arguments.length;
switch (G__17127) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14363__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14364__auto__ = (function (){var switch__14104__auto__ = (function (state_17198){
var state_val_17199 = (state_17198[(1)]);
if((state_val_17199 === (7))){
var inst_17193 = (state_17198[(2)]);
var state_17198__$1 = state_17198;
var statearr_17203_18864 = state_17198__$1;
(statearr_17203_18864[(2)] = inst_17193);

(statearr_17203_18864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17199 === (20))){
var inst_17162 = (state_17198[(7)]);
var inst_17174 = (state_17198[(2)]);
var inst_17175 = cljs.core.next(inst_17162);
var inst_17146 = inst_17175;
var inst_17147 = null;
var inst_17148 = (0);
var inst_17149 = (0);
var state_17198__$1 = (function (){var statearr_17205 = state_17198;
(statearr_17205[(8)] = inst_17147);

(statearr_17205[(9)] = inst_17146);

(statearr_17205[(10)] = inst_17174);

(statearr_17205[(11)] = inst_17148);

(statearr_17205[(12)] = inst_17149);

return statearr_17205;
})();
var statearr_17208_18865 = state_17198__$1;
(statearr_17208_18865[(2)] = null);

(statearr_17208_18865[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17199 === (1))){
var state_17198__$1 = state_17198;
var statearr_17209_18866 = state_17198__$1;
(statearr_17209_18866[(2)] = null);

(statearr_17209_18866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17199 === (4))){
var inst_17131 = (state_17198[(13)]);
var inst_17131__$1 = (state_17198[(2)]);
var inst_17132 = (inst_17131__$1 == null);
var state_17198__$1 = (function (){var statearr_17210 = state_17198;
(statearr_17210[(13)] = inst_17131__$1);

return statearr_17210;
})();
if(cljs.core.truth_(inst_17132)){
var statearr_17211_18868 = state_17198__$1;
(statearr_17211_18868[(1)] = (5));

} else {
var statearr_17212_18869 = state_17198__$1;
(statearr_17212_18869[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17199 === (15))){
var state_17198__$1 = state_17198;
var statearr_17216_18875 = state_17198__$1;
(statearr_17216_18875[(2)] = null);

(statearr_17216_18875[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17199 === (21))){
var state_17198__$1 = state_17198;
var statearr_17217_18877 = state_17198__$1;
(statearr_17217_18877[(2)] = null);

(statearr_17217_18877[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17199 === (13))){
var inst_17147 = (state_17198[(8)]);
var inst_17146 = (state_17198[(9)]);
var inst_17148 = (state_17198[(11)]);
var inst_17149 = (state_17198[(12)]);
var inst_17157 = (state_17198[(2)]);
var inst_17158 = (inst_17149 + (1));
var tmp17213 = inst_17147;
var tmp17214 = inst_17146;
var tmp17215 = inst_17148;
var inst_17146__$1 = tmp17214;
var inst_17147__$1 = tmp17213;
var inst_17148__$1 = tmp17215;
var inst_17149__$1 = inst_17158;
var state_17198__$1 = (function (){var statearr_17218 = state_17198;
(statearr_17218[(8)] = inst_17147__$1);

(statearr_17218[(14)] = inst_17157);

(statearr_17218[(9)] = inst_17146__$1);

(statearr_17218[(11)] = inst_17148__$1);

(statearr_17218[(12)] = inst_17149__$1);

return statearr_17218;
})();
var statearr_17219_18881 = state_17198__$1;
(statearr_17219_18881[(2)] = null);

(statearr_17219_18881[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17199 === (22))){
var state_17198__$1 = state_17198;
var statearr_17220_18882 = state_17198__$1;
(statearr_17220_18882[(2)] = null);

(statearr_17220_18882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17199 === (6))){
var inst_17131 = (state_17198[(13)]);
var inst_17141 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17131) : f.call(null,inst_17131));
var inst_17142 = cljs.core.seq(inst_17141);
var inst_17146 = inst_17142;
var inst_17147 = null;
var inst_17148 = (0);
var inst_17149 = (0);
var state_17198__$1 = (function (){var statearr_17222 = state_17198;
(statearr_17222[(8)] = inst_17147);

(statearr_17222[(9)] = inst_17146);

(statearr_17222[(11)] = inst_17148);

(statearr_17222[(12)] = inst_17149);

return statearr_17222;
})();
var statearr_17223_18884 = state_17198__$1;
(statearr_17223_18884[(2)] = null);

(statearr_17223_18884[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17199 === (17))){
var inst_17162 = (state_17198[(7)]);
var inst_17166 = cljs.core.chunk_first(inst_17162);
var inst_17168 = cljs.core.chunk_rest(inst_17162);
var inst_17169 = cljs.core.count(inst_17166);
var inst_17146 = inst_17168;
var inst_17147 = inst_17166;
var inst_17148 = inst_17169;
var inst_17149 = (0);
var state_17198__$1 = (function (){var statearr_17228 = state_17198;
(statearr_17228[(8)] = inst_17147);

(statearr_17228[(9)] = inst_17146);

(statearr_17228[(11)] = inst_17148);

(statearr_17228[(12)] = inst_17149);

return statearr_17228;
})();
var statearr_17229_18888 = state_17198__$1;
(statearr_17229_18888[(2)] = null);

(statearr_17229_18888[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17199 === (3))){
var inst_17195 = (state_17198[(2)]);
var state_17198__$1 = state_17198;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17198__$1,inst_17195);
} else {
if((state_val_17199 === (12))){
var inst_17183 = (state_17198[(2)]);
var state_17198__$1 = state_17198;
var statearr_17230_18891 = state_17198__$1;
(statearr_17230_18891[(2)] = inst_17183);

(statearr_17230_18891[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17199 === (2))){
var state_17198__$1 = state_17198;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17198__$1,(4),in$);
} else {
if((state_val_17199 === (23))){
var inst_17191 = (state_17198[(2)]);
var state_17198__$1 = state_17198;
var statearr_17231_18893 = state_17198__$1;
(statearr_17231_18893[(2)] = inst_17191);

(statearr_17231_18893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17199 === (19))){
var inst_17178 = (state_17198[(2)]);
var state_17198__$1 = state_17198;
var statearr_17232_18894 = state_17198__$1;
(statearr_17232_18894[(2)] = inst_17178);

(statearr_17232_18894[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17199 === (11))){
var inst_17162 = (state_17198[(7)]);
var inst_17146 = (state_17198[(9)]);
var inst_17162__$1 = cljs.core.seq(inst_17146);
var state_17198__$1 = (function (){var statearr_17235 = state_17198;
(statearr_17235[(7)] = inst_17162__$1);

return statearr_17235;
})();
if(inst_17162__$1){
var statearr_17239_18896 = state_17198__$1;
(statearr_17239_18896[(1)] = (14));

} else {
var statearr_17241_18897 = state_17198__$1;
(statearr_17241_18897[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17199 === (9))){
var inst_17185 = (state_17198[(2)]);
var inst_17186 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17198__$1 = (function (){var statearr_17242 = state_17198;
(statearr_17242[(15)] = inst_17185);

return statearr_17242;
})();
if(cljs.core.truth_(inst_17186)){
var statearr_17243_18900 = state_17198__$1;
(statearr_17243_18900[(1)] = (21));

} else {
var statearr_17244_18901 = state_17198__$1;
(statearr_17244_18901[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17199 === (5))){
var inst_17135 = cljs.core.async.close_BANG_(out);
var state_17198__$1 = state_17198;
var statearr_17246_18905 = state_17198__$1;
(statearr_17246_18905[(2)] = inst_17135);

(statearr_17246_18905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17199 === (14))){
var inst_17162 = (state_17198[(7)]);
var inst_17164 = cljs.core.chunked_seq_QMARK_(inst_17162);
var state_17198__$1 = state_17198;
if(inst_17164){
var statearr_17247_18907 = state_17198__$1;
(statearr_17247_18907[(1)] = (17));

} else {
var statearr_17248_18908 = state_17198__$1;
(statearr_17248_18908[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17199 === (16))){
var inst_17181 = (state_17198[(2)]);
var state_17198__$1 = state_17198;
var statearr_17249_18909 = state_17198__$1;
(statearr_17249_18909[(2)] = inst_17181);

(statearr_17249_18909[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17199 === (10))){
var inst_17147 = (state_17198[(8)]);
var inst_17149 = (state_17198[(12)]);
var inst_17155 = cljs.core._nth(inst_17147,inst_17149);
var state_17198__$1 = state_17198;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17198__$1,(13),out,inst_17155);
} else {
if((state_val_17199 === (18))){
var inst_17162 = (state_17198[(7)]);
var inst_17172 = cljs.core.first(inst_17162);
var state_17198__$1 = state_17198;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17198__$1,(20),out,inst_17172);
} else {
if((state_val_17199 === (8))){
var inst_17148 = (state_17198[(11)]);
var inst_17149 = (state_17198[(12)]);
var inst_17151 = (inst_17149 < inst_17148);
var inst_17152 = inst_17151;
var state_17198__$1 = state_17198;
if(cljs.core.truth_(inst_17152)){
var statearr_17252_18915 = state_17198__$1;
(statearr_17252_18915[(1)] = (10));

} else {
var statearr_17253_18916 = state_17198__$1;
(statearr_17253_18916[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14105__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14105__auto____0 = (function (){
var statearr_17254 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17254[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14105__auto__);

(statearr_17254[(1)] = (1));

return statearr_17254;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14105__auto____1 = (function (state_17198){
while(true){
var ret_value__14106__auto__ = (function (){try{while(true){
var result__14108__auto__ = switch__14104__auto__(state_17198);
if(cljs.core.keyword_identical_QMARK_(result__14108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14108__auto__;
}
break;
}
}catch (e17256){var ex__14109__auto__ = e17256;
var statearr_17257_18924 = state_17198;
(statearr_17257_18924[(2)] = ex__14109__auto__);


if(cljs.core.seq((state_17198[(4)]))){
var statearr_17258_18925 = state_17198;
(statearr_17258_18925[(1)] = cljs.core.first((state_17198[(4)])));

} else {
throw ex__14109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18927 = state_17198;
state_17198 = G__18927;
continue;
} else {
return ret_value__14106__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14105__auto__ = function(state_17198){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14105__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14105__auto____1.call(this,state_17198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14105__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14105__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14105__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14105__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14105__auto__;
})()
})();
var state__14365__auto__ = (function (){var statearr_17263 = f__14364__auto__();
(statearr_17263[(6)] = c__14363__auto__);

return statearr_17263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14365__auto__);
}));

return c__14363__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17265 = arguments.length;
switch (G__17265) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__17275 = arguments.length;
switch (G__17275) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__17283 = arguments.length;
switch (G__17283) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14363__auto___18937 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14364__auto__ = (function (){var switch__14104__auto__ = (function (state_17316){
var state_val_17317 = (state_17316[(1)]);
if((state_val_17317 === (7))){
var inst_17308 = (state_17316[(2)]);
var state_17316__$1 = state_17316;
var statearr_17320_18944 = state_17316__$1;
(statearr_17320_18944[(2)] = inst_17308);

(statearr_17320_18944[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17317 === (1))){
var inst_17288 = null;
var state_17316__$1 = (function (){var statearr_17323 = state_17316;
(statearr_17323[(7)] = inst_17288);

return statearr_17323;
})();
var statearr_17324_18945 = state_17316__$1;
(statearr_17324_18945[(2)] = null);

(statearr_17324_18945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17317 === (4))){
var inst_17292 = (state_17316[(8)]);
var inst_17292__$1 = (state_17316[(2)]);
var inst_17293 = (inst_17292__$1 == null);
var inst_17294 = cljs.core.not(inst_17293);
var state_17316__$1 = (function (){var statearr_17325 = state_17316;
(statearr_17325[(8)] = inst_17292__$1);

return statearr_17325;
})();
if(inst_17294){
var statearr_17329_18951 = state_17316__$1;
(statearr_17329_18951[(1)] = (5));

} else {
var statearr_17330_18952 = state_17316__$1;
(statearr_17330_18952[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17317 === (6))){
var state_17316__$1 = state_17316;
var statearr_17331_18953 = state_17316__$1;
(statearr_17331_18953[(2)] = null);

(statearr_17331_18953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17317 === (3))){
var inst_17313 = (state_17316[(2)]);
var inst_17314 = cljs.core.async.close_BANG_(out);
var state_17316__$1 = (function (){var statearr_17332 = state_17316;
(statearr_17332[(9)] = inst_17313);

return statearr_17332;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17316__$1,inst_17314);
} else {
if((state_val_17317 === (2))){
var state_17316__$1 = state_17316;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17316__$1,(4),ch);
} else {
if((state_val_17317 === (11))){
var inst_17292 = (state_17316[(8)]);
var inst_17302 = (state_17316[(2)]);
var inst_17288 = inst_17292;
var state_17316__$1 = (function (){var statearr_17333 = state_17316;
(statearr_17333[(10)] = inst_17302);

(statearr_17333[(7)] = inst_17288);

return statearr_17333;
})();
var statearr_17336_18962 = state_17316__$1;
(statearr_17336_18962[(2)] = null);

(statearr_17336_18962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17317 === (9))){
var inst_17292 = (state_17316[(8)]);
var state_17316__$1 = state_17316;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17316__$1,(11),out,inst_17292);
} else {
if((state_val_17317 === (5))){
var inst_17288 = (state_17316[(7)]);
var inst_17292 = (state_17316[(8)]);
var inst_17296 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17292,inst_17288);
var state_17316__$1 = state_17316;
if(inst_17296){
var statearr_17339_18966 = state_17316__$1;
(statearr_17339_18966[(1)] = (8));

} else {
var statearr_17340_18967 = state_17316__$1;
(statearr_17340_18967[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17317 === (10))){
var inst_17305 = (state_17316[(2)]);
var state_17316__$1 = state_17316;
var statearr_17341_18978 = state_17316__$1;
(statearr_17341_18978[(2)] = inst_17305);

(statearr_17341_18978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17317 === (8))){
var inst_17288 = (state_17316[(7)]);
var tmp17338 = inst_17288;
var inst_17288__$1 = tmp17338;
var state_17316__$1 = (function (){var statearr_17342 = state_17316;
(statearr_17342[(7)] = inst_17288__$1);

return statearr_17342;
})();
var statearr_17343_18987 = state_17316__$1;
(statearr_17343_18987[(2)] = null);

(statearr_17343_18987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14105__auto__ = null;
var cljs$core$async$state_machine__14105__auto____0 = (function (){
var statearr_17346 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17346[(0)] = cljs$core$async$state_machine__14105__auto__);

(statearr_17346[(1)] = (1));

return statearr_17346;
});
var cljs$core$async$state_machine__14105__auto____1 = (function (state_17316){
while(true){
var ret_value__14106__auto__ = (function (){try{while(true){
var result__14108__auto__ = switch__14104__auto__(state_17316);
if(cljs.core.keyword_identical_QMARK_(result__14108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14108__auto__;
}
break;
}
}catch (e17348){var ex__14109__auto__ = e17348;
var statearr_17352_18992 = state_17316;
(statearr_17352_18992[(2)] = ex__14109__auto__);


if(cljs.core.seq((state_17316[(4)]))){
var statearr_17353_18993 = state_17316;
(statearr_17353_18993[(1)] = cljs.core.first((state_17316[(4)])));

} else {
throw ex__14109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18994 = state_17316;
state_17316 = G__18994;
continue;
} else {
return ret_value__14106__auto__;
}
break;
}
});
cljs$core$async$state_machine__14105__auto__ = function(state_17316){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14105__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14105__auto____1.call(this,state_17316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14105__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14105__auto____0;
cljs$core$async$state_machine__14105__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14105__auto____1;
return cljs$core$async$state_machine__14105__auto__;
})()
})();
var state__14365__auto__ = (function (){var statearr_17359 = f__14364__auto__();
(statearr_17359[(6)] = c__14363__auto___18937);

return statearr_17359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14365__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17366 = arguments.length;
switch (G__17366) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14363__auto___18996 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14364__auto__ = (function (){var switch__14104__auto__ = (function (state_17413){
var state_val_17417 = (state_17413[(1)]);
if((state_val_17417 === (7))){
var inst_17407 = (state_17413[(2)]);
var state_17413__$1 = state_17413;
var statearr_17422_19000 = state_17413__$1;
(statearr_17422_19000[(2)] = inst_17407);

(statearr_17422_19000[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17417 === (1))){
var inst_17372 = (new Array(n));
var inst_17373 = inst_17372;
var inst_17374 = (0);
var state_17413__$1 = (function (){var statearr_17427 = state_17413;
(statearr_17427[(7)] = inst_17374);

(statearr_17427[(8)] = inst_17373);

return statearr_17427;
})();
var statearr_17428_19001 = state_17413__$1;
(statearr_17428_19001[(2)] = null);

(statearr_17428_19001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17417 === (4))){
var inst_17377 = (state_17413[(9)]);
var inst_17377__$1 = (state_17413[(2)]);
var inst_17378 = (inst_17377__$1 == null);
var inst_17381 = cljs.core.not(inst_17378);
var state_17413__$1 = (function (){var statearr_17429 = state_17413;
(statearr_17429[(9)] = inst_17377__$1);

return statearr_17429;
})();
if(inst_17381){
var statearr_17430_19002 = state_17413__$1;
(statearr_17430_19002[(1)] = (5));

} else {
var statearr_17431_19003 = state_17413__$1;
(statearr_17431_19003[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17417 === (15))){
var inst_17401 = (state_17413[(2)]);
var state_17413__$1 = state_17413;
var statearr_17432_19004 = state_17413__$1;
(statearr_17432_19004[(2)] = inst_17401);

(statearr_17432_19004[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17417 === (13))){
var state_17413__$1 = state_17413;
var statearr_17433_19005 = state_17413__$1;
(statearr_17433_19005[(2)] = null);

(statearr_17433_19005[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17417 === (6))){
var inst_17374 = (state_17413[(7)]);
var inst_17397 = (inst_17374 > (0));
var state_17413__$1 = state_17413;
if(cljs.core.truth_(inst_17397)){
var statearr_17436_19006 = state_17413__$1;
(statearr_17436_19006[(1)] = (12));

} else {
var statearr_17437_19007 = state_17413__$1;
(statearr_17437_19007[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17417 === (3))){
var inst_17409 = (state_17413[(2)]);
var state_17413__$1 = state_17413;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17413__$1,inst_17409);
} else {
if((state_val_17417 === (12))){
var inst_17373 = (state_17413[(8)]);
var inst_17399 = cljs.core.vec(inst_17373);
var state_17413__$1 = state_17413;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17413__$1,(15),out,inst_17399);
} else {
if((state_val_17417 === (2))){
var state_17413__$1 = state_17413;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17413__$1,(4),ch);
} else {
if((state_val_17417 === (11))){
var inst_17391 = (state_17413[(2)]);
var inst_17392 = (new Array(n));
var inst_17373 = inst_17392;
var inst_17374 = (0);
var state_17413__$1 = (function (){var statearr_17438 = state_17413;
(statearr_17438[(7)] = inst_17374);

(statearr_17438[(8)] = inst_17373);

(statearr_17438[(10)] = inst_17391);

return statearr_17438;
})();
var statearr_17439_19025 = state_17413__$1;
(statearr_17439_19025[(2)] = null);

(statearr_17439_19025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17417 === (9))){
var inst_17373 = (state_17413[(8)]);
var inst_17389 = cljs.core.vec(inst_17373);
var state_17413__$1 = state_17413;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17413__$1,(11),out,inst_17389);
} else {
if((state_val_17417 === (5))){
var inst_17374 = (state_17413[(7)]);
var inst_17384 = (state_17413[(11)]);
var inst_17377 = (state_17413[(9)]);
var inst_17373 = (state_17413[(8)]);
var inst_17383 = (inst_17373[inst_17374] = inst_17377);
var inst_17384__$1 = (inst_17374 + (1));
var inst_17385 = (inst_17384__$1 < n);
var state_17413__$1 = (function (){var statearr_17445 = state_17413;
(statearr_17445[(12)] = inst_17383);

(statearr_17445[(11)] = inst_17384__$1);

return statearr_17445;
})();
if(cljs.core.truth_(inst_17385)){
var statearr_17446_19052 = state_17413__$1;
(statearr_17446_19052[(1)] = (8));

} else {
var statearr_17447_19057 = state_17413__$1;
(statearr_17447_19057[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17417 === (14))){
var inst_17404 = (state_17413[(2)]);
var inst_17405 = cljs.core.async.close_BANG_(out);
var state_17413__$1 = (function (){var statearr_17451 = state_17413;
(statearr_17451[(13)] = inst_17404);

return statearr_17451;
})();
var statearr_17452_19067 = state_17413__$1;
(statearr_17452_19067[(2)] = inst_17405);

(statearr_17452_19067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17417 === (10))){
var inst_17395 = (state_17413[(2)]);
var state_17413__$1 = state_17413;
var statearr_17454_19074 = state_17413__$1;
(statearr_17454_19074[(2)] = inst_17395);

(statearr_17454_19074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17417 === (8))){
var inst_17384 = (state_17413[(11)]);
var inst_17373 = (state_17413[(8)]);
var tmp17448 = inst_17373;
var inst_17373__$1 = tmp17448;
var inst_17374 = inst_17384;
var state_17413__$1 = (function (){var statearr_17456 = state_17413;
(statearr_17456[(7)] = inst_17374);

(statearr_17456[(8)] = inst_17373__$1);

return statearr_17456;
})();
var statearr_17457_19087 = state_17413__$1;
(statearr_17457_19087[(2)] = null);

(statearr_17457_19087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14105__auto__ = null;
var cljs$core$async$state_machine__14105__auto____0 = (function (){
var statearr_17463 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17463[(0)] = cljs$core$async$state_machine__14105__auto__);

(statearr_17463[(1)] = (1));

return statearr_17463;
});
var cljs$core$async$state_machine__14105__auto____1 = (function (state_17413){
while(true){
var ret_value__14106__auto__ = (function (){try{while(true){
var result__14108__auto__ = switch__14104__auto__(state_17413);
if(cljs.core.keyword_identical_QMARK_(result__14108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14108__auto__;
}
break;
}
}catch (e17467){var ex__14109__auto__ = e17467;
var statearr_17471_19101 = state_17413;
(statearr_17471_19101[(2)] = ex__14109__auto__);


if(cljs.core.seq((state_17413[(4)]))){
var statearr_17476_19111 = state_17413;
(statearr_17476_19111[(1)] = cljs.core.first((state_17413[(4)])));

} else {
throw ex__14109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19124 = state_17413;
state_17413 = G__19124;
continue;
} else {
return ret_value__14106__auto__;
}
break;
}
});
cljs$core$async$state_machine__14105__auto__ = function(state_17413){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14105__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14105__auto____1.call(this,state_17413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14105__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14105__auto____0;
cljs$core$async$state_machine__14105__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14105__auto____1;
return cljs$core$async$state_machine__14105__auto__;
})()
})();
var state__14365__auto__ = (function (){var statearr_17481 = f__14364__auto__();
(statearr_17481[(6)] = c__14363__auto___18996);

return statearr_17481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14365__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17499 = arguments.length;
switch (G__17499) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14363__auto___19149 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14364__auto__ = (function (){var switch__14104__auto__ = (function (state_17579){
var state_val_17580 = (state_17579[(1)]);
if((state_val_17580 === (7))){
var inst_17575 = (state_17579[(2)]);
var state_17579__$1 = state_17579;
var statearr_17610_19150 = state_17579__$1;
(statearr_17610_19150[(2)] = inst_17575);

(statearr_17610_19150[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17580 === (1))){
var inst_17508 = [];
var inst_17511 = inst_17508;
var inst_17512 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17579__$1 = (function (){var statearr_17613 = state_17579;
(statearr_17613[(7)] = inst_17511);

(statearr_17613[(8)] = inst_17512);

return statearr_17613;
})();
var statearr_17614_19151 = state_17579__$1;
(statearr_17614_19151[(2)] = null);

(statearr_17614_19151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17580 === (4))){
var inst_17517 = (state_17579[(9)]);
var inst_17517__$1 = (state_17579[(2)]);
var inst_17518 = (inst_17517__$1 == null);
var inst_17519 = cljs.core.not(inst_17518);
var state_17579__$1 = (function (){var statearr_17616 = state_17579;
(statearr_17616[(9)] = inst_17517__$1);

return statearr_17616;
})();
if(inst_17519){
var statearr_17617_19160 = state_17579__$1;
(statearr_17617_19160[(1)] = (5));

} else {
var statearr_17618_19161 = state_17579__$1;
(statearr_17618_19161[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17580 === (15))){
var inst_17511 = (state_17579[(7)]);
var inst_17567 = cljs.core.vec(inst_17511);
var state_17579__$1 = state_17579;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17579__$1,(18),out,inst_17567);
} else {
if((state_val_17580 === (13))){
var inst_17556 = (state_17579[(2)]);
var state_17579__$1 = state_17579;
var statearr_17626_19165 = state_17579__$1;
(statearr_17626_19165[(2)] = inst_17556);

(statearr_17626_19165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17580 === (6))){
var inst_17511 = (state_17579[(7)]);
var inst_17558 = inst_17511.length;
var inst_17562 = (inst_17558 > (0));
var state_17579__$1 = state_17579;
if(cljs.core.truth_(inst_17562)){
var statearr_17627_19166 = state_17579__$1;
(statearr_17627_19166[(1)] = (15));

} else {
var statearr_17628_19167 = state_17579__$1;
(statearr_17628_19167[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17580 === (17))){
var inst_17572 = (state_17579[(2)]);
var inst_17573 = cljs.core.async.close_BANG_(out);
var state_17579__$1 = (function (){var statearr_17629 = state_17579;
(statearr_17629[(10)] = inst_17572);

return statearr_17629;
})();
var statearr_17630_19168 = state_17579__$1;
(statearr_17630_19168[(2)] = inst_17573);

(statearr_17630_19168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17580 === (3))){
var inst_17577 = (state_17579[(2)]);
var state_17579__$1 = state_17579;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17579__$1,inst_17577);
} else {
if((state_val_17580 === (12))){
var inst_17511 = (state_17579[(7)]);
var inst_17540 = cljs.core.vec(inst_17511);
var state_17579__$1 = state_17579;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17579__$1,(14),out,inst_17540);
} else {
if((state_val_17580 === (2))){
var state_17579__$1 = state_17579;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17579__$1,(4),ch);
} else {
if((state_val_17580 === (11))){
var inst_17517 = (state_17579[(9)]);
var inst_17511 = (state_17579[(7)]);
var inst_17521 = (state_17579[(11)]);
var inst_17529 = inst_17511.push(inst_17517);
var tmp17631 = inst_17511;
var inst_17511__$1 = tmp17631;
var inst_17512 = inst_17521;
var state_17579__$1 = (function (){var statearr_17632 = state_17579;
(statearr_17632[(12)] = inst_17529);

(statearr_17632[(7)] = inst_17511__$1);

(statearr_17632[(8)] = inst_17512);

return statearr_17632;
})();
var statearr_17633_19191 = state_17579__$1;
(statearr_17633_19191[(2)] = null);

(statearr_17633_19191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17580 === (9))){
var inst_17512 = (state_17579[(8)]);
var inst_17525 = cljs.core.keyword_identical_QMARK_(inst_17512,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_17579__$1 = state_17579;
var statearr_17634_19194 = state_17579__$1;
(statearr_17634_19194[(2)] = inst_17525);

(statearr_17634_19194[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17580 === (5))){
var inst_17517 = (state_17579[(9)]);
var inst_17522 = (state_17579[(13)]);
var inst_17521 = (state_17579[(11)]);
var inst_17512 = (state_17579[(8)]);
var inst_17521__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17517) : f.call(null,inst_17517));
var inst_17522__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17521__$1,inst_17512);
var state_17579__$1 = (function (){var statearr_17635 = state_17579;
(statearr_17635[(13)] = inst_17522__$1);

(statearr_17635[(11)] = inst_17521__$1);

return statearr_17635;
})();
if(inst_17522__$1){
var statearr_17636_19204 = state_17579__$1;
(statearr_17636_19204[(1)] = (8));

} else {
var statearr_17637_19208 = state_17579__$1;
(statearr_17637_19208[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17580 === (14))){
var inst_17517 = (state_17579[(9)]);
var inst_17521 = (state_17579[(11)]);
var inst_17542 = (state_17579[(2)]);
var inst_17549 = [];
var inst_17550 = inst_17549.push(inst_17517);
var inst_17511 = inst_17549;
var inst_17512 = inst_17521;
var state_17579__$1 = (function (){var statearr_17639 = state_17579;
(statearr_17639[(14)] = inst_17550);

(statearr_17639[(15)] = inst_17542);

(statearr_17639[(7)] = inst_17511);

(statearr_17639[(8)] = inst_17512);

return statearr_17639;
})();
var statearr_17640_19214 = state_17579__$1;
(statearr_17640_19214[(2)] = null);

(statearr_17640_19214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17580 === (16))){
var state_17579__$1 = state_17579;
var statearr_17641_19216 = state_17579__$1;
(statearr_17641_19216[(2)] = null);

(statearr_17641_19216[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17580 === (10))){
var inst_17527 = (state_17579[(2)]);
var state_17579__$1 = state_17579;
if(cljs.core.truth_(inst_17527)){
var statearr_17642_19219 = state_17579__$1;
(statearr_17642_19219[(1)] = (11));

} else {
var statearr_17643_19220 = state_17579__$1;
(statearr_17643_19220[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17580 === (18))){
var inst_17569 = (state_17579[(2)]);
var state_17579__$1 = state_17579;
var statearr_17644_19223 = state_17579__$1;
(statearr_17644_19223[(2)] = inst_17569);

(statearr_17644_19223[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17580 === (8))){
var inst_17522 = (state_17579[(13)]);
var state_17579__$1 = state_17579;
var statearr_17645_19224 = state_17579__$1;
(statearr_17645_19224[(2)] = inst_17522);

(statearr_17645_19224[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14105__auto__ = null;
var cljs$core$async$state_machine__14105__auto____0 = (function (){
var statearr_17646 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17646[(0)] = cljs$core$async$state_machine__14105__auto__);

(statearr_17646[(1)] = (1));

return statearr_17646;
});
var cljs$core$async$state_machine__14105__auto____1 = (function (state_17579){
while(true){
var ret_value__14106__auto__ = (function (){try{while(true){
var result__14108__auto__ = switch__14104__auto__(state_17579);
if(cljs.core.keyword_identical_QMARK_(result__14108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14108__auto__;
}
break;
}
}catch (e17647){var ex__14109__auto__ = e17647;
var statearr_17648_19241 = state_17579;
(statearr_17648_19241[(2)] = ex__14109__auto__);


if(cljs.core.seq((state_17579[(4)]))){
var statearr_17649_19242 = state_17579;
(statearr_17649_19242[(1)] = cljs.core.first((state_17579[(4)])));

} else {
throw ex__14109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19243 = state_17579;
state_17579 = G__19243;
continue;
} else {
return ret_value__14106__auto__;
}
break;
}
});
cljs$core$async$state_machine__14105__auto__ = function(state_17579){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14105__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14105__auto____1.call(this,state_17579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14105__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14105__auto____0;
cljs$core$async$state_machine__14105__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14105__auto____1;
return cljs$core$async$state_machine__14105__auto__;
})()
})();
var state__14365__auto__ = (function (){var statearr_17650 = f__14364__auto__();
(statearr_17650[(6)] = c__14363__auto___19149);

return statearr_17650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14365__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
