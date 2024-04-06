


			KNOWN BUGS & PROBLEMS:


Subtraction allowed following * or / ex. 2*3-2

* doesn't alternate to any other operators, however backspace funct intact.

if *- is entered, '-' can be altered to any operator if not deleted. Either freeze value until backspace or delete both and replace w/ new
 operator







DEBUGGING LOG:

decimal without a leading zero isn't treated as a number.

Array isn't renewing when equal button is pressed.

Enable the backspace key to delete single output character, except for previous answers, which should delete entirely.

Find handler to allow first number to be negative.

negative value can't be added after multiply or divide such as (3 * -2)

conditional for making first value negative is disabling subtraction all together.

stand alone negative values aren't calculated when pressing equal

operation not triggering answer when second operator, other than '-' at array[0] or '-' after * / is pressed

answer output allows numbers to be typed into answer. IE. 2+2 => 4 (type 2) => 42

disengage event equal if final index is an operator.

operation triggers calculation if an operator already exists, except for the minus sign. This is due to the dual usage for negative and minus

+- entry results in NaN

-2+3+ is being sent to calculate() and returning NaN..

operators that are entered via keyboard aren't being recognized the same as buttons, so adding isn't compounding, for example: 2+2+2+2 is allowed
+++ is also allowed for example.

keyboard char "/" not recognized because button.txtContent === '÷'