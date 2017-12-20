// JavaScript source code

    var feed = new Instafeed({
        get: 'user',
        userId: 3105106421,
        accessToken: '3105106421.54da896.06609da5522f464cbba1b7e4ed683b01',
        target: 'instagram',
        resolution: 'standard_resolution',
        after: function () {
            var el = document.getElementById('instagram');
            if (el.classList)
                el.classList.add('show');
            else
                el.className += ' ' + 'show';
        }
    });

window.onload = function () {
    feed.run();

        
};
    
