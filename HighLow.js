function highAndLow(numbers){
    numbers = numbers.split(" ");
        return Math.max.apply(null, numbers) + " " +  Math.min.apply(null, numbers)
};

Test.assertEquals(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214");