    var Ziggy = {
        namedRoutes: {"admin.dashboard":{"uri":"admin","methods":["GET","HEAD"],"domain":null,"bindings":[]}},
        baseUrl: 'http://myapp.com/',
        baseProtocol: 'http',
        baseDomain: 'myapp.com',
        basePort: false,
        defaultParameters: []
    };

    if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
        for (var name in window.Ziggy.namedRoutes) {
            Ziggy.namedRoutes[name] = window.Ziggy.namedRoutes[name];
        }
    }

    export {
        Ziggy
    }