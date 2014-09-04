<?php

namespace Yitznewton\Dojo;

class PrimeFactorsTest extends \PHPUnit_Framework_TestCase
{
    public function testPrimeFactors()
    {
        $this->assertInternalType('array', prime_factors(1));
        $this->assertEmpty(prime_factors(1));
        $this->assertPrimeFactors([2], 2);
        $this->assertPrimeFactors([3], 3);
        $this->assertPrimeFactors([2, 2], 4);
        $this->assertPrimeFactors([2, 3], 6);
        $this->assertPrimeFactors([2, 2, 2], 8);
        $this->assertPrimeFactors([3, 3], 9);
        $this->assertPrimeFactors(
            [2, 2, 3, 5, 11, 11, 17],
            2 * 2 * 3 * 5 * 11 * 11 * 17
        );
    }

    private function assertPrimeFactors($factors, $number)
    {
        $this->assertEquals($factors, prime_factors($number));
    }
}

function prime_factors($number)
{
    $factors = [];

    for ($divisor = 2; $number > 1; $divisor++) {
        for (; $number % $divisor === 0; $number /= $divisor) {
            $factors[] = $divisor;
        }
    }

    return $factors;
}
