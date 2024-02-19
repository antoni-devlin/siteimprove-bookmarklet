function () {
    let b = window.location.href,
        c = window.location.pathname;
    if (b.includes("gov.uk")) location = "https://my2.siteimprove.com/QualityAssurance/1112165/Overview/Search?SearchIn=Url&Query=" + c.replace(/\//g, "%2F");
    else {
        let a = prompt("Enter a url to search for in siteimprove:\r\ne.g. %27/contact-dfe%27", "").replace(/\//g, "%2F");
        a && (location = "https://my2.siteimprove.com/QualityAssurance/1112165/Overview/Search?SearchIn=Url&Query=" + escape(a));
    }
};

