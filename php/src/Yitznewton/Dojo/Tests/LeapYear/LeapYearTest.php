<?php

namespace Yitznewton\Dojo\Tests;

class LeapYearTest extends \PHPUnit_Framework_TestCase
{
    public function testTypicalOddYear()
    {
        $this->assertFalse(is_leap_year(1901));
    }

    public function testTypicalLeapYear()
    {
        $this->assertTrue(is_leap_year(1996));
    }

    public function testDivBy100NonLeapYear()
    {
        $this->assertFalse(is_leap_year(1900));
    }

    public function testDivBy400NonLeapYear()
    {
        $this->assertTrue(is_leap_year(2000));
    }
}

function is_leap_year($year)
{
    if ($year % 400 === 0) {
        return true;
    } elseif ($year % 100 === 0) {
        return false;
    } elseif ($year % 4 === 0) {
        return true;
    } else {
        return false;
    }
}
