interface RandomNumberType {
  value: number;
}
// ➤ Kini nga interface nag-declare og base structure na naa'y 'value' nga number type.
//    Maoy common sa tanan types (positive, negative, zero).

type PositiveNumber = RandomNumberType & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
}
// ➤ Kini para lang sa mga positive numbers.
//    'isPositive' dapat boolean (true), pero gi-restrict nato ang uban
//    nga flags (isNegative, isZero) gamit ang type 'never' para dili sila magamit
//    kung positive ang number.

type NegativeNumber = RandomNumberType & {
  isNegative: boolean;
  isPositive?: never;
  isZero?: never;
}
// ➤ Same logic ra sa taas, pero para lang ni sa negative numbers.
//    Kung 'isNegative' ang gigamit, dili pwede gamiton ang isPositive ug isZero
//    kay 'never' ilang type (meaning, di pwede i-assign).

type Zero = RandomNumberType & {
  isZero: boolean;
  isPositive?: never;
  isNegative?: never;
}
// ➤ Para lang ni siya sa zero nga value.
//    Kung gigamit ang 'isZero', dapat wala gyud ang 'isPositive' ug 'isNegative'.
//    Mao na nga 'never' ang ilang type para mo-error kung gamiton sila.

type RandomNumberProps = PositiveNumber | NegativeNumber | Zero
// ➤ Gihimo nato og union type nga RandomNumberProps aron ang prop sa component
//    mahimo lang usa sa tulo: PositiveNumber, NegativeNumber, o Zero.
//    Mao ni ang paagi sa pag-"restrict" og props depende sa ilang klase.

function RandomNumber(props: RandomNumberProps) {
  return (
    <>
      <div>
        {props.value}, 
        {props.isNegative && "Negative"}, 
        {props.isPositive && "Positive"}, 
        {props.isZero && "Zero"}
      </div>
    </>
  )
}
// ➤ Sa display, depende kung unsay naa nga true sa props, mao ra ang mogawas.
//    Sa tanang cases, gi-check nato kung naa ba'y 'isPositive', 'isNegative', or 'isZero' nga true.

export default RandomNumber;
