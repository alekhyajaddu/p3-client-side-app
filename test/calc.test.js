QUnit.module('MAIN MODULE', {})  

QUnit.test('TEST', assert => {
    assert.expect(0);
    function temperatureConverter(valNum) {
        return (valNum-32) / 1.8;
    } 
    
    QUnit.test( "Test", function( assert ) {
       var result = temperatureConverter(2);
       assert.equal( result, "-16.666666666666668", "2 fahrenheit should be -16.666666666666668 celcius." );
    });
    QUnit.test( "Test", function( assert ) {
       var result = temperatureConverter(70);
       assert.equal( result, "21.11111111111111", "70 fahrenheit should be  21.11111111111111 celcius." );
    });
    QUnit.test( "Test", function( assert ) {
       var result = temperatureConverter(5);
       assert.equal( result, "-15", "5 fahrenheit should be -15 celcius." );
    });
    QUnit.test( "Test", function( assert ) {
       var result = temperatureConverter(100);
       assert.equal( result, "37.77777777777778", "100 fahrenheit should be 37.77777777777778 celcius." );
    });

    QUnit.test( "Test", function( assert ) {
        var result = temperatureConverter(46);
        assert.equal( result, "7.777777777777778", "46 fahrenheit should be 7.777777777777778 celcius." );
     });
     
})

