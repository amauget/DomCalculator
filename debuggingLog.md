

DEBUGGING LOG:

04/05/24
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


04/06/2024

-2+3+ is being sent to calculate() and returning NaN..

operators that are entered via keyboard aren't being recognized the same as buttons, so adding isn't compounding, for example: 2+2+2+2 is allowed
+++ is also allowed for example.

* doesn't alternate to any other operators, however backspace funct intact.

keyboard char "/" not recognized because button.txtContent === '÷'

5/- calling calculate()
Subtraction allowed once following * or / regardless of index. 2*-3 should be allowed, 2*3-2 should NOT

04/07/2024

if *- is entered, '-' can be altered to any operator if not deleted. Either freeze value until backspace or delete both and replace w/ new
operator

04/08/2024
All operators all allow @ index 0 instead of only allowing '-'

if operation is in last index and equal is pressed, calc() runs and returns NaN.

if first index is negative, first index is not floatType, then -3*- triggers calc() if first index is float, 
operation works fine and calculates -3*-6 when an operator or equal is pressed following the 6.
THIS^^^ is realtated to 2nd '-' triggering calc(). Add conditional to ommit first index.
