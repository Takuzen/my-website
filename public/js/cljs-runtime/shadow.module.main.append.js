
shadow.cljs.devtools.client.env.module_loaded('main');

try { site.core.init(); } catch (e) { console.error("An error occurred when calling (site.core/init)"); console.error(e); }