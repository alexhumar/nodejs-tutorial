'use strict';

var FilesizeWatcher = require('../src/FilesizeWatcher');

var exec = require('child_process').exec;

describe('FilesizeWatcher', function(){
    var watcher;

    afterEach(function(){
        watcher.stop();
    });

    /* La funcion done es un callback que es pasado como parametro de un bloque
    it por Jasmine. Se utiliza para notificarle cuando termina dicho bloque, en
    el caso de que se trabaje con codigo asincronico. */
    it('should fire a "grew" event when the file grew in size', function(done){
        var path = '/var/tmp/filesizewatcher.test';

        exec('rm -f ' + path + ' ; touch ' + path, function(){
            
            watcher = new FilesizeWatcher(path);

            watcher.on('grew', function(gain){
                expect(gain).toBe(5);
                done();
            });
        
            exec ('echo "text" > ' + path, function(){});
        });
    });

    it('should fire a "shrank" event when the file shrank in size', function(done){
        var path = '/var/tmp/filesizewatcher.test';

        exec('rm -f ' + path + ' ; echo "test" > ' + path, function(){
            
            watcher = new FilesizeWatcher(path);

            watcher.on('shrank', function(loss){
                expect(loss).toBe(3);
                done();
            });

            exec('echo "a" > ' + path, function(){});
        });
    });

    it('should fire "error" if path does not start with a slash', function(done){
        var path = 'var/tmp/filesizewatcher.test';

        watcher = new FilesizeWatcher(path);

        watcher.on('error', function(err){
            expect(err).toBe('Path does not start with a slash');
            done();
        });
    });
});