function FindProxyForURL(url, host) {
    /*
    chrome://net-internals/proxyservice.config#proxy
    chrome://settings/searchEngines
    */

    /* requires vpn */
    if (shExpMatch(host, "(*.hq.k.grp|10.40.*|10.36.*|*.ks.net|6.*|*.kudelskisecurity.local|*.ksnet.nagra.com|*.cyberfusion.center)")){    
        return "PROXY 127.0.0.1:22444";
    }
    return "DIRECT";  
}
