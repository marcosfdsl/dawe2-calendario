class LiteYTEmbed extends HTMLElement {
    connectedCallback() {
        this.videoId = this.getAttribute('videoid');

        let playBtnEl = this.querySelector('.lty-playbtn');

        this.playLabel = (playBtnEl && playBtnEl.textContent.trim()) || this.getAttribute('playlabel') || 'Play';

        if (!this.style.backgroundImage) {
            this.style.backgroundImage = `url("${this.id}")`;
            this.style.backgroundRepeat = 'no-repeat';
            this.style.backgroundSize = 'contain';
            this.style.cursor = 'pointer';
        }

        this.addEventListener('pointerover', LiteYTEmbed.warmConnections, { once: true });

        this.addEventListener('click', this.addIframe);
    }

    static addPrefetch(kind, url, as) {
        const linkEl = document.createElement('link');
        linkEl.rel = kind;
        linkEl.href = url;
        if (as) {
            linkEl.as = as;
        }
        document.head.append(linkEl);
    }

    static warmConnections() {
        if (LiteYTEmbed.preconnected) return;

        // The iframe document and most of its subresources come right off youtube.com
        LiteYTEmbed.addPrefetch('preconnect', 'https://www.youtube-nocookie.com');
        // The botguard script is fetched off from google.com
        LiteYTEmbed.addPrefetch('preconnect', 'https://www.google.com');

        // Not certain if these ad related domains are in the critical path. Could verify with domain-specific throttling.
        LiteYTEmbed.addPrefetch('preconnect', 'https://googleads.g.doubleclick.net');
        LiteYTEmbed.addPrefetch('preconnect', 'https://static.doubleclick.net');

        LiteYTEmbed.preconnected = true;
    }

    fetchYTPlayerApi() {
        if (window.YT || (window.YT && window.YT.Player)) return;

        this.ytApiPromise = new Promise((res, rej) => {
            var el = document.createElement('script');
            el.src = 'https://www.youtube.com/iframe_api';
            el.async = true;
            el.onload = _ => {
                YT.ready(res);
            };
            el.onerror = rej;
            this.append(el);
        });
    }

    async addYTPlayerIframe(params) {
        this.fetchYTPlayerApi();
        await this.ytApiPromise;

        const videoPlaceholderEl = document.createElement('div')
        this.append(videoPlaceholderEl);

        const paramsObj = Object.fromEntries(params.entries());

        var width = document.querySelector(".video").offsetWidth;
        var height = width / (16 / 9);

        new YT.Player(videoPlaceholderEl, {
            width: `${width}`,
            height: `${height}`,
            videoId: this.videoId,
            playerVars: paramsObj,
            events: {
                'onReady': event => {
                    event.target.playVideo();
                }
            }
        });
    }

    async addIframe() {
        if (this.classList.contains('lyt-activated')) return;
        this.classList.add('lyt-activated');

        const params = new URLSearchParams(this.getAttribute('params') || []);
        params.append('autoplay', '1');
        params.append('playsinline', '1');

        if (this.needsYTApiForAutoplay) {
            return this.addYTPlayerIframe(params);
        }

        var width = document.querySelector(".video").offsetWidth;
        var height = width / (16 / 9);
        const iframeEl = document.createElement('iframe');
        iframeEl.style = `width: ${width}px; height: ${height}px;`;
        // No encoding necessary as [title] is safe. https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html#:~:text=Safe%20HTML%20Attributes%20include
        iframeEl.title = this.playLabel;
        iframeEl.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
        iframeEl.allowFullscreen = true;
        // AFAIK, the encoding here isn't necessary for XSS, but we'll do it only because this is a URL
        // https://stackoverflow.com/q/64959723/89484
        iframeEl.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(this.videoId)}?${params.toString()}`;
        this.append(iframeEl);

        // Set focus for a11y
        iframeEl.focus();
    }
}

customElements.define('lite-youtube', LiteYTEmbed);
