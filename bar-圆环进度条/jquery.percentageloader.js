(function(a) {
    "use strict";
    var b = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAYAAACAvzbMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzVEODg0Rjk1ODc4MTFFNjk5Q0VDOTNDQzJBM0E2NjgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzVEODg0RkE1ODc4MTFFNjk5Q0VDOTNDQzJBM0E2NjgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDNUQ4ODRGNzU4NzgxMUU2OTlDRUM5M0NDMkEzQTY2OCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDNUQ4ODRGODU4NzgxMUU2OTlDRUM5M0NDMkEzQTY2OCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuGxspUAABtTSURBVHja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",
        c = new Image;
    c.src = b;
    a.fn.percentageLoader = function(b) {
        var d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H;
        d = {
            width: 256,
            height: 256,
            progress: 0,
            value: "0kb"
        };
        if (b !== undefined) {
            a.extend(d, b)
        }
        H = document.createElement("div");
        H.style.width = d.width + "px";
        H.style.height = d.height + "px";
        H.style.position = "relative";
        a(this).append(H);
        e = document.createElement("canvas");
        e.setAttribute("width", d.width);
        e.setAttribute("height", d.height);
        H.appendChild(e);
        f = document.createElement("div");
        f.style.width = d.width.toString() - 2 + "px";
        f.style.textAlign = "center";
        f.style.height = "50px";
        f.style.left = 0;
        f.style.position = "absolute";
        g = document.createElement("div");
        g.style.width = (d.width - 2).toString() + "px";
        g.style.textAlign = "center";
        g.style.height = "0px";
        g.style.overflow = "hidden";
        g.style.left = 0;
        g.style.position = "absolute";
        h = [g, f];
        for (i = 0; i < h.length; i += 1) {
            j = h[i];
            k = ["-webkit-user-select", "-khtml-user-select", "-moz-user-select", "-o-user-select", "user-select"];
            for (l = 0; l < k.length; l += 1) {
                a(j).css(k[l], "none")
            }
        }
        H.appendChild(f);
        H.appendChild(g);
        m = e.getContext("2d");
        p = e.width / 2 - 1;
        q = e.height / 2 - 1;
        r = m.createLinearGradient(p, 0, p, e.height);
        //r.addColorStop(0, "#d6eeff");
        //r.addColorStop(1, "#b6d8f0");
        s = m.createLinearGradient(p, p * .133333, p, e.height - p * .133333);
        // s.addColorStop(0, "#f9fcfe");
        // s.addColorStop(1, "#d9ebf7");
        t = m.createLinearGradient(p, 0, p, e.height);
        t.addColorStop(0, "#c1dff4");
        t.addColorStop(1, "#aacee6");
        u = p * .6666;
        x = p - 2;
        v = u + p * .06;
        w = x - p * .06;
        y = 2.1707963267949;
        z = .9707963267949 + Math.PI * 2;
        A = false;
        m.lineWidth = 1;
        E = function(a, b, c) {
            return {
                x: a.x + Math.cos(b) * c,
                y: a.y + Math.sin(b) * c
            }
        };
        F = function() {
            function a(a, b) {
                var c, d, e, f, g, h, i, j;
                c = {
                    x: p,
                    y: q
                };
                d = E(c, a, v);
                m.moveTo(d.x, d.y);
                i = E(c, b, v);
                j = E(c, b, w);
                e = b + 3.142 / 2;
                f = p * .2 - 4;
                g = E(i, e, f);
                h = E(j, e, f);
                m.arc(p, q, v, a, b, false);
                m.bezierCurveTo(g.x, g.y, h.x, h.y, j.x, j.y);
                m.arc(p, q, w, b, a, true);
                i = E(c, a, v);
                j = E(c, a, w);
                e = a - 3.142 / 2;
                g = E(j, e, f);
                h = E(i, e, f);
                m.bezierCurveTo(g.x, g.y, h.x, h.y, i.x, i.y)
            }
            m.clearRect(0, 0, e.width, e.height);
            m.fillStyle = r;

            m.beginPath();
            m.strokeStyle = "#fff";
            m.arc(p, q, x, 0, Math.PI * 2, A);
            m.fill();
            m.stroke();
            m.fillStyle = s;

            m.beginPath();
            m.arc(p, q, u, 0, Math.PI * 2, A);
            m.fill();
            m.strokeStyle = "#fff";
            m.stroke();
            m.beginPath();
            m.beginPath();
            m.strokeStyle = "#fff";
            a(y, z);
            m.fillStyle = t;
            m.fill();
            m.stroke();
            B = y + n * (z - y);
            m.beginPath();
            a(y, B);
            m.save();
            m.clip();
            m.drawImage(c, 0, 0, e.width, e.height);
            m.restore();
            m.beginPath();
            a(y, B);
            m.stroke();
            (function() {
                var a, b, c, e;
                a = p / 2;
                f.style.top = (d.height / 2 - a / 2).toString() + "px";
                f.style.color = "#80a9c8";
                f.style.font = a.toString() + "px BebasNeueRegular";
                f.style.textShadow = "0 1px 1px #FFFFFF";
                b = (n * 100).toFixed(0) + "%";
                f.innerHTML = b;
                c = p / 5.5;
                g.style.color = "#80a9c8";
                g.style.font = c.toString() + "px BebasNeueRegular";
                g.style.height = c.toString() + "px";
                g.style.textShadow = "None";
                e = d.height * .16666666 - c;
                g.style.top = (d.height * .8333333 + e / 4).toString() + "px"
            })()
        };
        G = function() {
            if (n < 0) {
                n = 0
            }
            if (n > 1) {
                n = 1
            }
        };
        C = function(a) {
            n = a;
            G();
            F()
        };
        this.setProgress = C;
        D = function(a) {
            o = a;
            g.innerHTML = o
        };
        this.setValue = D;
        this.setValue(d.value);
        n = d.progress;
        G();
        F();
        if (b.controllable === true) {
            (function() {
                var c, d, e;
                d = function(a, b) {
                    return Math.sqrt(Math.pow(a - p, 2) + Math.pow(b - q, 2))
                };
                c = false;
                e = function(a, c) {
                    var d, e, f, g, h, i;
                    d = a - p;
                    e = c - q;
                    f = Math.atan2(e, d);
                    if (f > Math.PI / 2) {
                        f -= Math.PI * 2
                    }
                    g = y - Math.PI * 2;
                    h = z - y;
                    i = (f - g) / h;
                    C(i);
                    if (b.onProgressUpdate) {
                        b.onProgressUpdate(n)
                    }
                };
                a(H).mousedown(function(b) {
                    var f, g, h, i;
                    f = a(this).offset();
                    g = b.pageX - f.left;
                    h = b.pageY - f.top;
                    i = d(g, h);
                    if (i > u && i < x) {
                        c = true;
                        e(g, h)
                    }
                }).mouseup(function() {
                    c = false
                }).mousemove(function(b) {
                    var d, f, g;
                    if (c) {
                        d = a(H).offset();
                        f = b.pageX - d.left;
                        g = b.pageY - d.top;
                        e(f, g)
                    }
                }).mouseleave(function() {
                    c = false
                })
            })()
        }
        return this
    }
})(jQuery)