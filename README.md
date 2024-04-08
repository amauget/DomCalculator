Future self and/or third party viewers:
Forgive the structure of this program. The biggest lesson of this program was to spend significantly more time designing and understanding what I want before implementing. Breaking into seperate arrays early on would save much more time, and likely allow for more complex entries that include parenthesis. I will return to implement a more reasonable structure, but will not delete this project!

# DomCalculator
See debugLog to reference actions taken.

Calculator Functions:
Fully functional keyboard use.

"-" functions as a negative and subtraction operator. if it is applied first thing, it'll treat 
the first value as negative. The same applies after "*" or "/", if those operators are precluded by a numberical value.

if '-' is pressed and '+' is present as the last item, '-' will replace '+'

'-' is the only permitted initial operator.

Arithmetic triggers when second operator is pressed, for example, 2*2- will output 4- and await further entry. However, there are exceptions for '-' when it is taking the form of negative. So, 2-2- will output 0-, whereas -2*-5 will not trigger until another operator is entered.

Clear button and backspace enabled.

Answer outputs do not allow for additional numbers to be typed. ex. 3*300 = 900 => 9001234 not allowed.
