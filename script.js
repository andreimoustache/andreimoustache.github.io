(() => {

    const loadGA = () => {
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-3938207-9', { 'anonymize_ip': true });
    };

    loadGA();
})();
