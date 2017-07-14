'use strict';

describe('fizzBuzzWhizz', () => {


  it('not the times of 1,3,5,and contain "3",return fizz' ,()=> {
    var num=13;
    var actualResult=fizzBuzzWhizz(num);
    var expectResult="fizz";
    expect(actualResult).toEqual(expectResult);
  });
    it('times of "5" or "7" or "3" and contain "3",return fizz' ,()=> {
        var num=35;
        var actualResult=fizzBuzzWhizz(num);
        var expectResult="fizz";
        expect(actualResult).toEqual(expectResult);
    });

    it('only times of "3"and not contain "3",return fizz' ,()=> {
        var num=66;
        var actualResult=fizzBuzzWhizz(num);
        var expectResult="fizz";
        expect(actualResult).toEqual(expectResult);
    });
    it('only times of "5"and not contain "3",return buzz' ,()=> {
        var num=20;
        var actualResult=fizzBuzzWhizz(num);
        var expectResult="buzz";
        expect(actualResult).toEqual(expectResult);
    });
    it('only times of "7"and not contain "3",return whizz' ,()=> {
        var num=28;
        var actualResult=fizzBuzzWhizz(num);
        var expectResult="whizz";
        expect(actualResult).toEqual(expectResult);
    });
    it('times of "3" and "5" not "7"and not contain "3",return fizzbuzz' ,()=> {
        var num=15;
        var actualResult=fizzBuzzWhizz(num);
        var expectResult="fizzbuzz";
        expect(actualResult).toEqual(expectResult);
    });
    it('times of "3" and "7" not "5"and not contain "3",return fizzwhizz' ,()=> {
        var num=21;
        var actualResult=fizzBuzzWhizz(num);
        var expectResult="fizzwhizz";
        expect(actualResult).toEqual(expectResult);
    });
    it('times of "5" and "7" not "3"and not contain "3",return buzzwhizz' ,()=> {
        var num=70;
        var actualResult=fizzBuzzWhizz(num);
        var expectResult="buzzwhizz";
        expect(actualResult).toEqual(expectResult);
    });
    it('times of "5" and "7" and "3"and not contain "3",return fizzbuzzwhizz' ,()=> {
        var num=105;
        var actualResult=fizzBuzzWhizz(num);
        var expectResult="fizzbuzzwhizz";
        expect(actualResult).toEqual(expectResult);
    });

    it('not the times of "5" and "7" and "3"and not contain "3",return num' ,()=> {
        var num=44;
        var actualResult=fizzBuzzWhizz(num);
        var expectResult=44;
        expect(actualResult).toEqual(expectResult);
    });
    it('not the times of "5" and "7" and "3" and not contain "3" ,return num' ,()=> {
        var num=44;
        var actualResult=fizzBuzzWhizz(num);
        var expectResult=44;
        expect(actualResult).toEqual(expectResult);
    });






});
