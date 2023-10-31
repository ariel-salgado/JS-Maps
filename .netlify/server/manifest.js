export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.8d3378a8.js","app":"_app/immutable/entry/app.84abb282.js","imports":["_app/immutable/entry/start.8d3378a8.js","_app/immutable/chunks/scheduler.cc1c0861.js","_app/immutable/chunks/singletons.c37f4062.js","_app/immutable/entry/app.84abb282.js","_app/immutable/chunks/scheduler.cc1c0861.js","_app/immutable/chunks/index.237a36af.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
