(() => {

    const loadGA = () => {
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-3938207-9', { 'anonymize_ip': true });
    };

    const isDNTEnabled = (
        window.doNotTrack == "1" || 
        navigator.doNotTrack == "yes" || 
        navigator.doNotTrack == "1" || 
        navigator.msDoNotTrack == "1" || 
        ('msTrackingProtectionEnabled' in window.external && window.external.msTrackingProtectionEnabled())
    );
    
    if (!isDNTEnabled) {
        loadGA();
    }

})();
