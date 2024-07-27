console.log('!!!!!!Test Started here');

try {
    console.log(result);

} catch (error) {
    console.log('An errror has accured during the runtime' + error);
    console.log('');
    console.log('An errror has accured during the runtime', error);
}finally{
    console.log("");
    console.log("");
    console.log("");
    console.log('!!!!!!!Error Handalling has completed');
}

console.log("Test ended here");

console.log('------------------------');

console.log('New test started here !!! ->>>>');

throw new Error('Throwing new error because something went wrong in the test')

console.log('Test is completed here ->>>>>>');

