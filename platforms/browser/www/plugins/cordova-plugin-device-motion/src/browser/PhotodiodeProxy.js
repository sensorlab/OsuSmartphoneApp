cordova.define("cordova-plugin-device-motion.PhotodiodeProxy", function(require, exports, module) { /*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/


function listener(success) {
    var light = {};

    light.x = (Math.round(((Math.random() * 2) - 1) * 100) / 100);
    light.timestamp = new Date().getTime();

    success(light);

    window.removeEventListener('devicemotion', listener, false);
}

var Photodiode = {
    start: function start(success, error) {
        return window.addEventListener('devicemotion', function(){
            listener(success);
        }, false);
    }
};

module.exports = Photodiode;
require('cordova/exec/proxy').add('Photodiode', Photodiode);

});
