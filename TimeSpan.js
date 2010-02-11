﻿/*!
* JavaScript TimeSpan Library
*
* Copyright (c) 2010 Michael Stum, http://www.Stum.de/
* 
* Permission is hereby granted, free of charge, to any person obtaining
* a copy of this software and associated documentation files (the
* "Software"), to deal in the Software without restriction, including
* without limitation the rights to use, copy, modify, merge, publish,
* distribute, sublicense, and/or sell copies of the Software, and to
* permit persons to whom the Software is furnished to do so, subject to
* the following conditions:
* 
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
* MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
* LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
* OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
* WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

(function() {

    var TimeSpan = window.TimeSpan =
    {
        FromSeconds: function(seconds) {
            var newTS = new TimeSpan(0);
            newTS.AddSeconds(seconds);
            return newTS;
        }
    }

    function(initialMilliseconds) {
        return new TimeSpan.init(initialMilliseconds);
    };



    TimeSpan = TimeSpan.prototype = {
        init: function(initialMilliseconds) {
            if (initialMilliseconds && initialMilliseconds > 0) Milliseconds = initialMilliseconds;
            return this;
        },
        version: "0.0.2",
        Milliseconds: 0,
        Add: function(otherTimeSpan) {
        },
        AddMilliseconds: function(milliseconds) {
        },
        AddSeconds: function(seconds) {
            this.Milliseconds = this.Milliseconds + (seconds * 1000);
        },
        AddMinutes: function(minutes) {
        },
        AddHours: function(hours) {
        },
        AddDays: function(days) {
        },
        AddYears: function(years) {
        }
    };

    TimeSpan.init.prototype = TimeSpan;

})();