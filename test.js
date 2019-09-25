/**
 * Check if content already exists.
 * https://developer.enonic.com/docs/xp/stable/api/lib-content#create
 */ 
try {
    var result2 = contentLib.create({
        name: 'mycontent',
        parentPath: '/a/b',
        displayName: 'My Content',
        contentType: 'test:myContentType',
        data: {}
    });
    log.info('Content created with id ' + result2._id);
} catch (e) {
    if (e.code == 'contentAlreadyExists') {
        log.error('There is already a content with that name'
    } else {
        log.error('Unexpected error: ' + e.message);
    }
}